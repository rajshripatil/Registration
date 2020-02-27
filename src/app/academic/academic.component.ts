import {Component} from '@angular/core'
import {FormControl} from '@angular/forms'

interface medium {
    value: string;
    viewValue: string;
  }

  interface degree {
    value: string;
    viewValue: string;
  }
 interface degree1{
    value: string;
    viewValue: string;
 }

 interface university{
    value: string;
    viewValue: string;
 }
 interface specialization{
    value: string;
    viewValue: string;
 }
@Component({

    selector:'Acad-comp',
    templateUrl:'academic.component.html',
    styleUrls : ['./academic.component.css']
   
})

export class AcademicComponent{
    
    title:string='Academic Details';
    school: medium[] = [
        {value: 'steak-0', viewValue: 'Select'},
        {value: 'marathi-1', viewValue: 'Marathi'},
        {value: 'hindi-2', viewValue: 'Hindi'},
        {value: 'english-3', viewValue: 'English'},
        {value: 'semienglish-4', viewValue: 'Semi English'},
        {value: 'cbse-5', viewValue: 'CBSC'},
        {value: 'other-2', viewValue: 'Other'}

      ];
      bachelor:degree[]=[
          {value: 'steak-0', viewValue: 'Select'},
          {value: 'steak-0', viewValue: 'BTech'},
          {value: 'steak-0', viewValue: 'BE'},
          {value: 'steak-0', viewValue: 'BCA'},
          {value: 'steak-0', viewValue: 'BSC'},
          {value: 'steak-0', viewValue: 'BCOM'},
          {value: 'steak-0', viewValue: 'BA'},
          {value: 'steak-0', viewValue: 'BPharm'},
          {value: 'steak-0', viewValue: 'BBA'},
      ]

      master:degree1[]=[
        {value: 'steak-0', viewValue: 'Select'},
        {value: 'steak-0', viewValue: 'MTech'},
        {value: 'steak-0', viewValue: 'ME'},
        {value: 'steak-0', viewValue: 'MCA'},
        {value: 'steak-0', viewValue: 'MSC'},
        {value: 'steak-0', viewValue: 'MCOM'},
        {value: 'steak-0', viewValue: 'MA'},
        {value: 'steak-0', viewValue: 'MPharm'},
        {value: 'steak-0', viewValue: 'MBA'},
    ]

    univer:university[]=[
        {value: 'steak-0', viewValue: 'Select'},
        {value: 'steak-1', viewValue: 'Pune (SPPU)'},
        {value: 'steak-2', viewValue: 'Mumbai '},
        {value: 'steak-3', viewValue: 'Aurangabad (BAMU)'},
        {value: 'steak-4', viewValue: 'Kolhapur (SU)'},
        {value: 'steak-5', viewValue: 'Solapur (SU)'},
        {value: 'steak-6', viewValue: 'Jalgao (NAMU)'},
        {value: 'steak-7', viewValue: 'Other'},
    ]
    special:specialization[]=[
        {value: 'steak-1', viewValue: 'Computers'},
        {value: 'steak-2', viewValue: 'IT'},
        {value: 'steak-3', viewValue: 'Entc'},
        {value: 'steak-4', viewValue: 'Electronics'},
        {value: 'steak-5', viewValue: 'Mechanical'},
        {value: 'steak-6', viewValue: 'Other'},
        

    ]

}