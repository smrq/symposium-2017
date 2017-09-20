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

		this.state = {
			index: slides.length - 1,
			subIndex: 0
		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeydown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeydown);
	}

	render() {
		const { index, subIndex } = this.state;

		return (
			<SlideSwitcher
				index={index}
				subIndex={subIndex}
				slides={slides}
				onNextSlide={this.handleSlideNext} />
		);
	}

	handleKeydown = e => {
		const { prevKeys, nextKeys, prev, next } = this.props;

		if (prevKeys.includes(e.which)) {
			this.handlePrevious();
			e.preventDefault();
		}
		else if (nextKeys.includes(e.which)) {
			this.handleSubNext();
			e.preventDefault();
		}
	}

	handlePrevious = () => {
		this.setState(state => {
			if (state.subIndex > 0) {
				return { subIndex: state.subIndex - 1 };
			} else if (state.index > 0) {
				return { index: state.index - 1, subIndex: 0 };
			}
		});
	}

	handleSubNext = () => {
		this.setState(state => ({ subIndex: state.subIndex + 1 }));
	}

	handleSlideNext = () => {
		this.setState(state => {
			if (state.index < slides.length - 1) {
				return { index: state.index + 1, subIndex: 0 };
			}
		});
	}
}
