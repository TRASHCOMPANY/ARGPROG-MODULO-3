import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})

export class EditUserModalComponent implements OnInit {

  @Output() modalClosed = new EventEmitter<boolean>();


  public userId: any
  public idUsuario: any = null
  public updatedUser: any = null


  public show = true
  public users: any

  dataForm: any = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    telephone: '',
    terms: 'true'
  };

  constructor(private userservice: UsersService, private router: Router) { }

  ngOnInit(): void {

    const idUsuario = this.userservice.getId()

    this.userservice.getUser(idUsuario).subscribe(data => {
      this.users = data
      this.idUsuario = idUsuario
    })

  }

  closeModal() {
    this.show = false
    this.modalClosed.emit(false);
    window.location.reload()
  }

  sendForm() {
    console.log(this.dataForm)
    this.userservice.editUser(this.dataForm, this.idUsuario).subscribe(e => {
      console.log(e, "usuario actualizado con exito")
      this.updatedUser = true
    }, error => { this.updatedUser = false });




  }
}
