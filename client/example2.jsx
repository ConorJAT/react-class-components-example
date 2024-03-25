const React = require('react');
const ReactDOM = require('react-dom');

class HelloUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
        };
    }

    handleNameChange = (e) => {
        this.setState({ username: e.target.value });
    };
    
    render() {
        return (
            <div>
                <p>Hello, {this.state.username}</p>
                <label>Change Username:</label>
                <input type="text" value={this.state.username} onChange={this.handleNameChange}/>
            </div>
        );
    };
};

const init = () => {
    ReactDOM.render( <HelloUser username="Conor"/>, document.getElementById('app') );
}

window.onload = init;