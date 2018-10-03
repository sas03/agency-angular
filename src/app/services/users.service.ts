import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UsersService {

// ApiUrl="http://localhost:4200/assets/data/data.json";
apiUrl="http://localhost:3000/users/";

datatopost;

httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })};

  constructor(private http:HttpClient,private router:Router) {

  }

// get all users
getUsers(){
    return this.http.get(this.apiUrl);
}

// get one user by Id
getUser(id){
    return this.http.get(this.apiUrl+id);
}

// create a user
createUser(username,name,website){
    // body envoyé dans la requête, appelé payload
    const payload =
        {
          "name":username,
          "username":name,
          "website":website
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
updatedUser(username,name,website,id){

    // body envoyé dans la requête, appelé payload
    const payload =
        {
          "name":username,
          "username":name,
          "website":website
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
