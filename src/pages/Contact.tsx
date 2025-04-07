import { Mail, Instagram, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <section className="p-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Contato</h2>
            <p className="mb-2">Para colaborações ou consultas, envie um e-mail para:</p>
            <a href="mailto:contato@martins.dev" className="flex items-center gap-2 text-blue-600 underline">
                <Mail size={18} /> contato@martins.dev
            </a>
            <div className="mt-4 flex space-x-6">
                <a href="https://linkedin.com/in/martins" target="_blank" className="flex items-center gap-1 hover:underline">
                    <Linkedin size={18} /> LinkedIn
                </a>
                <a href="https://github.com/martins" target="_blank" className="flex items-center gap-1 hover:underline">
                    <Github size={18} /> GitHub
                </a>
                <a href="https://instagram.com/martins" target="_blank" className="flex items-center gap-1 hover:underline">
                    <Instagram size={18} /> Instagram
                </a>
            </div>
        </section>
    );
}