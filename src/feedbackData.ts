export interface GrammarError {
  error: string;
  correction: string;
  reason: string;
}

export interface VocabularyHighlight {
  term: string;
  ipa: string;
  meaning: string;
  example: string;
}

export interface GrammarHighlight {
  structure: string;
  explanation: string;
  example: string;
}

export interface TopicFeedback {
  b1: {
    grammar_errors: GrammarError[];
    lexical_advice: string;
  };
  b2: {
    vocabulary_highlights: VocabularyHighlight[];
    grammar_highlights: GrammarHighlight[];
    fluency_coherence: string[];
    delivery_tips: string;
  };
  c1: {
    vocabulary_highlights: VocabularyHighlight[];
    grammar_highlights: GrammarHighlight[];
    fluency_coherence: string[];
    delivery_tips: string;
  };
}

export const SET2_DETAILED_FEEDBACK: Record<number, TopicFeedback> = {
  0: {
    // Studying abroad
    b1: {
      grammar_errors: [
        { error: "it give them three important benefit", correction: "it gives them three important benefits", reason: "Thiếu s chia động từ ngôi thứ 3 số ít và danh từ đếm được số nhiều sau số lượng 'three'." },
        { error: "experience new culture", correction: "experience new cultures", reason: "Thiếu danh từ số nhiều khi nói chung về các nền văn hóa mới." },
        { error: "their language skill improve", correction: "their language skills improve", reason: "Danh từ 'skill' cần ở dạng số nhiều để diễn tả các kỹ năng ngôn ngữ nói chung." },
        { error: "solve problem", correction: "solve problems", reason: "Cụm động từ diễn đạt giải quyết khó khăn nói chung cần danh từ số nhiều." },
        { error: "without parent help", correction: "without parents' help / without their parents' help", reason: "Thiếu sở hữu cách chỉ sự giúp đỡ của cha mẹ." }
      ],
      lexical_advice: "Bài nói sử dụng các từ vựng rất cơ bản ('very good', 'living alone', 'learn to take care'). Để nâng lên B2, hãy dùng các collocations tự nhiên như 'live on your own', 'worth every penny', 'self-reliant'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "off the top of my head", ipa: "/ɒf ðə tɒp ɒv maɪ hed/", meaning: "ngay lập tức nghĩ ra, không cần suy nghĩ lâu", example: "Off the top of my head, there are three main reasons." },
        { term: "grow up fast", ipa: "/ɡrəʊ ʌp fɑːst/", meaning: "trưởng thành nhanh chóng", example: "Living on your own forces you to grow up fast." },
        { term: "self-reliant", ipa: "/ˌself rɪˈlaɪənt/", meaning: "tự lập, tự thân vận động", example: "She returned from her trip incredibly self-reliant." },
        { term: "worth every penny", ipa: "/wɜːθ ˈevri ˈpeni/", meaning: "hoàn toàn xứng đáng với chi phí bỏ ra", example: "The study abroad experience is worth every penny." }
      ],
      grammar_highlights: [
        { structure: "Force someone to do something", explanation: "Cấu trúc bắt buộc ai đó phải tự làm gì, biểu thị áp lực hoàn cảnh tích cực.", example: "Living on your own in a foreign country forces you to grow up fast." },
        { structure: "Relative Clause with 'what' (Cleft clause)", explanation: "Mệnh đề nhấn mạnh giúp bài nói tự nhiên và tập trung hơn vào thông tin cốt lõi.", example: "...what I noticed when she came back was how much more confident she was." }
      ],
      fluency_coherence: [
        "Sử dụng filler nói tự nhiên 'To be honest' mở đầu thay cho các mẫu viết cứng nhắc.",
        "Dùng liên từ chuyển tiếp linh hoạt: 'Take independence, for example', 'Also', 'And as for the language...'",
        "Có kết luận tóm gọn mang tính cá nhân hóa bằng 'So yeah, I'd say...'"
      ],
      delivery_tips: "Hãy chú ý nhấn mạnh vào từ mang thông tin quan trọng như 'forces', 'textbook', 'every single day' và hạ giọng nhẹ ở cuối câu khẳng định."
    },
    c1: {
      vocabulary_highlights: [
        { term: "life-altering experience", ipa: "/laɪf ˈɔːltərɪŋ ɪkˈspɪəriəns/", meaning: "trải nghiệm thay đổi cuộc đời", example: "Studying abroad is a profound, life-altering experience." },
        { term: "existential self-reliance", ipa: "/ˌeɡzɪˈstenʃl ˌself rɪˈlaɪəns/", meaning: "sự tự lập tự thân từ trong nhận thức/hiện sinh", example: "It is what I would call existential self-reliance." },
        { term: "comfort with ambiguity", ipa: "/ˈkʌmfət wɪð ˌæmbɪˈɡjuːəti/", meaning: "sự thoải mái trong môi trường mơ hồ/chưa biết trước", example: "She returned with a complete comfort with ambiguity." },
        { term: "unconscious biases", ipa: "/ʌnˈkɒnʃəs ˈbaɪəsɪz/", meaning: "định kiến vô thức", example: "Immersion forces you to confront your own unconscious biases." },
        { term: "intellectual adaptability", ipa: "/ˌɪntəˈlektʃuəl əˌdæptəˈbɪləti/", meaning: "khả năng thích ứng về trí tuệ và tư duy", example: "The return in terms of intellectual adaptability is immeasurable." }
      ],
      grammar_highlights: [
        { structure: "Cleft Sentence (What-cleft with contrast)", explanation: "Cấu trúc câu chẻ dùng để bác bỏ một ý kiến thông thường và nhấn mạnh bản chất thực sự của sự việc.", example: "What struck me wasn't her academic credentials, but her complete comfort with ambiguity." },
        { structure: "Gerund as Subject in complex sentence", explanation: "Dùng danh động từ làm chủ ngữ kết hợp với mệnh đề quan hệ rút gọn nhằm tăng độ súc tích của lập luận.", example: "Living inside a different set of assumptions makes you realise how much of what you take for granted is not universal." }
      ],
      fluency_coherence: [
        "Chuyển tiếp cực kỳ mượt mà bằng cách liên kết ý trước với ý sau: 'When we talk about independence, it's not just about...'",
        "Tránh lặp từ bằng các cụm đồng nghĩa học thuật tinh tế: 'study abroad' -> 'absolute immersion', 'worth the money' -> 'immeasurable return'."
      ],
      delivery_tips: "Sử dụng 'contrasting stress' khi nói câu chẻ: nhấn mạnh mạnh vào chữ 'academic credentials' (lên giọng nhẹ) và hạ giọng sâu, nhấn mạnh chữ 'comfort with ambiguity' để tạo sự tương phản rõ rệt."
    }
  },
  1: {
    // University education
    b1: {
      grammar_errors: [
        { error: "university degree is very important", correction: "a university degree is very important", reason: "Thiếu mạo từ 'a' trước danh từ số ít đếm được." },
        { error: "it open three opportunity for student", correction: "it opens three opportunities for students", reason: "Động từ 'open' thiếu -s chia với ngôi thứ 3 số ít; danh từ sau 'three' và giới từ 'for' chỉ đối tượng chung phải ở số nhiều." },
        { error: "university help student develop", correction: "university helps students develop / universities help students develop", reason: "Sai hòa hợp chủ ngữ và động từ ngôi thứ 3 số ít." },
        { error: "These connection are", correction: "These connections are", reason: "Danh từ chỉ định 'These' đi với danh từ số nhiều." }
      ],
      lexical_advice: "Bài nói lặp lại từ 'degree' và 'career choice' quá nhiều lần. Hãy làm phong phú vốn từ với các cụm từ B2 như 'career options', 'solid professional network', 'head start'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "massive asset", ipa: "/ˈmæsɪv ˈæset/", meaning: "tài sản to lớn, lợi thế cực lớn", example: "A university degree is still a massive asset for success." },
        { term: "locked out of", ipa: "/lɒkt aʊt ɒv/", meaning: "bị khóa/chặn không cho tiếp cận", example: "Without a degree, you're pretty much locked out of high-paying industries." },
        { term: "analyze things from different angles", ipa: "/ˈænəlaɪz θɪŋz frɒm ˈdɪfrənt ˈæŋɡlz/", meaning: "phân tích mọi thứ dưới nhiều góc độ khác nhau", example: "University pushes you to analyze things from different angles." },
        { term: "give someone a huge head start", ipa: "/ɡɪv ˈsʌmˌwʌn ə hjuːdʒ hed stɑːt/", meaning: "cho ai đó một bệ phóng/lợi thế xuất phát điểm lớn", example: "It definitely gives you a huge head start." }
      ],
      grammar_highlights: [
        { structure: "From where I stand", explanation: "Cụm trạng từ mở đầu tự nhiên, thể hiện quan điểm cá nhân một cách khiêm tốn nhưng chắc chắn.", example: "From where I stand, it mainly comes down to three things." },
        { structure: "Gerund clauses with 'while'", explanation: "Mệnh đề nhượng bộ thể hiện tư duy đa chiều và khả năng lập luận cân bằng.", example: "So while a degree isn't the only way to succeed, it definitely gives you a head start." }
      ],
      fluency_coherence: [
        "Cách đưa luận điểm mạch lạc: 'On the career front...', 'Also...', 'But perhaps the biggest secret is...'",
        "Sử dụng quán ngữ nói tự nhiên: 'pretty much', 'ways you can't even imagine'."
      ],
      delivery_tips: "Tách nhịp rõ ràng khi liệt kê ba luận điểm. Lên giọng nhẹ ở luận điểm thứ nhất và thứ hai, hạ giọng hẳn ở luận điểm cuối cùng để báo hiệu kết thúc chuỗi thông tin."
    },
    c1: {
      vocabulary_highlights: [
        { term: "credentialing filter", ipa: "/krəˈdenʃəlɪŋ ˈfɪltə/", meaning: "bộ lọc sàng lọc bằng cấp/hồ sơ", example: "It serves as a crucial credentialing filter in the job market." },
        { term: "cultivate transferable intellectual frameworks", ipa: "/ˈkʌltɪveɪt trænsˈfɜːrəbl ˌɪntəˈlektʃuəl ˈfreɪmwɜːks/", meaning: "nuôi dưỡng những hệ thống tư duy có tính ứng dụng cao", example: "It cultivates highly transferable intellectual frameworks." },
        { term: "screening mechanism", ipa: "/ˈskriːnɪŋ ˈmekənɪzəm/", meaning: "cơ chế sàng lọc đầu vào", example: "The degree functions as a vital screening mechanism." },
        { term: "synthesize complex data", ipa: "/ˈsɪnθəsaɪz ˈkɒmpleks ˈdeɪtə/", meaning: "tổng hợp dữ liệu phức tạp", example: "...teaching you how to synthesize complex data." },
        { term: "peer group effect", ipa: "/pɪə ɡruːp ɪˈfekt/", meaning: "hiệu ứng học hỏi từ bạn bè/áp lực đồng lứa tích cực", example: "And finally, you cannot overlook the peer group effect." }
      ],
      grammar_highlights: [
        { structure: "Whether we like it or not (Parenthetical insert)", explanation: "Mệnh đề xen kẽ thể hiện sự khách quan, chấp nhận thực tế phũ phàng của thị trường lao động.", example: "Whether we like it or not, without it, your resume is often filtered out." },
        { structure: "Double-negation / Litotes for emphatic understatement", explanation: "Sử dụng lối phủ định của phủ định để tạo giọng điệu trang nhã, thuyết phục.", example: "And finally, you cannot overlook the peer group effect." }
      ],
      fluency_coherence: [
        "Dẫn nhập vấn đề bằng cách thừa nhận tính tranh luận: 'It's a highly debated topic nowadays, but in my view...'",
        "Sử dụng các cấu trúc liên kết luận điểm cực kỳ học thuật: 'Let's look at... first', 'But far more important is...', 'And finally, you cannot overlook...'"
      ],
      delivery_tips: "Sử dụng ngữ điệu lên xuống uyển chuyển (intonation shifts). Các từ như 'saturated', 'filtered out', 'far more important' cần được nhấn dài hơi và rõ âm tiết."
    }
  },
  2: {
    // Teachers' role
    b1: {
      grammar_errors: [
        { error: "build student character", correction: "build students' character / build a student's character", reason: "Thiếu dấu sở hữu cách biểu thị tính cách của học sinh." },
        { error: "guidance that student need", correction: "guidance that students need / guidance that a student needs", reason: "Danh từ đếm được 'student' không thể đứng một mình không có mạo từ hoặc số nhiều." },
        { error: "When teacher is enthusiastic", correction: "When a teacher is enthusiastic / When teachers are enthusiastic", reason: "Thiếu mạo từ 'a' trước danh từ số ít." },
        { error: "be honest, responsible, and work hard", correction: "be honest, responsible, and hard-working", reason: "Sai cấu trúc song hành (parallelism) vì 'work hard' là động từ trong khi 'honest' và 'responsible' là tính từ." }
      ],
      lexical_advice: "Học viên B1 thường lặp đi lặp lại từ 'teacher' và 'student'. Hãy cố gắng thay đổi bằng các cụm như 'passionate educator', 'decent human being', hoặc dùng đại từ 'they/them' một cách thông minh."
    },
    b2: {
      vocabulary_highlights: [
        { term: "come alive", ipa: "/kʌm əˈlaɪv/", meaning: "trở nên sống động, hấp dẫn", example: "An enthusiastic teacher can make a boring subject come alive." },
        { term: "decent human being", ipa: "/ˈdiːsnt ˈhjuːmən ˈbiːɪŋ/", meaning: "một người tử tế, công dân tốt", example: "Teachers teach you how to be a decent human being." },
        { term: "timely push", ipa: "/ˈtaɪmli pʊʃ/", meaning: "sự thúc đẩy kịp thời", example: "They notice when you're struggling and give you a timely push." },
        { term: "irreplaceable", ipa: "/ˌɪrɪˈpleɪsəbl/", meaning: "không thể thay thế được", example: "A great teacher is still irreplaceable." }
      ],
      grammar_highlights: [
        { structure: "Past Simple for personal anecdote", explanation: "Sử dụng thì quá khứ đơn kể lại kỷ niệm thực tế để chứng minh luận điểm, tạo tính thuyết phục cao trong văn nói.", example: "I remember my high school history teacher—she was so passionate that..." },
        { structure: "Concessive clause with 'Even with'", explanation: "Mệnh đề nhượng bộ bác bỏ lập luận công nghệ thay thế con người.", example: "So even with all the online learning tools we have today, a great teacher is still irreplaceable." }
      ],
      fluency_coherence: [
        "Sử dụng quán ngữ đệm tự nhiên: 'If you ask me...', 'Firstly...', 'Secondly...', 'Lastly...'",
        "Có sự đối chiếu trực quan: 'textbook' đối lập với 'an enthusiastic teacher'."
      ],
      delivery_tips: "Khi nhắc đến câu chuyện cá nhân 'I remember my high school...', giọng điệu nên chuyển sang tông ấm áp, tốc độ nói chậm lại một chút để tạo cảm giác tự nhiên như đang tâm sự."
    },
    c1: {
      vocabulary_highlights: [
        { term: "cornerstone of education", ipa: "/ˈkɔːnəstəʊn ɒv ˌedʒuˈkeɪʃn/", meaning: "đá tảng, nền móng cốt lõi của giáo dục", example: "Teachers are the absolute cornerstone of education." },
        { term: "ignite intellectual curiosity", ipa: "/ɪɡˈnaɪt ˌɪntəˈlektʃuəl ˌkjuːriˈɒsəti/", meaning: "thắp sáng, khơi dậy trí tò mò học hỏi", example: "They ignite intellectual curiosity." },
        { term: "architects of character development", ipa: "/ˈɑːkɪtekts ɒv ˈkærəktə dɪˈveləpmənt/", meaning: "kiến trúc sư định hình nhân cách", example: "They serve as architects of character development." },
        { term: "contagious enthusiasm", ipa: "/kənˈteɪdʒəs ɪnˈθjuːziæzəm/", meaning: "sự nhiệt huyết dễ lây lan, truyền cảm hứng", example: "They possess this almost contagious enthusiasm." },
        { term: "bespoke guidance", ipa: "/bɪˈspəʊk ˈɡaɪdns/", meaning: "sự hướng dẫn cá nhân hóa, đo ni đóng giày", example: "Most importantly, they provide bespoke guidance." }
      ],
      grammar_highlights: [
        { structure: "Noun Clause as Subject", explanation: "Dùng mệnh đề danh từ làm chủ ngữ để biến luận điểm thành một câu khẳng định có sức nặng triết lý.", example: "The teacher I remember most from school communicated genuine fascination." },
        { structure: "Emphatic DO in affirmative", explanation: "Dùng trợ động từ 'do/does/did' đứng trước động từ nguyên thể để nhấn mạnh tuyệt đối hành động.", example: "A truly exceptional teacher doesn't just transmit content; they do inspire." }
      ],
      fluency_coherence: [
        "Cách lập luận vượt lên trên câu hỏi thông thường: 'the interesting question is not whether they are important but in what ways.'",
        "Kết bài mang tính đúc kết cực kỳ sắc sảo và mang tính tương phản: 'Google can give you all the answers, but only a teacher can help you ask the right questions.'"
      ],
      delivery_tips: "Sử dụng kỹ thuật 'chunking' (ngắt nhịp tư duy). Ngắt một nhịp nhỏ sau cụm từ 'absolute cornerstone of education' để người nghe kịp thẩm thấu tầm quan trọng của luận điểm."
    }
  },
  3: {
    // Volunteering
    b1: {
      grammar_errors: [
        { error: "it help the community", correction: "it helps the community", reason: "Chủ ngữ 'it' ngôi thứ 3 số ít yêu cầu động từ 'helps'." },
        { error: "it develop empathy", correction: "it develops empathy", reason: "Lỗi chia động từ ngôi thứ 3 số ít với chủ ngữ 'it'." },
        { error: "it give them useful", correction: "it gives them useful", reason: "Lỗi chia động từ ngôi thứ 3 số ít." },
        { error: "This make society", correction: "This makes society", reason: "Đại từ chỉ định 'This' đóng vai trò chủ ngữ số ít nên động từ phải chia 'makes'." },
        { error: "work in team", correction: "work in a team", reason: "Thiếu mạo từ 'a' trước danh từ đếm được số ít 'team'." },
        { error: "manage task", correction: "manage tasks", reason: "Thiếu dạng số nhiều cho việc quản lý công việc nói chung." }
      ],
      lexical_advice: "Bài nói dùng các từ vựng lặp đi lặp lại và mang tính Vietlish ('poor people', 'clean environment', 'future job'). Nên nâng cấp lên các cụm B2 như 'low-income families', 'immediate impact', 'win-win situation'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "immediate impact", ipa: "/ɪˈmiːdiət ˈɪmpækt/", meaning: "tác động, hiệu quả tức thì", example: "When you volunteer, you see the immediate impact of your help." },
        { term: "changed my perspective", ipa: "/tʃeɪndʒd maɪ pəˈspektɪv/", meaning: "thay đổi hoàn toàn góc nhìn của tôi", example: "It really changed my perspective on life." },
        { term: "appreciative of what you have", ipa: "/əˈpriːʃətɪv ɒv wɒt juː hæv/", meaning: "trân trọng những gì mình đang có", example: "Volunteering makes you appreciative of what you have." },
        { term: "win-win situation", ipa: "/wɪn wɪn ˌsɪtʃuˈeɪʃn/", meaning: "tình huống đôi bên cùng có lợi", example: "So, it's really a win-win situation." }
      ],
      grammar_highlights: [
        { structure: "What-cleft with surprise", explanation: "Dùng mệnh đề 'what' để nhấn mạnh yếu tố bất ngờ, thu hút sự chú ý của giám khảo.", example: "But what really surprised me when I volunteered was how much it changed my perspective." },
        { structure: "Adjective clause with '-ing' participle (Gerund as Object of preposition)", explanation: "Sử dụng danh động từ sau giới từ để giải thích chi tiết hoạt động.", example: "...like tutoring kids from low-income families or cleaning up local parks." }
      ],
      fluency_coherence: [
        "Mở đầu bằng quan điểm mạnh mẽ: 'Honestly, I'm a big believer in volunteering...'",
        "Lập luận chặt chẽ: 'On the community side...', 'But what really surprised me...', 'Plus, you learn...'",
        "Đưa ra quan điểm cá nhân sâu sắc phủ nhận tính ép buộc ở phần kết: 'I would not make it compulsory, though.'"
      ],
      delivery_tips: "Cần chú ý phát âm rõ các âm cuối (ending sounds) của động từ và danh từ như 'helps' /ps/, 'skills' /lz/, 'impact' /kt/."
    },
    c1: {
      vocabulary_highlights: [
        { term: "transformative endeavor", ipa: "/trænsˈfɔːmətɪv ɪnˈdevə/", meaning: "nỗ lực, hoạt động mang tính thay đổi bản chất con người", example: "Volunteering is one of the most transformative endeavors." },
        { term: "deep-seated empathy", ipa: "/diːp ˈsiːtɪd ˈempəθi/", meaning: "sự thấu cảm sâu sắc, ăn sâu vào tâm trí", example: "It is essential for cultivating deep-seated empathy." },
        { term: "antidote to passivity", ipa: "/ˈæntidəʊt tuː pæˈsɪvəti/", meaning: "liều thuốc giải độc cho sự thụ động", example: "It is a powerful antidote to the passivity of social media activism." },
        { term: "shoulder-to-shoulder", ipa: "/ˈʃəʊldə tuː ˈʃəʊldə/", meaning: "kề vai sát cánh, cùng làm việc trực tiếp", example: "When you work shoulder-to-shoulder with people from marginalized backgrounds..." },
        { term: "marginalized backgrounds", ipa: "/ˈmɑːdʒɪnəlaɪzd ˈbækɡraʊndz/", meaning: "hoàn cảnh khó khăn, bị gạt ra lề xã hội", example: "...people from marginalized backgrounds." }
      ],
      grammar_highlights: [
        { structure: "Complex comparative structure with 'rather than'", explanation: "Dùng để so sánh sự đối lập giữa hai trạng thái nhận thức một cách trang nhã.", example: "...you start to see them as individuals with unique stories, rather than abstract statistics." },
        { structure: "Self-correcting/Clarifying marker 'say'", explanation: "Sử dụng trạng từ chèn giữa 'say' để đưa ra ví dụ giả định một cách trôi chảy và tự nhiên như người bản xứ.", example: "When you volunteer for grassroots projects—say, working with migrant workers..." }
      ],
      fluency_coherence: [
        "Sử dụng từ vựng liên kết học thuật nhưng đệm rất mượt: 'To be completely frank...', 'Take social impact first...', 'On top of that...'",
        "Dùng lập luận phản biện mạnh mẽ để kết luận: 'There is something self-defeating about forced generosity—it tends to produce resistance...'"
      ],
      delivery_tips: "Nhấn mạnh từ 'direct' và 'tangible' trong cụm 'direct, tangible social impact' để thể hiện rõ nét tính chất thực tế của hoạt động tình nguyện."
    }
  },
  4: {
    // Women in leadership
    b1: {
      grammar_errors: [
        { error: "in leadership position", correction: "in leadership positions / in a leadership position", reason: "Danh từ đếm được 'position' cần ở dạng số nhiều hoặc có mạo từ đi kèm." },
        { error: "it bring diverse perspective", correction: "it brings diverse perspectives", reason: "Động từ 'bring' thiếu -s chia với ngôi thứ 3 số ít; danh từ 'perspective' đi với 'diverse' phải ở số nhiều." },
        { error: "it create equal opportunity", correction: "it creates equal opportunities / equal opportunity", reason: "Lỗi chia động từ ngôi thứ 3 số ít và danh từ số nhiều." },
        { error: "it give young girl positive role model", correction: "it gives young girls positive role models", reason: "Động từ thiếu -s; danh từ chỉ đối tượng chung 'girl' và danh từ sau 'give' cần ở dạng số nhiều." },
        { error: "Everyone deserve chance", correction: "Everyone deserves a chance", reason: "Chủ ngữ bất định 'Everyone' chia động từ số ít; thiếu mạo từ 'a' trước danh từ số ít 'chance'." }
      ],
      lexical_advice: "Bài nói quá đơn giản và lặp từ. Hãy học cách chuyển đổi các từ cơ bản: 'different way' -> 'diverse perspectives', 'deserve chance' -> 'equal shot', 'successful women' -> 'female role models'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "bring to the table", ipa: "/brɪŋ tuː ðə ˈteɪbl/", meaning: "đóng góp giá trị, đưa ra ý kiến/giải pháp", example: "They bring fresh and diverse perspectives to the table." },
        { term: "equal shot at the top jobs", ipa: "/ˈiːkwəl ʃɒt æt ðə tɒp dʒɒbz/", meaning: "cơ hội công bằng để đạt được vị trí hàng đầu", example: "They deserve an equal shot at the top jobs." },
        { term: "fair play", ipa: "/feə pleɪ/", meaning: "sự công bằng, chơi đẹp", example: "It's just fair play." },
        { term: "glass ceiling", ipa: "/ɡlɑːs ˈsiːlɪŋ/", meaning: "rào cản vô hình ngăn phụ nữ thăng tiến (trần thủy tinh)", example: "Breaking that glass ceiling is essential." }
      ],
      grammar_highlights: [
        { structure: "It has been proven that...", explanation: "Cấu trúc bị động khách quan dùng để viện dẫn bằng chứng thực tế mà không cần nêu cụ thể nguồn.", example: "It's been proven that diverse teams are much better at solving complex problems." },
        { structure: "Gerund as Subject in conclusion", explanation: "Sử dụng danh động từ làm chủ ngữ để tạo nên kết luận đanh thép và thuyết phục.", example: "...breaking that glass ceiling isn't just good for women—it's essential." }
      ],
      fluency_coherence: [
        "Cách dùng filler mạnh mẽ thể hiện lập trường rõ ràng: 'I strongly believe...'",
        "Sắp xếp luận điểm chặt chẽ: 'Firstly...', 'Secondly...', 'Finally...'",
        "Liên kết câu bằng lối giải thích nguyên nhân kết quả: 'When a young girl sees..., her belief...'"
      ],
      delivery_tips: "Cụm từ 'glass ceiling' là một thuật ngữ hình ảnh ẩn dụ (metaphor). Hãy phát âm rõ ràng, nhấn mạnh cả hai từ này với ngữ điệu đi xuống ở cuối câu để tạo điểm nhấn."
    },
    c1: {
      vocabulary_highlights: [
        { term: "gender parity", ipa: "/ˈdʒendə ˈpærəti/", meaning: "sự bình đẳng giới tuyệt đối", example: "Driving gender parity in leadership is a critical imperative." },
        { term: "mitigation of cognitive blind spots", ipa: "/ˌmɪtɪˈɡeɪʃn ɒv ˈkɒɡnətɪv blaɪnd spɒts/", meaning: "giảm thiểu các điểm mù trong tư duy/nhận thức", example: "It leads to the mitigation of cognitive blind spots." },
        { term: "monolithic executive boards", ipa: "/ˌmɒnəˈlɪθɪk ɪɡˈzekjətɪv bɔːdz/", meaning: "ban điều hành đơn điệu, thiếu sự đa dạng", example: "When executive boards are monolithic, they suffer from groupthink." },
        { term: "unconscious bias", ipa: "/ʌnˈmɒnʃəs ˈbaɪəs/", meaning: "định kiến vô thức ăn sâu vào hành vi", example: "We must dismantle structural barriers like unconscious bias." },
        { term: "generational multiplier effect", ipa: "/ˌdʒenəˈreɪʃənl ˈmʌltɪplaɪər ɪˈfekt/", meaning: "hiệu ứng nhân cấp, tác động lan tỏa qua nhiều thế hệ", example: "It creates a powerful generational multiplier effect." }
      ],
      grammar_highlights: [
        { structure: "Conditional inversion / Reduced adverbial clause", explanation: "Rút gọn mệnh đề điều kiện hoặc trạng ngữ để tạo sự lưu loát vượt trội.", example: "Incorporating women into leadership introduces diverse lived experiences." },
        { structure: "Correlative Conjunction with inversion potential", explanation: "Cấu trúc song hành nhấn mạnh lợi ích kép 'not just... but also...' tạo tính hùng biện cao.", example: "Elevating women is not a soft favor—it is a vital step toward excellence." }
      ],
      fluency_coherence: [
        "Thể hiện niềm tin tuyệt đối bằng cấu trúc: 'I am absolute in my conviction that...'",
        "Lập luận sắc bén phản bác các quan điểm coi thường bình đẳng giới: 'This isn't just about political correctness; it's a hard-nosed business strategy.'"
      ],
      delivery_tips: "Khi phát âm cụm từ 'hard-nosed business strategy', hãy dùng giọng điệu quyết đoán, dứt khoát để làm nổi bật luận điểm thực tế, thực dụng của vấn đề."
    }
  },
  5: {
    // Cultural preservation
    b1: {
      grammar_errors: [
        { error: "it maintain our national", correction: "it maintains our national", reason: "Động từ 'maintain' phải chia ngôi thứ 3 số ít đi với chủ ngữ 'it'." },
        { error: "it pass down important value", correction: "it passes down important values", reason: "Động từ 'pass' thêm -es với ngôi thứ 3 số ít; danh từ 'value' cần ở số nhiều chỉ các giá trị nói chung." },
        { error: "it attract tourist", correction: "it attracts tourists", reason: "Động từ 'attract' thiếu -s; danh từ 'tourist' cần ở dạng số nhiều chỉ lượng khách du lịch nói chung." },
        { error: "Our festival, music, and tradition make", correction: "Our festivals, music, and traditions make", reason: "Danh từ đếm được 'festival' và 'tradition' cần ở dạng số nhiều khi liệt kê chung." },
        { error: "different from other nation", correction: "different from other nations", reason: "Sau 'other' đi với danh từ đếm được số nhiều." },
        { error: "respect elder", correction: "respect elders / respect their elders", reason: "Thiếu dạng số nhiều cho danh từ 'elder' chỉ người lớn tuổi." }
      ],
      lexical_advice: "Vốn từ vựng của bạn rất hạn chế và lặp lại từ 'culture'. Hãy học cách mở rộng sang các từ có nghĩa rộng hơn như 'traditions', 'heritage', 'sense of belonging', 'local communities'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "hold on to our national identity", ipa: "/həʊld ɒn tuː ˈaʊə ˈnæʃnəl aɪˈdentəti/", meaning: "giữ chặt lấy bản sắc dân tộc", example: "It helps us hold on to our national identity." },
        { term: "sense of belonging", ipa: "/sens ɒv bɪˈlɒŋɪŋ/", meaning: "cảm giác thuộc về một nơi nào đó, gia đình/quê hương", example: "They give us a vital sense of belonging." },
        { term: "family bonds", ipa: "/ˈfæmɪli bɒndz/", meaning: "sự gắn kết gia đình", example: "Culture teaches young people about family bonds." },
        { term: "authentic local traditions", ipa: "/ɔːˈθentɪk ˈləʊkl trəˈdɪʃnz/", meaning: "những truyền thống địa phương đích thực", example: "Travelers want to experience authentic local traditions." }
      ],
      grammar_highlights: [
        { structure: "In a globalized world where... (Adjective clause of place)", explanation: "Thiết lập bối cảnh vĩ mô toàn cầu hóa để nhấn mạnh sự cần thiết của bản sắc.", example: "In a globalized world where everything is starting to look the same, our unique traditions..." },
        { structure: "Not just A but also B (with focus shift)", explanation: "Cấu trúc chuyển hướng lập luận để làm bật lên giá trị thực tế ở tương lai.", example: "So, traditional culture isn't just about the past—it's a vital asset for our future." }
      ],
      fluency_coherence: [
        "Mở đầu bằng quan điểm rõ ràng: 'In my opinion, keeping our traditional culture alive... is absolutely essential.'",
        "Sử dụng ví dụ thực tế cực tốt tại Việt Nam: 'Tet is a good example: it carries values...'",
        "Dẫn chứng thuyết phục về du lịch để liên kết kinh tế: 'travelers don't fly across the world to see modern skyscrapers; they want...'"
      ],
      delivery_tips: "Cần chú ý nối âm (connected speech) ở các cụm như 'first of all' /fɜːst_ɒv_ɔːl/, 'hold on to' /həʊld_ɒn_tuː/ để câu nói trôi chảy tự nhiên."
    },
    c1: {
      vocabulary_highlights: [
        { term: "homogenizing forces of globalization", ipa: "/həˈmɒdʒənaɪzɪŋ ˈfɔːsɪz ɒv ˌɡləʊbəlaɪˈzeɪʃn/", meaning: "sự đồng hóa của làn sóng toàn cầu hóa", example: "It anchors our collective identity against the homogenizing forces of globalization." },
        { term: "non-formal vessel", ipa: "/nɒn ˈfɔːml ˈvesl/", meaning: "kênh truyền tải phi chính quy (không qua trường lớp)", example: "It acts as a non-formal vessel for transmitting core social values." },
        { term: "experiential rather than instructional", ipa: "/ɪkˌspɪəriˈenʃl ˈrɑːðə ðæn ɪnˈstrʌkʃənl/", meaning: "mang tính trải nghiệm thực tế thay vì lý thuyết chỉ dạy", example: "Values transmission is far more effective when it's experiential rather than instructional." },
        { term: "filial piety", ipa: "/ˈfɪliəl ˈpaɪəti/", meaning: "lòng hiếu thảo (giá trị cốt lõi Á Đông)", example: "Young people instinctively absorb values like filial piety." },
        { term: "sustainable, community-based tourism", ipa: "/səˈsteɪnəbl kəˈmjuːnəti beɪst ˈtʊərɪzəm/", meaning: "du lịch bền vững dựa vào cộng đồng", example: "It serves as an engine for sustainable, community-based tourism." }
      ],
      grammar_highlights: [
        { structure: "Reframing with Metaphorical Noun", explanation: "Tái cấu trúc định nghĩa câu hỏi bằng một hình ảnh ẩn dụ sâu sắc để khẳng định tư duy độc lập.", example: "When we talk about cultural preservation, we have to recognize that culture isn't a static museum piece..." },
        { structure: "Adverbial starting 'be it' (subjunctive concession)", explanation: "Dùng thể giả định rút gọn 'be it...' để liệt kê các ví dụ một cách trang trọng, học thuật.", example: "...our unique traditions—be it the ancestral rituals of Tet or traditional craftsmanship—provide us..." }
      ],
      fluency_coherence: [
        "Sử dụng kỹ thuật phản biện định nghĩa ngay từ đầu: 'The word preservation can suggest... rather than something living...'",
        "Kết bài mang tính triết học cực kỳ đắt giá, tạo ấn tượng cực mạnh cho giám khảo: 'So, preservation is not about resisting progress—it's about progress with a soul.'"
      ],
      delivery_tips: "Hãy thể hiện sự tương phản rõ ràng qua giọng nói giữa cụm từ 'static museum piece' (phát âm với tông giọng phẳng, hơi chán) và 'dynamic, living system' (phát âm hào hứng, nhấn mạnh mạnh mẽ)."
    }
  },
  6: {
    // Gap year
    b1: {
      grammar_errors: [
        { error: "taking gap year", correction: "taking a gap year", reason: "Thiếu mạo từ 'a' trước cụm danh từ số ít 'gap year'." },
        { error: "it help student build", correction: "it helps students build / it helps a student build", reason: "Động từ 'help' thiếu -s chia với ngôi thứ 3 số ít; danh từ 'student' cần chuyển thành số nhiều chỉ đối tượng chung." },
        { error: "build life skill", correction: "build life skills", reason: "Kỹ năng sống nói chung luôn dùng ở dạng số nhiều 'life skills'." },
        { error: "solve problem in", correction: "solve problems in", reason: "Thiếu số nhiều cho danh từ 'problem'." },
        { error: "These are skill that school do not", correction: "These are skills that schools do not / a school does not", reason: "Danh từ 'skill' và 'school' phải hòa hợp số nhiều với đại từ chỉ định 'These' và trợ động từ 'do not'." },
        { error: "After 12 year of studying", correction: "After 12 years of studying", reason: "Danh từ 'year' phải chia số nhiều sau số lượng '12'." },
        { error: "is good idea", correction: "is a good idea", reason: "Thiếu mạo từ 'a' trước cụm danh từ số ít 'good idea'." }
      ],
      lexical_advice: "Bài nói lặp lại liên tục từ 'gap year' và các tính từ đơn giản như 'good', 'difficult'. Hãy thay thế bằng các collocations B2 như 'brilliant idea', 'self-confidence', 'recharge your batteries'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "brilliant idea", ipa: "/ˈbrɪliənt aɪˈdɪə/", meaning: "ý tưởng tuyệt vời, thông minh", example: "Personally, I think taking a gap year before university is a brilliant idea." },
        { term: "step foot on campus", ipa: "/step fʊt ɒn ˈkæmpəs/", meaning: "đặt chân lên khuôn viên giảng đường đại học", example: "...before you even step foot on campus." },
        { term: "choosing the wrong major", ipa: "/ˈtʃuːzɪŋ ðə rɒŋ ˈmeɪdʒə/", meaning: "chọn sai ngành học", example: "So many students choose the wrong major because they are rushed." },
        { term: "recharge your batteries", ipa: "/ˌriːˈtʃɑːdʒ jɔː ˈbætəriz/", meaning: "sạc lại năng lượng (sau thời gian làm việc vất vả)", example: "It is the perfect way to recharge your batteries." }
      ],
      grammar_highlights: [
        { structure: "Passive voice for general phenomenon", explanation: "Dùng thể bị động để nêu bật một thực trạng xã hội một cách khách quan.", example: "So many students choose the wrong major because they are rushed." },
        { structure: "Conditional with 'as long as'", explanation: "Thiết lập điều kiện ràng buộc để lập luận mang tính thực tế và chặt chẽ hơn.", example: "So as long as you have a solid plan, a gap year is highly rewarding." }
      ],
      fluency_coherence: [
        "Cách dùng các cụm từ đệm chỉ ý kiến cá nhân tự nhiên: 'Personally, I think...', 'First off...', 'Secondly...'",
        "Sử dụng các thành ngữ nói tự nhiên, sinh động: 'recharge your batteries', 'step foot on campus'."
      ],
      delivery_tips: "Cần chú ý nhấn mạnh vào trạng từ 'completely' trong cụm 'completely exhausted' và kéo dài nguyên âm để bộc lộ cảm xúc mệt mỏi một cách tự nhiên trong văn nói."
    },
    c1: {
      vocabulary_highlights: [
        { term: "transformative interlude", ipa: "/trænsˈfɔːmətɪv ˈɪntəluːd/", meaning: "giai đoạn chuyển tiếp mang tính thay đổi bản thân sâu sắc", example: "A gap year can be an incredibly transformative interlude." },
        { term: "pragmatic life competencies", ipa: "/præɡˈmætɪk laɪf ˈkɒmpɪtənsiz/", meaning: "những năng lực thực tế trong cuộc sống", example: "It accelerates the acquisition of pragmatic life competencies." },
        { term: "academic conveyor belt", ipa: "/ˌækəˈdemɪk kənˈveɪə belt/", meaning: "băng chuyền học tập (ẩn dụ cho việc học liên tục từ cấp này lên cấp khác)", example: "The traditional academic conveyor belt shields students from real-world friction." },
        { term: "student attrition", ipa: "/ˈstjuːdnt əˈtrɪʃn/", meaning: "tỷ lệ học sinh bỏ học giữa chừng", example: "A major issue in higher education is the alarming rate of student attrition." },
        { term: "psychological reset", ipa: "/ˌsaɪkəˈlɒdʒɪkl ˌriːˈset/", meaning: "sự cài đặt lại trạng thái tâm lý, giải tỏa căng thẳng", example: "A self-directed gap year acts as a psychological reset." }
      ],
      grammar_highlights: [
        { structure: "Metaphorical noun clause as Subject", explanation: "Sử dụng ẩn dụ 'academic conveyor belt' làm chủ ngữ giúp tăng tính trừu tượng và chiều sâu học thuật cho lập luận.", example: "The traditional academic conveyor belt shields students from real-world friction." },
        { structure: "Complex absolute construction", explanation: "Mệnh đề độc lập bổ trợ giải thích nguyên nhân sâu xa của một hiện trạng hệ thống.", example: "A major issue is the alarming rate of student attrition, largely driven by students choosing majors..." }
      ],
      fluency_coherence: [
        "Cách dẫn dắt luận điểm có điều kiện hóa: 'A gap year, when structured purposefully...'",
        "Kết bài mang cấu trúc song song đối lập tuyệt đẹp, cực kỳ ấn tượng: 'It's not a year off—it's a year on, but on your own terms.'"
      ],
      delivery_tips: "Sử dụng ngữ điệu đi xuống chắc chắn ở từ 'terms' trong câu kết 'but on your own terms' để tạo một cái kết dứt khoát, thuyết phục và đầy tự tin."
    }
  },
  7: {
    // Immigration
    b1: {
      grammar_errors: [
        { error: "immigration have more benefit than problem", correction: "immigration has more benefits than problems", reason: "Chủ ngữ không đếm được 'immigration' phải đi với động từ số ít 'has'. Sau 'more' đi với danh từ số nhiều đếm được 'benefits' và 'problems'." },
        { error: "it fill labour", correction: "it fills labour", reason: "Lỗi chia động từ ngôi thứ 3 số ít với chủ ngữ 'it'." },
        { error: "it enrich the culture", correction: "it enriches the culture", reason: "Động từ kết thúc bằng 'ch' thêm 'es' khi chia ngôi thứ 3 số ít." },
        { error: "immigrant also make", correction: "immigrants also make", reason: "Thiếu danh từ số nhiều khi nói về đối tượng người nhập cư chung." },
        { error: "In many country", correction: "In many countries", reason: "Sau 'many' bắt buộc phải dùng danh từ số nhiều." },
        { error: "there are not enough worker", correction: "there are not enough workers", reason: "Sau 'enough' đi với danh từ số nhiều đếm được." }
      ],
      lexical_advice: "Bài nói quá đơn giản và lặp từ 'immigrant'. Hãy cải thiện vốn từ vựng bằng cách dùng các cụm từ B2 như 'labor shortages', 'vibrant places', 'entrepreneurful drive', 'economic contribution'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "aging population", ipa: "/ˈeɪdʒɪŋ ˌpɒpjuˈleɪʃn/", meaning: "dân số già", example: "Many developed nations have aging populations." },
        { term: "vibrant and tolerant", ipa: "/ˈvaɪbrənt ænd ˈtɒlərənt/", meaning: "sôi động và bao dung/cởi mở", example: "It makes cities much more vibrant and tolerant." },
        { term: "entrepreneurial", ipa: "/ˌɒntrəprəˈnɜːriəl/", meaning: "có tinh thần khởi nghiệp, làm chủ", example: "Immigrants generally have a highly entrepreneurial spirit." },
        { term: "on balance", ipa: "/ɒn ˈbæləns/", meaning: "sau khi cân nhắc kỹ lưỡng, chung quy lại", example: "On balance, immigration is a powerful force for growth." }
      ],
      grammar_highlights: [
        { structure: "Relative clause with 'that would otherwise go...'", explanation: "Dùng mệnh đề quan hệ giả định trái với thực tế để làm nổi bật vai trò không thể thiếu của người nhập cư.", example: "Immigrants take on roles that would otherwise go unfilled." },
        { structure: "Concessive clause with 'While there are certainly...'", explanation: "Cấu trúc nhượng bộ thừa nhận khó khăn thực tế trước khi khẳng định quan điểm lạc quan ở vế chính.", example: "While there are certainly challenges with integration, I believe they can be solved." }
      ],
      fluency_coherence: [
        "Mở đầu bằng quan điểm cân bằng và rõ ràng: 'If you ask me, immigration generally brings far more benefits than...'",
        "Dùng các liên từ chuyển tiếp chuyên nghiệp: 'On the labor front...', 'Secondly...', 'Finally...', 'On balance...'"
      ],
      delivery_tips: "Từ 'entrepreneurial' rất khó phát âm. Hãy chú ý luyện phát âm đúng trọng âm /ˌɒntrəprəˈnɜːriəl/ và nhấn vào âm tiết thứ tư để câu nói nghe chuẩn xác và tự nhiên."
    },
    c1: {
      vocabulary_highlights: [
        { term: "demographic time bomb", ipa: "/ˌdeməˈɡræfɪk taɪm bɒm/", meaning: "quả bom hẹn giờ về nhân khẩu học (vấn đề già hóa dân số nghiêm trọng)", example: "Many economies are facing demographic time bombs." },
        { term: "structural labor deficit", ipa: "/ˈstrʌktʃərəl ˈleɪbə ˈdefɪsɪt/", meaning: "sự thiếu hụt lao động mang tính cấu trúc hệ thống", example: "It addresses critical structural labor deficits." },
        { term: "creative cross-pollination", ipa: "/kriˈeɪtɪv krɒs ˌpɒləˈneɪʃn/", meaning: "sự giao thoa và kết hợp văn hóa mang tính sáng tạo", example: "It fosters cultural and creative cross-pollination." },
        { term: "macroeconomic dynamism", ipa: "/ˌmækrəʊˌiːkəˈnɒmɪk ˈdaɪnəmɪzəm/", meaning: "sự năng động của kinh tế vĩ mô", example: "It drives long-term macroeconomic dynamism." },
        { term: "fiscal net contributors", ipa: "/ˈfɪskl net kənˈtrɪbjuːtəz/", meaning: "những người đóng góp ròng cho ngân sách nhà nước", example: "Immigrants are net contributors to the fiscal system." }
      ],
      grammar_highlights: [
        { structure: "Inversion with 'What is...'", explanation: "Cấu trúc câu nhấn mạnh giúp khẳng định lập luận một cách đanh thép trong văn nói.", example: "What keeps a country competitive on the global stage is open and well-managed immigration." },
        { structure: "Noun Phrase Appositive", explanation: "Sử dụng ngữ danh từ đồng cách để bổ nghĩa trực tiếp cho một danh từ phức tạp trước đó.", example: "Many post-industrial economies are facing demographic time bombs—specifically, rapidly aging populations..." }
      ],
      fluency_coherence: [
        "Mở bài đi thẳng vào sự phức tạp của vấn đề: 'The discourse around immigration is often highly charged, but a balanced analysis...'",
        "Kết hợp nhuần nhuyễn giữa việc thừa nhận lo ngại của người dân và đưa ra giải pháp hành chính: 'While public anxieties are understandable..., they are essentially administrative challenges...'"
      ],
      delivery_tips: "Khi phát âm cụm từ 'demographic time bomb', hãy nâng giọng nhẹ ở chữ 'time' và hạ giọng dứt khoát ở chữ 'bomb' để tạo nhạc điệu nói lôi cuốn và kịch tính vừa phải."
    }
  }
};
