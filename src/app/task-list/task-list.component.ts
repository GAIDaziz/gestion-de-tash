import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskModel } from '../TaskModel';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  listTask!:TaskModel[];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getAllTask().subscribe({
      next: (response) => {
        this.listTask = response.data;
        console.log(this.listTask);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}


  
  


