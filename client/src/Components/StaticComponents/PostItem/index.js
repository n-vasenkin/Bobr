import React, {Component} from 'react';
import './style.css';

/** Components **/
import Counter from '../Counter';

/** Img **/
import arrowImg from '../../../Static/img/stats/arrow.png';
import eyeImg from '../../../Static/img/stats/eye.png';
import favoriteImg from '../../../Static/img/stats/favorite.png';
import commentsImg from '../../../Static/img/stats/comments.png';

/** Module **/
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";

class PostItem extends Component {
    render() {
        const {post, currentPage} = this.props;
        console.info(post);
        const timePost = new Date(post.time).toLocaleString();
        return (
            <section className="news_item">
                <div className="top_user">
                    <img src={post.author_img} alt="user_icon" className="user_icon"/>
                    <p className="user_name">{post.author_name}</p>
                    <p className="news_time">{timePost}</p>
                </div>
                <div className="сont_title">
                    {currentPage !== "post" ?
                        <Link to={`/post/${post._id}`} className="title_news">
                            {post.title}
                        </Link> :
                        <h3 className="title_h3">{post.title}</h3>
                    }
                </div>
                <div className="heading_news">
                    {post.tags.map((tag, i) => {
                        return (
                            <p key={i}>{tag}</p>
                        )
                    })}
                </div>
                <div className="text_news">
                    {post.text}
                </div>
                {currentPage !== "post" &&
                <Link to={`/post/${post._id}`} className="news_more">
                    Читать дальше →
                </Link>
                }
                <div className="news_stats">
                    <div className="news_vote">
                        <img src={arrowImg} alt="arrowUp"/>
                        <Counter value={post.likes}/>
                        <img src={arrowImg} alt="arrowDown" className="stats_arrow_down"/>
                    </div>
                    <div className="news_favorite">
                        <img src={favoriteImg} alt="favorite"/>
                        <i>{post.favorites}</i>
                    </div>
                    <div className="news_views">
                        <img src={eyeImg} alt="eye"/>
                        <i>{post.views.length}</i>
                    </div>
                    <div className="news_comments">
                        <img src={commentsImg} alt="comments"/>
                        <i>{post.comments.length}</i>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(PostItem);