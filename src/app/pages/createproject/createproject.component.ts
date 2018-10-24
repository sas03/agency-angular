import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-createproject',
    templateUrl: './createproject.component.html',
    styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

    // création de l'objet formCreate dans lequel nous allons mettre les valeurs de l'input - voir html
    formCreate={
    name:"",
    description:"",
    status:"",
    debut:"",
    fin:"",
    cost:null
    }

    constructor(private projectsService:ProjectsService,private route:Router) {

    }

    ngOnInit() {
    }

    // fonction appelée au clique du bouton ajouter - voir html fonction (click)
    createProject(){
    // on consomme notre service qui a comme arguments les valuers du formulaire
    this.projectsService
    .createProject(this.formCreate.name,this.formCreate.description,this.formCreate.status,this.formCreate.debut,this.formCreate.fin,this.formCreate.cost);
    }

}
