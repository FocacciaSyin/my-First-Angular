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

  unitArray = ['公厘', '公分', '公尺', '台尺', '英寸', '英尺'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formOnInit();
  }

  get convertValues() {
    const formValue = this.formBaseInfo.getRawValue();

    const height = this.getConvertValue(formValue.unit, + formValue.height, formValue.convertUnit);
    const width = this.getConvertValue(formValue.unit, + formValue.width, formValue.convertUnit);
    return { height, width };
  }

  formOnInit() {
    this.formBaseInfo = this.fb.group({
      id: [],
      height: [],
      width: [],
      unit: [],
      convertUnit: []
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

  getConvertValue(inputUnit: string, inputValue: number, convertUnit: string) {

    if (!inputUnit || !convertUnit) {
      return 0;
    }

    if (inputUnit === convertUnit) {
      return inputValue;
    }

    const currentUnit = inputUnit || '';
    const currentValue = inputValue || 0;

    const convertTo = LengthConvertConfig.find(x => x.currentUnit === currentUnit).convertTo;
    const convertItem = convertTo.find(x => x.unit === convertUnit);

    const newValue = convertItem.value * currentValue;
    // console.log(`${currentValue}_ ${currentUnit} = ${newValue} _ ${convertUnit}`);
    return newValue;
  }

}


export const LengthConvertConfig = [
  {
    currentUnit: '公厘',
    currentValue: 1,
    convertTo: [
      { unit: '公分', value: 0.1 },
      { unit: '公尺', value: 0.001 },
      { unit: '台尺', value: 0.0033 },
      { unit: '英寸', value: 0.03937 },
      { unit: '英尺', value: 0.00328084 }
    ]
  },
  {
    currentUnit: '公分',
    currentValue: 1,
    convertTo: [
      { unit: '公厘', value: 10 },
      { unit: '公尺', value: 0.01 },
      { unit: '台尺', value: 0.033 },
      { unit: '英寸', value: 0.3937 },
      { unit: '英尺', value: 0.0328084 }
    ]
  },
  {
    currentUnit: '公尺',
    currentValue: 1,
    convertTo: [
      { unit: '公厘', value: 1000 },
      { unit: '公分', value: 100 },
      { unit: '台尺', value: 3.3 },
      { unit: '英寸', value: 39.37 },
      { unit: '英尺', value: 3.28084 }
    ]
  },
  {
    currentUnit: '台尺',
    currentValue: 1,
    convertTo: [
      { unit: '公厘', value: 303.030303 },
      { unit: '公分', value: 30.3030303 },
      { unit: '公尺', value: 0.303030303 },
      { unit: '英寸', value: 11.93032689 },
      { unit: '英尺', value: 0.994193908 }
    ]
  },
  {
    currentUnit: '英寸',
    currentValue: 1,
    convertTo: [
      { unit: '公厘', value: 25.4 },
      { unit: '公分', value: 2.54 },
      { unit: '公尺', value: 0.0254 },
      { unit: '台尺', value: 0.08382 },
      { unit: '英尺', value: 0.0833333 }
    ]
  },
  {
    currentUnit: '英尺',
    currentValue: 1,
    convertTo: [
      { unit: '公厘', value: 304.8 },
      { unit: '公分', value: 30.48 },
      { unit: '公尺', value: 0.3048 },
      { unit: '台尺', value: 1.00584 },
      { unit: '英寸', value: 12 }
    ]
  }
];
