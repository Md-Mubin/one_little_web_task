const CommonSectionHeader = ({ headFirstPart, headSecondPart }) => {
    return (
        <h1 className="font-dm_sans font-bold text-[32px] text-black text-center">
            {headFirstPart}<span className="text-brandColor"> {headSecondPart}</span>
        </h1>
    )
}
export default CommonSectionHeader