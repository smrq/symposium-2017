import React from 'react';
import SlideSwitcher from './SlideSwitcher';
import slides from './slides';
import './App.scss';
import * as keys from './keys';

export default class App extends React.PureComponent {
	static defaultProps = {
		prevKeys: [keys.UP, keys.LEFT],
		nextKeys: [keys.DOWN, keys.RIGHT]
	};

	constructor(props) {
		super(props);

		this.state = { index: 0 };
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeydown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeydown);
	}

	render() {
		const { index } = this.state;

		return (
			<SlideSwitcher index={index}>
				{slides.map((slide, i) => React.createElement(slide, { key: index }))}
			</SlideSwitcher>
		);
	}

	handleKeydown = e => {
		const { prevKeys, nextKeys, prev, next } = this.props;

		if (prevKeys.includes(e.which)) {
			this.handlePrevious();
			e.preventDefault();
		}
		else if (nextKeys.includes(e.which)) {
			this.handleNext();
			e.preventDefault();
		}
	}

	handlePrevious = () => {
		this.setState(state => ({ index: Math.max(0, state.index - 1) }));
	}

	handleNext = () => {
		this.setState(state => ({ index: Math.min(slides.length - 1, state.index + 1) }));
	}
}
