import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to='/quotes' activeClassName={classes.active}> All Quotes</NavLink></li>
                    <li><NavLink to='/new-quotes' activeClassName={classes.active}> New quotes</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
