<template>
  <div class="hero-detail">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{ karierList.name }}</h1>
          <div class="detail">
            <span>{{ karierList.category }} <b-icon icon="dot"></b-icon></span>
            <span>{{ karierList.divisi }}</span>
          </div>
          <button class="mt-4">Daftar</button>
          <span class="icon"
            ><b-icon icon="share-fill" class="ms-4"></b-icon
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jobData from "../assets/data.json";
export default {
  name: "HeroDetail",
  data: function () {
    return {
      karierList: jobData[this.$route.params.id],
    };
  },
};
</script>

<style scoped>
.hero-detail {
  padding: 180px 0 100px;
  background-color: #6c63ff;
  color: white;
}

h1 {
  font-weight: 800;
}
.detail {
  margin-top: 30px;
}

.detail span {
  font-weight: 700;
}

button {
  padding: 5px 50px;
  background-color: #c79304;
  border: 2px solid #c79304;
  color: white;
  font-weight: 600;
}

button:hover {
  color: #6c63ff;
  background: white;
  border: 2px solid #6c63ff;
}

.icon {
  font-size: 25px;
}
</style>