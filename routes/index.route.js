const { Router } = require('express');
const router = Router();

const indexController = require('../src/controllers/index.controller');
const indexMiddleware = require('../src/middlewares/index.middleware.js'); 

router.get('/', indexController.getAllCourses);
router.post('/addCourse', indexController.addCourse);
router.put('/updateCourse/:id', indexController.updateCourse);
router.delete('/deleteCourse', indexController.deleteCourse);

// Add your routes here

module.exports = router;
