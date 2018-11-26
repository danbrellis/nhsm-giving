import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donate-button',
  templateUrl: './donate-button.component.html',
  styleUrls: ['./donate-button.component.css']
})
export class DonateButtonComponent implements OnInit {

  url = 'http://marylandnature.org/support-maryland-nature/donate/';
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
