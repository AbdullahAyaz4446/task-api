import express from 'express';
import Todocontroller from '../controllers/Todocontroller';

const router = express.Router();

router.get('/get-all', Todocontroller.getalltodo);
router.post('/adddata', Todocontroller.createTodo);
router.put('/complete:id', Todocontroller.updatetodo);
router.delete('/:id', Todocontroller.deleteUser);
router.put('/updatedata', Todocontroller.update);

export default router;
