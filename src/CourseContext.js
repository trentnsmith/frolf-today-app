import React from 'react';
import COURSES from './courses';

const CourseContext = React.createContext({
    courses: [COURSES]
})

export default CourseContext