import React from 'react'
import fullstack from 'Static/illustrations/fullstack.png'
import ui from 'Static/illustrations/ui.png'
import support from 'Static/illustrations/support.png'
import { Container } from 'Common'
import Circle from 'react-circle'
import { Wrapper, SkillsWrapper, Details } from './styles'

export const Skills = () => (
	<Wrapper id="skills">
		<h2>Skills</h2>
		<SkillsWrapper as={Container}>
			<Details>
				<img src={fullstack} alt="fullstack" />
				<h3>Full Stack Coding</h3>
				<Circle
					animate // Boolean: Animated/Static progress
					animationDuration="1s" // String: Length of animation
					responsive={false} // Boolean: Make SVG adapt to parent size
					size="100" // String: Defines the size of the circle.
					lineWidth="25" // String: Defines the thickness of the circle's stroke.
					progress="95" // String: Update to change the progress and percentage.
					progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
					bgColor="#ecedf0" // String: Color of "empty" portion of circle.
					textColor="#6b778c" // String: Color of percentage text color.
					textStyle={{
						font: 'bold 4rem Helvetica, Arial, sans-serif', // CSSProperties: Custom styling for percentage.
					}}
					percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
					roundedStroke={false} // Boolean: Rounded/Flat line ends
					showPercentage // Boolean: Show/hide percentage.
					showPercentageSymbol // Boolean: Show/hide only the "%" symbol.
				/>
			</Details>
			<Details>
				<img src={ui} alt="ui" />
				<h3>UI/UX Design</h3>
				<Circle
					animate // Boolean: Animated/Static progress
					animationDuration="1s" // String: Length of animation
					responsive={false} // Boolean: Make SVG adapt to parent size
					size="100" // String: Defines the size of the circle.
					lineWidth="25" // String: Defines the thickness of the circle's stroke.
					progress="85" // String: Update to change the progress and percentage.
					progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
					bgColor="#ecedf0" // String: Color of "empty" portion of circle.
					textColor="#6b778c" // String: Color of percentage text color.
					textStyle={{
						font: 'bold 4rem Helvetica, Arial, sans-serif', // CSSProperties: Custom styling for percentage.
					}}
					percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
					roundedStroke={false} // Boolean: Rounded/Flat line ends
					showPercentage // Boolean: Show/hide percentage.
					showPercentageSymbol // Boolean: Show/hide only the "%" symbol.
				/>
			</Details>
			<Details>
				<img src={support} alt="support" />
				<h3>Customer Support</h3>
				<Circle
					animate // Boolean: Animated/Static progress
					animationDuration="1s" // String: Length of animation
					responsive={false} // Boolean: Make SVG adapt to parent size
					size="100" // String: Defines the size of the circle.
					lineWidth="25" // String: Defines the thickness of the circle's stroke.
					progress="100" // String: Update to change the progress and percentage.
					progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
					bgColor="#ecedf0" // String: Color of "empty" portion of circle.
					textColor="#6b778c" // String: Color of percentage text color.
					textStyle={{
						font: 'bold 4rem Helvetica, Arial, sans-serif', // CSSProperties: Custom styling for percentage.
					}}
					percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
					roundedStroke={false} // Boolean: Rounded/Flat line ends
					showPercentage // Boolean: Show/hide percentage.
					showPercentageSymbol // Boolean: Show/hide only the "%" symbol.
				/>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
