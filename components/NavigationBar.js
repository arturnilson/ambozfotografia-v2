import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';
import { Nav, Navbar } from 'react-bootstrap';


const NavigationBar = () => {
    return (
        <Navbar expand="lg" fixed="top" bg="black" variant="dark">
            <Navbar.Brand href="/" className={navStyles.Logo}>
                <Image
                    src='/logo.jpg'
                    alt="Logo Amboz Fotografia"
                    width={171}
                    height={85}
                />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Item className="nav-item">
                    <Link href="/" passHref>
                        <Nav.Link>Home</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Link href="/formatura" passHref>
                        <Nav.Link>Formatura</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Link href="/quinze_anos" passHref>
                        <Nav.Link>15 anos</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Link href="/casamento" passHref>
                        <Nav.Link>Casamento</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Link href="/infantil" passHref>
                        <Nav.Link>Infantil</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Link href="/contato" passHref>
                        <Nav.Link>Contato</Nav.Link>
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default NavigationBar;