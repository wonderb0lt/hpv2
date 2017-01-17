import React from 'react';
import {render} from 'react-dom';

import Prompt from './prompt';

class App extends React.Component {
    render() {
        return <Prompt />;
    }
}

// Import styling. This makes Webpack embed the compiled CSS into the page (...somehow...)
import '../style/main.scss';
render(<App/>, document.getElementById('app'));