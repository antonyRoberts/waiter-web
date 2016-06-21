import { Component } from '@angular/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdCheckbox]
})
export class AppComponent {
  title = 'app works!';
}
