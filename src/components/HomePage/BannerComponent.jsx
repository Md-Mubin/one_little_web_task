import { ArrowRight } from "lucide-react"
import Link from "next/link"

const BannerComponent = () => {
  return (
    <section className="bg-[url('/banner_bg.png')] w-full h-180 lg:h-146 pt-25 font-dm_sans">
      <div className="container relative">
        <img
          src="banner_vectors.png"
          alt="image"
          className="mx-auto" />
        <img
          src="banner_vectors2.png"
          alt="image"
          className="absolute top-0 left-0 w-full" />
        <div className="absolute top-18 left-[50%] translate-x-[-50%] text-center">
          <h1 className="font-bold text-5xl">Airbnb Assistants For</h1>
          <h2 className="font-medium text-[38px]">Property Management</h2>
          <p className="max-w-166.25 mx-auto font-medium text-sm mt-7.75 mb-9.75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className="max-w-166.25 mx-auto flex flex-col gap-6.75 items-center">
            <button className="text-sm font-bold py-4.5 px-5.5 bg-brandColor text-white rounded-[5px] leading-[100%] flex item-center gap-2.5 cursor-pointer">
              Schedule A Meeting <ArrowRight size={16} />
            </button>
            <Link href={"#"} className="block font-medium text-sm leading-[100%] underline">See Pricing</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerComponent