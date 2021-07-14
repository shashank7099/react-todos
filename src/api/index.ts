import axios from 'axios';
import Todo from '../types/Todo';

const baseUrl = process.env.REACT_APP_BACKEND_SERVER_URL;

export default {
  async add(title: string) {
    return await axios.post<Todo>(baseUrl as string, {
      title,
      completed: false
    });
  },
  async fetch() {
    return await axios.get<Todo[]>(baseUrl as string);
  },
  async delete(todo: Todo) {
    await axios.delete(`${baseUrl}/${todo.id}`);
  },
  async update(todo: Todo) {
    return await axios.patch<Todo>(`${baseUrl}/${todo.id}`, todo);
  }
};
