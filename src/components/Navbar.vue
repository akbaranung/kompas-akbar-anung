<template>
  <div class="section-navbar">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">KOMPAS</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#tujuan">Tujuan Kami</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/loker"
                >Lowongan Kerja</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nilai-nilai Kompas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Keseharian Kami</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Mengenal Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
  color: white !important;
}

.nav-link:hover {
  color: #c79304 !important;
}
nav {
  background-color: #6c63ff;
}
</style>

