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
              <router-link class="nav-link" aria-current="true" to="/#tujuan"
                >Tujuan Kami</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="true" to="/loker"
                >Lowongan Kerja</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" data-toggle="tab" to="/#nilai"
                >Nilai-nilai Kompas</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#keseharian"
                >Keseharian Kami</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#mengenal"
                >Mengenal Kami</router-link
              >
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

.router-link-exact-active {
  color: #c79304 !important;
  background: white;
  border-radius: 5px;
  transition: 0.5s;
}
</style>

