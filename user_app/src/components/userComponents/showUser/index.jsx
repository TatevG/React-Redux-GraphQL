import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class ShowUser extends Component {
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
            alert('countri value is not valid');
        }
    }
    render() {
        const { user } = this.props;
        return (
            <div className="userInfo">
                <Link to="/" className="back">&larr; Back</Link>
                <div className="personalInfo">
                    <div className="personalInner">
                        <img src="/public/images/avatar.jpeg" alt="avatar" />
                        <h2>{user.name}</h2>
                        <p className="age">{user.age} years</p>
                        {
                            user.city !== null ?
                                <p className="country">{user.city}</p>
                                :
                                <div className="searchField">Country:
                                    <input
                                        type="text"
                                        value={this.state.country}
                                        name="country"
                                        onChange={this.handlerChange}
                                        autoFocus
                                    />
                                    <button type="submit" onClick={this.handlerClick}>Submit</button>
                                </div>
                        }
                        <ul className="userProfession" >
                            {
                                user.knowledge && user.knowledge.map(know => {
                                    return <li key={`${user.id}${know.language}`}>{know.language}
                                        <ul className="frameworks">{
                                            know.frameworks.map(frames => {
                                                return <li key={frames}>{frames}</li>
                                            })}
                                        </ul>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
ShowUser.propTypes = {
    UpdateCity: propTypes.func.isRequired,
    user: propTypes.objectOf(propTypes.any).isRequired,
}
export default ShowUser;