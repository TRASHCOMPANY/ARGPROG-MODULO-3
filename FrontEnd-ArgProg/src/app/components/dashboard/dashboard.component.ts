import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
 
  switchModal = true
  users: any 
  id: any
 
 
  constructor(private apiService:UsersService ) { 
    
  }

  deleteModal(id:any){
    this.apiService.deleteUser(id).subscribe(e => {this.ngOnInit(), console.log( e,'usuario eliminado cin exito')})
  }
  

  ngOnInit(): void {
   
    this.apiService.getAllUsers().subscribe(data => {
      this.users = data;
   
    

    
    })

   
 
  }
  // users2:any[] = [
  //   { id: 1,name: 'pedro',last_name: 'bargas',email:'pedrob14@gmail.com',telefono:344434533,password:'cachito', educacion:'secundario completo', checkTerms:true},
  //   { id: 2,name: 'juan',last_name: 'borras',dni: 3524345},
  //   { id: 3,name: 'alejandro',last_name: 'beron',dni: 33232348},
  //   { id: 4,name: 'diego',last_name: 'escalante',dni: 32325342},
  //   { id: 5,name: 'rodrigo',last_name: 'fernandez',dni: 35272343},
  //   { id: 6,name: 'miguel',last_name: 'escalonni',dni: 3422341}
  

  //  ]


editModal(){
  
}



}
