import { Topic, FrameworkStep, AnswerSet } from './types';

export interface TopicSet {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
  answers_b1: Record<number, AnswerSet>;
  answers_b2: Record<number, AnswerSet>;
  answers_c1: Record<number, AnswerSet>;
}

// ==========================================
// MIXED TOPICS (Bộ đề: Tổng hợp)
// ==========================================

export const TOPICS_SET2: Topic[] = [
  {
    id: 0,
    label: "Reading books",
    mindmap_centre: "READING BOOKS",
    statement: "Topic: Children should be encouraged to read books.",
    mindmap: ["Widening knowledge", "Training thinking skills", "Encouraging curiosity"],
    followup: [
      "Do children in your place often read lots of books?",
      "What kinds of books for children are popular in our country?",
      "What can be done to encourage children to read books more often?"
    ]
  },
  {
    id: 1,
    label: "Physical exercise",
    mindmap_centre: "PHYSICAL EXERCISE",
    statement: "Topic: People should do physical exercise every day.",
    mindmap: ["Improving physical health", "Reducing stress", "Building discipline"],
    followup: [
      "How popular is exercise among young people in your country?",
      "What kinds of exercise are most common where you live?",
      "What can schools do to help students stay active?"
    ]
  },
  {
    id: 2,
    label: "Learning English",
    mindmap_centre: "LEARNING ENGLISH",
    statement: "Topic: It is important for Vietnamese students to learn English well.",
    mindmap: ["Better job opportunities", "Access to global information", "Cultural exchange"],
    followup: [
      "How important is English in the workplace in Vietnam today?",
      "What problems do Vietnamese learners often face when learning English?",
      "How can schools make English learning more effective?"
    ]
  },
  {
    id: 3,
    label: "Living in cities",
    mindmap_centre: "CITY LIFE",
    statement: "Topic: Living in a big city has more advantages than disadvantages.",
    mindmap: ["More job opportunities", "Better public services", "Diverse social life"],
    followup: [
      "Why do so many people move to big cities in Vietnam?",
      "What are the main disadvantages of city life that people often mention?",
      "Do you think smaller towns will become more popular in the future?"
    ]
  },
  {
    id: 4,
    label: "Using smartphones",
    mindmap_centre: "SMARTPHONES",
    statement: "Topic: Smartphones have changed the way people communicate with each other.",
    mindmap: ["Instant communication", "Social media connections", "Reducing face-to-face contact"],
    followup: [
      "How have smartphones changed daily life in Vietnam?",
      "Do you think people communicate better now than before smartphones?",
      "What can be done to encourage more meaningful communication?"
    ]
  },
  {
    id: 5,
    label: "Environmental protection",
    mindmap_centre: "THE ENVIRONMENT",
    statement: "Topic: Every individual should take responsibility for protecting the environment.",
    mindmap: ["Reducing waste", "Saving energy at home", "Raising awareness"],
    followup: [
      "What environmental problems are most serious in Vietnam today?",
      "What do ordinary people do to help protect the environment in your area?",
      "How can the government encourage people to be more eco-friendly?"
    ]
  },
  {
    id: 6,
    label: "Choosing a career",
    mindmap_centre: "CAREER CHOICE",
    statement: "Topic: Young people should choose a career based on their interests, not just salary.",
    mindmap: ["Long-term job satisfaction", "Better performance at work", "Personal fulfilment"],
    followup: [
      "How do most young people in Vietnam choose their career?",
      "Do parents influence young people's career choices a lot?",
      "What should schools do to help students find the right career?"
    ]
  },
  {
    id: 7,
    label: "Online learning",
    mindmap_centre: "ONLINE LEARNING",
    statement: "Topic: Online learning is an effective alternative to traditional classroom study.",
    mindmap: ["Flexible schedule", "Access to global resources", "Self-discipline required"],
    followup: [
      "How popular is online learning among students in Vietnam?",
      "What are the main challenges of learning online?",
      "Do you think online learning will replace classrooms in the future?"
    ]
  }
];

export const ANSWERS_B1_SET2: Record<number, AnswerSet> = {
  0: {
    seg1: "I think children should be encouraged to read books. It can help them in three way: it make their knowledge wider, it train their thinking skill, and it make them more curious about the world.",
    seg2: " First, reading help children learn many new things. When they read book, they can learn about history, science, animal, and many other topic. This make their knowledge wider and help them understand the world better.",
    seg3: " Second, reading also train children to think more carefully. When they read story, they must follow the idea and understand what happen. This is very good exercise for their brain.",
    seg4: " Third, reading also make children more curious. When they read interesting book, they want to know more and ask more question. This is very good habit for learning.",
    seg5: " So I think parent and teacher should encourage children to read more book every day.",
    note: "B1",
    note_b1: "B1 — Điểm thấp vì: 'in three way' và 'read book' thiếu số nhiều, 'reading help' và 'it make' thiếu -s. Các ý được đề cập nhưng giải thích rất ngắn và không có ví dụ cụ thể. Mỗi ý chỉ có 1-2 câu đơn giản.",
    note_c1: "So với C1: C1 phân tích cơ chế của từng ý ('cognitive demand', 'habit of wondering'), dùng so sánh với video để làm rõ, và câu kết rút ra ý nghĩa rộng hơn."
  },
  1: {
    seg1: "I think people should exercise every day because it is good for them in three way: it improve their physical health, it reduce their stress, and it help them build discipline.",
    seg2: " First, exercise make the body stronger and healthier. When you exercise regularly, your heart become stronger and you have less chance to get sick. This is very important for long healthy life.",
    seg3: " Second, exercise also help people feel less stress. When you exercise, your body feel more relax and your mind feel better too. Many people say they feel happier after exercise.",
    seg4: " Third, exercise help people build discipline. When you exercise every day, you learn to follow schedule and do thing even when you feel tired. This is useful skill in life.",
    seg5: " So I believe everyone should try to exercise at least 30 minute every day for better health and happiness.",
    note: "B1",
    note_b1: "B1 — Điểm thấp vì: 'in three way' thiếu số nhiều, 'exercise make' và 'your heart become' thiếu -s, '30 minute' thiếu số nhiều. Giải thích đơn giản, không có ví dụ cụ thể. Phần lý thuyết discipline chỉ mô tả mà không giải thích tại sao transferable.",
    note_c1: "So với C1: C1 giải thích cơ chế neurochemical của stress reduction, phân tích discipline transfer với dẫn chứng, và câu kết rút ra ý nghĩa về character."
  },
  2: {
    seg1: "I think it is very important for Vietnamese students to learn English well because it give them three benefit: better job opportunity, access to more information, and chance to experience other culture.",
    seg2: " First, English help students find better job. Many company in Vietnam need worker who can speak English. If you have good English, you can get higher salary and more promotion.",
    seg3: " Second, English give students access to global information. Many book, website, and research paper are written in English. If you know English, you can learn much more than student who do not know it.",
    seg4: " Third, learning English also help students experience other culture. When you can speak English, you can talk to people from many country and learn how they live and think.",
    seg5: " So I believe all Vietnamese student should study English seriously from young age.",
    note: "B1",
    note_b1: "B1 — Điểm thấp vì: 'it give them three benefit' thiếu -s cả hai, 'many book, website' thiếu số nhiều, 'all Vietnamese student' thiếu số nhiều. Các ý đúng nhưng giải thích nông và không có ví dụ thực tế.",
    note_c1: "So với C1: C1 có ví dụ cụ thể về người bị plateau, phân tích 'information environment' một cách có chiều sâu, và dùng ẩm dụ 'infrastructure' để tổng kết."
  },
  3: {
    seg1: "I think living in big city has more advantage because city give people three important thing: more job opportunity, better public service, and more diverse social life.",
    seg2: " First, city have more job than small town. There are many company and business in city, so people can find work more easy. Young people especially can find good career with good salary.",
    seg3: " Second, public service in city is better. City have more hospital, school, and public transport. People can get better healthcare and their children can go to better school.",
    seg4: " Third, social life in city is more interesting and diverse. There are many restaurant, festival, and cultural activity. You can meet people from many place and have more fun.",
    seg5: " So I think city life is better for most people, especially young people who want to build their future.",
    note: "B1",
    note_b1: "B1 — Điểm thấp vì: 'big city has more advantage' thiếu 'a' và -s, 'city have more job' và 'public service in city is better' thiếu -s. Liệt kê ví dụ (restaurant, festival) mà không giải thích tại sao quan trọng.",
    note_c1: "So với C1: C1 phân tích density của job market, giải thích tại sao public services quan trọng nhất khi 'it matters most', và liên kết social diversity với adaptability."
  },
  4: {
    seg1: "I think smartphone have changed the way people communicate in three way: they make instant communication possible, they create social media connection, but they also reduce face-to-face contact between people.",
    seg2: " First, smartphone make communication much faster and easier. Now we can call or send message to anyone immediately, anywhere in the world. This is very useful for keeping contact with family and friend.",
    seg3: " Second, social media on smartphone help people stay connected online. People can join group, share photo, and make new friend through app like Facebook and Instagram.",
    seg4: " Third, smartphone also reduce face-to-face contact. People now look at their phone more than they talk to each other. Even in family dinner, everyone is using their phone.",
    seg5: " So I think smartphone is useful but we should not forget to spend real time with people in our life.",
    note: "B1",
    note_b1: "B1 — Điểm thấp vì: 'smartphone have changed' và 'smartphone make' thiếu -s, 'in three way' thiếu số nhiều. Giải thích đơn giản, không có phân tích tại sao mỗi ý quan trọng. Câu kết chỉ là lời nhắc chung.",
    note_c1: "So với C1: C1 phân tích parasocial vs genuine connection, giải thích cụ thể những gì bị mất trong face-to-face reduction, và câu kết có lập trường sắc bén hơn."
  },
  5: {
    seg1: "I think every person should help protect the environment. We can do this in three way: reduce waste in daily life, save energy at home, and raise awareness to people around us.",
    seg2: " First, we should reduce waste. We can use reusable bag, sort our rubbish, and try not to use too much plastic. If everyone do this, there will be much less pollution in our environment.",
    seg3: " Second, we should save energy at home. We should turn off light and electric device when we do not use them. We should also not use air conditioner too much. This help reduce carbon emission.",
    seg4: " Third, we should raise awareness. We can tell our family and friend about environmental problem and how to help. We can also share useful information on social media to reach more people.",
    seg5: " So I think if everyone make small change in their daily life, it will make big difference for our environment.",
    note: "B1",
    note_b1: "B1 — Điểm thấp vì: 'in three way' thiếu số nhiều, 'if everyone do' thiếu -s, 'tell our family and friend' thiếu số nhiều. Giải thích đúng nhưng ngắn, không có phân tích cơ chế tác động.",
    note_c1: "So với C1: C1 phân tích habit formation, aggregate effect trên manufacturing, và giải thích awareness như 'multiplier' — tư duy hệ thống hơn."
  },
  6: {
    seg1: "I think young people should choose career based on their interest, not just salary. This bring them three benefit: long-term satisfaction, better performance at work, and personal fulfilment.",
    seg2: " First, when you choose job you like, you will feel more satisfied for long time. If you only work for money, you may feel bored and unhappy after a few year. But if you love your work, you stay happy.",
    seg3: " Second, you will perform better at work when you are interested in what you do. You will work harder, learn faster, and try to improve yourself more than someone who does not care about their job.",
    seg4: " Third, choosing work you love also bring personal fulfilment. You feel your life has meaning. Work is not only about money — it should also make you feel good about yourself and what you do.",
    seg5: " So I think it is better to find work that match your interest, even if the salary is not the highest.",
    note: "B1",
    note_b1: "B1 — Điểm thấp vì: 'this bring them three benefit' thiếu -s cả hai, 'after a few year' thiếu số nhiều. Giải thích đúng hướng nhưng không có ví dụ cụ thể và không phân tích tại sao các ý liên kết với nhau.",
    note_c1: "So với C1: C1 phân tích tại sao intrinsic motivation beats salary over time, giải thích compounding effect của engagement trên performance, và câu kết có lời khuyên thực dụng cụ thể."
  },
  7: {
    seg1: "I think online learning is an effective way to study. It offer students three advantage: flexible schedule, access to global resource, and it also require self-discipline which is good for students.",
    seg2: " First, online learning give students flexible schedule. They can study whenever they want, morning or evening, and they can choose how fast or slow they learn. This is very convenient.",
    seg3: " Second, students can access resource from all over the world. They can watch lecture from famous teacher and university without travelling. This give them better and wider knowledge.",
    seg4: " Third, online learning require students to be self-disciplined. They must study on their own without teacher always watching them. This help them become more responsible and independent learner.",
    seg5: " So I think online learning is good especially for student who cannot go to traditional school or who want to learn extra skill.",
    note: "B1",
    note_b1: "B1 — Điểm thấp vì: 'it offer students three advantage' thiếu -s cả hai, 'give students flexible schedule' thiếu -s. Giải thích ngắn và không phân tích khi nào self-discipline là hạn chế chứ không chỉ là lợi ích.",
    note_c1: "So với C1: C1 phân tích flexibility từ góc độ access, global resources theo context Việt Nam, và self-discipline như paradox — vừa strength vừa limitation."
  }
};

export const ANSWERS_B2_SET2: Record<number, AnswerSet> = {
  0: {
    seg1: "I think children should be encouraged to read more. It helps them in three ways: it builds their knowledge, it helps them think more carefully, and it keeps them curious about the world.",
    seg2: " On the knowledge side, reading introduces children to things they would never come across in everyday life — history, science, other cultures. A child who reads a lot just knows more, and connects ideas more easily.",
    seg3: " Reading also helps children think more carefully. When you follow a story across many pages, you have to pay close attention and work out what is happening. That kind of thinking helps in every subject at school.",
    seg4: " And books keep children curious. They do not give you the answer straight away — they make you wonder. Children who read a lot tend to ask more questions, and that is a very valuable habit.",
    seg5: " I think the best approach is to make reading enjoyable and let children choose books they like. The habit tends to grow from there.",
    note: "B2",
    note_b1: "So với B1: B2 dùng ngữ pháp đúng, giải thích tại sao mỗi ý quan trọng, câu ngắn và rõ ràng hơn.",
    note_c1: "So với C1: C1 phát triển mỗi ý sâu hơn với từ vựng phong phú hơn như 'narrative', 'breadth'."
  },
  1: {
    seg1: "I think exercise should be part of everyone's daily life, and there are three good reasons: it improves physical health, it helps reduce stress, and it builds discipline that is useful in many other areas.",
    seg2: " On physical health, even thirty minutes of moderate exercise a day can reduce the risk of heart disease, diabetes, and other serious conditions. The body needs to move, and when it does not, health problems can develop over time.",
    seg3: " Exercise is also one of the best ways to manage stress. When you exercise, your body releases chemicals that improve your mood and help you feel calmer. People who exercise regularly tend to handle daily pressure much better.",
    seg4: " And the discipline that comes from exercising every day carries over into other parts of life. Getting yourself to do something even when you do not feel like it is a very useful habit.",
    seg5: " For me, the benefits of exercise go beyond just being fit. It helps shape the kind of person you become.",
    note: "B2",
    note_b1: "So với B1: B2 dùng ngữ pháp đúng, giải thích cơ chế của từng ý (chemicals, discipline).",
    note_c1: "So với C1: C1 phân tích sâu hơn về cơ chế scientific và discipline transfer."
  },
  2: {
    seg1: "I think English is very important for Vietnamese students today, and it matters for three main reasons: it opens up better job opportunities, it gives access to a much wider range of information, and it makes real cultural exchange possible.",
    seg2: " On jobs, English has become a basic requirement in many fields. In technology, finance, tourism, and management, companies expect employees to communicate in English. Without it, you can miss out on many good opportunities.",
    seg3: " The information side is also very significant. Most of the world's knowledge — research, quality news, professional content — is available in English first. A student who reads English well has access to much more than one who cannot.",
    seg4: " And when you can speak English, you can connect with people from other cultures in a real way — have real conversations, share ideas, and understand different points of view.",
    seg5: " I think of English less as a school subject and more as a skill that changes what is possible for you throughout your life.",
    note: "B2",
    note_b1: "So với B1: B2 dùng ngữ pháp đúng, giải thích tại sao mỗi ý quan trọng trong thực tế.",
    note_c1: "So với C1: C1 dùng từ vựng tinh tế hơn và phân tích chiều sâu hơn."
  },
  3: {
    seg1: "I think city life has more advantages overall, and the three main ones are the range of job opportunities, the quality of public services, and the diversity of social life.",
    seg2: " On jobs, a large city like Ho Chi Minh City offers many more options than a smaller town. There are more companies, more industries, and more chances to meet people who can help your career. This is especially important when you are starting out.",
    seg3: " Public services are also better in cities — hospitals, universities, and public transport are more accessible and better equipped. When you need healthcare or education, being in a city makes a real difference.",
    seg4: " And the social diversity is something people do not appreciate until they experience it. Living with people from different backgrounds makes you more open-minded and better at adapting to new situations.",
    seg5: " Cities have disadvantages — the cost of living, the traffic, the noise. But for most people, especially early in their careers, the advantages outweigh the problems.",
    note: "B2",
    note_b1: "So với B1: B2 dùng ngữ pháp đúng, giải thích tại sao mỗi ý quan trọng, và câu kết cân bằng.",
    note_c1: "So với C1: C1 phân tích concentration của jobs, creative energy của social diversity."
  },
  4: {
    seg1: "Smartphones have changed how we communicate in three important ways: they make instant communication possible, they have created new kinds of social connection through social media, and they have also reduced the amount of face-to-face contact people have.",
    seg2: " The ability to communicate instantly is clearly positive. You can video call family on the other side of the country in seconds, or coordinate with a group in real time. For people who live far from loved ones, this is a real improvement.",
    seg3: " Social media has also helped people stay connected and find others who share the same interests. For people who feel isolated locally, online communities can be genuinely meaningful.",
    seg4: " But smartphones have also reduced face-to-face contact. When a phone is always available, it is easy to choose it instead of a real conversation. Something is lost when people talk less in person.",
    seg5: " On balance, I think the benefits are greater than the problems. But we should make sure we still invest time in real relationships.",
    note: "B2",
    note_b1: "So với B1: B2 dùng ngữ pháp đúng, giải thích tại sao mỗi ý quan trọng, có quan điểm cân bằng.",
    note_c1: "So với C1: C1 phân tích shallow connection và những gì bị mất trong face-to-face reduction sâu hơn."
  },
  5: {
    seg1: "I think everyone has a responsibility to help protect the environment, and there are three practical areas where individuals can make a difference: reducing waste, saving energy at home, and raising awareness among the people around them.",
    seg2: " Reducing waste is the most visible starting point. Simple habits like sorting rubbish, avoiding single-use plastic, and buying less can make a real difference when many people do them. Small changes add up to a large impact.",
    seg3: " Saving energy at home is equally practical — turning off lights, using appliances carefully, being sensible about air conditioning. Each household's contribution might seem small, but together they account for a significant share of total energy use.",
    seg4: " And raising awareness may be the most powerful thing an individual can do. When you change your own behaviour and talk about why, you influence the people around you. When eco-friendly habits become normal in a community, more people follow.",
    seg5: " Individual action is an important part of the solution, and the awareness piece especially has effects that go well beyond one person.",
    note: "B2",
    note_b1: "So với B1: B2 dùng ngữ pháp đúng, giải thích combined effect và social norms mechanism.",
    note_c1: "So với C1: C1 phân tích habit generalisation và 'multiplier effect' với cơ chế rõ ràng hơn."
  },
  6: {
    seg1: "I think it is smarter to choose a career based on genuine interest rather than just salary, and there are three clear reasons: it leads to greater long-term satisfaction, it tends to improve your performance at work, and it contributes to personal fulfilment.",
    seg2: " On satisfaction, salary can motivate you at the beginning, but over a long career what keeps you going is whether the work itself means something to you. People who find work they love tend to stay motivated and keep growing.",
    seg3: " Interest in your work also tends to improve your performance. When you care about what you do, you work harder, learn faster, and take more initiative. That often leads to better results — and sometimes better pay as well.",
    seg4: " And personal fulfilment is important too. When your work connects to something you value, it gives your daily life more meaning. That affects not just your career but your overall wellbeing.",
    seg5: " My advice: find something you are genuinely interested in and reasonably good at. The salary tends to follow more often than people expect.",
    note: "B2",
    note_b1: "So với B1: B2 dùng ngữ pháp đúng, giải thích tại sao salary fades, liên kết engagement với performance.",
    note_c1: "So với C1: C1 phân tích sâu hơn về intrinsic motivation và compounding effect."
  },
  7: {
    seg1: "I think online learning is genuinely useful, and the case for it rests on three things: the flexibility it offers, the access it gives to high-quality resources from around the world, and the self-discipline it develops — which is both a benefit and a challenge.",
    seg2: " The flexibility is the most obvious advantage. You can study at a time that suits you, go back over material you did not understand, and fit learning around your job or family. Many people find this kind of control over their own pace very helpful.",
    seg3: " The access to global resources is also significant, especially in Vietnam. Courses and lectures from leading universities are now available online. A student anywhere in the country can access a level of instruction that would not otherwise be available to them.",
    seg4: " Self-discipline is where online learning can be challenging. For motivated learners, the independence is valuable. For many others, the structure and social environment of a classroom is what helps them stay on track.",
    seg5: " I think online learning works very well as a supplement to traditional study, and for highly motivated learners it can work as the main approach. But as a full replacement for classroom learning, it is not quite there yet.",
    note: "B2",
    note_b1: "So với B1: B2 dùng ngữ pháp đúng, trình bày self-discipline như cả lợi và thách thức.",
    note_c1: "So với C1: C1 phân tích flexibility từ góc độ access và self-discipline như paradox sâu hơn."
  }
};

export const ANSWERS_C1_SET2: Record<number, AnswerSet> = {
  0: {
    seg1: "I do think children should be encouraged to read, and the case for it is stronger than people often realise. It comes down to three things: the knowledge it builds, the thinking skills it trains, and the curiosity it keeps alive.",
    seg2: " On knowledge, reading introduces children to ideas, places, and ways of seeing the world they would never find in everyday life. A child who reads widely makes connections between things more easily and understands context more quickly. That kind of breadth is hard to develop any other way.",
    seg3: " The thinking skills argument is the most compelling. Reading requires you to follow a narrative across many pages, hold different ideas in your head, and work out what is not being said directly. That is a different kind of mental effort compared to watching a video. The habit of focused reading builds the kind of deep attention that helps in every subject.",
    seg4: " And curiosity — books do not give you the answer immediately. They make you wonder and want to know more. That habit of wanting to explore is probably the most valuable thing reading develops, and it tends to last well into adulthood.",
    seg5: " If I had to make one argument for reading, it would be this: it builds the kind of mind that keeps learning on its own. And that is useful for practically everything in life.",
    note: "C1",
    note_b1: "B1 — Điểm thấp vì: lỗi ngữ pháp nhiều, giải thích ngắn, không có ví dụ cụ thể.",
    note_c1: "C1 — Điểm cao vì: mỗi ý được phát triển với phân tích riêng, từ vựng phong phú ('narrative', 'breadth', 'compelling'), câu kết rút ra ý nghĩa rộng hơn."
  },
  1: {
    seg1: "Daily exercise is genuinely one of the best things you can do for yourself, and the reasons fall into three areas: physical health, stress reduction, and the discipline it builds over time.",
    seg2: " On physical health, even moderate daily movement — thirty minutes of walking, cycling, or swimming — meaningfully reduces the risk of heart disease, diabetes, and other conditions. The body is designed to move. When it does not, health problems tend to develop gradually and often go unnoticed until they become serious.",
    seg3: " Stress reduction is where exercise is most underrated. It is one of the most effective ways to manage anxiety and low mood. The chemical response to regular exercise is real and significant. People who exercise consistently tend to handle pressure much better than those who do not.",
    seg4: " And the discipline it builds is worth emphasising. The habit of doing something demanding every day — even when you are tired — tends to carry over into other commitments. People who keep up a regular exercise routine tend to be more consistent and reliable in other areas of life too.",
    seg5: " For me, the argument for daily exercise is not really about fitness. It is about the kind of person regular exercise tends to make you — and that person handles life better.",
    note: "C1",
    note_b1: "B1 — Điểm thấp vì: lỗi ngữ pháp nhiều, giải thích quá ngắn, không có dẫn chứng.",
    note_c1: "C1 — Điểm cao vì: dùng bằng chứng cụ thể ('chemical response'), từ vựng phong phú ('discipline', 'consistently'), câu kết rút ra ý nghĩa về character."
  },
  2: {
    seg1: "English has become genuinely essential for Vietnamese students, and the case rests on three things: the job opportunities it opens up, the access to information it provides, and the cultural exchange it makes possible.",
    seg2: " On jobs, the situation has changed a great deal over the last decade. English used to be a bonus — now it is a requirement in many fields, even ones that are not specifically international. People sometimes reach a ceiling in their careers because they cannot take part fully in meetings or write professionally in English. That is one of the most avoidable career limitations there is.",
    seg3: " The information access argument is very compelling. The great majority of high-quality research, journalism, and professional knowledge is produced in English first. A student who reads English fluently has access to a richer and more up-to-date learning environment. That advantage builds throughout a lifetime.",
    seg4: " And cultural exchange goes in both directions. When you can actually communicate in English, you stop being a passive consumer of other cultures. You can connect genuinely — ask questions, share your own perspective, and understand the world from different angles.",
    seg5: " I think the best way to think about English is as a tool that permanently expands what is possible for you — not a subject you study for an exam.",
    note: "C1",
    note_b1: "B1 — Điểm thấp vì: lỗi ngữ pháp nhiều, giải thích rất nông, không có ví dụ cụ thể.",
    note_c1: "C1 — Điểm cao vì: ví dụ về career ceiling cụ thể, từ vựng phong phú ('compelling', 'passive consumer', 'avoidable'), câu kết dùng ẩn dụ mạnh."
  },
  3: {
    seg1: "City life does offer more, on balance, and the advantages cluster around three things: the concentration of job opportunities, the quality of public services, and the social diversity that a large city makes possible.",
    seg2: " On jobs, it is not just the number of opportunities that matters — it is how close together they are. In a city like Ho Chi Minh City, you are near more industries, more professional networks, and the kinds of encounters that can change a career. That is particularly valuable early on, when the connections you build set the direction for years to come.",
    seg3: " Public services are less exciting to talk about but genuinely important. Hospitals with specialist care, well-resourced universities, reliable transport — these shape quality of life when it matters most. In smaller towns, people often have to travel a long way for things that city residents take for granted.",
    seg4: " And social diversity is the underrated advantage. Living alongside people from different backgrounds expands your sense of what is possible and makes you more adaptable. Cities are where ideas meet and develop — there is a real creative energy to that kind of environment.",
    seg5: " The trade-offs — cost, noise, traffic — are real, and I would not dismiss them. But for most people who are building a life and a career, the city still comes out ahead.",
    note: "C1",
    note_b1: "B1 — Điểm thấp vì: lỗi ngữ pháp nhiều, liệt kê ví dụ mà không giải thích tại sao quan trọng.",
    note_c1: "C1 — Điểm cao vì: phân tích concentration vs quantity, từ vựng phong phú ('encounters', 'adaptable', 'creative energy'), câu kết cân bằng."
  },
  4: {
    seg1: "Smartphones have fundamentally changed how we communicate, and the effects fall into three categories: the ability to connect instantly, new kinds of social connection through social media, and a reduction in face-to-face contact.",
    seg2: " Instant communication is the most clearly positive change. Being able to video call someone across the country in seconds, coordinate a group in real time, or reach someone in an emergency — these things have genuinely changed what is possible, especially for people who live far from family and friends.",
    seg3: " Social media connections are more complex. At their best, they link people who share interests but would never have met in person. For people who feel isolated locally, that can be very meaningful. But they can also create shallow connections that feel like real community without quite being it.",
    seg4: " The reduction in face-to-face contact is worth taking seriously. When a phone is always available as an easier option, real conversations happen less often. What gets lost is the full attention and openness that make in-person conversation the deepest form of human connection.",
    seg5: " On balance, I think the technology is positive. But the impact on face-to-face connection is real and worth being thoughtful about — not just acknowledged and then ignored.",
    note: "C1",
    note_b1: "B1 — Điểm thấp vì: lỗi ngữ pháp nhiều, giải thích rất đơn giản, không có phân tích.",
    note_c1: "C1 — Điểm cao vì: phân biệt shallow và genuine connection, từ vựng phong phú ('openness', 'isolated', 'complex'), câu kết có lập trường rõ ràng."
  },
  5: {
    seg1: "Individual responsibility for the environment is real and important, and the three areas where it is most practical are reducing waste, saving energy at home, and raising awareness among the people around you.",
    seg2: " Waste reduction is the most accessible starting point. Small, consistent changes — sorting rubbish correctly, refusing single-use plastic, buying more thoughtfully — build a habit of environmental awareness that tends to spread to other decisions. When many people make these changes, the combined impact on what gets produced and thrown away is genuinely significant.",
    seg3: " Saving energy at home is equally practical and within everyone's control. Switching off appliances, using air conditioning carefully, choosing energy-efficient equipment — each household's contribution may seem small, but together they add up to a large share of total energy use.",
    seg4: " Raising awareness is perhaps the highest-impact thing an individual can do. When you change your own habits and explain why, you shift what feels normal in your community. Environmental behaviour is strongly influenced by what those around you do. Changing those norms has an effect that goes well beyond your own actions.",
    seg5: " Individual action is not sufficient on its own — bigger problems need bigger solutions. But it is necessary, and the awareness piece in particular has an impact that reaches far beyond just one person.",
    note: "C1",
    note_b1: "B1 — Điểm thấp vì: lỗi ngữ pháp, giải thích rất ngắn, chỉ liệt kê hành động.",
    note_c1: "C1 — Điểm cao vì: phân tích habit generalisation, từ vựng phong phú ('accessible', 'consistent', 'norms'), giải thích awareness như highest-impact action."
  },
  6: {
    seg1: "Choosing a career based on genuine interest is smarter than focusing only on salary, and the case plays out across three dimensions: the long-term satisfaction it creates, the effect on your performance at work, and the personal fulfilment it makes possible.",
    seg2: " On long-term satisfaction, salary is a strong motivator at the start, but it tends to lose its effect over time. What sustains you across a long career is whether the work itself means something to you. People who chose well-paid careers they did not really care about often find, a decade in, that something important feels missing.",
    seg3: " Interest in your work also tends to improve performance in ways that surprise people. When you care about what you do, you read around the subject, look for feedback, and take creative risks. That builds over time and tends to produce better outcomes — including, often, better financial outcomes in the long run.",
    seg4: " Personal fulfilment operates at a different level. When what you do for most of your waking hours connects to something you value, the quality of your whole life is different. That is not a small thing.",
    seg5: " The practical advice: look for work where your interests and genuine abilities overlap, and treat salary as something that needs to be sufficient rather than the main goal. The financial side tends to follow more often than people expect.",
    note: "C1",
    note_b1: "B1 — Điểm thấp vì: lỗi ngữ pháp, giải thích rất ngắn và không có ví dụ.",
    note_c1: "C1 — Điểm cao vì: từ vựng phong phú ('sustains', 'fulfilment', 'initiative'), phân tích compounding effect của interest, câu kết có lời khuyên thực dụng."
  },
  7: {
    seg1: "Online learning is a genuinely valuable development, and the case for it rests on three things: the flexibility it provides, the access to global resources it opens up, and the self-discipline it demands — which turns out to be both its greatest strength and its most important limitation.",
    seg2: " The flexibility matters most in terms of access. Being able to study when you are alert, revisit material that did not make sense the first time, and fit learning around work or family — these things change who can take part in education. People with jobs, children, or other constraints that make fixed schedules difficult suddenly have real options.",
    seg3: " The access to global resources is a particularly strong argument in a context like Vietnam. The quality of instruction available online is remarkable — courses from leading universities, specialists in almost any field. A student anywhere in the country who would previously have needed to relocate to access that level of instruction no longer has to.",
    seg4: " Self-discipline is where the honest assessment becomes complicated. For genuinely self-motivated learners, the independence that online learning demands is actually a valuable part of the experience. But for many learners, the structure, accountability, and social environment of a classroom is what makes learning stick. Without those, good intentions do not always lead to real learning.",
    seg5: " Online learning works very well for self-directed learners, and adds real value for most others as a supplement. As a full replacement for classroom education, it does not yet hold up for everyone.",
    note: "C1",
    note_b1: "B1 — Điểm thấp vì: lỗi ngữ pháp, giải thích ngắn, trình bày self-discipline chỉ như lợi ích.",
    note_c1: "C1 — Điểm cao vì: phân tích flexibility từ góc độ access, từ vựng phong phú ('remarkable', 'accountability', 'self-directed'), self-discipline như paradox."
  }
};

