import {Component, ElementRef, OnInit} from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-subject-context',
  templateUrl: './subject-context.component.html',
  styleUrls: ['./subject-context.component.css']
})
export class SubjectContextComponent implements OnInit {
  //declare var $: any;
  subject = '';
  otherValue = '';
  items = ['A', 'B', 'C', 'E', 'F' , 'G', 'H'];
  selectedIndex = -1;

  constructor(private _elRef: ElementRef) {

  }


  ngOnInit() {
    //$('li').off('keydown');
    jQuery('li').off('keydown');
  }

  public onClick(event) {
    console.log(event.target.childNodes[0]);
    this.subject = event.target.childNodes[0].nodeValue.trim();

  }
  public onKeyPress() {
    this.subject = this.otherValue;
    this.selectedIndex = -1;
  }

  public select(index, selectedText) {
    this.selectedIndex = index;
    this.subject = selectedText;
    this.otherValue = '';
  }

}
