import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SalariesComponent } from './pages/salaries/salaries.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { ProjectComponent } from './pages/project/project.component';
import { SalarieComponent } from './pages/salarie/salarie.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateComponent } from './pages/create/create.component';
import { CreateprojectComponent } from './pages/createproject/createproject.component';
import { CreatesalarieComponent } from './pages/createsalarie/createsalarie.component';

// services
import {ClientsService} from './services/clients.service';
import {ProjectsService} from './services/projects.service';
import {SalariesService} from './services/salaries.service';
import { UpdateComponent } from './pages/update/update.component';
import { UpdateprojectComponent } from './pages/updateproject/updateproject.component';
import { UpdatesalarieComponent } from './pages/updatesalarie/updatesalarie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,
    ProjectsComponent,
    SalariesComponent,
    HomeComponent,
    ClientComponent,
    ProjectComponent,
    SalarieComponent,
    AboutComponent,
    CreateComponent,
    CreateprojectComponent,
    CreatesalarieComponent,
    UpdateComponent,
    UpdateprojectComponent,
    UpdatesalarieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      ClientsService,
      ProjectsService,
      SalariesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    // baseUrl = environment.apiUrl;
    // animal: string = environment.APIEndpoint;
}
