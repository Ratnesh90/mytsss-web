import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../../components/services/services.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';


@Component({
  selector: 'app-home',
   standalone: true,
   imports:[CommonModule, HeroComponent,ServicesComponent, ClientsComponent, TimelineComponent,  ],
  template: `
    <app-hero></app-hero>
    <app-services></app-services>
    <app-clients></app-clients>
    <app-timeline></app-timeline>
  
  `,
  styles: []
})
export class HomeComponent {

}