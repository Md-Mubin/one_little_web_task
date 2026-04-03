import { ArrowRight, Check } from "lucide-react";

const WhyChooseUsComponent = () => {
    const reasons = [
        {
            id: 1,
            info: "Brilliant Client Service"
        },
        {
            id: 2,
            info: "Flexibility & Adaptibility"
        },
        {
            id: 3,
            info: "We make it Personal"
        },
        {
            id: 4,
            info: "We have expart in our team"
        },
    ]
    return (
        <section className="font-dm_sans">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-start bg-[#FDEBF0] rounded-[33px] border border-[#F8BECD] pl-5 sm:pl-22.25 pr-9.5 pt-16.5 pb-20.75">
                    <div className="max-w-114.25">
                        <h1 className="font-bold text-4xl text-black">Few Reasons Why you Choose us?</h1>
                        <p className="font-semibold text-sm text-black mt-6.5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>
                        <ul className="mt-7.5 mb-11.25 space-y-3.5">
                            {
                                reasons.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex items-center gap-2 font-bold text-[16px] text-serviceCardHeading">
                                        <span className="p-2 bg-brand-color2  text-brandColor rounded-full">
                                            <Check size={16} />
                                        </span>
                                        {item.info}
                                    </li>
                                ))
                            }
                        </ul>
                        <button className="text-sm font-bold py-4.5 px-5.5 bg-brandColor text-white rounded-[5px] leading-[100%] flex item-center gap-2.5">
                            Schedule A Meeting <ArrowRight size={16} />
                        </button>
                    </div>
                    <div>
                        <img className="h-116.25" src="/whyChooseUsImage.png" alt="why choose us" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsComponent