import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  title:any
  content =  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatisquidem! Distinctio, tenetur qui deserunt sed architecto delectus iusto ad quas magni laudantium. Libero doloremque, delectus quaerat et cumque architecto accusantium:"


  constructor() { }

  ngOnInit(): void {
  
  }

  
}
