import {Github, Instagram, Linkedin} from "lucide-react";


export default function SocialMedia() {
    return (
        <div className="hidden md:flex space-x-20 text-lg">
            <div className="hidden md:flex space-x-5">
                <a href="https://linkedin.com/in/martinsjavacode" target="_blank" className="flex items-center gap-1 hover:underline">
                    <Linkedin size={18} />
                </a>
                <a href="https://github.com/martinsjavacode" target="_blank" className="flex items-center gap-1 hover:underline">
                    <Github size={18} />
                </a>
                <a href="https://instagram.com/martinsjavacode" target="_blank" className="flex items-center gap-1 hover:underline">
                    <Instagram size={18} />
                </a>
            </div>
        </div>
    )
}