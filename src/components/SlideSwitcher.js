import React from 'react';
import cx from 'classnames';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import Slide from './Slide';
import * as styles from './SlideSwitcher.scss';

const animationClassNames = {
	enter: styles.enter,
	enterActive: styles.enterActive,
	exit: styles.exit,
	exitActive: styles.exitActive
};

const timeout = parseInt(styles.timeout, 10);

export default class SlideSwitcher extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { direction: 'next' };
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.index !== this.props.index) {
			if (nextProps.index > this.props.index) {
				this.setState({ direction: 'next' });
			} else {
				this.setState({ direction: 'previous' });
			}
		}
	}

	render() {
		const { index } = this.props;
		const { direction } = this.state;

		const theme = index % 2 ? styles.light : styles.dark;

		const children = React.Children.map(this.props.children, (child, i) => (
			<CSSTransition key={i} timeout={timeout} classNames={animationClassNames}>
				<Slide theme={i % 2 ? 'light' : 'dark'}>
					{child}
				</Slide>
			</CSSTransition>
		));

		return (
			<TransitionGroup className={cx(styles.root, theme, styles[direction])}>
				{children[index]}
			</TransitionGroup>
		);
	}
}
