import CommonSectionHeader from "../reuseable/CommonSectionHeader"

const ToolComponent = () => {
    const toolsImages = [
        {
            id: 1,
            image: "/toolsImages/image1.png"
        },
        {
            id: 2,
            image: "/toolsImages/image2.png"
        },
        {
            id: 3,
            image: "/toolsImages/image3.png"
        },
        {
            id: 4,
            image: "/toolsImages/image4.png"
        },
        {
            id: 5,
            image: "/toolsImages/image5.png"
        },
        {
            id: 6,
            image: "/toolsImages/image6.png"
        },
        {
            id: 7,
            image: "/toolsImages/image4.png"
        },
        {
            id: 8,
            image: "/toolsImages/image5.png"
        },
        {
            id: 9,
            image: "/toolsImages/image6.png"
        },
    ]
    return (
        <section className="pt-21 pb-38 font-dm_sans">
            <div className="container">
                <CommonSectionHeader
                    headFirstPart={"Our"}
                    headSecondPart={"Tools"} />
                <p className="max-w-184.5 mx-auto font-medium text-sm text-black text-center mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="mt-5 md:mt-43.5 flex flex-wrap items-center justify-center gap-8.5">
                    {
                        toolsImages.map((items) => (
                            <li key={items.id}>
                                <img
                                    src={items.image}
                                    alt={"tools name"}
                                    className="hover:shadow-[0px_0px_60px] hover:shadow-brand-color2 duration-200 cursor-pointer rounded-[11px]" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default ToolComponent