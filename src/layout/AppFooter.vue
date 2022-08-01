<template>
  <footer class="footer ">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-4">
          <p class="font-weight-light mb-0">
            Giá tốt
          </p>
          <p class="mb-0 font-weight-light">
            Top 10 sân golf tốt
          </p>
          <p class="mb-0 font-weight-light">
            Chọn theo khu vực
          </p>
          <p class="mb-0 font-weight-light">
            Stay&Play
          </p>
        </div>
        <div class="col-lg-4">
          <p class=" mb-0 font-weight-light">
            Về chúng tôi
          </p>
          <p class="mb-0 font-weight-light">
            Liên hệ
          </p>
          <p class="mb-0 font-weight-light ">
            GolfNews
          </p>
          <p class="mb-0 font-weight-light">
            Vgs Travel
          </p>
          <p class="mb-0 font-weight-light">
            Vgs Tour
          </p>
        </div>
        <div class="col-lg-4 text-lg-center btn-wrapper">
          <p class="mb-0 font-weight-light">
            Tải app vHandicap
          </p>
          <a
            target="_blank"
            rel="noopener"
            href="https://twitter.com/creativetim"
            class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/creativetim"
            class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Like us"
          >
            <i class="fa fa-facebook-square"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://dribbble.com/creativetim"
            class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-dribbble"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/creativetimofficial"
            class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Star on Github"
          >
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6 col-sm-6">
          <div class="copyright">
            &copy; copyright {{ year }}
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              rel="noopener"
              >VGS Booking.</a
            >
            <a href="" target="_blank" rel="noopener">All rights</a>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a
                href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >MIT License</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
