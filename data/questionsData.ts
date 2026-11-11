import { QuestionItem, VOCAB_QUESTIONS } from './questionsData_part1';
import { GRAMMAR_QUESTIONS } from './questionsData_part2';
import { READING_PASSAGES } from './readingData';

// Map Reading 15 questions (186 to 200) into QuestionItem format
const READING_QUESTIONS: QuestionItem[] = READING_PASSAGES.flatMap(passage =>
  passage.questions.map(q => ({
    id: q.id,
    code: q.questionNumber,
    category: 'READING' as const,
    unit: passage.unitNumbers[0],
    unitName: passage.units,
    topic: `${passage.title} (${q.questionType})`,
    prompt: q.prompt,
    options: q.options,
    answer: q.answer,
    vietnameseExplanation: `${q.explanation} [Vị trí bài đọc: ${q.location}]`,
    collocationOrRule: q.questionType,
    fullSentence: `${q.prompt} -> Đáp án: ${q.answer.toUpperCase()}`,
    vietnameseTranslation: `Bài đọc: "${passage.title}"`
  }))
);

// FULL 200 QUESTIONS LIST
export const ALL_QUESTIONS: QuestionItem[] = [
  ...VOCAB_QUESTIONS,
  ...GRAMMAR_QUESTIONS,
  ...READING_QUESTIONS
];

export { VOCAB_QUESTIONS, GRAMMAR_QUESTIONS, READING_QUESTIONS };
