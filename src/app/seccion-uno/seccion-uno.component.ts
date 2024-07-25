import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillsComponent} from '../skills/skills.component';


@Component({
  selector: 'app-seccion-uno',
  standalone: true,
  imports: [SkillsComponent,CommonModule],
  templateUrl: './seccion-uno.component.html',
  styleUrl: './seccion-uno.component.css'
})
export class SeccionUnoComponent {
  showSkillComponent = false;

  toggleSkillComponent() {
    this.showSkillComponent = !this.showSkillComponent;
  }
}
