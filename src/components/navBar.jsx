import nav from '../styles/nav.module.scss';


function NavBar() {
    return(
        <nav className={nav.nav}>
            <div className={nav.rightDiv}>
                <h2>prodact</h2>
                <i class="bi bi-amd"></i>
            </div>
            
                
            <div>
                <h1>hanna</h1>
            </div>
        </nav>
    )
}

export default NavBar;