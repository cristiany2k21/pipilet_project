import React from 'react';
import logoDownload from '../../../../../../images/icon-download.jpg';

const SecondTable = ({
	                     language,
	                     draw,
	                     download
                     }) => {
	return (
	<div className="wrapper-second-table">
		<div className="wrapper-logo-download">
			<a
			href={download}
			download={download}
			>
				<img src={logoDownload} className="little-draw" alt="logo"/>
			</a>
		</div>
		<table className="second-table">
			<tbody>
			{
				language['ten-numbers'].map((item, index) => (
				<tr key={index}>
					<td>
						<span className="letter-dot">{item.letter}.</span> {item.value}
					</td>
				</tr>
				))
			}
			</tbody>
		</table>
		<div className="wrapper-little-draw">
			<img src={draw} className="little-draw" alt="logo"/>
		</div>
	</div>
	);
};

export default SecondTable;
