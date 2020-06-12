import React from 'react';
import { Container, H1, Ul, Li, Link, } from './styles'
import { FaSearch } from 'react-icons/fa'

function Header() {
	return (
		<Container>
			<H1>Minha Lista Compartilhada</H1>

			{/* <Perfil>Perfil</Perfil>
			<Compartilhar>Compartilhar</Compartilhar>
			<FaSearch size={20} color="#141313"></FaSearch> */}

			<Ul>
				<Li><Link>Perfil</Link></Li>
				<Li><Link>Compartilhar</Link></Li>
				<Li><FaSearch size={20} color="#141313" ></FaSearch></Li>
			</Ul>
		</Container>
	);
}

export default Header;
