import { Component, Input } from '@angular/core';
import { ItemLink } from '../../model/link';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css']
})
export class LinkItemComponent {
  @Input() link: ItemLink;

  constructor() { }


}
