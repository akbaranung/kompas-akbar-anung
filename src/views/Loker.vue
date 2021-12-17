<template>
  <div class="loker">
    <Navbar />
    <HeroLoker />
    <BreadCrumb />
    <ListKarier />
    <Footer />
  </div>
</template>

<style scoped>
</style>

<script>
import Navbar from "@/components/Navbar.vue";
import HeroLoker from "@/components/HeroLoker.vue";
import Footer from "@/components/Footer.vue";
import BreadCrumb from "@/components/BreadCrumb";
import ListKarier from "@/components/ListKarier";

export default {
  name: "Loker",
  components: {
    Navbar,
    HeroLoker,
    Footer,
    BreadCrumb,
    ListKarier,
  },
};
</script>