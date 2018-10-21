import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
​
const todoListStorageKey = 'Todo_List';
​
const defaultTodoList = [
  {title: '#100DaysOfCode'},
  {title: 'Practice Mock Interviews'},
  {title: 'Develop and launch a new App'},
  {title: 'Finish your Portfolio Site'},
  {title: 'Take Breaks During Coding'},
  {title: 'Go to weekly Meetups'},
  {title: 'Contribute to Open Source'},
];

@Injectable()
export class TodoListService {
  todoList: TodoItem[];
​
  constructor(private storageService: StorageService) {
  this.todoList = 
    storageService.getData(todoListStorageKey) || defaultTodoList;
}
saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
}
 addItem(item: TodoItem) {
  this.todoList.push(item);
  this.storageService.setData(todoListStorageKey, this.todoList);
}
updateItem(item: TodoItem, changes) {
  const index = this.todoList.indexOf(item);
  this.todoList[index] = { ...item, ...changes };
  this.storageService.setData(todoListStorageKey, this.todoList);
} 

deleteItem(item: TodoItem) {
  const index = this.todoList.indexOf(item);
  this.todoList.splice(index, 1);
  this.saveList();
}
  getTodoList() {
    return this.todoList;
  }
  }