// ==========================================
// BOTH SETS BUNDLED TOGETHER
// ==========================================

export const TOPIC_SETS: TopicSet[] = [
  {
    id: "set2",
    name: "Bộ đề: Tổng hợp (Mixed Topics)",
    description: "Khám phá đa dạng các chủ đề VSTEP Speaking Part 3: đọc sách, thể dục, học tiếng Anh, cuộc sống đô thị, điện thoại, bảo vệ môi trường, định hướng nghề nghiệp, và học trực tuyến.",
    topics: TOPICS_SET2,
    answers_b1: ANSWERS_B1_SET2,
    answers_b2: ANSWERS_B2_SET2,
    answers_c1: ANSWERS_C1_SET2
  }
];

// Fallbacks for backwards compatibility if needed
export const TOPICS = TOPICS_SET2;
export const ANSWERS_B1 = ANSWERS_B1_SET2;
export const ANSWERS_B2 = ANSWERS_B2_SET2;
export const ANSWERS_C1 = ANSWERS_C1_SET2;

export const FRAMEWORK: FrameworkStep[] = [
  {
    num: "T",
    name: "Topic statement",
    tag: "State position + outline 3 points",
    purpose: "Mở đầu bằng một câu nêu rõ lập trường và giới thiệu luôn cả 3 ý từ sơ đồ tư duy. Không cần câu văn hoa — chỉ cần nói thẳng bạn nghĩ gì và bài nói sẽ đi theo 3 hướng nào.",
    phrases: [
      "Honestly, I think… and there are three reasons: …, …, and …",
      "Yeah, for me it comes down to three things: …, …, and …",
      "I'd say… — and the case for that covers …, …, and …",
      "I think… and it shows up in three ways: …, …, and …"
    ],
    key: "seg1",
    color: "bg-blue-50/70 border-blue-100 hover:bg-blue-100/50 dark:bg-blue-950/20 dark:border-blue-900/40",
    textColor: "text-blue-800 dark:text-blue-400",
    borderColor: "border-blue-300 dark:border-blue-800",
    badgeBg: "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300"
  },
  {
    num: "P1",
    name: "Point 1",
    tag: "Develop first mind map idea",
    purpose: "Phát triển đầy đủ ý thứ nhất từ sơ đồ tư duy. Không chỉ nhắc lại — hãy giải thích, đưa ví dụ cụ thể, và nói rõ tại sao ý này quan trọng.",
    phrases: [
      "The first thing — … — is probably the most …",
      "Starting with …: …",
      "On the … side: …",
      "Take … first. …",
      "… is the most immediate one, actually. …"
    ],
    key: "seg2",
    color: "bg-lime-50/70 border-lime-100 hover:bg-lime-100/50 dark:bg-lime-950/20 dark:border-lime-900/40",
    textColor: "text-lime-800 dark:text-lime-400",
    borderColor: "border-lime-300 dark:border-lime-800",
    badgeBg: "bg-lime-100 dark:bg-lime-950 text-lime-800 dark:text-lime-300"
  },
  {
    num: "P2",
    name: "Point 2",
    tag: "Develop second mind map idea",
    purpose: "Phát triển đầy đủ ý thứ hai. Dùng connector để chuyển ý tự nhiên. Mỗi ý nên có giải thích hoặc ví dụ riêng — không dùng lại ví dụ từ P1.",
    phrases: [
      "And then there's …, which I think is equally important.",
      "The … piece is where it gets interesting.",
      "… is the second reason, and it's …",
      "Moving on to …: …",
      "Then … — and this one's …"
    ],
    key: "seg3",
    color: "bg-amber-50/70 border-amber-100 hover:bg-amber-100/50 dark:bg-amber-950/20 dark:border-amber-900/40",
    textColor: "text-amber-800 dark:text-amber-400",
    borderColor: "border-amber-300 dark:border-amber-800",
    badgeBg: "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300"
  },
  {
    num: "P3",
    name: "Point 3",
    tag: "Develop third mind map idea",
    purpose: "Phát triển đầy đủ ý thứ ba. Đây thường là ý ít rõ ràng nhất — hãy giải thích rõ tại sao nó quan trọng không kém hai ý trên.",
    phrases: [
      "And finally, …",
      "The third thing — and maybe the most overlooked — is …",
      "… rounds it out.",
      "Last but not least, …",
      "And … completes the picture because …"
    ],
    key: "seg4",
    color: "bg-purple-50/70 border-purple-100 hover:bg-purple-100/50 dark:bg-purple-950/20 dark:border-purple-900/40",
    textColor: "text-purple-800 dark:text-purple-400",
    borderColor: "border-purple-300 dark:border-purple-800",
    badgeBg: "bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300"
  },
  {
    num: "C",
    name: "Conclusion",
    tag: "Wrap up with your personal view",
    purpose: "Kết thúc ngắn gọn bằng quan điểm cá nhân. Không cần tóm tắt lại cả 3 ý — chỉ cần một câu kết tự nhiên để bài nói nghe hoàn chỉnh.",
    phrases: [
      "So yeah, for me …",
      "So overall, I'd say …",
      "At the end of the day, …",
      "So personally, …",
      "I guess the bottom line is …"
    ],
    key: "seg5",
    color: "bg-orange-50/70 border-orange-100 hover:bg-orange-100/50 dark:bg-orange-950/20 dark:border-orange-900/40",
    textColor: "text-orange-800 dark:text-orange-400",
    borderColor: "border-orange-300 dark:border-orange-800",
    badgeBg: "bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300"
  }
];
