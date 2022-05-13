<template>
  <section>
    <div class="p-8 m-4 bg-gray-800 rounded-lg shadow">
      <p v-if="seniors" class="text-3xl font-bold text-center text-white">
        Our Leaders
      </p>
      <div
        v-else
        class="h-48 p-3 -m-8 overflow-hidden text-3xl font-bold text-center text-white bg-gray-700 rounded-lg animate-pulse"
      ></div>

      <div
        v-if="seniors"
        class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div class="p-4" v-for="user in seniors" :key="user">
          <div class="flex flex-col items-center justify-center">
            <div
              class="flex-shrink-0"
            >
              <a lass="relative block">
                <img
                  :src="user.avatar"
                  :alt="user.username"
                  class="object-cover w-20 h-20 mx-auto rounded-full"
                />
              </a>
            </div>
            <div class="flex flex-col mt-2 text-center">
              <span class="text-lg font-medium text-white">
                {{ user.username }}
              </span>
              <span class="text-xs text-gray-400"> {{ user.role }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8 m-4 bg-gray-800 rounded-lg shadow">
      <p v-if="users" class="text-3xl font-bold text-center text-white">
        Our Elite Team
      </p>
      <div
        v-else
        class="h-48 p-3 -m-8 overflow-hidden text-3xl font-bold text-center text-white bg-gray-700 rounded-lg animate-pulse"
      ></div>

      <p
        v-if="users"
        class="mb-12 text-xl font-normal text-center text-gray-300"
      >
        Meet Our Team Members!!
      </p>
      <div
        v-if="users"
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        <div class="p-4" v-for="user in users" :key="user">
          <div class="flex flex-col items-center justify-center">
            <div
              class="flex-shrink-0"
            >
              <a class="relative block">
                <img
                  :src="user.avatar"
                  :alt="user.username"
                  class="object-cover w-20 h-20 mx-auto rounded-full"
                />
              </a>
            </div>
            <div class="flex flex-col mt-2 text-center">
              <span class="text-lg font-medium text-white">
                {{ user.username }}
              </span>
              <span class="text-xs text-gray-400"> {{ user.role }} </span>
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
