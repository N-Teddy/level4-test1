const Course = require('../models/Courses.model')

const getAllCourses = async (req, res) => {

    try {
        const course = await Course.find()
        res.json(course);
        console.log(course);
        
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Error occured while retreiving couse list'
        })
    }

};


const addCourse = (req, res) => {

    const body = req.body;

    const newCourse = new Course({
        course_name: body.name,
        description: body.phone,
        category: body.email,
        schedule_id: body.schedule_id,
        classroom_id: body.classroom_id,
        instructor_id: body.instructor_id,
    })

    newCourse.save()
        .then(connect => {
            res.status(201).json({
                error: false,
                message: 'Course added successfully'
            })
        })
        .catch(error => {
            res.status(500).json({
                error: true,
                message: 'Error adding course'
            })
        })

};

const updateCourse = async (req, res) => {

    try {
        const id = req.params.id;
        const body = req.body;
        await Course.findByIdAndUpdate(id, { ...body })
        res.json({ error: false, message: 'Course updated successfully' });
    } catch (error) {
        res.status(404).json({
            error: true,
            message: 'Course not found'
        });
    }
};

const deleteCourse = async (req, res) => {

    try {
        const { id } = req.params;
        await Course.findByIdAndDelete(id)
        res.json({ error: false, message: 'Course deleted successfully' });
    } catch (error) {
        res.status(404).json({
            error: true,
            message: 'Course not found'
        });
    }


};

module.exports = { getAllCourses, addCourse, updateCourse, deleteCourse };