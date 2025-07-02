import mongoose, { Schema, Document } from 'mongoose';
import { ITodo } from '../Types/ITodo';

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date},
  updatedAt: { type: Date}
},{
  timestamps: true
});

export default mongoose.model<ITodo>('Todo', TodoSchema);
