import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  type?: 'submit' | 'reset' | 'button' = 'button';

  @Input()
  disabled: boolean = false;

  @Input()
  fullWidth: string | undefined;

  get _fullWidth() {
    return this.fullWidth === '';
  }

  @Input()
  text = '';

  constructor() {}

  ngOnInit(): void {}
}
