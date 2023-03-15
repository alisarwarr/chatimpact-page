//NEXTJS
import Link from 'next/link';
import Image from 'next/image';
//IMAGES
import { logo } from '../images';


function Footer() {
    return (
        <div className="bg-black w-full pt-9 pb-9 screen450:pt-9 screen450:pb-5 sm:pt-16 sm:pb-9 lg:pt-20">

            <div className="w-[80%] m-auto flex justify-center flex-col items-center sm:items-start mt-2.5 mb-3 text-center">

                <div className="w-full flex justify-center items-center flex-col screen450:flex-row sm:flex-col sm:items-start">

                    <div className="flex-1 flex items-center">
                        <div className="w-9 h-9 screen450:w-10 screen450:h-10 sm:w-12 sm:h-12 screen950:w-14 screen950:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-[#110F36] rounded-full pulse-animation">
                            <Image src={logo} alt="logo" className="cursor-pointer" />
                        </div>

                        <p className="font-lexend text-base font-bold tracking-wider mt-0.5 ml-2.5 sm:ml-3.5 lg:ml-4 xl:ml-5 2xl:ml-6 screen450:text-lg screen950:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl text-white pulse-animation" style={{ wordSpacing: "2px" }}>
                            Chat Impact
                        </p>
                    </div>

                    <p className="font-lexend mt-3 screen450:mt-0.5 sm:mt-2.5 ml-1 font-bold tracking-widest text-xs screen450:text-sm screen950:text-base lg:text-xl xl:text-xl 2xl:text-2xl text-white thunder-animation">
                        info@chatimpact.com
                    </p>

                </div>

                <p className="font-lexend mt-2.5 ml-1 tracking-wide text-xs screen450:text-sm sm:text-sm screen950:text-base lg:text-sm xl:text-base 2xl:text-lg text-white thunder-animation">
                    ChatImpact © All Rights Reserved
                </p>

            </div>

            <div className="hidden sm:block mt-12 lg:mt-16 ml-5 lg:ml-14">

                <div className="flex items-center justify-center flex-wrap">
                    <Link href="/contact" className="text-sm tracking-wide screen450:text-base sm:text-xl font-bold text-[#1393F5] pulse-animation-white"> Contact </Link>
                    <Link href="/faq" className="ml-3.5 sm:ml-5 text-sm tracking-wide screen450:text-base sm:text-xl font-bold text-white pulse-animation"> FAQ </Link>
                    <Link href="/careers" className="ml-3.5 sm:ml-5 text-sm tracking-wide screen450:text-base sm:text-xl font-bold text-[#1393F5] pulse-animation-white"> Careers </Link>
                    <Link href="/partners" className="ml-3.5 sm:ml-5 text-sm tracking-wide screen450:text-base sm:text-xl font-bold text-white pulse-animation"> Partners </Link>
                    <Link href="/integrations" className="ml-3.5 sm:ml-5 text-sm tracking-wide screen450:text-base sm:text-xl font-bold text-[#1393F5] pulse-animation-white"> Integrations </Link>
                    <Link href="/security" className="ml-3.5 sm:ml-5 text-sm tracking-wide screen450:text-base sm:text-xl font-bold text-white pulse-animation"> Security </Link>
                </div>

                <div className="mt-2 flex items-center justify-center flex-wrap">
                    <Link href="/compliance" className="mt-1 text-xs whitespace-nowrap tracking-wide sm:text-sm text-white thunder-animation"> Compliance </Link>
                    <span className="ml-2 mr-2"> | </span>
                    <Link href="/cookie-declaration" className="mt-1 text-xs whitespace-nowrap tracking-wide sm:text-sm text-[#1393F5] thunder-animation-white"> Cookie Declaration </Link>
                    <span className="ml-2 mr-2"> | </span>
                    <Link href="/data-subprocessors" className="mt-1 text-xs whitespace-nowrap tracking-wide sm:text-sm text-white thunder-animation"> Data Subprocessor </Link>
                    <span className="ml-2 mr-2"> | </span>
                    <Link href="/privacy-policy" className="mt-1 text-xs whitespace-nowrap tracking-wide sm:text-sm text-[#1393F5] thunder-animation-white"> Privacy Policy </Link>
                </div>

            </div>

        </div>
    )
}

export default Footer;