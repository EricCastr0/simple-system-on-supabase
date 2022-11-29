import React from 'react'
import "/src/App.css";
import {SidebarData} from './SidebarData'
import { Link } from 'react-router-dom';

function Sidebar({ children }) {
    return (
        <div style={{ display: 'flex', flex: 1}}>
            <div className='Sidebar'>
                <ul className='SidebarList'>
                    {SidebarData.map((val, key)=> {
                        return ( 
                        <li 
                            key={key}
                            className='row'
                            id={window.location.pathname == val.link ? "active" : ""}
                        >
                            <Link className='link' to={val.link}>
                                <span className='icon'>{val.icon}</span>
                                <span className='title'>{val.title}</span>
                            </Link>
                        </li>
                        );
                    })}
                </ul>
            </div>
            <div className='content'>
                {children}
            </div>
        </div>
    );
}

export default Sidebar