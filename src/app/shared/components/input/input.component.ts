import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() inputType:string=''
  
   @Input() inputStyle:string=''
  
  @Input() inputName:string=''

  @Input() placeholder:string=''

  @Output() focusEvent = new EventEmitter<void>();
  @Output() blurEvent = new EventEmitter<void>();

  onFocus() {
    this.focusEvent.emit();
  }

  onBlur() {
    this.blurEvent.emit();
  }

}
