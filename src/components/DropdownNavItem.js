import React, { useState } from 'react';

import './DropdownNavItem.css';
import './NavItem.css';

export default function DropdownNavItem(props) {
    let [expanded, expand] = useState(false);
    const setExpanded = () => { expand(e => !e) }
    const className = `dd-nav-item nav-item__base ${expanded ? "open" : "closed"}`
    const arrowChar = expanded ? "⮟" : "⮞"
    return (
        <div className={className} onClick={setExpanded}>
            {props.name}
            <div className="dd-nav-item-arrow">{arrowChar}</div>
            {props.children}
        </div>
    );
}