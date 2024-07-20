import { Component } from "@angular/core";
import Character from "./Character";
import sampleData from "./data.json";
import { UserService } from "./user.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  users: any = sampleData; // total users data will be stored here
  page = 1; // page to be displayed initially
  limit = 20; // Initial no of rows to be diplayed per each page
  columns: any = []; // headers of users data
  pageData = []; // data to be displayed for each page

  // user service will provide all users data
  constructor(private service: UserService) {}

  ngOnInit() {

    // this will add all headers of users data from json file dynamically
    for (let x in this.users[0]) {
      this.columns.push(x);
    }
  }

  // to receive data to be displayed per page from pagination component
  pageDataToDisplay(data) {
    this.pageData = data;
  }

  // to make api call on clicking submit button
  onSubmit(selectedUser) {
    this.service.updateUser(selectedUser).subscribe(
      (data: any) => {
        alert("success");
      },
      (error: any) => {
        alert("failed");
      }
    );
  }
}
