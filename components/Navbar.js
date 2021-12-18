import NextLink from 'next/Link'

const Navbar = () => {
    return (
        <nav>
            <div className = "navbar">
                <h1>KeyLabs</h1>
            </div>
            <NextLink href="/"><a>Home</a></NextLink>
            <NextLink href="/community"><a>Community</a></NextLink>
            <NextLink href="/resources"><a>Resources</a></NextLink>
        </nav>
    );
}

export default Navbar;