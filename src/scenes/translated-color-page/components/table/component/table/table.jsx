import React from 'react';

const ColumnTable = ({
	                     color,
	                     images,
	                     title,
	                     subTitle
                     }) => {
	return (
	<table>
		<thead>
		<tr>
			<td>
				{!subTitle && title}
				{subTitle && <div>{subTitle}</div>}
			</td>
		</tr>
		</thead>
		<tbody>
		{color &&
		color.map((item, index) => {
			return (
			<tr key={index}>
				<td>{item}</td>
			</tr>
			);
		})
		}
		{images &&
		images.map((item, index) => {
			return (
			<tr key={index}>
				<td>
					<img src={item} alt=""/>
				</td>
			</tr>
			);
		})
		}
		</tbody>
	</table>
	);
};

export default ColumnTable;
