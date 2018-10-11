import React from 'react';
import Course from './Course.jsx';

class DesktopDev extends React.Component {
	render() {
		const coursesData = [
			{title: "C++", link: "/desktop/cpp",imageSrc: "../img/mobile.jpg"},
			{title: "Java", link: "/desktop/java",imageSrc: "../img/mobile.jpg"},
			{title: "Python", link: "/desktop/python",imageSrc: "../img/mobile.jpg"}
		];
		return (
			<main>
				<h4>Настольные приложения</h4>
				<div className={"courseList"}>
					{coursesData.map( function(course) { return <Course data-src={course.imageSrc} data-title={course.title} data-link={course.link}/>})}
				</div>
			</main>
		)
	}
}
module.exports = DesktopDev;