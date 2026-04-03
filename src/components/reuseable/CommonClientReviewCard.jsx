import { Star } from "lucide-react"

const CommonClientReviewCard = ({ clientImage, clientName, clientReview }) => {
    return (
        <div className="max-w-132.5 rounded-[11px] shadow-[0_0_40px_#00000040] pl-9.25 pr-10.5 pt-11.5 pb-11 font-dm_sans flex flex-col lg:flex-row items-start gap-7.5">
            <div>
                <img
                    src={clientImage}
                    alt="client image"
                    className="w-25 h-25 rounded-full overflow-hidden" />
            </div>
            <ul>
                <li className="font-bold text-xl text-black">
                    {clientName}
                </li>
                <li className="mt-1.25 mb-3 max-w-80.25 font-medium text-sm text-black">
                    {clientReview}
                </li>
                <li>
                    <Star/>
                </li>
            </ul>
        </div>
    )
}

export default CommonClientReviewCard