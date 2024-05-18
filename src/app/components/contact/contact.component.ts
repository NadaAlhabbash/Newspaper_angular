import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
      this.appComponent.showFooter = false; 
  }

  ngOnDestroy(): void {
      this.appComponent.showFooter = true; 
  }

}
