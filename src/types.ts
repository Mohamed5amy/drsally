interface BlogType {
    id: number;
    title: string;
    titleAr?: string;
    image : string;
    date : string;
    height? : string;
    paragraphs : {
        title? : string;
        titleAr?: string;
        description? : string;
        descriptionAr?: string;
        image? : string;
        link?:string
    }[]
}