import { ReactNode } from 'react';
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="mx-px">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

