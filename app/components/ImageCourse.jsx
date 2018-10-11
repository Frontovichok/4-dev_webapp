import React from 'react';
class ImageCourse extends React.Component {
	render() {
		return 
			<img src=this.props.data.src></img>
	}
}

module.exports = ImageCourse;