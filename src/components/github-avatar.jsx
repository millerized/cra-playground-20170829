import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './github-avatar.css';

export class GitHubAvatar extends Component {
    // Learn more about type checking props in React:
    // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
    static propTypes = {
        username: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired,
    }

    render() {
        const {onClick, isActive, username} = this.props;
        const classNames = `${styles.avatar} ${isActive ? styles.active : undefined}`;

        return (
            <img
                onClick={onClick}
                className={classNames}
                alt={username}
                src={`https://github.com/${username}.png`} />
        );
    }
}
