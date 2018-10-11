import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
class Nav extends React.Component {
	render() {
		return (
				<header>
                    <nav>
                        <div className={"nav_section_left"}>
                            <Link to="/">Главная</Link>
                            <Link to="/">!Главная</Link>
                        </div>
                        <div className={"nav_section_right"}>
                            <Link to="/login">Войти</Link>
                        </div>
                    </nav>
				</header>
			)
	}
}

module.exports = Nav;