<template>
  <div class="text-white text-center font-bold overflow-hidden">
    <section data-theme="night" class="group">
      <div
        class="bg-secondary py-72 relative z-10 -my-40 clip group-hover:bg-secondary-focus shadow-md"
      >
        <h1>Sicher</h1>
      </div>
    </section>

    <section data-theme="forest" class="group">
      <div class="bg-primary py-52 group-hover:bg-primary-focus shadow-md">
        <h1>Section three</h1>
      </div>
    </section>
  </div>
</template>

<style>
.clip {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%);
}
</style>
