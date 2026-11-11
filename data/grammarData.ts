export interface GrammarTopic {
  id: string;
  unit: number;
  unitName: string;
  code: string; // e.g. "5B", "5C"
  title: string;
  example: string;
  formula: string;
  usage: string;
  rules: string[];
  traps: string[];
  notes: string[];
  quickQuiz: {
    prompt: string;
    options: string[];
    answer: string;
    explanation: string;
  }[];
}

export const GRAMMAR_LIST: GrammarTopic[] = [
  // UNIT 5 - ART
  {
    id: "5b-second-conditional",
    unit: 5,
    unitName: "Art",
    code: "5B",
    title: "Second Conditional (Câu điều kiện loại 2)",
    example: "If I had more time, I would visit the gallery.",
    formula: "IF + S + V2/ed (were), S + WOULD / COULD + V (nguyên mẫu)",
    usage: "Diễn tả hành động, sự việc không có thật hoặc trái với thực tế ở hiện tại hoặc tương lai; giả định có thêm thời gian, tiền bạc hoặc khả năng khác hiện tại.",
    rules: [
      "Mệnh đề IF dùng thì Quá khứ đơn (Past Simple). Nếu dùng động từ 'to be', trong văn phong trang trọng hoặc thi cử ưu tiên dùng 'were' cho tất cả các ngôi (I / he / she / it / we / they).",
      "Mệnh đề chính dùng would / could / might + động từ nguyên thể không to (V bare-infinitive).",
      "Nếu mệnh đề IF đứng ở đầu câu, phải có dấu phẩy (,) ngăn cách hai mệnh đề. Nếu mệnh đề IF đứng sau thì không cần dấu phẩy.",
      "Cụm cố định 'If I were you, I would...' được dùng rất phổ biến để đưa ra lời khuyên cho người khác."
    ],
    traps: [
      "BẪY 1: Tuyệt đối không dùng 'would' ngay sau liên từ 'if' trong dạng điều kiện tiêu chuẩn (SAI: If I would have money... -> ĐÚNG: If I had money...).",
      "BẪY 2: Nhầm lẫn với câu điều kiện loại 1 (If + hiện tại đơn, will + V) khi giả định tình huống thực tế trong tương lai.",
      "BẪY 3: Sau would/could/might phải là động từ nguyên mẫu không to (SAI: I would to buy... -> ĐÚNG: I would buy...)."
    ],
    notes: [
      "Có thể đảo ngữ loại 2: 'Were I an artist, I would paint...' thay cho 'If I were an artist, I would paint...'.",
      "Could diễn tả khả năng (ability/possibility), would diễn tả hành động có tính giả định chắc chắn hơn nếu điều kiện xảy ra."
    ],
    quickQuiz: [
      {
        prompt: "If I _____ an artist, I would paint pictures of the ocean.",
        options: ["will be", "am", "were"],
        answer: "were",
        explanation: "Câu điều kiện loại 2 giả định trái thực tế ở hiện tại: If + S + were/V2, S + would + V."
      },
      {
        prompt: "She would join the choir if she _____ more free time.",
        options: ["had", "has", "would have"],
        answer: "had",
        explanation: "Mệnh đề if ở loại 2 dùng quá khứ đơn (had), không dùng would have ở vế if."
      }
    ]
  },
  {
    id: "5c-ed-ing-adjectives",
    unit: 5,
    unitName: "Art",
    code: "5C",
    title: "Adjectives Ending in -ed / -ing (Tính từ đuôi -ed và -ing)",
    example: "I was amazed because the performance was amazing.",
    formula: "S (người) + be + Adj-ED (cảm xúc) | S (vật/sự việc) + be + Adj-ING (tính chất)",
    usage: "Phân biệt tính từ miêu tả cảm xúc bên trong của con người (-ed) và tính từ miêu tả tính chất, đặc điểm của người/sự vật/hiện tượng gây ra cảm xúc đó (-ing).",
    rules: [
      "Đuôi -ED: Diễn tả cảm giác, cảm xúc của một người khi trải nghiệm hoặc bị tác động bởi điều gì (e.g., bored = cảm thấy chán nản, excited = cảm thấy hào hứng).",
      "Đuôi -ING: Diễn tả tính chất, bản chất của một sự việc, đồ vật, người gây ra cảm xúc cho người khác (e.g., boring = tẻ nhạt, exciting = đầy hào hứng).",
      "Một người cũng có thể được miêu tả bằng đuôi -ing nếu người đó gây ra cảm xúc cho người khác (e.g., 'He is a boring person' = Anh ta là người tẻ nhạt làm người khác chán)."
    ],
    traps: [
      "BẪY 1: Nghĩ rằng cứ miêu tả người là -ed, vật là -ing. Cần xét xem chủ thể cảm nhận (feel) hay tạo ra tác động (cause).",
      "BẪY 2: Cặp từ dễ nhầm: bored / boring; fascinated / fascinating; disappointed / disappointing; amazed / amazing; embarrassed / embarrassing."
    ],
    notes: [
      "The film is exciting. -> I am excited about the film.",
      "The ending was surprising. -> We were surprised at the ending."
    ],
    quickQuiz: [
      {
        prompt: "The story was so _____ that I read it twice.",
        options: ["fascinating", "fascinated", "fascinate"],
        answer: "fascinating",
        explanation: "Chủ ngữ là 'The story' (sự vật mang tính chất hấp dẫn người đọc) -> dùng tính từ đuôi -ing (fascinating)."
      },
      {
        prompt: "I felt _____ when everybody laughed at my mistake.",
        options: ["embarrass", "embarrassed", "embarrassing"],
        answer: "embarrassed",
        explanation: "Chủ ngữ là 'I' và động từ 'felt' diễn tả cảm xúc của bản thân người nói -> dùng đuôi -ed (embarrassed)."
      }
    ]
  },

  // UNIT 6 - WHERE I'M FROM
  {
    id: "6b-present-perfect-continuous",
    unit: 6,
    unitName: "Where I'm from",
    code: "6B",
    title: "Present Perfect Continuous (Hiện tại hoàn thành tiếp diễn)",
    example: "She has been living here since 2022.",
    formula: "(+) S + have / has + been + V-ing | (-) S + haven't / hasn't + been + V-ing | (?) Have / Has + S + been + V-ing?",
    usage: "Diễn tả hành động bắt đầu trong quá khứ, tiếp tục kéo dài liên tục đến hiện tại và có khả năng tiếp diễn trong tương lai; hoặc vừa mới chấm dứt nhưng để lại kết quả/dấu vết thấy rõ ở hiện tại.",
    rules: [
      "Đi với 'for + khoảng thời gian' (for three years, for a long time, for 2 hours).",
      "Đi với 'since + mốc thời gian' (since 2020, since yesterday, since March, since she moved here).",
      "Đi với các trạng từ nhận biết: all morning, all day, recently, lately, how long...?",
      "Nhấn mạnh vào tính liên tục và độ dài của thời gian diễn ra hành động."
    ],
    traps: [
      "BẪY 1: Nhầm lẫn giữa for (khoảng thời gian) và since (mốc thời gian).",
      "BẪY 2: Dấu vết ở hiện tại: 'Why are your shoes wet? — I have been walking in the rain' (hành động vừa diễn ra liên tục để lại dấu vết hiện tại).",
      "BẪY 3: Động từ chỉ trạng thái (stative verbs như know, believe, like, have sở hữu) không dùng thì tiếp diễn, phải chuyển về Present Perfect Simple (e.g. I have known her for 5 years, không dùng have been knowing)."
    ],
    notes: [
      "So sánh: Present Perfect Simple nhấn mạnh kết quả đã hoàn thành (I have written 3 letters); Present Perfect Continuous nhấn mạnh quá trình liên tục (I have been writing letters all morning)."
    ],
    quickQuiz: [
      {
        prompt: "I _____ in this neighbourhood for nearly four years.",
        options: ["was living", "am living", "have been living"],
        answer: "have been living",
        explanation: "Diễn tả hành động bắt đầu trong quá khứ kéo dài liên tục đến hiện tại kèm 'for nearly four years' -> dùng Present Perfect Continuous."
      },
      {
        prompt: "He has been working at the hostel _____ March.",
        options: ["since", "during", "for"],
        answer: "since",
        explanation: "'March' là mốc thời gian cụ thể trong quá khứ -> dùng giới từ 'since'."
      }
    ]
  },
  {
    id: "6c-describing-movement",
    unit: 6,
    unitName: "Where I'm from",
    code: "6C",
    title: "Describing Movement (Miêu tả chuyển động & Giới từ chỉ phương hướng)",
    example: "He walked quickly through the park.",
    formula: "Movement Verb (walk, run, jump, drive) + Manner Adverb (-ly) + Preposition of Movement (through, across, over, towards, into, along)",
    usage: "Kết hợp động từ chỉ chuyển động cùng trạng từ chỉ cách thức và giới từ không gian để miêu tả lộ trình di chuyển sinh động, chính xác.",
    rules: [
      "Through: Xuyên qua một không gian 3 chiều hoặc có giới hạn (through the tunnel, through the park, through the door).",
      "Across: Băng ngang qua một bề mặt phẳng (across the road, across the river, across the street).",
      "Over: Vượt qua bên trên một vật cản hoặc bờ tường (jumped over the low wall, fly over the city).",
      "Towards: Đi về phía, hướng về một địa điểm cụ thể.",
      "Into: Đi vào bên trong không gian đóng kín.",
      "Along: Đi dọc theo (along the river, along the path).",
      "Trạng từ chỉ cách thức thường tạo bằng Tính từ + -ly: careful -> carefully, quick -> quickly, clear -> clearly. Ngoại lệ: fast -> fast, hard -> hard, good -> well."
    ],
    traps: [
      "BẪY 1: Nhầm lẫn giữa through (xuyên qua đường hầm/rừng) và across (băng qua đường/cầu).",
      "BẪY 2: Dùng tính từ thay vì trạng từ bổ nghĩa cho động từ (SAI: walk careful -> ĐÚNG: walk carefully)."
    ],
    notes: [
      "The guide spoke very clearly so everyone could understand.",
      "The children ran across the road at the crossing."
    ],
    quickQuiz: [
      {
        prompt: "We walked _____ the tunnel and came out near the river.",
        options: ["over", "towards", "through"],
        answer: "through",
        explanation: "Đi xuyên qua đường hầm (không gian kín 3D) -> dùng 'through'."
      },
      {
        prompt: "Please walk _____ on the stairs; the steps are wet.",
        options: ["care", "careful", "carefully"],
        answer: "carefully",
        explanation: "Cần trạng từ chỉ cách thức bổ nghĩa cho động từ 'walk' -> 'carefully'."
      }
    ]
  },

  // UNIT 7 - BALANCE
  {
    id: "7b-future-forms",
    unit: 7,
    unitName: "Balance",
    code: "7B",
    title: "Talking About the Future (Các thì diễn tả tương lai)",
    example: "We are meeting our teacher tomorrow. / Look at the clouds! It is going to rain.",
    formula: "Be going to + V (dự định, dấu hiệu) | Be + V-ing (lịch hẹn cố định) | Will + V (quyết định tức thì, lời hứa, dự đoán chung)",
    usage: "Lựa chọn cấu trúc tương lai tùy theo ngữ cảnh: dự định cá nhân, sự sắp xếp lịch trình từ trước hay quyết định ngay tại thời điểm nói.",
    rules: [
      "BE GOING TO + V: Diễn tả dự định có từ trước hoặc dự đoán tương lai dựa trên bằng chứng thấy rõ ở hiện tại (Look at those dark clouds. It is going to rain).",
      "PRESENT CONTINUOUS (am/is/are + V-ing): Diễn tả kế hoạch, lịch hẹn đã được sắp xếp cố định về thời gian, địa điểm hoặc có người cùng tham gia (We are meeting our mentor at 3 p.m. tomorrow).",
      "WILL + V: Diễn tả quyết định tức thì đưa ra ngay tại thời điểm nói (I will help you), lời hứa (I promise I won't tell anyone), lời đề nghị hoặc phỏng đoán chủ quan (I think...)."
    ],
    traps: [
      "BẪY 1: Nhầm giữa 'will' và 'be going to' khi có dấu hiệu bằng chứng trước mắt (Dark clouds -> It is going to rain, không dùng It will rain).",
      "BẪY 2: Quên cấu trúc to-infinitive sau 'be going to' hoặc quên chia 'to be'.",
      "BẪY 3: Dùng nhầm will be + V3 khi câu không mang nghĩa bị động."
    ],
    notes: [
      "Lịch trình có giờ cố định hoặc bàn đã đặt trước: 'They are having dinner tonight; the table is reserved.' -> Dùng hiện tại tiếp diễn."
    ],
    quickQuiz: [
      {
        prompt: "Look at those dark clouds. It _____ rain soon.",
        options: ["is raining yesterday", "is going to", "will be"],
        answer: "is going to",
        explanation: "Dự đoán tương lai dựa trên dấu hiệu rõ rệt ở hiện tại ('dark clouds') -> dùng 'is going to'."
      },
      {
        prompt: "I forgot my notebook. — Don't worry, I _____ you some paper.",
        options: ["will give", "gave", "am giving yesterday"],
        answer: "will give",
        explanation: "Quyết định tức thì được đưa ra ngay tại lúc nói để giúp đỡ -> dùng 'will + V'."
      }
    ]
  },
  {
    id: "7c-verb-patterns",
    unit: 7,
    unitName: "Balance",
    code: "7C",
    title: "Verb Patterns: To-Infinitive vs. Gerund (Dạng động từ theo sau)",
    example: "They decided to leave; she suggested taking a taxi.",
    formula: "V + TO-V (decide, hope, plan, arrange, promise...) | V + V-ING (avoid, enjoy, suggest, finish, practise...)",
    usage: "Nắm vững danh sách động từ chỉ đi với To-V, động từ chỉ đi với V-ing, và các động từ thay đổi nghĩa tùy theo cấu trúc.",
    rules: [
      "Động từ theo sau bởi TO + V: decide, hope, want, plan, agree, promise, arrange, manage, afford, refuse, offer, expect.",
      "Động từ theo sau bởi V-ING: avoid, enjoy, suggest, finish, consider, keep, practise, mind, deny, admit.",
      "Động từ đi được với cả hai và ít đổi nghĩa: start, begin, continue, love, prefer, like.",
      "Động từ thay đổi nghĩa đáng kể: REMEMBER (remember to do = nhớ phải làm; remember doing = nhớ đã từng làm); STOP (stop to do = dừng lại để làm việc khác; stop doing = ngừng hẳn việc đang làm); TRY (try to do = cố gắng làm; try doing = thử làm xem kết quả thế nào)."
    ],
    traps: [
      "BẪY 1: Nhầm 'suggest + to V' (SAI: He suggested to take... -> ĐÚNG: He suggested taking a taxi).",
      "BẪY 2: Nhầm 'avoid + to V' (SAI: You should avoid to check... -> ĐÚNG: You should avoid checking your phone).",
      "BẪY 3: Nhầm 'remember to check' (nhớ phải kiểm tra hộ chiếu trước khi đi) với 'remember checking' (nhớ là đã kiểm tra rồi)."
    ],
    notes: [
      "Mẹo nhớ: Các hành động hướng tới tương lai/mục đích thường đi với To-V; các hành động mang tính trải nghiệm/thói quen thường đi với V-ing."
    ],
    quickQuiz: [
      {
        prompt: "They decided _____ their work hours to spend more time with family.",
        options: ["reducing", "reduce", "to reduce"],
        answer: "to reduce",
        explanation: "Động từ 'decide' luôn đi với To-Infinitive: decide to do something."
      },
      {
        prompt: "He suggested _____ a short break after lunch.",
        options: ["taking", "to take", "take"],
        answer: "taking",
        explanation: "Động từ 'suggest' khi đi trực tiếp với động từ sẽ dùng dạng Gerund (V-ing): suggest doing something."
      }
    ]
  },

  // UNIT 8 - ESSENTIALS
  {
    id: "8b-relative-clauses",
    unit: 8,
    unitName: "Essentials",
    code: "8B",
    title: "Relative Clauses: Defining & Non-defining (Mệnh đề quan hệ)",
    example: "The woman who works in the bakery is my neighbour. / My aunt, who lives in Hanoi, makes pottery.",
    formula: "Người: WHO / THAT | Vật: WHICH / THAT | Nơi chốn: WHERE | Sở hữu: WHOSE (+ Noun)",
    usage: "Nối hai câu đơn thành câu phức bằng đại từ quan hệ để bổ sung thông tin cho danh từ đứng trước.",
    rules: [
      "MỆNH ĐỀ XÁC ĐỊNH (Defining Relative Clause): Cần thiết để xác định danh từ; KHÔNG có dấu phẩy; có thể dùng THAT thay cho WHO/WHICH; có thể LƯỢC BỎ đại từ quan hệ khi nó làm tân ngữ trong mệnh đề (The book [that] you recommended).",
      "MỆNH ĐỀ KHÔNG XÁC ĐỊNH (Non-defining Relative Clause): Bổ sung thông tin thêm cho danh từ đã xác định (tên riêng, my mother, this car...); PHẢI CÓ DẤU PHẨY; TUYỆT ĐỐI KHÔNG dùng THAT; KHÔNG ĐƯỢC LƯỢC BỎ đại từ quan hệ.",
      "WHOSE: Đại từ quan hệ chỉ sở hữu (whose + danh từ, thay cho his/her/their/its).",
      "WHERE: Đại từ quan hệ chỉ nơi chốn (the café where we first met = in which)."
    ],
    traps: [
      "BẪY 1: Dùng 'that' trong mệnh đề có dấu phẩy (SAI: My aunt, that lives in Hanoi,... -> ĐÚNG: My aunt, who lives in Hanoi,...).",
      "BẪY 2: Nhầm lẫn giữa 'who' và 'whose' (whose đi kèm danh từ chỉ vật sở hữu: whose bicycle was stolen).",
      "BẪY 3: Nhầm giữa 'which' và 'where' khi nói về địa điểm (nếu sau địa điểm là hành động ở tại đó -> where; nếu sau địa điểm là động từ trực tiếp -> which: The museum which opened last week)."
    ],
    notes: [
      "Lưu ý: Mệnh đề không xác định có thể lược bỏ đi mà câu chính vẫn có nghĩa trọn vẹn."
    ],
    quickQuiz: [
      {
        prompt: "My aunt, _____ lives in Hanoi, makes beautiful pottery.",
        options: ["that", "where", "who"],
        answer: "who",
        explanation: "Mệnh đề có dấu phẩy (non-defining) bổ nghĩa cho người ('My aunt') -> chỉ dùng 'who', không bao giờ dùng 'that'."
      },
      {
        prompt: "Do you know the student _____ bicycle was stolen?",
        options: ["whose", "who", "which"],
        answer: "whose",
        explanation: "Chỉ mối quan hệ sở hữu đối với danh từ 'bicycle' -> dùng 'whose'."
      }
    ]
  },
  {
    id: "8c-comparatives",
    unit: 8,
    unitName: "Essentials",
    code: "8C",
    title: "Comparatives & As...As (So sánh hơn và So sánh bằng)",
    example: "This meal is much cheaper than that one. / The soup isn't as spicy as my mother's.",
    formula: "Ngắn: Adj/Adv-er + than | Dài: more / less + Adj/Adv + than | Bằng: as + Adj/Adv + as | Không bằng: not as/so + Adj/Adv + as",
    usage: "So sánh mức độ tính chất hoặc cách thức giữa hai đối tượng hoặc hai hành động.",
    rules: [
      "Tính từ ngắn: thêm -er (cheap -> cheaper, fast -> faster). Đuôi -y đổi thành -ier (easy -> easier).",
      "Tính từ/trạng từ dài: more / less + adj/adv (peaceful -> more peaceful, loudly -> more loudly).",
      "Từ bổ nghĩa mức độ: 'much / a lot / far' (rất nhiều); 'a little / slightly' (một chút, hơi hơi): much cheaper, a little more peaceful.",
      "So sánh bằng: as + tính từ/trạng từ nguyên thể + as (as useful as, as spicy as).",
      "So sánh không bằng: not as + tính từ/trạng từ nguyên thể + as."
    ],
    traps: [
      "BẪY 1: Lặp so sánh 'more cheaper' hoặc 'more louder' (SAI -> ĐÚNG: cheaper / more loudly).",
      "BẪY 2: Trạng từ kết thúc bằng -ly (loudly, quickly) so sánh hơn dùng 'more loudly', không dùng 'loudlier'.",
      "BẪY 3: Quên chữ 'as' thứ hai trong so sánh bằng (SAI: as spicy my mother's -> ĐÚNG: as spicy as my mother's)."
    ],
    notes: [
      "Fast vừa là tính từ vừa là trạng từ -> So sánh hơn của trạng từ fast là faster (không có more fast)."
    ],
    quickQuiz: [
      {
        prompt: "Could you speak _____? I can't hear you clearly.",
        options: ["loudlier", "more louder", "more loudly"],
        answer: "more loudly",
        explanation: "Trạng từ đuôi -ly 'loudly' so sánh hơn dùng 'more loudly'."
      },
      {
        prompt: "This meal is much _____ than the one we ate yesterday.",
        options: ["cheaper", "cheap", "cheapest"],
        answer: "cheaper",
        explanation: "Cấu trúc so sánh hơn với 'than' và từ nhấn mạnh 'much': much + cheaper."
      }
    ]
  },

  // UNIT 9 - TAKING A BREAK
  {
    id: "9b-third-conditional",
    unit: 9,
    unitName: "Taking a break",
    code: "9B",
    title: "Third Conditional (Câu điều kiện loại 3)",
    example: "If we had left earlier, we would have arrived on time.",
    formula: "IF + S + HAD + V3/ed, S + WOULD / COULD / MIGHT + HAVE + V3/ed",
    usage: "Diễn tả giả định về một hành động, sự việc trái ngược với thực tế đã xảy ra trong quá khứ, thường thể hiện sự tiếc nuối, trách móc hoặc suy xét nguyên nhân.",
    rules: [
      "Mệnh đề IF dùng thì Quá khứ hoàn thành (Past Perfect: had + V3/ed). Phủ định: hadn't + V3.",
      "Mệnh đề chính dùng would / could / might + have + V3/ed.",
      "Would have = kết quả giả định chắc chắn hơn nếu điều kiện xảy ra.",
      "Could have = có thể, có khả năng làm được trong quá khứ.",
      "Might have = có lẽ đã xảy ra (khả năng không chắc chắn lắm)."
    ],
    traps: [
      "BẪY 1: Dùng 'would have' ngay trong mệnh đề IF (SAI: If we would have booked... -> ĐÚNG: If we had booked...).",
      "BẪY 2: Nhầm lẫn với loại 2: Loại 2 giả định hiện tại (If + V2, would + V); Loại 3 giả định quá khứ (If + had V3, would have V3).",
      "BẪY 3: Quên 'have' hoặc quên chia V3 ở mệnh đề chính (SAI: would arrived -> ĐÚNG: would have arrived)."
    ],
    notes: [
      "If we had booked the tickets earlier, we would have got better seats. (Thực tế quá khứ: chúng tôi không đặt vé sớm, nên không có ghế tốt)."
    ],
    quickQuiz: [
      {
        prompt: "If we _____ the tickets earlier, we would have got better seats.",
        options: ["would book", "book", "had booked"],
        answer: "had booked",
        explanation: "Mệnh đề if của câu điều kiện loại 3 dùng Had + V3/ed -> 'had booked'."
      },
      {
        prompt: "She wouldn't have missed the train if she _____ earlier.",
        options: ["had left", "left", "would leave"],
        answer: "had left",
        explanation: "Giả định ngược quá khứ với vế chính là 'wouldn't have missed' -> vế if dùng 'had left'."
      }
    ]
  },
  {
    id: "9c-giving-advice",
    unit: 9,
    unitName: "Taking a break",
    code: "9C",
    title: "Giving Advice (Cấu trúc đưa ra lời khuyên)",
    example: "You should check the weather before leaving.",
    formula: "SHOULD / SHOULDN'T + V | OUGHT TO + V | IF I WERE YOU, I WOULD + V | SUGGEST / RECOMMEND + V-ING",
    usage: "Đưa ra lời khuyên, đề xuất hoặc gợi ý cho người khác trong các tình huống du lịch, chuẩn bị hành lý, bảo hiểm...",
    rules: [
      "SHOULD + V nguyên mẫu (không 'to'): You should take some water.",
      "OUGHT TO + V nguyên mẫu: You ought to check the local rules. Phủ định: ought not to + V.",
      "IF I WERE YOU, I WOULD + V: Lời khuyên giả định đặt mình vào vị trí người khác.",
      "SUGGEST / RECOMMEND + V-ING: Our guide suggested taking a taxi.",
      "SUGGEST THAT + S + (should) + V: He suggested that we take a taxi."
    ],
    traps: [
      "BẪY 1: Dùng 'should to do' (SAI -> ĐÚNG: should do).",
      "BẪY 2: Quên 'to' sau 'ought' (SAI: You ought check -> ĐÚNG: You ought to check).",
      "BẪY 3: Dùng 'suggest to do' (SAI: suggested to take -> ĐÚNG: suggested taking)."
    ],
    notes: [
      "Thường xuất hiện trong các bài hội thoại tư vấn du lịch, y tế, lập kế hoạch kỳ nghỉ."
    ],
    quickQuiz: [
      {
        prompt: "You _____ take some water on the walking tour.",
        options: ["might to", "should to", "should"],
        answer: "should",
        explanation: "Động từ khuyết thiếu 'should' đi trực tiếp với V nguyên mẫu không to -> 'should take'."
      },
      {
        prompt: "Our guide suggested _____ a taxi to the station.",
        options: ["take", "to taking", "taking"],
        answer: "taking",
        explanation: "Cấu trúc gợi ý: suggest + V-ing -> 'suggested taking'."
      }
    ]
  },

  // UNIT 10 - THE SENSES
  {
    id: "10b-passives",
    unit: 10,
    unitName: "The senses",
    code: "10B",
    title: "The Passives (Câu bị động các thì)",
    example: "The museum was opened in 2010. / The results have been checked by researchers.",
    formula: "S + BE (chia theo thì) + V3 / Past Participle (+ by + Agent)",
    usage: "Nhấn mạnh vào đối tượng chịu tác động của hành động, hoặc khi không biết rõ/không cần thiết nhắc đến người thực hiện.",
    rules: [
      "Hiện tại đơn: S + am / is / are + V3 (This technology is used every day).",
      "Quá khứ đơn: S + was / were + V3 (The first telephone was invented in the 19th century).",
      "Hiện tại tiếp diễn: S + am / is / are + BEING + V3 (The equipment is being repaired at the moment).",
      "Quá khứ tiếp diễn: S + was / were + BEING + V3 (The song was being recorded when I arrived).",
      "Hiện tại hoàn thành: S + have / has + BEEN + V3 (The results have already been checked).",
      "Tương lai đơn: S + will + BE + V3 (The new app will be launched next month)."
    ],
    traps: [
      "BẪY 1: Quên trợ động từ 'be' hoặc chia sai thì của 'be'.",
      "BẪY 2: Bị động tiếp diễn thiếu chữ 'being' (SAI: is repairing -> ĐÚNG: is being repaired).",
      "BẪY 3: Bị động hoàn thành thiếu chữ 'been' (SAI: has checked -> ĐÚNG: has been checked)."
    ],
    notes: [
      "Chỉ dùng 'by + tác nhân' khi tác nhân quan trọng hoặc đem lại thông tin hữu ích (e.g., by the researchers)."
    ],
    quickQuiz: [
      {
        prompt: "The new app _____ next month.",
        options: ["will launch by", "will be launch", "will be launched"],
        answer: "will be launched",
        explanation: "Bị động tương lai đơn: will be + V3/ed -> 'will be launched'."
      },
      {
        prompt: "The equipment _____ at the moment, so the lab is closed.",
        options: ["is being repaired", "has repairing", "is repaired yesterday"],
        answer: "is being repaired",
        explanation: "Dấu hiệu 'at the moment' (tiếp diễn) kết hợp bị động -> 'is being repaired'."
      }
    ]
  },
  {
    id: "10c-making-predictions",
    unit: 10,
    unitName: "The senses",
    code: "10C",
    title: "Making Predictions (Dự đoán về tương lai & Mức độ chắc chắn)",
    example: "Travel might become cheaper in the future. / It is unlikely that people will stop using technology.",
    formula: "WILL / WON'T + V (chắc chắn cao) | MAY / MIGHT / COULD + V (khả năng có thể) | It is LIKELY / UNLIKELY / CERTAIN / IMPOSSIBLE that...",
    usage: "Bày tỏ mức độ tin tưởng, khả năng xảy ra của một sự việc hoặc phát minh trong tương lai.",
    rules: [
      "Chắc chắn xảy ra (Certainty): Will + V / Definitely will / It is certain that...",
      "Khả năng có thể (Possibility ~ 30-50%): May / Might / Could + V nguyên mẫu (KHÔNG có 'to').",
      "Cấu trúc tính từ dự đoán: It is likely that + S + will + V (Có khả năng cao là...); It is unlikely that... (Khó có khả năng...); It is possible that... (Có thể là...).",
      "Modal verbs (may, might, could, will) luôn đi với động từ nguyên thể không to (V bare-inf)."
    ],
    traps: [
      "BẪY 1: Dùng 'might to do' hoặc 'could to do' (SAI -> ĐÚNG: might help, could make).",
      "BẪY 2: Nhầm lẫn giữa từ loại: 'likely' là tính từ (It is likely that...), không phải trạng từ đuôi -ly thông thường.",
      "BẪY 3: May/Might/Could diễn tả khả năng, không khẳng định 100% như Will."
    ],
    notes: [
      "I'm certain the exhibition will be popular next month.",
      "New tools could make it easier to learn languages in the future."
    ],
    quickQuiz: [
      {
        prompt: "Scientists think this device _____ help people with poor eyesight one day.",
        options: ["might to", "may be to", "might"],
        answer: "might",
        explanation: "Modal verb 'might' đi trực tiếp với động từ nguyên mẫu không to 'help' -> 'might'."
      },
      {
        prompt: "It is _____ that people will stop using all technology next year.",
        options: ["certainly", "unlikely", "might"],
        answer: "unlikely",
        explanation: "Cấu trúc: It is + Adjective + that clause -> 'unlikely' (khó có thể xảy ra)."
      }
    ]
  }
];
