import React, {Component} from 'react';
import './style.css';

/* Redux */
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/Actions/actionMain";
import connect from "react-redux/es/connect/connect";

class Different extends Component {

    state = {
        differentTop: [
            {href: "", title: "Помощь"},
            {href: "", title: "Реклама"},
            {href: "", title: "Правила"},
        ],
        differentBottom: [
            {href: "", title: "Документация"},
            {href: "", title: "О сайте"},
            {href: "", title: "Работа"},
        ],
    };

    componentDidMount() {
        this.props.changeCurrentPage("different");
    }

    render() {
        const {differentTop, differentBottom} = this.state;
        return (
            <section>
                <h3 className="title_h3 title_pages">Разное</h3>
                <div className="different_container">

                    <div className="different_row">
                        {differentTop.map((el, i) => {
                            return (
                                <a href={el.href} className="different_block" key={i}>{el.title}</a>
                            )
                        })}
                    </div>

                    <div className="different_row">
                        {differentBottom.map((el, i) => {
                            return (
                                <a href={el.href} className="different_block" key={i}>{el.title}</a>
                            )
                        })}
                    </div>

                </div>
            </section>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Different);