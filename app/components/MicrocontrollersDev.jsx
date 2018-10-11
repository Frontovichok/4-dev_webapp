import React from 'react';
import Course from './Course.jsx';

class MicrocontrollersDev extends React.Component {
	componentDidMount() {
		document.title = "Microcontrollers";
		window.scrollTo(0,0);
	}
	render() {
		const coursesData = [
			{title: "Arduino", link: "/microcontrollers/arduino",imageSrc: "../img/microcontroller.jpg"},
			{title: "Raspberry Pi", link: "/microcontrollers/raspberry_pi",imageSrc: "../img/microcontroller.jpg"},
		];
		return (
			<main>
				<h4>Программирование микроконтроллеров</h4>
				<div className={"courseList"}>
					{coursesData.map( function(course) { return <Course data-src={course.imageSrc} data-title={course.title} data-link={course.link}/>})}
				</div>
			</main>
		)
	}
}
module.exports = MicrocontrollersDev;