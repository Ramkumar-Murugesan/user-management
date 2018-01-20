import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './header-en.component.html',
})

export class HeaderENComponent implements OnInit {
   
    private adminValue : boolean;
    constructor( private router: Router, private authService: AuthService ) { }

    ngOnInit() {
        // console.log("user details---->>>",localStorage.getItem('currentUser'))
        // var userdetails ={
        //     user:{}
        // }
        
        var userdetails = JSON.parse(localStorage.getItem('currentUser'));
        var username = userdetails.user.username;
        var password = userdetails.user.password;
        if(username == 'admin' || password == 'admin'){
              this.adminValue = true;
        // console.log("if loop username",username);
        // console.log("if loop password ",password);
            }

        else{
            this.adminValue = false;
            // console.log("else loop username",username)
            // console.log("else loop password",password)
        }
        
        //  console.log("222---user details---->>>",userdetails.user)
        //  console.log("adminvalues as boolean",this.adminValue)
        
     }


      onsubmit(){    
        console.log("insie logout")
        this.authService.logout();

    }
}