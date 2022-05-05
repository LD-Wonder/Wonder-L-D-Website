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
            Staff Application
          </h1>
          <p class="px-8 mt-8 mb-12 text-lg">
            The Official Application of the RM&S Services Discord Server. Please
            ensure that you meet our Application Requirements, which includes
            having 2FA Enabled. Please take your time. Application may take up
            to 24 Hours to review. Do not Apply more than Once a Week!!
          </p>
          <div class="grid grid-cols-1 gap-3 m-2 md:m-4 md:grid-cols-1">
            <div class="w-auto bg-gray-800 card text-neutral-content">
              <div class="items-center text-center card-body">
                <h2 class="card-title">Application Requirements:</h2>
                <p>
                  ・Must have 2FA Enabled if you want to apply for Moderation,
                  Management, or Human Resource.<br />
                  ・Must be 14+ Years Old or older.<br />
                  ・Must not Work in more than 2 Other Servers/Companies.<br />
                  ・Account must be 6 Months Old or older.<br />
                  ・Must be able to Join Staff Server.<br />
                  ・Must be active on daily basis.
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
            v-if="requestSent && !error"
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
                  >Your Application have been sent! Please wait patiently.. Do
                  Not Make a new application again this week.</span
                >
              </div>
            </div>
          </div>
          <div
            v-else-if="requestSent && error"
            class="p-8 bg-gray-900 rounded-lg shadow-lg lg:p-12 lg:col-span-3"
          >
            <div class="text-white bg-gray-800 shadow-lg alert">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="flex-shrink-0 w-6 h-6 stroke-red-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span
                  >Oh no! Something went wrong while sending your Application!
                  Try Again later! or Inform a Staff Member!.</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div v-if="run && !requestSent">
      <section class="p-6 bg-gray-900 text-gray-50">
        <div
          class="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl"
        >
          <svg
            role="status"
            class="w-32 h-32 mr-2 animate-spin text-gray-600 fill-violet-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </section>
    </div>
    <div v-if="count >= 1 && !requestSent && !run">
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
                <label for="username" class="pb-1 text-sm"
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
                <label for="id" class="pb-1 text-sm"
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
              <div class="col-span-full sm:col-span-3">
                <label for="age" class="pb-1 text-sm"
                  >Age [If you wish to give a Range, (Ex: 16-18), you
                  may!]</label
                >
                <input
                  maxlength="1024"
                  id="age"
                  type="text"
                  required
                  placeholder="Age"
                  v-model="content.age"
                  class="w-full h-auto text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="timezone" class="pb-1 text-sm"
                  >Which Time-Zone do you live in? [Search if you may!]</label
                >

                <select
                  id="timezone"
                  v-model="content.timezone"
                  class="w-full max-w-xs text-white select select-primary"
                  required
                >
                  <option disabled selected>Choose your Timezone!</option>
                  <option v-for="timezone in timezones" :key="timezone">
                    {{ timezone }}
                  </option>
                </select>
              </div>
            </div>
          </fieldset>
          <fieldset
            class="grid grid-cols-4 gap-6 p-6 font-medium bg-gray-800 rounded-md shadow-sm"
            id="1"
          >
            <div class="space-y-2 col-span-full lg:col-span-1">
              <p class="font-medium">Work Details</p>
              <p class="text-xs">About Your working status!</p>
            </div>
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label for="hoursperweek" class="pb-1 text-sm"
                  >How many Hours per WEEK can you Work on RM&S?</label
                >
                <input
                  id="hoursperweek"
                  type="text"
                  required
                  placeholder="8 - 48 Hours"
                  v-model="content.hoursperweek"
                  class="w-full h-auto text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="whyu" class="pb-1 text-sm"
                  >Tell us a bit about yourself, and Why we should chose YOU
                  over other Applicants!</label
                >
                <textarea
                  id="whyu"
                  maxlength="1024"
                  required
                  v-model="content.whyu"
                  placeholder="Why You??"
                  class="w-full h-auto text-white border-gray-700 rounded-md textarea focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="pastexp" class="pb-1 text-sm"
                  >Which Servers do you CURRENTLY work for? [Please send Invite
                  Links!]</label
                >
                <input
                  id="pastexp"
                  maxlength="1024"
                  type="text"
                  required
                  placeholder="Past Experiences"
                  v-model="content.pastexp"
                  class="w-full h-auto text-white border-gray-700 rounded-md input input-bordered focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>

              <div class="col-span-full sm:col-span-3">
                <label for="sw" class="pb-1 text-sm"
                  >Please list 2 of your Strengths, and 2 of your
                  Weaknesses.</label
                >
                <textarea
                  id="sw"
                  maxlength="1024"
                  required
                  v-model="content.sw"
                  placeholder="Your Answer.."
                  class="w-full text-white border-gray-700 rounded-md textarea focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label for="sw" class="pb-1 text-sm"
                  >How fluent are you in English?</label
                >
                <input
                  type="range"
                  min="1"
                  max="5"
                  required
                  value="5"
                  class="range"
                  step="1"
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
            </div>
          </fieldset>
          <fieldset
            class="grid grid-cols-4 gap-6 p-6 font-medium bg-gray-800 rounded-md shadow-sm"
          >
            <div class="space-y-2 col-span-full lg:col-span-1">
              <p class="font-medium">Other</p>
            </div>
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label for="team" class="pb-1 text-sm"
                  >Which Team would you like to work for?</label
                >

                <select
                  id="team"
                  v-model="content.team"
                  class="w-full max-w-xs text-white select select-primary"
                  required
                >
                  <option disabled selected>Choose your team!</option>
                  <option v-for="team in teams" :key="team">{{ team }}</option>
                </select>
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

          <fieldset
            class="grid grid-cols-4 gap-6 p-6 font-medium bg-gray-800 rounded-md shadow-sm"
          >
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label for="other" class="pb-1 text-sm"
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
      run: false,
      count: 0,
      requestSent: false,
      error: null,
      timezones: [
        '(UTC-12:00) International Date Line West',
        '(UTC-11:00) Coordinated Universal Time-11',
        '(UTC-10:00) Hawaii',
        '(UTC-09:00) Alaska',
        '(UTC-08:00) Baja California',
        '(UTC-07:00) Pacific Daylight Time (US & Canada)',
        '(UTC-08:00) Pacific Standard Time (US & Canada)',
        '(UTC-07:00) Arizona',
        '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
        '(UTC-07:00) Mountain Time (US & Canada)',
        '(UTC-06:00) Central America',
        '(UTC-06:00) Central Time (US & Canada)',
        '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
        '(UTC-06:00) Saskatchewan',
        '(UTC-05:00) Bogota, Lima, Quito',
        '(UTC-05:00) Eastern Time (US & Canada)',
        '(UTC-04:00) Eastern Daylight Time (US & Canada)',
        '(UTC-05:00) Indiana (East)',
        '(UTC-04:30) Caracas',
        '(UTC-04:00) Asuncion',
        '(UTC-04:00) Atlantic Time (Canada)',
        '(UTC-04:00) Cuiaba',
        '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
        '(UTC-04:00) Santiago',
        '(UTC-03:30) Newfoundland',
        '(UTC-03:00) Brasilia',
        '(UTC-03:00) Buenos Aires',
        '(UTC-03:00) Cayenne, Fortaleza',
        '(UTC-03:00) Greenland',
        '(UTC-03:00) Montevideo',
        '(UTC-03:00) Salvador',
        '(UTC-02:00) Coordinated Universal Time-02',
        '(UTC-02:00) Mid-Atlantic - Old',
        '(UTC-01:00) Azores',
        '(UTC-01:00) Cape Verde Is.',
        '(UTC) Casablanca',
        '(UTC) Coordinated Universal Time',
        '(UTC) Edinburgh, London',
        '(UTC+01:00) Edinburgh, London',
        '(UTC) Dublin, Lisbon',
        '(UTC) Monrovia, Reykjavik',
        '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
        '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
        '(UTC+01:00) West Central Africa',
        '(UTC+01:00) Windhoek',
        '(UTC+02:00) Athens, Bucharest',
        '(UTC+02:00) Beirut',
        '(UTC+02:00) Cairo',
        '(UTC+02:00) Damascus',
        '(UTC+02:00) E. Europe',
        '(UTC+02:00) Harare, Pretoria',
        '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        '(UTC+03:00) Istanbul',
        '(UTC+02:00) Jerusalem',
        '(UTC+02:00) Tripoli',
        '(UTC+03:00) Amman',
        '(UTC+03:00) Baghdad',
        '(UTC+02:00) Kaliningrad',
        '(UTC+03:00) Kuwait, Riyadh',
        '(UTC+03:00) Nairobi',
        '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk',
        '(UTC+04:00) Samara, Ulyanovsk, Saratov',
        '(UTC+03:30) Tehran',
        '(UTC+04:00) Abu Dhabi, Muscat',
        '(UTC+04:00) Baku',
        '(UTC+04:00) Port Louis',
        '(UTC+04:00) Tbilisi',
        '(UTC+04:00) Yerevan',
        '(UTC+04:30) Kabul',
        '(UTC+05:00) Ashgabat, Tashkent',
        '(UTC+05:00) Yekaterinburg',
        '(UTC+05:00) Islamabad, Karachi',
        '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
        '(UTC+05:30) Sri Jayawardenepura',
        '(UTC+05:45) Kathmandu',
        '(UTC+06:00) Nur-Sultan (Astana)',
        '(UTC+06:00) Dhaka',
        '(UTC+06:30) Yangon (Rangoon)',
        '(UTC+07:00) Bangkok, Hanoi, Jakarta',
        '(UTC+07:00) Novosibirsk',
        '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
        '(UTC+08:00) Krasnoyarsk',
        '(UTC+08:00) Kuala Lumpur, Singapore',
        '(UTC+08:00) Perth',
        '(UTC+08:00) Taipei',
        '(UTC+08:00) Ulaanbaatar',
        '(UTC+08:00) Irkutsk',
        '(UTC+09:00) Osaka, Sapporo, Tokyo',
        '(UTC+09:00) Seoul',
        '(UTC+09:30) Adelaide',
        '(UTC+09:30) Darwin',
        '(UTC+10:00) Brisbane',
        '(UTC+10:00) Canberra, Melbourne, Sydney',
        '(UTC+10:00) Guam, Port Moresby',
        '(UTC+10:00) Hobart',
        '(UTC+09:00) Yakutsk',
        '(UTC+11:00) Solomon Is., New Caledonia',
        '(UTC+11:00) Vladivostok',
        '(UTC+12:00) Auckland, Wellington',
        '(UTC+12:00) Coordinated Universal Time+12',
        '(UTC+12:00) Fiji',
        '(UTC+12:00) Magadan',
        '(UTC+12:00) Petropavlovsk-Kamchatsky - Old',
        "(UTC+13:00) Nuku'alofa",
        '(UTC+13:00) Samoa',
      ],
      teams: [
        'Marketers',
        'Human Resources',
        'Moderator',
        'Partnership Coordinator',
        'Developer',
        'Designer',
        'Shill Manager',
      ],
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
        team: null,
        other: null,
      },
      fullPage: false,
    }
  },
  methods: {
    send(e) {
      this.run = true
      try {
        this.$axios
          .$post(
            'https://api.rapidnetwork.co/api/TeststaffForm',
            //'https://api.rapidnetwork.co/api/staffForm'
            this.content
          )
          .then((x) => {
            this.requestSent = true
            if (x.sent) {
              return (this.error = false)
            } else {
              console.log('fail')
              return (this.error = true)
            }
          })
          .catch((E) => {
            this.requestSent = true
            console.log(E)
            return (this.error = true)
          })
      } catch (error) {
        console.warn(error)
        this.requestSent = true
        return (this.error = true)
      }
      e.preventDefault()
    },
  },
}
</script>
