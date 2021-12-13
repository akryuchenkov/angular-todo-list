import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [InputComponent, ButtonComponent, AlertComponent],
  imports: [CommonModule],
  providers: [AlertService],
  exports: [InputComponent, ButtonComponent, AlertComponent],
})
export class SharedModule {}
