import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { Nav, Navbar, Image } from 'react-bootstrap';


const NavigationBar = () => {
    return (
        <Navbar expand="lg" fixed="top" bg="black" variant="dark">
            <Navbar.Brand href="/">
                <Image
                    className={navStyles.Logo}
                    src='/logo.jpg'
                    alt="Logo Amboz Fotografia"
                    width={168}
                    // fluid
                    // fixed={true}
                    layout="fill"
                    objectFit="contain"
                />
                {/* <Image
                    alt="Logo Amboz Fotografia"
                    src="/logo.jpg"
                    // layout="fill"
                    // objectFit="contain"

                    layout="responsive"
                    width={168}
                    height={100}
                /> */}

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
                    <Link href="/quinzeanos" passHref>
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