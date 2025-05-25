import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicedetailsComponent } from './components/services/servicedetails.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { CctvInstallationComponent } from './components/services/cctv/cctv-installation.component';
import { CctvAmcComponent } from './components/services/cctvamc/cctv-amc.component';
import { BiometricComponent } from './components/services/biometric/biometric.component';
import { NetworkInfraComponent } from './components/services/network/network-infra.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'client', component: ClientsComponent},
  {path: 'contact', component: ContactComponent},
   {path: 'hero', component:HeroComponent},
    {path: 'timline', component:TimelineComponent},
    {path: 'service', component:ServicesComponent},
     {path: 'service-details', component:ServicedetailsComponent},
     {path: 'industries', component: IndustriesComponent},
      {path: 'cctv-installation', component: CctvInstallationComponent, pathMatch:'full'},
      {path: 'cctv-amc', component: CctvAmcComponent, pathMatch:'full'},
      {path: 'biometric', component: BiometricComponent, pathMatch:'full'},
      {path: 'network', component: NetworkInfraComponent, pathMatch:'full'},
  { path: '**', component: NotFoundComponent },
];