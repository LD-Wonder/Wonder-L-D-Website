<template>
  <section class="px-4 text-center bg-gray-900">
    <div
      class="max-w-xl px-4 pt-16 mb-10 md:px-24 lg:px-8 lg:pt-20 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
    >
      <h2
        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-violet-500 sm:text-4xl md:mx-auto"
      >
        Our Growth
      </h2>
      <p class="text-base text-gray-50 md:text-lg">
        We grew quite alot within these few months!
      </p>
    </div>
    <div
      class="px-4 py-16 mx-auto text-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-2">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
            <client-only>
              <number
                :from="0"
                :to="totalClients"
                :duration="2"
                :delay="0"
                easing="Power1.easeOut"
              ></number> </client-only
            >+
          </h6>
          <p
            class="text-sm font-medium tracking-widest text-whiteuppercase lg:text-base text-violet-400"
          >
            Active Clients
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
            <client-only>
              <number
                :from="0"
                :to="totalStaff"
                :duration="2"
                :delay="0"
                easing="Power1.easeOut"
              ></number> </client-only
            >+
          </h6>
          <p
            class="text-sm font-medium tracking-widest text-whiteuppercase lg:text-base text-violet-400"
          >
            Team Members
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'get-request-async-await',
  data() {
    return {
      totalStaff: 0,
      totalClients: 0,
    }
  },
  async created() {
    try {
      const headers = {
        Authorization: `token testtoken12345`,
      }
      const staff = await fetch('https://api.rapidnetwork.co/users/staffCount', headers)
      const clients = await fetch(
        'https://api.rapidnetwork.co/users/clients',
        headers
      )
      const data = await staff.json()
      const data2 = await clients.json()
      this.totalStaff = data.count
      this.totalClients = data2.count
    } catch (e) {
      return console.error(e)
    }
  },
}
</script>
