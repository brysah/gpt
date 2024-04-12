import { Container, Navigation, Button, Blur, Mobile, ButtonMobile } from "./styles";
import logo from '../../assets/logo.svg'
import blur from '../../assets/blur-01.png'
import { Link } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";


export function Header() {  
    
    const mobileID = Mobile.componentStyle.componentId; 

    function openMenu() {
        document.body.style.overflowY = 'hidden';
        document.querySelector(`.${mobileID}`).style.opacity = 1;
        document.querySelector(`.${mobileID}`).style.pointerEvents = 'all';
        document.querySelector(`aside`).style.transform = 'translateX(0%)'; 
    }

    function closeMenu() {
        document.body.style.overflowY = 'auto'; 
        document.querySelector(`.${mobileID}`).style.opacity = 0;
        document.querySelector(`.${mobileID}`).style.pointerEvents = 'none';
        document.querySelector(`aside`).style.transform = 'translateX(-100%)'; 
    }
 
    return (
        <>
            <Container>
                <Blur>
                    <img src={blur} alt="Blur" />
                </Blur>
                <Link> <img src={logo} alt="Logo GPT-3" /> </Link>
                <Navigation>
                    <ul>
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to=""> What is GPT? </Link></li>
                        <li><Link to=""> Open AI </Link></li>
                        <li><Link to=""> Case Studies </Link></li>
                        <li><Link to=""> Library</Link></li>
                    </ul>

                    <div>
                        <Link to="">Sign In</Link>
                        <Button>Sign Up</Button>
                    </div>
                </Navigation>

                <ButtonMobile onClick={openMenu}>
                    <IoIosMenu />
                </ButtonMobile>
            </Container>

            <Mobile>
                <div className="overlay" onClick={closeMenu}></div>
                <aside>
                    <Link> <img src={logo} alt="Logo GPT-3" /> </Link>
                    <ul>
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to=""> What is GPT? </Link></li>
                        <li><Link to=""> Open AI </Link></li>
                        <li><Link to=""> Case Studies </Link></li>
                        <li><Link to=""> Library</Link></li>
                        <li><Link to=""> Sign In</Link></li>
                        <Button>Sign Up</Button>
                    </ul>
                </aside>
            </Mobile>
        </>

    )
}