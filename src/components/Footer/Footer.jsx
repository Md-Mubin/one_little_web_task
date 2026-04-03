import Link from "next/link"
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-t border-[#D6D6D6]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between font-dm_sans gap-12 py-20.75">
          {/* Brand Section */}
          <div className="space-y-6 max-w-99">
            <div>
              <img src="/Google-Logo.png" alt="google logo" />
            </div>
            <p className="max-w-99 font-normal text-gray-600 text-sm mt-5 mb-7.25">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.            </p>
            <div className="flex space-x-8.75">
              <Link href="#"><FaTwitter size={20} /></Link>
              <Link href="#"><FaFacebookF size={20} /></Link>
              <Link href="#"><FaInstagram size={20} /></Link>
              <Link href="#"><FaGithub size={20} /></Link>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 lg:w-157.5">
            {/* Company Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-900">Company</h3>
              <ul className="font-medium text-sm leading-10 text-gray-900">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Works</Link></li>
                <li><Link href="#">Career</Link></li>
              </ul>
            </div>

            {/* Help Links */}
            <div className="pt-10 sm:pt-0">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-900">Help</h3>
              <ul className="font-medium text-sm leading-10 text-gray-800">
                <li><Link href="#">Customer Support</Link></li>
                <li><Link href="#">Delivery Details</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>
            {/* Resources Links */}
            <div className="pt-10 sm:pt-0">
              <h3 className="font-bold text-[16px] leading-4 mb-5.25 text-gray-900">Resources</h3>
              <ul className="font-medium text-sm leading-10 text-gray-900">
                <li><Link href="#">Free eBooks</Link></li>
                <li><Link href="#">Development Tutorial</Link></li>
                <li><Link href="#">How to - Blog</Link></li>
                <li><Link href="#">Youtube Playlist</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="bg-[#230B41] pt-4.5 pb-6.75 text-center font-poppins font-normal text-sm leading-5.5 text-white">
        © Copyright 2024, All Rights Reserved by XYz
      </div>
    </footer>
  )
}

export default Footer