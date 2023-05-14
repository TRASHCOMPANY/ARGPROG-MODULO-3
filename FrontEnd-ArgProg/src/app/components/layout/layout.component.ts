import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const windows = window

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  scrollTop(){
   windows.scrollTo(0,0)
    console.log('hola')

  }

}

