import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';


import {GitHubAvatar} from './components/github-avatar.jsx';

export class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <div className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo" />

                    <h2>Welcome to React + PostCSS + CSS Modules! Let's Hack!</h2>
                </div>

                <div className={styles.avatars}>
                    <GitHubAvatar username='millerized' />
                    <GitHubAvatar username='StephenKoller' />
                </div>

                <p className={styles.intro}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}
