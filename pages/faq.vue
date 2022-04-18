<template>
  <main>
    <NavBar></NavBar>
    <FAQHero></FAQHero>
    <FAQFAQs></FAQFAQs>
    <Footer></Footer>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Rapid Services | FAQ',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Some Frequently Asked questions! Feel free to ask through our Discord!',
        },
        {
          name: 'og:title',
          hid: 'og:title',
          content: 'Rapid Services | FAQ',
        },
        {
          name: 'og:site_name',
          hid: 'og:site_name',
          content: 'Rapid Services | FAQ',
        },
        {
          name: 'og:description',
          hid: 'og:description',
          content:
            'Some Frequently Asked questions! Feel free to ask through our Discord!',
        },
      ],
    }
  },
}
</script>