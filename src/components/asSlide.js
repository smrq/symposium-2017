import React from 'react';

export default function asSlide(WrappedComponent, options = {}) {
	const { subCount = 1 } = options;

	return class AsSlide extends React.PureComponent {
		componentWillReceiveProps(nextProps) {
			if (this.props.subIndex !== nextProps.subIndex) {
				if (nextProps.subIndex >= subCount) {
					nextProps.onNextSlide();
				}
			}
		}

		render() {
			return <WrappedComponent subIndex={Math.min(this.props.subIndex, subCount - 1)} ix={this.ix} />;
		}

		ix = n => this.props.subIndex >= n;
	}
}
