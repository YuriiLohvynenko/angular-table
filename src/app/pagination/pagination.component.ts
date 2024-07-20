import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {} from "events";

@Component({
  selector: "my-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  @Input() page: number; // page number to be displayed initially
  @Input() count: number; //  per page count
  @Input() data: any = []; // total data received here
  @Input() dataTobeDisplayed: any;

  @Output() pageDataToDisplay = new EventEmitter<any>(); // per page data will be emitted to parent component

  perPage: number = 20;
  selectedPage: number = 1;

  constructor() {}

  ngOnInit() {
    this.sendData(); // to send per page data onload
  }

  // to send per page data 
  sendData() {
    this.dataTobeDisplayed = this.data.slice(
      (this.selectedPage - 1) * this.perPage,
      this.selectedPage * this.perPage
    );
    this.pageDataToDisplay.emit(this.dataTobeDisplayed);
  }

  // to send per page data onload
  onPageSelect(i) {
    this.selectedPage = i;
    this.sendData();
  }

  // to change per page count
  onLimitChange() {
    this.selectedPage = 1;
    this.sendData();
  }

  onPrev(): void {
    this.selectedPage = this.selectedPage - 1;
    this.sendData();
  }

  onNext(next: boolean): void {
    this.selectedPage = this.selectedPage + 1;
    this.sendData();
  }

  lastPage(): boolean {
    return this.perPage * this.page > this.count;
  }

  getPages() {
    let pagesArr = [];
    for (let i: any = 0; i < this.data.length / this.perPage; i++) {
      pagesArr.push(i + 1);
    }
    return pagesArr;
  }
}
