import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <menu>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </menu>
        </nav>
    </div>
  )
}

export default Navbar