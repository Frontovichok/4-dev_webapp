import React from 'react';
class Contacts extends React.Component {
    componentDidMount() {
        document.title = "Контакты";
        window.scrollTo(0,0);
    }
	render() {
        let contactsJSON = {
            "name": "Мага",
            "address": "МагаДан",
            "phone": "8916 503 03 82"
        };
		return (
            <main>
                <h4>Контакты</h4>
                <p>Имя: {contactsJSON.name}</p>
                <p>Адрес: {contactsJSON.address}</p>
                <p>Телефон: {contactsJSON.phone}</p>
            </main>
			)

	}
}

module.exports = Contacts;