import React from "react";
import Image from "next/image";
import {IValues} from "@/interface/Values.interface";
import ValuesSlider from "@/components/Values/ValuesSlider";
import {values} from "@/data/Values";

interface Props {
    item: IValues;
}

export const Values: React.FC<Props> = ({item}) => {
    return (
        <>
            <div className="2xl:px-35 md:px-8 px-4">
                <p className="hidden md:flex text-[46px] text-[#2A2620] font-bolt mt-20">{item.title}</p>
                <div className="hidden md:flex border-b border-gray-200 w-screen mt-15 2xl:-mx-35 md:-mx-8 -mx-4"></div>
                <div className="hidden md:flex relative">
                    <div className="hidden md:flex absolute top-[50%] left-0 w-screen 2xl:-mx-35 md:-mx-8 -mx-4 border-b border-gray-200 z-10"></div>
                    <div className="grid grid-cols-2 grid-flow-col grid-rows-2 gap-x-5 md:gap-x-20">
                        {item.cards.map((card, index) => (
                            <div key={card.id} className={`flex flex-col xl:flex-row items-start xl:items-center gap-6 p-6 ${
                                index < 2 ? 'border-r border-gray-200' : ''
                            }`}>
                                <div className="flex flex-row gap-10">
                                    <p className="text-[#D4B496] text-[18px] font-bold">{card.number}</p>
                                    <div className="flex flex-col items-start">
                                        <p className="text-[#202020] text-2xl font-bold mb-5">{card.title}</p>
                                        <p className="text-[#5A5857A3] text-[15px]">{card.description}</p>
                                    </div>
                                </div>
                                <div className="relative w-full md:w-auto self-end md:self-center">
                                    <div className="relative w-[180px] h-[180px] md:w-[180px] md:h-[180px] xl:w-[200px] xl:h-[200px] ml-auto md:ml-0">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex border-b border-gray-200 w-screen 2xl:-mx-35 md:-mx-8 -mx-4"></div>
                <div className="flex justify-center items-center md:hidden">
                    <ValuesSlider item={values} />
                </div>
            </div>
        </>
    )
}
