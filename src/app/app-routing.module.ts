import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent} from './pages/clients/clients.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {SalariesComponent} from './pages/salaries/salaries.component';
import {HomeComponent} from './pages/home/home.component';
import {ClientComponent} from './pages/client/client.component';
import {ProjectComponent} from './pages/project/project.component';
import {SalarieComponent} from './pages/salarie/salarie.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateComponent } from './pages/create/create.component';
import { CreateprojectComponent } from './pages/createproject/createproject.component';
import { CreatesalarieComponent } from './pages/createsalarie/createsalarie.component';
import { UpdateComponent } from './pages/update/update.component';
import { UpdateprojectComponent } from './pages/updateproject/updateproject.component';
import { UpdatesalarieComponent } from './pages/updatesalarie/updatesalarie.component';

const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'clients',
        component:ClientsComponent,
    },
    {
        path:'client/:id',
        component:ClientComponent,
    },
    {
        path:'projects',
        component:ProjectsComponent,
    },
    {
        path:'project/:id',
        component:ProjectComponent,
    },
    {
        path:'salaries',
        component:SalariesComponent,
    },
    {
        path:'salarie/:id',
        component:SalarieComponent,
    },
    {
        path:'about',
        component:AboutComponent,
    },
    {
        path:'create',
        component:CreateComponent,
    },
    {
        path:'createproject',
        component:CreateprojectComponent,
    },
    {
        path:'createsalarie',
        component:CreatesalarieComponent,
    },
    {
        path:'update/:id',
        component:UpdateComponent,
    },
    {
        path:'updateproject/:id',
        component:UpdateprojectComponent,
    },
    {
        path:'updatesalarie/:id',
        component:UpdatesalarieComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
