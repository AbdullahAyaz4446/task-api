import express from 'express';
import Todocontroller from '../controllers/Todocontroller';

const router = express.Router();

router.get('/get-all', Todocontroller.getalltodo);
router.post('/add-data', Todocontroller.createTodo);
router.put('/:id', Todocontroller.updatetodo);
router.delete('/:id', Todocontroller.deleteUser);

export default router;
