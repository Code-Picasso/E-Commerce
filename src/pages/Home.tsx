import React, { FunctionComponent } from 'react';
import styles from './Home.module.css';
export const Home: FunctionComponent = (): JSX.Element => {
	return (
		<div className={styles.background}>
			<h1>Hello</h1>
		</div>
	);
};
