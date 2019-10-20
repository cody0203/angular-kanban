import { Component } from "@angular/core";
import { List } from "./List";
import { BoardService } from "./board.service";
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from "./dialog/dialog.component"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private boardService: BoardService, public dialog: MatDialog) {
    this.list = this.boardService.list;
    this.newJob = this.boardService.newJob;
    this.newList = this.boardService.newList;
  }
  list: List[];
  newJob: string;
  newList: string
  data: []

  handleAddNewJob(newJob) {
    this.boardService.addNewJob(newJob);
  }

  handleAddNewList(newList) {
    this.boardService.addNewList(newList);
    this.newList = null;
  }

  handleDeleteJob(indexes) {
    this.boardService.deleteJob(indexes);
  }

  handleDeleteList(index) {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.boardService.deleteList(index)
        }
      });
  }
}
