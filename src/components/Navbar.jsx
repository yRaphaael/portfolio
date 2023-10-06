function Navbar() {
    return (
        <>
        <div className="navbar-menu">
            <img src="./logo.png" className="logo-img" width={95} height={95}></img>
            <div className="sections-links">
                <ul className="navmenu-itens">
                    <li className="nav-item"><a className="navmenu-link" href="#">about me</a></li>
                    <li className="nav-item"><a className="navmenu-link" href="#">clients</a></li>
                    <li className="nav-item"><a className="navmenu-link" href="#">projects</a></li>
                    <li className="nav-item"><a className="navmenu-link" href="#">contact</a></li>
                </ul>
            </div>
        </div>
        <div className="border">
                </div>
        </>
    )

}

export default Navbar