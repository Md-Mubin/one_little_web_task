"use client";
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navItems = [
    'Home',
    'About',
    'Service',
    'Pricing',
    'Blog',
    'Resources',
];

const Res_Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="font-dm_sans py-5 shadow-[0px_0px_30px_#ED3C6A44] lg:hidden relative z-50">
            <div className="container flex items-center justify-between">
                <img className="w-31.25 h-11.25" src="/Google-Logo.png" alt="google logo image" />
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 z-50"
                    onClick={() => setOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu />
                </button>
                {/* Slide-in menu */}
                <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col pt-12 px-8 z-100`}>
                    <button
                        className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center z-50"
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                    >
                        <X/>
                    </button>
                    <ul className="flex flex-col gap-8 text-lg font-medium mt-10">
                        {navItems.map((item) => (
                            <li key={item} className="cursor-pointer hover:text-brandColor transition-colors duration-200">
                                {item}
                            </li>
                        ))}
                        <li>
                            <button className="w-full text-sm font-bold py-4.5 px-5.5 bg-brandColor text-white rounded-[5px] leading-[100%] mt-4">Schedule A Meeting</button>
                        </li>
                    </ul>
                </div>
                {open && (
                    <div className="fixed inset-0 bg-black/50 bg-opacity-30 z-30" onClick={() => setOpen(false)} />
                )}
            </div>
        </nav>
    );
};

export default Res_Navbar;