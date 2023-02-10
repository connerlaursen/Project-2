const NavBar = ({ clickOnSet }) => {
    const clickOnSignIn = () => (
        clickOnSet(true)
    )
    return (
        <div>
            <header>
                <nav>

                    <ul>
                        <li><a className="ul" href="/">Home</a></li>
                        <li><a className="ul" href="/book">Book Trip</a></li>
                        <li><a className="ul" href="/about">About</a></li>
                        <li><a className="ul" href="/contact">Contact</a></li>
                    </ul>
                    <div>
                        <img id="logo" src="./BB Logo.png" width="350px" />
                        {/* <button onClick={clickOnSignIn}>sign in</button> */}
                    </div>
                </nav>
            </header>
            <footer id="content-wrap">
                <small id="footer">Copyright 2023 BBLLC. All rights reserved.</small>
            </footer>
        </div>
    )
}
export default NavBar;