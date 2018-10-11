import React from 'react';
import Course from './Course.jsx';
class CourseList extends React.Component {
	render() {
		return (
			<div className={"courseList"}>
				{this.props["data-courses"].map( function(course) { return <Course data-src={course.imageSrc} data-title={course.title} data-description={course.description} data-link={course.link}/>})}
			</div>
		)
	}
}
module.exports = CourseList;
