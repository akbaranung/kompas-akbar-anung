<template>
  <div class="hero-home mt-5">
    <div class="container">
      <div class="row">
        <div class="col-6 d-flex">
          <div class="justify-content-center align-self-center">
            <h2>Jadilah Bagian dari Perubahan Indonesia</h2>
            <p>Bekerja dengan hati dan dedikasi bersama kami.</p>
            <router-link class="btn btn-primary" to="/loker">
              Lihat Semua Karier <b-icon-eye></b-icon-eye>
            </router-link>
          </div>
        </div>
        <div class="col-6">
          <img src="../assets/images/hero.svg" alt="" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroHome",
};
</script>

<style scoped>
.hero-home {
  padding-top: 100px;
  background-color: #6c63ff;
  padding-bottom: 100px;
}
p {
  color: white;
}
h2 {
  font-weight: 800;
  color: white;
}
.btn,
.btn-primary {
  background-color: #c79304;
  border: #fcc206;
}

.btn:hover,
.btn-primary:hover {
  background-color: none !important;
}
</style>