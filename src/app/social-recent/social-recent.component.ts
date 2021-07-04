import { Component, OnInit, Input } from '@angular/core';
import recent from '../recent';

@Component({
  selector: 'app-social-recent',
  templateUrl: './social-recent.component.html',
  styleUrls: ['./social-recent.component.css']
})
export class SocialRecentComponent implements OnInit {

  @Input() Recent : recent;

  constructor() { }

  ngOnInit(): void {
  }

}
