import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input()
  isShow: boolean = false;

  @Input()
  type: 'success' | 'error' | 'info' = 'info';

  @Input()
  message: string = '';

  constructor() {}

  ngOnInit(): void {}
}
