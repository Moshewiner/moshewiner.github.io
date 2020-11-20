import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'navbar'
  }
})
export class HeaderComponent implements OnInit {
  
  constructor() {

  }
  ngOnInit(): void {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
  //      console.log({ nav: document.getElementsByClassName("navbar")[0] });
        document.getElementsByClassName("navbar")[0].style.top = "0";
      } else {
        document.getElementsByClassName("navbar")[0].style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    }
  }
}
