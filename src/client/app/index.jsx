import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        return <p> Hello React?</p>;
    }
}

// Import styling. This makes Webpack embed the compiled CSS into the page (...somehow...)
import 'style/main.css';
render(<App/>, document.getElementById('app'));