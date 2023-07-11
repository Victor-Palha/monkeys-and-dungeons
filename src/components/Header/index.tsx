import { HeaderContainer, HeaderLogo, HeaderNav } from "./styles"
import {FaDiceD20} from 'react-icons/fa'
import {FiArrowUpRight} from 'react-icons/fi'

export function Header(){
    return (
        <HeaderContainer>
            <HeaderLogo>
                <FaDiceD20 size={69}/>
                <h1>M&D</h1>
            </HeaderLogo>
            <HeaderNav>
                <a href="#">ABOUT</a>
                <a href="#">SIGN IN</a>
                <a href="#">SIGN UP <FiArrowUpRight/></a>
            </HeaderNav>
        </HeaderContainer>
    )
}