import React from 'react';

const GridWord = ({
	                  grid
                  }) => {
	return (
	<div id="wrapper-grid-word">
		<table>
			<tbody>
			{
				grid.map((items, index) => {
					return (
					<tr key={index}>
						{items.map((item, index) => {
							return (
							<td key={index}>
								{item}
							</td>
							);
						})}
					</tr>
					);
				})
			}
			</tbody>
		</table>
	</div>
	);
};

export default GridWord;
