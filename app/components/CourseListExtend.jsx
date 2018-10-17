import React from 'react';
import CourseExtend from './CourseExtend.jsx';
class CourseListExtend extends React.Component {
    render() {
        return (
            <div className={"courseList courseList-extend"}>
                {this.props["data-courses"].map((course, iter) => <CourseExtend data-src={course.imageSrc} data-title={course.title} data-description={course.description} data-link={course.link} data-extend_data={course.extendData} key={iter}/>)}
            </div>
        )
    }
}
module.exports = CourseListExtend;