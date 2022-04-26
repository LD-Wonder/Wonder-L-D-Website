<template>
  <div>
    <header class="p-4 text-gray-100 bg-gray-900">
      <div class="navbar">
        <div class="navbar-start">
          <empty></empty>
        </div>
        <div class="navbar-center">
          <div class="avatar">
            <div class="w-10 rounded-full">
              <a href="/"
                ><img
                  src="https://imgs.mrfluffycloud.xyz/Logo-Bolt-Resized.png"
              /></a>
            </div>
          </div>
          <a class="mx-4 text-xl normal-case btn btn-ghost" href="/"
            >Rapid Services</a
          >
        </div>
        <div class="navbar-end">
          <empty></empty>
        </div>
      </div>
    </header>
    <div>
      <section class="text-gray-100 bg-gray-900">
        <div
          class="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl"
        >
          <h1 class="text-4xl font-bold leading-none sm:text-5xl">
            Collab Request Application
          </h1>
          <p class="px-8 mt-8 mb-12 text-lg">
            The Official Application of the RM&S Services Discord Server. This
            will be an official partnership, not post for post!
          </p>
          <div class="grid grid-cols-1 gap-3 m-2 md:m-4 md:grid-cols-1">
            <div class="w-auto bg-gray-800 card text-neutral-content">
              <div class="items-center text-center card-body">
                <h2 class="card-title">Application Requirements:</h2>
                <p>
                  ・Explain your proposal/plan.<br />
                  ・Explain to us about your business and why you want to
                  partner with us.<br />
                  ・Website link and server link.<br />
                  ・Your other partnership/special offers.
                </p>
              </div>
            </div>
          </div>
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
            class="p-8 bg-gray-900 rounded-lg shadow-lg lg:p-12 lg:col-span-3"
          >
            <div class="text-white bg-gray-800 shadow-lg alert">
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
                  >Your Application have been sent! Please wait
                  patiently..</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-if="count >= 1 && !sent">
      <section class="p-6 bg-gray-900 text-gray-50">
        <form
          @submit="send"
          class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset
            class="grid grid-cols-4 gap-6 p-6 font-medium bg-gray-800 rounded-md shadow-sm"
            id="start"
          >
            <div class="space-y-2 col-span-full lg:col-span-1">
              <p class="font-medium">About You</p>
              <p class="text-xs">Your Details!</p>
            </div>
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label for="username" class="pb-2 text-sm"
                  >Username [Ex: MrFluffycloud#9999]</label
                >
                <input
                  maxlength="1024"
                  id="username"
                  type="text"
                  required
                  placeholder="Username"
                  v-model="content.username"
                  class="w-full h-auto text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="id" class="pb-2 text-sm"
                  >ID [Ex: 676745968867082250]</label
                >
                <input
                  maxlength="1024"
                  id="id"
                  type="text"
                  required
                  placeholder="ID"
                  v-model="content.id"
                  class="w-full h-auto text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
            </div>
          </fieldset>
          <fieldset
            class="grid grid-cols-4 gap-6 p-6 font-medium bg-gray-800 rounded-md shadow-sm"
            id="1"
          >
            <div class="space-y-2 col-span-full lg:col-span-1">
              <p class="font-medium">Details</p>
              <p class="text-xs">About the Partnership!</p>
            </div>
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label for="about" class="pb-2 text-sm"
                  >What is your business/server about?</label
                >
                <input
                  maxlength="1024"
                  id="about"
                  type="text"
                  required
                  placeholder="Your answer."
                  v-model="content.about"
                  class="w-full h-auto text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="links" class="pb-2 text-sm"
                  >Can you send us your server link/website link?</label
                >
                <input
                  maxlength="1024"
                  id="links"
                  type="text"
                  required
                  placeholder="Links."
                  v-model="content.links"
                  class="w-full h-auto text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="why" class="pb-2 text-sm"
                  >Explain to us about your business and why you want to partner
                  with us.
                </label>
                <textarea
                  id="why"
                  maxlength="1024"
                  required
                  v-model="content.why"
                  placeholder="Why??"
                  class="w-full h-auto text-white border-gray-700 rounded-md textarea focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="plan" class="pb-2 text-sm"
                  >Explain your proposal/plan.</label
                >
                <textarea
                  id="plan"
                  maxlength="1024"
                  type="text"
                  required
                  placeholder="Plans"
                  v-model="content.plan"
                  class="w-full h-auto text-white border-gray-700 rounded-md textarea focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="benefit" class="pb-2 text-sm"
                  >How will this benefit us?
                </label>
                <textarea
                  id="benefit"
                  maxlength="1024"
                  type="text"
                  required
                  placeholder="Benefits"
                  v-model="content.benefit"
                  class="w-full h-auto text-white border-gray-700 rounded-md textarea focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>

              <div class="col-span-full sm:col-span-3">
                <label for="sw" class="pb-2 text-sm"
                  >Could you explain your other partnership/special offers.
                  [Optional]</label
                >
                <textarea
                  id="offers"
                  maxlength="1024"
                  v-model="content.offers"
                  placeholder="Your Answer.."
                  class="w-full text-white border-gray-700 rounded-md textarea focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
            </div>
          </fieldset>

          <fieldset
            class="grid grid-cols-4 gap-6 p-6 font-medium bg-gray-800 rounded-md shadow-sm"
          >
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label for="other" class="pb-2 text-sm"
                  >Anything else to add?</label
                >
                <textarea
                  maxlength="1024"
                  id="other"
                  v-model="content.other"
                  placeholder="Anything else?.."
                  class="w-full text-white border-gray-700 rounded-md textarea focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
            </div>
          </fieldset>

          <button
            type="submit"
            class="inline-flex items-center justify-center px-5 py-3 font-medium text-white border rounded-full btn w-fit bg-violet-600 border-violet-600 sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
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
        about: null,
        links: null,
        why: null,
        plan: null,
        benefit: null,
        offers: null,
        other: null
      },
    }
  },
  methods: {
    send(e) {
      this.sent = true
      this.$axios
        .$post('https://api.rapidnetwork.co/api/collabForm', this.content)
        .then((x) => {
          this.sent = true
        })
      e.preventDefault()
    },
  },
}
</script>
