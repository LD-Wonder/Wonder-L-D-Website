<template>
  <main>
    <NavBar> </NavBar>
    <Hero> </Hero>
    <Features> </Features>
    <WhyUs> </WhyUs>
    <Stats> </Stats>
    <Footer> </Footer>
    <div v-if="showModal">
      <t-modal v-model="showModal" header="STOCKTIPPERS">
        <b>STOCKTIPPERS</b> is all about financial independence where you can
        learn & earn everything Crypto, Sticks, Forex, Options Related!<br /><br /><span
          class="font-medium text-violet-300"
          >Click View to Learn More!</span
        >
        <template v-slot:footer>
          <div class="flex justify-between">
            <t-button type="button">
              <svg
                class="-ml-0.5 mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path></svg
              >Visit
            </t-button>
          </div>
        </template>
      </t-modal>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showModal = true
    }, 5000)
  },
}
</script>
