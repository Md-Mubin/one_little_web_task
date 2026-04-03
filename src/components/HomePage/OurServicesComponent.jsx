import CommonSectionHeader from "../reuseable/CommonSectionHeader"
import OurServicesCard from "../reuseable/OurServicesCard"

const OurServicesComponent = () => {
  const serviceCardInfo = [
    {
      id: 1,
      image: "/servicesCardIcons/icon1.png",
      heading: "Manage Property Listings",
      infos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      id: 2,
      image: "/servicesCardIcons/icon2.png",
      heading: "Manage Customer Bookings",
      infos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      id: 3,
      image: "/servicesCardIcons/icon3.png",
      heading: "Schedule House Cleaning",
      infos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      id: 4,
      image: "/servicesCardIcons/icon4.png",
      heading: "Monitor Guest Reviews",
      infos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      id: 5,
      image: "/servicesCardIcons/icon5.png",
      heading: "Track & Report Expenses",
      infos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      id: 6,
      image: "/servicesCardIcons/icon6.png",
      heading: "Guest Inquiry & Support",
      infos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    }
  ]
  return (
    <section className="pt-12.75 pb-18.25 font-dm_sans">
      <div className="container">
        <CommonSectionHeader
          headFirstPart={"Our"}
          headSecondPart={"Service"} />
        <p className="max-w-184.5 mx-auto font-medium text-sm text-black text-center mt-3.5 mb-13.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6.25">
          {
            serviceCardInfo.map((item) => (
              <li key={item.id}>
                <OurServicesCard
                  serviceCardImage={item.image}
                  serviceCardHeading={item.heading}
                  serviceCardInfos={item.infos} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default OurServicesComponent