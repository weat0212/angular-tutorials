import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.css']
})
export class AuthRememberComponent {

  constructor() { }

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(event: Event) {
    this.checked.emit(!!event);
  }
}
