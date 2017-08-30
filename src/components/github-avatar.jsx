import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './github-avatar.css';

export class GitHubAvatar extends Component {
    // Learn more about type checking props in React:
    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
    static propTypes = {
        username: PropTypes.string.isRequired,
    }

    render() {
        const {username} = this.props;

        return (
            <img
                className={styles.avatar}
                alt={username}
                src={`https://github.com/${username}.png`} />
            );
    }
}
