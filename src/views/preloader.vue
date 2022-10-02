<script setup>
    import Header from '@/components/header.vue'
    import Footer from '@/components/footer.vue'
    import Preloader from '@/components/preloader/preloader.vue';
</script>

<template>
    <header class="header">
      <Header />
    </header>
    <main class="preloader">
      <preloader />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
</template>