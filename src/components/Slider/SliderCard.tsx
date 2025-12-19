import React from "react";
import {ISliderCard} from "@/interface/SliderCard.interface";
import Image from "next/image";

interface Props {
    item: ISliderCard
}

export const SliderCard: React.FC<Props> = ({item}) => {
    return (
        <div className="flex flex-col items-start max-w-88 max-h-150">
            <div className="relative">
                <Image
                    src={item.image}
                    alt="max"
                    width={350}
                    height={400}
                    className="rounded-xl"
                />
                <div className="absolute left-[36%] bottom-[81%] py-2 px-4 rounded-4xl bg-white">
                    <p className="text-black text-[14px]">{item.tag}</p>
                </div>
            </div>
            <div className="flex flex-col items-start gap-3 mt-6 max-w-80">
                <p className="text-[#B2A487] text-[14px]">{item.date}</p>
                <p className="text-[#2A2620] text-[20px] font-bold">{item.title}</p>
                <p className="text-[#5A5857A3] text-[16px] line-clamp-2">{item.description}</p>
            </div>
        </div>
    )
}