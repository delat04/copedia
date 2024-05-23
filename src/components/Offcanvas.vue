<script setup>
</script>

<template>
  <div class="offcanvas offcanvas-start custom-offcanvas" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header custom-offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body custom-offcanvas-body">
      <div class="ms-3" id="navbarSupportedContent">
        <h2>Contact me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia eveniet cupiditate voluptatum deserunt reprehenderit quaerat? Sapiente, sit voluptas similique deleniti sed officia ad quis itaque quod quibusdam est odio.
        </p>
        <h2><i class="bi bi-telephone"></i> +999 9999999999</h2>
        <hr class="custom-hr">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link custom-nav-link" type="button" data-bs-toggle="modal" data-bs-target="#privacyModal">Privacy policy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-nav-link" type="button" data-bs-toggle="modal" data-bs-target="#termsModal">Terms of use</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-nav-link" type="button" data-bs-toggle="modal" data-bs-target="#aboutModal">About</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-offcanvas {
  background-color: #121212;
  color: #ffffff;
}

.custom-offcanvas-header {
  border-bottom: 1px solid #333;
}

.btn-close {
  filter: invert(1);
}

.custom-offcanvas-body {
  background-color: #1f1f1f;
  padding: 20px;
}

.custom-hr {
  border-color: #ccc;
}

.navbar-nav .nav-item .custom-nav-link {
  color: #ffffff;
  transition: color 0.3s;
}

.navbar-nav .nav-item .custom-nav-link:hover {
  color: #aaa;
}

h2 {
  color: #ffffff;
  margin-top: 1rem;
  font-size: 1.5rem;
}

p {
  color: #ccc;
  margin-bottom: 1rem;
  line-height: 1.5;
}

i.bi-telephone {
  color: #ffffff;
  margin-right: 0.5rem;
}
</style>
