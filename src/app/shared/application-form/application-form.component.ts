import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.sass']
})
export class ApplicationFormComponent implements OnInit {
  @Output() application: EventEmitter<any> = new EventEmitter<any>()
  @Output() close: EventEmitter<any> = new EventEmitter()
  form: FormGroup
  alertform: boolean = false

  constructor(
    private fb:FormBuilder, 
  ) {
    this.form = fb.group({})
   }

  ngOnInit(): void {
    this.form = this.createForm()
  }

  createForm():FormGroup{
    var form:any = this.fb.group({
      name: ['',Validators.compose([
        Validators.required
      ])],
      age: ['', Validators.compose([
        Validators.required
      ])],
      patronus: [''],
      img: [''],
    })
    return form
   }
   createApplication(){
    if(this.form.valid){
      this.application.emit(this.form.value)
    }else{
      this.alertform = true
    }
  }
  closeFunction(){
    this.form = this.createForm()
    this.close.emit()
  }
}
