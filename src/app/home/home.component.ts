import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <img src ="../assets/img/img/sudeoart.jpg">

    <div class="multilevel-offcanvas off-canvas position-right" id="offCanvasRight" data-off-canvas>

            <ul class="menu vertical nested">
             <div class="columns">
    
              <div class="column">
              <li><img src="https://et710.com/website/war2/img/Wolf-Kings.jpg" class="image is-16by9"><button class="button is-hoverable is-dark" routerLink="/graphic-design">Graphic Design</button></li>
              </div>

              <div class="column">
              <li><img src="https://et710.com/website/war2/img/stargazer.png" class="image is-16by9"><button class="button is-hoverable is-dark" routerLink="/DigitalArt">Digital Art</button></li>
             </div>

               <div class="column">
              <li><img src="https://et710.com/website/war2/img/shinee-moon.jpg" class="image is-16by9"><button class="button is-hoverable is-dark" routerLink="/Illustrations">Illustrations</button></li>
              </div> 
              
              <div class="column">
              <li><img  src="https://et710.com/website/war2/img/exo-studios.jpg" class="image is-16by9"><button class="button is-hoverable is-dark" routerLink ="/InDesign">InDesign</button></li>
             </div>

              <div class="column">
              <li><<img src="https://et710.com/website/war2/img/Visionaire.jpg" class="image is-16by9"><button class="button is-hoverable is-dark" routerLink="/Paintings">Paintings</button></li>
              </div>
               
              <div class="column">
              <li><img src="https://et710.com/website/war2/img/name-logo.jpg" class="image is-16by9"><button class="button is-hoverable is-dark" routerLink="/AboutMe">ABOUT ME</button></li>
             </div>

              <div class="column">
              <li><img src="https://et710.com/website/war2/img/seudo-productions.jpg" class="image is-16by9"><button class="button is-hoverable is-dark" routerLink="/ContactMe">CONTACT ME</button></li>
             </div>

         </div>
 
        </ul>
    </div>

    
      
    
   

  `,
    styles: [ `
    
   `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
