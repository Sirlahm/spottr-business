import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const SpottrLink = styled(Link)`
   text-decoration: none;
   text-align:center;
   color: ${(color)=>color?color:null}
`
export const Div = styled.div`
  width: ${({ width }) => (width ? width : null)};
  height: ${({ height }) => (height ? height : null)};
  margin: ${({ margin }) => (margin ? margin : null)};
  padding: ${({ padding }) => (padding ? padding : null)};
  display: ${({ display }) => display};
  flex-wrap: ${({ wrap }) => wrap};
  align-items: ${({ alignI }) => alignI};
  align-self: ${({ align }) => (align ? align : null)};
  justify-content: ${({ justify }) => (justify ? justify : null)};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : null};
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  background-size: cover;
  background-repeat: no-repeat;
  border: ${({ border }) => (border ? border : null)};
  border-radius: ${({ br }) => (br ? br : null)};
`;

export const Img = styled.img`
   width: ${({w})=>w?w:null};
   height: ${({h})=>h?h:null};
   margin: ${({m})=>m?m:null};
   padding: ${({p})=>p?p:null};
   border-radius: ${({br})=>br?br:null};
   align-self: ${({align})=>align? align: null};
`

export const Button = styled.button`
  background-color: ${({ bc }) =>
  bc ? bc : null};
  width: ${({ w }) => (w ? w : null)};
  padding: ${({ p }) => (p ? p : null)};
  border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
  border-radius: ${({ br }) => (br ? br : null)};;
  outline: none;
  font-weight: ${({ fw }) => (fw ? fw : null)};;
  cursor: pointer;
  color: ${({ color }) => (color ? color : null)};
  margin: ${({ m }) => (m ? m : null)};
`;