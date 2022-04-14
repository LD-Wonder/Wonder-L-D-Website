<template>
  <main>
    <NavBar></NavBar>

    <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-gray-800 border-b border-gray-700 text-white text-left text-sm uppercase font-normal"
                  >
                    Page
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-gray-800 border-b border-gray-700 text-white text-left text-sm uppercase font-normal"
                  >
                    Info
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-gray-800 border-b border-gray-700 text-white text-left text-sm uppercase font-normal"
                  >
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">
                      TopBar + Only Once every 2 day alert
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">
                      Current Set the TopBar to SupportUkraine for now.. maybe
                      we can set it for new news and stuff || The STOCKTIPPERS
                      alert only shows every 2 days now.. no more spam everytime
                      the page loads
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-green-700 leading-tight"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      >
                      </span>
                      <span class="relative"> Complete </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">Staff/</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">
                      Added Senior Staff and Team Members using our API
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-green-700 leading-tight"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      >
                      </span>
                      <span class="relative"> Complete </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">FAQ/</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">Updated</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-green-700 leading-tight"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      >
                      </span>
                      <span class="relative"> Complete </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">Investing/</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">
                      Page yet not created.. think about adding scroll check
                      function to it..
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-yellow-700 leading-tight"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                      >
                      </span>
                      <span class="relative"> Incomplete </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">Others</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">
                      Add those new texts.. FAQ/ Policy/ Tos/ History/ Careers/
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-orange-700 leading-tight"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      >
                      </span>
                      <span class="relative"> Pending </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">Forms</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">Staff Forms</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-orange-700 leading-tight"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      >
                      </span>
                      <span class="relative"> Pending </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">NewsLetter</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <p class="text-white whitespace-no-wrap">
                      API for NewsLetter + add into homepage
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm"
                  >
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-orange-700 leading-tight"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      >
                      </span>
                      <span class="relative"> Pending </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Rapid Services | ChangeLogs',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Change Logs of the website pages - Only for staff but available publicly. Check this page instead of asking MrFluffycloud for progress Updates',
        },
        {
          name: 'og:title',
          hid: 'og:title',
          content: 'Rapid Services | ChangeLogs',
        },
        {
          name: 'og:site_name',
          hid: 'og:site_name',
          content: 'Rapid Services | ChangeLogs',
        },
        {
          name: 'og:description',
          hid: 'og:description',
          content:
            'Change Logs of the website pages - Only for staff but available publicly. Check this page instead of asking MrFluffycloud for progress Updates',
        },
      ],
    }
  },
}
</script>
