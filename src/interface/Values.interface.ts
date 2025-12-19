interface Cards {
    id: string;
    number: string;
    title: string;
    description: string;
    image: string;
}

export interface IValues {
    title: string;
    cards: Cards[];
}