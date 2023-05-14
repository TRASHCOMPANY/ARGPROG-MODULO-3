import { Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
 


  userId:any
  switchModal = false
  users: any 
  id: any
  show = false
  skills: any
  constructor(private apiService:UsersService, private  router:Router ) { 
    
  }

   
  ngOnInit(): void {
      this.apiService.getAllUsers().subscribe(data => {
      this.users = data;})

      this.apiService.getAllSkills().subscribe(data => {this.skills = data, console.log("esto es skils: ", data.user)});
   
    
 
    }
  

  showModal(id:any){
    this.show = true
    this.apiService.setId(id)
   
   

    
  }
 
  onModalClosed(event:Event) {
   console.log('evento emitido')
    this.show = false
   
       
  }


  deleteUser(id: any){
    console.log(id)
    this.apiService.deleteUser(id).subscribe(e => {this.ngOnInit(), console.log( e,'usuario eliminado con exito')})
  }


  showModalSkill(id:any){
   
  }

  removeSkill(id:any){
    this.apiService.deleteSkill(id).subscribe(e => {this.ngOnInit(), console.log( e,'skill eliminado con exito')})
  }

}
