import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import logo from '../../../../../static/icons/logo.png'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			<img src={logo} alt="primosolutions" />
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
