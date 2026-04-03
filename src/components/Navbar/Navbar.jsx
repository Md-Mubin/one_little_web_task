import Res_Navbar from "./Res_Navbar"

const Navbar = () => {
    const navItems = [
        'Home',
        'About',
        'Service',
        'Pricing',
        'Blog',
        'Resources',
    ];
    return (
        <>
            <nav className="font-dm_sans py-5 shadow-[0px_0px_30px_#ED3C6A44] hidden lg:block">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <img className="w-31.25 h-11.25" src="/Google-Logo.png" alt="google logo image" />
                        <ul className="font-normal text-lg leading-[150%] flex items-center gap-6.25">
                            {
                                navItems.map((items, i) => (
                                    <li
                                        key={i}
                                        className="hover:text-brandColor navItems cursor-pointer">
                                        {items}
                                    </li>
                                ))
                            }
                        </ul>
                        <button className="text-sm font-bold py-4.5 px-5.5 bg-brandColor text-white rounded-[5px] leading-[100%] cursor-pointer">Schedule A Meeting </button>
                    </div>
                </div>
            </nav>
            <Res_Navbar />
        </>
    )
}

export default Navbar