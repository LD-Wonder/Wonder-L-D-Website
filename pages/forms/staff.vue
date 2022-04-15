<template>
  <div>
    <header class="p-4 text-gray-100 bg-gray-800">
      <div
        class="container flex justify-start h-16 mx-auto md:justify-start md:space-x-8"
      >
        <progress
          v-if="count <= 10"
          class="w-full progress progress-primary"
          max="10"
        ></progress>
      </div>
    </header>
    <div>
      <section class="text-gray-100 bg-gray-800">
        <div
          class="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl"
        >
          <h1 class="text-4xl font-bold leading-none sm:text-5xl">
            Staff Application
          </h1>
          <p class="px-8 mt-8 mb-12 text-lg">
            The Official Application of the RM&S Services Discord Server. Please
            ensure that you meet our Application Requirements, which includes
            having 2FA Enabled. Please take your time. Application may take up
            to 24 Hours to review. Do not Apply more than Once a Week!!
          </p>
          <div v-if="count == 0" class="flex flex-wrap justify-center">
            <a href="#start">
              <button
                @click="count++"
                class="px-8 py-3 m-2 text-lg font-semibold text-gray-900 rounded bg-violet-400"
              >
                Get started
              </button>
            </a>
          </div>
          <div
            v-if="sent"
            class="p-8 bg-gray-800 rounded-lg shadow-lg lg:p-12 lg:col-span-3"
          >
            <div class="shadow-lg alert">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="flex-shrink-0 w-6 h-6 stroke-purple-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span
                  >Your Application have been sent! Please wait patiently.. Do
                  Not Make a new application again this week.</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-if="count >= 1 && !sent">
      <section class="p-6 bg-gray-800 text-gray-50">
        <form
          @submit="send"
          class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset
            class="grid grid-cols-4 gap-6 p-6 bg-gray-900 rounded-md shadow-sm"
            id="start"
          >
            <div class="space-y-2 col-span-full lg:col-span-1">
              <p class="font-medium">About You</p>
              <p class="text-xs">Your Details!</p>
            </div>
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label for="username" class="text-sm"
                  >Username [Ex: MrFluffycloud#999]</label
                >
                <input
                  id="username"
                  type="text"
                  required
                  placeholder="Username"
                  v-model="content.username"
                  class="w-full text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="id" class="text-sm"
                  >ID [Ex: 676745968867082250]</label
                >
                <input
                  id="id"
                  type="text"
                  required
                  placeholder="ID"
                  v-model="content.id"
                  class="w-full text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="age" class="text-sm"
                  >Age [If you wish to give a Range, (Ex: 16-18), you
                  may!]</label
                >
                <input
                  id="age"
                  type="text"
                  required
                  placeholder="Age"
                  v-model="content.age"
                  class="w-full text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="timezone" class="text-sm"
                  >Which Time-Zone do you live in?</label
                >
                <input
                  id="timezone"
                  type="text"
                  required
                  v-model="content.timezone"
                  placeholder="Timezone"
                  class="w-full text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
            </div>
          </fieldset>
          <fieldset
            class="grid grid-cols-4 gap-6 p-6 bg-gray-900 rounded-md shadow-sm"
            id="1"
          >
            <div class="space-y-2 col-span-full lg:col-span-1">
              <p class="font-medium">Work Details</p>
              <p class="text-xs">About Your working status!</p>
            </div>
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label for="hoursperweek" class="text-sm"
                  >How many Hours per WEEK can you Work on RM&S?</label
                >
                <input
                  id="hoursperweek"
                  type="text"
                  required
                  placeholder="8 - 48 Hours"
                  v-model="content.hoursperweek"
                  class="w-full text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="whyu" class="text-sm"
                  >Tell us a bit about yourself, and Why we should chose YOU
                  over other Applicants!</label
                >
                <textarea
                  id="whyu"
                  required
                  v-model="content.whyu"
                  placeholder="Why You??"
                  class="w-full text-white border-gray-700 rounded-md textarea focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="pastexp" class="text-sm"
                  >Which Servers do you CURRENTLY work for? (Please send Invite
                  Links!)</label
                >
                <input
                  id="pastexp"
                  type="text"
                  required
                  placeholder="Past Experiences"
                  v-model="content.pastexp"
                  class="w-full text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>

              <div class="col-span-full sm:col-span-3">
                <label for="sw" class="text-sm"
                  >Please list 2 of your Strengths, and 2 of your
                  Weaknesses.</label
                >
                <textarea
                  id="sw"
                  required
                  v-model="content.sw"
                  placeholder="Your Answer.."
                  class="w-full text-white border-gray-700 rounded-md textarea focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="sw" class="text-sm"
                  >How fluent are you in English?</label
                >
                <input
                  type="range"
                  min="0"
                  max="100"
                  required
                  value="25"
                  class="range"
                  step="25"
                  v-model="content.range"
                />
                <div class="flex justify-between w-full px-2 text-xs">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="intrested" class="cursor-pointer label">
                  <span class="label-text"
                    >By Applying you are willing to join our Staff Server?</span
                  >
                  <input
                    id="intrested"
                    type="checkbox"
                    required
                    checked="checked"
                    class="checkbox focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                    v-model="content.intrested"
                  />
                </label>
              </div>
            </div>
          </fieldset>

          <button
            type="submit"
            class="inline-flex items-center justify-center px-5 py-3 font-medium text-white border rounded-full w-fit bg-violet-600 border-violet-600 sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
          >
            <span class="font-medium"> Send Application </span>
            <span>
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
            </span>
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      sent: false,
      content: {
        username: null,
        id: null,
        age: null,
        timezone: null,
        hoursperweek: null,
        whyu: null,
        pastexp: null,
        intrested: null,
        sw: null,
        range: null,
      },
    }
  },
  methods: {
    send(e) {
      this.sent = true
      this.$axios
        .$post('https://api.rapidnetwork.co/api/staffForm', this.content)
        .then((x) => {
          this.sent = true
        })
      e.preventDefault()
    },
  },
}
</script>
