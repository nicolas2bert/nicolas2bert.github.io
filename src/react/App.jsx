import '../css/index.css';
import { Container } from './ui-elements/Container';
import Home from './Home';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        <Container>
            <Home/>
        </Container>
    </div>,
    document.getElementById('app'));
