import { OptionKey } from './questionsData_part1';

export interface ReadingQuestion {
  id: number;
  questionNumber: string; // e.g. "CÂU 186"
  questionType: 'MAIN IDEA' | 'DETAIL' | 'INFERENCE' | 'REFERENCE' | 'VOCAB-IN-CONTEXT' | 'MATCHING INFORMATION';
  prompt: string;
  options: {
    key: OptionKey;
    text: string;
  }[];
  answer: OptionKey;
  location: string;
  explanation: string;
  optionAnalysis?: Record<string, string>;
}

export interface ReadingPassage {
  id: number;
  title: string;
  genre: string;
  units: string;
  unitNumbers: [number, number];
  paragraphs: {
    index: string | number; // 'P1', 'P2' or 'A', 'B'
    label?: string;
    text: string;
  }[];
  vocabularyHighlights: {
    word: string;
    meaning: string;
  }[];
  questions: ReadingQuestion[];
}

export const READING_PASSAGES: ReadingPassage[] = [
  // =========================================================================
  // READING 1 — AN ART PROJECT THAT MADE A CITY FEEL LIKE HOME
  // Unit 5 Art + Unit 6 Where I'm from (Câu 186 - 190)
  // =========================================================================
  {
    id: 1,
    title: "An Art Project That Made a City Feel Like Home",
    genre: "Truyện kể trải nghiệm – Unit 5 Art + Unit 6 Where I'm from",
    units: "Units 5–6 (Art & Where I'm from)",
    unitNumbers: [5, 6],
    vocabularyHighlights: [
      { word: "bare wall", meaning: "bức tường trống trơn" },
      { word: "mural", meaning: "tranh bích họa trên tường" },
      { word: "feel at home", meaning: "cảm thấy thoải mái, ấm áp như ở nhà" },
      { word: "make a connection", meaning: "tạo dựng sự gắn kết thân thiện" },
      { word: "choir", meaning: "dàn hợp xướng" }
    ],
    paragraphs: [
      {
        index: "P1",
        label: "Đoạn 1",
        text: "When Anya moved from a small seaside town to a large metropolis, she missed the quiet streets and her old friends. She had been living in her new neighbourhood for four months, but she still did not feel at home. One morning, she noticed a poster asking people to help turn a bare wall beside the local library into a colourful mural."
      },
      {
        index: "P2",
        label: "Đoạn 2",
        text: "Anya joined the project because she enjoyed drawing comics. The group included students, shopkeepers and a retired art teacher. They first talked to local residents about their memories. One woman remembered how the old harbour had looked thirty years earlier. A teenager suggested adding pictures of bicycles because many children now travelled to school that way."
      },
      {
        index: "P3",
        label: "Đoạn 3",
        text: "The volunteers met every Saturday for five weeks. The retired teacher helped them plan the design, but everyone was free to contribute ideas. A nearby café donated paint and brushes. At first, Anya was worried that her drawings would not be good enough. However, her teammates encouraged her, and she created a small cartoon showing different generations sharing the same street."
      },
      {
        index: "P4",
        label: "Đoạn 4",
        text: "When the mural was finished, the library held a free celebration with music from a local choir. Neighbours stopped to admire the painting and talked to people they had never met before. The wall did not solve the city's problems, but it made the area feel friendlier. Anya says the experience helped her make a connection with her new community, and she has been making new friends ever since."
      }
    ],
    questions: [
      {
        id: 186,
        questionNumber: "CÂU 186",
        questionType: "DETAIL",
        prompt: "Why did Anya initially feel unhappy in the city?",
        options: [
          { key: "a", text: "She had not found a job at the library." },
          { key: "b", text: "She missed her old home and did not yet feel comfortable." },
          { key: "c", text: "She disliked drawing cartoons." }
        ],
        answer: "b",
        location: "Đoạn [P1]: 'she missed the quiet streets and her old friends... still did not feel at home.'",
        explanation: "P1: Anya nhớ thị trấn cũ và chưa cảm thấy thoải mái ở thành phố ('missed the quiet streets and her old friends... did not feel at home').",
        optionAnalysis: {
          a: "SAI – Không nhắc đến việc tìm việc làm ở thư viện.",
          b: "ĐÚNG – Đúng như thông tin trong P1.",
          c: "SAI – Ngược lại, Anya rất thích vẽ truyện tranh (P2: 'she enjoyed drawing comics')."
        }
      },
      {
        id: 187,
        questionNumber: "CÂU 187",
        questionType: "DETAIL",
        prompt: "What did the group do before painting the mural?",
        options: [
          { key: "a", text: "They asked local people to share memories and ideas." },
          { key: "b", text: "They visited a famous national art exhibition." },
          { key: "c", text: "They sold tickets to pay for a new library." }
        ],
        answer: "a",
        location: "Đoạn [P2]: 'They first talked to local residents about their memories.'",
        explanation: "P2: Nhóm đã gặp gỡ và hỏi người dân địa phương về ký ức và đóng góp ý tưởng trước khi vẽ.",
        optionAnalysis: {
          a: "ĐÚNG – Khớp thông tin trong P2.",
          b: "SAI – Không hề đi thăm triển lãm nghệ thuật quốc gia.",
          c: "SAI – Không bán vé gây quỹ cho thư viện."
        }
      },
      {
        id: 188,
        questionNumber: "CÂU 188",
        questionType: "DETAIL",
        prompt: "What did the local café give to the project?",
        options: [
          { key: "a", text: "Free meals for five weeks." },
          { key: "b", text: "A permanent studio." },
          { key: "c", text: "Paint and brushes." }
        ],
        answer: "c",
        location: "Đoạn [P3]: 'A nearby café donated paint and brushes.'",
        explanation: "P3: Quán cà phê gần đó đã tặng sơn và cọ vẽ cho dự án ('donated paint and brushes').",
        optionAnalysis: {
          a: "SAI – Không tặng bữa ăn miễn phí suốt 5 tuần.",
          b: "SAI – Không cung cấp xưởng vẽ vĩnh viễn.",
          c: "ĐÚNG – Chính xác theo câu văn trong P3."
        }
      },
      {
        id: 189,
        questionNumber: "CÂU 189",
        questionType: "VOCAB-IN-CONTEXT",
        prompt: "The phrase “make a connection” in P4 is closest in meaning to _____.",
        options: [
          { key: "a", text: "earn money through art" },
          { key: "b", text: "develop a friendly relationship" },
          { key: "c", text: "move to a different city" }
        ],
        answer: "b",
        location: "Đoạn [P4]: 'helped her make a connection with her new community, and she has been making new friends ever since.'",
        explanation: "P4: Cụm từ 'make a connection' mang nghĩa phát triển mối quan hệ thân thiện, gắn kết với cộng đồng ('develop a friendly relationship').",
        optionAnalysis: {
          a: "SAI – Không mang nghĩa kiếm tiền qua nghệ thuật.",
          b: "ĐÚNG – Hình thành sự gắn kết, kết nối bạn bè thân thiết.",
          c: "SAI – Không mang nghĩa chuyển sang thành phố khác."
        }
      },
      {
        id: 190,
        questionNumber: "CÂU 190",
        questionType: "MAIN IDEA",
        prompt: "What is the main message of the passage?",
        options: [
          { key: "a", text: "Only trained artists should paint public walls." },
          { key: "b", text: "Large cities are always difficult places to live." },
          { key: "c", text: "Working on art together can help neighbours feel connected." }
        ],
        answer: "c",
        location: "Toàn bài đọc [P1]–[P4]",
        explanation: "Thông điệp chính: Cùng nhau chung tay sáng tạo nghệ thuật có thể giúp hàng xóm và cư dân cảm thấy gắn kết, gần gũi với nhau hơn.",
        optionAnalysis: {
          a: "SAI – Bài viết nhấn mạnh sự tham gia của mọi tầng lớp (học sinh, người bán hàng, giáo viên về hưu).",
          b: "SAI – Bài viết không khẳng định thành phố lớn luôn là nơi khó sống tiêu cực.",
          c: "ĐÚNG – Tóm lược hoàn hảo ý nghĩa nhân văn của câu chuyện."
        }
      }
    ]
  },

  // =========================================================================
  // READING 2 — A BETTER BALANCE, ONE SMALL CHANGE AT A TIME
  // Unit 7 Balance + Unit 8 Essentials (Câu 191 - 195)
  // =========================================================================
  {
    id: 2,
    title: "A Better Balance, One Small Change at a Time",
    genre: "Truyện kể trải nghiệm – Unit 7 Balance + Unit 8 Essentials",
    units: "Units 7–8 (Balance & Essentials)",
    unitNumbers: [7, 8],
    vocabularyHighlights: [
      { word: "productive", meaning: "năng suất, hiệu quả" },
      { word: "to-do list", meaning: "danh sách việc cần làm" },
      { word: "microbreaks", meaning: "những khoảng nghỉ giải lao ngắn 5 phút" },
      { word: "weekly budget", meaning: "ngân sách chi tiêu hàng tuần" },
      { word: "second-hand", meaning: "đồ đã qua sử dụng để tiết kiệm và giảm rác" }
    ],
    paragraphs: [
      {
        index: "P1",
        label: "Đoạn 1",
        text: "During her first year at university, Maya thought a productive day had to be a busy day. She attended classes, worked in a café, and answered messages late at night. She often forgot to eat properly and spent money on fizzy drinks and snacks. Although she was busy, she found it difficult to concentrate when she needed to study."
      },
      {
        index: "P2",
        label: "Đoạn 2",
        text: "Maya decided to make three changes. First, she wrote a short to-do list every morning with only three important tasks. Second, she started taking five-minute microbreaks after long periods of study. During these breaks, she walked outside instead of looking at her phone. Third, she made a weekly budget and prepared simple meals at home rather than buying expensive food every day."
      },
      {
        index: "P3",
        label: "Đoạn 3",
        text: "Her first week was not easy. She sometimes wanted to check social media during her breaks, and making lunch took more time than buying it. However, she noticed that she could finish her homework earlier because she was not switching between tasks so often. She also began buying some second-hand clothes because they cost less and could reduce waste."
      },
      {
        index: "P4",
        label: "Đoạn 4",
        text: "Three months later, Maya still works hard, but she no longer believes that working without rest is the best way to succeed. She has saved enough money for a short trip and spends more time with friends. Her advice is simple: choose a few habits that fit your life and keep practising them. You do not need to change everything in one day."
      }
    ],
    questions: [
      {
        id: 191,
        questionNumber: "CÂU 191",
        questionType: "DETAIL",
        prompt: "What was Maya’s main problem at the beginning?",
        options: [
          { key: "a", text: "She was busy but could not focus well on her studies." },
          { key: "b", text: "She had no classes and felt bored." },
          { key: "c", text: "She spent too much time travelling." }
        ],
        answer: "a",
        location: "Đoạn [P1]: 'Although she was busy, she found it difficult to concentrate when she needed to study.'",
        explanation: "P1: Vấn đề chính của Maya là cô luôn bận rộn nhưng lại khó tập trung vào việc học.",
        optionAnalysis: {
          a: "ĐÚNG – Khớp chính xác với câu cuối của P1.",
          b: "SAI – Cô có lịch học và đi làm rất kín, không hề rảnh rỗi hay buồn chán.",
          c: "SAI – Không nhắc đến việc đi lại quá nhiều."
        }
      },
      {
        id: 192,
        questionNumber: "CÂU 192",
        questionType: "DETAIL",
        prompt: "Which of these was NOT one of Maya’s first three changes?",
        options: [
          { key: "a", text: "Making a weekly budget." },
          { key: "b", text: "Taking short breaks." },
          { key: "c", text: "Joining a fourth university club." }
        ],
        answer: "c",
        location: "Đoạn [P2]: 3 thay đổi là to-do list (3 nhiệm vụ), microbreaks (nghỉ 5 phút), và weekly budget (ngân sách tuần).",
        explanation: "P2: Maya không hề tham gia thêm câu lạc bộ đại học nào.",
        optionAnalysis: {
          a: "SAI (là thay đổi số 3): 'she made a weekly budget'.",
          b: "SAI (là thay đổi số 2): 'taking five-minute microbreaks'.",
          c: "ĐÚNG (KHÔNG PHẢI thay đổi của Maya): Tham gia CLB thứ 4 không có trong bài."
        }
      },
      {
        id: 193,
        questionNumber: "CÂU 193",
        questionType: "DETAIL",
        prompt: "Why did Maya start buying some second-hand clothes?",
        options: [
          { key: "a", text: "They were always of better quality than new clothes." },
          { key: "b", text: "They were cheaper and could help reduce waste." },
          { key: "c", text: "All shops near her stopped selling new clothes." }
        ],
        answer: "b",
        location: "Đoạn [P3]: 'buying some second-hand clothes because they cost less and could reduce waste.'",
        explanation: "P3: Đồ second-hand có giá rẻ hơn và giúp cắt giảm lượng rác thải ra môi trường.",
        optionAnalysis: {
          a: "SAI – Bài không nói đồ cũ luôn có chất lượng tốt hơn đồ mới.",
          b: "ĐÚNG – Đúng theo thông tin P3 ('cost less and could reduce waste').",
          c: "SAI – Không có việc các cửa hàng ngừng bán đồ mới."
        }
      },
      {
        id: 194,
        questionNumber: "CÂU 194",
        questionType: "REFERENCE",
        prompt: "What does “them” refer to in “keep practising them” (P4)?",
        options: [
          { key: "a", text: "A few useful habits." },
          { key: "b", text: "Her old classmates." },
          { key: "c", text: "The snacks she used to buy." }
        ],
        answer: "a",
        location: "Đoạn [P4]: 'choose a few habits that fit your life and keep practising them.'",
        explanation: "P4: Đại từ 'them' thay thế cho 'a few habits' (một vài thói quen phù hợp) ở vế ngay trước đó.",
        optionAnalysis: {
          a: "ĐÚNG – 'them' chỉ các thói quen hữu ích cần kiên trì luyện tập.",
          b: "SAI – Không chỉ bạn học cũ.",
          c: "SAI – Không chỉ các món đồ ăn vặt."
        }
      },
      {
        id: 195,
        questionNumber: "CÂU 195",
        questionType: "MAIN IDEA",
        prompt: "Which title best summarises Maya’s lesson?",
        options: [
          { key: "a", text: "Working longer always means working better." },
          { key: "b", text: "Good results can come from a few sustainable habits." },
          { key: "c", text: "Taking breaks makes people less productive." }
        ],
        answer: "b",
        location: "Toàn bài đọc [P1]–[P4]",
        explanation: "Bài học của Maya: Những kết quả tốt đẹp và bền vững bắt nguồn từ việc duy trì một vài thói quen nhỏ và kiên trì rèn luyện.",
        optionAnalysis: {
          a: "SAI – Ngược lại, làm việc quá dài không nghỉ không đồng nghĩa với hiệu quả.",
          b: "ĐÚNG – Tóm lược chuẩn xác thông điệp toàn bài.",
          c: "SAI – Nghỉ ngơi ngắn (microbreak) thực tế giúp cô tập trung tốt hơn."
        }
      }
    ]
  },

  // =========================================================================
  // READING 3 — FIVE UNUSUAL WAYS TO TAKE A BREAK
  // Unit 9 Taking a break + Unit 10 The Senses (Câu 196 - 200: Matching A-E)
  // =========================================================================
  {
    id: 3,
    title: "Five Unusual Ways to Take a Break",
    genre: "Bài đọc ghép thông tin (Matching) – Unit 9 Taking a break + Unit 10 The Senses",
    units: "Units 9–10 (Taking a break & The senses)",
    unitNumbers: [9, 10],
    vocabularyHighlights: [
      { word: "identify natural sounds", meaning: "nhận diện các âm thanh tự nhiên" },
      { word: "colour walk", meaning: "chuyến tản bộ khám phá màu sắc công trình" },
      { word: "dark dinner", meaning: "bữa tối trong bóng tối để đánh thức vị giác & khứu giác" },
      { word: "city sound museum", meaning: "bảo tàng âm thanh đời sống thường nhật" },
      { word: "offline cabin", meaning: "căn nhà gỗ rừng không có Wi-Fi/điện thoại để tái nạp năng lượng" }
    ],
    paragraphs: [
      {
        index: "A",
        label: "Section A: The Sound Garden",
        text: "THE SOUND GARDEN. Visitors follow a short path through trees while listening to water, birds and the wind. There are no loud speakers or recorded songs. A guide asks everyone to close their eyes for one minute and identify as many natural sounds as possible. The activity is popular with people who spend most of their days in noisy offices."
      },
      {
        index: "B",
        label: "Section B: The Colour Walk",
        text: "THE COLOUR WALK. In a small historic town, an artist leads visitors through streets filled with colourful houses. Participants take photographs and learn how colours can change the atmosphere of a place. At the end, they create a simple picture inspired by the buildings they have seen. No painting experience is required."
      },
      {
        index: "C",
        label: "Section C: The Dark Dinner",
        text: "THE DARK DINNER. Guests eat a three-course meal in a room with almost no light. The aim is to notice flavour, texture and scent more carefully when they cannot see the food. Before the meal, staff explain the safety rules and ask about food allergies. Some visitors find the experience surprising, while others feel slightly nervous."
      },
      {
        index: "D",
        label: "Section D: The City Sound Museum",
        text: "THE CITY SOUND MUSEUM. Instead of showing paintings, this museum collects recordings of ordinary life: a market opening, a train arriving and children playing in a square. Visitors listen to short clips and guess what they are hearing. They can even record a familiar sound from their own neighbourhood for a future exhibition."
      },
      {
        index: "E",
        label: "Section E: The Offline Forest Cabin",
        text: "THE OFFLINE FOREST CABIN. This quiet cabin has no Wi-Fi or television. Visitors leave their phones in a safe box, prepare simple meals and go walking on nearby trails. The owner recommends staying for at least two nights because the first day can feel strange without messages and social media. After that, many guests say they sleep better and feel more relaxed."
      }
    ],
    questions: [
      {
        id: 196,
        questionNumber: "CÂU 196",
        questionType: "MATCHING INFORMATION",
        prompt: "Which experience asks people to have a meal without using sight?",
        options: [
          { key: "a", text: "The Sound Garden" },
          { key: "b", text: "The Colour Walk" },
          { key: "c", text: "The Dark Dinner" },
          { key: "d", text: "The City Sound Museum" },
          { key: "e", text: "The Offline Forest Cabin" }
        ],
        answer: "c",
        location: "Đoạn C: 'Guests eat a three-course meal in a room with almost no light... cannot see the food.'",
        explanation: "Đoạn C: The Dark Dinner cho thực khách dùng bữa trong phòng gần như không có ánh sáng ('in a room with almost no light').",
        optionAnalysis: {
          a: "Đoạn A: Lắng nghe âm thanh thiên nhiên.",
          b: "Đoạn B: Chụp ảnh và vẽ tranh nhà nhiều màu sắc.",
          c: "ĐÚNG – Trải nghiệm ăn tối trong bóng tối (The Dark Dinner).",
          d: "Đoạn D: Nghe bản ghi âm tiếng động đời thường.",
          e: "Đoạn E: Ở nhà gỗ không điện thoại/mạng."
        }
      },
      {
        id: 197,
        questionNumber: "CÂU 197",
        questionType: "MATCHING INFORMATION",
        prompt: "Which activity invites visitors to record sounds from where they live?",
        options: [
          { key: "a", text: "The Sound Garden" },
          { key: "b", text: "The Colour Walk" },
          { key: "c", text: "The Dark Dinner" },
          { key: "d", text: "The City Sound Museum" },
          { key: "e", text: "The Offline Forest Cabin" }
        ],
        answer: "d",
        location: "Đoạn D: 'They can even record a familiar sound from their own neighbourhood for a future exhibition.'",
        explanation: "Đoạn D: The City Sound Museum mời du khách tự thu âm một âm thanh quen thuộc từ khu phố nơi họ sống để góp vào triển lãm tương lai.",
        optionAnalysis: {
          a: "Đoạn A: Nhắm mắt nghe âm thanh tự nhiên.",
          b: "Đoạn B: Sáng tạo tranh vẽ từ nhà cửa.",
          c: "Đoạn C: Thưởng thức bữa ăn trong bóng tối.",
          d: "ĐÚNG – Thu âm tiếng động từ khu phố (The City Sound Museum).",
          e: "Đoạn E: Cất điện thoại để nghỉ ngơi tĩnh tâm."
        }
      },
      {
        id: 198,
        questionNumber: "CÂU 198",
        questionType: "MATCHING INFORMATION",
        prompt: "Where would visitors have to put away their phones during their stay?",
        options: [
          { key: "a", text: "The Sound Garden" },
          { key: "b", text: "The Colour Walk" },
          { key: "c", text: "The Dark Dinner" },
          { key: "d", text: "The City Sound Museum" },
          { key: "e", text: "The Offline Forest Cabin" }
        ],
        answer: "e",
        location: "Đoạn E: 'Visitors leave their phones in a safe box, prepare simple meals and go walking on nearby trails.'",
        explanation: "Đoạn E: The Offline Forest Cabin yêu cầu du khách cất điện thoại vào hộp an toàn và không dùng Wi-Fi / TV.",
        optionAnalysis: {
          a: "Đoạn A: Chỉ nhắm mắt 1 phút.",
          b: "Đoạn B: Có dùng điện thoại để chụp ảnh (take photographs).",
          c: "Đoạn C: Chỉ ăn bữa tối trong phòng tối.",
          d: "Đoạn D: Nghe các đoạn ghi âm ở bảo tàng.",
          e: "ĐÚNG – Cất điện thoại vào hộp an toàn (The Offline Forest Cabin)."
        }
      },
      {
        id: 199,
        questionNumber: "CÂU 199",
        questionType: "MATCHING INFORMATION",
        prompt: "Which experience helps visitors look at buildings and create their own artwork?",
        options: [
          { key: "a", text: "The Sound Garden" },
          { key: "b", text: "The Colour Walk" },
          { key: "c", text: "The Dark Dinner" },
          { key: "d", text: "The City Sound Museum" },
          { key: "e", text: "The Offline Forest Cabin" }
        ],
        answer: "b",
        location: "Đoạn B: 'At the end, they create a simple picture inspired by the buildings they have seen.'",
        explanation: "Đoạn B: The Colour Walk đưa khách ngắm các tòa nhà nhiều màu sắc và tự tay vẽ một bức tranh lấy cảm hứng từ đó.",
        optionAnalysis: {
          a: "Đoạn A: Đi bộ trong vườn nghe tiếng chim và nước.",
          b: "ĐÚNG – Ngắm nhà rực rỡ và tự vẽ tranh (The Colour Walk).",
          c: "Đoạn C: Trải nghiệm ẩm thực không ánh sáng.",
          d: "Đoạn D: Nghe âm thanh đường phố đời thường.",
          e: "Đoạn E: Đi dạo trong rừng không kết nối mạng."
        }
      },
      {
        id: 200,
        questionNumber: "CÂU 200",
        questionType: "MATCHING INFORMATION",
        prompt: "Which experience asks visitors to close their eyes and notice natural sounds?",
        options: [
          { key: "a", text: "The Sound Garden" },
          { key: "b", text: "The Colour Walk" },
          { key: "c", text: "The Dark Dinner" },
          { key: "d", text: "The City Sound Museum" },
          { key: "e", text: "The Offline Forest Cabin" }
        ],
        answer: "a",
        location: "Đoạn A: 'A guide asks everyone to close their eyes for one minute and identify as many natural sounds as possible.'",
        explanation: "Đoạn A: The Sound Garden yêu cầu du khách nhắm mắt trong 1 phút để nhận biết càng nhiều âm thanh tự nhiên càng tốt.",
        optionAnalysis: {
          a: "ĐÚNG – Nhắm mắt lắng nghe thiên nhiên (The Sound Garden).",
          b: "Đoạn B: Quan sát màu sắc nhà cửa.",
          c: "Đoạn C: Phòng tối để cảm nhận mùi vị thức ăn.",
          d: "Đoạn D: Nghe ghi âm âm thanh thành phố.",
          e: "Đoạn E: Đi dạo đường mòn trong rừng."
        }
      }
    ]
  }
];
