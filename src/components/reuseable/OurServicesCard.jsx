
const OurServicesCard = ({ serviceCardHeading, serviceCardImage, serviceCardInfos }) => {
    return (
        <div className="sm:max-w-99.25 border border-brand-color2 hover:border-transparent hover:shadow-[0px_8px_10px] hover:shadow-dropShadow duration-200 rounded-[13px] pt-6.75 pb-7.5 pl-6.75 font-dm_sans">
            <img className="h-20" src={serviceCardImage} alt={serviceCardHeading} />
            <h4 className="max-w-54.5 font-bold text-2xl leading-[125%] text-serviceCardHeading mt-8">{serviceCardHeading}</h4>
            <p className="max-w-76.5 font-medium text-sm text-black mt-3.5 mb-8.75">{serviceCardInfos}</p>
            <button className="border border-brandColor rounded-[44px] px-6 py-2.5 font-medium text-sm text-brandColor cursor-pointer">
                Read More
            </button>
        </div>
    )
}

export default OurServicesCard