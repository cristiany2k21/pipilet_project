import React from 'react';
import Link from 'react-router/lib/Link';
import './styles/index.sass';

const Sidebar = ({
	                 sidebar
                 }) => {
	return (
	<div id="wrapper-sidebar">
		<div style={{'position': 'relative'}}>
			<div className="or-spacer-vertical right">
				<div className="mask"/>
			</div>
			<div>
				{
					sidebar.map((item, index) => {
						const image = item.image;
						return (
						<Link key={index} to={`/${item.url}`}>
							<div className="wrapper-item">
								<p>{item.title}</p>
								<img src={image} width="200"/>
							</div>
						</Link>
						);
					})
				}
			</div>
		</div>
	</div>
	);
};

export default Sidebar;
