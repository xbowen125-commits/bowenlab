import { useState } from 'react'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Notes', href: '#notes' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Bowen Lab home">
        <span className="brand-mark" aria-hidden="true">B</span>
        <span>BOWEN LAB</span>
      </a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
        <span /><span />
      </button>
      <nav id="main-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="https://github.com" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>GitHub <span aria-hidden="true">↗</span></a>
      </nav>
      <div className="lab-status" aria-label="Lab online"><span className="status-dot" aria-hidden="true" />LAB / ONLINE</div>
    </header>
  )
}
