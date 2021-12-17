<template>
  <div class="quotes">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="../assets/images/quotes.svg" alt="" width="100%" />
        </div>
        <div class="col d-flex">
          <h3
            class="content text-center justify-content-center align-self-center"
          >
            "Bekerja dalam bidang apapun sesungguhnya adalah interaksi,kombinasi
            yang kreatif antara intelek dan hati"
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quotes {
  padding: 70px 0;
  min-height: 500px;
  background-color: #6c63ff;
}

.content {
  color: white;
  font-size: 36px;
  font-weight: 400;
  font-style: italic;
}
</style>

<script>
export default {
  name: "Quotes",
};
</script>