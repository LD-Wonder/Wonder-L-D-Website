<template>
  <section class="text-white bg-gray-900">
    <div
      class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex"
    >
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-3xl font-extrabold text-purple-600 sm:text-5xl">
          Rapid
          <span class="text-blue-500">Services</span>
        </h1>

        <p
          class="max-w-xl mx-auto mt-4 font-medium sm:leading-relaxed sm:text-xl"
        >
          Redirecting you to our Discord Sever
        </p>
        <p
          class="mx-auto mt-4 text-xs font-light text-gray-400 max-w-s sm:leading-relaxed"
        >
          Redirecting in {{ timerCount }} Seconds.. Click Button below if
          Redirect doesn't work
        </p>

        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <a
            class="block w-full px-12 py-3 text-sm font-medium text-white border rounded-full bg-violet-600 border-violet-600 sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
            href="https://discord.gg/hdDABckHvM"
          >
            Redirect Now!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      timerCount: 5,
    }
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
}
</script>
