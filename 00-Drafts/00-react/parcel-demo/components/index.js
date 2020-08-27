/* JavaScript module code here */
import React from 'react';
import ReactDOM from 'react-dom';
import SubscribeBTN from './SubscribeBTN';

// Use JSS to Center Everything 
const bodyStyle = {
    "display":"grid",
    "placeItems":"center",
    "font":"900 24px/1.4, sans-serif",
    "textAlign":"center",
    "margin":"10em",
}
ReactDOM.render(
    <div style={bodyStyle}>
        <SubscribeBTN />
    </div>,
    document.getElementById('root')
);