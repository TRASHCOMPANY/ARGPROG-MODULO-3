import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl ,Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form :FormGroup 

  constructor(private formBuilder:FormBuilder, private auth:AuthService, private router:Router ) {
   
    this.form = formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      deviceInfo: this.formBuilder.group({
        deviceId:'33445356335',
        deviceType:'DEVICE_TYPE_ANDROID',
        notificationToken:'xf3sxr445xg4hh685ff54433ds3dd45cnyegh54c'
       })
    });
   }

  ngOnInit(): void {
     
     }
      

 get Username(){
  return this.form.get('username')
 }    

 get Password(){
  return this.form.get('password')
 }    

 sendLogin(event:Event){
   event.preventDefault
   this.auth.login(this.form.value).subscribe(data=>{console.log('datos: ' + JSON.stringify(data))})
   this.router.navigate(['/dashboard'])
   console.log(this.form.value)
 
 }
}
