export interface Question {
  id: number;
  unit: string;
  question: string;
  options: string[];
  answer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    unit: "Unit 5",
    question: "Our teacher asked us to _____ the colours and ideas in the painting.",
    options: ["clarify", "grab", "analyse"],
    answer: "analyse"
  },
  {
    id: 2,
    unit: "Unit 5",
    question: "The painter stretched a white _____ over a wooden frame.",
    options: ["canvas", "comic", "cereal box"],
    answer: "canvas"
  },
  // Add more as needed...
];
