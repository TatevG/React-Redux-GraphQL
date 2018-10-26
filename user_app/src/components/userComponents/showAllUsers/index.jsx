import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class ShowAllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
        };
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handlerClick() {
        const { country } = this.state;
        if (country.length > 2) {
            this.props.UpdateCity(country);
        } else {
            alert('Value length must be mor than two characters');
        }
    }
    render() {
        const { users } = this.props;
        return (
            <div className="users">
                {
                    users.map(item => {
                        return (
                            <Link to={`/user/${item.id}`} className="user" key={item.id}>
                                <div className="userInner">
                                    <img src="public/images/avatar.jpeg" alt="avatar" />
                                    <h2>{item.name}</h2>
                                    <p className="age">{item.age} years</p>
                                    <ul className="profession">
                                        {
                                            item.knowledge.map(know => {
                                                return <li key={`${item.id}${know.language}`}>{know.language}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}
ShowAllUsers.propTypes = {
    users: propTypes.arrayOf(propTypes.any).isRequired,
}
export default ShowAllUsers;