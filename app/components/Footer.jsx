import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
class Footer extends React.Component {
	render() {
		return (
				<footer>
                    <nav>
						<Link to="/contacts">Контакты</Link>
                        <Link to="/about">О сайте</Link>
					</nav>
				</footer>
			)
	}
}
module.exports = Footer;