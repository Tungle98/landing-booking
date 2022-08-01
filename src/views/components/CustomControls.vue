<template>
  <section class="section">
    <div class="container">
      <!-- Custom controls -->
      <h3 class="h4 text-success font-weight-bold mb-4">
        Sân tốt khu vực miền Trung
      </h3>
      <div class="row"></div>
      <div class="row justify-content-center mt-md">
        <div class="col-lg-12">
          <!-- Menu -->
          <h3 class="h4 text-success font-weight-bold mb-4">
            Sân tốt khu vực miền Nam
          </h3>
          <div class="row"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
  },
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true,
        uncheckedDisabled: false,
        checkedDisabled: true,
      },
      radio: {
        radio1: "radio1",
        radio2: "radio3",
      },
      switches: {
        off: false,
        on: true,
      },
      sliders: {
        slider1: 0,
        slider2: [150, 400],
      },
    };
  },
};
</script>
<style></style>
