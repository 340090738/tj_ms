import React,{Component} from 'react'


class UserGreeting extends  Component {
    render() {
        return (
            <h1>欢迎回来!</h1>
        );
    }
}

class GuestGreeting extends  Component {
    render() {
        return (
            <h1>请先注册!</h1>
        );
    }
}


export default class Greeting extends Component {
    constructor(props) {
        super(props);
        // this.isLoggedIn = this.props.isLoggedIn;
    }

    render() {
        this.isLoggedIn = this.props.isLoggedIn;
        if (this.isLoggedIn) {
            return <UserGreeting/>;
        }
        return <GuestGreeting/>;
    }
}