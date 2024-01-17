import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  slideInLeftOnEnterAnimation,
  slideInRightOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInLeftOnEnterAnimation(), slideInRightOnEnterAnimation()],
})
export class HomeComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer?: ElementRef;

  data: any = {};
  email = faMessage;
  phone = faPhone;

  constructor(private json: JsonService) {}

  ngOnInit(): void {
    this.json.loadJSON().subscribe((res: any) => {
      this.data = res;
    });
  }

  openProject(url: string) {
    window.open(url, '_blank');
  }

  toggleVideo(event: any) {
    this.videoplayer!.nativeElement.play();
  }
}
