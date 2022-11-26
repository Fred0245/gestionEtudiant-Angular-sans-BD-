import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent {

  constructor (private router : Router){

  }
  
  ngOnInit(): void {

    // this.router.navigate(['/frontend/dashboard'])
    //         .then(() => {
    //           window.location.reload()
    //         })
  }

}
