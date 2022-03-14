<template>
  <section class="text-white bg-gray-900">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div
          class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
        >
          <img
            class="absolute inset-0 object-cover h-full px-14 w-fit lg:object-fit"
            src="https://media.discordapp.net/attachments/912173841927798794/951327316838084648/lantern_1.png"
            alt="The Lamp"
          />
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl font-bold text-center sm:text-4xl lg:text-left">
            Why Us?
          </h2>

          <p class="mt-4 text-center text-gray-100 lg:text-left">
            We provide amazing reliable, affordable and on time services so that
            you can enjoy a non scam product from other industries. Try us out
            and never regret it today!
          </p>
          <div class="flex flex-col items-center p-8 lg:items-start">
            <a
              class="inline-flex px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
              href="/join"
            >
              <span class="text-sm font-medium">Join Now!</span>

              <svg
                class="w-5 h-5 ml-3 stroke-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
