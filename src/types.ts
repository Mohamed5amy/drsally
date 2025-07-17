interface BlogType {
    id: number;
    title: string;
    image : string;
    date : string;
    height? : string;
    paragraphs : {
        title? : string;
        description? : string;
        image? : string;
        link?:string
    }[]
}