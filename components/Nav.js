import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import Image from 'next/image'

const Nav = () => {
    return (
        <nav className={`${navStyles.nav} navbar navbar-expand-lg navbar-dark bg-dark fixed-top`}>
            {/* <div className="container"> */}
            <a className="navbar-brand" href="/">
                <Image
                    className="Logo"
                    src='/logo.png'
                    alt="Logo Amboz Fotografia"
                    width="300"
                    height="300"
                    fluid />
            </a>
            <div class="collapse navbar-collapse">
                <ul>
                    <li className="nav-item">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/contato'>Contato</Link>
                    </li>


                    {/* <Navbar expand="lg" fixed="top" bg="black" variant="dark">
            <Navbar.Brand href="/"><Image className="Logo" src={Logo} alt="Logo Amboz Fotografia" fluid /></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="nav-item"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link href="/events/formatura">Formatura</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link href="/events/quinzeanos">15 anos</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link href="/events/casamento">Casamento</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link href="/events/infantil">Infantil</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link href="/contato">Contato</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar> */}


                </ul>
            </div>
            {/* </div> */}
        </nav>
    )
}

export default Nav;