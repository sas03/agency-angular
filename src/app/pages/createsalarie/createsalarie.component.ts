import { Component, OnInit } from '@angular/core';
import {SalariesService} from '../../services/salaries.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-createsalarie',
    templateUrl: './createsalarie.component.html',
    styleUrls: ['./createsalarie.component.css']
})
export class CreatesalarieComponent implements OnInit {

    // création de l'objet formCreate dans lequel nous allons mettre les valeurs de l'input - voir html
    formCreate={
    name:"",
    firstname:"",
    username:"",
    birthday:null,
    address:{
        rue:"",
        ville:"",
        codepostal:null,
    },
    telephone:null,
    email:"",
    position:""
    }

    constructor(private salariesService:SalariesService,private route:Router) {

    }

    ngOnInit() {
    }

    // fonction appelée au clique du bouton ajouter - voir html fonction (click)
    createSalarie(){
    // on consomme notre service qui a comme arguments les valuers du formulaire
    this.salariesService
    .createSalarie(this.formCreate.name,this.formCreate.firstname,this.formCreate.username,this.formCreate.birthday,this.formCreate.telephone,this.formCreate.address.rue,this.formCreate.email,this.formCreate.position);
    }

}