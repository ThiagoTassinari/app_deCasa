import { Component, Input } from '@angular/core';

@Component({
  selector: 'expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
  
})
export class ExpandableComponent {

  @Input('expanded') expanded;
  @Input('expandHeight') expandedHeight; 
  @Input('servico') servico;

  currentHeight: number = 0;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.expanded);
    console.log(this.expandedHeight);   
  }

}
