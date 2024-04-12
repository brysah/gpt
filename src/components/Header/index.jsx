import { Container, Navigation, Button } from "./styles";
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <Container>
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
        </Container>
    )
}