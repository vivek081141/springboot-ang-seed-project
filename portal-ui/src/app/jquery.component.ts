import {Component, ElementRef, OnInit} from '@angular/core';
declare var jQuery: any;

/*@Component({
  selector: 'my-jQuery',
  template: `<button>Click me</button>
  `
})*/
export class JQueryComponent  {
  constructor(private _elRef: ElementRef) {

  }
/*
  ngOnInit(): any {
    jQuery(this._elRef.nativeElement).find('button').on('click', function() {
            alert('Hello');
      });
  }*/
}

