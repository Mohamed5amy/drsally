interface Testimonial {
    name : string;
    comment : string;
    commentAr : string;
    id : number
}

export const testimonials : Testimonial[] = [
    {
        id : 0,
        name : "HV",
        comment : "Working with Sally has been a transformational experience. I learn tools to better manage periods of anxiety and mental fatigue. Every session I feel at ease to share and work through concerns that are big and small. At times where I’ve had to make tough decisions, speaking through the situation with clarity helped me make choices that are healthier for my overall well-being. Her patience, care and ability to go the extra mile is something I’ll always be grateful for.",
        commentAr : "العمل مع سالي كان تجربة تحويلية. تعلمت أدوات لإدارة فترات القلق والإرهاق العقلي بشكل أفضل. في كل جلسة، أشعر بالراحة لمشاركة ومعالجة الهموم الكبيرة والصغيرة. في الأوقات التي كان علي اتخاذ قرارات صعبة فيها، ساعدتني مناقشة الموقف بوضوح على اتخاذ خيارات أكثر صحة لرفاهيتي العامة. صبرها، رعايتها وقدرتها على بذل مجهود إضافي هي أشياء سأظل ممتنًا لها دائمًا."
    },
    {
        id : 1,
        name : "Yesh",
        comment : "I came to Sally as a mentally out of shape 19 year old boy struggling with his identity and emotions. Sally showed me how to be mindful of my feelings which has given me success in dealing with my emotions and improving my relationships. Sally didn’t help put me back together, she gave me the skills to put myself back together at any point in my life. I wouldn’t be who I am today if it weren’t for her.",
        commentAr : "أتيت إلى سالي وأنا شاب في التاسعة عشرة من عمري، غير لائق عقليًا، أعاني من هويتي وعواطفي. أرتني سالي كيف أكون واعيًا بمشاعري، مما أعطاني النجاح في التعامل مع عواطفي وتحسين علاقاتي. لم تساعدني سالي في إعادة تجميع نفسي، بل أعطتني المهارات لإعادة بناء نفسي في أي وقت في حياتي. لما كنت الشخص الذي أنا عليه اليوم لولاها."
    },
    {
        id : 2,
        name : "Bella Syed",
        comment : "While I understood the benefits of therapy cognitively, I felt very nervous to start my own journey of healing and self-discovery. Sally’s warmth and professionalism put me at ease and I was able to build trust and a sense of safety with her quickly. She listens intently and never forces her ideas or solutions on me but instead co-creates the path forward with me. What I appreciate most about Sally is her genuine sense of care and concern for me not only during our sessions but outside of them; for example, she would occasionally send me resources to read or watch that are relevant to our goals in therapy. I wouldn’t be the person I am today without her!",
        commentAr : "بينما كنت أفهم فوائد العلاج النفسي عقليًا، شعرت بالتوتر الشديد لبدء رحلتي الخاصة بالشفاء واكتشاف الذات. دفء سالي واحترافيتها جعلاني أشعر بالراحة، وتمكنت من بناء الثقة وشعور بالأمان معها بسرعة. إنها تستمع باهتمام ولا تفرض أفكارها أو حلولها علي، بل تعمل معي لخلق المسار المستقبلي. ما أقدره أكثر في سالي هو شعورها الحقيقي بالرعاية والاهتمام بي، ليس فقط خلال جلساتنا ولكن خارجها أيضًا؛ على سبيل المثال، كانت ترسل لي أحيانًا مواردًا للقراءة أو المشاهدة تتعلق بأهدافنا في العلاج. لما كنت الشخص الذي أنا عليه اليوم بدونها!"
    },
    {
        id : 3,
        name : "AC",
        comment : "Sally is very knowledgeable and passionate about helping her clients. She has been great with helping me overcome some hurdles with depression and anxiety. She listens attentively, understands and communicates great advice in a non-judgemental way. So, I highly recommend her!",
        commentAr : "سالي على دراية كبيرة وعاطفية في مساعدة عملائها. لقد كانت رائعة في مساعدتي على التغلب على بعض العقبات مع الاكتئاب والقلق. إنها تستمع باهتمام، تفهم وتواصل نصائح رائعة بطريقة غير قضائية. لذا، أوصي بها بشدة!"
    },
    {
        id : 4,
        name : "Nawal",
        comment : "Sally has been instrumental towards improving my mental well-being during a period of crisis. She has been a great listener, kind, and understanding. She has helped me contextualise my negative thoughts and feelings and I have become more self-aware. She has become a source of strength and support during my times of need and I am in a better mental and emotional state today with her help. I highly recommend her as a psychotherapist!",
        commentAr : "كانت سالي أداة أساسية في تحسين سلامتي العقلية خلال فترة الأزمات. كانت مستمعة رائعة، لطيفة، ومتفهمة. ساعدتني في وضع أفكاري ومشاعري السلبية في سياقها، وأصبحت أكثر وعيًا بذاتي. أصبحت مصدر قوة ودعم خلال أوقات حاجتي، وأنا اليوم في حالة عقلية وعاطفية أفضل بمساعدتها. أوصي بها بشدة كمعالجة نفسية!"
    },
    {
        id : 7,
        name : "",
        comment : "The time I decided to finally undergo the therapy session is mostly due to ptsd (post-traumatic stress disorder). Being exposed in a toxic environment for a significant amount of time (more than 5 years) took its toll on me, and getting out of it did not solve them; I still have issues with controlling my thoughts and also with the trust issues with even the people close to me. That’s when I realised there’s something regarding my mental health that’s beyond my own capability to resolve and that’s when I decided to seek professional help. Upon searching for the psychologist to help me, I came across several therapists and I finally chose Ms. Sally Mounir to help me with my issues",
        commentAr : "الوقت الذي قررت فيه أخيرًا الخضوع لجلسة علاجية كان بسبب اضطراب ما بعد الصدمة (PTSD). التعرض لبيئة سامة لفترة طويلة (أكثر من 5 سنوات) أثر عليّ، والخروج منها لم يحل المشكلة؛ ما زلت أعاني من مشاكل في التحكم بأفكاري وأيضًا من مشاكل الثقة حتى مع الأشخاص المقربين مني. عندها أدركت أن هناك شيئًا يتعلق بصحتي العقلية يتجاوز قدرتي على حله، وقررت طلب المساعدة المهنية. أثناء البحث عن طبيب نفسي لمساعدتي، صادفت عدة معالجين واخترت أخيرًا السيدة سالي منير لمساعدتي في مشاكلي."
    },
    {
        id : 8,
        name : "",
        comment : "Amazingly, after those hard sessions, Ms. Sally suddenly concluded the root cause of my mental illness. And more amazingly, the main cause is actually something I have never thought of but subconsciously did all the time. Giving some thought and connecting the dots over all the events happening in my life, I was surprised to find out that her conclusion is actually true, that I tended to blame all the misfortunes on myself. Starting from that, it seemed like a really new world for me, that I finally came to understand myself much more.",
        commentAr : "من المدهش، بعد تلك الجلسات الصعبة، أن السيدة سالي استنتجت فجأة السبب الجذري لمرضي العقلي. والأكثر إثارة للدهشة، أن السبب الرئيسي هو شيء لم أفكر فيه من قبل ولكنني كنت أفعله دائمًا دون وعي. بعد التفكير وربط الأحداث في حياتي، تفاجأت بأن استنتاجها كان صحيحًا، أنني كنت أميل إلى لوم نفسي على كل المصائب. من هناك، بدا الأمر وكأنه عالم جديد تمامًا بالنسبة لي، حيث بدأت أفهم نفسي أكثر بكثير."
    },
    {
        id : 9,
        name : "",
        comment : "Starting from that realisation, Ms. Sally started to focus the sessions with that very issue, on how to solve those issues and making peace with my past. She suggested several methods in resolving the issue. While few of them did not work well (this actually also contributed to me not being able to do it properly), most of them were really helpful and I felt so much better after doing all the self-treatments she suggested to me.",
        commentAr : "انطلاقًا من تلك الإدراك، بدأت السيدة سالي في تركيز الجلسات على تلك المشكلة بالذات، حول كيفية حل تلك المشاكل والتصالح مع ماضيّ. اقترحت عدة طرق لحل المشكلة. بينما لم تنجح بعضها بشكل جيد (وهذا أيضًا ساهم في عدم قدرتي على القيام بها بشكل صحيح)، كانت معظمها مفيدة جدًا وشعرت بتحسن كبير بعد تطبيق جميع العلاجات الذاتية التي اقترحتها لي."
    },
    {
        id : 10,
        name : "",
        comment : "After several more sessions, I was feeling born anew and I was equipped with lots of effective methods to overcome those bad thoughts should it resurface later on. Now I can feel genuinely happy, I can trust my friends much more easily, and most importantly, I can operate really well and healthy on a daily basis. And that’s when our overall sessions were concluded.",
        commentAr : "بعد عدة جلسات أخرى، شعرت وكأنني وُلدت من جديد وكنت مزودًا بالعديد من الطرق الفعالة للتغلب على تلك الأفكار السيئة إذا عادت لاحقًا. الآن يمكنني أن أشعر بالسعادة الحقيقية، يمكنني الثقة بأصدقائي بسهولة أكبر، والأهم من ذلك، يمكنني العمل بشكل جيد وصحي على أساس يومي. وعندها انتهت جلساتنا الإجمالية."
    },
    {
        id : 11,
        name : "Bivan A. H",
        comment : "Even though I started off as quite pessimistic about this whole therapy session thingy, at the end, I felt really grateful that I have undergone these sessions. I really encourage others who may have trouble with their mental health to seek help. There’s nothing shameful in seeking professional help for your mental health; on the contrary, it will be really brave of you to embrace that, and it will be very rewarding in the end.",
        commentAr : "على الرغم من أنني بدأت متشائمًا تمامًا بشأن فكرة جلسات العلاج هذه، في النهاية، شعرت بالامتنان الشديد لأنني خضعت لهذه الجلسات. أشجع حقًا الآخرين الذين قد يواجهون مشاكل في صحتهم العقلية على طلب المساعدة. لا يوجد شيء مخجل في طلب المساعدة المهنية لصحتك العقلية؛ على العكس، سيكون من الشجاعة جدًا أن تتقبل ذلك، وسيكون ذلك مجزيًا جدًا في النهاية."
    },
    {
        id : 5,
        name : "Nawal",
        comment : "Sally’s arrival into my life could not have come at a better timing. My first session with her gave me so much insight as to why I am the way I am. That session was such a mind-blowing experience that I knew right after that she was the right therapist for me. She was gentle, observant, non-judgmental and quick to pick up on my feelings (talking about my feelings isn’t the easiest for me). She always made sure I was comfortable before starting the session and her questions always made me dig deeper and discover a lot about myself. Her methods for coping with anxiety works really well for me and to this day, I find myself gravitating towards it whenever I’m having a tough time. Sally is a kind, empathetic, patient, and caring therapist. She has helped me learn so much about myself and has impacted my life in the most positive way possible. I have come a long way from weekly therapy session to not needing it anymore (having learnt how to express and cope with my feelings and anxiety) and I will always be grateful for her.",
        commentAr : "وصول سالي إلى حياتي لم يكن يمكن أن يأتي في توقيت أفضل. الجلسة الأولى معها أعطتني الكثير من البصيرة حول سبب كوني على ما أنا عليه. كانت تلك الجلسة تجربة مذهلة لدرجة أنني علمت بعدها مباشرة أنها المعالجة المناسبة لي. كانت لطيفة، متيقظة، غير قضائية وسريعة في التقاط مشاعري (الحديث عن مشاعري ليس بالأمر السهل بالنسبة لي). كانت دائمًا تتأكد من راحتي قبل بدء الجلسة وأسئلتها دائمًا تجعلني أتعمق أكثر واكتشف الكثير عن نفسي. طرقها للتعامل مع القلق تناسبني بشكل جيد جدًا، وحتى اليوم، أجد نفسي أميل إليها كلما واجهت وقتًا صعبًا. سالي معالجة لطيفة، متعاطفة، صبورة، ومهتمة. لقد ساعدتني في تعلم الكثير عن نفسي وأثرت على حياتي بأكثر الطرق إيجابية ممكنة. لقد قطعت شوطًا طويلًا من جلسات العلاج الأسبوعية إلى عدم الحاجة إليها بعد الآن (بعد أن تعلمت كيفية التعبير عن مشاعري والتعامل مع القلق) وسأظل ممتنًا لها دائمًا."
    },
]