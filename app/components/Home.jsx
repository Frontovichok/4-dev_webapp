import React from 'react';
import CourseList from './CourseList.jsx';
// import course from '../../jsonData/programmingDirections.json';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.breakScroll = this.breakScroll.bind(this);
    }
	componentDidMount() {
		document.title = "Home";
        window.scrollTo(0,0);
        window.onscroll = this.handleScroll;
        this.handleScroll();
	}
	componentWillUnmount() {
        this.breakScroll();
    }
    handleScroll(event) {
        let headerElement = document.querySelector("header"),
            navElement = document.querySelector("header nav"),
            courseListElement = document.getElementsByClassName("courseList")[0];

        if((courseListElement.getBoundingClientRect().top - headerElement.offsetHeight - 15) >= 0) {
            navElement.style.backgroundColor = "transparent";
        } else {
            navElement.style.backgroundColor = "";
        }
    }
    breakScroll() {
        document.querySelector("header nav").style.backgroundColor = "rgba(23, 29, 44, 0.96)";
        window.onscroll = undefined;
    }
	render() {
        let courses = [
            {
            	title: "Веб сайты",
				description: "Веб сайт - одна или несколько логически связанных между собой веб страниц. Веб сайты в совокупности представляют собой всемирную паутину",
				link: "/web",
				imageSrc: "../img/web.mp4",
			},
            {
                title: "Мобильные приложения",
                description: "Мобильные приложения то-то, то-то",
                link: "/mobile",
                imageSrc: "../img/mobile.mp4"
            },
            {
                title: "Микроконтроллеры",
                description: "Микроконтроллеры то-то, то-то",
                link: "/microcontrollers",
                imageSrc: "../img/microcontroller.mp4"
            },
            {
                title: "Нейросети",
				description: "Нейросети то-то, то-то",
				link: "/neuro",
				imageSrc: "../img/neuro.mp4"
            }
        ];
		return (
			<main>
                <div className="main_page_head">
                    <h1>Справочник по актуальному стеку технологий</h1>
                </div>
				<CourseList data-courses={courses}/>
			</main>
			)
	}
}
module.exports = Home;

// <aside>
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </aside>