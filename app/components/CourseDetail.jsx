import ReactDOM from 'react-dom';
import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import '../../styles/course.css';

class CourseDetail extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
	render() {
        let courseContent = this.props["data-content"];
        document.title = this.props["data-title"];
		return (
			<React.Fragment>
				<Link to={"#"} className={"linksHistory"}>{this.props["data-title"]}</Link>
				<article className={"courseDetailArticle"}>
					{courseContent.map((item) => {
						return (
							<React.Fragment>
								<h3>{item.title}</h3>
								<div>
									<p>{item.description}</p>
									{(item.imageSrc) ? <img src={item.imageSrc}/> : ""}
								</div>
							</React.Fragment>
						)
					})}
				</article>
			</React.Fragment>
		)
	}
}
module.exports = CourseDetail;