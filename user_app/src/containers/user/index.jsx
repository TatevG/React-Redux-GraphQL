import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../../components/loading';
import { GetUser, UpdateCity } from '../../actions/user';
import ShowUser from '../../components/userComponents/showUser';

class User extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.GetUser(this.props.match.params.id);
    }
    render() {
        const { user, loading } = this.props;
        if (loading) {
            return (
                <Loading />
            )
        }
        return (
            <ShowUser {...this.props}
                key={user.id || 'first'}
                loading={loading}
                user={user}
                GetUser={() => this.props.GetUser(this.props.match.params.id)}
                UpdateCity={(city) => this.props.UpdateCity(this.props.match.params.id, city)}
            />
        )
    }
}
const mapStateToProps = store => {
    return {
        user: store.user.user,
        loading: store.user.loading,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        GetUser: (id) => dispatch(GetUser(id)),
        UpdateCity: (id, city) => dispatch(UpdateCity(id, city)),

    };
};
User.propTypes = {
    GetUser: propTypes.func.isRequired,
    UpdateCity: propTypes.func.isRequired,
    user: propTypes.objectOf(propTypes.any).isRequired,
    loading: propTypes.bool.isRequired,
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));