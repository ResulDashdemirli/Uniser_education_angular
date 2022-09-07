import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showSecret = false;

//   menuToggle() {
  
//     const toggle : any = document.getElementById('toggle');
// const ShowHideNav:any = document.getElementById('responsive_nav_btn');
// toggle.onclick =function (){
// ShowHideNav.classList.toggle('showHide');
// }

//   }

  constructor() {  }

  ngOnInit(): void {
  }

}
