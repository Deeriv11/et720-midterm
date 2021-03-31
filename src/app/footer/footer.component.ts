import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  
  <section class="hero is-dark is-bold">
  <div class="">
   
   <h1 class="title">Contact info!</h1>
   <p >
     &nbsp; &nbsp; &nbsp; <a class="is-info" href="mailto:rebeccahuynh7@gmail.com"> rebeccahuynh7@gmail.com</a>
   </p>

   </div>




  </section>

  `,
  styles: [`
  .footer{width:100%;
    
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
