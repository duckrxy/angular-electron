export class ProductDetail {

    id: string;
    releaseDate: Date;
    director: string;
    maker: string;
    label: string;
    tags: string[];
    cast: Actress[];
}

export class Actress {
    name: string;
    birth: Date;
}