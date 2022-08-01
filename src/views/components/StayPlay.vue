<template>
  <section class="section pb-0 section-components">
    <div class="py-5 bg-secondary">
      <div class="container">
        <!-- Inputs (alternative) -->
        <div class="mb-3">
          <small class="text-uppercase font-weight-bold"
            >Đặt sân, mua sắm, dịch vụ golf</small
          >
        </div>
        <div class="row"></div>
      </div>
    </div>
    <div class="container mb-5">
      <!-- Inputs -->
      <h3 class="h4 text-success font-weight-bold mb-4">
        Stay&Play - Du lịch golf
      </h3>
      <div class="mb-3">
        <small class="text-uppercase font-weight-bold">Form controls</small>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <base-input placeholder="Regular"> </base-input>
        </div>
        <div class="col-lg-4 col-sm-6">
          <base-input placeholder="Regular" disabled> </base-input>
        </div>
        <div class="col-lg-4 col-sm-6">
          <base-input placeholder="Success" :valid="true"> </base-input>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style></style>
