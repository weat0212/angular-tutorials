import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';
import { filter } from "rxjs";

@Component({
  selector: 'app-form-change',
  templateUrl: './form-change.component.html',
  styleUrls: ['./form-change.component.css']
})
export class FormChangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startDate.valueChanges.pipe(filter(() => this.startDate.valid)).subscribe(v => this.minDate = v);
    this.endDate.valueChanges.pipe(filter(() => this.endDate.valid)).subscribe(v => this.maxDate = v);
  }

  minDate: any;
  maxDate: any;

  startDate = new FormControl();
  endDate = new FormControl(moment());

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
    }),
  })
}
