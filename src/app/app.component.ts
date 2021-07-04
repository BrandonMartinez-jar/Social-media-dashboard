import { Component } from '@angular/core';
import social from './social-media';
import recent from './recent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'social-media-dashboard';



  Socials : Array<social>;
  Recents : Array<recent>;

  total: any = 0;

  constructor(){

    this.Socials =
    [
      {
        name: 'facebook',
        color: '#3b5998',
        img: 'https://lh3.googleusercontent.com/ogw/ADea4I7xpRLnE2uHLJvJp34NHKss6r4PfffiHuLIvYFyBA=s83-c-mo',
        username: 'Brandon Martínez',
        subs: 100
      },
      {

        name: 'twitter',
        color: '#00acee',
        img: 'https://lh3.googleusercontent.com/ogw/ADea4I7xpRLnE2uHLJvJp34NHKss6r4PfffiHuLIvYFyBA=s83-c-mo',
        username: 'Brandon Martínez',
        subs: 200
      },
      {
        name: 'instagram',
        color: '#c13584',
        img: 'https://lh3.googleusercontent.com/ogw/ADea4I7xpRLnE2uHLJvJp34NHKss6r4PfffiHuLIvYFyBA=s83-c-mo',
        username: 'Brandon Martínez',
        subs: 300
      },
      {
        name: 'youtube',
        color: '#c4302b',
        img: 'https://lh3.googleusercontent.com/ogw/ADea4I7xpRLnE2uHLJvJp34NHKss6r4PfffiHuLIvYFyBA=s83-c-mo',
        username: 'Brandon Martínez',
        subs: 400
      }
    ];

    this.Recents = [
      {
        _color: '#3b5998',
        name: 'facebook',
        title: 'Page Views',
        number: '87',
        color: 'var(--up-color)',
        type: 'angle-up',
        new: '3%'
      },
      {
        name: 'twitter',
        _color: '#00acee',
        title: 'Retweets',
        number: '117',
        color: 'var(--up-color)',
        type: 'angle-up',
        new: '33%'
      },
      {
        name: 'instagram',
        title: 'Profile Views',
        number: '52k',
        _color: '#c13584',
        color: 'var(--up-color)',
        type: 'angle-up',
        new: '17%'
      }
      ,{
        name: 'youtube',
        title: 'Total Views',
        _color: '#c4302b',
        number: '1.4k',
        color: 'var(--down-color)',
        type: 'angle-down',
        new: '12%'
      },

      {
        _color: '#3b5998',
        name: 'facebook',
        title: 'Likes',
        number: '52',
        color: 'var(--down-color)',
        type: 'angle-down',
        new: '3%'
      },
      {
        name: 'twitter',
        title: 'Likes',
        number: '507',
        _color: '#00acee',
        color: 'var(--down-color)',
        type: 'angle-down',
        new: '53%'
      },
      {
        name: 'instagram',
        title: 'Likes',
        number: '5.5k',
        _color: '#c13584',
        color: 'var(--up-color)',
        type: 'angle-up',
        new: '27%'
      },

      {
        name: 'youtube',
        title: 'Likes',
        _color: '#c4302b',
        number: '107',
        color: 'var(--up-color)',
        type: 'angle-up',
        new: '57%'
      }
    ];

    }

  getSubs() :number{
    this.total = 0;

    for (let i : number = 0; i < this.Socials.length; i++) {
      this.total = this.total + this.Socials[i].subs;
      console.log(this.total)
    }

    return this.total;
  }

}
