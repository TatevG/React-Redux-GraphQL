import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import Path from './path';
import Users from '../../containers/users';
import User from '../../containers/user';
// import Loading from '../../components/loading';

class Root extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Path exact
                    path='/'
                >
                    <Users/>
                </Path>
                <Path
                    path='/user/:id'
                >
                    <User/>
                </Path>
            </Switch>
        )
    }
}

const mapStateToProps = store => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

Root.propTypes = {
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));