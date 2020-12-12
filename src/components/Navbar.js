import React, { useState } from 'react';

import './Navbar.css';
import NavItem from './NavItem';
import DropdownNavItem from './DropdownNavItem';

function HamburgerButton(props) {
    let buttonClassName = `hamburger-btn ${props.toggled ? 'open' : ''}`
    return (
        <div className={buttonClassName} onClick={props.onClick}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
        </div>
    );
}


function Navbar(props) {
    let [toggled, setToggled] = useState(false);
    const hamburgerOnClick = () => {
        setToggled(prev => !prev);
        console.log('Hamburger Toggled')
    }

    const navListClass = `nav-list ${toggled ? 'open' : ''}`

    return (
            <nav className="navbar">
                <HamburgerButton onClick={hamburgerOnClick} toggled={toggled} />
                <div className={navListClass}>
                {props.children}
                </div>
            </nav>
    );
}


function NavItems(props) {
  const { pages } = props;
  return pages.map(({ path, name, subsections }) => {
    const parentPath = path;
    if (subsections.length === 0) {
      return (
        <NavItem name={name} path={parentPath} key={name} />
      );
    }
    const navSubItems = subsections.map(({ name, path }) => (<NavItem name={name} path={parentPath + path} key={name}></NavItem>))
    return (
      <DropdownNavItem name={name} key={name}>
        {navSubItems}
      </DropdownNavItem>
    );
  })
}

export default Navbar;
export { NavItem, NavItems, DropdownNavItem };