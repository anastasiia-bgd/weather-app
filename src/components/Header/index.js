import React from "react";
import { NavLink } from "react-router-dom";
import style from './style.module.css'

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.header__links}>
                <div className={style.header__links_nav}>
                    <NavLink to="/" className={({ isActive }) => `${style.menu__link} ${isActive ? style.menu__link_active : ""}`}>
                        Main page
                    </NavLink>
                </div>
                <div className={style.header__links_nav}>
                    <NavLink to="/settings" className={({ isActive }) => `${style.menu__link} ${isActive ? style.menu__link_active : ""}`}>
                        Settings
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
