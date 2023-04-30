import { Component, Input } from '@angular/core';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() links: any = [];

  github = faGithub;
  youtube = faYoutube;
  instagram = faInstagram;
  linkedin = faLinkedin;
}
