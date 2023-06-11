const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/tasks', TaskController.index);
router.get('/pert', TaskController.pert);
router.get('/create', TaskController.create);
router.post('/create', TaskController.store);
router.get('/tasks/crud', TaskController.crud);
router.post('/tasks/delete', TaskController.destroy);
router.get('/tasks/edit/:id', TaskController.edit);
router.post('/tasks/edit/:id', TaskController.update);

module.exports = router;