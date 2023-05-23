import { Component } from '@angular/core';
import { faTwitter, faInstagram, faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  faTwitter=faTwitter;
  faInstagram=faInstagram;
  faYoutube=faYoutube;
  faLinkedin=faLinkedin;
  faFacebook=faFacebook;

}
