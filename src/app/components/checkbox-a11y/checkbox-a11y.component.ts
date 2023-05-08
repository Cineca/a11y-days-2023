import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-checkbox-a11y',
  templateUrl: './checkbox-a11y.component.html',
  styleUrls: ['./checkbox-a11y.component.scss'],
})
export class CheckboxA11yComponent {
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  constructor(private _formBuilder: FormBuilder) {}
}
