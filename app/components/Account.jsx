import React from 'react';
class Account extends React.Component {
	render() {
        let contactsJSON = {
            "name": "_",
            "nickname": "_",
            "mail": "_"
        };
		return (
            <main>
                <h4>Акаунт</h4>
                <p>Имя: {contactsJSON.name}</p>
                <p>Ник: {contactsJSON.nickname}</p>
                <p>Почта: {contactsJSON.mail}</p>
            </main>
			)

	}
}

module.exports = Account;