import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  text: string
  day: string
  reminder: boolean = false
  taskid!: any

  constructor(private taskservice: TaskService,private route: ActivatedRoute){}

  ngOnInit() {
    this.taskid = this.route.snapshot.paramMap.get('id')
  }

  onEdit() {

    if(!this.text){
      alert('please add a task')
      return
    }

    const EditedTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.taskservice.updateTask(EditedTask, this.taskid).subscribe()

    this.text= ''
    this.day= ''
    this.reminder = false

  }

}
