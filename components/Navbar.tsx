import Link from "next/link";

const Navbar = props => {
    const user = null;
    const username = null;

    const renderNotValidated = () => (
        <li>
            <Link href='/enter'>
                <button className="btn-blue">Log in</button>
            </Link>
        </li>
    )

    const renderValidated = () => (
        <>
            <li className="push-left">
                <Link href='/admin'>
                    <button className="btn-blue">Write Posts</button>
                </Link>
            </li>
            <li>
                <Link href={`/${username}`}>
                    <img src={user?.photoURL} />
                </Link>
            </li>
        </>
    )

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
                {username ? renderValidated() : renderNotValidated()}
            </ul>
        </nav>
    )
}

export default Navbar;