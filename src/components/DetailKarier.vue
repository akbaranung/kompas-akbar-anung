<template>
  <div class="detail-karier">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h2 class="tentang-pekerjaan">Tentang Pekerjaan</h2>
            <div class="line ms-3"></div>
            <ul class="mt-3 ms-3">
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, quaerat?
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, quaerat?
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, quaerat?
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, quaerat?
              </li>
            </ul>
          </div>
          <div class="row mt-5">
            <h2 class="persyaratan">Persyaratan</h2>
            <div class="line ms-3"></div>
            <ul class="mt-3 ms-3">
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
        <div class="col ms-5">
          <h2>Detail Pendaftaran</h2>
          <div class="line"></div>
          <div class="row mt-4">
            <div class="card ms-3">
              <div>
                <p class="title">Tanggal Pendaftaran</p>
                <p>{{ karierList.pendaftaran }}</p>
              </div>
              <div>
                <p class="title">Lokasi</p>
                <p>{{ karierList.location }}/{{ karierList.work }}</p>
              </div>
              <div>
                <p class="title">Departement</p>
                <p>{{ karierList.divisi }}</p>
              </div>
              <div>
                <p class="title">Perusahaan</p>
                <p>{{ karierList.perusahaan }}</p>
              </div>
            </div>
            <button class="ms-3 mt-3">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jobData from "../assets/data.json";
export default {
  name: "DetailKarier",
  data: function () {
    return {
      karierList: jobData[this.$route.params.id],
    };
  },
};
</script>

<style scoped>
.detail-karier {
  padding: 0 0 100px;
}
h2 {
  font-weight: 600;
}
.line {
  width: 60px;
  border: 2px solid #c79304;
  border-radius: 5px;
}

p.title {
  font-weight: bold;
}

.card {
  padding: 50px;
  width: 80%;
  background-color: rgba(190, 190, 190, 0.247);
  border: rgba(190, 190, 190, 0.247);
}

button {
  width: 80%;
  background-color: #c79304;
  border: #c79304;
  color: white;
  padding: 5px;
  border-radius: 5px;
}
</style>