'use client';

import React, {useState} from 'react';
import Link from "next/link";
import {IMaskInput} from 'react-imask';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const FooterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        agreed: false
    });

    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value, type} = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({...prev, [name]: checked}));
        } else {
            setFormData(prev => ({...prev, [name]: value}));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Ошибка отправки формы');
            }

            const data = await response.json();
            console.log('Ответ сервера:', data);

            setStatus('success');

            setTimeout(() => {
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                    agreed: false
                });
                setStatus('idle');
            }, 3000);

        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Произошла ошибка');

            setTimeout(() => {
                setStatus('idle');
                setErrorMessage('');
            }, 5000);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mb-8">
                    <div className="flex flex-col">
                        <label className="text-[#DFDEDD54] text-sm mb-3">Имя</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-transparent border-b border-[#766A60] text-white placeholder:text-[#DFDEDD] pb-3 outline-none focus:border-[#BCA489] transition-colors"
                            required
                            disabled={status === 'loading'}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#DFDEDD54] text-sm mb-3">Телефон</label>
                        <IMaskInput
                            mask="+7 (000) 000-00-00"
                            value={formData.phone}
                            onAccept={(value) => setFormData(prev => ({...prev, phone: value}))}
                            placeholder="Ваш номер"
                            name="phone"
                            type="tel"
                            className="bg-transparent border-b border-[#766A60] text-white placeholder:text-[#DFDEDD] pb-3 outline-none focus:border-[#BCA489] transition-colors"
                            required
                            disabled={status === 'loading'}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#DFDEDD54] text-sm mb-3">Почта</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-transparent border-b border-[#766A60] text-white placeholder:text-[#DFDEDD] pb-3 outline-none focus:border-[#BCA489] transition-colors"
                            required
                            disabled={status === 'loading'}
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-8">
                    <label className="text-[#DFDEDD54] text-sm mb-3">Комментарий</label>
                    <textarea
                        name="message"
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={handleChange}
                        rows={1}
                        className="bg-transparent border-b border-[#766A60] text-white placeholder:text-[#DFDEDD] pb-3 outline-none focus:border-[#BCA489] transition-colors resize-none"
                        disabled={status === 'loading'}
                    />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
                    <button
                        type="submit"
                        className="w-full md:w-fit bg-white hover:bg-gray-100 text-[#544B46] px-12 py-4 rounded-full text-[15px] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
                    </button>

                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="agreed"
                            checked={formData.agreed}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 appearance-none border-2 border-[#766A60] rounded checked:bg-[#BCA489] checked:border-[#BCA489] cursor-pointer flex-shrink-0"
                            required
                            disabled={status === 'loading'}
                        />
                        <span className="text-[#FFFFFF52] text-sm leading-relaxed">
                                Заполняя и отправляя данную форму я соглашаюсь на обработку персональных данных в соответствии с{' '}
                            <Link href="" className="underline hover:text-[#BCA489] transition-colors">
                                политикой конфиденциальности сервиса
                            </Link>
                        </span>
                    </label>
                </div>
                {status === 'success' && (
                    <div className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                        <p className="text-green-400 text-center font-medium">
                            ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                        </p>
                    </div>
                )}
                {status === 'error' && (
                    <div className="mt-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                        <p className="text-red-400 text-center font-medium">
                            ✗ {errorMessage || 'Произошла ошибка при отправке формы. Попробуйте еще раз.'}
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
};
