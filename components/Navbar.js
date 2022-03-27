import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <h1>brightcamper</h1>
      <div className="links">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/projects"><a>Portfolio Projects</a></Link>
      </div>
    </nav>
  )
}