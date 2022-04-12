<template>
  <section>
    <div class="p-8 bg-gray-800 rounded-lg shadow m-4">
      <p v-if="seniors" class="text-center text-3xl font-bold text-white">
        Our Leaders
      </p>
      <p v-else class="text-center text-3xl font-bold text-white">Fetching..</p>

      <div
        v-if="seniors"
        class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div class="p-4" v-for="user in seniors" :key="user">
          <div class="flex-col flex justify-center items-center">
            <div class="flex-shrink-0">
              <a href="#" class="block relative">
                <img
                  :src="user.avatar"
                  :alt="user.username"
                  class="mx-auto object-cover rounded-full h-20 w-20"
                />
              </a>
            </div>
            <div class="mt-2 text-center flex flex-col">
              <span class="text-white text-lg font-medium">
                {{ user.username }}
              </span>
              <span class="text-gray-400 text-xs"> {{ user.role }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8 bg-gray-800 rounded-lg shadow m-4">
      <p v-if="users" class="text-center text-3xl font-bold text-white">
        Our Elite Team
      </p>
      <p v-else class="text-center text-3xl font-bold text-white">Fetching..</p>

      <p
        v-if="users"
        class="text-center mb-12 text-xl font-normal text-gray-300"
      >
        Meet Our Team Members!!
      </p>
      <div
        v-if="users"
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        <div class="p-4" v-for="user in users" :key="user">
          <div class="flex-col flex justify-center items-center">
            <div class="flex-shrink-0">
              <a href="#" class="block relative">
                <img
                  :src="user.avatar"
                  :alt="user.username"
                  class="mx-auto object-cover rounded-full h-20 w-20"
                />
              </a>
            </div>
            <div class="mt-2 text-center flex flex-col">
              <span class="text-white text-lg font-medium">
                {{ user.username }}
              </span>
              <span class="text-gray-400 text-xs"> {{ user.role }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: null,
      seniors: null,
    }
  },
  async created() {
    try {
      const headers = {
        Authorization: `token testtoken12345`,
      }
      const staff = await fetch(
        'https://api.rapidnetwork.co/users/staff',
        headers
      )
      const seniors = await fetch(
        'https://api.rapidnetwork.co/users/seniors',
        headers
      )
      const data2 = await seniors.json()
      this.seniors = data2

      const data = await staff.json()
      this.users = data
    } catch (e) {
      return console.error(e)
    }
  },
}
</script>
