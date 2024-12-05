<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold mb-4 text-center">Thanks for Playing!</h1>
        <div class="text-lg text-center">
          <p>Your Score: {{ score }}/{{ questions.length }}</p>
          <p v-if="score === questions.length" class="text-green-500 mt-2">
            Selamat kamu dapat hadiah
          </p>
          
          <p v-else class="text-red-500 mt-2">
            Ulang
          </p>
  
          <!-- Conditional Reward Button -->
          <div v-if="score === questions.length">
            <router-link
              to="/claim"
              class="mt-4 inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Claim Reward 🎁
            </router-link>
          </div>
  
          <!-- Play Again Button -->
          <button
            @click="restartQuiz"
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useQuizStore } from "../stores/quizStore";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const quizStore = useQuizStore();
      const router = useRouter();
  
      const restartQuiz = () => {
        quizStore.restartQuiz();
        router.push("/");
      };
  
      return {
        ...quizStore,
        restartQuiz,
      };
    },
  };
  </script>
  