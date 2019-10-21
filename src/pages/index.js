import React from 'react'
import { Intro, Skills, Contact, About, ServiceCard } from 'Components/landing'
import { Layout, SEO } from 'Common'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<ServiceCard />
		<Skills />
		<About />
		<Contact />
	</Layout>
)
