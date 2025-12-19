import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        if (!data.name || !data.email || !data.phone) {
            return NextResponse.json(
                { error: 'Заполните все обязательные поля' },
                { status: 400 }
            );
        }

        console.log('Получены данные формы:', data);

        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            {
                success: true,
                message: 'Заявка успешно отправлена'
            },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500 }
        );
    }
}
