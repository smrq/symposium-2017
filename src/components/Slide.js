import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './Slide.scss';

export default function Slide({ children, className, theme }) {
	return (
		<section className={cx(styles.root, styles[theme], className)}>
			{children}
		</section>
	);
}

Slide.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.oneOf(['dark', 'light'])
};

Slide.defaultProps = {
	theme: 'dark'
};
