import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;

	h2 {
		text-align: center;
	}
`

export const Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const ContainerCard = styled.div`
	perspective: 700;
	display: flex;
`

export const CardBox = styled.div`
	width: 100%;
	height: 100%;
	transition: all 0.6s ease;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	position: relative;

	.content {
		background: white;
		transition: 0.5s;
		overflow: hidden;
		width: 80%;
		height: 15%;
		position: absolute;
		bottom: 10%;
		left: 10%;
		overflow: hidden;
		padding: 15px;
		box-sizing: border-box;

		h2 {
			font-size: 23px;
			text-align: center;
			margin-top: 1rem;
		}

		h3 {
			margin: 10px 0 10px 0;
			font-size: 15px;
			padding: 0 20px;
			opacity: 0;
			line-height: 1.2em;
			transition: 0.5s;
			text-align: center;
		}

		&:hover {
			width: 100%;
			height: 100%;
			bottom: 0;
			left: 0;

			h3 {
				opacity: 1;
				transition-delay: 0.4s;
			}
		}
	}

	.bgImage {
		background: white;
		background-size: cover;
		color: black;

		img {
			object-fit: cover;
			transition: 0.5s;
		}
	}

	@media (max-width: 680px) {
		height: 45vh;

		.content {
			h2 {
				font-size: 20px;
				text-align: center;
				margin: 0;
			}
		}
	}
`
