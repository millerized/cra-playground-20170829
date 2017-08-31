import React, { Component } from 'react';
import {TextField} from 'material-ui';

import logo from './logo.svg';
import styles from './App.css';

import {GitHubAvatar} from './components/github-avatar.jsx';

export class App extends Component {
    state = {
        username: '',
    }

    render() {
        const {username} = this.state;

        return (
            <div className={styles.App}>
                <div className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo" />

                    <Header />
                </div>

                <div className={styles.avatars}>
                    <GitHubAvatar username='millerized' />

                    <PlusSymbolEmoji />

                    <GitHubAvatar username='StephenKoller' />

                    {username && <PlusSymbolEmoji />}
                    {username && <GitHubAvatar username={username} />}
                </div>

                <div>
                    <TextField
                        label='GitHub Username'
                        value={username}
                        onChange={(e) => { this.setState({username: e.target.value}); }}/>

                    <p className={styles.intro}>
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </div>
        );
    }
}

// Just a pure functional component demo w/ inline styling for fun 😉.
const Header = () => {
    const colors = {
        react: {color: '#61dafb'},
        postcss: {color: 'hotpink'},
        cssm: {color: '#00f87f'},
    };

    return (
        <h2 style={{lineHeight: '1.5em'}}>
            Welcome to <span style={colors.react}>React</span> + <span style={colors.postcss}>PostCSS</span> + <span style={colors.cssm}>CSS Modules</span>!
            <br/>
            Let's Hack!
        </h2>
    );
};

const PlusSymbolEmoji = () => (
    <span
        role='img'
        aria-label='plus sign'
        className={styles.plusEmoji}
    >➕</span>
);
