import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import * as styles from './Fade.scss';

const animationClassNames = {
	enter: styles.enter,
	enterActive: styles.enterActive,
	exit: styles.exit,
	exitActive: styles.exitActive
};
const timeout = parseInt(styles.timeout, 10);

export default function Fade({ children, n, subIndex }) {
	return (
		<TransitionGroup>
			{subIndex >= n && (
				<CSSTransition timeout={timeout} classNames={animationClassNames}>
					{children}
				</CSSTransition>
			)}
		</TransitionGroup>
	);
}