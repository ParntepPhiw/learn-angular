import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-toDoList',
    templateUrl: './toDoList.component.html',
    styleUrls: ['./toDoList.component.css']
})
export class ToDoListComponent {

    @Input()
    toDo: string;

    tasks = ['Coffee', 'Breakfast'];
    index: number = null;
    x: number;

    constructor() {}

    addTask() {
        if (this.toDo.length > 0) {
            this.tasks.push(this.toDo);
            this.tasks = this.tasks;
        }
    }

    deleteTask(x) {
        this.tasks.splice(x, 1);
        this.tasks = this.tasks;
    }

}