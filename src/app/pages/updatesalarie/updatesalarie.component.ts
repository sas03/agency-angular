import { Component, OnInit } from '@angular/core';
import { SalariesService } from '../../services/salaries.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-updatesalarie',
  templateUrl: './updatesalarie.component.html',
  styleUrls: ['./updatesalarie.component.css']
})
export class UpdatesalarieComponent implements OnInit {

    salarie;
    salarieId;
    formUpdate={
        name:"",
        firstname:"",
        username:"",
        birthday:null,
        address: {
            rue: "",
            ville: "",
            codepostal:null,
        },
        telephone:null,
        email:"",
        position:""
    }

  constructor(private salariesService:SalariesService,private route:ActivatedRoute) {
      this.route.params.subscribe((params) => {
          this.salarieId=params['id'];
      })

      this.salariesService.getSalarie(this.salarieId).subscribe(salarie=>{

          this.salarie=salarie;
          console.log(this.salarie);

      });
  }
  
  ngOnInit() {
  }
  updateSalarie(id){
      this.salariesService
      .updatedSalarie(this.formUpdate.name,this.formUpdate.firstname,this.formUpdate.birthday,this.formUpdate.address.rue,this.formUpdate.address.ville,this.formUpdate.address.codepostal,this.formUpdate.telephone,this.formUpdate.position,this.salarieId)      
  }

}
