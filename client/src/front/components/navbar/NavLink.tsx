import { Link } from 'react-router-dom';
import { Nav } from 'rsuite';
import { INavLink } from '../../../types/navbar';

const NavLink = ({ text, link }: INavLink) => {
    return (
        <Nav.Item className='nav-item' as={Link} to={link}>
            {text}
        </Nav.Item>
    );
};

export default NavLink;
