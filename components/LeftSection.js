//NEXTJS
import Image from 'next/image';
//IMAGES
import { brand2 } from '../images';


function LeftSection() {
    return (
        <div className="bg-black pt-14 pb-10 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 w-[100%] h-[100%] flex justify-center">

            <div className="w-[90%] flex flex-col justify-center items-center screen950:flex-row lg:mr-4 xl:mr-14 text-center text-white">

                <div className="screen950:flex-1 xl:ml-9">
                    <p className="font-tiemposheadline text-xl tracking-wide font-bold screen450:text-3xl sm:text-4xl screen950:text-5xl xl:text-6xl 2xl:text-7xl pulse-animation" style={{ wordSpacing: "1px" }}>
                        Service with Chatbots.
                    </p>

                    <p className="font-lexend text-sm mt-4 screen450:mt-5 sm:mt-6 screen950:mt-3.5 xl:mt-5 2xl:mt-7 screen450:text-base sm:text-lg screen950:text-xl xl:text-2xl 2xl:text-3xl w-[90%] m-auto thunder-animation">
                        Our chatbots are available 24/7 anytime.
                    </p>

                    <p className="font-lexend text-sm mt-4 screen450:mt-5 sm:mt-6 screen950:mt-3.5 xl:mt-5 2xl:mt-7 screen450:text-base sm:text-lg screen950:text-xl xl:text-2xl 2xl:text-3xl w-[90%] m-auto thunder-animation">
                        Our Chatbot to provide immediate assistance to customers, leaving them satisfied and impressed with business.
                    </p>
                </div>

                <div className="flex justify-center screen950:ml-5 bounce-animation">
                    <Image src={brand2} alt="brand2" className="rounded-full mt-8 w-[9rem] h-[9rem] screen450:mt-9 screen450:w-[11rem] screen450:h-[11rem] sm:mt-11 sm:w-[13rem] sm:h-[13rem] screen950:w-[14rem] screen950:h-[14rem] lg:w-[15rem] lg:h-[15rem] xl:w-[16rem] xl:h-[16rem] 2xl:w-[18rem] 2xl:h-[18rem] cursor-pointer" />
                </div>

            </div>

        </div>
    )
}

export default LeftSection;