const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
    render = () => {
        return (
            <div>Hello World!</div>
        );
    }
}

const init = () => {
    ReactDOM.render( <HelloWorld/>, document.getElementById('app') );
}

window.onload = init;