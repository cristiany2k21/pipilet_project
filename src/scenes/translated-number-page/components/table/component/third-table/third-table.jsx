import React from 'react';

const ThirdTable = ({
	                    language
                    }) =>
<div className="wrapper-third-table">
	<table className="third-table">
		<tbody>
		{
			language.operator.map((item, index) => (
			<tr key={index}>
				<td>
					<span className="letter-dot">{item.letter}</span>
				</td>
				<td>
					<span>{item.value}</span>
				</td>
			</tr>
			)
			)
		}
		</tbody>
	</table>
</div>;

export default ThirdTable;
