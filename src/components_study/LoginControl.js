import React, {Component} from 'react';
import Greeting from "./Greeting";

class LoginButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                登陆
            </button>
        );
    }
}

class LogoutButton extends  Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                退出
            </button>
        );
    }
}

export default  class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

