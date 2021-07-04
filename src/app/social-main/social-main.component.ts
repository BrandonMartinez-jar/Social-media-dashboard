import { Component, OnInit, Input } from '@angular/core';
import social from '../social-media';

@Component({
  selector: 'app-social-main',
  templateUrl: './social-main.component.html',
  styleUrls: ['./social-main.component.css']
})

export class SocialMainComponent implements OnInit {

  @Input() RedSocial : social;

  constructor() { }

  ngOnInit(): void {
  }

}
