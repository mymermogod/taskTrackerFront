import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 70px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
	color: black;

	&:before {
		background: #fff;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;

export const ListColumn = styled.div`
	padding: 25px;
	background: #f2f2f2;
	border: 15px;
	flex: 1;
	max-width: 40%;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}

	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const ListColumn2 = styled.div`
	/* margin-bottom: 15px; */
	padding: 25px;
	background: #f2f2f2;
	border: 25px;
	/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
	flex: 1;
	max-width: 100%;
	width: 100%;
	height: 600px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}

	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const ListRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const TaskCard = styled.div`
	padding: 25px;
	background: white;
	border: 15px;
	display: flex;
	width:  100%;
	background-color: #f2f2f2;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #d9d9d9;
	border-radius: 20px;
`

export const TaskTitle = styled.div`
	font-size: 0.8em;
`

export const TaskActions = styled.div`
	cursor: pointer;
	font-size: 0.8em;
`


export const SearchInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	margin-bottom: 10px;
	height: 40px;
	width: 100%;
	background-color: #f2f2f2;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	font-size: 0.8rem;
`;

export const SearchGrid = styled.div`
display:flex;
width: 100%;
`
export const ConcludedGrid = styled.span`
margin-bottom: 10px;
`
export const CheckboxInput = styled.input`
 margin-right: 5px;
`


