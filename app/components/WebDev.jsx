import React from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CourseListExtend from './CourseListExtend.jsx';
import CourseDetail from './CourseDetail.jsx';
import NotFound from './NotFound.jsx';

class WebDev extends React.Component {
	componentDidMount() {
        window.scrollTo(0,0);
	}

	render() {
        document.title = "Web";
		const courses = [
            {
            	title: "Frontend",
				description: "Frontend то-то",
				link: "/web/frontend",
				imageSrc: "../img/web.jpg",
				extendData: [
                    {title: "Языки программирования", data: [{title: "Javascript", version: "ES7", img: "../img/js_icon.png"}, {title: "Typescript", version: "2.0", img: "../img/ts_icon.png"}]},
					{title: "Фреймворки", data: [{title: "React", version: "15", img: "../img/js_icon.png"}, {title: "React Native", version: "1.0", img: "../img/js_icon.png"}, {title: "Angular", version: "1.0", img: "../img/js_icon.png"}, {title: "Vue", version: "1.0", img: "../img/js_icon.png"}]},
                    {title: "Языки разметки", data: [{title: "HTML", version: "5", img: "../img/js_icon.png"}]},
                    {title: "Язык стилевого оформления", data: [{title: "Css", version: "3", img: "../img/js_icon.png"}]},
                    {title: "Стилевые фреймворки", data: [{title: "Bootstrap", version: "1.0", img: "../img/js_icon.png"}]},
                    {title: "Препроцессоры CSS", data: [{title: "Sass", version: "1.0", img: "../img/js_icon.png"}, {title: "Less", version: "1.0", img: "../img/js_icon.png"}, {title: "..ss", version: "1.0", img: "../img/js_icon.png"}]},
				],
                details: [
                    {title: "Frontend разработка", description: "Frontend разработка ...", imageSrc: "../img/frontend_roadmap.jpg"},
                    {title: "Язык разметки", description: "Описание ..."},
                    {title: "Язык стилевого оформления", description: "Описание ..."},
                    {title: "Языки программирования", description: "Описание ..."},
                    {title: "Используемые фреймворки", description: "Описание ..."},
                    {title: "Препроцессоры стилевого оформления", description: "Описание ..."},
                    {title: "Пакетные менеджеры", description: "Описание ..."},
                    {title: "Упаковщики", description: "Описание ..."},
                    {title: "Системы контроля версий", description: "Описание ..."},
                    {title: "Среды разработки", description: "Описание ..."},
                ],
			},
            {
                title: "Backend",
				description: "Backend то-то",
				link: "/web/backend",
				imageSrc: "../img/web.jpg",
                extendData: [
                    {title: "Языки программирования", data: [{title: "Javascript", version: "ES7", img: "../img/js_icon.png"}, {title: "PythonScript", version: "1.0", img: "../img/js_icon.png"}, {title: "C++Script", version: "1.0", img: "../img/js_icon.png"}, {title: "PHPScript", version: "1.0", img: "../img/js_icon.png"}, {title: "...Script", version: "1.0", img: "../img/js_icon.png"}]},
                    {title: "Фреймворки", data: [{title: "1", img: "../img/js_icon.png"}, {title: "2", version: "1.0", img: "../img/js_icon.png"}, {title: "3", version: "1.0", img: "../img/js_icon.png"}]},
                    {title: "Базы данных", data: [{title: "MySQL", img: "../img/js_icon.png"}, {title: "YourSQL", version: "1.0", img: "../img/js_icon.png"}, {title: "UsSQL", version: "1.0", img: "../img/js_icon.png"}]},
                ],
                details: [
                    {title: "Backend разработка", description: "Backend разработка ...", imageSrc: "../img/backend_roadmap.jpg"},
                    {title: "Заголовок 2", description: "Описание 2"},
                    {title: "Заголовок 3", description: "Описание 3"}
                ]
            }
		];

		return (
			<main>
				<Link to={"/web"} className={"linksHistory"}>Веб сайты</Link>
				<Switch>
					<Route exact path='/web' children={() => <CourseListExtend data-courses={courses}/>}/>
					<Route path='/web/frontend' children={()=><CourseDetail data-title={courses[0].title} data-content={courses[0].details}/>}/>
					<Route path='/web/backend' children={()=><CourseDetail data-title={courses[1].title} data-content={courses[1].details}/>}/>
					<Route component={NotFound}/>
				</Switch>
			</main>
		)
	}
}
module.exports = WebDev;