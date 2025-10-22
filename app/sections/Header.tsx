export default function Header() {
    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-50">
            <nav className="flex gap-1 p-0.5 border border-black/15 rounded-full bg-black/10 backdrop-blur">
                <a href="#" className="nav-item">Home</a>
                <a href="#skills" className="nav-item">Skills</a>
                <a href="#experiences" className="nav-item">Experiences</a>
                <a href="#projects" className="nav-item">Projects</a>
                {/* <a href="#contact" className="nav-item bg-black text-white hover:bg-black/70 hover:text-white">Contact</a> */}
            </nav>
        </div>
    )
}