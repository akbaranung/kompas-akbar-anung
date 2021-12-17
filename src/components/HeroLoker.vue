<template>
  <div class="hero-loker">
    <div class="container">
      <div class="text-center">
        <h1>Temukan Karir Impianmu</h1>
        <p>Mulai berkarir dan temukan bersama Harian Kompas</p>
      </div>

      <div class="card">
        <div class="row pt-4 px-2">
          <div class="col-md-4">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="karier"
                placeholder="Cari Karier"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Semua Department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Semua Lokasi</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="col-md-1">
            <button class="icon text-center btn">
              <b-icon-search></b-icon-search>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroLoker",
};
</script>

<style scoped>
.hero-loker {
  background-color: #6c63ff;
  padding: 200px 0 30px;
  color: white;
}

h1 {
  font-weight: 800;
}

p {
  font-weight: 200;
  font-size: 30px;
}

.icon {
  background-color: #c79304;
  padding: 7px;
  color: white;
}

.card {
  margin-top: 150px;
}
</style>