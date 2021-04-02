import styled from 'styled-components'

const StyledButton = styled.button`
	color: ${(props) => props.theme.color.white};
	background: ${(props) => props.theme.color.primary.normal};
	border: 0px;
	outline: none;
	border-radius: 8px;
	padding: 10px 20px 10px 20px;
	font-size: 11pt;
	font-weight: 600;
	transition-duration: 0.1s;
	&.sm {
		border-radius: 6px;
		padding: 8px 15px 8px 15px;
		font-size: 9pt;
	}
	&.lg {
		padding: 20px 35px 20px 35px;
		font-size: 14pt;
	}
	&:hover {
		background: ${(props) => props.theme.color.primary.light};
	}
	&:active {
		background: ${(props) => props.theme.color.primary.lighter};
	}
`

export default StyledButton
