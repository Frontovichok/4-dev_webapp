import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

class CourseExtend extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = {
            extendData: this.props["data-extend_data"],
            extendDataTitle: this.props["data-extend_data"][0].title,
            extendDataList: this.props["data-extend_data"][0].data
        };
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.previousData = this.previousData.bind(this);
        this.nextData = this.nextData.bind(this);
        this.choiceData = this.choiceData.bind(this);
    }

    componentDidMount() {
        this.choiceData(this.counter);
    }
    previousData() {
        if (this.state.extendData[--this.counter] !== undefined)
            return {title: this.state.extendData[this.counter].title, data: this.state.extendData[this.counter].data};
        else
            return {title: this.state.extendData[this.counter = this.state.extendData.length - 1].title, data: this.state.extendData[this.counter].data};
    }

    nextData() {
        if (this.state.extendData[++this.counter] !== undefined)
            return {title: this.state.extendData[this.counter].title, data: this.state.extendData[this.counter].data};
        else
            return {title: this.state.extendData[this.counter = 0].title, data: this.state.extendData[this.counter].data};
    }

    handleClickPrevious() {
        let extendData;

        this.refs[`button${this.counter}`].className = ""; // ставим кнопку в неактивное состояние
        extendData = this.previousData();
        this.refs[`button${this.counter}`].className = "choice-data-container--button-active"; // ставим кнопку в активное состояние
        this.setState(state => ({
            extendDataTitle: extendData.title,
            extendDataList: extendData.data
        }));
    }

    handleClickNext() {
        let extendData;

        this.refs[`button${this.counter}`].className = ""; // ставим кнопку в неактивное состояние
        extendData = this.nextData();
        this.refs[`button${this.counter}`].className = "choice-data-container--button-active"; // ставим кнопку в активное состояние
        this.setState(state => ({
            extendDataTitle: extendData.title,
            extendDataList: extendData.data
        }));
    }

    choiceData(i) {
        let extendData;

        this.refs[`button${this.counter}`].className = "";
        this.refs[`button${i}`].className = "choice-data-container--button-active";
        extendData = {title: this.state.extendData[this.counter = i].title, data: this.state.extendData[this.counter = i].data};

        this.setState(state => ({
            extendDataTitle: extendData.title,
            extendDataList: extendData.data
        }));
    }

    render() {
        return (
            <div className={"course course-extend"}>
                <h3>{this.props["data-title"]}</h3>
                <div className={"img_container"} style={{backgroundImage: `url(${this.props["data-src"]})`}}>
                    <div className={"choice-data-container"}>
                        {this.state.extendData.map((item, iter) => <button ref={`button${iter}`} onClick={() => this.choiceData(iter)}>{item.title}</button>)}
                    </div>
                </div>
                <div className={"extend_data"}>
                    <span onClick={this.handleClickPrevious} className={"previous_data"}></span>
                    <h2>{this.state.extendDataTitle}</h2>
                    <ul>{this.state.extendDataList.map((item, iter) => <li><img src={item.img}/><span className={"extend-data--title"}>{item.title}</span><span className={`extend-data--version${(item.version === "N") ? " color--red" : " color--green"}`}>{item.version}</span></li>)}</ul>
                    <span onClick={this.handleClickNext} className={"next_data"}></span>
                </div>
                <Link to={this.props["data-link"]} className="course-link">ПОДРОБНЕЕ</Link>
            </div>
        )
    }
}
module.exports = CourseExtend;