import React from 'react';
import { Container } from './styles'

function Lista() {
	return (
		<Container>
			<div className="dropdown">
				<button onclick="myFunction()" className="dropbtn">Dropdown</button>
				<div className="dropdown-content">
					<ul>
						<li>
							Item 1
						</li>
						<li>
							Item 2
						</li>
					</ul>
					<a>Editar</a>
				</div>
			</div>
		</Container>
	);
}

export default Lista;
