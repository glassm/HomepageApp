import { Component, Input } from '@angular/core';
import { ItemLink } from '../model/link';

@Component({
  selector: 'app-link-group',
  templateUrl: './link-group.component.html',
  styleUrls: ['./link-group.component.css']
})
export class LinkGroupComponent {

  @Input() title: string;
  @Input() links: ItemLink[];

  constructor() { }

}
