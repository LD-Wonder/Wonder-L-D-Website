<template>
  <section class="text-center bg-gray-900">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
      <div class="max-w-xl mx-auto text-center">
        <h2
          class="text-4xl font-bold tracking-tight text-violet-500 sm:text-5xl"
        >
          Reviews!
        </h2>

        <p class="max-w-lg mx-auto mt-4 text-gray-200">
          Read some reviews from our beloved customers!
        </p>
      </div>
      <div
        v-if="users"
        class="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
      >
        <!-- -->
        <div v-for="user in users" :key="user">
          <img
            :src="user.avatar"
            :alt="user.username"
            class="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
          />

          <blockquote
            class="flex flex-col justify-between p-12 -mt-6 text-center bg-gray-800 rounded-lg shadow-xl"
          >
            <p class="text-lg font-bold text-gray-100">{{ user.username }}</p>
            <p v-if="user.role" class="mt-1 text-xs font-medium text-gray-300">
              {{ user.role }}
            </p>
            <p class="mt-4 text-white text-medium">{{ user.message }}</p>
          </blockquote>
        </div>
        <!-- -->
      </div>
      <p v-else class="my-8 text-3xl font-bold text-center text-white">Fetching..</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: null,
    }
  },
  async created() {
    try {
      const reviews = await fetch('https://api.rapidnetwork.co/users/reviews')

      const data = await reviews.json()
      this.users = data
    } catch (e) {
      return console.error(e)
    }
  },
}
</script>
