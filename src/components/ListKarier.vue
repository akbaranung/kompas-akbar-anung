<template>
  <div class="list-karier">
    <div class="container">
      <div class="row">
        <h1>Reseacrh & Development (Litbang)</h1>
      </div>

      <div class="row" v-for="karier in karierList" v-bind:key="karier.id">
        <dic class="card">
          <div class="row">
            <div class="col-md-4">
              <p class="posisi">{{ karier.name }}</p>
              <p>PT Kompas Media Nusantara</p>
            </div>
            <div class="col-md-4">
              <b-icon icon="geo-alt-fill"></b-icon> {{ karier.location }}
            </div>
            <div class="col-md-3">
              <p class="category">{{ karier.category }}</p>
            </div>
            <div class="col-md-1">
              <router-link :to="'/loker/detail/' + karier.id"
                ><b-icon icon="chevron-right"></b-icon
              ></router-link>
            </div>
          </div>
        </dic>
      </div>
    </div>
  </div>
</template>

<script>
import jobData from "../assets/data.json";

export default {
  name: "ListKarier",
  data: function () {
    return {
      karierList: jobData,
    };
  },
};
</script>

<style scoped>
.list-karier {
  padding: 50px 0;
}
.card {
  padding: 20px 10px;
}
h1 {
  font-weight: 600;
  margin-bottom: 50px;
}

.posisi {
  font-weight: 800;
}

.category {
  background-color: #6c63ff;
  width: 90px;
  text-align: center;
}

b-icon {
  color: black;
}
</style>