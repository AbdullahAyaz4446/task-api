import { Request, Response } from 'express';
import Todo from '../models/Todo';

const getalltodo = async (req: Request, res: Response): Promise<void> => {
  const todos = await Todo.find();
  res.json(todos);
};

const createTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);
    req.body.createdAt = new Date();
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const updatetodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};


const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};


export default {
  getalltodo,
  createTodo,
  updatetodo,
  deleteUser
};
