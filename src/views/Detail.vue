<template>
  <div class="detail">
    <Navbar />
    <BreadCrumbDetail />
    <h2>{{ karierList.divisi }}</h2>
  </div>
</template>

<style scoped>
</style>

<script>
import Navbar from "@/components/Navbar.vue";
import jobData from "../assets/data.json";
import BreadCrumbDetail from "@/components/BreadCrumbDetail.vue";

export default {
  name: "Detail",
  components: {
    Navbar,
    BreadCrumbDetail,
  },
  data: function () {
    return {
      karierList: jobData[this.$route.params.id],
    };
  },
};
</script>

<style scoped>
h2 {
  margin-top: 150px;
}
</style>