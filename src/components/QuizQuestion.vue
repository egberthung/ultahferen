<template>
  <div class="flex items-center justify-center m-2">
    <div class="text-center">
      <!-- Quiz Content -->
      <div v-if="!quizStore.isQuizCompleted">
        <h2 class="text-xl font-semibold mb-4">{{ currentQuestion.text }}</h2>
        <div class="grid grid-cols-1 gap-4">
          <button
            v-for="(answer, index) in currentQuestion.options"
            :key="index"
            :class="{
              'bg-blue-500': selectedAnswer !== index && !isCorrectAnswer,
              'bg-green-500': selectedAnswer === index && isCorrectAnswer,
              'bg-red-500': selectedAnswer === index && !isCorrectAnswer
            }"
            class="px-4 py-2 text-white rounded-lg hover:bg-blue-700"
            @click="handleAnswerSelection(index)"
            :disabled="selectedAnswer !== null"
          >
            {{ answer }}
          </button>
        </div>

        <!-- Feedback after selection -->
        <div v-if="selectedAnswer !== null" class="mt-4">
          <p v-if="isCorrectAnswer" class="text-green-500">Correct! 🎉</p>
          <p v-else class="text-red-500">Try again! ❌</p>
        </div>

        <!-- Current Score -->
        <div class="mt-4">
          <p class="text-lg font-medium">Score: {{ quizStore.score }}/{{quizStore.questions.length}}</p>
        </div>

        <!-- Next Button -->
        <div v-if="isCorrectAnswer && selectedAnswer !== null" class="mt-4">
          <button @click="nextQuestion" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {{ quizStore.currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Next" }}
          </button>
        </div>
      </div>

      <!-- Result Screen -->
      <div v-else>
        <h2 class="text-xl font-semibold mb-4">Quiz Finished!</h2>
        <p class="text-lg">Your score: {{ quizStore.score }}/{{ totalQuestions }}</p>
        <button @click="claimReward" class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Claim Your Reward!
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { useQuizStore } from "../stores/quizStore";
import { computed } from "vue"

export default {
  setup() {
    const quizStore = useQuizStore();
    const currentQuestion = computed(() => quizStore.currentQuestion);
    const selectedAnswer = computed(() => quizStore.selectedAnswer);
    const isCorrectAnswer = computed(() => quizStore.isCorrectAnswer);

    const handleAnswerSelection = (index) => {
      quizStore.selectAnswer(index); // Handle selection of an answer
    };

    const nextQuestion = () => {
      quizStore.nextQuestion(); // Move to the next question
    };

    const claimReward = () => {
      // Handle reward claiming (this could redirect or trigger a modal, etc.)
      alert('Congratulations! You claimed your reward!');
    };

    return {
      currentQuestion,
      selectedAnswer,
      isCorrectAnswer,
      handleAnswerSelection,
      nextQuestion,
      claimReward,
      quizStore,
    };
  },
};
</script>
