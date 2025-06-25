export interface Service {
    id: number;
    title: string;
    description: string;
    duration: string;
    price: string;
}

export const services: Service[] = [
    {
        id: 1,
        title: "Individual Holistic Psychotherapy",
        description: "At You Matter by Sally Mounir, we offer a unique path to individual growth and lasting well-being. We address your mind, body, emotions, and spirit to foster deep healing beyond just symptoms. Gain personalized tools and uncover your inner wisdom for a truly transformative journey.",
        duration: "60 Mins",
        price: "200"
    },
    {
        id: 2,
        title: "Holistic Psychotherapy for Couples",
        description: "At You Matter by Sally Mounir, we help couples deepen their bond and navigate challenges holistically. We explore communication, individual well-being, and relational dynamics to foster profound understanding. Gain practical tools and strengthen your connection for a more fulfilling relationship.",
        duration: "90 Mins",
        price: "300"
    },
    {
        id: 3,
        title: "Holistic Walk & Talk Therapy by Phone",
        description: "Experience the unique benefits of integrating movement with therapy, wherever you are. Sally guides you through insightful conversations as you walk, fostering mind-body connection and fresh perspectives. It's a flexible, comfortable, and powerful way to move forward on your path to well-being.",
        duration: "60 Mins",
        price: "200"
    },
    {
        id: 4,
        title: "Holistic Walk & Talk Therapy In Person",
        description: "Experience the unique benefits of integrating movement with therapy, if you live in Geneva in Switzerland or some where close to there Sally guides you through insightful conversations as you walk, fostering mind-body connection and fresh perspectives. It's a flexible, comfortable, and powerful way to move forward on your path to well-being.",
        duration: "60 Mins",
        price: "200"
    }
]; 