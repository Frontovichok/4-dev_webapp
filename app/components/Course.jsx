import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

class Course extends React.Component {
	constructor(props) {
		super(props);
        this.playVideoHover = this.playVideoHover.bind(this);
	}
	componentDidMount() {
		this.playVideoHover();
	}
	playVideoHover() {
        let courseListElement = document.querySelector(".courseList");
        courseListElement.addEventListener("mouseover", function (event) {
        	if (event.target.className === "video") {
                event.target.play();
			}
        });
        courseListElement.addEventListener("mouseout", function (event) {
            if (event.target.className === "video") {
                event.target.pause();
            }
        })
	}
	render() {
		return (
			<div className={"course"}>
                <Link to={this.props["data-link"]} className={"img_container"}>
					<video className={"video"} loop="loop" muted="muted">
						<source src={this.props["data-src"]} type="video/mp4" />
					</video>
                </Link>
				<Link to={this.props["data-link"]} className="course-link">{this.props["data-title"]}</Link>
			</div>
		)
	}
}
module.exports = Course;