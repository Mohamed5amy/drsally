export interface Service {
    id: number;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    duration: string;
    durationAr: string;
    price: string;
}

export const services: Service[] = [
    {
        id: 1,
        title: "Individual Holistic Psychotherapy",
        titleAr: "العلاج النفسي الشامل للأفراد",
        description: "At You Matter by Sally Mounir, we offer a unique path to individual growth and lasting well-being. We address your mind, body, emotions, and spirit to foster deep healing beyond just symptoms. Gain personalized tools and uncover your inner wisdom for a truly transformative journey.",
        descriptionAr: "في You Matter by Sally Mounir، نقدم مسارًا فريدًا للنمو الفردي والرفاهية الدائمة. نعالج العقل والجسم والعواطف والروح لتعزيز الشفاء العميق الذي يتجاوز الأعراض فقط. اكتسب أدوات مخصصة واكتشف حكمتك الداخلية لرحلة تحول حقيقية.",
        duration: "60 Mins",
        durationAr: "60 دقيقة",
        price: "200"
    },
    {
        id: 2,
        title: "Holistic Psychotherapy for Couples",
        titleAr: "العلاج النفسي الشامل للأزواج",
        description: "At You Matter by Sally Mounir, we help couples deepen their bond and navigate challenges holistically. We explore communication, individual well-being, and relational dynamics to foster profound understanding. Gain practical tools and strengthen your connection for a more fulfilling relationship.",
        descriptionAr: "في You Matter by Sally Mounir، نساعد الأزواج على تعميق رابطتهم والتغلب على التحديات بشكل شامل. نستكشف التواصل والرفاهية الفردية وديناميكيات العلاقة لتعزيز التفاهم العميق. اكتسب أدوات عملية وقوِّي ارتباطك لعلاقة أكثر إشباعًا.",
        duration: "90 Mins",
        durationAr: "90 دقيقة",
        price: "300"
    },
    {
        id: 3,
        title: "Holistic Walk & Talk Therapy by Phone",
        titleAr: "العلاج بالمشي والتحدث عبر الهاتف بشكل شامل",
        description: "Experience the unique benefits of integrating movement with therapy, wherever you are. Sally guides you through insightful conversations as you walk, fostering mind-body connection and fresh perspectives. It's a flexible, comfortable, and powerful way to move forward on your path to well-being.",
        descriptionAr: "جرب الفوائد الفريدة لدمج الحركة مع العلاج، أينما كنت. سلمى ترشدك خلال محادثات عميقة أثناء المشي، مما يعزز الارتباط بين العقل والجسم ويمنحك وجهات نظر جديدة. إنها طريقة مرنة ومريحة وقوية للتقدم في مسارك نحو الرفاهية.",
        duration: "60 Mins",
        durationAr: "60 دقيقة",
        price: "200"
    },
    {
        id: 4,
        title: "Holistic Walk & Talk Therapy In Person",
        titleAr: "العلاج بالمشي والتحدث بشكل شخصي وشامل",
        description: "Experience the unique benefits of integrating movement with therapy, if you live in Geneva in Switzerland or somewhere close to there Sally guides you through insightful conversations as you walk, fostering mind-body connection and fresh perspectives. It's a flexible, comfortable, and powerful way to move forward on your path to well-being.",
        descriptionAr: "جرب الفوائد الفريدة لدمج الحركة مع العلاج، إذا كنت تعيش في جنيف في سويسرا أو بالقرب منها، سلمى ترشدك خلال محادثات عميقة أثناء المشي، مما يعزز الارتباط بين العقل والجسم ويمنحك وجهات نظر جديدة. إنها طريقة مرنة ومريحة وقوية للتقدم في مسارك نحو الرفاهية.",
        duration: "60 Mins",
        durationAr: "60 دقيقة",
        price: "200"
    }
];