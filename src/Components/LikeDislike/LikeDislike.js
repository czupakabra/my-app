//import cx from 'classnames';
import React, { Component } from 'react';

export default class LikeDislike extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            likes: 100,
            dislikes: 25,
            isLiked: false,
            isDisliked: false
        };
        
        this._likeOnClick = this._likeOnClick.bind(this);
        this._dissLikeOnClick = this._dissLikeOnClick.bind(this);
    }
    
    _likeOnClick(){
        if(!this.state.isLiked && !this.state.isDisliked){
            this.setState({
                likes: this.state.likes+1,
                isLiked: true
            });
        }
        else if(!this.state.isLiked && this.state.isDisliked){
            this.setState({
                likes: this.state.likes+1,
                dislikes: this.state.dislikes-1,
                isLiked: true,
                isDisliked: false
            });
        }
        else if(this.state.isLiked){
            this.setState({
                likes: this.state.likes-1,
                isLiked: false
            });
            
        }
    }
    _dissLikeOnClick(){
        if(!this.state.isDisliked && !this.state.isLiked){
            this.setState({
                dislikes: this.state.dislikes+1,
                isDisliked: true
            });
        }
        else if(!this.state.isDisliked && this.state.isLiked){
            this.setState({
                dislikes: this.state.dislikes+1,
                likes: this.state.likes-1,
                isLiked: false,
                isDisliked: true
            });
        }
        else if(this.state.isDisliked){
            this.setState({
                dislikes: this.state.dislikes-1,
                isDisliked: false
            });
            
        }
    }
    
    render() {
        const likedClassName = this.state.isLiked ? "like-button liked" : "like-button";
        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>
                    <button onClick={this._likeOnClick} className={likedClassName}>Likes | <span className="likes-counter">{this.state.likes}</span></button>
                    <button onClick={this._dissLikeOnClick} className="like-button">Dislike | <span className="dislikes-counter">{this.state.dislikes}</span></button>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}