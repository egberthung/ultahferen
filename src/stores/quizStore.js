import { defineStore } from "pinia";
import router from "../router";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [
      { text: "Kapan kita ketemu?", options: ["FYP BINUS", "Trip Jepang", "Pas jadi FL", "Di istana presiden"], correct: 2 },
      { text: "Berapa tanggal official kita?", options: ["6 Desember", "12 Juni", "1 April", "27 Juli"], correct: 3 },
      { text: "Dimana kita bikin photo dengan 6 grid?", options: ["Photoism CP", "Photoism TA", "Photoism PV", "Photoism Empo"], correct: 1 },
      { text: "Siapa nama pacar Feren??", options: ["Jeongwoo", "Chanyeol", "Egbert Hung", "Lany"], correct: 2 },
      { text: "Siapa cantiknya EGB??", options: ["Feren", "Gran", "Ming-Ming", "Ye ji"], correct: 0 },
      { text: "Nomor Jersey Egb yang feren Punya?", options: ["10", "35", "0", "7"], correct: 3 },
      { text: "Ikan ikan apa yang bulat??", options: ["Feren", "-", "-", "-"], correct: 0 },
      { text: "Siapa yang hari ini ulang tahun??", options: ["Feren", "EGB", "Edward", "Cepan"], correct: 0 },
      { text: "Plat Nomor Makassar??", options: ["B", "DB", "DD", "D"], correct: 2 },
      { text: "Tebak ada berapa hadiah yang dikasih ke Feren?", options: ["Tidak ada", "1", "2", "3"], correct: 2 },
    ],
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null, // Track selected answer in state
  }),
  getters: {
    currentQuestion(state) {
      return state.questions[state.currentQuestionIndex];
    },
    isCorrectAnswer(state) {
      return state.selectedAnswer === state.questions[state.currentQuestionIndex].correct;
    },
  },
  actions: {
    selectAnswer(index) {
      if (this.selectedAnswer === null) {
        this.selectedAnswer = index; // Track selected answer
        if (index === this.questions[this.currentQuestionIndex].correct) {
          this.score++;
        }
        else{
          alert("woi kok salah, ULANGGG!!");
          this.selectedAnswer=null;
        }
      }
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null; // Reset for next question
      } else {
        router.push("/result")
        console.log("Quiz Finished");
      }
    },
    restartQuiz() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.selectedAnswer = null; // Reset selected answer on restart
    },
  },
});
