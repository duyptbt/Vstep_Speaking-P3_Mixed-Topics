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
    // Reading books
    b1: {
      grammar_errors: [
        { error: "in three way", correction: "in three ways", reason: "Sau số lượng 'three', danh từ đếm được 'way' phải ở dạng số nhiều 'ways'." },
        { error: "it make / it train", correction: "it makes / it trains", reason: "Thiếu -s chia động từ ngôi thứ ba số ít với chủ ngữ 'it'." },
        { error: "reading help", correction: "reading helps", reason: "Danh động từ 'reading' làm chủ ngữ số ít yêu cầu động từ chia 'helps'." },
        { error: "read book", correction: "read books", reason: "Cần dạng số nhiều 'books' khi diễn đạt việc đọc sách nói chung." }
      ],
      lexical_advice: "Bài nói dùng các từ cơ bản như 'good exercise', 'learn many new things'. Để nâng lên B2/C1, hãy thử các cụm collocations tự nhiên như 'valuable habit', 'deep attention', 'breadth of knowledge'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "come across", ipa: "/kʌm əˈkrɒs/", meaning: "tình cờ gặp, bắt gặp", example: "Reading introduces children to things they would never come across in everyday life." },
        { term: "work out", ipa: "/wɜːk aʊt/", meaning: "hiểu ra, tìm ra câu trả lời", example: "...and work out what is happening." },
        { term: "valuable habit", ipa: "/ˈvæljuəbl ˈhæbɪt/", meaning: "thói quen vô giá, hữu ích", example: "Children who read a lot tend to ask more questions, and that is a very valuable habit." }
      ],
      grammar_highlights: [
        { structure: "Relative clause with 'who'", explanation: "Dùng mệnh đề quan hệ xác định làm rõ chủ ngữ.", example: "A child who reads a lot just knows more." }
      ],
      fluency_coherence: [
        "Sử dụng các cấu trúc chuyển tiếp tự nhiên: 'On the knowledge side...', 'And books keep...'",
        "Dẫn ý mạch lạc từ giới thiệu đến phát triển chi tiết."
      ],
      delivery_tips: "Nhấn mạnh vào các trạng từ và tính từ mang thông tin như 'never', 'close attention', 'valuable' để tạo điểm nhấn âm điệu."
    },
    c1: {
      vocabulary_highlights: [
        { term: "compelling", ipa: "/kəmˈpelɪŋ/", meaning: "thuyết phục, hấp dẫn", example: "The thinking skills argument is the most compelling." },
        { term: "follow a narrative", ipa: "/ˈfɒləʊ ə ˈnærətɪv/", meaning: "theo dõi cốt truyện/mạch truyện", example: "Reading requires you to follow a narrative across many pages." },
        { term: "breadth", ipa: "/bredθ/", meaning: "bề rộng, sự phong phú kiến thức", example: "That kind of breadth is hard to develop any other way." }
      ],
      grammar_highlights: [
        { structure: "Emphatic DO in affirmative", explanation: "Dùng trợ động từ 'do/does' để nhấn mạnh động từ chính trong câu khẳng định.", example: "I do think children should be encouraged to read..." }
      ],
      fluency_coherence: [
        "Liên kết ý cực kỳ chặt chẽ bằng cách so sánh hoạt động đọc sách với việc xem video ('different kind of mental effort compared to watching a video').",
        "Kết bài đúc kết súc tích, mở rộng ý nghĩa ('builds the kind of mind that keeps learning on its own')."
      ],
      delivery_tips: "Sử dụng 'contrasting stress' khi đối chiếu giữa 'focused reading' và 'watching a video' để bộc lộ rõ ràng quan điểm cá nhân."
    }
  },
  1: {
    // Physical exercise
    b1: {
      grammar_errors: [
        { error: "in three way", correction: "in three ways", reason: "Sau số lượng 'three' đi với danh từ số nhiều." },
        { error: "it improve / it reduce / it help", correction: "it improves / it reduces / it helps", reason: "Thiếu -s chia động từ ngôi thứ 3 số ít với chủ ngữ 'it'." },
        { error: "feel more relax", correction: "feel more relaxed", reason: "Tính từ đuôi -ed 'relaxed' để miêu tả trạng thái cảm xúc của người." },
        { error: "30 minute", correction: "30 minutes", reason: "Danh từ 'minute' phải ở dạng số nhiều sau số lượng lớn hơn 1." }
      ],
      lexical_advice: "Học viên lặp từ 'exercise' và 'feel' nhiều lần. Hãy mở rộng vốn từ bằng cách dùng 'moderate exercise', 'recharge batteries', 'overall wellbeing'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "moderate exercise", ipa: "/ˈmɒdərət ˈeksəsaɪz/", meaning: "tập thể dục với cường độ vừa phải", example: "Even thirty minutes of moderate exercise a day can reduce the risk." },
        { term: "handle daily pressure", ipa: "/ˈhændl ˈdeɪli ˈpreʃə/", meaning: "đối phó, xử lý áp lực hàng ngày", example: "People who exercise regularly tend to handle daily pressure much better." },
        { term: "carries over into", ipa: "/ˈkæriz ˈəʊvər ˈɪntuː/", meaning: "lan tỏa, áp dụng tốt sang lĩnh vực khác", example: "And the discipline that comes from exercising every day carries over into other parts of life." }
      ],
      grammar_highlights: [
        { structure: "Even + Noun Phrase as Subject", explanation: "Nhấn mạnh định lượng nhỏ tối thiểu vẫn đem lại lợi ích lớn.", example: "Even thirty minutes of moderate exercise a day can reduce..." }
      ],
      fluency_coherence: [
        "Chuyển tiếp mạch lạc: 'On physical health...', 'Exercise is also...', 'And the discipline...'",
        "Trình bày lập luận logic kết nối rèn luyện thể chất với kỷ luật tinh thần."
      ],
      delivery_tips: "Phát âm rõ âm cuối 's' trong 'improves', 'reduces', 'builds' và các danh từ số nhiều."
    },
    c1: {
      vocabulary_highlights: [
        { term: "meaningfully reduces", ipa: "/ˈmiːnɪŋfəli rɪˈdjuːsɪz/", meaning: "giảm thiểu một cách rõ rệt, đáng kể", example: "Even moderate daily movement... meaningfully reduces the risk." },
        { term: "go unnoticed", ipa: "/ɡəʊ ʌnˈnəʊtɪst/", meaning: "diễn ra âm thầm, không bị phát hiện", example: "...health problems tend to develop gradually and often go unnoticed." },
        { term: "worth emphasising", ipa: "/wɜːθ ˈemfəsaɪzɪŋ/", meaning: "rất đáng để nhấn mạnh", example: "And the discipline it builds is worth emphasising." }
      ],
      grammar_highlights: [
        { structure: "Gerund Clause as Subject", explanation: "Sử dụng cụm danh động từ dài làm chủ ngữ giúp tăng tính trang trọng và mạch lạc.", example: "Getting yourself to do something even when you do not feel like it is a very useful habit." }
      ],
      fluency_coherence: [
        "Cách lập luận sâu sắc khi phân tích cơ chế giải tỏa căng thẳng: 'The chemical response to regular exercise is real and significant.'",
        "Kết bài mang tính đúc kết nhân cách ('about the kind of person regular exercise tends to make you')."
      ],
      delivery_tips: "Sử dụng kỹ thuật ngắt nhịp (chunking) giữa các cụm trạng ngữ dài để giữ bài nói tự nhiên nhưng uy nghiêm, đĩnh đạc."
    }
  },
  2: {
    // Learning English
    b1: {
      grammar_errors: [
        { error: "it give them three benefit", correction: "it gives them three benefits", reason: "Chia động từ ngôi số ít 'gives' và danh từ số nhiều 'benefits' sau 'three'." },
        { error: "better job opportunity / better job", correction: "better job opportunities / a better job", reason: "Danh từ đếm được số ít cần mạo từ hoặc chuyển sang dạng số nhiều." },
        { error: "Many company / Many book", correction: "Many companies / Many books", reason: "Sau lượng từ 'Many' phải đi với danh từ số nhiều đếm được." },
        { error: "from young age", correction: "from a young age", reason: "Thiếu mạo từ 'a' trong cụm từ 'from a young age'." }
      ],
      lexical_advice: "Bài nói lặp đi lặp lại từ 'job' và 'speak English'. Nên thay đổi bằng các cụm collocation như 'career advancements', 'professional requirement', 'passive consumer'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "basic requirement", ipa: "/ˈbeɪsɪk rɪˈkwaɪəmənt/", meaning: "yêu cầu cơ bản, bắt buộc", example: "English has become a basic requirement in many fields." },
        { term: "miss out on", ipa: "/mɪs aʊt ɒn/", meaning: "bỏ lỡ mất cơ hội tốt", example: "Without it, you can miss out on many good opportunities." },
        { term: "points of view", ipa: "/pɔɪnts ɒv vjuː/", meaning: "quan điểm, góc nhìn cuộc sống", example: "...share ideas, and understand different points of view." }
      ],
      grammar_highlights: [
        { structure: "Make + Object + Adjective", explanation: "Cấu trúc tác động khiến cho điều gì đó trở nên thế nào.", example: "...and it makes real cultural exchange possible." }
      ],
      fluency_coherence: [
        "Liên kết chặt chẽ giữa các khía cạnh công việc, tiếp nhận tri thức toàn cầu, và giao lưu văn hóa.",
        "Sử dụng trạng từ chỉ mức độ tốt: 'very significant', 'in a real way'."
      ],
      delivery_tips: "Hãy chú ý nối âm ở cụm 'opens up' /ˈəʊpənz_ʌp/ và 'miss out on' /mɪs_aʊt_ɒn/."
    },
    c1: {
      vocabulary_highlights: [
        { term: "reach a ceiling", ipa: "/riːtʃ ə ˈsiːlɪŋ/", meaning: "chạm tới giới hạn tối đa (trần sự nghiệp), không thăng tiến được nữa", example: "People sometimes reach a ceiling in their careers because they cannot..." },
        { term: "avoidable career limitations", ipa: "/əˈvɔɪdəbl kəˈrɪə ˌlɪmɪˈteɪʃnz/", meaning: "những hạn chế sự nghiệp hoàn toàn có thể tránh được", example: "That is one of the most avoidable career limitations there is." },
        { term: "passive consumer", ipa: "/ˈpæsɪv kənˈsjuːmə/", meaning: "người tiêu thụ, thụ hưởng thụ động", example: "...you stop being a passive consumer of other cultures." }
      ],
      grammar_highlights: [
        { structure: "Double-negation for emphasis", explanation: "Sử dụng hai từ phủ định trong câu để nhấn mạnh ý khẳng định một cách tinh tế.", example: "...fields, even ones that are not specifically international." }
      ],
      fluency_coherence: [
        "Thừa nhận thực tế khách quan về rào cản ngôn ngữ khiến sự nghiệp bị chững lại.",
        "Kết bài xuất sắc bằng việc định nghĩa lại việc học tiếng Anh ('as a tool that permanently expands what is possible...')."
      ],
      delivery_tips: "Nhấn mạnh mạnh mẽ vào trạng từ 'permanently' và động từ 'expands' ở phần kết để tăng sức thuyết phục tuyệt đối."
    }
  },
  3: {
    // Living in cities
    b1: {
      grammar_errors: [
        { error: "living in big city", correction: "living in a big city", reason: "Thiếu mạo từ 'a' trước cụm danh từ đếm được số ít." },
        { error: "city give / city have", correction: "cities give / cities have", reason: "Chủ ngữ số nhiều 'cities' phù hợp với ngữ cảnh mô tả chung về các thành phố lớn." },
        { error: "three important thing", correction: "three important things", reason: "Sau số từ 'three' danh từ 'thing' phải thêm -s." },
        { error: "find work more easy", correction: "find work more easily", reason: "Cần phó từ 'easily' để bổ nghĩa cho động từ 'find'." }
      ],
      lexical_advice: "Từ vựng của bạn còn mang tính liệt kê đơn giản ('hospital, school, restaurant'). Nên dùng các từ khái quát tốt hơn như 'public infrastructure', 'specialist care', 'creative energy'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "starting out", ipa: "/stɑːtɪŋ aʊt/", meaning: "bắt đầu bước chân vào lập nghiệp/sự nghiệp", example: "This is especially important when you are starting out." },
        { term: "better equipped", ipa: "/ˈbetər ɪˈkwɪpt/", meaning: "được trang bị tốt hơn, hiện đại hơn", example: "...hospitals, universities, and public transport are more accessible and better equipped." },
        { term: "outweigh", ipa: "/ˌaʊˈtweɪ/", meaning: "nặng ký hơn, vượt trội hơn, có nhiều giá trị hơn", example: "But for most people... the advantages outweigh the problems." }
      ],
      grammar_highlights: [
        { structure: "Noun clause after preposition", explanation: "Mệnh đề danh từ đứng sau giới từ để bổ sung chi tiết.", example: "...something people do not appreciate until they experience it." }
      ],
      fluency_coherence: [
        "Mở bài đưa ra quan điểm toàn diện, rõ ràng ('advantages outweigh the problems').",
        "Có sự so sánh thực tế giữa thành phố lớn ('Ho Chi Minh City') và thị trấn nhỏ."
      ],
      delivery_tips: "Cần lên giọng nhẹ khi kết thúc vế nhượng bộ ('Cities have disadvantages...') và hạ giọng sâu, dứt khoát ở vế chính ('But for most people...')."
    },
    c1: {
      vocabulary_highlights: [
        { term: "concentration", ipa: "/ˌmæsɪv ˌkɒnsnˈtreɪʃn/", meaning: "sự tập trung với mật độ cao", example: "it is not just the number of opportunities... it is how close together they are." },
        { term: "well-resourced", ipa: "/wel rɪˈzɔːst/", meaning: "được đầu tư dồi dào về tài chính, cơ sở vật chất tốt", example: "well-resourced universities, reliable transport..." },
        { term: "take for granted", ipa: "/teɪk fɔː ˈɡrɑːntɪd/", meaning: "coi là hiển nhiên, không biết trân trọng", example: "...things that city residents take for granted." }
      ],
      grammar_highlights: [
        { structure: "Cleft Sentence with 'It is... that...'", explanation: "Cấu trúc nhấn mạnh yếu tố cốt lõi của lập luận.", example: "it is not just the number of opportunities that matters — it is how close together they are." }
      ],
      fluency_coherence: [
        "Lập luận sắc bén: Chỉ ra lợi ích của sự tập trung địa lý ('concentration') thay vì chỉ liệt kê số lượng công việc đơn thuần.",
        "Nhìn nhận đa chiều, khách quan về các mặt hạn chế của đô thị trước khi đưa ra kết luận thuyết phục."
      ],
      delivery_tips: "Sử dụng ngữ điệu trầm ấm, kéo dài hơi ở cụm 'creative energy' và 'creative encounters' để biểu đạt cảm xúc hào hứng tự nhiên."
    }
  },
  4: {
    // Using smartphones
    b1: {
      grammar_errors: [
        { error: "smartphone have changed", correction: "smartphones have changed", reason: "Danh từ làm chủ ngữ chung nên để ở dạng số nhiều 'smartphones'." },
        { error: "in three way", correction: "in three ways", reason: "Sau 'three' danh từ 'way' phải thêm -s thành 'ways'." },
        { error: "send message / family and friend", correction: "send messages / family and friends", reason: "Các danh từ đếm được cần ở dạng số nhiều khi nói chung." },
        { error: "Even in family dinner", correction: "Even during family dinners", reason: "Thiếu giới từ/mạo từ phù hợp để diễn đạt trạng thái thời gian diễn ra bữa ăn." }
      ],
      lexical_advice: "Bài nói lặp lại từ 'smartphone' quá nhiều lần. Hãy sử dụng các cụm từ linh hoạt như 'the device', 'digital connection', 'shallow connection', 'in-person conversation'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "coordinate", ipa: "/kəʊˈɔːdɪneɪt/", meaning: "phối hợp, sắp xếp lịch trình/công việc", example: "...or coordinate with a group in real time." },
        { term: "feel isolated locally", ipa: "/fiːl ˈaɪsəleɪtɪd ˈləʊkəli/", meaning: "cảm thấy cô đơn, cô lập ngay tại nơi mình sống", example: "For people who feel isolated locally, online communities can be..." },
        { term: "on balance", ipa: "/ɒn ˈbæləns/", meaning: "sau khi cân nhắc kỹ lưỡng, chung quy lại", example: "On balance, I think the benefits are greater than the problems." }
      ],
      grammar_highlights: [
        { structure: "Comparison with 'instead of'", explanation: "Cấu trúc chỉ sự thay thế, đối lập hành vi.", example: "it is easy to choose it instead of a real conversation." }
      ],
      fluency_coherence: [
        "Xây dựng bố cục 3 ý rõ ràng: Lợi ích liên lạc tức thời, mạng xã hội, và tác hại suy giảm giao tiếp trực tiếp.",
        "Sử dụng các ví dụ thực tế, gần gũi ('video call family', 'family dinner')."
      ],
      delivery_tips: "Chú ý phát âm rõ cụm phụ âm /st/ trong 'just', 'fast', 'worst' để tránh nuốt âm."
    },
    c1: {
      vocabulary_highlights: [
        { term: "fundamentally changed", ipa: "/ˌfʌndəˈmentəli tʃeɪndʒd/", meaning: "thay đổi một cách căn bản, tận gốc rễ", example: "Smartphones have fundamentally changed how we communicate." },
        { term: "shallow connections", ipa: "/ˈʃæləʊ kəˈnekʃnz/", meaning: "mối liên kết hời hợt, nông cạn, thiếu chiều sâu", example: "But they can also create shallow connections that feel like real community." },
        { term: "be thoughtful about", ipa: "/biː ˈθɔːtfl əˈbaʊt/", meaning: "chín chắn, suy nghĩ thấu đáo về", example: "But the impact... is real and worth being thoughtful about." }
      ],
      grammar_highlights: [
        { structure: "Noun clause as Subject with 'What'", explanation: "Dùng mệnh đề danh từ bắt đầu bằng 'What' làm chủ ngữ để nhấn mạnh kết quả/bản chất.", example: "What gets lost is the full attention and openness..." }
      ],
      fluency_coherence: [
        "Phân tích sâu sắc sự tương phản giữa 'shallow connections' (kết nối hời hợt trên mạng) và 'genuine community' (cộng đồng thực sự).",
        "Đưa ra lời khuyên thực tế phản biện thói quen phớt lờ tác hại của công nghệ ('not just acknowledged and then ignored')."
      ],
      delivery_tips: "Sử dụng giọng điệu trầm ngâm, nhấn mạnh vào từ 'shallow' và dứt khoát ở từ 'lost' để tạo sức hút mạnh mẽ cho bài nói."
    }
  },
  5: {
    // Environmental protection
    b1: {
      grammar_errors: [
        { error: "in three way", correction: "in three ways", reason: "Danh từ 'way' phải chia số nhiều sau số từ 'three'." },
        { error: "everyone do", correction: "everyone does", reason: "Chủ ngữ bất định 'everyone' luôn chia động từ ở ngôi thứ 3 số ít." },
        { error: "turn off light and electric device", correction: "turn off lights and electric devices", reason: "Cần chia số nhiều khi nói về các thiết bị điện và bóng đèn nói chung." },
        { error: "This help reduce", correction: "This helps reduce", reason: "Chủ ngữ số ít 'This' yêu cầu động từ chia 'helps'." }
      ],
      lexical_advice: "Nên nâng cấp các cụm từ chỉ hoạt động cơ bản như 'turn off lights' thành 'energy conservation' và 'sort rubbish' thành 'waste reduction'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "sorting rubbish", ipa: "/ˈsɔːtɪŋ ˈrʌbɪʃ/", meaning: "phân loại rác thải tại nguồn", example: "Simple habits like sorting rubbish... can make a real difference." },
        { term: "add up to", ipa: "/æd ʌp tuː/", meaning: "tích lũy, cộng dồn lại thành một kết quả lớn", example: "Small changes add up to a large impact." },
        { term: "eco-friendly", ipa: "/ˈiːkəʊ ˈfrendli/", meaning: "thân thiện với môi trường, hệ sinh thái", example: "When eco-friendly habits become normal in a community, more people follow." }
      ],
      grammar_highlights: [
        { structure: "Gerund phrase as Subject", explanation: "Danh động từ đứng đầu câu làm chủ ngữ tạo cảm giác tự nhiên trong lập luận hành động.", example: "Reducing waste is the most visible starting point." }
      ],
      fluency_coherence: [
        "Liên kết xuất sắc giữa hành động nhỏ của cá nhân với tác động cộng gộp to lớn của toàn xã hội.",
        "Sử dụng các filler chuyển tiếp tự nhiên: 'equally practical', 'the most visible starting point'."
      ],
      delivery_tips: "Chú ý phát âm rõ âm cuối /t/ trong 'impact', 'point', 'practical'."
    },
    c1: {
      vocabulary_highlights: [
        { term: "consistent changes", ipa: "/kənˈsɪstənt tʃeɪndʒɪz/", meaning: "những thay đổi nhỏ nhất quán, kiên trì", example: "Small, consistent changes... build a habit of environmental awareness." },
        { term: "social norms", ipa: "/ˈsəʊʃl nɔːmz/", meaning: "những chuẩn mực, quy chuẩn chung của xã hội", example: "When you change your own habits... you shift what feels normal in your community." },
        { term: "not sufficient on its own", ipa: "/nɒt səˈfɪʃnt ɒn ɪts əʊn/", meaning: "không đủ nếu chỉ đơn độc hành động một mình", example: "Individual action is not sufficient on its own — bigger problems need bigger solutions." }
      ],
      grammar_highlights: [
        { structure: "Passive voice with 'is strongly influenced'", explanation: "Dùng thể bị động để mô tả quy luật hành vi xã hội một cách khách quan.", example: "Environmental behaviour is strongly influenced by what those around you do." }
      ],
      fluency_coherence: [
        "Lập luận vượt bậc bằng việc phân tích cơ chế lan tỏa nhận thức ('multiplier effect') thông qua việc dịch chuyển chuẩn mực xã hội.",
        "Kết bài phản biện cực tốt, thể hiện tư duy hệ thống: hành động cá nhân là cần thiết nhưng chưa đủ, vẫn cần các giải pháp vĩ mô."
      ],
      delivery_tips: "Sử dụng ngữ điệu đi lên ở vế nhượng bộ ('Individual action is not sufficient on its own...') và hạ giọng sâu mạnh ở vế chính để khẳng định lập luận vững vàng."
    }
  },
  6: {
    // Choosing a career
    b1: {
      grammar_errors: [
        { error: "choose career", correction: "choose a career", reason: "Thiếu mạo từ 'a' trước danh từ đếm được số ít 'career'." },
        { error: "This bring", correction: "This brings", reason: "Động từ 'bring' phải chia ngôi thứ ba số ít đi với chủ ngữ 'This'." },
        { error: "after a few year", correction: "after a few years", reason: "Sau cụm từ chỉ lượng 'a few', danh từ 'year' phải chia số nhiều." },
        { error: "also bring", correction: "also brings", reason: "Chủ ngữ 'choosing work you love' là một cụm danh động từ số ít, động từ phải chia 'brings'." }
      ],
      lexical_advice: "Bài nói lặp từ 'work' và 'money' nhiều lần. Hãy nâng cấp lên các cụm collocation B2/C1 như 'intrinsic motivation', 'compounding effect', 'long-term satisfaction'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "keeps you going", ipa: "/kiːps juː ˈɡəʊɪŋ/", meaning: "giữ cho bạn động lực để tiếp tục cố gắng", example: "What keeps you going is whether the work itself means something to you." },
        { term: "take more initiative", ipa: "/teɪk mɔː ɪˈnɪʃətɪv/", meaning: "chủ động hơn, đưa ra nhiều sáng kiến hơn", example: "...you work harder, learn faster, and take more initiative." },
        { term: "overall wellbeing", ipa: "/ˌəʊvərˈɔːl ˌwælˈbiːɪŋ/", meaning: "trạng thái sức khỏe tinh thần và thể chất toàn diện", example: "That affects not just your career but your overall wellbeing." }
      ],
      grammar_highlights: [
        { structure: "Not only... but also...", explanation: "Cấu trúc song hành nhấn mạnh lợi ích song phương.", example: "Work is not only about money — it should also make you feel good..." }
      ],
      fluency_coherence: [
        "Phân tích mạch lạc động lực ban đầu của đồng lương đối lập với ý nghĩa công việc về mặt lâu dài.",
        "Các ý được chuyển tiếp hợp lý, nâng dần tầm quan trọng từ công việc đến chất lượng cuộc sống."
      ],
      delivery_tips: "Nhấn mạnh vào từ 'meaning' và 'wellbeing' để bộc lộ rõ tinh thần nhân văn của bài nói."
    },
    c1: {
      vocabulary_highlights: [
        { term: "plays out across three dimensions", ipa: "/pleɪz aʊt əˈkrɒs θriː dɪˈmenʃnz/", meaning: "diễn ra, biểu hiện trên ba khía cạnh/phương diện", example: "...and the case plays out across three dimensions." },
        { term: "sustains you", ipa: "/səˈsteɪnz juː/", meaning: "nuôi dưỡng, nâng đỡ và duy trì năng lượng cho bạn", example: "What sustains you across a long career is whether..." },
        { term: "overlap", ipa: "/ˌəʊvəˈlæp/", meaning: "chồng chéo, giao thoa lẫn nhau", example: "...look for work where your interests and genuine abilities overlap." }
      ],
      grammar_highlights: [
        { structure: "Subjunctive with 'rather than'", explanation: "Dùng cấu trúc so sánh đối lập giả định để đưa ra lời khuyên thực tế sắc sảo.", example: "...choose a career based on genuine interest rather than just salary..." }
      ],
      fluency_coherence: [
        "Tư duy phản biện sắc sảo: Chứng minh việc làm việc bằng đam mê không chỉ giúp hạnh phúc mà còn gián tiếp tạo ra thành quả tài chính tốt hơn trong dài hạn ('compounding effect').",
        "Lời khuyên kết luận vô cùng thực tế, khôn ngoan ('treat salary as something that needs to be sufficient rather than the main goal')."
      ],
      delivery_tips: "Hạ giọng dứt khoát và phát âm rõ ràng, chắc chắn ở từ 'sufficient' ở câu cuối để tạo điểm nhấn thuyết phục."
    }
  },
  7: {
    // Online learning
    b1: {
      grammar_errors: [
        { error: "It offer", correction: "It offers", reason: "Chủ ngữ 'It' yêu cầu động từ chia số ít 'offers'." },
        { error: "three advantage", correction: "three advantages", reason: "Danh từ 'advantage' phải ở số nhiều sau 'three'." },
        { error: "online learning give / require", correction: "online learning gives / requires", reason: "Chủ ngữ số ít 'online learning' đòi hỏi động từ phải thêm -s." },
        { error: "without teacher always watching", correction: "without a teacher always watching", reason: "Thiếu mạo từ 'a' trước danh từ đếm được số ít 'teacher'." }
      ],
      lexical_advice: "Bạn nên dùng từ 'flexibility' thay vì 'flexible schedule' liên tục, và dùng cụm 'academic accountability' thay vì chỉ 'teacher watching us'."
    },
    b2: {
      vocabulary_highlights: [
        { term: "supplement to", ipa: "/ˈsʌplɪmənt tuː/", meaning: "phần bổ sung, hỗ trợ thêm cho cái chính", example: "I think online learning works very well as a supplement to traditional study." },
        { term: "go back over", ipa: "/ɡəʊ bæk ˈəʊvə/", meaning: "rà soát, xem lại kỹ lưỡng các nội dung đã qua", example: "...go back over material you did not understand." },
        { term: "stay on track", ipa: "/steɪ ɒn træk/", meaning: "giữ đúng tiến độ, lộ trình mục tiêu", example: "...the structure and social environment... is what helps them stay on track." }
      ],
      grammar_highlights: [
        { structure: "Relative clause with 'that'", explanation: "Mệnh đề quan hệ bổ nghĩa làm rõ thời gian hoặc điều kiện phù hợp.", example: "You can study at a time that suits you." }
      ],
      fluency_coherence: [
        "Bố cục chặt chẽ khi nhìn nhận tính tự giác ('self-discipline') dưới cả hai góc độ: vừa là lợi thế, vừa là thách thức lớn.",
        "Câu kết đưa ra đánh giá thực tế về khả năng thay thế lớp học truyền thống."
      ],
      delivery_tips: "Cần chú ý phát âm chính xác nguyên âm đôi /aɪ/ trong các từ 'online', 'discipline', 'independent'."
    },
    c1: {
      vocabulary_highlights: [
        { term: "revisit material", ipa: "/ˌriːˈvɪzɪt məˈtɪəriəl/", meaning: "xem lại, nghiên cứu kỹ lại tài liệu học tập", example: "...revisit material that did not make sense the first time." },
        { term: "relocate", ipa: "/ˌriːləʊˈkeɪt/", meaning: "di dời chỗ ở, chuyển vùng sinh sống", example: "A student... who would previously have needed to relocate... no longer has to." },
        { term: "accountability", ipa: "/əˌkaʊntəˈbɪləti/", meaning: "trách nhiệm tự giác giải trình, tự chịu trách nhiệm", example: "But for many learners, the structure, accountability... is what makes learning stick." }
      ],
      grammar_highlights: [
        { structure: "Hypothetical Past Relative Clause", explanation: "Mệnh đề quan hệ giả định một tình huống trong quá khứ đã được công nghệ giải quyết.", example: "A student... who would previously have needed to relocate... no longer has to." }
      ],
      fluency_coherence: [
        "Phân tích vô cùng thực tế về bối cảnh Việt Nam, làm nổi bật lợi thế không phải di chuyển xa lên các thành phố lớn để học giảng viên giỏi.",
        "Lập luận đa chiều sâu sắc về bản chất của 'self-discipline' và sự cần thiết của môi trường xã hội lớp học thực tế."
      ],
      delivery_tips: "Nhấn mạnh vào từ 'relocate' và 'supplement' để thể hiện sự khác biệt rõ nét giữa hai hình thức học tập."
    }
  }
};
