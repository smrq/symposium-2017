import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './components/App';

const rootElement = document.createElement('div');
document.body.append(rootElement);
ReactDOM.render(<App />, rootElement);
