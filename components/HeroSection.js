//NEXTJS
import Image from 'next/image';
//IMAGES
import { chatbot } from '../images';


function HeroSection() {
    return (
        <div className="bg-black w-full flex justify-center">

            <div className="mt-3 screen950:mt-10 pt-14 pb-8 sm:pt-28 sm:pb-20 screen950:pt-0 screen950:pb-0 screen950:ml-8 w-[90%] h-[100%] flex flex-col justify-center items-center screen950:flex-row text-center">

                <div className="screen950:flex-1">
                    <p className="font-tiemposheadline text-4xl whitespace-nowrap tracking-wide font-bold screen450:text-5xl sm:text-6xl screen950:text-7xl xl:text-8xl 2xl:text-9xl pulse-animation" style={{ wordSpacing: "4px" }}>
                        Chat Impact
                    </p>

                    <p className="font-lexend text-base mt-1 screen450:mt-2 sm:mt-2.5 screen950:mt-3.5 xl:mt-5 2xl:mt-7 screen450:text-xl sm:text-2xl screen950:text-3xl xl:text-4xl 2xl:text-5xl thunder-animation">
                        www.chatimpact.com
                    </p>
                </div>

                <div className="flex justify-center mt-7 2xl:ml-28 bounce-animation">
                    <Image src={chatbot} alt="chatbot" className="w-64 h-64 screen450:w-72 screen450:h-72 sm:w-96 sm:h-96 screen950:hidden" />
                    <Image src={chatbot} alt="chatbot" className="hidden screen950:block" />
                </div>

            </div>

        </div>
    )
}

export default HeroSection;