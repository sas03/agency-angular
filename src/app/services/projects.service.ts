import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ProjectsService {

// ApiUrl="http://localhost:4200/assets/data/data.json";
apiUrl="http://localhost:3000/projects/";

datatopost;

httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })};

  constructor(private http:HttpClient,private router:Router) {

  }

// get all users
getProjects(){
    return this.http.get(this.apiUrl);
}

// get one user by Id
getProject(id){
    return this.http.get(this.apiUrl+id);
}

// create a user
createProject(name,description,status,debut,fin,cost){
    // body envoyé dans la requête, appelé payload
    const payload =
        {
          "name":name,
          "description":description,
          "status":status,
          "debut":debut,
          "fin":fin,
          "cost":cost
        }

    // conversion en jSON
    this.datatopost=JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.post(this.apiUrl,this.datatopost,this.httpOptions).subscribe(
        res =>{
            console.log(res);
        },
        err => {
            console.log(err.message);
        }
    );
}

// mise à jour user
updatedProject(name,description,status,debut,fin,cost,id){

    // body envoyé dans la requête, appelé payload
    const payload =
        {
          "name":name,
          "description":description,
          "status":status,
          "debut":debut,
          "fin":fin,
          "cost":cost
        }

        // conversion en JSON
        this.datatopost=JSON.stringify(payload);

        // requête http en post qui renvoie resp ou err
        return this.http.put(this.apiUrl+id,this.datatopost,this.httpOptions).subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        );

}

// suppression d'un user
delete(id){
    return this.http.delete(this.apiUrl+id);
}

}
