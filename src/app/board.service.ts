import { Injectable } from "@angular/core";
import { ListModel } from "./List.model";

@Injectable({
  providedIn: "root"
})
export class BoardService {
  list = ListModel;
  newJob: string;
  newList: string = "";

  addNewJob(newJob) {
    const index = newJob.index;
    const newJobContent = newJob.newJob;
    this.list[index].jobs.push(newJobContent);
    this.list[index].newJobs = "";
  }

  addNewList(newListName) {
    this.list.push({
      name: newListName,
      jobs: [""],
      newJobs: ""
    });
  }

  deleteJob(indexes) {
    const { listIndex, jobIndex } = indexes;
    this.list[listIndex].jobs.splice(jobIndex, 1);
  }

  deleteList(index) {
    this.list.splice(index, 1);
  }
}
