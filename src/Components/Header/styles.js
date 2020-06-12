import styled from "styled-components"

export const Container = styled.header`
		width:100%;
    height:71px;
		background-color:#E1E0E0;
		margin:0 auto;
		display: flex;
		flex-wrap:nowrap;
		align-items:center;
`

export const H1 = styled.h1`
	padding: 10px 20px 10px 20px;

	font-family: Share Tech Mono;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 23px;
`
export const Ul = styled.ul`
	margin-left: auto;`
export const Li = styled.li`
	display: inline-table;
	padding: 0px 15px 0px 0px
`
export const Link = styled.a`
	display: table;
	font-size: 16px;
	padding: 5px 10px;
	background-image: linear-gradient(to top, #FFD600 0%, #FFD600 100%);
	background-size: 0% 2px;
	background-position: bottom;
	background-repeat: no-repeat;
	transition: 0.5s;
	:hover{
		background-size: 100% 2px;
		cursor: pointer;
	};
`
