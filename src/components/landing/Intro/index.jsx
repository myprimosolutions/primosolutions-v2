import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, MagicalButton, ParallaxComponent } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Primo Solutions</h1>
				<h4>We develop blazing fast Website and System for businesses!</h4>
				<MagicalButton as={AnchorLink} href="#contact">
					Hire us
				</MagicalButton>
			</Details>
			<Thumbnail>
				<img
					src={dev}
					alt="We develop blazing fast Website and System for businesses!"
				/>
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
