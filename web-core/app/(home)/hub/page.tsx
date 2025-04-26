'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HubPage = () => {

    const router = useRouter()

    //TODO: Check whether the user can go into a rizz session
    const handleRizSession = () => {
        router.push('/chat')
    }

    return (
        <div className="w-full h-full lg:px-5 lg:py-5 px-1 py-5">
            <div className="flex justify-center items-center w-full flex-col mt-auto mb-auto h-full gap-12">
                <div className="flex justify-center gap-3 flex-col items-center">
                    <Image src={'/icons/smirking-face.svg'} height={20} width={20} className="size-32 animate-bounce duration-1000" alt="Smirking face"/>
                    <h1 className="lg:text-3xl text-xl font-bold">More practice = More Rizz</h1>
                    <span className="absolute lg:translate-x-45 translate-x-35 translate-y-7 rotate-12 text-sm font-light ">*scientifically proven</span>
                </div>
                <Button variant={'default'} onClick={handleRizSession} className="cursor-pointer">
                    Let&apos;s go rizz
                </Button>
            </div>
        </div>
    )
}

export default HubPage;