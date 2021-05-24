import React from 'react';
import './App.scss';
import { DARK_THEME } from './resources/theme';

const App: React.FC<{}> = () => {
    return (
        <div className='App'>
            <h1 style={{ color: DARK_THEME.themePrimary }}>Hello from Appunti</h1>
        </div>
    );
};

export default App;
