import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './Slide.scss';

export default function Slide({ children, theme }) {
	return (
		<section className={cx(styles.root, styles[theme])}>
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
