import React from 'react'
import { Container } from 'Common'
import fullstack from 'Static/illustrations/fullstack.svg'
import uiDesign from 'Static/illustrations/ui.svg'
import seo from 'Static/illustrations/seo.svg'
import { Wrapper, CardBox } from './styles.js'
import { Grid } from '../Projects/styles.js'

export const ServiceCard = () => (
	<Wrapper as={Container} id="service">
		<h2>Services</h2>
		<Grid>
			<CardBox>
				<div className="bgImage">
					<img src={fullstack} alt="Full stack developer" />
				</div>
				<div className="content">
					<h2>Full Stack Development</h2>
					<h3>
						Cover the development of project from scratch to up and running
						system.
					</h3>
					<img src={fullstack} alt="Full stack developer" />
				</div>
			</CardBox>
			<CardBox>
				<div className="bgImage">
					<img src={uiDesign} alt="UI Design" />
				</div>
				<div className="content">
					<h2>UI/UX Design</h2>
					<h3>
						Good looking user interfaces with a good user experience for an
						affordable price.
					</h3>
					<img src={uiDesign} alt="UI Design" />
				</div>
			</CardBox>
			<CardBox>
				<div className="bgImage">
					<img src={seo} alt="SEO" />
				</div>
				<div className="content">
					<h2>SEO</h2>
					<h3>
						Drive traffic to your website to grow your business substancially.
					</h3>
					<img src={seo} alt="SEO" />
				</div>
			</CardBox>
		</Grid>
	</Wrapper>
)
