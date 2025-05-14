/*
App component'inde kullanılan Button component'ini styled-component ile tanımlayın.

import styled from 'styled-components';


export default function App(){
 return (
   <Button width="100px">KAydet</Button>
 )
}

*/


import styled from 'styled-components';

const Button = styled.button`
    width: ${props => props.width}
`


export default function App(){
 return (
   <Button width ="100px">KAydet</Button>
 )
}