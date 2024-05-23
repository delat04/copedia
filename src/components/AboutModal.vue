<script setup>
</script>

<template>
  <!-- Modal -->
  <div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content custom-modal-content">
        <div class="modal-header custom-modal-header">
          <h1 class="modal-title fs-5" id="aboutModalLabel">About Us</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h1>Lorem ipsum dolor sit amet consectetur!</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat blanditiis suscipit vitae non? Quaerat saepe nemo aperiam placeat maiores, molestiae nihil? Laudantium distinctio architecto, quidem iure unde dicta nostrum sapiente quisquam incidunt nisi suscipit eos consectetur rem id libero delectus! Odit recusandae harum iste in quae vel quisquam ea sed ipsum repellendus corrupti, natus omnis mollitia velit. Molestias, expedita quo.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat blanditiis suscipit vitae non? Quaerat saepe nemo aperiam placeat maiores, molestiae nihil? Laudantium distinctio architecto, quidem iure unde dicta nostrum sapiente quisquam incidunt nisi suscipit eos consectetur rem id libero delectus! Odit recusandae harum iste in quae vel quisquam ea sed ipsum repellendus corrupti, natus omnis mollitia velit. Molestias, expedita quo.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-modal-content {
  background: #121212;
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

.modal-body {
  background: #1f1f1f;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
}

h1, p {
  color: #ccc;
}
</style>
