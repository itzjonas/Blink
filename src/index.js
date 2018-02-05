import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import './index.css';

/**
 * Part 1: Make it fade in and fade out
 * Part 2: Make it fade in fast, fade out slow
 * Part 3: Make it change colors after every blink
 */
class App extends PureComponent {
    componentDidMount() {
        const part3 = document.getElementsByClassName('p3');

        function changeColor() {
          part3[0].style.background = (() => {
                const hex = '0123456789abcdef';
                let rgb = '#';

                for (let i = 0; i < 6; i++) {
                    rgb += hex[Math.floor(Math.random() * 16)];
                }

                return rgb;
            })();
        }

        part3[0].addEventListener('animationiteration', changeColor);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 p1" />
                    <div className="col-sm-4 p2" />
                    <div className="col-sm-4 p3" />
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
