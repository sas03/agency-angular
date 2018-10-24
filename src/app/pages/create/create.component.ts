import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../services/clients.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    // création de l'objet formCreate dans lequel nous allons mettre les valeurs de l'input - voir html
    formCreate={
    name:"",
    address:{
        rue: "",
        ville: "",
        codepostal:null,
    },
    contact:null,
    activity:""
    }

    constructor(private clientsService:ClientsService,private route:Router) {

    }

    ngOnInit() {
    }

    // fonction appelée au clique du bouton ajouter - voir html fonction (click)
    createClient(){
    // on consomme notre service qui a comme arguments les valuers du formulaire
    this.clientsService
    .createClient(this.formCreate.name,this.formCreate.address.ville,this.formCreate.contact,this.formCreate.activity);
    }

}
