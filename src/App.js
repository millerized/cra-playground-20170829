import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

export class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React, Stephen!</h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
