import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  template: `
    <div class="portfolio-resume row">

  <div class="column right">
    <div class="portfolio-resume-wrapper">
      <h3 class="portfolio-resume-header">Contact Information</h3>
      <p>For any inqueries, feel free to contact me!</p>
      <div class="portfolio-resume-contact-info">
        <a href="mailto:#"><i class="fa fa-envelope" aria-hidden="true"></i>rebeccahuynh7@gmail.com</a>
      </div>
      <div class="portfolio-resume-contact-info">
        <a href="tel:+14083410600"><i class="fa fa-phone" aria-hidden="true"></i>347.285.6822</a>
      </div>
      <div class="portfolio-resume-contact-info">
        <a href="https://www.instagram.com/seudoart/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i>Seudoart</a>
      </div>
      <div class="portfolio-resume-contact-info">
        <a href="https://www.linkedin.com/in/rebecca-huynh-146831192/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i>Rebecca Huynh</a>
      </div>
      <div class="portfolio-resume-contact-info">
        <a href="https://www.twitter.com/seudoart/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i>Seudoart</a>
      </div>
    </div>
  </div>

</div>
  `,
  styles: [`

.portfolio-resume-spacing {
  margin-bottom: 2rem;
}

.portfolio-resume-wrapper {
  padding: 2rem 4rem;
}

.portfolio-resume-headshot {
  margin-bottom: 2rem;
  border-radius: 50%;
}

.portfolio-resume-header {
  text-transform: uppercase;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6e6e6;
  font-weight: bold;
  margin-bottom: 1rem;
}

.portfolio-resume-contact-info {
  margin-bottom: 0.75rem;
}

.portfolio-resume-contact-info a {
  color: #0a0a0a;
}

.portfolio-resume-contact-info .fa {
  font-size: 1.4rem;
  padding-right: 0.8rem;
  vertical-align: middle;
  color: #0a0a0a;
}

.column {
  float: left;
}

.left {
  width: 30%;
}

.middle {
  width: 70%;
}

.right {
  width: 70%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

  `]
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
