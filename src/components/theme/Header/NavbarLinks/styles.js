import styled from 'styled-components'

export const Wrapper = styled.div`
	a {
		color: black;
		text-decoration: none;
	}

	${({ desktop }) =>
		desktop
			? `
			@media (max-width: 960px) {
					display: none;
			}
			padding: 1rem 5rem 0 0;

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
			: `
			padding: 3rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			vertical-align: 50%;

			a {
					margin-bottom: 1rem;
					padding: 1rem 0;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`
