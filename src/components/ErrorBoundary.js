import React from 'react';

export default class ErrorBoundary extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { error: null };
	}

	render() {
		const { children } = this.props;
		const { error } = this.state;

		if (error) {
			return (
				<div>
					<h1>{error.name}</h1>
					<p>{error.message}</p>
					<pre>{error.stack}</pre>
				</div>
			);
		}

		return children;
	}

	componentDidCatch(error, info) {
		this.setState({ error });
	}
}
