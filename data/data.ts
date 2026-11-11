export interface VocabItem {
  id: number;
  word: string;
  phonetic: string;
  unit: string;
  vietnamese: string;
  collocation: string;
  example: string;
}

export const vocabulary: VocabItem[] = [
  {
    id: 1,
    word: "analyse",
    phonetic: "/ˈænəlaɪz/",
    unit: "Unit 5 – ART",
    vietnamese: "phân tích",
    collocation: "analyse a painting",
    example: "The class will analyse the message behind each picture."
  },
  {
    id: 2,
    word: "comic",
    phonetic: "/ˈkɒmɪk/",
    unit: "Unit 5 – ART",
    vietnamese: "truyện tranh",
    collocation: "read a comic",
    example: "My little cousin reads a comic on the bus every morning."
  },
  // Add more as needed...
];
