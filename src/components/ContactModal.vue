<script setup>
</script>



<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content custom-modal-content">
        <div class="modal-header custom-modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Contact Us</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <img src="/images/salesman.png" alt="no image" class="modal-image">
            <h3>Lorem ipsum dolor sit amet olorum, sunt!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore esse aperiam praesentium optio fugit temporibus autem earum dolores architecto id vel sint sequi, non provident itaque nemo voluptas omnis.</p>
            <h3><i class="bi bi-telephone" style="font-size:1.1em"></i> +999 999999999</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-modal-content {
  background: #212121;
  border: none;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.custom-modal-header {
  border-bottom: 1px solid #333;
  background: #1f1f1f;
  color: #fff;
}

.btn-close {
  filter: invert(1);
}

.modal-image {
  width: 100px;
  margin-bottom: 20px;
}

.modal-body {
  background: #1f1f1f;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
}

p {
  color: #ccc;
}

h3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
