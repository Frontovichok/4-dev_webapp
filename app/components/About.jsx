import React from 'react';

class About extends React.Component {
    render() {
        return (
        	<main>
        		<h4>О сайте</h4>
                <p>Сайт разработан в экспериментальных целях и не несет ответственность за ущемление прав <span style={{color: "rgb(73, 217, 234)"}}>заднеприводных</span> в РФ!</p>
        	</main>
        )
    }
}
module.exports = About;