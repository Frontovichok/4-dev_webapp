import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import CourseListExtend from './CourseListExtend.jsx';
import CourseDetail from './CourseDetail.jsx';
import NotFound from './NotFound.jsx';

class MobileDev extends React.Component {
	componentDidMount() {
		document.title = "Mobile";
		window.scrollTo(0,0);
	}
	render() {
        const courses = [
            {
                title: "Android",
                description: "Andriod то-то",
                link: "/mobile/android",
                imageSrc: "../img/android.jpg",
                extendData: [
                    {title: "Языки программирования", data: [{title: "Java", img: "../img/js_icon.png"}]},
                    {title: "Фреймворки", data: [{title: "1", img: "../img/js_icon.png"}, {title: "2", img: "../img/js_icon.png"}, {title: "3", img: "../img/js_icon.png"}]},
                    {title: "Языки разметки", data: [{title: "XML", img: "../img/js_icon.png"}]},
                    {title: "Базы данных", data: [{title: "MySQL", img: "../img/js_icon.png"}, {title: "YourSQL", img: "../img/js_icon.png"}, {title: "UsSQL", img: "../img/js_icon.png"}]},
                ],
                details: [
                    {title: "Android разработка", description: "Android разработка ..."},
                    {title: "Язык разметки", description: "Описание ..."},
                    {title: "Языки программирования", description: "Описание ..."},
                    {title: "Используемые фреймворки", description: "Описание ..."},
                    {title: "Пакетные менеджеры", description: "Описание ..."},
                    {title: "Упаковщики", description: "Описание ..."},
                    {title: "Системы контроля версий", description: "Описание ..."},
                    {title: "Среды разработки", description: "Описание ..."},
                ],
            },
            {
                title: "IOS",
                description: "IOS то-то",
                link: "/mobile/ios",
                imageSrc: "../img/ios.jpg",
                extendData: [
                    {title: "Языки программирования", data: [{title: "Swift", img: "../img/js_icon.png"}, {title: "Objective-C", img: "../img/js_icon.png"}]},
                    {title: "Фреймворки", data: [{title: "1", img: "../img/js_icon.png"}, {title: "2", img: "../img/js_icon.png"}, {title: "3", img: "../img/js_icon.png"}]},
                    {title: "Языки разметки", data: [{title: "XML", img: "../img/js_icon.png"}]},
                    {title: "Базы данных", data: [{title: "MySQL", img: "../img/js_icon.png"}, {title: "YourSQL", img: "../img/js_icon.png"}, {title: "UsSQL", img: "../img/js_icon.png"}]},
                ],
                details: [
                    {title: "IOS разработка", description: "IOS разработка ..."},
                    {title: "Заголовок 2", description: "Описание 2"},
                    {title: "Заголовок 3", description: "Описание 3"}
                ]
            }
        ];
		return (
            <main>
                <Link to={"/mobile"} className={"linksHistory"}>Мобильные приложения</Link>
                <Switch>
                    <Route exact path='/mobile' children={() => <CourseListExtend data-courses={courses}/>}/>
                    <Route path='/mobile/android' children={()=><CourseDetail data-title={courses[0].title} data-content={courses[0].details}/>}/>
                    <Route path='/mobile/ios' children={()=><CourseDetail data-title={courses[1].title} data-content={courses[1].details}/>}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
		)
	}
}
module.exports = MobileDev;