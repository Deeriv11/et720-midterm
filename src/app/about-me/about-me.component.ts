import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
   <div class="portfolio-resume row ng-scope">

  <div class="column left">
    <div class="portfolio-resume-wrapper">
      <img class="portfolio-resume-headshot" src="https://placehold.it/175" alt="headshot">
      <h3 class="portfolio-resume-header">Skills</h3>
      <ul>
        <li>Proficiency in Adobe Photoshop and InDesign</li>
        <li>Proficiency in Adobe (i.e. Photoshop and InDesign)</li>
        <li>Proficiency in Microsoft Office (i.e. Word, Powerpoint, and OneNote) with basic skills in Excel</li>
        <li>Proficiency in Paint Tool Sai</li>
        <li>Proficiency in Google Docs, Drive, and Mail</li>
        <li>Basic Money Handling Skills</li>
        <li>Strong Time Management</li>
        <li>Efficient with Social Media</li>
      </ul>
    </div>
  </div>

  <div class="column middle">
    <div class="portfolio-resume-wrapper">
      <h3 class="portfolio-resume-header">Experience</h3>

      <div class="portfolio-resume-spacing">
        <h5><strong>Co-Editor in Chief of School Newspaper "The Verdict"</strong></h5>
        <p>I was the Co-Editor-in-Chief of Benjamin N. Cardozo High School's newspaper for two years.</p>
        <ul>
          <li>Managing a team made up of reporters, page editors, photographers, graphic artists, and supervisors</li>
          <li>Writing articles requiring extensive research and interviews with students and/or faculty</li>
          <li>Leading discussions on brainstorming for future issues</li>
          <li>Editing and preparing submitted articles and pages for final publication</li>
          <li>Managing relations with multiple businesses</li>
          <li>Overlooking and managing finances for each publication</li>
          <li>Distributing publications to students and faculty</li>
          <li>Mentoring future members of The Verdict</li>
        </ul>
      </div>

      <div class="portfolio-resume-spacing">
        <h5><strong>Attendance Office Assistant</strong></h5>
        <p>I worked in Benjamin N. Cardozo High School's Attendance Office as an assistant for two years.</p>
        <ul>
          <li>Interfiling and organizing attendance files</li>
          <li>Sorting out mail for faculty</li>
          <li>Delivering attendance documents to other offices</li>
        </ul>
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


  `,]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
