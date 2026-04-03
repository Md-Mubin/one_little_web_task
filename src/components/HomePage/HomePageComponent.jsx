import BannerComponent from "./BannerComponent"
import ClientsReviewComponent from "./ClientsReviewComponent"
import FAQComponent from "./FAQComponent"
import GetInTouch from "./GetInTouch"
import GettingStartedComponent from "./GettingStartedComponent"
import OurServicesComponent from "./OurServicesComponent"
import PricingPlansComponent from "./PricingPlansComponent"
import ToolComponent from "./ToolComponent"
import TrustedIndustriesComponent from "./TrustedIndustriesComponent"
import WhyChooseUsComponent from "./WhyChooseUsComponent"

const HomePageComponent = () => {
    return (
        <>
            <BannerComponent />
            <TrustedIndustriesComponent/>
            <OurServicesComponent/>
            <PricingPlansComponent/>
            <ToolComponent/>
            <GettingStartedComponent/>
            <WhyChooseUsComponent/>
            <ClientsReviewComponent/>
            <FAQComponent/>
            <GetInTouch/>
        </>
    )
}

export default HomePageComponent