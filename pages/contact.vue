<template>
  <main>
    <NavBar></NavBar>
    <section class="bg-gray-900">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:py-12 lg:col-span-2">
            <p class="max-w-xl text-lg">
              Got something to say to us? Got suggestions? Need Help? Contact us
              then! You can either ask through our discord, or right from here!
            </p>

            <div class="mt-8">
              <a
                class="block px-12 py-3 text-sm font-medium text-white border rounded-full w-fit bg-violet-600 border-violet-600 sm:w-fit active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                href="/join"
              >
                Support Server on Discord
              </a>
            </div>
          </div>

          <div
            class="p-8 bg-gray-800 rounded-lg shadow-lg lg:p-12 lg:col-span-3"
          >
            <form action="" class="space-y-4">
              <div>
                <label class="text-white sr-only" for="name">Name</label>
                <input
                  class="w-full p-3 text-sm bg-gray-900 rounded-lg border-violet-600"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input
                    class="w-full p-3 text-sm bg-gray-900 rounded-lg border-violet-600"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="tag">Discord Tag</label>
                  <input
                    class="w-full p-3 text-sm bg-gray-900 rounded-lg border-violet-600"
                    placeholder="Discord Tag"
                    type="tel"
                    id="tag"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">Message</label>
                <textarea
                  class="w-full p-3 text-sm bg-gray-900 rounded-lg border-violet-600"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full px-5 py-3 font-medium text-white border rounded-full w-fit bg-violet-600 border-violet-600 sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                >
                  <span class="font-medium"> Send Enquiry </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </main>
</template>
