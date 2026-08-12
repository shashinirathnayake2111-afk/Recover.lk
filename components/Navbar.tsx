'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <nav className="relative flex justify-between items-center px-6 py-4 h-16 w-full bg-slate-800/80 shadow-lg shadow-black/20 text-white z-50">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <Image className="rounded-full h-11 w-11" src="/images/logo-2.png" alt="Logo" width={40} height={40} priority/>
                <span className="text-xl font-bold text-slate-300/80 -ml-1.5">Recover<span className="text-emerald-500/80">.lk</span></span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 font-medium text-base text-slate-400 tracking-wide">
                <Link href="/" className={`px-2 py-1 transition-all ${ pathname === '/' ? 'text-emerald-500 font-semibold border-b-2 border-emerald-500/80' : 'hover:text-emerald-400 transition-colors'}`}>Home</Link>
                <Link href="/relief" className={`px-2 py-1 transition-all ${ pathname === '/relief' ? 'text-emerald-500 font-semibold border-b-2 border-emerald-500/80' : 'hover:text-emerald-400 transition-colors'}`}>Relief</Link>
                <Link href="/triggers" className={`px-2 py-1 transition-all ${ pathname === '/triggers' ? 'text-emerald-500 font-semibold border-b-2 border-emerald-500/80' : 'hover:text-emerald-400 transition-colors'}`}>Trigger Log</Link>
                <Link href="/specialists" className={`px-2 py-1 transition-all ${ pathname === '/specialists' ? 'text-emerald-500 font-semibold border-b-2 border-emerald-500/80' : 'hover:text-emerald-400 transition-colors'}`}>Specialist</Link>
            </div>

            {/* Right Action Items (Mobile & Desktop)*/}
            <div className="flex items-center gap-4">
                <button onClick={toggleTheme} className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-slate-900/80 border border-slate-700/50 text-base"aria-label="Toggle Theme">
                    {darkMode ? '🌙' : '☀️'}
                </button>

                <button onClick={toggleTheme} className={`hidden md:inline-flex relative h-11 w-24 items-center rounded-lg p-1 transition-colors duration-300 focus:outline-none border border-slate-700/50 ${
                darkMode ? 'bg-slate-900/80' : 'bg-slate-800/50'}`} aria-label="Toggle Theme">
                    <span className="flex w-full justify-between px-2 text-base select-none">
                        <span>🌙</span>
                        <span>☀️</span>
                    </span>
                    <span className={`absolute h-9 w-9 rounded-md bg-slate-700 border border-slate-600/50 transition-transform duration-300 flex items-center justify-center font-bold shadow-sm ${
                        darkMode ? 'translate-x-0' : 'translate-x-12' }`}>
                        <span className="text-sm">{darkMode ? '🌙' : '☀️'}</span>
                    </span>
                </button>

                <button className="hidden md:block px-5 py-2 font-medium text-base text-emerald-500 border border-emerald-800/50 hover:bg-emerald-500/10 hover:border-emerald-800 transition-colors rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30">
                    <Link href="/login">Login</Link>
                </button>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex items-center justify-center h-10 w-10 p-2 rounded-lg bg-slate-900/80 border border-slate-700/50 text-slate-400 active:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" aria-label="Toggle Menu">
                    <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
                </button>
            </div>

            {/* Mobile Dropdown Menu (Patient-Friendly Compact Card Style) */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 right-4 w-[250px] bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2 shadow-2xl z-50 flex flex-col gap-1.5">
                    
                    {/* Navigation Links with consistent Padding & Active State Indicator */}
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className={`w-full flex items-center justify-between pl-4 pr-3 py-3 text-base rounded-lg transition-all ${
                            pathname === '/' 
                            ? 'text-emerald-500 font-semibold border-l-4 border-emerald-400 bg-emerald-500/10' // ✅ Active Indicator: Left Border & Background
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}>
                        <span>Home</span>
                        {pathname === '/' && <span className="text-xs bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-400">Active</span>}
                    </Link>

                    <Link href="/relief" onClick={() => setIsMenuOpen(false)} className={`w-full flex items-center justify-between pl-4 pr-3 py-3 text-base rounded-lg transition-all ${
                            pathname === '/relief' 
                            ? 'text-emerald-500 font-semibold border-l-4 border-emerald-400 bg-emerald-500/10'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}>
                        <span>Relief</span>
                        {pathname === '/relief' && <span className="text-xs bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-400">Active</span>}
                    </Link>

                    <Link href="/triggers" onClick={() => setIsMenuOpen(false)} className={`w-full flex items-center justify-between pl-4 pr-3 py-3 text-base rounded-lg transition-all ${
                            pathname === '/triggers' 
                            ? 'text-emerald-500 font-semibold border-l-4 border-emerald-400 bg-emerald-500/10'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}>
                        <span>Trigger Log</span>
                        {pathname === '/triggers' && <span className="text-xs bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-400">Active</span>}
                    </Link>

                    <Link href="/specialists" onClick={() => setIsMenuOpen(false)} className={`w-full flex items-center justify-between pl-4 pr-3 py-3 text-base rounded-lg transition-all ${
                            pathname === '/specialists' 
                            ? 'text-emerald-500 font-semibold border-l-4 border-emerald-400 bg-emerald-500/10'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}>
                        <span>Specialist</span>
                        {pathname === '/specialists' && <span className="text-xs bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-400">Active</span>}
                    </Link>

                    {/* Separator Line */}
                    <div className="h-px w-full bg-slate-700/50 my-1"></div>

                    {/* Mobile Login Section - Compact Card 🔑 */}
                    <div className="bg-slate-800/80 rounded-xl p-3 flex flex-col gap-2">
                        <span className="text-xs font-medium text-slate-400 px-1">Access Your Health Records</span>
                        <Link 
                            href="/login" 
                            onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center h-10 px-5 py-2 font-medium text-base text-emerald-500 border border-emerald-800/50 hover:bg-emerald-500/10 transition-colors rounded-lg active:bg-emerald-500/20">
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}