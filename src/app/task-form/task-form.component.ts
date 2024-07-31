import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  postForm!: FormGroup ;


  constructor(private formBuilder: FormBuilder,private TaskService : TaskService){
    this.postForm = this.formBuilder.group({
      // Champ titre avec un validateur requis
      nom: ['', Validators.required],
      // Champ commentaire avec un validateur requis
      description: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

  onSubmit(){
    // verifier si le formulaire est bien valide
    if(this.postForm.valid){
      // appel de de la methode savePoste definie dans le userService
      this.TaskService.savePost(this.postForm.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error)=>{
          console.log(error);
        }
      })
    }
  }
}


