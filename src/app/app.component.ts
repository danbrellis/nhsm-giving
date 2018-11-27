import { Component } from '@angular/core';
import * as _throttle from '../../node_modules/lodash/throttle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  today: number = Date.now();
  sbcClass: string = '';
  sbcTop: number = 20;
  sbcRectTop: number = 0;
  programs = {
    'Nature Connections': 'Free, family-friendly, Sunday afternoon programs on subjects such as Beetles, Skulls & Teeth, Vernal Pools, and the Forest Floor.',
    'Clubs': 'Specialty themed clubs on Lepidoptera (butterflies and moths), Fossils, and Herpetology (reptiles and amphibians). See side panel for more information.',
    'On-going Series': 'Monthly programs such as What\'s That Plant and Moss Workshop.',
    'Courses': 'In depth courses on subjects such as Archeology, Botany, Geology, Weather, and Mammals.',
    'Field Trips': 'Expert-led outdoor programs exploring fossils, spring wildflowers, wild edibles, vernal pools and more.',
    'Lectures': 'Name a field in natural history and we’ve had an expert talk about it.'
  };

  networks = [
      {
        'name': 'facebook',
        'url': 'https://www.facebook.com/marylandnature',
        'tag': 'Follow us on Facebook!'
      },
      {
        'name': 'meetup',
        'url': 'http://www.meetup.com/marylandnature/',
        'tag': 'Join us on Meetup!'
      }
  ];

  ngAfterViewInit() {
    //set sidebar height
    let colCont = document.getElementById('two-columns-container');
    let aside = document.getElementById('sidebar');
    aside.style.height = colCont.offsetHeight + "px";
  }

  ngOnInit(){
    //make sidebar sticky
    let sidebarRect = document.getElementById('sidebarContent').getBoundingClientRect();

    this.sbcRectTop = sidebarRect.top + 100;
    console.log(this.sbcRectTop);
    //window.addEventListener('scroll', this.updatePosition.bind(this));
  }

  updatePosition() {
      let scrollY = window.scrollY;
      console.log(scrollY, this.sbcRectTop, this.sbcTop);
      if(scrollY > this.sbcRectTop) this.sbcTop = scrollY - this.sbcRectTop;
      console.log(this.sbcTop);
  }
}
