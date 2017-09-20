import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import * as styles from './Conversation.scss';

export Me from './Me';
export Them from './Them';

const animationClassNames = {
	enter: styles.enter,
	enterActive: styles.enterActive
};
const timeout = parseInt(styles.timeout, 10);

export default function Conversation({ children }) {
	return (
		<TransitionGroup className={styles.root}>
			{React.Children.map(children, (child, i) => child && (
				<CSSTransition key={i} timeout={{ enter: timeout, exit: 0 }} classNames={animationClassNames}>
					{child}
				</CSSTransition>
			))}
		</TransitionGroup>
	);
}
