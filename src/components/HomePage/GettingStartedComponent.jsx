import CommonSectionHeader from "../reuseable/CommonSectionHeader"

const GettingStartedComponent = () => {
    const gettingStartedImages = [
        {
            id: 1,
            image: "/gettingStartedImages/image1.png",
            info: "Add requirements\n& sign up today"
        },
        {
            id: 2,
            image: "/gettingStartedImages/image2.png",
            info: "Connect with your CSM & onboarding team"
        },
        {
            id: 3,
            image: "/gettingStartedImages/image3.png",
            info: "Meet your STR\nAssistant next week"
        }
    ]
    return (
        <section className="pb-21">
            <div className="container">
                <CommonSectionHeader
                    headFirstPart={"Getting Started is"}
                    headSecondPart={"Easy"} />
                <p className="max-w-184.5 mx-auto font-medium text-sm text-black text-center mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="mt-10.5 flex flex-wrap justify-center items-center gap-5.25">
                    {
                        gettingStartedImages.map((items) => (
                            <li key={items.id}>
                                <img src={items.image} alt="images" />
                                <p className="max-w-63.75 m-auto mt-8.25 text-center font-semibold text-xl text-black whitespace-pre-line">
                                    {items.info}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </section>
    )
}

export default GettingStartedComponent