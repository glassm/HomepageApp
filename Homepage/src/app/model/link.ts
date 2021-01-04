export class ItemLink {

  constructor(linkNr: number, description: string, url: string) {
    this.linkNr = linkNr;
    this.description = description;
    this.url = url;
  }

  linkNr: number;
  description: string;
  url: string;
}
