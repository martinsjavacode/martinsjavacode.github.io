import SocialMedia from "./SocialMedia";
import MJCLogo from "/images/logo.svg";


export default function Footer() {
    return (
        <footer className="w-full pb-5">
            <div className="max-w-380 pt-15 pb-5 mx-auto flex items-center justify-between border-b-1">
                <img src={MJCLogo} alt="Martins Java Code Logo" className="w-80"/>
                <SocialMedia />
            </div>
            <div className="max-w-380 pt-5 mx-auto flex items-center justify-between">
                <p className="text-sm mb-4 md:mb-0">&copy; Alexandre Martins - All rights reserved - Privacy Policy.</p>
            </div>

        </footer>
    );
}