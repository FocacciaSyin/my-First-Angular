import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  formBaseInfo: FormGroup;
  formLayout: FormGroup;
  formBackground: FormGroup;
  formSubmit: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formOnInit();
  }

  formOnInit() {
    this.formBaseInfo = this.fb.group({
      id: [],
      height: [],
      width: [],
      unit: []
    });
    this.formLayout = this.fb.group({
      id: [],
      layout: [],
      color: []
    });
    this.formBackground = this.fb.group({
      id: [],
      material: []
    });
    this.formSubmit = this.fb.group({
      id: []
    });
  }

}
