import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()      // jidar b <app-filer> apan use krege waha pe we can use this properties(all,instocks,etc) as attributes
  all:number = 0;

  @Input()
  instock : number = 0;
  
  @Input()
  outofstock: number = 0;
 
 
 
  @Output()

  slectedfilterradiobuttonchange: EventEmitter<string> = new EventEmitter<string>(); // filter button change hone pe page change honeko hona uske liye

  selectedfilterradiobutton: string = 'all' //this property will see radio button selected in chid component

     buttonchange(){
    // console.log("selectedfilterradiobutton EVENT IS HAPPENING")
    this.slectedfilterradiobuttonchange.emit(this.selectedfilterradiobutton)
  }
}
