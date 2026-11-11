export interface VocabItem {
  id: number;
  word: string;
  phonetic: string;
  vietnamese: string;
  collocation: string;
  example: string;
}

export interface GrammarItem {
  topic: string;
  formula: string;
  explanation: string;
  example: string;
}

export const unitsData: Record<number, {
  title: string;
  vocabulary: VocabItem[];
  grammar: GrammarItem[];
}> = {
  5: {
    title: "Unit 5 – ART",
    vocabulary: [
      { id: 1, word: "analyse", phonetic: "/ˈænəlaɪz/", vietnamese: "phân tích", collocation: "analyse a painting", example: "The class will analyse the message behind each picture." },
      { id: 2, word: "comic", phonetic: "/ˈkɒmɪk/", vietnamese: "truyện tranh", collocation: "read a comic", example: "My little cousin reads a comic on the bus every morning." },
      { id: 3, word: "client", phonetic: "/ˈklaɪənt/", vietnamese: "khách hàng", collocation: "meet a client", example: "The designer discussed the poster with her client." },
      { id: 4, word: "canvas", phonetic: "/ˈkænvəs/", vietnamese: "vải toan", collocation: "paint on canvas", example: "The artist painted a blue sea on a large canvas." },
      { id: 5, word: "primarily", phonetic: "/praɪˈmerəli/", vietnamese: "chủ yếu", collocation: "primarily interested in", example: "The event is primarily for young painters." }
    ],
    grammar: [
      { topic: "Second Conditional", formula: "IF + S + V2/ed, S + WOULD/COULD + V", explanation: "Giả sử khả năng khác hiện tại.", example: "If I had more time, I would visit the gallery." },
      { topic: "Adjectives (-ed/-ing)", formula: "-ed (cảm xúc người) / -ing (đặc điểm gây cảm xúc)", explanation: "Sự khác biệt giữa tính từ đuôi -ed và -ing.", example: "I was amazed because the performance was amazing." }
    ]
  },
  6: {
    title: "Unit 6 – WHERE I'M FROM",
    vocabulary: [
      { id: 29, word: "bubble chart", phonetic: "/ˈbʌb(ə)l ʧɑː(r)t/", vietnamese: "biểu đồ bong bóng", collocation: "create a bubble chart", example: "We used a bubble chart to compare city populations." },
      { id: 30, word: "metropolis", phonetic: "/məˈtrɒpəlɪs/", vietnamese: "đô thị lớn", collocation: "a busy metropolis", example: "Seoul is a modern metropolis with millions of residents." },
      { id: 31, word: "gathering", phonetic: "/ˈɡæðərɪŋ/", vietnamese: "buổi tụ họp", collocation: "family gathering", example: "Our family gathering lasted until midnight." }
    ],
    grammar: [
      { topic: "Present Perfect Continuous", formula: "S + have/has + been + V-ing", explanation: "Hành động từ quá khứ nối đến hiện tại.", example: "She has been living here since 2022." },
      { topic: "Describing Movement", formula: "verb + manner adverb + preposition", explanation: "Mô tả cách thức chuyển động.", example: "He walked quickly through the park." }
    ]
  },
  7: {
    title: "Unit 7 – BALANCE",
    vocabulary: [
      { id: 58, word: "advice column", phonetic: "/ədˈvaɪs kɒləm/", vietnamese: "chuyên mục tư vấn", collocation: "read an advice column", example: "She wrote to an advice column about her busy schedule." },
      { id: 59, word: "achieve balance", phonetic: "", vietnamese: "đạt được sự cân bằng", collocation: "achieve a healthy balance", example: "He exercises to achieve balance." }
    ],
    grammar: [
      { topic: "Future Forms", formula: "be going to / will / be + V-ing", explanation: "Dự định, dự đoán, kế hoạch.", example: "We are meeting our teacher tomorrow." },
      { topic: "Verb Patterns", formula: "Verb + to V / V-ing", explanation: "Cấu trúc động từ theo sau.", example: "They decided to leave." }
    ]
  },
  8: {
    title: "Unit 8 – ESSENTIALS",
    vocabulary: [
      { id: 87, word: "ellipsis", phonetic: "/ɪˈlɪpsɪs/", vietnamese: "phép lược bỏ từ", collocation: "use ellipsis", example: "In short answers, ellipsis prevents unnecessary repetition." },
      { id: 88, word: "cloth", phonetic: "/klɒθ/", vietnamese: "miếng vải", collocation: "a cleaning cloth", example: "I cleaned the table with a soft cloth." }
    ],
    grammar: [
      { topic: "Relative Clauses", formula: "who/which/that/where/whose", explanation: "Mệnh đề quan hệ.", example: "The woman who lives next door is an artist." },
      { topic: "Comparatives", formula: "adj-er + than / more + adj + than", explanation: "So sánh hơn.", example: "This meal is much cheaper than that one." }
    ]
  },
  9: {
    title: "Unit 9 – TAKING A BREAK",
    vocabulary: [
      { id: 121, word: "book accommodation", phonetic: "/bʊk əˌkɒməˈdeɪʃ(ə)n/", vietnamese: "đặt chỗ ở", collocation: "book accommodation in advance", example: "We booked accommodation near the station." },
      { id: 122, word: "check out travel advice", phonetic: "/tʃek aʊt ˈtræv(ə)l ədˈvaɪs/", vietnamese: "xem lời khuyên du lịch", collocation: "check out travel advice online", example: "Check out travel advice before visiting." }
    ],
    grammar: [
      { topic: "Third Conditional", formula: "If + S + had + V3, S + would have + V3", explanation: "Giả định quá khứ.", example: "If we had left earlier, we would have arrived on time." },
      { topic: "Giving Advice", formula: "should / ought to / If I were you", explanation: "Đưa ra lời khuyên.", example: "You should check the weather." }
    ]
  },
  10: {
    title: "Unit 10 – THE SENSES",
    vocabulary: [
      { id: 132, word: "development", phonetic: "/dɪˈveləpmənt/", vietnamese: "sự phát triển", collocation: "technological development", example: "The development of new tools changes how we learn." },
      { id: 133, word: "emotions", phonetic: "/ɪˈməʊʃ(ə)nz/", vietnamese: "cảm xúc", collocation: "express emotions", example: "Music can help people express their emotions." }
    ],
    grammar: [
      { topic: "Passives", formula: "S + be + V3", explanation: "Câu bị động.", example: "The museum was opened in 2010." },
      { topic: "Making Predictions", formula: "will / may / might / could + V", explanation: "Dự đoán.", example: "Travel might become cheaper in the future." }
    ]
  }
};
