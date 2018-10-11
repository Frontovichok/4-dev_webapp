import React from 'react';
import Course from './Course.jsx';

class TradeDev extends React.Component {
	render() {
		const coursesData = [
			{title: "Такая-то среда", link: "/trade/trade1",imageSrc: "../img/trade.jpg"},
			{title: "Такая-то среда", link: "/trade/trade2",imageSrc: "../img/trade.jpg"}
		];
		return (
			<main>
				<h4>Алготрейдинг</h4>
				<div className={"courseList"}>
					{coursesData.map( function(course) { return <Course data-src={course.imageSrc} data-title={course.title} data-link={course.link}/>})}
				</div>
			</main>
		)
	}
}
module.exports = TradeDev;