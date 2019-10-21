import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		color: #212121;
		font-size: 20px;
	}

	img {
		width: 3%;

		@media (max-width: 1960px) {
			width: 10%;
		}
	}
`
