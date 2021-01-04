import { Component, OnInit } from '@angular/core';
import { LinkService } from './services/link.service';
import { Group } from './model/group';
import { ItemLink } from './model/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Homepage';
  groups: Group[] = [];

  constructor(
    private linkService: LinkService) {
  }

  ngOnInit(): void {
    const dtos$ = this.linkService.getLinkDtos();
    dtos$.subscribe( dbItems => {
      dbItems.map( dbItem => {
        let grp = this.groups.find( g => g.groupNr === dbItem.groupNr);
        if ( grp === undefined ) {
          grp = new Group(dbItem.groupNr, dbItem.groupTitle);
          this.groups.push(grp);
        }
        grp.links.push(new ItemLink(dbItem.linkNr, dbItem.description, dbItem.url));
      });
    });
  }


}
