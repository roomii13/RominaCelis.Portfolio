import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { SeccionUnoComponent } from './seccion-uno/seccion-uno.component';
import { SeccionDosComponent } from './seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from './seccion-tres/seccion-tres.component';
import { SkillsComponent } from './skills/skills.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    BarraSuperiorComponent,
    SeccionUnoComponent,
    SeccionDosComponent,
    SeccionTresComponent,
    SkillsComponent,
    CommonModule 
  ]
})
export class AppComponent {
  title = 'RominaCelis.Portfolio';
  showSkillComponent = false;

  toggleSkillComponent() {
    this.showSkillComponent = !this.showSkillComponent;
  }
}
