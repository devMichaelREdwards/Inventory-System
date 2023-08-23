import { nanoid } from 'nanoid';
import { Nav } from 'rsuite';
import NavLink from './NavLink';
import { INavMenu } from '../../../types/navbar';

const NavMenu = ({ text, children }: INavMenu) => {
    return (
        <Nav.Menu className='nav-menu' title={text}>
            {children.map(item => {
                return (
                    <NavLink key={nanoid()} text={item.text} link={item.link} />
                );
            })}
        </Nav.Menu>
    );
};
export default NavMenu;
