import { Nav, Navbar } from 'rsuite';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <Navbar className='home-nav' id='homeNav'>
            <Nav>
                <NavLink text={'Home'} link={''} />
                <NavLink text={'Login'} link={'login'} />
                <NavLink text={'test'} link={'test'} />
            </Nav>
        </Navbar>
    );
};

export default NavBar;
