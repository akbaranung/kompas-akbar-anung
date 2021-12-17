<template>
  <div class="detail">
    <Navbar />
    <HeroDetail />
    <BreadCrumbDetail />
    <DetailKarier />
    <Footer />
  </div>
</template>

<style scoped>
</style>

<script>
import Navbar from "@/components/Navbar.vue";
import HeroDetail from "@/components/HeroDetail.vue";
import BreadCrumbDetail from "@/components/BreadCrumbDetail.vue";
import DetailKarier from "@/components/DetailKarier.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Detail",
  components: {
    Navbar,
    HeroDetail,
    BreadCrumbDetail,
    DetailKarier,
    Footer,
  },
};
</script>