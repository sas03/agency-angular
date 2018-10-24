import { Component, OnInit } from '@angular/core';
import { SalariesService } from '../../services/salaries.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.css']
})
export class SalarieComponent implements OnInit {

salarie;
salarieId;

  constructor(private salariesService:SalariesService,private route:ActivatedRoute,private router:Router) {

      // Récupérer l'id dans  la route
      this.route.params.subscribe((params) => {
          this.salarieId=params['id'];
          console.log(params['id']);
      })

      // utiliser le service qui permet d'avoir un utilisateur en fonction de l'id
    this.salariesService.getSalarie(this.salarieId).subscribe(salarie=>{

        this.salarie=salarie;
        console.log(this.salarie);

    });

  }

  ngOnInit() {
  }

  // fonction de suppression qui est utilisé au click (voir html)
  deleteSalarie(){
      this.salariesService.delete(this.salarieId).subscribe(salarie=>{
          console.log(this.salarie);
          // on retourne sur la page users
           this.router.navigate['salaries'];
      });

  }

}
