import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { changeAuth } from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {

    renderButton = () => {
        return this.props.auth ?
        (<button onClick={() => this.props.changeAuth(false)}>Sign Out</button>)
        :(<button onClick={() => this.props.changeAuth(true)}>Sign In</button>);
    }

    renderHeader = () => {
        return(
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/post'>Post Comment</Link></li>
                <li>{this.renderButton()}</li>
            </ul>
        );
    }

    render(){
        return (
            <div>
                {this.renderHeader()}
               <Route path='/post' component={CommentBox} />
               <Route exact path='/' component={CommentList} />
            </div>
        );
    }
    
}
const mapStateToProps = ({auth}) => {
    return {auth};
}
export default connect(mapStateToProps, { changeAuth })(App);