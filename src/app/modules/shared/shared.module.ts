import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert/alert.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [InputComponent, ButtonComponent, AlertComponent],
  imports: [CommonModule],
  providers: [AlertService, UserService, AuthService],
  exports: [InputComponent, ButtonComponent, AlertComponent],
})
export class SharedModule {}
