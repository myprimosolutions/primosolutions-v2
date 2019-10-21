import styled from 'styled-components'

export const Wrapper = styled.div`
	margin-bottom: 1.45rem;
	color: #212121;
	padding: 8rem 0 8rem 0;
	clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
	background: #f9f9f9;
	text-align: center;
	@media (max-width: 680px) {
		padding: 12rem 0 14rem 0;
	}
`

export const SkillsWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 3;

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	}

	img {
		width: 50%;
	}
`
