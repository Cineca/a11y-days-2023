import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-checkbox-a11y',
  templateUrl: './checkbox-a11y.component.html',
  styleUrls: ['./checkbox-a11y.component.scss'],
})
export class CheckboxA11yComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const checkboxElement = (<HTMLElement>(
      this.elementRef.nativeElement
    )).querySelector('.mat-mdc-checkbox-touch-target');
    checkboxElement?.setAttribute('aria-hidden', 'true');
  }
}





