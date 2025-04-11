import { Link } from 'react-router';
import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import SocialMedia from "./SocialMedia.tsx";
import {Menu, X} from "lucide-react";
import Logo from "/images/logo.svg";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white w-full top-0 z-10">
            <div className="max-w-380 mx-auto py-5 flex items-center justify-between">
                <Link to="/" className="w-80">
                    <img src={Logo} alt="Martins Java Code Logo" />
                </Link>
                <div className="hidden md:flex space-x-20 text-lg">
                    <div className="hidden md:flex space-x-5">
                        <Link to="/" className="hover:text-blue-500">Home</Link>
                        <Link to="/about" className="hover:text-blue-500">About</Link>
                        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
                        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
                    </div>
                    <SocialMedia />
                </div>
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden px-4 pb-4 space-y-2 text-center"
                    >
                        <Link to="/" className="block" onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/about" className="block" onClick={() => setOpen(false)}>About</Link>
                        <Link to="/projects" className="block" onClick={() => setOpen(false)}>Projects</Link>
                        <Link to="/contact" className="block" onClick={() => setOpen(false)}>Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}


