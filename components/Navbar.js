import Link from 'next/Link'

const Navbar = () => {
    return (
        <nav>
            <div className = "navbar">
                <h1>KeyLabs</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/community"><a>Community</a></Link>
            <Link href="/resources"><a>Resources</a></Link>
        </nav>
    );
}

export default Navbar;