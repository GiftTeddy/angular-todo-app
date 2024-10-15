export interface Todo {
    id: number; // Add this if it doesn't exist
    title: string;
    priority: string;
    dueDate: Date; // Change this from string to Date if you want to store a Date object
    completed: boolean;
  }
  