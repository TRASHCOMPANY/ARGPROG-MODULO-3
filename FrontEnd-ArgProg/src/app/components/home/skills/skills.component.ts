import { Component, OnInit,  } from '@angular/core';
import {UsersService} from '../../../services/users.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

public skillPorcent:number = 0
 
skills: any;

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    
    this.userService.getAllSkills().subscribe(data => {this.skills = data, console.log(data)});
  
  }

}
