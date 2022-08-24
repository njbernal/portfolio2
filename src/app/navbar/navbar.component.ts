import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(e): void {
    console.log(e.currentTarget.name)
    const anchor = document.getElementById(e.currentTarget.name);
    const offset = 100;
    const pos = anchor.getBoundingClientRect().top;
    let offsetPos = pos - offset + window.pageYOffset;

    console.log(pos)
    if (e.currentTarget.name === 'home') offsetPos = 0;
    // elmnt.scrollIntoView();
    window.scrollTo({
      top: offsetPos,
      behavior: "smooth"
    })

  }

}
