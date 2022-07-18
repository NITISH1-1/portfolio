import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOOLTIP_TEXTS } from '../constants/constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  tooltipTexts:any = TOOLTIP_TEXTS;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  routeTo(module:string){
    this.route.navigateByUrl(module);
  }

}
