import React from 'react';
import Course from './Course.jsx';
class CourseList extends React.Component {
	render() {
		return (
			<div className={"courseList"}>
				{this.props["data-courses"].map( function(course, i) { return <Course data-src={course.imageSrc} data-title={course.title} data-description={course.description} data-link={course.link} key={i}/>})}
			</div>
		)
	}
}
module.exports = CourseList;
