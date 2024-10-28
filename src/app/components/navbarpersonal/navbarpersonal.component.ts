import { Component,  Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbarpersonal',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbarpersonal.component.html',
  styleUrl: './navbarpersonal.component.css'
})
export class NavbarpersonalComponent {
  @Output() navbarChange = new EventEmitter<'utvco' | 'personal' | 'home'>();

  
  changeNavbarType(type: 'utvco' | 'personal' | 'home') {
    this.navbarChange.emit(type); // Emite el evento con el nuevo tipo de navbar
  }
  selectNavbar(type: 'utvco' | 'personal' | 'home') {
    this.navbarChange.emit(type);
  }
}
