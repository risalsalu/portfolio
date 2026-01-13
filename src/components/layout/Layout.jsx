import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScroll } from '../../hooks/useScroll';

const Layout = ({ children }) => {
    useScroll(); // Initialize Lenis

    return (
        <div className="bg-dark-bg min-h-screen text-white relative">
            <Navbar />
            <main className="relative z-10">
                {children}
            </main>
            <Footer />

            {/* Global Background Elements (optional, e.g. noise or fixed gradients) */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-dark-bg to-dark-bg opacity-40"></div>
        </div>
    );
};

export default Layout;
