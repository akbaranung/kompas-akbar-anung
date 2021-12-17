<template>
  <div class="tujuan" id="tujuan">
    <div class="container">
      <h2 class="text-center">Tujuan Kami</h2>
      <div class="row mt-5">
        <div class="col">
          <img
            src="../assets/images/tujuan.svg"
            alt=""
            width="100%"
            height="50%"
          />
        </div>
        <div class="col">
          <h4 class="mb-3">Bekerja Dengan Tujuan Baik</h4>
          <p class="text-align-justify">
            Lahir dejak tahun 1965, Harian Kompas terus konsisten memberikan
            arah dan tujuan untuk Indonesia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit voluptatibus, dolorum pariatur
            eos in recusandae tenetur commodi alias asperiores ullam consectetur
            blanditiis necessitatibus. Aperiam cumque voluptates impedit ipsa!
            Id sed blanditiis magni, porro corporis quaerat perferendis
            aspernatur dolor cumque, ratione vel sint quidem nisi recusandae?
            Quos velit nemo non ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            alias, modi quod officia inventore voluptas reprehenderit soluta
            distinctio dolore dicta.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            expedita eligendi quae praesentium dicta sed provident neque quaerat
            earum, in aliquam autem laborum veritatis. Ipsam officia voluptate
            ipsa aliquid id.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tujuan",
};
</script>

<style scoped>
.tujuan {
  margin-top: 100px;
  margin-bottom: 50px;
  padding-top: 50px;
}

h2 {
  text-align: center;
  margin: 0 auto 20px;
  position: relative;
  line-height: 60px;
  z-index: 1;
  padding-bottom: 15px;
  font-weight: 700;
}
h2:after {
  content: "";
  background: #c79304;
  width: 50px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 44%;
  transform: translateX(-50%);
}

p {
  text-align: justify;
}
</style>