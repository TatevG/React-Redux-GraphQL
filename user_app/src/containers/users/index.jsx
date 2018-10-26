import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { GetUsers } from '../../actions/users';
import Loading from '../../components/loading';
import ShowAllUsers from '../../components/userComponents/showAllUsers';

class Users extends Component {
    componentDidMount() {
        this.props.GetUsers();
    }
    render() {
        const { users, loading } = this.props;
        if (loading) {
            return (
                <Loading />
            )
        }
        return (
            <ShowAllUsers
                users={users}
            />
        )
    }
}
const mapStateToProps = store => {
    return {
        users: store.users.users,
        loading: store.users.loading,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        GetUsers: () => dispatch(GetUsers()),

    };
};
Users.propTypes = {
    GetUsers: propTypes.func.isRequired,
    users: propTypes.arrayOf(propTypes.any).isRequired,
    loading: propTypes.bool.isRequired,
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));