<template>
  <div style="margin: 0; height: 100%">
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
    <div class="px-0 align-bottom" style="margin: 100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          class="fill-violet-800"
          fill-opacity="1"
          d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,202.7C672,171,768,117,864,128C960,139,1056,213,1152,256C1248,299,1344,309,1392,314.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: ['error'], // you can set a custom layout for the error page
}
</script>
