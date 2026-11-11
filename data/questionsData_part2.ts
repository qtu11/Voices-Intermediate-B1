import { QuestionItem } from './questionsData_part1';

export const GRAMMAR_QUESTIONS: QuestionItem[] = [
  // UNIT 5 - ART (091 - 102)
  {
    id: 91,
    code: "CÂU 091",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5B Second Conditional",
    prompt: "If I _____ an artist, I would paint pictures of the ocean.",
    options: [
      { key: "a", text: "will be" },
      { key: "b", text: "am" },
      { key: "c", text: "were" }
    ],
    answer: "c",
    vietnameseExplanation: "Câu điều kiện loại 2 giả định điều không có thật ở hiện tại: If + S + were/V2, S + would + V. 'were' dùng chuẩn cho mọi ngôi.",
    collocationOrRule: "If + S + were/V2, S + would + V",
    fullSentence: "If I were an artist, I would paint pictures of the ocean.",
    vietnameseTranslation: "Nếu tôi là một họa sĩ, tôi sẽ vẽ những bức tranh về đại dương."
  },
  {
    id: 92,
    code: "CÂU 092",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5B Second Conditional",
    prompt: "She would join the choir if she _____ more free time.",
    options: [
      { key: "a", text: "had" },
      { key: "b", text: "has" },
      { key: "c", text: "would have" }
    ],
    answer: "a",
    vietnameseExplanation: "Mệnh đề if ở điều kiện loại 2 dùng thì quá khứ đơn (had), không dùng would have ở mệnh đề if.",
    collocationOrRule: "if + S + past simple, S + would + V",
    fullSentence: "She would join the choir if she had more free time.",
    vietnameseTranslation: "Cô ấy sẽ tham gia dàn hợp xướng nếu có thêm thời gian rảnh."
  },
  {
    id: 93,
    code: "CÂU 093",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5B Second Conditional",
    prompt: "If they lived closer, they _____ the gallery more often.",
    options: [
      { key: "a", text: "will visit" },
      { key: "b", text: "would visit" },
      { key: "c", text: "visited" }
    ],
    answer: "b",
    vietnameseExplanation: "Mệnh đề chính của điều kiện loại 2: S + would/could + V nguyên mẫu -> 'would visit'.",
    collocationOrRule: "S + would + V",
    fullSentence: "If they lived closer, they would visit the gallery more often.",
    vietnameseTranslation: "Nếu sống gần hơn, họ sẽ ghé phòng tranh thường xuyên hơn."
  },
  {
    id: 94,
    code: "CÂU 094",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5B Second Conditional",
    prompt: "What _____ you do if you found an old painting?",
    options: [
      { key: "a", text: "did" },
      { key: "b", text: "will" },
      { key: "c", text: "would" }
    ],
    answer: "c",
    vietnameseExplanation: "Câu hỏi điều kiện loại 2: What would you do if + S + V2/ed?",
    collocationOrRule: "What would you do if...?",
    fullSentence: "What would you do if you found an old painting?",
    vietnameseTranslation: "Bạn sẽ làm gì nếu tìm thấy một bức tranh cổ?"
  },
  {
    id: 95,
    code: "CÂU 095",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5B Second Conditional",
    prompt: "If he _____ the money, he could buy the sculpture.",
    options: [
      { key: "a", text: "saved" },
      { key: "b", text: "would save" },
      { key: "c", text: "will save" }
    ],
    answer: "a",
    vietnameseExplanation: "Vế If của loại 2 dùng quá khứ đơn 'saved'.",
    collocationOrRule: "If + S + V2/ed",
    fullSentence: "If he saved the money, he could buy the sculpture.",
    vietnameseTranslation: "Nếu anh ấy tiết kiệm tiền, anh ấy đã có thể mua tác phẩm điêu khắc."
  },
  {
    id: 96,
    code: "CÂU 096",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5B Second Conditional",
    prompt: "I _____ a film about music if I could choose the topic.",
    options: [
      { key: "a", text: "made" },
      { key: "b", text: "would make" },
      { key: "c", text: "will make" }
    ],
    answer: "b",
    vietnameseExplanation: "Mệnh đề chính dùng S + would + V nguyên mẫu -> 'would make'.",
    collocationOrRule: "S + would + V",
    fullSentence: "I would make a film about music if I could choose the topic.",
    vietnameseTranslation: "Tôi sẽ làm một bộ phim về âm nhạc nếu tôi có thể chọn chủ đề."
  },
  {
    id: 97,
    code: "CÂU 097",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5B Second Conditional",
    prompt: "If the theatre tickets _____ cheaper, we'd go tonight.",
    options: [
      { key: "a", text: "will be" },
      { key: "b", text: "are" },
      { key: "c", text: "were" }
    ],
    answer: "c",
    vietnameseExplanation: "Mệnh đề chính dùng 'we'd go' (we would go) -> vế If chia quá khứ giả định 'were'.",
    collocationOrRule: "If + S + were",
    fullSentence: "If the theatre tickets were cheaper, we'd go tonight.",
    vietnameseTranslation: "Nếu vé nhà hát rẻ hơn, tối nay chúng tôi sẽ đi."
  },
  {
    id: 98,
    code: "CÂU 098",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5C Adjectives ending in -ed/-ing",
    prompt: "The story was so _____ that I read it twice.",
    options: [
      { key: "a", text: "fascinating" },
      { key: "b", text: "fascinated" },
      { key: "c", text: "fascinate" }
    ],
    answer: "a",
    vietnameseExplanation: "Chủ ngữ là sự vật ('The story') mang tính chất lôi cuốn người đọc -> dùng đuôi -ing (fascinating).",
    collocationOrRule: "Thing + be + Adj-ING",
    fullSentence: "The story was so fascinating that I read it twice.",
    vietnameseTranslation: "Câu chuyện lôi cuốn đến mức tôi đã đọc lại lần thứ hai."
  },
  {
    id: 99,
    code: "CÂU 099",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5C Adjectives ending in -ed/-ing",
    prompt: "I felt _____ when everybody laughed at my mistake.",
    options: [
      { key: "a", text: "embarrass" },
      { key: "b", text: "embarrassed" },
      { key: "c", text: "embarrassing" }
    ],
    answer: "b",
    vietnameseExplanation: "Chủ ngữ là người 'I' và động từ 'felt' diễn tả cảm xúc xấu hổ, ngượng ngùng -> dùng đuôi -ed (embarrassed).",
    collocationOrRule: "Person + feel + Adj-ED",
    fullSentence: "I felt embarrassed when everybody laughed at my mistake.",
    vietnameseTranslation: "Tôi cảm thấy xấu hổ ngượng ngùng khi mọi người cười vì lỗi của tôi."
  },
  {
    id: 100,
    code: "CÂU 100",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5C Adjectives ending in -ed/-ing",
    prompt: "The ending of the documentary was really _____.",
    options: [
      { key: "a", text: "surprised" },
      { key: "b", text: "surprise" },
      { key: "c", text: "surprising" }
    ],
    answer: "c",
    vietnameseExplanation: "Đoạn kết phim tài liệu ('The ending') mang tính chất bất ngờ -> dùng đuôi -ing (surprising).",
    collocationOrRule: "Thing + be + Adj-ING",
    fullSentence: "The ending of the documentary was really surprising.",
    vietnameseTranslation: "Cái kết của bộ phim tài liệu thực sự rất bất ngờ."
  },
  {
    id: 101,
    code: "CÂU 101",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5C Adjectives ending in -ed/-ing",
    prompt: "The audience looked _____ after the two-hour lecture.",
    options: [
      { key: "a", text: "bored" },
      { key: "b", text: "bore" },
      { key: "c", text: "boring" }
    ],
    answer: "a",
    vietnameseExplanation: "Khán giả ('The audience') có vẻ ngoài biểu lộ cảm giác chán nản mệt mỏi -> dùng đuôi -ed (bored).",
    collocationOrRule: "People + look + Adj-ED",
    fullSentence: "The audience looked bored after the two-hour lecture.",
    vietnameseTranslation: "Khán giả trông có vẻ chán sau bài giảng dài hai tiếng."
  },
  {
    id: 102,
    code: "CÂU 102",
    category: "GRAMMAR",
    unit: 5,
    unitName: "Art",
    topic: "5C Adjectives ending in -ed/-ing",
    prompt: "We were _____ by the singer's final performance.",
    options: [
      { key: "a", text: "amazing" },
      { key: "b", text: "amazed" },
      { key: "c", text: "amaze" }
    ],
    answer: "b",
    vietnameseExplanation: "Chúng tôi ('We') cảm thấy sửng sốt, thán phục -> dùng đuôi -ed (amazed by something).",
    collocationOrRule: "be amazed by",
    fullSentence: "We were amazed by the singer's final performance.",
    vietnameseTranslation: "Chúng tôi đã vô cùng kinh ngạc và thán phục trước màn trình diễn cuối cùng của ca sĩ."
  },

  // UNIT 6 - WHERE I'M FROM (103 - 116)
  {
    id: 103,
    code: "CÂU 103",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6B Present Perfect Continuous",
    prompt: "I _____ in this neighbourhood for nearly four years.",
    options: [
      { key: "a", text: "was living" },
      { key: "b", text: "am living" },
      { key: "c", text: "have been living" }
    ],
    answer: "c",
    vietnameseExplanation: "Hành động sống kéo dài từ quá khứ đến hiện tại với 'for nearly four years' -> dùng Present Perfect Continuous.",
    collocationOrRule: "have been + V-ing + for ...",
    fullSentence: "I have been living in this neighbourhood for nearly four years.",
    vietnameseTranslation: "Tôi đã sống ở khu dân cư này gần bốn năm nay."
  },
  {
    id: 104,
    code: "CÂU 104",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6B Present Perfect Continuous",
    prompt: "She _____ for the bus since eight o'clock.",
    options: [
      { key: "a", text: "has been waiting" },
      { key: "b", text: "waits" },
      { key: "c", text: "was waiting" }
    ],
    answer: "a",
    vietnameseExplanation: "Chủ ngữ ngôi thứ 3 số ít 'She' + hành động kéo dài liên tục từ mốc 'since eight o'clock' -> 'has been waiting'.",
    collocationOrRule: "has been + V-ing + since ...",
    fullSentence: "She has been waiting for the bus since eight o'clock.",
    vietnameseTranslation: "Cô ấy đã chờ xe buýt từ lúc tám giờ sáng đến tận bây giờ."
  },
  {
    id: 105,
    code: "CÂU 105",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6B Present Perfect Continuous",
    prompt: "How long _____ you _____ English online?",
    options: [
      { key: "a", text: "are / study" },
      { key: "b", text: "have / been studying" },
      { key: "c", text: "did / studying" }
    ],
    answer: "b",
    vietnameseExplanation: "Câu hỏi thời lượng 'How long + have + S + been + V-ing?'",
    collocationOrRule: "How long have you been V-ing?",
    fullSentence: "How long have you been studying English online?",
    vietnameseTranslation: "Bạn đã học tiếng Anh trực tuyến được bao lâu rồi?"
  },
  {
    id: 106,
    code: "CÂU 106",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6B Present Perfect Continuous",
    prompt: "My friends _____ a travel blog all morning.",
    options: [
      { key: "a", text: "wrote" },
      { key: "b", text: "are write" },
      { key: "c", text: "have been writing" }
    ],
    answer: "c",
    vietnameseExplanation: "Dấu hiệu 'all morning' nhấn mạnh tính liên tục suốt buổi sáng -> 'have been writing'.",
    collocationOrRule: "have been V-ing all morning",
    fullSentence: "My friends have been writing a travel blog all morning.",
    vietnameseTranslation: "Các bạn tôi đã cặm cụi viết blog du lịch suốt cả buổi sáng."
  },
  {
    id: 107,
    code: "CÂU 107",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6B Present Perfect Continuous (for/since)",
    prompt: "He has been working at the hostel _____ March.",
    options: [
      { key: "a", text: "since" },
      { key: "b", text: "during" },
      { key: "c", text: "for" }
    ],
    answer: "a",
    vietnameseExplanation: "'March' là mốc thời gian cụ thể trong quá khứ -> dùng giới từ 'since'.",
    collocationOrRule: "since + mốc thời gian",
    fullSentence: "He has been working at the hostel since March.",
    vietnameseTranslation: "Anh ấy đã làm việc tại nhà trọ từ tháng Ba."
  },
  {
    id: 108,
    code: "CÂU 108",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6B Present Perfect Continuous (for/since)",
    prompt: "We have been travelling _____ three weeks.",
    options: [
      { key: "a", text: "since" },
      { key: "b", text: "for" },
      { key: "c", text: "until" }
    ],
    answer: "b",
    vietnameseExplanation: "'three weeks' là khoảng thời gian -> dùng giới từ 'for'.",
    collocationOrRule: "for + khoảng thời gian",
    fullSentence: "We have been travelling for three weeks.",
    vietnameseTranslation: "Chúng tôi đã đi du lịch liên tục suốt ba tuần."
  },
  {
    id: 109,
    code: "CÂU 109",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6B Present Perfect Continuous (kết quả hiện tại)",
    prompt: "Why are your shoes wet? — I _____ in the rain.",
    options: [
      { key: "a", text: "walk every day" },
      { key: "b", text: "walked yesterday" },
      { key: "c", text: "have been walking" }
    ],
    answer: "c",
    vietnameseExplanation: "Hành động vừa diễn ra liên tục để lại dấu vết/kết quả rõ rệt ở hiện tại ('shoes are wet') -> 'have been walking'.",
    collocationOrRule: "Present Perfect Continuous for present evidence",
    fullSentence: "Why are your shoes wet? — I have been walking in the rain.",
    vietnameseTranslation: "Sao giày bạn ướt thế? — Tôi vừa đi bộ dưới mưa."
  },
  {
    id: 110,
    code: "CÂU 110",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6B Present Perfect Continuous",
    prompt: "They _____ a new shopping mall near our house recently.",
    options: [
      { key: "a", text: "have been building" },
      { key: "b", text: "will built" },
      { key: "c", text: "are build" }
    ],
    answer: "a",
    vietnameseExplanation: "Dấu hiệu 'recently' và hành động xây dựng đang diễn ra kéo dài -> 'have been building'.",
    collocationOrRule: "have been building recently",
    fullSentence: "They have been building a new shopping mall near our house recently.",
    vietnameseTranslation: "Gần đây họ đang tiến hành xây dựng một trung tâm thương mại mới gần nhà chúng tôi."
  },
  {
    id: 111,
    code: "CÂU 111",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6B Present Perfect Continuous (for/since)",
    prompt: "My sister has been practising the local language _____ she moved here.",
    options: [
      { key: "a", text: "in" },
      { key: "b", text: "since" },
      { key: "c", text: "for" }
    ],
    answer: "b",
    vietnameseExplanation: "'she moved here' là mệnh đề mốc thời gian quá khứ -> dùng 'since'.",
    collocationOrRule: "since + mệnh đề quá khứ đơn",
    fullSentence: "My sister has been practising the local language since she moved here.",
    vietnameseTranslation: "Chị tôi đã luyện tập ngôn ngữ địa phương kể từ khi chuyển đến đây sống."
  },
  {
    id: 112,
    code: "CÂU 112",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6C Describing Movement",
    prompt: "We walked _____ the tunnel and came out near the river.",
    options: [
      { key: "a", text: "over" },
      { key: "b", text: "towards" },
      { key: "c", text: "through" }
    ],
    answer: "c",
    vietnameseExplanation: "Đi xuyên qua đường hầm (không gian 3 chiều có điểm đầu và điểm cuối) -> dùng giới từ 'through'.",
    collocationOrRule: "walk through the tunnel",
    fullSentence: "We walked through the tunnel and came out near the river.",
    vietnameseTranslation: "Chúng tôi đi xuyên qua đường hầm và bước ra gần bờ sông."
  },
  {
    id: 113,
    code: "CÂU 113",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6C Describing Movement",
    prompt: "The children ran _____ the road at the crossing.",
    options: [
      { key: "a", text: "across" },
      { key: "b", text: "into" },
      { key: "c", text: "under" }
    ],
    answer: "a",
    vietnameseExplanation: "Chạy băng ngang qua bề mặt đường phố -> dùng 'across the road'.",
    collocationOrRule: "run across the road",
    fullSentence: "The children ran across the road at the crossing.",
    vietnameseTranslation: "Lũ trẻ chạy băng qua đường ở vạch sang đường."
  },
  {
    id: 114,
    code: "CÂU 114",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6C Describing Movement",
    prompt: "The cat jumped _____ the low wall and disappeared.",
    options: [
      { key: "a", text: "through" },
      { key: "b", text: "over" },
      { key: "c", text: "along" }
    ],
    answer: "b",
    vietnameseExplanation: "Nhảy vọt qua bên trên chướng ngại vật bức tường thấp -> dùng 'over the low wall'.",
    collocationOrRule: "jump over the wall",
    fullSentence: "The cat jumped over the low wall and disappeared.",
    vietnameseTranslation: "Con mèo nhảy vọt qua bức tường thấp rồi biến mất."
  },
  {
    id: 115,
    code: "CÂU 115",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6C Describing Movement (Manner Adverb)",
    prompt: "Please walk _____ on the stairs; the steps are wet.",
    options: [
      { key: "a", text: "care" },
      { key: "b", text: "careful" },
      { key: "c", text: "carefully" }
    ],
    answer: "c",
    vietnameseExplanation: "Bổ nghĩa cho động từ di chuyển 'walk' cần trạng từ chỉ cách thức có đuôi -ly -> 'carefully'.",
    collocationOrRule: "walk carefully",
    fullSentence: "Please walk carefully on the stairs; the steps are wet.",
    vietnameseTranslation: "Xin vui lòng bước đi cẩn thận trên cầu thang; các bậc đang ướt."
  },
  {
    id: 116,
    code: "CÂU 116",
    category: "GRAMMAR",
    unit: 6,
    unitName: "Where I'm from",
    topic: "6C Describing Movement (Manner Adverb)",
    prompt: "The guide spoke very _____ so everyone could understand.",
    options: [
      { key: "a", text: "clearly" },
      { key: "b", text: "clear" },
      { key: "c", text: "clarity" }
    ],
    answer: "a",
    vietnameseExplanation: "Bổ nghĩa cho động từ 'spoke' cần trạng từ 'clearly'.",
    collocationOrRule: "speak clearly",
    fullSentence: "The guide spoke very clearly so everyone could understand.",
    vietnameseTranslation: "Người hướng dẫn viên đã nói rất rõ ràng để mọi người đều có thể hiểu được."
  },

  // UNIT 7 - BALANCE (117 - 130)
  {
    id: 117,
    code: "CÂU 117",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7B Future Forms",
    prompt: "Look at those dark clouds. It _____ rain soon.",
    options: [
      { key: "a", text: "is raining yesterday" },
      { key: "b", text: "is going to" },
      { key: "c", text: "will be" }
    ],
    answer: "b",
    vietnameseExplanation: "Dự đoán tương lai có bằng chứng trước mắt ('dark clouds') -> dùng 'is going to rain'.",
    collocationOrRule: "be going to + V (evidence)",
    fullSentence: "Look at those dark clouds. It is going to rain soon.",
    vietnameseTranslation: "Nhìn những đám mây đen kìa. Trời sắp mưa rồi đấy."
  },
  {
    id: 118,
    code: "CÂU 118",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7B Future Forms",
    prompt: "We _____ our project mentor at 3 p.m. tomorrow; it's arranged.",
    options: [
      { key: "a", text: "meet yesterday" },
      { key: "b", text: "have meet" },
      { key: "c", text: "are meeting" }
    ],
    answer: "c",
    vietnameseExplanation: "Kế hoạch đã sắp xếp cố định về thời gian ('3 p.m. tomorrow; it's arranged') -> dùng thì Hiện tại tiếp diễn chỉ tương lai.",
    collocationOrRule: "Present Continuous for fixed arrangements",
    fullSentence: "We are meeting our project mentor at 3 p.m. tomorrow; it's arranged.",
    vietnameseTranslation: "Chúng tôi sẽ gặp người cố vấn dự án vào lúc 3 giờ chiều mai; lịch hẹn đã được sắp xếp."
  },
  {
    id: 119,
    code: "CÂU 119",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7B Future Forms",
    prompt: "I forgot my notebook. — Don't worry, I _____ you some paper.",
    options: [
      { key: "a", text: "will give" },
      { key: "b", text: "gave" },
      { key: "c", text: "am giving yesterday" }
    ],
    answer: "a",
    vietnameseExplanation: "Quyết định đưa ra ngay tại thời điểm nói để giúp đỡ -> dùng 'will give'.",
    collocationOrRule: "will + V for spontaneous decision",
    fullSentence: "I forgot my notebook. — Don't worry, I will give you some paper.",
    vietnameseTranslation: "Tôi quên mang theo vở rồi. — Đừng lo, tôi sẽ cho bạn vài tờ giấy."
  },
  {
    id: 120,
    code: "CÂU 120",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7B Future Forms",
    prompt: "She _____ travel abroad next summer; she's already booked the flights.",
    options: [
      { key: "a", text: "was" },
      { key: "b", text: "is going to" },
      { key: "c", text: "will be to" }
    ],
    answer: "b",
    vietnameseExplanation: "Dự định chắc chắn đã chuẩn bị trước ('already booked') -> 'is going to travel'.",
    collocationOrRule: "is going to + V",
    fullSentence: "She is going to travel abroad next summer; she's already booked the flights.",
    vietnameseTranslation: "Cô ấy định đi du lịch nước ngoài vào mùa hè tới; cô ấy đã đặt vé máy bay rồi."
  },
  {
    id: 121,
    code: "CÂU 121",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7B Future Forms",
    prompt: "We _____ the exam results until Friday.",
    options: [
      { key: "a", text: "won't be knew" },
      { key: "b", text: "aren't knowing" },
      { key: "c", text: "won't know" }
    ],
    answer: "c",
    vietnameseExplanation: "Động từ trạng thái 'know' không dùng tiếp diễn; phủ định tương lai đơn -> 'won't know'.",
    collocationOrRule: "won't know until ...",
    fullSentence: "We won't know the exam results until Friday.",
    vietnameseTranslation: "Chúng tôi sẽ không biết kết quả kỳ thi cho đến thứ Sáu."
  },
  {
    id: 122,
    code: "CÂU 122",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7B Future Forms",
    prompt: "They _____ dinner with the coach tonight; the table is reserved.",
    options: [
      { key: "a", text: "are having" },
      { key: "b", text: "were having yesterday" },
      { key: "c", text: "have been have" }
    ],
    answer: "a",
    vietnameseExplanation: "Bàn đã đặt trước ('the table is reserved') thể hiện lịch hẹn chắc chắn -> dùng Hiện tại tiếp diễn 'are having'.",
    collocationOrRule: "are having dinner tonight",
    fullSentence: "They are having dinner with the coach tonight; the table is reserved.",
    vietnameseTranslation: "Họ sẽ ăn tối với huấn luyện viên tối nay; bàn đã được đặt trước rồi."
  },
  {
    id: 123,
    code: "CÂU 123",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7B Future Forms (Promises)",
    prompt: "I promise I _____ tell anyone your secret.",
    options: [
      { key: "a", text: "wasn't" },
      { key: "b", text: "won't" },
      { key: "c", text: "don't" }
    ],
    answer: "b",
    vietnameseExplanation: "Lời hứa (promise) đi với 'will / won't': I promise I won't tell anyone.",
    collocationOrRule: "promise + will/won't",
    fullSentence: "I promise I won't tell anyone your secret.",
    vietnameseTranslation: "Tôi hứa tôi sẽ không kể cho bất kỳ ai nghe bí mật của bạn đâu."
  },
  {
    id: 124,
    code: "CÂU 124",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7C Verb Patterns (To-V)",
    prompt: "They decided _____ their work hours to spend more time with family.",
    options: [
      { key: "a", text: "reducing" },
      { key: "b", text: "reduce" },
      { key: "c", text: "to reduce" }
    ],
    answer: "c",
    vietnameseExplanation: "Động từ 'decide' luôn theo sau bởi To-Infinitive: decide to do something.",
    collocationOrRule: "decide to + V",
    fullSentence: "They decided to reduce their work hours to spend more time with family.",
    vietnameseTranslation: "Họ quyết định giảm bớt giờ làm để dành nhiều thời gian hơn cho gia đình."
  },
  {
    id: 125,
    code: "CÂU 125",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7C Verb Patterns (To-V)",
    prompt: "We arranged _____ at the library at nine.",
    options: [
      { key: "a", text: "to meet" },
      { key: "b", text: "meet" },
      { key: "c", text: "meeting" }
    ],
    answer: "a",
    vietnameseExplanation: "Động từ 'arrange' đi với To-Infinitive: arrange to do something.",
    collocationOrRule: "arrange to + V",
    fullSentence: "We arranged to meet at the library at nine.",
    vietnameseTranslation: "Chúng tôi đã sắp xếp hẹn gặp nhau ở thư viện lúc chín giờ."
  },
  {
    id: 126,
    code: "CÂU 126",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7C Verb Patterns (To-V)",
    prompt: "She hopes _____ a new skill this semester.",
    options: [
      { key: "a", text: "learning" },
      { key: "b", text: "to learn" },
      { key: "c", text: "learn" }
    ],
    answer: "b",
    vietnameseExplanation: "Động từ 'hope' đi với To-Infinitive: hope to do something.",
    collocationOrRule: "hope to + V",
    fullSentence: "She hopes to learn a new skill this semester.",
    vietnameseTranslation: "Cô ấy hy vọng sẽ học được một kỹ năng mới trong học kỳ này."
  },
  {
    id: 127,
    code: "CÂU 127",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7C Verb Patterns (V-ing)",
    prompt: "You should avoid _____ your phone during meetings.",
    options: [
      { key: "a", text: "check" },
      { key: "b", text: "to check" },
      { key: "c", text: "checking" }
    ],
    answer: "c",
    vietnameseExplanation: "Động từ 'avoid' luôn theo sau bởi danh động từ V-ing: avoid doing something.",
    collocationOrRule: "avoid + V-ing",
    fullSentence: "You should avoid checking your phone during meetings.",
    vietnameseTranslation: "Bạn nên tránh kiểm tra điện thoại trong các cuộc họp."
  },
  {
    id: 128,
    code: "CÂU 128",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7C Verb Patterns (V-ing)",
    prompt: "He suggested _____ a short break after lunch.",
    options: [
      { key: "a", text: "taking" },
      { key: "b", text: "to take" },
      { key: "c", text: "take" }
    ],
    answer: "a",
    vietnameseExplanation: "Động từ 'suggest' khi đi trực tiếp với động từ sẽ dùng dạng V-ing: suggest doing something.",
    collocationOrRule: "suggest + V-ing",
    fullSentence: "He suggested taking a short break after lunch.",
    vietnameseTranslation: "Anh ấy đề xuất nghỉ giải lao một lát sau bữa trưa."
  },
  {
    id: 129,
    code: "CÂU 129",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7C Verb Patterns (V-ing)",
    prompt: "I enjoy _____ time outdoors at the weekend.",
    options: [
      { key: "a", text: "spend" },
      { key: "b", text: "spending" },
      { key: "c", text: "to spending" }
    ],
    answer: "b",
    vietnameseExplanation: "Động từ 'enjoy' đi với V-ing: enjoy doing something.",
    collocationOrRule: "enjoy + V-ing",
    fullSentence: "I enjoy spending time outdoors at the weekend.",
    vietnameseTranslation: "Tôi thích dành thời gian ở ngoài trời vào dịp cuối tuần."
  },
  {
    id: 130,
    code: "CÂU 130",
    category: "GRAMMAR",
    unit: 7,
    unitName: "Balance",
    topic: "7C Verb Patterns (Remember)",
    prompt: "Remember _____ your passport before leaving for the airport.",
    options: [
      { key: "a", text: "checking" },
      { key: "b", text: "check" },
      { key: "c", text: "to check" }
    ],
    answer: "c",
    vietnameseExplanation: "Nhớ phải làm một bổn phận/hành động trong tương lai -> 'remember to check'. (Remember V-ing là nhớ đã làm gì trong quá khứ).",
    collocationOrRule: "remember to + V",
    fullSentence: "Remember to check your passport before leaving for the airport.",
    vietnameseTranslation: "Hãy nhớ kiểm tra hộ chiếu của bạn trước khi rời đi ra sân bay."
  },

  // UNIT 8 - ESSENTIALS (131 - 144)
  {
    id: 131,
    code: "CÂU 131",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8B Relative Clauses (Defining)",
    prompt: "The woman _____ works in the bakery is my neighbour.",
    options: [
      { key: "a", text: "who" },
      { key: "b", text: "whose" },
      { key: "c", text: "where" }
    ],
    answer: "a",
    vietnameseExplanation: "Bổ nghĩa cho danh từ chỉ người 'The woman' làm chủ ngữ của mệnh đề quan hệ -> dùng 'who'.",
    collocationOrRule: "Person + WHO + V",
    fullSentence: "The woman who works in the bakery is my neighbour.",
    vietnameseTranslation: "Người phụ nữ làm việc ở tiệm bánh là hàng xóm của tôi."
  },
  {
    id: 132,
    code: "CÂU 132",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8B Relative Clauses (Where)",
    prompt: "That's the café _____ we first met.",
    options: [
      { key: "a", text: "who" },
      { key: "b", text: "where" },
      { key: "c", text: "whose" }
    ],
    answer: "b",
    vietnameseExplanation: "Bổ nghĩa cho địa điểm nơi chốn 'the café' nơi diễn ra sự kiện 'we first met' -> dùng 'where'.",
    collocationOrRule: "Place + WHERE + S + V",
    fullSentence: "That's the café where we first met.",
    vietnameseTranslation: "Đó là quán cà phê nơi chúng tôi gặp nhau lần đầu tiên."
  },
  {
    id: 133,
    code: "CÂU 133",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8B Relative Clauses (That)",
    prompt: "I borrowed the book _____ you recommended.",
    options: [
      { key: "a", text: "whose" },
      { key: "b", text: "where" },
      { key: "c", text: "that" }
    ],
    answer: "c",
    vietnameseExplanation: "Bổ nghĩa cho đồ vật 'the book' làm tân ngữ trong mệnh đề xác định -> dùng 'that' (hoặc which).",
    collocationOrRule: "Thing + THAT/WHICH + S + V",
    fullSentence: "I borrowed the book that you recommended.",
    vietnameseTranslation: "Tôi đã mượn cuốn sách mà bạn đã giới thiệu."
  },
  {
    id: 134,
    code: "CÂU 134",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8B Relative Clauses (Whose)",
    prompt: "Do you know the student _____ bicycle was stolen?",
    options: [
      { key: "a", text: "whose" },
      { key: "b", text: "who" },
      { key: "c", text: "which" }
    ],
    answer: "a",
    vietnameseExplanation: "Chỉ mối quan hệ sở hữu: chiếc xe đạp của bạn sinh viên đó bị lấy cắp -> dùng 'whose + Noun'.",
    collocationOrRule: "WHOSE + Noun",
    fullSentence: "Do you know the student whose bicycle was stolen?",
    vietnameseTranslation: "Bạn có biết bạn sinh viên có chiếc xe đạp bị mất cắp không?"
  },
  {
    id: 135,
    code: "CÂU 135",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8B Relative Clauses (Which)",
    prompt: "The museum _____ opened last week is free today.",
    options: [
      { key: "a", text: "who" },
      { key: "b", text: "which" },
      { key: "c", text: "where" }
    ],
    answer: "b",
    vietnameseExplanation: "Bổ nghĩa cho 'The museum' làm chủ ngữ cho động từ 'opened' -> dùng 'which' (hoặc that). Không dùng 'where' vì sau đó là động từ.",
    collocationOrRule: "Thing + WHICH/THAT + V",
    fullSentence: "The museum which opened last week is free today.",
    vietnameseTranslation: "Bảo tàng đã mở cửa vào tuần trước hôm nay miễn phí vé vào cổng."
  },
  {
    id: 136,
    code: "CÂU 136",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8B Non-defining Relative Clauses",
    prompt: "My aunt, _____ lives in Hanoi, makes beautiful pottery.",
    options: [
      { key: "a", text: "that" },
      { key: "b", text: "where" },
      { key: "c", text: "who" }
    ],
    answer: "c",
    vietnameseExplanation: "Mệnh đề có dấu phẩy (không xác định) bổ nghĩa cho người 'My aunt' -> chỉ dùng 'who', TUYỆT ĐỐI không dùng 'that'.",
    collocationOrRule: "Name, WHO + V, ... (No 'that')",
    fullSentence: "My aunt, who lives in Hanoi, makes beautiful pottery.",
    vietnameseTranslation: "Dì của tôi, người đang sống ở Hà Nội, làm đồ gốm rất đẹp."
  },
  {
    id: 137,
    code: "CÂU 137",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8B Non-defining Relative Clauses",
    prompt: "The old market, _____ we visited yesterday, is closing soon.",
    options: [
      { key: "a", text: "which" },
      { key: "b", text: "where" },
      { key: "c", text: "that" }
    ],
    answer: "a",
    vietnameseExplanation: "Mệnh đề có dấu phẩy bổ nghĩa cho sự vật 'The old market' làm tân ngữ của 'visited' -> dùng 'which', không dùng 'that'. (Động từ visit đi trực tiếp với tân ngữ vật, không dùng where).",
    collocationOrRule: "Thing, WHICH + S + V, ...",
    fullSentence: "The old market, which we visited yesterday, is closing soon.",
    vietnameseTranslation: "Khu chợ cũ, nơi mà chúng tôi đã ghé thăm hôm qua, sắp sửa đóng cửa."
  },
  {
    id: 138,
    code: "CÂU 138",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8B Non-defining Relative Clauses",
    prompt: "My teacher, _____ husband is a musician, teaches art.",
    options: [
      { key: "a", text: "who" },
      { key: "b", text: "whose" },
      { key: "c", text: "which" }
    ],
    answer: "b",
    vietnameseExplanation: "Sở hữu trong mệnh đề không xác định: chồng của giáo viên tôi -> 'whose husband'.",
    collocationOrRule: "Person, WHOSE + Noun + V, ...",
    fullSentence: "My teacher, whose husband is a musician, teaches art.",
    vietnameseTranslation: "Giáo viên của tôi, người có chồng là một nhạc sĩ, dạy môn mỹ thuật."
  },
  {
    id: 139,
    code: "CÂU 139",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8C Comparatives (Adverbs)",
    prompt: "Could you speak _____? I can't hear you clearly.",
    options: [
      { key: "a", text: "loudlier" },
      { key: "b", text: "more louder" },
      { key: "c", text: "more loudly" }
    ],
    answer: "c",
    vietnameseExplanation: "Trạng từ đuôi -ly 'loudly' có dạng so sánh hơn là 'more loudly'. Không có từ 'loudlier' hay 'more louder'.",
    collocationOrRule: "more + adverb ending in -ly",
    fullSentence: "Could you speak more loudly? I can't hear you clearly.",
    vietnameseTranslation: "Bạn có thể nói to hơn một chút được không? Tôi không thể nghe rõ bạn."
  },
  {
    id: 140,
    code: "CÂU 140",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8C Comparatives (Short Adjectives)",
    prompt: "This meal is much _____ than the one we ate yesterday.",
    options: [
      { key: "a", text: "cheaper" },
      { key: "b", text: "cheap" },
      { key: "c", text: "cheapest" }
    ],
    answer: "a",
    vietnameseExplanation: "Tính từ ngắn 'cheap' so sánh hơn thêm -er -> 'cheaper'. 'much' là từ nhấn mạnh mức độ.",
    collocationOrRule: "much + comparative (-er)",
    fullSentence: "This meal is much cheaper than the one we ate yesterday.",
    vietnameseTranslation: "Bữa ăn này rẻ hơn rất nhiều so với bữa ăn chúng ta đã ăn hôm qua."
  },
  {
    id: 141,
    code: "CÂU 141",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8C Comparatives (Modifiers)",
    prompt: "The new park is _____ more peaceful than the old one.",
    options: [
      { key: "a", text: "more" },
      { key: "b", text: "a little" },
      { key: "c", text: "too" }
    ],
    answer: "b",
    vietnameseExplanation: "Từ bổ nghĩa mức độ cho so sánh hơn 'more peaceful': 'a little' (hơi hơi, một chút). Không dùng 'more more'.",
    collocationOrRule: "a little + more + Adj",
    fullSentence: "The new park is a little more peaceful than the old one.",
    vietnameseTranslation: "Công viên mới thì yên bình hơn công viên cũ một chút."
  },
  {
    id: 142,
    code: "CÂU 142",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8C Comparatives (Fast)",
    prompt: "My sister runs _____ than I do.",
    options: [
      { key: "a", text: "more fast" },
      { key: "b", text: "fastest" },
      { key: "c", text: "faster" }
    ],
    answer: "c",
    vietnameseExplanation: "'fast' vừa là tính từ vừa là trạng từ, dạng so sánh hơn là 'faster' (không dùng more fast).",
    collocationOrRule: "faster than",
    fullSentence: "My sister runs faster than I do.",
    vietnameseTranslation: "Chị gái tôi chạy nhanh hơn tôi."
  },
  {
    id: 143,
    code: "CÂU 143",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8C Equality (Not as...as)",
    prompt: "The soup isn't _____ my mother's soup.",
    options: [
      { key: "a", text: "as spicy as" },
      { key: "b", text: "as spicy" },
      { key: "c", text: "more spicy" }
    ],
    answer: "a",
    vietnameseExplanation: "So sánh không bằng: not as + Adj + as -> 'isn't as spicy as'.",
    collocationOrRule: "not as + Adj + as",
    fullSentence: "The soup isn't as spicy as my mother's soup.",
    vietnameseTranslation: "Món súp này không cay bằng món súp mẹ tôi nấu."
  },
  {
    id: 144,
    code: "CÂU 144",
    category: "GRAMMAR",
    unit: 8,
    unitName: "Essentials",
    topic: "8C Equality (As...as)",
    prompt: "This notebook is just _____ that one.",
    options: [
      { key: "a", text: "more useful" },
      { key: "b", text: "as useful as" },
      { key: "c", text: "useful than" }
    ],
    answer: "b",
    vietnameseExplanation: "Cấu trúc so sánh bằng: just as + Adj + as -> 'just as useful as'.",
    collocationOrRule: "just as + Adj + as",
    fullSentence: "This notebook is just as useful as that one.",
    vietnameseTranslation: "Cuốn sổ ghi chép này cũng hữu ích hệt như cuốn sổ kia."
  },

  // UNIT 9 - TAKING A BREAK (145 - 157)
  {
    id: 145,
    code: "CÂU 145",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9B Third Conditional",
    prompt: "If we _____ the tickets earlier, we would have got better seats.",
    options: [
      { key: "a", text: "would book" },
      { key: "b", text: "book" },
      { key: "c", text: "had booked" }
    ],
    answer: "c",
    vietnameseExplanation: "Vế If của điều kiện loại 3 dùng Quá khứ hoàn thành (had + V3) -> 'had booked'.",
    collocationOrRule: "If + S + had + V3, S + would have + V3",
    fullSentence: "If we had booked the tickets earlier, we would have got better seats.",
    vietnameseTranslation: "Nếu chúng tôi đặt vé sớm hơn, chúng tôi đã có được những chỗ ngồi tốt hơn."
  },
  {
    id: 146,
    code: "CÂU 146",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9B Third Conditional",
    prompt: "She wouldn't have missed the train if she _____ earlier.",
    options: [
      { key: "a", text: "had left" },
      { key: "b", text: "left" },
      { key: "c", text: "would leave" }
    ],
    answer: "a",
    vietnameseExplanation: "Vế If điều kiện loại 3: if she had left earlier.",
    collocationOrRule: "if + S + had + V3",
    fullSentence: "She wouldn't have missed the train if she had left earlier.",
    vietnameseTranslation: "Cô ấy đã không bị lỡ chuyến tàu nếu cô ấy rời đi sớm hơn."
  },
  {
    id: 147,
    code: "CÂU 147",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9B Third Conditional",
    prompt: "If I had checked the map, I _____ lost.",
    options: [
      { key: "a", text: "didn't get" },
      { key: "b", text: "wouldn't have got" },
      { key: "c", text: "won't get" }
    ],
    answer: "b",
    vietnameseExplanation: "Mệnh đề chính của điều kiện loại 3 thể phủ định: S + wouldn't have + V3 -> 'wouldn't have got'.",
    collocationOrRule: "S + wouldn't have + V3",
    fullSentence: "If I had checked the map, I wouldn't have got lost.",
    vietnameseTranslation: "Nếu tôi xem bản đồ, tôi đã không bị lạc đường."
  },
  {
    id: 148,
    code: "CÂU 148",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9B Third Conditional",
    prompt: "We _____ the deposit if we'd cancelled two days earlier.",
    options: [
      { key: "a", text: "will keep" },
      { key: "b", text: "kept" },
      { key: "c", text: "would have kept" }
    ],
    answer: "c",
    vietnameseExplanation: "Vế If có 'we'd cancelled' (had cancelled) -> vế chính dùng 'would have kept'.",
    collocationOrRule: "would have + V3",
    fullSentence: "We would have kept the deposit if we'd cancelled two days earlier.",
    vietnameseTranslation: "Chúng tôi đã giữ lại được tiền đặt cọc nếu chúng tôi hủy trước hai ngày."
  },
  {
    id: 149,
    code: "CÂU 149",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9B Third Conditional",
    prompt: "If the weather had been better, we _____ scuba diving.",
    options: [
      { key: "a", text: "could have gone" },
      { key: "b", text: "could go yesterday" },
      { key: "c", text: "can go" }
    ],
    answer: "a",
    vietnameseExplanation: "Diễn tả khả năng trong quá khứ ở điều kiện loại 3: could have + V3 -> 'could have gone'.",
    collocationOrRule: "could have + V3",
    fullSentence: "If the weather had been better, we could have gone scuba diving.",
    vietnameseTranslation: "Nếu thời tiết đẹp hơn, chúng tôi đã có thể đi lặn biển."
  },
  {
    id: 150,
    code: "CÂU 150",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9B Third Conditional",
    prompt: "If he _____ travel insurance, he might have paid more for treatment.",
    options: [
      { key: "a", text: "doesn't buy" },
      { key: "b", text: "hadn't bought" },
      { key: "c", text: "wouldn't buy" }
    ],
    answer: "b",
    vietnameseExplanation: "Vế If phủ định của điều kiện loại 3: hadn't + V3 -> 'hadn't bought'.",
    collocationOrRule: "if + S + hadn't + V3",
    fullSentence: "If he hadn't bought travel insurance, he might have paid more for treatment.",
    vietnameseTranslation: "Nếu anh ấy không mua bảo hiểm du lịch, có lẽ anh ấy đã phải trả nhiều tiền hơn cho việc điều trị."
  },
  {
    id: 151,
    code: "CÂU 151",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9B Third Conditional",
    prompt: "They would have arrived on time if their bus _____ down.",
    options: [
      { key: "a", text: "wouldn't break" },
      { key: "b", text: "doesn't break" },
      { key: "c", text: "hadn't broken" }
    ],
    answer: "c",
    vietnameseExplanation: "Vế If điều kiện loại 3: hadn't broken down (quá khứ phân từ của break là broken).",
    collocationOrRule: "hadn't + broken",
    fullSentence: "They would have arrived on time if their bus hadn't broken down.",
    vietnameseTranslation: "Họ đã đến đúng giờ nếu xe buýt của họ không bị hỏng giữa đường."
  },
  {
    id: 152,
    code: "CÂU 152",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9B Third Conditional",
    prompt: "If I _____ your message, I would have met you at the airport.",
    options: [
      { key: "a", text: "had seen" },
      { key: "b", text: "saw" },
      { key: "c", text: "would see" }
    ],
    answer: "a",
    vietnameseExplanation: "Vế If điều kiện loại 3: had + V3 -> 'had seen'.",
    collocationOrRule: "had seen",
    fullSentence: "If I had seen your message, I would have met you at the airport.",
    vietnameseTranslation: "Nếu tôi đã nhìn thấy tin nhắn của bạn, tôi đã ra đón bạn ở sân bay."
  },
  {
    id: 153,
    code: "CÂU 153",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9B Third Conditional",
    prompt: "We might have visited the museum if it _____ open.",
    options: [
      { key: "a", text: "would be" },
      { key: "b", text: "had been" },
      { key: "c", text: "has been" }
    ],
    answer: "b",
    vietnameseExplanation: "Vế If điều kiện loại 3 với động từ 'be': had + been -> 'had been'.",
    collocationOrRule: "had been",
    fullSentence: "We might have visited the museum if it had been open.",
    vietnameseTranslation: "Có lẽ chúng tôi đã ghé thăm bảo tàng nếu lúc đó nó mở cửa."
  },
  {
    id: 154,
    code: "CÂU 154",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9C Giving Advice (Should)",
    prompt: "You _____ take some water on the walking tour.",
    options: [
      { key: "a", text: "might to" },
      { key: "b", text: "should to" },
      { key: "c", text: "should" }
    ],
    answer: "c",
    vietnameseExplanation: "Đưa ra lời khuyên: 'should + V nguyên mẫu' (không có to) -> 'should take'.",
    collocationOrRule: "should + V",
    fullSentence: "You should take some water on the walking tour.",
    vietnameseTranslation: "Bạn nên mang theo một ít nước trong chuyến tham quan đi bộ."
  },
  {
    id: 155,
    code: "CÂU 155",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9C Giving Advice (Ought to)",
    prompt: "You ought _____ the local rules before you travel.",
    options: [
      { key: "a", text: "to check" },
      { key: "b", text: "check" },
      { key: "c", text: "checking" }
    ],
    answer: "a",
    vietnameseExplanation: "'ought' luôn đi kèm với 'to + V' để đưa ra lời khuyên -> 'ought to check'.",
    collocationOrRule: "ought to + V",
    fullSentence: "You ought to check the local rules before you travel.",
    vietnameseTranslation: "Bạn nên kiểm tra các quy định địa phương trước khi bạn đi du lịch."
  },
  {
    id: 156,
    code: "CÂU 156",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9C Giving Advice (If I were you)",
    prompt: "If I were you, I _____ the hotel before paying.",
    options: [
      { key: "a", text: "will contacted" },
      { key: "b", text: "would contact" },
      { key: "c", text: "contacted" }
    ],
    answer: "b",
    vietnameseExplanation: "Cấu trúc khuyên nhủ giả định: 'If I were you, I would + V' -> 'would contact'.",
    collocationOrRule: "If I were you, I would + V",
    fullSentence: "If I were you, I would contact the hotel before paying.",
    vietnameseTranslation: "Nếu tôi là bạn, tôi sẽ liên hệ với khách sạn trước khi thanh toán."
  },
  {
    id: 157,
    code: "CÂU 157",
    category: "GRAMMAR",
    unit: 9,
    unitName: "Taking a break",
    topic: "9C Giving Advice (Suggest)",
    prompt: "Our guide suggested _____ a taxi to the station.",
    options: [
      { key: "a", text: "take" },
      { key: "b", text: "to taking" },
      { key: "c", text: "taking" }
    ],
    answer: "c",
    vietnameseExplanation: "Cấu trúc đề xuất gợi ý: 'suggest + V-ing' -> 'suggested taking'.",
    collocationOrRule: "suggest + V-ing",
    fullSentence: "Our guide suggested taking a taxi to the station.",
    vietnameseTranslation: "Người hướng dẫn viên của chúng tôi đã gợi ý nên bắt taxi đến nhà ga."
  },

  // UNIT 10 - THE SENSES (158 - 170)
  {
    id: 158,
    code: "CÂU 158",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10B Passives (Past Simple)",
    prompt: "The first telephone _____ in the nineteenth century.",
    options: [
      { key: "a", text: "was invented" },
      { key: "b", text: "invented" },
      { key: "c", text: "has invent" }
    ],
    answer: "a",
    vietnameseExplanation: "Bị động quá khứ đơn (mốc 'in the 19th century'): was/were + V3 -> 'was invented'.",
    collocationOrRule: "was + invented",
    fullSentence: "The first telephone was invented in the nineteenth century.",
    vietnameseTranslation: "Chiếc điện thoại đầu tiên đã được phát minh vào thế kỷ XIX."
  },
  {
    id: 159,
    code: "CÂU 159",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10B Passives (Present Simple)",
    prompt: "This technology _____ by thousands of students every day.",
    options: [
      { key: "a", text: "used" },
      { key: "b", text: "is used" },
      { key: "c", text: "uses" }
    ],
    answer: "b",
    vietnameseExplanation: "Bị động hiện tại đơn ('every day'): is/are + V3 -> 'is used by'.",
    collocationOrRule: "is used by",
    fullSentence: "This technology is used by thousands of students every day.",
    vietnameseTranslation: "Công nghệ này được sử dụng bởi hàng ngàn học sinh sinh viên mỗi ngày."
  },
  {
    id: 160,
    code: "CÂU 160",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10B Passives (Future Simple)",
    prompt: "The new app _____ next month.",
    options: [
      { key: "a", text: "will launch by" },
      { key: "b", text: "will be launch" },
      { key: "c", text: "will be launched" }
    ],
    answer: "c",
    vietnameseExplanation: "Bị động tương lai đơn: will be + V3/ed -> 'will be launched'.",
    collocationOrRule: "will be + launched",
    fullSentence: "The new app will be launched next month.",
    vietnameseTranslation: "Ứng dụng mới sẽ được ra mắt vào tháng tới."
  },
  {
    id: 161,
    code: "CÂU 161",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10B Passives (Present Continuous)",
    prompt: "The equipment _____ at the moment, so the lab is closed.",
    options: [
      { key: "a", text: "is being repaired" },
      { key: "b", text: "has repairing" },
      { key: "c", text: "is repaired yesterday" }
    ],
    answer: "a",
    vietnameseExplanation: "Bị động thì hiện tại tiếp diễn ('at the moment'): am/is/are + BEING + V3 -> 'is being repaired'.",
    collocationOrRule: "is being + repaired",
    fullSentence: "The equipment is being repaired at the moment, so the lab is closed.",
    vietnameseTranslation: "Thiết bị hiện đang được sửa chữa lúc này, vì vậy phòng thí nghiệm tạm thời đóng cửa."
  },
  {
    id: 162,
    code: "CÂU 162",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10B Passives (Past Simple)",
    prompt: "A new bridge _____ near the city last year.",
    options: [
      { key: "a", text: "is building" },
      { key: "b", text: "was built" },
      { key: "c", text: "builds" }
    ],
    answer: "b",
    vietnameseExplanation: "Bị động quá khứ đơn ('last year'): was built.",
    collocationOrRule: "was + built",
    fullSentence: "A new bridge was built near the city last year.",
    vietnameseTranslation: "Một cây cầu mới đã được xây dựng gần thành phố vào năm ngoái."
  },
  {
    id: 163,
    code: "CÂU 163",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10B Passives (Present Perfect)",
    prompt: "The results _____ already _____ by the researchers.",
    options: [
      { key: "a", text: "were / check" },
      { key: "b", text: "are / checking" },
      { key: "c", text: "have / been checked" }
    ],
    answer: "c",
    vietnameseExplanation: "Bị động thì hiện tại hoàn thành ('already'): have/has + BEEN + V3 -> 'have been checked'.",
    collocationOrRule: "have already been checked",
    fullSentence: "The results have already been checked by the researchers.",
    vietnameseTranslation: "Kết quả đã được các nhà nghiên cứu kiểm tra xong."
  },
  {
    id: 164,
    code: "CÂU 164",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10B Passives (Present Perfect)",
    prompt: "The museum's website _____ several times since 2020.",
    options: [
      { key: "a", text: "has been updated" },
      { key: "b", text: "has updated by" },
      { key: "c", text: "was updating" }
    ],
    answer: "a",
    vietnameseExplanation: "Bị động hiện tại hoàn thành với 'since 2020': has been + V3 -> 'has been updated'.",
    collocationOrRule: "has been updated",
    fullSentence: "The museum's website has been updated several times since 2020.",
    vietnameseTranslation: "Trang web của bảo tàng đã được cập nhật nhiều lần kể từ năm 2020."
  },
  {
    id: 165,
    code: "CÂU 165",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10B Passives (Past Continuous)",
    prompt: "The song _____ by the young musician when I arrived.",
    options: [
      { key: "a", text: "is record" },
      { key: "b", text: "was being recorded" },
      { key: "c", text: "recorded" }
    ],
    answer: "b",
    vietnameseExplanation: "Hành động đang được thực hiện trong quá khứ khi hành động khác xen vào ('when I arrived'): was/were + being + V3 -> 'was being recorded'.",
    collocationOrRule: "was being recorded",
    fullSentence: "The song was being recorded by the young musician when I arrived.",
    vietnameseTranslation: "Bài hát đang được nhạc sĩ trẻ thu âm khi tôi đến."
  },
  {
    id: 166,
    code: "CÂU 166",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10C Making Predictions (Modal verbs)",
    prompt: "Scientists think this device _____ help people with poor eyesight one day.",
    options: [
      { key: "a", text: "might to" },
      { key: "b", text: "may be to" },
      { key: "c", text: "might" }
    ],
    answer: "c",
    vietnameseExplanation: "Động từ khuyết thiếu 'might' biểu thị khả năng trong tương lai + động từ nguyên mẫu không to 'help'.",
    collocationOrRule: "might + V",
    fullSentence: "Scientists think this device might help people with poor eyesight one day.",
    vietnameseTranslation: "Các nhà khoa học nghĩ rằng thiết bị này có thể giúp đỡ những người có thị lực kém vào một ngày nào đó."
  },
  {
    id: 167,
    code: "CÂU 167",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10C Making Predictions (Certainty)",
    prompt: "I'm certain the exhibition _____ be popular next month.",
    options: [
      { key: "a", text: "will" },
      { key: "b", text: "was to" },
      { key: "c", text: "might to" }
    ],
    answer: "a",
    vietnameseExplanation: "Biểu đạt sự chắc chắn ('I'm certain') về tương lai ('next month') -> dùng 'will'.",
    collocationOrRule: "certain + will + V",
    fullSentence: "I'm certain the exhibition will be popular next month.",
    vietnameseTranslation: "Tôi chắc chắn rằng buổi triển lãm sẽ rất thu hút và nổi tiếng vào tháng tới."
  },
  {
    id: 168,
    code: "CÂU 168",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10C Making Predictions (Adjectives of probability)",
    prompt: "It is _____ that people will stop using all technology next year.",
    options: [
      { key: "a", text: "certainly" },
      { key: "b", text: "unlikely" },
      { key: "c", text: "might" }
    ],
    answer: "b",
    vietnameseExplanation: "Cấu trúc: It is + Adjective + that clause. 'unlikely' (khó có khả năng xảy ra) là tính từ phù hợp ngữ nghĩa.",
    collocationOrRule: "It is unlikely that...",
    fullSentence: "It is unlikely that people will stop using all technology next year.",
    vietnameseTranslation: "Rất khó có khả năng là mọi người sẽ ngừng sử dụng mọi công nghệ vào năm tới."
  },
  {
    id: 169,
    code: "CÂU 169",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10C Making Predictions (Could)",
    prompt: "New tools _____ make it easier to learn languages in the future.",
    options: [
      { key: "a", text: "could be to" },
      { key: "b", text: "could to" },
      { key: "c", text: "could" }
    ],
    answer: "c",
    vietnameseExplanation: "'could' + V nguyên mẫu biểu đạt khả năng có thể xảy ra trong tương lai -> 'could make'.",
    collocationOrRule: "could + V",
    fullSentence: "New tools could make it easier to learn languages in the future.",
    vietnameseTranslation: "Các công cụ mới có thể khiến việc học ngôn ngữ trở nên dễ dàng hơn trong tương lai."
  },
  {
    id: 170,
    code: "CÂU 170",
    category: "GRAMMAR",
    unit: 10,
    unitName: "The senses",
    topic: "10C Making Predictions (Likely)",
    prompt: "It's _____ that more people will use virtual reality in schools.",
    options: [
      { key: "a", text: "likely" },
      { key: "b", text: "might" },
      { key: "c", text: "will" }
    ],
    answer: "a",
    vietnameseExplanation: "Cấu trúc: It's + likely + that + clause (Có khả năng cao là...).",
    collocationOrRule: "It is likely that...",
    fullSentence: "It's likely that more people will use virtual reality in schools.",
    vietnameseTranslation: "Rất có thể sẽ có nhiều người sử dụng công nghệ thực tế ảo hơn trong các trường học."
  }
];
