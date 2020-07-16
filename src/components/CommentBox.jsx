import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

class CommentBox extends Component{
    state ={
        comment:''
    }

    onChangeHandler = e =>{
        this.setState({comment:e.target.value});
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment:''});
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h4>Add a comment</h4>
                    <textarea value={this.state.comment} onChange={this.onChangeHandler}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button id='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    }
}
export default connect(null, {saveComment, fetchComments})(CommentBox);