import React from 'react';
import Course from './Course.jsx';

class ScienceDev extends React.Component {
	render() {
		const coursesData = [
			{title: "Matlab", link: "/science/matlab",imageSrc: "../img/matlab.jpg"},
			{title: "Mathcad", link: "/science/mathcad",imageSrc: "../img/matlab.jpg"},
			{title: "Wolfram mathematica", link: "/science/wolfram_mathematica",imageSrc: "../img/matlab.jpg"},
		];
		return (
			<main>
				<h4>Разработка программ для научных целей</h4>
				<div className={"courseList"}>
					{coursesData.map( function(course) { return <Course data-src={course.imageSrc} data-title={course.title} data-link={course.link}/>})}
				</div>
			</main>
		)
	}
}
module.exports = ScienceDev;