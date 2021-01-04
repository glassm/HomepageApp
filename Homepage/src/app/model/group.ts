import { ItemLink } from './link';

export class Group {

  constructor(groupNr: number, groupTitle: string) {
    this.groupNr = groupNr;
    this.groupTitle = groupTitle;
  }

  groupNr: number;
  groupTitle: string;
  links: ItemLink[] = [];
}
