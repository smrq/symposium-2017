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
		const { index, subIndex, onNextSlide } = this.props;
		const { direction } = this.state;

		const Slide = this.props.slides[index];

		return (
			<TransitionGroup className={cx(styles.root, styles[direction])}>
				<CSSTransition key={index} timeout={timeout} classNames={animationClassNames}>
					<Slide subIndex={subIndex} onNextSlide={onNextSlide} />
				</CSSTransition>
			</TransitionGroup>
		);
	}
}
