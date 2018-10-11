import React from 'react';
import Course from './Course.jsx';

class NeuroDev extends React.Component {
	render() {
		const coursesData = [
			{title: "Такая сеть", link: "/neuro/neuro1",imageSrc: "../img/neuro.jpg"},
			{title: "Такая сеть", link: "/neuro/neuro2",imageSrc: "../img/neuro.jpg"}
		];
		return (
			<main>
				<h4>Разработка нейронных сетей</h4>
				<div className={"courseList"}>
					{coursesData.map( function(course) { return <Course data-src={course.imageSrc} data-title={course.title} data-link={course.link}/>})}
				</div>
			</main>
		)
	}
}
module.exports = NeuroDev;