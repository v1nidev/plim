import React from 'react'

import './Bottom-bar.css';
import menuIcon from './menu.svg';

export default function BottomBar() {
	return (
		<div className="Bottom-bar">
			<button title="Show navigation bar">
				<img src={menuIcon} alt="Open menu" />
				{/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> */}
			</button>
		</div>
	)
}