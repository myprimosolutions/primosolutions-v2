import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, MagicalButton } from 'Common'
import about from 'Static/illustrations/about.svg'
import { Wrapper, AboutWrapper, Details, Thumbnail } from './styles'

export const About = () => (
	<Wrapper id="about">
		<AboutWrapper as={Container}>
			<Thumbnail>
				<img src={about} alt="about primo solutions" />
			</Thumbnail>
			<Details>
				<h1>Hi There!</h1>
				<p>
					We have all the different package for everyone, including buying
					domain names, design, develop, setting up email for your domain name,
					construct SEO on your website, and maintain your website. Give us a
					call or email us to find out the perfect package for your business
					website.
				</p>
				<MagicalButton as={AnchorLink} href="#contact">
					Contact us
				</MagicalButton>
			</Details>
		</AboutWrapper>
	</Wrapper>
)
