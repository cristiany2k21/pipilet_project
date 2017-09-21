import React from 'react';

const ListWords = ({
	                   words,
	                   language,
	                   widthListWork
                   }) => {
	return (
	<div style={{width: widthListWork}} id="wrapper-list-word">
		<div className="list-word">
			<table>
				<thead>
				<tr>
					<th>{language}</th>
				</tr>
				</thead>
				<tbody>
				{
					words.map((word, index) => {
						return (
						<tr key={index}>
							<td>{word}</td>
						</tr>
						);
					})
				}
				</tbody>
			</table>
		</div>
	</div>
	);
};

export default ListWords;
