<template>
  <div>
    <header class="bg-gray-800">
      <div
        class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      >
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="RS"
            title="RS"
            class="inline-flex items-center shadow-md"
          >
            <img
              src="https://imgs.mrfluffycloud.xyz/Logo-Bolt-Resized.png"
              class="w-8 text-violet-400"
              alt=""
            />
            <span
              class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
              >RS</span
            >
          </a>
          <ul class="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Home"
                title="Home"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-violet-400"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/about"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-violet-400"
                >About us</a
              >
            </li>
            <li>
              <a
                href="/contact"
                aria-label="Contact us"
                title="Contact us"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-violet-400"
                >Contact us</a
              >
            </li>
            <li>
              <a
                href="/join"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-violet-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                aria-label="Join"
                title="Join"
              >
                Join
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              @click="isMenuOpen = true"
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
              <div
                class="p-5 bg-gray-800 border-2 rounded-lg shadow-sm border-violet-800"
              >
                <div class="flex items-center justify-between mb-4 shadow-md">
                  <div>
                    <a
                      href="/"
                      aria-label="RS"
                      title="RS"
                      class="inline-flex items-center"
                    >
                      <img
                        src="https://imgs.mrfluffycloud.xyz/Logo-Bolt.png"
                        class="w-8 text-violet-400"
                        alt=""
                      />
                      <span
                        class="ml-2 text-xl font-bold tracking-wide text-white uppercase"
                        >RS</span
                      >
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      @click="isMenuOpen = false"
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Home"
                        title="Home"
                        class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-400"
                        >Home</a
                      >
                    </li>
                    <li>
                      <a
                        href="/about"
                        aria-label="About us"
                        title="About us"
                        class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-400"
                        >About us</a
                      >
                    </li>
                    <li>
                      <a
                        href="/contact"
                        aria-label="Contact us"
                        title="Contact us"
                        class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-400"
                        >Contact us</a
                      >
                    </li>
                    <li>
                      <a
                        href="/"
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-violet-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        aria-label="Join"
                        title="Join"
                      >
                        Join
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="text-gray-100 bg-gray-800 border-b-8 border-b-violet-600">
      <div
        class="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl"
      >
        <h1 class="text-4xl font-bold leading-none sm:text-5xl">
          Application
          <span class="text-violet-600">Forms</span>
        </h1>
        <p class="px-8 mt-8 mb-12 text-lg">
          Application Forms for Partnerships, jobs, reviews, and more!
        </p>

        <div class="grid grid-cols-1 gap-4 m-2 md:m-4 md:grid-cols-2">
          <a
            href="/forms/staff"
            class="w-auto card bg-neutral text-neutral-content"
          >
            <div class="items-center text-center card-body">
              <h2 class="card-title">Staff Applications!</h2>
              <p>Fill out this form to apply for Staff! ⚒️</p>
              <div class="justify-end card-actions">
                <button class="btn btn-primary bg-violet-600">
                  Apply Now!
                </button>
              </div>
            </div>
          </a>
          <a
            href="/forms/collab"
            class="w-auto card bg-neutral text-neutral-content"
          >
            <div class="items-center text-center card-body">
              <h2 class="card-title">Collab Request!</h2>
              <p>Wanna do proper Partnership with us? 🤝</p>
              <div class="justify-end card-actions">
                <button class="btn btn-primary bg-violet-600">
                  Collaborate!
                </button>
              </div>
            </div>
          </a>
          <!-- href="/forms/affiliate" -->
          <a class="w-auto card bg-neutral text-neutral-content">
            <div class="items-center text-center card-body">
              <h2 class="card-title">Affiliate Request!</h2>
              <p>Fill out this form to affiliate with us! 📖</p>
              <div class="justify-end card-actions">
                <button class="btn btn-ghost" disabled>Affiliate Now!</button>
              </div>
            </div>
          </a>
          <!--href="/forms/review" -->
          <a class="w-auto card bg-neutral text-neutral-content">
            <div class="items-center text-center card-body">
              <h2 class="card-title">Customer Review!</h2>
              <p>Mind telling us how you feel about our services? ❓</p>
              <div class="justify-end card-actions">
                <button class="btn btn-ghost" disabled>Review us!</button>
              </div>
            </div>
          </a>
          <div class="w-auto card bg-neutral text-neutral-content">
            <div class="items-center text-center card-body">
              <h2 class="card-title">Others!</h2>
              <p>Coming soon...<br />Thank you for your patience 😊</p>
              <div class="justify-end card-actions">
                <button class="btn btn-ghost" disabled>Soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="relative">
      <!-- code -->
      <div class="absolute bottom-0 right-0">
        <button class="w-1 h-1 btn btn-square btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>
