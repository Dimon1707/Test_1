import {Slider} from "@/components/Slider/Slider";
import {ISliderCard} from "@/interface/SliderCard.interface";

interface ApiPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getNews(count: number = 10): Promise<ISliderCard[]> {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            next: {revalidate: 3600}
        });

        if (!res.ok) {
            throw new Error('Failed to fetch news');
        }

        const posts: ApiPost[] = await res.json();

        const localImages = [
            '/glasses1.svg',
            '/instrument.svg',
            '/red.svg',
            '/box.png',
        ];

        const customContent = [
            {
                title: "Как подготовиться к протезированию зубов",
                description: "Решаясь на такую процедуру, каждый пациент надеется, что зубной протез будет функциональным, удобным, эстетичным и прослужит долгие годы. При этом необходимо"
            },
            {
                title: "Как подготовиться к протезированию зубов",
                description: "Решаясь на такую процедуру, каждый пациент надеется, что зубной протез будет функциональным, удобным, эстетичным и прослужит долгие годы. При этом необходимо"
            },
            {
                title: "Как подготовиться к протезированию зубов",
                description: "Решаясь на такую процедуру, каждый пациент надеется, что зубной протез будет функциональным, удобным, эстетичным и прослужит долгие годы. При этом необходимо"
            },
            {
                title: "Как подготовиться к протезированию зубов",
                description: "Решаясь на такую процедуру, каждый пациент надеется, что зубной протез будет функциональным, удобным, эстетичным и прослужит долгие годы. При этом необходимо"
            },
            {
                title: "Как подготовиться к протезированию зубов",
                description: "Решаясь на такую процедуру, каждый пациент надеется, что зубной протез будет функциональным, удобным, эстетичным и прослужит долгие годы. При этом необходимо"
            },
            {
                title: "Как подготовиться к протезированию зубов",
                description: "Решаясь на такую процедуру, каждый пациент надеется, что зубной протез будет функциональным, удобным, эстетичным и прослужит долгие годы. При этом необходимо"
            },
            {
                title: "Как подготовиться к протезированию зубов",
                description: "Решаясь на такую процедуру, каждый пациент надеется, что зубной протез будет функциональным, удобным, эстетичным и прослужит долгие годы. При этом необходимо"
            },
            {
                title: "Как подготовиться к протезированию зубов",
                description: "Решаясь на такую процедуру, каждый пациент надеется, что зубной протез будет функциональным, удобным, эстетичным и прослужит долгие годы. При этом необходимо"
            },
        ]

        return posts.slice(0, count).map((post, index): ISliderCard => ({
            id: post.id.toString(),
            title: customContent[index]?.title || post.title,
            description: customContent[index]?.description || post.body,
            image: localImages[index % localImages.length],
            date: '27.03.2000г',
            tag: 'Новость'
        }));
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

export default async function NewsServer() {
    const sliderCards = await getNews(8);
    return <Slider title="Новости и блог" items={sliderCards}/>;
}
