import type { ReadingPassage } from './readingData';

/**
 * Six extra B1 reading passages (Câu 201 – 230).
 *
 * These passages deliberately live outside `ALL_QUESTIONS` so the main quiz
 * bank keeps its original 200-question count. They are merged with
 * `READING_PASSAGES` on the reading page only.
 */
export const EXTRA_READING_PASSAGES: ReadingPassage[] = [
  // =========================================================================
  // READING 4 — THE NIGHT MARKET THAT BROUGHT A STREET BACK TO LIFE
  // Unit 6 Where I'm from + Unit 7 Balance (Câu 201 - 205)
  // =========================================================================
  {
    id: 4,
    title: 'The Night Market That Brought a Street Back to Life',
    genre: 'Bài báo cộng đồng – Unit 6 Where I’m from + Unit 7 Balance',
    units: 'Units 6–7 (Where I’m from & Balance)',
    unitNumbers: [6, 7],
    vocabularyHighlights: [
      { word: 'stall', meaning: 'quầy hàng, sạp bán hàng' },
      { word: 'resident', meaning: 'cư dân, người sống trong khu vực' },
      { word: 'complain', meaning: 'phàn nàn' },
      { word: 'organiser', meaning: 'người tổ chức' },
      { word: 'weekly rhythm', meaning: 'nhịp sinh hoạt đều đặn hằng tuần' }
    ],
    paragraphs: [
      {
        index: 'P1',
        label: 'Đoạn 1',
        text: "For years, the street behind the railway station was quiet after six o'clock. Shops closed, office workers hurried home, and the only light came from a single bus stop. Then, last spring, a group of local traders decided to test an idea: a night market open every Friday from six to ten. They hoped it would bring people back to the area and help small businesses earn more."
      },
      {
        index: 'P2',
        label: 'Đoạn 2',
        text: 'The first evening was a surprise. Families arrived with children, students met friends, and older residents came to look at old photographs displayed by the history club. There were only twelve stalls at first, selling noodles, second-hand books, fruit and handmade soap. By nine o’clock, almost everything had been sold. The organisers realised that the street needed places to sit and talk, not just shops.'
      },
      {
        index: 'P3',
        label: 'Đoạn 3',
        text: 'Within two months, the market had grown to forty stalls. A group of musicians played near the station, and a young artist painted a sign for each stall. However, not everyone was happy. Some residents complained about the noise, and a few shop owners said the market took customers away from their indoor cafés. The organisers responded by ending music at half past nine and inviting the cafés to sell drinks outside.'
      },
      {
        index: 'P4',
        label: 'Đoạn 4',
        text: 'Today the market is part of the neighbourhood’s weekly rhythm. It has created several part-time jobs and given people a reason to spend time outdoors. More importantly, it has changed how residents feel about their street. “Before, I only knew the people in my building,” says one older woman. “Now I know the people who sell me vegetables, and they know my name.”'
      }
    ],
    questions: [
      {
        id: 201,
        questionNumber: 'CÂU 201',
        questionType: 'MAIN IDEA',
        prompt: 'What is the passage mainly about?',
        options: [
          { key: 'a', text: 'How a weekly market changed a street and its community.' },
          { key: 'b', text: 'Why night markets are more popular than indoor shops.' },
          { key: 'c', text: 'How to open a successful food stall in a city.' }
        ],
        answer: 'a',
        location: 'Đoạn [P1] và [P4]: ý tưởng mở chợ đêm → chợ trở thành một phần nhịp sống và thay đổi cảm nhận của cư dân.',
        explanation:
          'Cả bài kể về việc chợ đêm ra đời, phát triển và tác động tích cực đến khu phố. Đáp án b và c chỉ là chi tiết nhỏ, không phải ý chính.'
      },
      {
        id: 202,
        questionNumber: 'CÂU 202',
        questionType: 'DETAIL',
        prompt: 'How did the organisers deal with residents’ complaints about noise?',
        options: [
          { key: 'a', text: 'They moved the market to the railway station.' },
          { key: 'b', text: 'They stopped the music earlier and invited cafés to sell drinks outside.' },
          { key: 'c', text: 'They closed the market for two months.' }
        ],
        answer: 'b',
        location: 'Đoạn [P3]: “ending music at half past nine and inviting the cafés to sell drinks outside.”',
        explanation:
          'P3 nêu rõ cách ban tổ chức phản hồi: kết thúc nhạc lúc 9 giờ 30 và mời các quán cà phê bán đồ uống bên ngoài.'
      },
      {
        id: 203,
        questionNumber: 'CÂU 203',
        questionType: 'INFERENCE',
        prompt: 'What can be inferred about the market after its first evening?',
        options: [
          { key: 'a', text: 'People wanted to stay and socialise, not only buy things.' },
          { key: 'b', text: 'The stalls did not sell enough food.' },
          { key: 'c', text: 'The history club wanted to close the market.' }
        ],
        answer: 'a',
        location: 'Đoạn [P2]: “almost everything had been sold” và “the street needed places to sit and talk, not just shops.”',
        explanation:
          'Hàng bán hết nhanh và ban tổ chức nhận ra mọi người cần chỗ ngồi trò chuyện. Điều này cho thấy nhu cầu giao lưu, không chỉ mua sắm.'
      },
      {
        id: 204,
        questionNumber: 'CÂU 204',
        questionType: 'VOCAB-IN-CONTEXT',
        prompt: 'The phrase “weekly rhythm” in paragraph 4 is closest in meaning to ______.',
        options: [
          { key: 'a', text: 'a regular pattern of activities every week' },
          { key: 'b', text: 'a song played at the market' },
          { key: 'c', text: 'a list of shops open at night' }
        ],
        answer: 'a',
        location: 'Đoạn [P4]: “part of the neighbourhood’s weekly rhythm.”',
        explanation:
          '“Rhythm” ở đây ẩn dụ cho nhịp sinh hoạt đều đặn. “Weekly rhythm” = nhịp hoạt động lặp lại mỗi tuần.'
      },
      {
        id: 205,
        questionNumber: 'CÂU 205',
        questionType: 'REFERENCE',
        prompt: 'In paragraph 4, what does “it” in “it has changed how residents feel” refer to?',
        options: [
          { key: 'a', text: 'the neighbourhood' },
          { key: 'b', text: 'the market' },
          { key: 'c', text: 'the older woman' }
        ],
        answer: 'b',
        location: 'Đoạn [P4]: “Today the market is part of… It has created… More importantly, it has changed…”',
        explanation:
          'Các câu trước đều lấy “the market” làm chủ ngữ, nên “it” thay thế cho “the market”.'
      }
    ]
  },

  // =========================================================================
  // READING 5 — A WEEK WITHOUT SCREENS
  // Unit 7 Balance + Unit 10 The senses (Câu 206 - 210)
  // =========================================================================
  {
    id: 5,
    title: 'A Week Without Screens',
    genre: 'Trải nghiệm cá nhân – Unit 7 Balance + Unit 10 The senses',
    units: 'Units 7 & 10 (Balance & The senses)',
    unitNumbers: [7, 10],
    vocabularyHighlights: [
      { word: 'landline', meaning: 'điện thoại bàn' },
      { word: 'reach for', meaning: 'với tay lấy' },
      { word: 'proper meal', meaning: 'bữa ăn tử tế, nấu nướng đàng hoàng' },
      { word: 'habit', meaning: 'thói quen' },
      { word: 'notice', meaning: 'để ý, nhận ra' }
    ],
    paragraphs: [
      {
        index: 'P1',
        label: 'Đoạn 1',
        text: 'When Mia’s phone broke on a Sunday evening, she planned to buy a new one the next day. But the repair shop was closed for a week, so she decided to see what would happen if she used no screens at all. She told her friends to call her landline or visit, put her laptop in a drawer, and wrote a simple plan on paper.'
      },
      {
        index: 'P2',
        label: 'Đoạn 2',
        text: 'The first two days felt strange. She reached for her phone during breakfast and found nothing there. On the bus, she had no music, so she looked out of the window and noticed that the trees along the route were already turning yellow. In the evening, she read a novel she had started months before. “I had forgotten how long a chapter could feel,” she says. “At first I was bored. Then I was interested.”'
      },
      {
        index: 'P3',
        label: 'Đoạn 3',
        text: 'By Wednesday, Mia had started cooking proper meals instead of eating while watching videos. She used the extra time to call her grandmother, who lived alone. They spoke for an hour, much longer than their usual short messages. Mia also slept better, partly because she stopped looking at bright screens before bed.'
      },
      {
        index: 'P4',
        label: 'Đoạn 4',
        text: 'When her phone was repaired, Mia did not return to her old habits completely. She still checks social media, but she leaves her phone outside the bedroom and takes a walk every evening without it. “The week did not change my whole life,” she says. “It just showed me how much time I spent without noticing. Now I choose some of it back.”'
      }
    ],
    questions: [
      {
        id: 206,
        questionNumber: 'CÂU 206',
        questionType: 'MAIN IDEA',
        prompt: 'What is the passage mainly about?',
        options: [
          { key: 'a', text: 'Why smartphones are difficult to repair.' },
          { key: 'b', text: 'What a woman learned from spending a week without screens.' },
          { key: 'c', text: 'How to cook healthy meals at home.' }
        ],
        answer: 'b',
        location: 'Đoạn [P1] mở đầu trải nghiệm, [P4] tổng kết bài học: “It just showed me how much time I spent without noticing.”',
        explanation:
          'Bài đọc kể trải nghiệm một tuần không dùng màn hình và những thay đổi trong nhận thức, sinh hoạt của Mia.'
      },
      {
        id: 207,
        questionNumber: 'CÂU 207',
        questionType: 'DETAIL',
        prompt: 'What made Mia start her week without screens?',
        options: [
          { key: 'a', text: 'Her phone broke and the repair shop was closed for a week.' },
          { key: 'b', text: 'She wanted to cook more meals at home.' },
          { key: 'c', text: 'Her grandmother asked her to stop using social media.' }
        ],
        answer: 'a',
        location: 'Đoạn [P1]: “her phone broke… the repair shop was closed for a week, so she decided to see what would happen…”',
        explanation:
          'Nguyên nhân trực tiếp là điện thoại hỏng và cửa hàng sửa chữa đóng cửa một tuần.'
      },
      {
        id: 208,
        questionNumber: 'CÂU 208',
        questionType: 'INFERENCE',
        prompt: 'Why did Mia speak to her grandmother for much longer than usual?',
        options: [
          { key: 'a', text: 'Her grandmother had bought a new phone.' },
          { key: 'b', text: 'She had more free time and was paying more attention to people.' },
          { key: 'c', text: 'She needed help with her broken phone.' }
        ],
        answer: 'b',
        location: 'Đoạn [P3]: “She used the extra time to call her grandmother… They spoke for an hour…”',
        explanation:
          'Không dùng màn hình giúp Mia có thêm thời gian rảnh, nhờ đó cô dành nhiều thời gian trò chuyện với bà hơn.'
      },
      {
        id: 209,
        questionNumber: 'CÂU 209',
        questionType: 'VOCAB-IN-CONTEXT',
        prompt: 'The phrase “proper meals” in paragraph 3 is closest in meaning to ______.',
        options: [
          { key: 'a', text: 'real meals that are cooked and eaten with care' },
          { key: 'b', text: 'small snacks eaten quickly' },
          { key: 'c', text: 'meals ordered from a restaurant' }
        ],
        answer: 'a',
        location: 'Đoạn [P3]: “cooking proper meals instead of eating while watching videos.”',
        explanation:
          '“Proper meal” trái nghĩa với việc ăn qua loa trước màn hình; ở đây là bữa ăn tử tế, được nấu và ăn cẩn thận.'
      },
      {
        id: 210,
        questionNumber: 'CÂU 210',
        questionType: 'REFERENCE',
        prompt: 'In paragraph 4, what does “it” in “takes a walk every evening without it” refer to?',
        options: [
          { key: 'a', text: 'the bedroom' },
          { key: 'b', text: 'her phone' },
          { key: 'c', text: 'the evening walk' }
        ],
        answer: 'b',
        location: 'Đoạn [P4]: “she leaves her phone outside the bedroom and takes a walk every evening without it.”',
        explanation:
          '“It” thay thế cho “her phone” — cô ấy đi bộ mà không mang theo điện thoại.'
      }
    ]
  },

  // =========================================================================
  // READING 6 — SEVEN THINGS, FOUR COUNTRIES, ONE BACKPACK
  // Unit 8 Essentials + Unit 9 Taking a break (Câu 211 - 215)
  // =========================================================================
  {
    id: 6,
    title: 'Seven Things, Four Countries, One Backpack',
    genre: 'Bài kể chuyện du lịch – Unit 8 Essentials + Unit 9 Taking a break',
    units: 'Units 8–9 (Essentials & Taking a break)',
    unitNumbers: [8, 9],
    vocabularyHighlights: [
      { word: 'packing list', meaning: 'danh sách đồ cần mang theo' },
      { word: 'waterproof', meaning: 'chống nước, không thấm nước' },
      { word: 'unprepared', meaning: 'chưa chuẩn bị đầy đủ' },
      { word: 'explore', meaning: 'khám phá' },
      { word: 'light', meaning: 'nhẹ (hành lý)' }
    ],
    paragraphs: [
      {
        index: 'P1',
        label: 'Đoạn 1',
        text: 'When Daniel planned a three-week trip through four countries, his friends laughed at his packing list. He was taking only seven items of clothing, one pair of shoes and a small bag for washing things. “Everyone told me I would need more,” he says. “But I wanted to travel without carrying a heavy bag on trains and buses.”'
      },
      {
        index: 'P2',
        label: 'Đoạn 2',
        text: 'Daniel chose clothes that could be worn together: two T-shirts, one long-sleeved shirt, one light sweater, one pair of trousers, one pair of shorts and a waterproof jacket. He washed something every evening in the sink and hung it near the window. The system worked well in warm cities, but in the mountains the sweater was not enough. He bought a warm hat for six euros and wore it every day for a week.'
      },
      {
        index: 'P3',
        label: 'Đoạn 3',
        text: 'The hardest part was not the clothing but the small decisions. Without many things to choose from, he spent less time deciding what to wear and more time exploring. He also discovered that he did not miss the things he had left at home. “I thought I would feel unprepared,” he says. “Instead, I felt lighter and more free.”'
      },
      {
        index: 'P4',
        label: 'Đoạn 4',
        text: 'Since the trip, Daniel has changed how he shops. He buys fewer clothes and chooses items that are strong and useful. He now believes that a good travel list is not about taking everything possible; it is about knowing what you actually need. His next plan is a winter trip, but this time he will add one more sweater.'
      }
    ],
    questions: [
      {
        id: 211,
        questionNumber: 'CÂU 211',
        questionType: 'MAIN IDEA',
        prompt: 'What is the passage mainly about?',
        options: [
          { key: 'a', text: 'How travelling with very few things changed Daniel’s attitude.' },
          { key: 'b', text: 'Why winter travel is more difficult than summer travel.' },
          { key: 'c', text: 'How to find cheap clothes in different countries.' }
        ],
        answer: 'a',
        location: 'Toàn bài, đặc biệt [P3] “I felt lighter and more free” và [P4] “Daniel has changed how he shops.”',
        explanation:
          'Bài kể về chuyến đi với hành lý tối giản và những thay đổi trong cách Daniel suy nghĩ, mua sắm.'
      },
      {
        id: 212,
        questionNumber: 'CÂU 212',
        questionType: 'DETAIL',
        prompt: 'Why did Daniel buy a warm hat in the mountains?',
        options: [
          { key: 'a', text: 'He had lost his waterproof jacket.' },
          { key: 'b', text: 'His sweater was not warm enough for the cold weather.' },
          { key: 'c', text: 'He wanted to look like a local person.' }
        ],
        answer: 'b',
        location: 'Đoạn [P2]: “in the mountains the sweater was not enough. He bought a warm hat…”',
        explanation:
          'Áo len không đủ ấm ở vùng núi nên Daniel mua thêm mũ ấm.'
      },
      {
        id: 213,
        questionNumber: 'CÂU 213',
        questionType: 'INFERENCE',
        prompt: 'What does Daniel’s experience suggest about packing for a trip?',
        options: [
          { key: 'a', text: 'Fewer carefully chosen items can be more practical than a large suitcase.' },
          { key: 'b', text: 'You should always take clothes for every kind of weather.' },
          { key: 'c', text: 'It is impossible to travel for three weeks with a small bag.' }
        ],
        answer: 'a',
        location: 'Đoạn [P3]–[P4]: ít lựa chọn hơn giúp anh có thêm thời gian khám phá; “a good travel list… knowing what you actually need.”',
        explanation:
          'Trải nghiệm của Daniel cho thấy chọn ít đồ nhưng phù hợp có thể thực tế hơn mang theo quá nhiều.'
      },
      {
        id: 214,
        questionNumber: 'CÂU 214',
        questionType: 'VOCAB-IN-CONTEXT',
        prompt: 'The word “waterproof” in paragraph 2 is closest in meaning to ______.',
        options: [
          { key: 'a', text: 'keeping water out' },
          { key: 'b', text: 'made of very light material' },
          { key: 'c', text: 'suitable for cold weather' }
        ],
        answer: 'a',
        location: 'Đoạn [P2]: “a waterproof jacket.”',
        explanation:
          '“Waterproof” = chống nước, không để nước thấm qua.'
      },
      {
        id: 215,
        questionNumber: 'CÂU 215',
        questionType: 'REFERENCE',
        prompt: 'In paragraph 2, what does “The system” refer to?',
        options: [
          { key: 'a', text: 'the train and bus network' },
          { key: 'b', text: 'washing one item each evening and drying it overnight' },
          { key: 'c', text: 'the list of clothes Daniel packed' }
        ],
        answer: 'b',
        location: 'Đoạn [P2]: “He washed something every evening… hung it near the window. The system worked well…”',
        explanation:
          '“The system” chỉ cách giặt đồ mỗi tối và phơi qua đêm để luôn có quần áo sạch.'
      }
    ]
  },

  // =========================================================================
  // READING 7 — WHY WE TASTE WITH OUR EARS
  // Unit 8 Essentials + Unit 10 The senses (Câu 216 - 220)
  // =========================================================================
  {
    id: 7,
    title: 'Why We Taste with Our Ears',
    genre: 'Bài khoa học thường thức – Unit 8 Essentials + Unit 10 The senses',
    units: 'Units 8 & 10 (Essentials & The senses)',
    unitNumbers: [8, 10],
    vocabularyHighlights: [
      { word: 'flavour', meaning: 'hương vị' },
      { word: 'savoury', meaning: 'có vị mặn, đậm đà' },
      { word: 'volunteer', meaning: 'người tình nguyện tham gia thử nghiệm' },
      { word: 'identical', meaning: 'giống hệt nhau' },
      { word: 'ingredient', meaning: 'nguyên liệu' }
    ],
    paragraphs: [
      {
        index: 'P1',
        label: 'Đoạn 1',
        text: 'Most people believe that taste happens only in the mouth. However, scientists have shown that flavour is created by several senses working together. The tongue identifies sweet, sour, salty, bitter and savoury, but the nose adds most of the information we call “taste”. The ears and eyes also play a part, even if we do not notice them.'
      },
      {
        index: 'P2',
        label: 'Đoạn 2',
        text: 'In one experiment, volunteers ate the same crisps in two different rooms. In the first room, the sound of crunching was played loudly through headphones. In the second, the sound was quieter. The volunteers said the crisps in the first room were fresher and tastier, although the food was identical. This suggests that the sound of eating can change our experience of food.'
      },
      {
        index: 'P3',
        label: 'Đoạn 3',
        text: 'Colour matters too. In another study, people were given orange juice that had been coloured green. Many said it tasted strange, even though it contained the same ingredients as normal juice. Restaurants use this knowledge when they choose plates and lighting. A white plate can make a dish look fresh, while warm light can make bread look more golden.'
      },
      {
        index: 'P4',
        label: 'Đoạn 4',
        text: 'These findings are useful for more than selling food. Hospitals and care homes can improve meals for older people who have lost some of their sense of smell. By adding stronger flavours, attractive colours and pleasant sounds, they can make food easier and more enjoyable to eat. Understanding our senses, it seems, can help us eat better — and feel better.'
      }
    ],
    questions: [
      {
        id: 216,
        questionNumber: 'CÂU 216',
        questionType: 'MAIN IDEA',
        prompt: 'What is the passage mainly about?',
        options: [
          { key: 'a', text: 'Why some foods are healthier than others.' },
          { key: 'b', text: 'How several senses work together to create flavour.' },
          { key: 'c', text: 'How restaurants choose the colour of their plates.' }
        ],
        answer: 'b',
        location: 'Đoạn [P1]: “flavour is created by several senses working together”; các đoạn sau đưa ví dụ về âm thanh, màu sắc.',
        explanation:
          'Bài đọc giải thích hương vị được tạo nên bởi nhiều giác quan, không chỉ riêng lưỡi.'
      },
      {
        id: 217,
        questionNumber: 'CÂU 217',
        questionType: 'DETAIL',
        prompt: 'What did volunteers say about the crisps in the room with loud crunching sounds?',
        options: [
          { key: 'a', text: 'They were fresher and tastier.' },
          { key: 'b', text: 'They were too salty.' },
          { key: 'c', text: 'They were softer than usual.' }
        ],
        answer: 'a',
        location: 'Đoạn [P2]: “The volunteers said the crisps in the first room were fresher and tastier…”',
        explanation:
          'Dù là cùng loại khoai giống hệt, người thử nói khoai ở phòng có tiếng giòn to ngon hơn và tươi hơn.'
      },
      {
        id: 218,
        questionNumber: 'CÂU 218',
        questionType: 'INFERENCE',
        prompt: 'Why might a restaurant serve food on a white plate?',
        options: [
          { key: 'a', text: 'White plates are cheaper than coloured ones.' },
          { key: 'b', text: 'The colour can make the food look fresher.' },
          { key: 'c', text: 'White plates keep the food warmer.' }
        ],
        answer: 'b',
        location: 'Đoạn [P3]: “A white plate can make a dish look fresh.”',
        explanation:
          'Vì màu sắc ảnh hưởng đến cảm nhận về món ăn, đĩa trắng có thể khiến món ăn trông tươi ngon hơn.'
      },
      {
        id: 219,
        questionNumber: 'CÂU 219',
        questionType: 'VOCAB-IN-CONTEXT',
        prompt: 'The word “identical” in paragraph 2 is closest in meaning to ______.',
        options: [
          { key: 'a', text: 'exactly the same' },
          { key: 'b', text: 'slightly different' },
          { key: 'c', text: 'freshly cooked' }
        ],
        answer: 'a',
        location: 'Đoạn [P2]: “although the food was identical.”',
        explanation:
          '“Identical” = giống hệt nhau. Đây là mấu chốt: thức ăn như nhau nhưng cảm nhận khác nhau do âm thanh.'
      },
      {
        id: 220,
        questionNumber: 'CÂU 220',
        questionType: 'REFERENCE',
        prompt: 'In paragraph 3, what does “this knowledge” refer to?',
        options: [
          { key: 'a', text: 'the fact that colour changes how food tastes to people' },
          { key: 'b', text: 'the recipe for making orange juice' },
          { key: 'c', text: 'the price of white plates in restaurants' }
        ],
        answer: 'a',
        location: 'Đoạn [P3]: câu trước nói nước cam nhuộm xanh bị cho là lạ vị; sau đó “Restaurants use this knowledge…”',
        explanation:
          '“This knowledge” chỉ kiến thức vừa nêu: màu sắc có thể thay đổi cảm nhận về vị của đồ ăn, thức uống.'
      }
    ]
  },

  // =========================================================================
  // READING 8 — THE REPAIR CAFÉ WHERE NOTHING IS THROWN AWAY
  // Unit 6 Where I'm from + Unit 8 Essentials (Câu 221 - 225)
  // =========================================================================
  {
    id: 8,
    title: 'The Repair Café Where Nothing Is Thrown Away',
    genre: 'Bài báo môi trường – Unit 6 Where I’m from + Unit 8 Essentials',
    units: 'Units 6 & 8 (Where I’m from & Essentials)',
    unitNumbers: [6, 8],
    vocabularyHighlights: [
      { word: 'repair', meaning: 'sửa chữa' },
      { word: 'throw away', meaning: 'vứt bỏ' },
      { word: 'volunteer', meaning: 'tình nguyện viên' },
      { word: 'parts', meaning: 'linh kiện, phụ tùng' },
      { word: 'ownership', meaning: 'quyền sở hữu, ý thức về đồ vật mình có' }
    ],
    paragraphs: [
      {
        index: 'P1',
        label: 'Đoạn 1',
        text: 'On the first Saturday of every month, the community hall in a small Dutch town becomes a busy workshop. People arrive carrying broken lamps, torn jackets, old radios and bicycles with flat tyres. They are not there to buy new things. They are there to meet volunteers who can help them repair what they already own.'
      },
      {
        index: 'P2',
        label: 'Đoạn 2',
        text: 'The repair café was started by a retired engineer named Hans. He was worried about the amount of useful objects being thrown away. “Many things are easy to fix,” he says. “But people no longer believe they can fix them, and they do not know who to ask.” At the café, visitors sit beside the volunteer and watch the repair, so they learn something for next time.'
      },
      {
        index: 'P3',
        label: 'Đoạn 3',
        text: 'Not every object can be saved. Some are too old or need parts that are no longer made. However, about seven out of ten items are repaired successfully. The café also collects broken machines for parts and shares tools with a local school. Its yearly electricity use is small, and most visitors come by bicycle.'
      },
      {
        index: 'P4',
        label: 'Đoạn 4',
        text: 'The idea has spread to other towns, and there are now repair cafés in many countries. They do not solve every environmental problem, but they change the way people think about ownership. As one visitor explains, “When you repair something, it becomes yours again. You remember its story.” For many people, that is more valuable than a new product.'
      }
    ],
    questions: [
      {
        id: 221,
        questionNumber: 'CÂU 221',
        questionType: 'MAIN IDEA',
        prompt: 'What is the passage mainly about?',
        options: [
          { key: 'a', text: 'A community project that repairs objects and changes how people think about them.' },
          { key: 'b', text: 'The best way to buy second-hand bicycles.' },
          { key: 'c', text: 'Why Dutch towns have very little electricity.' }
        ],
        answer: 'a',
        location: 'Toàn bài, đặc biệt [P1] mô tả hoạt động sửa đồ và [P4] “they change the way people think about ownership.”',
        explanation:
          'Bài viết giới thiệu quán cà phê sửa chữa cộng đồng và tác động của nó đến thói quen tiêu dùng, vứt bỏ đồ.'
      },
      {
        id: 222,
        questionNumber: 'CÂU 222',
        questionType: 'DETAIL',
        prompt: 'How does the café help visitors learn repair skills?',
        options: [
          { key: 'a', text: 'It gives them a free book about machines.' },
          { key: 'b', text: 'They sit beside a volunteer and watch the repair.' },
          { key: 'c', text: 'They take a course at the local school.' }
        ],
        answer: 'b',
        location: 'Đoạn [P2]: “visitors sit beside the volunteer and watch the repair, so they learn something for next time.”',
        explanation:
          'Khách đến ngồi cạnh tình nguyện viên, quan sát quá trình sửa để lần sau có thể tự làm.'
      },
      {
        id: 223,
        questionNumber: 'CÂU 223',
        questionType: 'INFERENCE',
        prompt: 'Why does the visitor say a repaired object “becomes yours again”?',
        options: [
          { key: 'a', text: 'Because the object becomes more expensive.' },
          { key: 'b', text: 'Because repairing it creates a personal connection and memory.' },
          { key: 'c', text: 'Because the café gives the object a new colour.' }
        ],
        answer: 'b',
        location: 'Đoạn [P4]: “When you repair something, it becomes yours again. You remember its story.”',
        explanation:
          'Sửa đồ tạo ra sự gắn bó và kỷ niệm với vật đó, khiến nó có ý nghĩa hơn một sản phẩm mới.'
      },
      {
        id: 224,
        questionNumber: 'CÂU 224',
        questionType: 'VOCAB-IN-CONTEXT',
        prompt: 'The word “saved” in “Not every object can be saved” is closest in meaning to ______.',
        options: [
          { key: 'a', text: 'kept safe from being thrown away' },
          { key: 'b', text: 'bought for a low price' },
          { key: 'c', text: 'cleaned until it looks new' }
        ],
        answer: 'a',
        location: 'Đoạn [P3]: “Not every object can be saved. Some are too old or need parts that are no longer made.”',
        explanation:
          'Trong ngữ cảnh này, “saved” nghĩa là cứu được, sửa được để không bị vứt bỏ.'
      },
      {
        id: 225,
        questionNumber: 'CÂU 225',
        questionType: 'DETAIL',
        prompt: 'What happens to broken machines that cannot be repaired?',
        options: [
          { key: 'a', text: 'They are sent back to the factory.' },
          { key: 'b', text: 'They are collected for parts.' },
          { key: 'c', text: 'They are sold to the local school.' }
        ],
        answer: 'b',
        location: 'Đoạn [P3]: “The café also collects broken machines for parts…”',
        explanation:
          'Máy móc hỏng được thu lại để lấy phụ tùng cho những lần sửa chữa khác.'
      }
    ]
  },

  // =========================================================================
  // READING 9 — LEARNING TO SEE LIKE A PHOTOGRAPHER
  // Unit 5 Art + Unit 10 The senses (Câu 226 - 230)
  // =========================================================================
  {
    id: 9,
    title: 'Learning to See Like a Photographer',
    genre: 'Bài kể chuyện sáng tạo – Unit 5 Art + Unit 10 The senses',
    units: 'Units 5 & 10 (Art & The senses)',
    unitNumbers: [5, 10],
    vocabularyHighlights: [
      { word: 'satisfied', meaning: 'hài lòng' },
      { word: 'slow down', meaning: 'chậm lại' },
      { word: 'detail', meaning: 'chi tiết' },
      { word: 'capture', meaning: 'ghi lại, bắt trọn khoảnh khắc' },
      { word: 'notice', meaning: 'để ý, nhận ra' }
    ],
    paragraphs: [
      {
        index: 'P1',
        label: 'Đoạn 1',
        text: 'Leo received his first camera for his fifteenth birthday. At first, he photographed everything quickly: his food, his friends, the sky. He took hundreds of pictures but was rarely satisfied. “I thought a good photo was about having an expensive camera,” he says. “Then my teacher told me to slow down and look before I pressed the button.”'
      },
      {
        index: 'P2',
        label: 'Đoạn 2',
        text: 'The first exercise was simple. Leo had to spend ten minutes in one place and write down everything he could see, hear and smell. He chose a bench outside a bakery. At first, he noticed only the door and the bread in the window. After five minutes, he began to see details: the flour on the baker’s hands, a cat sleeping under a chair, the shadow of a bicycle moving across the wall.'
      },
      {
        index: 'P3',
        label: 'Đoạn 3',
        text: 'Slowly, Leo’s photographs changed. He stopped trying to capture whole scenes and started focusing on small moments. He waited for people to walk into the light or for a reflection to appear in a window. Sometimes he took only one photograph in an afternoon, but it was often better than the fifty he used to take.'
      },
      {
        index: 'P4',
        label: 'Đoạn 4',
        text: 'Leo still uses his first camera, and he has started teaching other teenagers at a local art centre. His advice is always the same: put the camera down for a moment. “A photograph is not just what you see,” he says. “It is what you notice. The camera only records it.”'
      }
    ],
    questions: [
      {
        id: 226,
        questionNumber: 'CÂU 226',
        questionType: 'MAIN IDEA',
        prompt: 'What is the passage mainly about?',
        options: [
          { key: 'a', text: 'How Leo learned to slow down and notice details to take better photos.' },
          { key: 'b', text: 'Why expensive cameras are better than cheap ones.' },
          { key: 'c', text: 'How to become a professional photographer before turning eighteen.' }
        ],
        answer: 'a',
        location: 'Đoạn [P1]–[P4]: từ chụp vội → học cách quan sát chậm → lời khuyên “It is what you notice.”',
        explanation:
          'Bài kể quá trình Leo học cách quan sát và chậm lại để có những bức ảnh tốt hơn, không phải về máy ảnh đắt tiền.'
      },
      {
        id: 227,
        questionNumber: 'CÂU 227',
        questionType: 'DETAIL',
        prompt: 'What was Leo’s first photography exercise?',
        options: [
          { key: 'a', text: 'Taking fifty photos of the same street.' },
          { key: 'b', text: 'Spending ten minutes in one place and noting what he could see, hear and smell.' },
          { key: 'c', text: 'Interviewing the owner of a bakery.' }
        ],
        answer: 'b',
        location: 'Đoạn [P2]: “spend ten minutes in one place and write down everything he could see, hear and smell.”',
        explanation:
          'Bài tập đầu tiên là ngồi một chỗ 10 phút và ghi lại mọi thứ có thể thấy, nghe, ngửi.'
      },
      {
        id: 228,
        questionNumber: 'CÂU 228',
        questionType: 'INFERENCE',
        prompt: 'Why did Leo take fewer photographs later?',
        options: [
          { key: 'a', text: 'He was waiting for meaningful moments instead of taking pictures quickly.' },
          { key: 'b', text: 'He had broken his camera.' },
          { key: 'c', text: 'He had less free time after school.' }
        ],
        answer: 'a',
        location: 'Đoạn [P3]: “He waited for people to walk into the light… Sometimes he took only one photograph… but it was often better…”',
        explanation:
          'Leo chụp ít hơn vì kiên nhẫn chờ khoảnh khắc có ý nghĩa, chú trọng chất lượng hơn số lượng.'
      },
      {
        id: 229,
        questionNumber: 'CÂU 229',
        questionType: 'VOCAB-IN-CONTEXT',
        prompt: 'The word “capture” in paragraph 3 is closest in meaning to ______.',
        options: [
          { key: 'a', text: 'record in a photograph' },
          { key: 'b', text: 'catch a person' },
          { key: 'c', text: 'change the colour of' }
        ],
        answer: 'a',
        location: 'Đoạn [P3]: “He stopped trying to capture whole scenes…”',
        explanation:
          '“Capture” trong nhiếp ảnh nghĩa là ghi lại, bắt trọn một cảnh hay khoảnh khắc vào ảnh.'
      },
      {
        id: 230,
        questionNumber: 'CÂU 230',
        questionType: 'REFERENCE',
        prompt: 'In paragraph 4, what does “it” in “The camera only records it” refer to?',
        options: [
          { key: 'a', text: 'the camera' },
          { key: 'b', text: 'the advice' },
          { key: 'c', text: 'what you notice' }
        ],
        answer: 'c',
        location: 'Đoạn [P4]: “It is what you notice. The camera only records it.”',
        explanation:
          '“It” thay thế cho “what you notice” — máy ảnh chỉ ghi lại điều bạn đã nhận ra.'
      }
    ]
  }
];
