import { Component } from '@angular/core';

@Component({
  selector: 'app-list-a11y',
  templateUrl: './list-a11y.component.html',
  styleUrls: ['./list-a11y.component.scss'],
})
export class ListA11yComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
}
