import styled from 'styled-components'

export const Wrapper = styled.div`
	margin-bottom: 1.45rem;
	color: #212121;
	padding: 8rem 0 8rem 0;
	text-align: center;
	@media (max-width: 680px) {
		padding: 12rem 0 14rem 0;
	}
`

export const AboutWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-left: 2rem;

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 24pt;
		color: #212121;
		text-align: left;
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 18pt;
		font-weight: normal;
		line-height: 1.8;
		color: #707070;
		text-align: left;
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
	}
`
