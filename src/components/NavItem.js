import React from 'react';
import { Link } from 'react-router-dom'; 

import './NavItem.css';

export default function NavItem(props) {
    const { name, path } = props
    return (
        <Link to={path} style={{ textDecoration: 'none' }}>
            <div className="nav-item nav-item__base">
                {name}
            </div>
        </Link>
    );
}