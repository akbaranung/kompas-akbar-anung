<template>
  <section class="breadcrumb">
    <div class="container">
      <nav
        aria-label="breadcrumb"
        class="breadcrumb"
        style="--bs-breadcrumb-divider: '>'"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/"
              ><b-icon icon="house-door-fill" style="color: #979797"></b-icon
            ></router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Karier</li>
        </ol>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style scoped>
section.breadcrumb {
  /* background-color: #6c63ff; */
  margin-top: 20px;
}

nav.breadcrumb {
  background-color: #f3f2f2;
  padding: 10px 10px 0;
  border-radius: 10px;
}

.active {
  color: #c79304 !important;
  font-weight: 600;
}
</style>