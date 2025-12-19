import {IFooter} from "@/interface/Footer.interface";
import React from "react";
import Image from "next/image";
import {FooterForm} from "@/components/Footer/FooterForm";

interface Props {
    item: IFooter
}

export const Footer: React.FC<Props> = ({item}) => {
    return (
        <div className="relative w-full min-h-120 2xl:px-35 md:px-8 px-4 py-12 md:py-16">
            <Image
                src="/Footer.svg"
                alt="Background"
                fill
                className="object-cover"
                priority
            />
            <div className="relative z-10">
                <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-8 xl:gap-12">
                    <div className="flex flex-col md:flex-row xl:flex-col gap-6 xl:gap-8 xl:max-w-md">
                        <div className="text-white">
                            <h2 className="text-[28px] md:text-4xl xl:text-[46px] font-bold">
                                {item.title}
                            </h2>
                            <h2 className="text-[28px] md:text-4xl xl:text-[46px] font-bold">
                                {item.underTitle}
                            </h2>
                        </div>
                        <div className="text-[#FFFFFF9E] text-[14px] md:text-lg xl:text-[16px] max-w-md">
                            <p>{item.description}</p>
                            <p>{item.underDescription}</p>
                        </div>
                    </div>
                    <div className="flex-1 xl:max-w-2xl">
                        <FooterForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}
