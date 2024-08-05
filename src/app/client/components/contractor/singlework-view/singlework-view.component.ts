import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

interface WorkUpdate {
  _id: any;
  date: Date;
  discription: any;
}

@Component({
  selector: 'app-singlework-view',
  templateUrl: './singlework-view.component.html',
  styleUrls: ['./singlework-view.component.css'],
})
export class SingleworkViewComponent implements OnInit {
  objectId: string = '';
  fullData: any;
  formState: boolean = false;
  workUpdates: WorkUpdate[] = [];
  contractorData:any

  updateForm!: FormGroup;
  projectForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: clientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.objectId = data['id'];
    });

    this.updateForm = this.fb.group({
      updateDescription: ['', Validators.required],
    });

    this.projectForm = this.fb.group({
      id: [this.objectId],
      totalArea: ['', Validators.required],
      contractAmount: ['', Validators.required],
      workDuration: ['', Validators.required],
      startDate: ['', Validators.required],
    });

    this.clientService.detailedViewOfWork(this.objectId).subscribe((res) => {
      this.fullData = res[0];
      for (let data of res[0].workUpdates) {
        this.workUpdates.push(data);
      }
    });

    this.clientService.generateInvoice(this.objectId).subscribe((res)=>{
      this.contractorData=res
    })
  }

  addUpdate(): void {
    if (this.updateForm.valid) {
      const newUpdate = {
        id: this.objectId,
        date: new Date(),
        discription: this.updateForm.get('updateDescription')?.value,
      };
      this.clientService.taskUpdate(newUpdate).subscribe((res) => {
        this.workUpdates.push(res.workUpdates[res.workUpdates.length - 1]);
        this.updateForm.reset();
      });
    }
  }

  submitProjectDetails(): void {
    if (this.projectForm.valid) {
      this.clientService
        .projectDetailes(this.projectForm.value)
        .subscribe((res) => {
          this.formState = false;
          Swal.fire({
            title: 'Details submitted',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          });
          this.projectForm.reset({
            id: this.objectId,
            totalArea: '',
            contractAmount: '',
            workDuration: '',
            startDate: '',
          });
        });
    }
  }

  openForm() {
    this.formState = true;
  }

  closeForm() {
    this.formState = false;
  }

  deleteUpdate(id: string) {
    Swal.fire({
      title: 'Are you sure to delete this update?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const obj = {
          objectId: this.objectId,
          id: id,
        };

        this.clientService.deleteTask(obj).subscribe((res) => {
          this.workUpdates = this.workUpdates.filter(
            (workUpdate) => workUpdate._id !== id
          );
        });

        Swal.fire('Deleted!', 'update has been deleted.', 'success');
      }
    });
  }

  openChat(id: string, componyId: string) {
    this.router.navigate([`/client/chat/${id}/${componyId}`]);
  }

  sendConfirmationEmail() {
    const obj = {
      userData: this.fullData.userData[0],
      componyData: this.fullData.componyData[0],
    };
    this.clientService.confirmationEmail(obj).subscribe((res) => {
      this.fullData.status = 'Accepted';
    });
  }

  completeProject(id:string){
    Swal.fire({
      title: 'It will update the status of the projcet as completed.you cant change it',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'update it!',
    }).then((result) => {
      const obj={id:id}
      this.clientService.projectCompleted(obj).subscribe((res)=>{})
    });
  }

  generateInvoice(){
    const data = document.getElementById('invoice-content');

    // remove class of the invoice canvas for getting value
    data?.classList.remove('hide-on-print');
 
    html2canvas(data!).then((canvas) => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('GreenLand_invoice.pdf');

    // add class of the invoice canvas 
      data?.classList.add('hide-on-print');

    });    
  }
}
