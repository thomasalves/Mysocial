import { toDoService } from './to-do-list.service';
import { Component, OnInit } from '@angular/core';
import { toDo } from './to-do-list.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDo: toDo[] = [];


  constructor(private toDoService: toDoService) { }

  ngOnInit(): void {
    this.toDoService.readToDo().subscribe((todo: any) => {
      this.toDo= todo
    })
  }

}
