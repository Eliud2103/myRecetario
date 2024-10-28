import { Component, Input,Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() navbarChange = new EventEmitter<'utvco' | 'personal' | 'home'>();

  changeNavbarType(type: 'utvco' | 'personal' | 'home') {
    this.navbarChange.emit(type); // Emite el evento con el nuevo tipo de navbar
  }
}
