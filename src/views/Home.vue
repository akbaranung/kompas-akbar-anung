<template>
  <div class="home">
    <Navbar />
    <HeroHome />
    <Tujuan />
    <Quotes />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import HeroHome from "@/components/HeroHome.vue";
import Tujuan from "@/components/Tujuan.vue";
import Quotes from "@/components/Quotes.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    HeroHome,
    Tujuan,
    Quotes,
    Footer,
  },
};
</script>
