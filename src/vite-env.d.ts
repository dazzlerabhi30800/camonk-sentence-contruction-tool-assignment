/// <reference types="vite/client" />

interface question {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: Array<string>;
  correctAnswer: Array<string>;
}

interface submit {
  questionId: string;
  question: string;
  isCorrect: boolean;
  options: Array<string>;
  chosenOptions: Array<string>;
}
