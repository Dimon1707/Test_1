'use client';

import React, { useRef, useState } from 'react';
import Image from "next/image";
import {IValues} from "@/interface/Values.interface";


interface ValuesSliderProps {
    item: IValues;
}

export default function ValuesSlider({ item }: ValuesSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const cardWidth = scrollRef.current.offsetWidth;
            const index = Math.round(scrollLeft / cardWidth);
            setCurrentIndex(index);
        }
    };

    const scrollToCard = (index: number) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full max-w-120">
            <p className="text-3xl 2xl:text-[40px] xl:text-[30px] text-[#2A2620] font-bolt mt-20 mb-10">{item.title}</p>
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar"
            >
                <div className="flex">
                    {item.cards.map((card) => (
                        <div
                            key={card.id}
                            className="flex-shrink-0 w-full snap-center px-4"
                        >
                            <div className="flex flex-col gap-4 py-8">
                                <div className="flex items-start gap-4">
                                    <p className="text-[#D4B496] text-lg font-bold">
                                        {card.number}
                                    </p>
                                    <p className="text-[#202020] text-2xl font-bold">
                                        {card.title}
                                    </p>
                                </div>
                                <p className="text-[#5A5857A3] text-[15px] leading-relaxed">
                                    {card.description}
                                </p>
                                <div className="relative w-[480px] h-[180px] mt-8">
                                    <Image
                                        src="/valeuSlider.svg"
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
            <div className="flex justify-center gap-2 mt-4 pb-4">
                {item.cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToCard(index)}
                        className={`h-2 rounded-full transition-all ${
                            currentIndex === index
                                ? 'w-8 bg-[#474031]'
                                : 'w-2 bg-[#D1D1D1]'
                        }`}
                        aria-label={`Слайд ${index + 1}`}
                    />
                ))}
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
