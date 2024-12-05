<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold mb-4 text-center">
          Quiz for Feren Lisady!!
        </h1>
        <QuizQuestion v-if="!quizFinished" />
        <button
          v-else
          @click="goToResult"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
        >
          See Result
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useQuizStore } from "../stores/quizStore";
  import QuizQuestion from "./QuizQuestion.vue";
  import { useRouter } from "vue-router";
  
  export default {
    components: { QuizQuestion },
    setup() {
      const quizStore = useQuizStore();
      const router = useRouter();
  
      const goToResult = () => {
        router.push("/result");
      };
  
      return {
        ...quizStore,
        goToResult,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add custom styles for a smoother transition or adjust appearance */
  </style>
  