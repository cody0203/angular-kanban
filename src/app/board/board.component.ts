import { Component, Input, Output, EventEmitter } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent {
  @Input() list: [];
  @Input() newList: string;

  @Output() addNewJob = new EventEmitter();
  @Output() addNewList = new EventEmitter();
  @Output() deleteJob = new EventEmitter();
  @Output() deleteList = new EventEmitter()

  onAddNewJob(newJob: string, index: number) {
    if (newJob.trim() !== "") {
      this.addNewJob.emit({ newJob, index });
    }
  }

  onAddNewList(newList) {
    if (newList.trim() !== "") {
      this.addNewList.emit(newList);
    }
  }

  onDeleteJob(listIndex: number, jobIndex: number) {
    this.deleteJob.emit({listIndex, jobIndex})
  }

  onDeleteList(listIndex: number) {
    this.deleteList.emit(listIndex)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
