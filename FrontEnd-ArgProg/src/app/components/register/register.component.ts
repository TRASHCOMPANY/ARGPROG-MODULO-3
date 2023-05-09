import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service'
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    dataForm: User ={
    first_name: '',
    last_name:'',
    email:'',
    password: '',
    telephone:0,
    terms:'true'
     };

  constructor(private UserService: UsersService) { }

  ngOnInit(): void {
  }

  sendForm(){
  this.UserService.createUser(this.dataForm)
  
  }
}
