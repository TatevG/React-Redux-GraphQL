import React, { Component } from 'react';

class Loading extends Component{
    render(){
        return(
            <div className="loading">
                <img className="loadingImg" src="/public/images/loading.gif" alt="Loading..."/>
            </div>
        )
    }
}
export default Loading;