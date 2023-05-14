import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit, AfterViewInit  {

@ViewChild('bar1') bar1!: ElementRef;
@ViewChild('bar2') bar2!: ElementRef;
@ViewChild('bar3') bar3!: ElementRef;
@ViewChild('bar4') bar4!: ElementRef;
@ViewChild('bar5') bar5!: ElementRef;
@ViewChild('bar6') bar6!: ElementRef;
@ViewChild('bar7') bar7!: ElementRef;
@ViewChild('bar8') bar8!: ElementRef;
@ViewChild('bar9') bar9!: ElementRef;
@ViewChild('bar10') bar10!: ElementRef;
@ViewChild('bar11') bar11!: ElementRef;
@ViewChild('bar12') bar12!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    const bars = [this.bar1.nativeElement, this.bar2.nativeElement, this.bar3.nativeElement, this.bar4.nativeElement,this.bar5.nativeElement,this.bar6.nativeElement,this.bar7.nativeElement,this.bar8.nativeElement,this.bar9.nativeElement,this.bar10.nativeElement,this.bar11.nativeElement,this.bar12.nativeElement];

    for (let index = 0; index < bars.length; index++) {
      var progreso = 0
      const bar = bars[index];
      const formateado = bars[index].style.width.replace(/[%.]/g, '');
      const intervalo = setInterval(() => {
        progreso = progreso + 0.01
        if (progreso > Number(formateado)) {
          clearInterval(intervalo);
          return;
        }
        bar.style.width = progreso + "%";
      });
    }
  }
 
  ngOnInit(): void {

   
  }


}

 

  
 

  

 



  


