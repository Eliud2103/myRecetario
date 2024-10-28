import { Component,  Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarpersonalComponent } from './components/navbarpersonal/navbarpersonal.component';
import { NavbarutvcoComponent } from './components/navbarutvco/navbarutvco.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NavbarpersonalComponent, NavbarutvcoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myRecetario';

  @Output() navbarChange = new EventEmitter<'utvco' | 'personal' | 'home'>();

  changeNavbarType(type: 'utvco' | 'personal' | 'home') {
    this.navbarChange.emit(type); // Emite el evento con el nuevo tipo de navbar
  }
  navbarType: 'utvco' | 'personal' | 'home' = 'home';

  // Método para actualizar el navbarType cuando se selecciona otro navbar
  setNavbarType(type: 'utvco' | 'personal' | 'home') {
    this.navbarType = type;
  }
}
