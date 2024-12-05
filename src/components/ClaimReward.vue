<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <div class="min-w-xl p-20 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">
          🎉 Claim Your Reward! 🎉
        </h1>
        <p class="text-center text-gray-600 mb-6">
          Congratulations on completing the quiz! Click below to claim your reward.
        </p>
        <button
          @click="claimReward"
          class="w-full px-5 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
        >
          Click here to claim your reward !!!
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      // Function to handle the reward claim
      const claimReward = () => {
        const yourWhatsAppNumber = "6289611133311"; // Replace with your WhatsApp number
        const message = encodeURIComponent("Hi, aku Feren! Aku mau hadiahnya dongggggggg!!!");
        const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${message}`;
        window.open(whatsappLink, "_blank");
      };
  
      return {
        claimReward,
      };
    },
  });
  </script>
  
  <style scoped>
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
  }
  </style>
  