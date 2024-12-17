import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  // items = ['item1', 'item2', 'item3', 'item4'];
  constructor() { }

  ngOnInit(): void {
  }
  
  // addItem(newItem: string) {
  //   this.items.push(newItem);
  //   console.log(newItem);
  //   console.log(this.items);
    
  // }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
