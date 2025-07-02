import { Request, Response } from "express";
import Todo from "../models/Todo";
import { ITodo } from "../Types/ITodo";


const getalltodo = async (req: Request, res: Response): Promise<void> => {
  const todos = await Todo.find();
  if (!todos) {
    res.status(404).json({ error: "No todos found" });
    return;
  }
  res.status(200).json(todos);
};

interface createToDo extends Request {
  body: ITodo;
}
const createTodo = async (req: createToDo, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;
    if (!title) {
      res.status(400).json({ error: "Title  are required" });
    }
    if (!description) {
      res.status(400).json({ error: "Description is required" });
    }
    req.body.createdAt = new Date();
    console.log(req.body);
    const todo = await Todo.create(req.body);
    if (!todo) {
      throw new Error("Todo creation failed");
    }
    res.status(200).json(todo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const updatetodo = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.params.id) {
      res.status(400).json({ error: "ID is required" });
    }
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const update = async (req: createToDo, res: Response): Promise<void> => {
  try {
    const { id, title, description } = req.body;
    if (!id) {
      res.status(400).json({ error: "ID is required" });
    }
    if (!title) {
      res.status(400).json({ error: "title is required" });
    }
    if (!description) {
      res.status(400).json({ error: "Description is required" });
    }
    const update = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      {
        new: true,
        timestamps: true,
      }
    );
    if (!update) {
      res.status(404).json({ error: "Todo not found" });
    } else {
      res.status(200).json(update);
    }
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.params.id) {
      res.status(400).json({ error: "ID is required" });
    }
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo deleted" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const Searchdata = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.params.id) {
      res.status(400).json({ error: "ID is required" });
    }

  } catch (error: any) {
    res.status(400).json({ error: error.Message });
  }
};

export default {
  getalltodo,
  createTodo,
  updatetodo,
  deleteUser,
  update,
};
