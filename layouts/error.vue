<template>
  <div>
    <div class="pt-10 sm:pt-20 md:pt-24">
      <!-- Features grid header -->
      <div class="text-center">
        <p
          v-if="error.statusCode === 404"
          class="mb-2 text-2xl font-semibold text-white font-general-semibold sm:text-5xl"
        >
          Page not found
        </p>
        <p
          v-else
          class="mb-2 text-2xl font-semibold text-white font-general-semibold sm:text-5xl"
        >
          An error occurred
        </p>
        <br />
        <div
          class="flex flex-col items-center justify-center pt-3 border-t-2 font-general-regular sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
        >
          <a href="/">
            <button
              class="block px-4 py-2 mt-2 text-left text-white rounded-md shadow-sm text-md bg-violet-500 hover:bg-violet-600"
              aria-label="Back Home Button"
            >
              Back Home?
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: ['error'], // you can set a custom layout for the error page
}
</script>
<style>
html,
body {
  margin: 0;
  height: 100%;
}
</style>
