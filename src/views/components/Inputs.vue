<template>
  <section class="section pb-0 section-components">
    <div class="container mb-5">
      <!-- Inputs -->
      <h3 class="h4 text-success font-weight-bold mb-4">
        Sân tốt khu vực miền bắc
      </h3>

      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <base-input placeholder="Regular"> </base-input>
          <base-input
            placeholder="Search"
            addon-left-icon="ni ni-zoom-split-in"
          >
          </base-input>
        </div>
        <div class="col-lg-4 col-sm-6">
          <base-input placeholder="Regular" disabled> </base-input>
          <base-input
            placeholder="Birthday"
            addon-right-icon="ni ni-zoom-split-in"
          >
          </base-input>
        </div>
        <div class="col-lg-4 col-sm-6">
          <base-input placeholder="Success" :valid="true"> </base-input>

          <base-input placeholder="Success" :valid="false"> </base-input>
        </div>
      </div>
    </div>
    <div class="py-5 bg-secondary">
      <div class="container">
        <!-- Inputs (alternative) -->
        <div class="mb-3">
          <small class="text-uppercase font-weight-bold">Banner</small>
        </div>
        <div class="row"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style></style>
