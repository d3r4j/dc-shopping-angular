import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 searchedtext: string = ''
// create event for sibling communication

@Output()

SearchTextChange:EventEmitter<string> = new EventEmitter<string>()

onSearchTextChange(){
  this.SearchTextChange.emit(this.searchedtext)
}


// updatedtext(event:any){
//   this.searchedtext = event.target.value;
// }


}

