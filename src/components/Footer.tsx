import Image from "next/image";
import logo from "/public/Logo.webp";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Socialicons from "@/components/Socialicons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function Footer() {
  return (
    <div className=" max-w-screen-xl m-auto">
      <div className="footer flex flex-col md:flex-row justify-between gap-[2em] py-4 px-4 ">
        <div className="foote_logo flex flex-col gap-4  flex-2 max-w-[350px]">
          <Link href="/">
            <Image className="" src={logo} alt="Logo" />
          </Link>
          <p className="leading-7 ">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <Socialicons />
        </div>
        <div className="company flex flex-col gap-4 flex-1">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Company
          </h4>
          <div className="footer_links flex flex-col gap-4">
            <Link href="#" className="footer_link">
              About
            </Link>
            <Link href="#" className="footer_link">
              Terms of Use
            </Link>
            <Link href="#" className="footer_link">
              Privacy Policy
            </Link>
            <Link href="#" className="footer_link">
              How it Works
            </Link>
            <Link href="#" className="footer_link">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="support flex flex-col gap-4 flex-1">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Support
          </h4>
          <div className="footer_links flex flex-col gap-4">
            <Link href="#" className="footer_link">
              Support Carrer
            </Link>
            <Link href="#" className="footer_link">
              24h Service
            </Link>
            <Link href="#" className="footer_link">
              Quick Chat
            </Link>
          </div>
        </div>
        <div className="contact flex flex-col gap-4 flex-[2]">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Contact
          </h4>
          <div className="footer_links flex flex-col gap-4">
            <div className="flex flex-col gap-4 w-full">
              <div className="contact_name flex gap-2">
                <Input
                  className="bg-white rounded border-gray-300"
                  type="text"
                  placeholder="First Name"
                />
                <Input
                  className="bg-white rounded border-gray-300"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <Input
                className="bg-white rounded border-gray-300"
                type="email"
                placeholder="Your Email"
              />
              <Textarea
                className="w-full bg-white rounded border-gray-300"
                placeholder="Type your message here."
              />
              <Button className="bg-black hover:bg-white text-white hover:text-black rounded">
                Send message
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom flex flex-col md:flex-row justify-between gap-[2em] py-4 px-4">
        <p className="text-sm text-gray-500 sm:mt-0 mt-4">
          © 2023 —
          <a
            href="https://twitter.com/waqarahm4d"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @waqarahm4d
          </a>
        </p>
        <div className="flex gap-2">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
