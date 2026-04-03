"use client";
import CommonClientReviewCard from "../reuseable/CommonClientReviewCard"
import CommonSectionHeader from "../reuseable/CommonSectionHeader"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const ClientsReviewComponent = () => {

    const clientReviews = [
        {
            id: 1,
            img: "/clientImages/img1.png",
            name: "Jenny Wilson",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            img: "/clientImages/img2.png",
            name: "Esther Howard",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            img: "/clientImages/img3.png",
            name: "Robert Fox",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 4,
            img: "/clientImages/img1.png",
            name: "Jenny Wilson",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 5,
            img: "/clientImages/img2.png",
            name: "Esther Howard",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 6,
            img: "/clientImages/img3.png",
            name: "Robert Fox",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }
    ]
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        loop: true,
        slides: {
            origin: "center",
            perView: 3,
            spacing: 20,
        },
        breakpoints: {
            "(max-width: 640px)": {
                slides: {
                    perView: 1,
                    spacing: 10,
                },
            },
            "(min-width: 641px) and (max-width: 1024px)": {
                slides: {
                    perView: 2,
                    spacing: 15,
                },
            },
        },
    })
    return (
        <section className="pt-30.25 pb-45">
            <CommonSectionHeader
                headFirstPart={"Check Our Client"}
                headSecondPart={"Review"} />
            <p className="max-w-184.5 mx-auto font-medium text-sm text-black text-center mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul ref={sliderRef} className="keen-slider">
                {
                    clientReviews.map((item) => (
                        <li key={item.id} className="keen-slider__slide py-15">
                            <CommonClientReviewCard
                                clientImage={item.img}
                                clientName={item.name}
                                clientReview={item.review}
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default ClientsReviewComponent