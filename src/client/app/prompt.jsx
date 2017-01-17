import React from 'react';
import keydown from 'react-keydown';

class Prompt extends React.Component {
    constructor() {
        super();
        this.prompt = 'user@wonderb0.lt $';
        this.entered = '';
    }

    componentWillReceiveProps( { keydown } ) {
        if (keydown.event) {
            console.log(keydown.event);
            this.entered += keydown.event.key;
        }
    }


    render() {
        return <p><span>{this.prompt}</span>&nbsp;<span>{this.entered}</span></p>
    }
}

export default keydown(Prompt);