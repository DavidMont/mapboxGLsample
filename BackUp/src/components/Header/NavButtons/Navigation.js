import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Logo from '../Logo';
import Home from './Home';
import Maps from './Maps';
import Vehicles from './Vehicles';
import Reports from './Reports';
import Help from './Help';
import Username from './Username';
import Password from './Password';
import Sign from './Sign';

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    }
};

const AppBarExampleIconButton = () => (

    <AppBar style={styles.style}
        onTitleTouchTap={handleTouchTap}
        iconElementLeft={
        <div>
            <Logo />
            <Home />
            <Maps />
            <Vehicles />
            <Reports />
            <Help />
        </div>}
        iconElementRight={
        <div>
             <Username />
             <Password />
             <Sign />
        </div>
        }
    />
);

export default AppBarExampleIconButton;