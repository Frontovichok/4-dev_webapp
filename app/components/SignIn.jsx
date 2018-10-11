import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

class SignIn extends React.Component {
    componentDidMount() {
        document.title = "Войти в систему";
    }
    render() {
        return (
            <main style={{backgroundImage: 'url("../img/Jellyfish5.jpg")'}}>
                <div className={"sign-container"}>
                    <form className={"sign-container--div"}>
                        <h3>Войдите или зарегайтесь</h3>
                        <span className={"sign-container--span"}>
                            <input type="email"/>
                            <label>Почта</label>
                        </span>
                        <span className={"sign-container--span"}>
                            <input type="text"/>
                            <label>Пароль</label>
                        </span>
                        <button className={"sign-container--sign-button"} type="submit">
                            Войти
                        </button>
                        <Link to={"/signin"} className={"sign-container--register"}>
                            Зарегестрироваться
                        </Link>
                    </form>
                </div>
            </main>
        )
    }
}
module.exports = SignIn;