export type OptionKey = 'a' | 'b' | 'c' | 'd' | 'e';

export interface QuestionItem {
  id: number;
  code: string;
  category: 'VOCAB' | 'GRAMMAR' | 'READING';
  unit: number;
  unitName: string;
  topic?: string;
  prompt: string;
  options: {
    key: OptionKey;
    text: string;
  }[];
  answer: OptionKey;
  vietnameseExplanation: string;
  collocationOrRule?: string;
  fullSentence: string;
  vietnameseTranslation: string;
}

export const VOCAB_QUESTIONS: QuestionItem[] = [
  // UNIT 5 - ART (001 - 015)
  {
    id: 1,
    code: "CÂU 001",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "Our teacher asked us to _____ the colours and ideas in the painting.",
    options: [
      { key: "a", text: "clarify" },
      { key: "b", text: "grab" },
      { key: "c", text: "analyse" }
    ],
    answer: "c",
    vietnameseExplanation: "Ngữ cảnh cần ý 'phân tích' màu sắc và ý tưởng của bức tranh. 'analyse' (phân tích) là từ chính xác nhất.",
    collocationOrRule: "analyse a painting",
    fullSentence: "Our teacher asked us to analyse the colours and ideas in the painting.",
    vietnameseTranslation: "Giáo viên yêu cầu chúng tôi phân tích màu sắc và ý tưởng của bức tranh."
  },
  {
    id: 2,
    code: "CÂU 002",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The painter stretched a white _____ over a wooden frame.",
    options: [
      { key: "a", text: "canvas" },
      { key: "b", text: "comic" },
      { key: "c", text: "cereal box" }
    ],
    answer: "a",
    vietnameseExplanation: "Họa sĩ căng tấm 'vải toan' (canvas) trắng lên khung gỗ để chuẩn bị vẽ tranh.",
    collocationOrRule: "paint on canvas",
    fullSentence: "The painter stretched a white canvas over a wooden frame.",
    vietnameseTranslation: "Họa sĩ căng tấm vải toan trắng lên khung gỗ."
  },
  {
    id: 3,
    code: "CÂU 003",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The graphic designer sent three logo ideas to the _____.",
    options: [
      { key: "a", text: "manga" },
      { key: "b", text: "client" },
      { key: "c", text: "choir" }
    ],
    answer: "b",
    vietnameseExplanation: "Nhà thiết kế đồ họa gửi ý tưởng logo cho 'khách hàng' (client) của mình.",
    collocationOrRule: "meet a client",
    fullSentence: "The graphic designer sent three logo ideas to the client.",
    vietnameseTranslation: "Nhà thiết kế đồ họa gửi ba ý tưởng logo cho khách hàng."
  },
  {
    id: 4,
    code: "CÂU 004",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The exhibition is _____ about the history of street photography.",
    options: [
      { key: "a", text: "bare" },
      { key: "b", text: "stunning" },
      { key: "c", text: "primarily" }
    ],
    answer: "c",
    vietnameseExplanation: "Cần một trạng từ mang nghĩa 'chủ yếu' (primarily) để bổ nghĩa cho 'about the history'.",
    collocationOrRule: "primarily interested in / primarily about",
    fullSentence: "The exhibition is primarily about the history of street photography.",
    vietnameseTranslation: "Triển lãm chủ yếu nói về lịch sử nhiếp ảnh đường phố."
  },
  {
    id: 5,
    code: "CÂU 005",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The story helped me _____ with the main character.",
    options: [
      { key: "a", text: "make a connection" },
      { key: "b", text: "grab" },
      { key: "c", text: "high art" }
    ],
    answer: "a",
    vietnameseExplanation: "Cụm từ 'make a connection with someone' có nghĩa là tạo sự gắn kết, thấu hiểu và đồng cảm với ai.",
    collocationOrRule: "make a connection with",
    fullSentence: "The story helped me make a connection with the main character.",
    vietnameseTranslation: "Câu chuyện giúp tôi tạo sự kết nối với nhân vật chính."
  },
  {
    id: 6,
    code: "CÂU 006",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The photographs show the _____ of mobile phones over thirty years.",
    options: [
      { key: "a", text: "performance" },
      { key: "b", text: "evolution" },
      { key: "c", text: "carnival" }
    ],
    answer: "b",
    vietnameseExplanation: "Quá trình phát triển, tiến hóa qua 30 năm của điện thoại di động dùng danh từ 'evolution'.",
    collocationOrRule: "the evolution of art/technology",
    fullSentence: "The photographs show the evolution of mobile phones over thirty years.",
    vietnameseTranslation: "Các bức ảnh cho thấy quá trình phát triển của điện thoại di động trong ba mươi năm."
  },
  {
    id: 7,
    code: "CÂU 007",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The gallery's walls looked _____ before the paintings arrived.",
    options: [
      { key: "a", text: "contemporary" },
      { key: "b", text: "fascinating" },
      { key: "c", text: "bare" }
    ],
    answer: "c",
    vietnameseExplanation: "Bức tường phòng tranh trống trơn, chưa treo gì thì dùng tính từ 'bare' (a bare wall).",
    collocationOrRule: "a bare wall",
    fullSentence: "The gallery's walls looked bare before the paintings arrived.",
    vietnameseTranslation: "Những bức tường phòng trưng bày trống trơn trước khi tranh được mang tới."
  },
  {
    id: 8,
    code: "CÂU 008",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "Fifteen students sang together in the school _____.",
    options: [
      { key: "a", text: "choir" },
      { key: "b", text: "thriller" },
      { key: "c", text: "canvas" }
    ],
    answer: "a",
    vietnameseExplanation: "15 học sinh hát cùng nhau trong 'dàn hợp xướng' của trường -> 'choir'.",
    collocationOrRule: "sing in a choir",
    fullSentence: "Fifteen students sang together in the school choir.",
    vietnameseTranslation: "Mười lăm học sinh hát cùng nhau trong dàn hợp xướng của trường."
  },
  {
    id: 9,
    code: "CÂU 009",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The detective story was a _____ full of danger and surprises.",
    options: [
      { key: "a", text: "donation" },
      { key: "b", text: "thriller" },
      { key: "c", text: "cartoon" }
    ],
    answer: "b",
    vietnameseExplanation: "Tác phẩm/phim trinh thám đầy kịch tính, bất ngờ và nguy hiểm gọi là 'thriller' (truyện/phim giật gân).",
    collocationOrRule: "a crime thriller",
    fullSentence: "The detective story was a thriller full of danger and surprises.",
    vietnameseTranslation: "Truyện trinh thám là một tác phẩm giật gân đầy nguy hiểm và bất ngờ."
  },
  {
    id: 10,
    code: "CÂU 010",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The museum has a new exhibition of _____ art made this year.",
    options: [
      { key: "a", text: "magic" },
      { key: "b", text: "cereal box" },
      { key: "c", text: "contemporary" }
    ],
    answer: "c",
    vietnameseExplanation: "Nghệ thuật đương đại, hiện đại sáng tác năm nay là 'contemporary art'.",
    collocationOrRule: "contemporary art",
    fullSentence: "The museum has a new exhibition of contemporary art made this year.",
    vietnameseTranslation: "Bảo tàng có triển lãm mới về nghệ thuật đương đại sáng tác năm nay."
  },
  {
    id: 11,
    code: "CÂU 011",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "There were colourful costumes and dancers at the street _____.",
    options: [
      { key: "a", text: "carnival" },
      { key: "b", text: "print" },
      { key: "c", text: "client" }
    ],
    answer: "a",
    vietnameseExplanation: "Trang phục rực rỡ và vũ công trong lễ hội đường phố -> 'carnival'.",
    collocationOrRule: "street carnival",
    fullSentence: "There were colourful costumes and dancers at the street carnival.",
    vietnameseTranslation: "Có trang phục sặc sỡ và vũ công tại lễ hội đường phố."
  },
  {
    id: 12,
    code: "CÂU 012",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "Could you _____ what you mean by the final sentence?",
    options: [
      { key: "a", text: "analyse" },
      { key: "b", text: "clarify" },
      { key: "c", text: "grab" }
    ],
    answer: "b",
    vietnameseExplanation: "Đề nghị giải thích rõ hơn, làm sáng tỏ ý nghĩa của câu -> 'clarify'.",
    collocationOrRule: "clarify the question / meaning",
    fullSentence: "Could you clarify what you mean by the final sentence?",
    vietnameseTranslation: "Bạn có thể giải thích rõ ý câu cuối được không?"
  },
  {
    id: 13,
    code: "CÂU 013",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The dancers' final movement was absolutely _____.",
    options: [
      { key: "a", text: "primarily" },
      { key: "b", text: "bare" },
      { key: "c", text: "stunning" }
    ],
    answer: "c",
    vietnameseExplanation: "Động tác tuyệt đẹp, gây ấn tượng mạnh mẽ -> 'absolutely stunning'.",
    collocationOrRule: "absolutely stunning",
    fullSentence: "The dancers' final movement was absolutely stunning.",
    vietnameseTranslation: "Động tác cuối của các vũ công thật tuyệt đẹp."
  },
  {
    id: 14,
    code: "CÂU 014",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "The gallery accepted a small _____ to help young artists.",
    options: [
      { key: "a", text: "donation" },
      { key: "b", text: "evolution" },
      { key: "c", text: "thriller" }
    ],
    answer: "a",
    vietnameseExplanation: "Phòng trưng bày nhận một 'khoản quyên góp' nhỏ -> 'donation'.",
    collocationOrRule: "make / accept a donation",
    fullSentence: "The gallery accepted a small donation to help young artists.",
    vietnameseTranslation: "Phòng tranh nhận khoản quyên góp nhỏ để giúp nghệ sĩ trẻ."
  },
  {
    id: 15,
    code: "CÂU 015",
    category: "VOCAB",
    unit: 5,
    unitName: "Art",
    prompt: "I found the documentary about ancient paintings _____.",
    options: [
      { key: "a", text: "contemporary" },
      { key: "b", text: "fascinating" },
      { key: "c", text: "client" }
    ],
    answer: "b",
    vietnameseExplanation: "Bộ phim tài liệu cực kỳ lôi cuốn, thú vị -> 'fascinating'.",
    collocationOrRule: "a fascinating story / find something fascinating",
    fullSentence: "I found the documentary about ancient paintings fascinating.",
    vietnameseTranslation: "Tôi thấy phim tài liệu về những bức tranh cổ cực kỳ thú vị."
  },

  // UNIT 6 - WHERE I'M FROM (016 - 030)
  {
    id: 16,
    code: "CÂU 016",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "A _____ uses circles of different sizes to compare groups.",
    options: [
      { key: "a", text: "hostel" },
      { key: "b", text: "monument" },
      { key: "c", text: "bubble chart" }
    ],
    answer: "c",
    vietnameseExplanation: "Loại biểu đồ dùng các vòng tròn kích thước khác nhau để so sánh các nhóm -> 'bubble chart' (biểu đồ bong bóng).",
    collocationOrRule: "create a bubble chart",
    fullSentence: "A bubble chart uses circles of different sizes to compare groups.",
    vietnameseTranslation: "Biểu đồ bong bóng dùng các vòng tròn có kích cỡ khác nhau để so sánh nhóm."
  },
  {
    id: 17,
    code: "CÂU 017",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "Millions of people work and travel every day in this huge _____.",
    options: [
      { key: "a", text: "metropolis" },
      { key: "b", text: "suburb" },
      { key: "c", text: "stall" }
    ],
    answer: "a",
    vietnameseExplanation: "Thành phố cực lớn, siêu đô thị nơi hàng triệu người sinh sống và làm việc -> 'metropolis'.",
    collocationOrRule: "a busy metropolis",
    fullSentence: "Millions of people work and travel every day in this huge metropolis.",
    vietnameseTranslation: "Hàng triệu người làm việc và di chuyển mỗi ngày trong đô thị lớn này."
  },
  {
    id: 18,
    code: "CÂU 018",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "We're having a family _____ to celebrate our grandparents' anniversary.",
    options: [
      { key: "a", text: "harbour" },
      { key: "b", text: "gathering" },
      { key: "c", text: "welfare" }
    ],
    answer: "b",
    vietnameseExplanation: "Buổi sum họp gia đình, tụ họp đông đủ người thân -> 'family gathering'.",
    collocationOrRule: "family gathering",
    fullSentence: "We're having a family gathering to celebrate our grandparents' anniversary.",
    vietnameseTranslation: "Chúng tôi tổ chức buổi họp mặt gia đình để kỷ niệm ngày cưới ông bà."
  },
  {
    id: 19,
    code: "CÂU 019",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "Her work contract is _____; it ends after six weeks.",
    options: [
      { key: "a", text: "chilli" },
      { key: "b", text: "historic monument" },
      { key: "c", text: "temporary" }
    ],
    answer: "c",
    vietnameseExplanation: "Hợp đồng kéo dài 6 tuần là hợp đồng tạm thời, ngắn hạn -> 'temporary'.",
    collocationOrRule: "a temporary job / contract",
    fullSentence: "Her work contract is temporary; it ends after six weeks.",
    vietnameseTranslation: "Hợp đồng công việc của cô ấy chỉ tạm thời và kết thúc sau sáu tuần."
  },
  {
    id: 20,
    code: "CÂU 020",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "Doctors will _____ the injured cyclist at the local hospital.",
    options: [
      { key: "a", text: "treat" },
      { key: "b", text: "look up" },
      { key: "c", text: "live by myself" }
    ],
    answer: "a",
    vietnameseExplanation: "Bác sĩ 'điều trị' (treat) cho người bị thương tại bệnh viện.",
    collocationOrRule: "treat somebody for an injury",
    fullSentence: "Doctors will treat the injured cyclist at the local hospital.",
    vietnameseTranslation: "Các bác sĩ sẽ điều trị cho người đạp xe bị thương tại bệnh viện địa phương."
  },
  {
    id: 21,
    code: "CÂU 021",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "The family needed government _____ after both parents lost their jobs.",
    options: [
      { key: "a", text: "backpacker" },
      { key: "b", text: "welfare" },
      { key: "c", text: "hostel" }
    ],
    answer: "b",
    vietnameseExplanation: "Cần sự trợ cấp xã hội, phúc lợi chính phủ khi mất việc -> 'government welfare'.",
    collocationOrRule: "welfare payments / need welfare",
    fullSentence: "The family needed government welfare after both parents lost their jobs.",
    vietnameseTranslation: "Gia đình cần trợ cấp nhà nước sau khi cả bố và mẹ mất việc."
  },
  {
    id: 22,
    code: "CÂU 022",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "Friendly neighbours made me _____ in my new town.",
    options: [
      { key: "a", text: "make sense" },
      { key: "b", text: "put into practice" },
      { key: "c", text: "feel at home" }
    ],
    answer: "c",
    vietnameseExplanation: "Hàng xóm thân thiện khiến tôi cảm thấy thoải mái như ở nhà -> 'feel at home'.",
    collocationOrRule: "feel at home in",
    fullSentence: "Friendly neighbours made me feel at home in my new town.",
    vietnameseTranslation: "Hàng xóm thân thiện khiến tôi thấy thoải mái như ở nhà tại thị trấn mới."
  },
  {
    id: 23,
    code: "CÂU 023",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "The training taught us safety rules; now we must _____ what we learnt.",
    options: [
      { key: "a", text: "put into practice" },
      { key: "b", text: "live by myself" },
      { key: "c", text: "feel at home" }
    ],
    answer: "a",
    vietnameseExplanation: "Áp dụng những gì đã học vào thực tế -> 'put into practice'.",
    collocationOrRule: "put skills / knowledge into practice",
    fullSentence: "The training taught us safety rules; now we must put into practice what we learnt.",
    vietnameseTranslation: "Khóa đào tạo dạy quy tắc an toàn; giờ chúng tôi phải áp dụng điều đã học."
  },
  {
    id: 24,
    code: "CÂU 024",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "They moved from the city centre to a quiet _____ outside town.",
    options: [
      { key: "a", text: "metropolis" },
      { key: "b", text: "suburb" },
      { key: "c", text: "shopping mall" }
    ],
    answer: "b",
    vietnameseExplanation: "Chuyển từ trung tâm thành phố ra vùng ngoại ô yên bình ngoài thị trấn -> 'suburb'.",
    collocationOrRule: "live in a suburb",
    fullSentence: "They moved from the city centre to a quiet suburb outside town.",
    vietnameseTranslation: "Họ chuyển từ trung tâm thành phố đến ngoại ô yên tĩnh."
  },
  {
    id: 25,
    code: "CÂU 025",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "Several fishing boats were tied up in the _____.",
    options: [
      { key: "a", text: "chain store" },
      { key: "b", text: "monument" },
      { key: "c", text: "harbour" }
    ],
    answer: "c",
    vietnameseExplanation: "Thuyền đánh cá neo đậu ở cảng tàu, bến cảng -> 'harbour'.",
    collocationOrRule: "a busy harbour",
    fullSentence: "Several fishing boats were tied up in the harbour.",
    vietnameseTranslation: "Một vài thuyền đánh cá đang neo tại cảng."
  },
  {
    id: 26,
    code: "CÂU 026",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "The students shared a room in a cheap youth _____.",
    options: [
      { key: "a", text: "hostel" },
      { key: "b", text: "roof terrace" },
      { key: "c", text: "stall" }
    ],
    answer: "a",
    vietnameseExplanation: "Sinh viên ở chung phòng tại nhà trọ thanh niên giá rẻ -> 'youth hostel'.",
    collocationOrRule: "stay in a hostel",
    fullSentence: "The students shared a room in a cheap youth hostel.",
    vietnameseTranslation: "Các sinh viên ở chung phòng tại nhà trọ thanh niên giá rẻ."
  },
  {
    id: 27,
    code: "CÂU 027",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "A stone _____ was built to remember the rescue workers.",
    options: [
      { key: "a", text: "backpacker" },
      { key: "b", text: "monument" },
      { key: "c", text: "bubble chart" }
    ],
    answer: "b",
    vietnameseExplanation: "Công trình đài tưởng niệm bằng đá được xây dựng để tưởng nhớ -> 'stone monument'.",
    collocationOrRule: "a historic monument",
    fullSentence: "A stone monument was built to remember the rescue workers.",
    vietnameseTranslation: "Một đài tưởng niệm bằng đá được xây để ghi nhớ những nhân viên cứu hộ."
  },
  {
    id: 28,
    code: "CÂU 028",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "At the market, we bought mangoes from a small fruit _____.",
    options: [
      { key: "a", text: "harbour" },
      { key: "b", text: "gathering" },
      { key: "c", text: "stall" }
    ],
    answer: "c",
    vietnameseExplanation: "Mua trái cây ở quầy hàng tại chợ -> 'market stall' / 'fruit stall'.",
    collocationOrRule: "a market stall",
    fullSentence: "At the market, we bought mangoes from a small fruit stall.",
    vietnameseTranslation: "Tại chợ, chúng tôi mua xoài ở một quầy trái cây nhỏ."
  },
  {
    id: 29,
    code: "CÂU 029",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "After a long morning of sightseeing, I took a short _____.",
    options: [
      { key: "a", text: "nap" },
      { key: "b", text: "chilli" },
      { key: "c", text: "saying" }
    ],
    answer: "a",
    vietnameseExplanation: "Chợp mắt, ngủ một giấc ngắn -> cụm 'take a nap'.",
    collocationOrRule: "take a nap",
    fullSentence: "After a long morning of sightseeing, I took a short nap.",
    vietnameseTranslation: "Sau buổi sáng dài tham quan, tôi chợp mắt một lát."
  },
  {
    id: 30,
    code: "CÂU 030",
    category: "VOCAB",
    unit: 6,
    unitName: "Where I'm from",
    prompt: "I couldn't follow the map at first, but your explanation helped it _____.",
    options: [
      { key: "a", text: "feel at home" },
      { key: "b", text: "make sense" },
      { key: "c", text: "it comes alive" }
    ],
    answer: "b",
    vietnameseExplanation: "Lời giải thích giúp bản đồ trở nên dễ hiểu, hợp lý -> 'make sense'.",
    collocationOrRule: "make sense to someone",
    fullSentence: "I couldn't follow the map at first, but your explanation helped it make sense.",
    vietnameseTranslation: "Ban đầu tôi không hiểu bản đồ nhưng lời giải thích của bạn khiến nó trở nên hợp lý."
  },

  // UNIT 7 - BALANCE (031 - 045)
  {
    id: 31,
    code: "CÂU 031",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "She wrote about her work problems in a newspaper _____.",
    options: [
      { key: "a", text: "mortgage" },
      { key: "b", text: "trail" },
      { key: "c", text: "advice column" }
    ],
    answer: "c",
    vietnameseExplanation: "Chuyên mục tư vấn tâm sự, giải đáp trên báo -> 'advice column'.",
    collocationOrRule: "read / write to an advice column",
    fullSentence: "She wrote about her work problems in a newspaper advice column.",
    vietnameseTranslation: "Cô ấy viết về vấn đề công việc ở chuyên mục tư vấn của báo."
  },
  {
    id: 32,
    code: "CÂU 032",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "Please turn down the music; I need to _____ on my homework.",
    options: [
      { key: "a", text: "concentrate" },
      { key: "b", text: "hang out" },
      { key: "c", text: "outweigh" }
    ],
    answer: "a",
    vietnameseExplanation: "Tập trung vào làm bài tập về nhà -> 'concentrate on'.",
    collocationOrRule: "concentrate on",
    fullSentence: "Please turn down the music; I need to concentrate on my homework.",
    vietnameseTranslation: "Làm ơn vặn nhỏ nhạc; tôi cần tập trung làm bài."
  },
  {
    id: 33,
    code: "CÂU 033",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "Take a short _____ to stretch after an hour at your desk.",
    options: [
      { key: "a", text: "range" },
      { key: "b", text: "microbreak" },
      { key: "c", text: "mortgage" }
    ],
    answer: "b",
    vietnameseExplanation: "Nghỉ giải lao rất ngắn vài phút giữa giờ làm việc -> 'microbreak'.",
    collocationOrRule: "take a microbreak",
    fullSentence: "Take a short microbreak to stretch after an hour at your desk.",
    vietnameseTranslation: "Hãy nghỉ giải lao rất ngắn để vươn vai sau một giờ ngồi bàn."
  },
  {
    id: 34,
    code: "CÂU 034",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "We had a _____ meeting and agreed on a clear plan.",
    options: [
      { key: "a", text: "steep" },
      { key: "b", text: "scuba diving" },
      { key: "c", text: "productive" }
    ],
    answer: "c",
    vietnameseExplanation: "Cuộc họp đạt hiệu quả cao, thống nhất được kế hoạch -> 'productive meeting'.",
    collocationOrRule: "a productive meeting / day",
    fullSentence: "We had a productive meeting and agreed on a clear plan.",
    vietnameseTranslation: "Chúng tôi có cuộc họp hiệu quả và thống nhất kế hoạch rõ ràng."
  },
  {
    id: 35,
    code: "CÂU 035",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "Before breakfast, I wrote a _____ with my five most important tasks.",
    options: [
      { key: "a", text: "to-do list" },
      { key: "b", text: "gear" },
      { key: "c", text: "trail" }
    ],
    answer: "a",
    vietnameseExplanation: "Danh sách các việc cần thực hiện trong ngày -> 'to-do list'.",
    collocationOrRule: "make a to-do list",
    fullSentence: "Before breakfast, I wrote a to-do list with my five most important tasks.",
    vietnameseTranslation: "Trước bữa sáng tôi viết danh sách năm việc quan trọng nhất."
  },
  {
    id: 36,
    code: "CÂU 036",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "My cousins often _____ in the park after school.",
    options: [
      { key: "a", text: "access" },
      { key: "b", text: "hang out" },
      { key: "c", text: "concentrate" }
    ],
    answer: "b",
    vietnameseExplanation: "Đi chơi, tụ tập thư giãn cùng bạn bè ngoài công viên -> 'hang out'.",
    collocationOrRule: "hang out with friends",
    fullSentence: "My cousins often hang out in the park after school.",
    vietnameseTranslation: "Anh chị em họ của tôi thường đi chơi ở công viên sau giờ học."
  },
  {
    id: 37,
    code: "CÂU 037",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "The rising cost of rent is a major _____ for new students.",
    options: [
      { key: "a", text: "saving" },
      { key: "b", text: "budget" },
      { key: "c", text: "concern" }
    ],
    answer: "c",
    vietnameseExplanation: "Mối lo ngại, trăn trở lớn đối với tân sinh viên -> 'major concern'.",
    collocationOrRule: "a serious / major concern",
    fullSentence: "The rising cost of rent is a major concern for new students.",
    vietnameseTranslation: "Chi phí thuê nhà tăng là mối lo lớn của tân sinh viên."
  },
  {
    id: 38,
    code: "CÂU 038",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "We packed warm clothes and climbing _____ for the hike.",
    options: [
      { key: "a", text: "gear" },
      { key: "b", text: "range" },
      { key: "c", text: "advice column" }
    ],
    answer: "a",
    vietnameseExplanation: "Dụng cụ, đồ đạc, trang thiết bị leo núi -> 'climbing gear'.",
    collocationOrRule: "camping / climbing gear",
    fullSentence: "We packed warm clothes and climbing gear for the hike.",
    vietnameseTranslation: "Chúng tôi mang quần áo ấm và thiết bị leo núi cho chuyến đi bộ."
  },
  {
    id: 39,
    code: "CÂU 039",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "We followed the narrow forest _____ to reach the waterfall.",
    options: [
      { key: "a", text: "mortgage" },
      { key: "b", text: "trail" },
      { key: "c", text: "budget" }
    ],
    answer: "b",
    vietnameseExplanation: "Đường mòn trong rừng dẫn tới thác nước -> 'forest trail'.",
    collocationOrRule: "a forest trail",
    fullSentence: "We followed the narrow forest trail to reach the waterfall.",
    vietnameseTranslation: "Chúng tôi đi theo đường mòn hẹp trong rừng đến thác nước."
  },
  {
    id: 40,
    code: "CÂU 040",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "The path is very _____, so walk carefully downhill.",
    options: [
      { key: "a", text: "productive" },
      { key: "b", text: "essential" },
      { key: "c", text: "steep" }
    ],
    answer: "c",
    vietnameseExplanation: "Đoạn đường rất dốc đứng, cần đi cẩn thận -> 'steep'.",
    collocationOrRule: "a steep hill / path",
    fullSentence: "The path is very steep, so walk carefully downhill.",
    vietnameseTranslation: "Con đường rất dốc nên hãy đi xuống cẩn thận."
  },
  {
    id: 41,
    code: "CÂU 041",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "Saying please and waiting your turn show _____.",
    options: [
      { key: "a", text: "good manners" },
      { key: "b", text: "scuba diving" },
      { key: "c", text: "savings" }
    ],
    answer: "a",
    vietnameseExplanation: "Nói làm ơn và kiên nhẫn chờ lượt thể hiện phép lịch sự, cung cách cư xử tốt -> 'good manners'.",
    collocationOrRule: "show good manners",
    fullSentence: "Saying please and waiting your turn show good manners.",
    vietnameseTranslation: "Nói làm ơn và chờ lượt thể hiện phép lịch sự."
  },
  {
    id: 42,
    code: "CÂU 042",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "Our club has a limited _____ for buying new equipment.",
    options: [
      { key: "a", text: "concern" },
      { key: "b", text: "budget" },
      { key: "c", text: "gear" }
    ],
    answer: "b",
    vietnameseExplanation: "Khoản ngân sách chi tiêu hạn chế của câu lạc bộ -> 'limited budget'.",
    collocationOrRule: "keep a budget / limited budget",
    fullSentence: "Our club has a limited budget for buying new equipment.",
    vietnameseTranslation: "Câu lạc bộ có ngân sách hạn chế để mua thiết bị mới."
  },
  {
    id: 43,
    code: "CÂU 043",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "They took out a _____ to buy their first house.",
    options: [
      { key: "a", text: "range" },
      { key: "b", text: "microbreak" },
      { key: "c", text: "mortgage" }
    ],
    answer: "c",
    vietnameseExplanation: "Khoản vay thế chấp ngân hàng để mua nhà -> 'mortgage' (take out a mortgage).",
    collocationOrRule: "pay off / take out a mortgage",
    fullSentence: "They took out a mortgage to buy their first house.",
    vietnameseTranslation: "Họ vay thế chấp để mua căn nhà đầu tiên."
  },
  {
    id: 44,
    code: "CÂU 044",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "Daily speaking practice can _____ your confidence in English.",
    options: [
      { key: "a", text: "strengthen" },
      { key: "b", text: "outweigh" },
      { key: "c", text: "access" }
    ],
    answer: "a",
    vietnameseExplanation: "Luyện tập hằng ngày giúp củng cố, làm mạnh thêm sự tự tin -> 'strengthen'.",
    collocationOrRule: "strengthen a skill / confidence",
    fullSentence: "Daily speaking practice can strengthen your confidence in English.",
    vietnameseTranslation: "Luyện nói hằng ngày có thể củng cố sự tự tin tiếng Anh."
  },
  {
    id: 45,
    code: "CÂU 045",
    category: "VOCAB",
    unit: 7,
    unitName: "Balance",
    prompt: "For me, the health benefits _____ the cost of the gym membership.",
    options: [
      { key: "a", text: "concentrate" },
      { key: "b", text: "outweigh" },
      { key: "c", text: "hang out" }
    ],
    answer: "b",
    vietnameseExplanation: "Lợi ích sức khỏe lớn hơn, có giá trị vượt trội so với chi phí bỏ ra -> 'outweigh'.",
    collocationOrRule: "benefits outweigh costs",
    fullSentence: "For me, the health benefits outweigh the cost of the gym membership.",
    vietnameseTranslation: "Với tôi, lợi ích sức khỏe lớn hơn phí hội viên phòng tập."
  },

  // UNIT 8 - ESSENTIALS (046 - 060)
  {
    id: 46,
    code: "CÂU 046",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "In the reply 'Yes, I have,' the speaker uses _____ to avoid repeating words.",
    options: [
      { key: "a", text: "fieldwork" },
      { key: "b", text: "landfill" },
      { key: "c", text: "ellipsis" }
    ],
    answer: "c",
    vietnameseExplanation: "Phép lược bỏ các từ lặp lại trong câu trả lời ngắn trong ngữ pháp gọi là 'ellipsis'.",
    collocationOrRule: "use ellipsis",
    fullSentence: "In the reply 'Yes, I have,' the speaker uses ellipsis to avoid repeating words.",
    vietnameseTranslation: "Trong câu trả lời 'Yes, I have', người nói dùng phép lược bỏ từ."
  },
  {
    id: 47,
    code: "CÂU 047",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "Please use a clean _____ to wipe the kitchen table.",
    options: [
      { key: "a", text: "cloth" },
      { key: "b", text: "fizzy drink" },
      { key: "c", text: "session" }
    ],
    answer: "a",
    vietnameseExplanation: "Khăn vải sạch để lau bàn bếp -> 'cloth' (cleaning cloth).",
    collocationOrRule: "a cleaning cloth",
    fullSentence: "Please use a clean cloth to wipe the kitchen table.",
    vietnameseTranslation: "Hãy dùng khăn vải sạch để lau bàn bếp."
  },
  {
    id: 48,
    code: "CÂU 048",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "He ordered a _____ with bubbles instead of still water.",
    options: [
      { key: "a", text: "creamy" },
      { key: "b", text: "fizzy drink" },
      { key: "c", text: "vintage" }
    ],
    answer: "b",
    vietnameseExplanation: "Nước uống sủi bọt có ga -> 'fizzy drink'.",
    collocationOrRule: "a can of fizzy drink",
    fullSentence: "He ordered a fizzy drink with bubbles instead of still water.",
    vietnameseTranslation: "Anh ấy gọi một đồ uống có ga thay vì nước lọc."
  },
  {
    id: 49,
    code: "CÂU 049",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "Too much rubbish ends up in a _____ outside the city.",
    options: [
      { key: "a", text: "body language" },
      { key: "b", text: "cloth" },
      { key: "c", text: "landfill" }
    ],
    answer: "c",
    vietnameseExplanation: "Rác thải bị chôn lấp tại bãi rác ngoài thành phố -> 'landfill'.",
    collocationOrRule: "end up in landfill",
    fullSentence: "Too much rubbish ends up in a landfill outside the city.",
    vietnameseTranslation: "Quá nhiều rác bị đưa đến bãi chôn lấp ngoài thành phố."
  },
  {
    id: 50,
    code: "CÂU 050",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "The biology class collected samples during _____ near the river.",
    options: [
      { key: "a", text: "fieldwork" },
      { key: "b", text: "ellipsis" },
      { key: "c", text: "virtual call" }
    ],
    answer: "a",
    vietnameseExplanation: "Nghiên cứu, thu thập mẫu thực tế ngoài thực địa -> 'fieldwork' (do fieldwork).",
    collocationOrRule: "do fieldwork",
    fullSentence: "The biology class collected samples during fieldwork near the river.",
    vietnameseTranslation: "Lớp sinh học thu mẫu trong chuyến nghiên cứu thực địa cạnh sông."
  },
  {
    id: 51,
    code: "CÂU 051",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "I bought a _____ jacket that another person had worn before.",
    options: [
      { key: "a", text: "genuine" },
      { key: "b", text: "second-hand" },
      { key: "c", text: "bitter" }
    ],
    answer: "b",
    vietnameseExplanation: "Áo khoác đã qua sử dụng, người khác từng mặc -> 'second-hand jacket'.",
    collocationOrRule: "second-hand clothes",
    fullSentence: "I bought a second-hand jacket that another person had worn before.",
    vietnameseTranslation: "Tôi mua chiếc áo khoác đã qua sử dụng."
  },
  {
    id: 52,
    code: "CÂU 052",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "The _____ of producing disposable plastic can be very high.",
    options: [
      { key: "a", text: "key to something" },
      { key: "b", text: "three quarters" },
      { key: "c", text: "environmental cost" }
    ],
    answer: "c",
    vietnameseExplanation: "Tác động tiêu cực, tổn hại đối với môi trường -> 'environmental cost'.",
    collocationOrRule: "the environmental cost",
    fullSentence: "The environmental cost of producing disposable plastic can be very high.",
    vietnameseTranslation: "Tác động môi trường của sản xuất nhựa dùng một lần có thể rất lớn."
  },
  {
    id: 53,
    code: "CÂU 053",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "_____ of the students, or 75%, chose the vegetarian lunch.",
    options: [
      { key: "a", text: "three quarters" },
      { key: "b", text: "charming" },
      { key: "c", text: "atmosphere" }
    ],
    answer: "a",
    vietnameseExplanation: "Tương đương 75% là phân số 'ba phần tư' -> 'three quarters'.",
    collocationOrRule: "three quarters of",
    fullSentence: "Three quarters of the students, or 75%, chose the vegetarian lunch.",
    vietnameseTranslation: "Ba phần tư sinh viên, tức 75%, chọn bữa chay."
  },
  {
    id: 54,
    code: "CÂU 054",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "She collects _____ cameras from the 1970s.",
    options: [
      { key: "a", text: "spicy" },
      { key: "b", text: "vintage" },
      { key: "c", text: "acceptable" }
    ],
    answer: "b",
    vietnameseExplanation: "Đồ cổ điển có phong cách từ những năm 1970 -> 'vintage cameras'.",
    collocationOrRule: "vintage clothes / furniture",
    fullSentence: "She collects vintage cameras from the 1970s.",
    vietnameseTranslation: "Cô ấy sưu tầm máy ảnh cổ từ thập niên 1970."
  },
  {
    id: 55,
    code: "CÂU 055",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "Can you _____ your parents to let you join the trip?",
    options: [
      { key: "a", text: "outweigh" },
      { key: "b", text: "clarify" },
      { key: "c", text: "convince" }
    ],
    answer: "c",
    vietnameseExplanation: "Thuyết phục bố mẹ đồng ý cho tham gia chuyến đi -> 'convince someone to do something'.",
    collocationOrRule: "convince someone to do",
    fullSentence: "Can you convince your parents to let you join the trip?",
    vietnameseTranslation: "Bạn có thể thuyết phục bố mẹ cho tham gia chuyến đi không?"
  },
  {
    id: 56,
    code: "CÂU 056",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "The dark chocolate was too _____ for my little brother.",
    options: [
      { key: "a", text: "bitter" },
      { key: "b", text: "cheesy" },
      { key: "c", text: "buttery" }
    ],
    answer: "a",
    vietnameseExplanation: "Sô-cô-la đen nguyên chất thường có vị 'đắng' -> 'bitter'.",
    collocationOrRule: "bitter chocolate",
    fullSentence: "The dark chocolate was too bitter for my little brother.",
    vietnameseTranslation: "Sô-cô-la đen quá đắng đối với em trai tôi."
  },
  {
    id: 57,
    code: "CÂU 057",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "This pizza is very _____; there's a lot of melted cheese on it.",
    options: [
      { key: "a", text: "bitter" },
      { key: "b", text: "cheesy" },
      { key: "c", text: "watery" }
    ],
    answer: "b",
    vietnameseExplanation: "Nhiều phô mai béo ngậy -> tính từ 'cheesy' (từ danh từ cheese + y).",
    collocationOrRule: "cheesy pasta / pizza",
    fullSentence: "This pizza is very cheesy; there's a lot of melted cheese on it.",
    vietnameseTranslation: "Bánh pizza này rất nhiều phô mai nóng chảy."
  },
  {
    id: 58,
    code: "CÂU 058",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "The mushroom soup was thick and _____, not watery.",
    options: [
      { key: "a", text: "virtual call" },
      { key: "b", text: "second-hand" },
      { key: "c", text: "creamy" }
    ],
    answer: "c",
    vietnameseExplanation: "Súp nấm đặc sánh, mịn màng và béo như kem -> 'creamy' (đối lập với watery).",
    collocationOrRule: "creamy sauce / soup",
    fullSentence: "The mushroom soup was thick and creamy, not watery.",
    vietnameseTranslation: "Súp nấm đặc và béo ngậy, không loãng."
  },
  {
    id: 59,
    code: "CÂU 059",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "Soft music gave the café a calm _____.",
    options: [
      { key: "a", text: "atmosphere" },
      { key: "b", text: "cloth" },
      { key: "c", text: "landfill" }
    ],
    answer: "a",
    vietnameseExplanation: "Nhạc êm dịu mang đến cho quán cà phê 'bầu không khí' tĩnh lặng -> 'calm atmosphere'.",
    collocationOrRule: "a friendly / calm atmosphere",
    fullSentence: "Soft music gave the café a calm atmosphere.",
    vietnameseTranslation: "Nhạc nhẹ tạo cho quán cà phê bầu không khí bình yên."
  },
  {
    id: 60,
    code: "CÂU 060",
    category: "VOCAB",
    unit: 8,
    unitName: "Essentials",
    prompt: "Crossed arms and a worried face can be examples of negative _____.",
    options: [
      { key: "a", text: "travel insurance" },
      { key: "b", text: "body language" },
      { key: "c", text: "fizzy drink" }
    ],
    answer: "b",
    vietnameseExplanation: "Khoanh tay và vẻ mặt lo lắng là ví dụ về 'ngôn ngữ cơ thể' -> 'body language'.",
    collocationOrRule: "read body language",
    fullSentence: "Crossed arms and a worried face can be examples of negative body language.",
    vietnameseTranslation: "Khoanh tay và vẻ mặt lo lắng có thể là biểu hiện ngôn ngữ cơ thể tiêu cực."
  },

  // UNIT 9 - TAKING A BREAK (061 - 075)
  {
    id: 61,
    code: "CÂU 061",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "Before we travel, we need to _____ for two nights near the beach.",
    options: [
      { key: "a", text: "go abroad" },
      { key: "b", text: "unpack my suitcase" },
      { key: "c", text: "book accommodation" }
    ],
    answer: "c",
    vietnameseExplanation: "Đặt chỗ ở (khách sạn, phòng nghỉ) trước khi đi du lịch -> 'book accommodation'.",
    collocationOrRule: "book accommodation in advance",
    fullSentence: "Before we travel, we need to book accommodation for two nights near the beach.",
    vietnameseTranslation: "Trước khi đi, chúng ta cần đặt chỗ ở hai đêm gần biển."
  },
  {
    id: 62,
    code: "CÂU 062",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "If you don't know the local safety rules, you should _____ online.",
    options: [
      { key: "a", text: "check out travel advice" },
      { key: "b", text: "lose a deposit" },
      { key: "c", text: "make a reservation" }
    ],
    answer: "a",
    vietnameseExplanation: "Xem các chỉ dẫn, lời khuyên an toàn du lịch trên mạng -> 'check out travel advice'.",
    collocationOrRule: "check out travel advice",
    fullSentence: "If you don't know the local safety rules, you should check out travel advice online.",
    vietnameseTranslation: "Nếu không biết quy tắc an toàn địa phương, bạn nên xem lời khuyên du lịch trên mạng."
  },
  {
    id: 63,
    code: "CÂU 063",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "I want to _____ and practise speaking another language next year.",
    options: [
      { key: "a", text: "lose a deposit" },
      { key: "b", text: "go abroad" },
      { key: "c", text: "look up" }
    ],
    answer: "b",
    vietnameseExplanation: "Đi ra nước ngoài để trải nghiệm và luyện ngoại ngữ -> 'go abroad'.",
    collocationOrRule: "go abroad for a holiday",
    fullSentence: "I want to go abroad and practise speaking another language next year.",
    vietnameseTranslation: "Tôi muốn đi nước ngoài và luyện nói ngôn ngữ khác năm tới."
  },
  {
    id: 64,
    code: "CÂU 064",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "The island is a popular _____ for families.",
    options: [
      { key: "a", text: "travel insurance" },
      { key: "b", text: "unpack my suitcase" },
      { key: "c", text: "holiday destination" }
    ],
    answer: "c",
    vietnameseExplanation: "Điểm đến nghỉ mát, du lịch được ưa chuộng -> 'holiday destination'.",
    collocationOrRule: "a popular holiday destination",
    fullSentence: "The island is a popular holiday destination for families.",
    vietnameseTranslation: "Hòn đảo là điểm đến kỳ nghỉ được nhiều gia đình yêu thích."
  },
  {
    id: 65,
    code: "CÂU 065",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "I forgot the address, so I'll _____ the hotel on my phone.",
    options: [
      { key: "a", text: "look up" },
      { key: "b", text: "book accommodation" },
      { key: "c", text: "go abroad" }
    ],
    answer: "a",
    vietnameseExplanation: "Tra cứu thông tin, tìm kiếm địa chỉ trên điện thoại -> 'look up'.",
    collocationOrRule: "look up an address / a word",
    fullSentence: "I forgot the address, so I'll look up the hotel on my phone.",
    vietnameseTranslation: "Tôi quên địa chỉ nên sẽ tra cứu khách sạn trên điện thoại."
  },
  {
    id: 66,
    code: "CÂU 066",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "If we cancel the room too late, we may _____.",
    options: [
      { key: "a", text: "go abroad" },
      { key: "b", text: "lose a deposit" },
      { key: "c", text: "unpack my suitcase" }
    ],
    answer: "b",
    vietnameseExplanation: "Hủy phòng quá muộn sẽ bị mất khoản tiền đặt cọc -> 'lose a deposit'.",
    collocationOrRule: "lose your deposit",
    fullSentence: "If we cancel the room too late, we may lose a deposit.",
    vietnameseTranslation: "Nếu hủy phòng quá muộn, chúng ta có thể mất tiền đặt cọc."
  },
  {
    id: 67,
    code: "CÂU 067",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "I was worried I might _____ during the flight connection.",
    options: [
      { key: "a", text: "check out travel advice" },
      { key: "b", text: "make holiday plans" },
      { key: "c", text: "lose my luggage" }
    ],
    answer: "c",
    vietnameseExplanation: "Lo sợ bị thất lạc hành lý tại sân bay khi chuyển chuyến -> 'lose my luggage'.",
    collocationOrRule: "lose luggage at the airport",
    fullSentence: "I was worried I might lose my luggage during the flight connection.",
    vietnameseTranslation: "Tôi lo mình có thể bị thất lạc hành lý lúc nối chuyến."
  },
  {
    id: 68,
    code: "CÂU 068",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "We always _____ several months before the summer break.",
    options: [
      { key: "a", text: "make holiday plans" },
      { key: "b", text: "lose a deposit" },
      { key: "c", text: "look up" }
    ],
    answer: "a",
    vietnameseExplanation: "Lập kế hoạch cho kỳ nghỉ hè từ sớm -> 'make holiday plans'.",
    collocationOrRule: "make holiday plans early",
    fullSentence: "We always make holiday plans several months before the summer break.",
    vietnameseTranslation: "Chúng tôi luôn lập kế hoạch nghỉ hè trước vài tháng."
  },
  {
    id: 69,
    code: "CÂU 069",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "We should _____ at the café because it's busy on Saturdays.",
    options: [
      { key: "a", text: "unpack my suitcase" },
      { key: "b", text: "make a reservation" },
      { key: "c", text: "go abroad" }
    ],
    answer: "b",
    vietnameseExplanation: "Đặt bàn trước vì quán rất đông khách vào thứ Bảy -> 'make a reservation'.",
    collocationOrRule: "make a reservation at a restaurant",
    fullSentence: "We should make a reservation at the café because it's busy on Saturdays.",
    vietnameseTranslation: "Chúng ta nên đặt chỗ tại quán cà phê vì thứ Bảy rất đông."
  },
  {
    id: 70,
    code: "CÂU 070",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "It's wise to buy _____ before an expensive international trip.",
    options: [
      { key: "a", text: "holiday destination" },
      { key: "b", text: "look up" },
      { key: "c", text: "travel insurance" }
    ],
    answer: "c",
    vietnameseExplanation: "Mua 'bảo hiểm du lịch' trước chuyến đi nước ngoài đắt đỏ -> 'travel insurance'.",
    collocationOrRule: "buy travel insurance",
    fullSentence: "It's wise to buy travel insurance before an expensive international trip.",
    vietnameseTranslation: "Nên mua bảo hiểm du lịch trước chuyến đi nước ngoài tốn kém."
  },
  {
    id: 71,
    code: "CÂU 071",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "After checking into the hotel, I wanted to _____ and change clothes.",
    options: [
      { key: "a", text: "unpack my suitcase" },
      { key: "b", text: "check out travel advice" },
      { key: "c", text: "make a reservation" }
    ],
    answer: "a",
    vietnameseExplanation: "Mở vali lấy đồ ra sau khi nhận phòng khách sạn -> 'unpack my suitcase'.",
    collocationOrRule: "unpack a suitcase",
    fullSentence: "After checking into the hotel, I wanted to unpack my suitcase and change clothes.",
    vietnameseTranslation: "Sau khi nhận phòng, tôi muốn mở vali và thay đồ."
  },
  {
    id: 72,
    code: "CÂU 072",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "The policy helped pay some medical costs during the trip; luckily, we had _____.",
    options: [
      { key: "a", text: "make holiday plans" },
      { key: "b", text: "travel insurance" },
      { key: "c", text: "holiday destination" }
    ],
    answer: "b",
    vietnameseExplanation: "Hợp đồng giúp chi trả chi phí điều trị y tế vì có bảo hiểm du lịch -> 'travel insurance'.",
    collocationOrRule: "buy travel insurance",
    fullSentence: "The policy helped pay some medical costs during the trip; luckily, we had travel insurance.",
    vietnameseTranslation: "Hợp đồng bảo hiểm giúp chi trả một số chi phí chữa trị trong chuyến đi."
  },
  {
    id: 73,
    code: "CÂU 073",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "The flight tickets are ready, but we still need to _____ before rooms become full.",
    options: [
      { key: "a", text: "look up" },
      { key: "b", text: "lose my luggage" },
      { key: "c", text: "book accommodation" }
    ],
    answer: "c",
    vietnameseExplanation: "Đặt phòng/chỗ ở trước khi hết phòng -> 'book accommodation'.",
    collocationOrRule: "book accommodation",
    fullSentence: "The flight tickets are ready, but we still need to book accommodation before rooms become full.",
    vietnameseTranslation: "Vé máy bay đã sẵn sàng nhưng chúng tôi vẫn cần đặt phòng trước khi hết chỗ."
  },
  {
    id: 74,
    code: "CÂU 074",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "When you see an unfamiliar word, _____ its meaning in a dictionary.",
    options: [
      { key: "a", text: "look up" },
      { key: "b", text: "go abroad" },
      { key: "c", text: "make a reservation" }
    ],
    answer: "a",
    vietnameseExplanation: "Tra cứu nghĩa của từ trong từ điển -> 'look up'.",
    collocationOrRule: "look up in a dictionary",
    fullSentence: "When you see an unfamiliar word, look up its meaning in a dictionary.",
    vietnameseTranslation: "Khi gặp từ lạ, hãy tra nghĩa trong từ điển."
  },
  {
    id: 75,
    code: "CÂU 075",
    category: "VOCAB",
    unit: 9,
    unitName: "Taking a break",
    prompt: "The restaurant was full, so next time we will _____ before arriving.",
    options: [
      { key: "a", text: "unpack my suitcase" },
      { key: "b", text: "make a reservation" },
      { key: "c", text: "lose a deposit" }
    ],
    answer: "b",
    vietnameseExplanation: "Nhà hàng kín chỗ nên lần sau sẽ đặt chỗ trước -> 'make a reservation'.",
    collocationOrRule: "make a reservation",
    fullSentence: "The restaurant was full, so next time we will make a reservation before arriving.",
    vietnameseTranslation: "Nhà hàng kín chỗ nên lần sau chúng tôi sẽ đặt bàn trước."
  },

  // UNIT 10 - THE SENSES (076 - 090)
  {
    id: 76,
    code: "CÂU 076",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "The rapid _____ of new hearing technology helps many people.",
    options: [
      { key: "a", text: "emotions" },
      { key: "b", text: "scent" },
      { key: "c", text: "development" }
    ],
    answer: "c",
    vietnameseExplanation: "Sự phát triển nhanh chóng của công nghệ nghe mới -> 'technological development'.",
    collocationOrRule: "technological development",
    fullSentence: "The rapid development of new hearing technology helps many people.",
    vietnameseTranslation: "Sự phát triển nhanh của công nghệ nghe mới giúp nhiều người."
  },
  {
    id: 77,
    code: "CÂU 077",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "The song made her feel several different _____.",
    options: [
      { key: "a", text: "emotions" },
      { key: "b", text: "speech" },
      { key: "c", text: "eyesight" }
    ],
    answer: "a",
    vietnameseExplanation: "Bài hát gợi lên nhiều 'cảm xúc' khác nhau -> 'emotions' (express / feel emotions).",
    collocationOrRule: "feel / express emotions",
    fullSentence: "The song made her feel several different emotions.",
    vietnameseTranslation: "Bài hát khiến cô ấy trải qua nhiều cảm xúc khác nhau."
  },
  {
    id: 78,
    code: "CÂU 078",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "We may _____ the museum's opening hours during the festival.",
    options: [
      { key: "a", text: "telescope" },
      { key: "b", text: "extend" },
      { key: "c", text: "scent" }
    ],
    answer: "b",
    vietnameseExplanation: "Kéo dài, gia hạn thời gian mở cửa của bảo tàng -> 'extend opening hours'.",
    collocationOrRule: "extend hours / deadline",
    fullSentence: "We may extend the museum's opening hours during the festival.",
    vietnameseTranslation: "Chúng tôi có thể kéo dài giờ mở cửa bảo tàng trong lễ hội."
  },
  {
    id: 79,
    code: "CÂU 079",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "She needs stronger glasses because her _____ has become worse.",
    options: [
      { key: "a", text: "development" },
      { key: "b", text: "speech" },
      { key: "c", text: "eyesight" }
    ],
    answer: "c",
    vietnameseExplanation: "Cần đeo kính nặng độ hơn vì 'thị lực' (eyesight) bị kém đi.",
    collocationOrRule: "poor eyesight",
    fullSentence: "She needs stronger glasses because her eyesight has become worse.",
    vietnameseTranslation: "Cô ấy cần kính mạnh hơn vì thị lực giảm."
  },
  {
    id: 80,
    code: "CÂU 080",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "A _____ makes quiet sounds easier for my grandfather to hear.",
    options: [
      { key: "a", text: "hearing aid" },
      { key: "b", text: "telescope" },
      { key: "c", text: "virtual reality" }
    ],
    answer: "a",
    vietnameseExplanation: "Thiết bị máy trợ thính giúp người già nghe được âm thanh nhỏ -> 'hearing aid'.",
    collocationOrRule: "wear a hearing aid",
    fullSentence: "A hearing aid makes quiet sounds easier for my grandfather to hear.",
    vietnameseTranslation: "Máy trợ thính giúp ông tôi nghe âm thanh nhỏ rõ hơn."
  },
  {
    id: 81,
    code: "CÂU 081",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "The fresh _____ of flowers filled the garden.",
    options: [
      { key: "a", text: "telescope" },
      { key: "b", text: "scent" },
      { key: "c", text: "speech" }
    ],
    answer: "b",
    vietnameseExplanation: "Hương thơm tươi mát của các loài hoa -> 'the scent of flowers'.",
    collocationOrRule: "the scent of flowers",
    fullSentence: "The fresh scent of flowers filled the garden.",
    vietnameseTranslation: "Mùi hương hoa tươi tràn ngập khu vườn."
  },
  {
    id: 82,
    code: "CÂU 082",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "The device changes spoken _____ into text on a screen.",
    options: [
      { key: "a", text: "eyesight" },
      { key: "b", text: "emotions" },
      { key: "c", text: "speech" }
    ],
    answer: "c",
    vietnameseExplanation: "Chuyển lời nói, giọng nói thành văn bản -> 'spoken speech' (speech-to-text).",
    collocationOrRule: "understand / spoken speech",
    fullSentence: "The device changes spoken speech into text on a screen.",
    vietnameseTranslation: "Thiết bị chuyển lời nói thành chữ trên màn hình."
  },
  {
    id: 83,
    code: "CÂU 083",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "Many _____ changes have improved communication between countries.",
    options: [
      { key: "a", text: "technological" },
      { key: "b", text: "scent" },
      { key: "c", text: "emotions" }
    ],
    answer: "a",
    vietnameseExplanation: "Những biến đổi thuộc về công nghệ kỹ thuật -> 'technological changes'.",
    collocationOrRule: "technological changes",
    fullSentence: "Many technological changes have improved communication between countries.",
    vietnameseTranslation: "Nhiều thay đổi công nghệ đã cải thiện giao tiếp giữa các nước."
  },
  {
    id: 84,
    code: "CÂU 084",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "We used a _____ to see the moon more clearly.",
    options: [
      { key: "a", text: "hearing aid" },
      { key: "b", text: "telescope" },
      { key: "c", text: "speech" }
    ],
    answer: "b",
    vietnameseExplanation: "Dùng 'kính thiên văn' để quan sát mặt trăng và các vì sao rõ hơn -> 'telescope'.",
    collocationOrRule: "look through a telescope",
    fullSentence: "We used a telescope to see the moon more clearly.",
    vietnameseTranslation: "Chúng tôi dùng kính thiên văn để thấy mặt trăng rõ hơn."
  },
  {
    id: 85,
    code: "CÂU 085",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "With _____, visitors can explore a digital version of the ancient city.",
    options: [
      { key: "a", text: "development" },
      { key: "b", text: "eyesight" },
      { key: "c", text: "virtual reality" }
    ],
    answer: "c",
    vietnameseExplanation: "Công nghệ thực tế ảo cho phép khám phá phiên bản kỹ thuật số của thành phố cổ -> 'virtual reality'.",
    collocationOrRule: "use virtual reality",
    fullSentence: "With virtual reality, visitors can explore a digital version of the ancient city.",
    vietnameseTranslation: "Với thực tế ảo, khách tham quan có thể khám phá phiên bản số của thành phố cổ."
  },
  {
    id: 86,
    code: "CÂU 086",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "The delicious _____ of baked bread came from the kitchen.",
    options: [
      { key: "a", text: "scent" },
      { key: "b", text: "hearing aid" },
      { key: "c", text: "technological" }
    ],
    answer: "a",
    vietnameseExplanation: "Mùi hương bánh mì nướng thơm nức mũi lan tỏa từ bếp -> 'scent'.",
    collocationOrRule: "the scent of baked bread",
    fullSentence: "The delicious scent of baked bread came from the kitchen.",
    vietnameseTranslation: "Mùi thơm bánh mì nướng lan ra từ nhà bếp."
  },
  {
    id: 87,
    code: "CÂU 087",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "Could you _____ the booking until Monday, please?",
    options: [
      { key: "a", text: "speech" },
      { key: "b", text: "extend" },
      { key: "c", text: "telescope" }
    ],
    answer: "b",
    vietnameseExplanation: "Gia hạn việc đặt phòng tới thứ Hai -> 'extend the booking'.",
    collocationOrRule: "extend a deadline / booking",
    fullSentence: "Could you extend the booking until Monday, please?",
    vietnameseTranslation: "Bạn có thể gia hạn đặt phòng đến thứ Hai không?"
  },
  {
    id: 88,
    code: "CÂU 088",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "The _____ of smartphones has changed everyday life.",
    options: [
      { key: "a", text: "virtual reality" },
      { key: "b", text: "eyesight" },
      { key: "c", text: "development" }
    ],
    answer: "c",
    vietnameseExplanation: "Sự phát triển của điện thoại thông minh -> 'development of smartphones'.",
    collocationOrRule: "development of technology",
    fullSentence: "The development of smartphones has changed everyday life.",
    vietnameseTranslation: "Sự phát triển của điện thoại thông minh đã thay đổi đời sống."
  },
  {
    id: 89,
    code: "CÂU 089",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "He could follow the conversation better after getting a _____.",
    options: [
      { key: "a", text: "hearing aid" },
      { key: "b", text: "emotions" },
      { key: "c", text: "telescope" }
    ],
    answer: "a",
    vietnameseExplanation: "Sau khi đeo máy trợ thính, anh ấy nghe và theo dõi cuộc trò chuyện tốt hơn -> 'hearing aid'.",
    collocationOrRule: "wear / get a hearing aid",
    fullSentence: "He could follow the conversation better after getting a hearing aid.",
    vietnameseTranslation: "Anh ấy theo kịp cuộc trò chuyện tốt hơn sau khi đeo máy trợ thính."
  },
  {
    id: 90,
    code: "CÂU 090",
    category: "VOCAB",
    unit: 10,
    unitName: "The senses",
    prompt: "The science centre uses _____ to show visitors what Mars might look like.",
    options: [
      { key: "a", text: "speech" },
      { key: "b", text: "virtual reality" },
      { key: "c", text: "scent" }
    ],
    answer: "b",
    vietnameseExplanation: "Trung tâm khoa học mô phỏng cảnh quan sao Hỏa bằng thực tế ảo -> 'virtual reality'.",
    collocationOrRule: "use virtual reality",
    fullSentence: "The science centre uses virtual reality to show visitors what Mars might look like.",
    vietnameseTranslation: "Trung tâm khoa học sử dụng thực tế ảo mô phỏng sao Hỏa."
  }
];
