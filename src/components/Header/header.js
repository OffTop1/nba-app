import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.css';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sidenav';


const Header = (props) =>{

    const navBars = () =>{
        return(
            <div className={styles.bars}>
                <FontAwesome
                onClick={props.onOpenNav} 
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
                name='bars'
                />
            </div>
        )
    }
    
    const logo = () =>{
        return(
            <Link to="/" className={styles.logo}>
                <img alt="nba logo" src="/images/nba_logo.png" />
            </Link>
        )
    }

    return(
        <header className={styles.header}>
            <SideNav {...props} />
            <div className={styles.headerOpt}>
                { navBars() }
                { logo() }
            </div>
        </header>
    )
}

export default Header;
