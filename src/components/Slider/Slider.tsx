'use client';

import React, { useState } from 'react';
import { ISliderCard } from '@/interface/SliderCard.interface';
import Image from "next/image";
import { SliderCard } from "@/components/Slider/SliderCard";

interface Props {
    title: string;
    items: ISliderCard[];
    buttonText?: string;
}

export const Slider: React.FC<Props> = ({
                                            title,
                                            items = [],
                                            buttonText = "Все публикации"
                                        }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 4;
    const maxIndex = Math.max(0, items.length - itemsPerView);

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div className="py-12 md:py-20">
            <div className="px-4 md:px-8 2xl:px-35">
                <p className="text-3xl 2xl:text-[40px] xl:text-[30px] text-[#2A2620] font-bold mb-6 md:mb-20">
                    {title}
                </p>
            </div>
            <div className="lg:hidden overflow-x-auto hide-scrollbar">
                <div className="flex gap-4 px-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex-shrink-0 w-[280px]">
                            <SliderCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden lg:block px-8 2xl:px-35">
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-6 transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                            }}
                        >
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex-shrink-0 w-[calc(25%-18px)]"
                                >
                                    <SliderCard item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {currentIndex < maxIndex && (
                        <button
                            onClick={handleNext}
                            className="absolute -right-6 top-1/3 -translate-y-1/2 w-14 h-14 rounded-full bg-[#544B46] hover:bg-[#3A3A3A] text-white flex items-center justify-center transition-colors z-10"
                            aria-label="Следующий слайд"
                        >
                            <Image src="/Vector-r.svg" alt="" width={12} height={6} />
                        </button>
                    )}
                    {currentIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="absolute -left-6 top-1/3 -translate-y-1/2 w-14 h-14 rounded-full bg-[#544B46] hover:bg-[#3A3A3A] text-white flex items-center justify-center transition-colors z-10"
                            aria-label="Предыдущий слайд"
                        >
                            <Image src="/Vector-l.svg" alt="" width={12} height={6} />
                        </button>
                    )}
                </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-12 px-4">
                <button className="flex gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#544B46] hover:bg-[#3A3A3A] text-white rounded-full text-base md:text-lg font-medium transition-colors">
                    {buttonText}
                    <span className="text-[#BCA489]">({items.length})</span>
                </button>
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
};
