import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTask = '';
  dueDate: Date = new Date();
  priority = 'Medium';

  constructor() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  addTask() {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: this.newTask,
      dueDate: this.dueDate,
      priority: this.priority,
      completed: false,
    };
    this.todos.push(newTodo);
    this.updateLocalStorage();
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
    this.updateLocalStorage();
  }

  removeTask(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  isOverdue(todo: Todo): boolean {
    return new Date(todo.dueDate) < new Date() && !todo.completed;
  }
}
