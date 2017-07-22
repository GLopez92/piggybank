import React from 'react';

var UserList = React.createClass({
    loadUserFromServer: function(){
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadUserFromServer();
        setInterval(this.loadUserFromServer, 
                    this.props.pollInterval)
    }, 
    render: function() {
        if (this.state.data) {
            console.log('DATA!')
            var userNodes = this.state.data.map(function(User){
                return <li> {user.username} </li>,
                       <li> {user.accountBalance} </li>

            })
        }
        return (
            <div>
                <ul>
                    {userNodes}
                </ul>
            </div>
        )
    }
})

export default UserList