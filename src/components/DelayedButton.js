import React, { Component } from 'react';

class DelayedButton extends Component {

    delayedClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
            }, this.props.delay
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.delayedClick}>Delayed Button!</button>
            </div>
        );
    }
}

export default DelayedButton;
