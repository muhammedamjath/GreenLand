import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  constructor(
    private userService: clientService,
    private formBuilder: FormBuilder,
    private router: Router,
    private chatService: ChatService,
    private elRef: ElementRef
  ) {}

  profileChangeForm!: FormGroup;
  previewImageSrc: string = '';
  userData: any;
  unreadMessageCount: number = 0;
  messages: any[] = [];
  
  imageFile: any = null;
  showChangeProfileModal: boolean = false;
  buttonDisabled: boolean = false;
  showNotification: boolean = false;
  logoutDiv: boolean = false;
  showChat: boolean = false;
  filter:boolean = false
  
  @Output() changeState: EventEmitter<boolean> = new EventEmitter <boolean>()

  changeStateOfTheFilter (){
    this.filter = !this.filter    
    this.changeState.emit(this.filter)
  }

  ngOnInit() {
    this.userService.getUser().subscribe(
      (res) => {
        this.userData = res.userData;
        this.userService.userData = res.userData;
        this.messages = res.messages;
        const messages: any[] = res.messages;
        messages.forEach((data) => {
          if (data.status == 'unread') {
            this.unreadMessageCount++;
          }
        });
      },
      (err) => {
        console.log('the errr is :', err);
        if (err.error == 'Invalid token') {
        }
        localStorage.removeItem('token');
        localStorage.removeItem('category');
        this.router.navigate(['/auth/login']);
      }
    );

    this.profileChangeForm = this.formBuilder.group({
      image: [[]],
    });
  }

  submitProfilePicture() {
    if (this.profileChangeForm.valid) {
      this.buttonDisabled = true;
      const data = new FormData();
      data.append('image', this.imageFile);
      this.userService.profilePhotoUpdate(data).subscribe(
        (res) => {
          this.showChangeProfileModal = false;
          this.userData = res;
          this.imageFile = null;
          this.previewImageSrc = '';
          this.buttonDisabled = false;
        },
        (err) => {
          console.log(err);
          this.buttonDisabled = false;
        }
      );
    }
  }

  profileClick() {
    this.logoutDiv = !this.logoutDiv;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('category');
    this.router.navigate(['/']);
    if (this.router.url === '/') {
      window.location.reload();
    }
  }

  changeProfile() {
    this.showChangeProfileModal = true;
  }

  closeModal() {
    this.showChangeProfileModal = false;
    this.previewImageSrc = '';
  }

  onImageUpload(data: any) {
    this.profileChangeForm.value.image = data.target.files[0];
    this.previewImageSrc = URL.createObjectURL(data.target.files[0]);
    this.imageFile = data.target.files[0];
  }

  notificationStatus() {
    this.showNotification = !this.showNotification;
  }

  showTheChat() {
    this.showChat = !this.showChat;
  }

  closeTheChat(state: boolean) {
    this.showChat = state;
    this.chatService.disconnect();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.logoutDiv = false;
      this.showChangeProfileModal = false;
      this.showNotification = false;
      this.showChat = false;
      this.changeStateOfTheFilter()
    }
  }
}
