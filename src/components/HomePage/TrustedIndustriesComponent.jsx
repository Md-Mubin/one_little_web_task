import Marquee from "react-fast-marquee";

const TrustedIndustriesComponent = () => {

    const logos = [
        { id: 1, logo: "/trustedIndustriesLogos/logo1.svg" },
        { id: 2, logo: "/trustedIndustriesLogos/logo2.svg" },
        { id: 3, logo: "/trustedIndustriesLogos/logo3.svg" },
        { id: 4, logo: "/trustedIndustriesLogos/logo4.svg" },
        { id: 5, logo: "/trustedIndustriesLogos/logo5.svg" },
        { id: 6, logo: "/trustedIndustriesLogos/logo6.svg" },
        { id: 7, logo: "/trustedIndustriesLogos/logo7.svg" },
        { id: 8, logo: "/trustedIndustriesLogos/logo8.svg" },
        { id: 9, logo: "/trustedIndustriesLogos/logo9.svg" },
        { id: 10, logo: "/trustedIndustriesLogos/logo10.svg" }
    ]
    return (
        <section className="pt-12.5">
            <h4 className="font-dm_sans font-semibold text-xl text-black text-center">Trusted by leaders in 50+ industries</h4>
            <Marquee
                speed={100}
                pauseOnHover={true}
                gradient={false}
            >
                <ul className="flex items-center ml-15.5 gap-15.5 mt-9">
                    {
                        logos.map((items) => (
                            <li key={items.id}>
                                <img src={items.logo} alt={items.logo} />
                            </li>
                        ))
                    }
                </ul>
            </Marquee>
        </section>
    )
}

export default TrustedIndustriesComponent