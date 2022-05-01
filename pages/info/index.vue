<template>
  <main>
    <NavBar></NavBar>
    <InfoHero></InfoHero>
    <InfoTOS></InfoTOS>
    <InfoRefund></InfoRefund>
    <Footer></Footer>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Rapid Services | Info',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Wanna know about us? Check our Info? We got them all here! and if this doesn't provide what you are asking, Just hope on to our discord and don't be afraid to ask!",
        },
        {
          name: 'og:title',
          hid: 'og:title',
          content: 'Rapid Services | Info',
        },
        {
          name: 'og:site_name',
          hid: 'og:site_name',
          content: 'Rapid Services | Info',
        },
        {
          name: 'og:description',
          hid: 'og:description',
          content:
            "Wanna know about us? Check our Info? We got them all here! and if this doesn't provide what you are asking, Just hope on to our discord and don't be afraid to ask!",
        },
      ],
    }
  },
}
</script>
