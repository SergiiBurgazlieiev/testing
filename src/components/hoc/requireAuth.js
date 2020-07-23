import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        //OurComponent just got Mounted
        componentDidMount(){
            this.shouldNavigateAway();
        }

        //Our Component recived new props
        componentDidUpdate(){
            this.shouldNavigateAway();
        }

        shouldNavigateAway = () => {
            if(!this.props.auth){
                this.props.history.push('/');
            }
        }

        render(){
            return <ChildComponent {...this.props} />
        }
    }

    const mapStateToProps = ({auth}) => { return {auth}};

    return connect(mapStateToProps)(ComposedComponent);
};