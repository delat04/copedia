<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/" class="home-link">Go back home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.not-found h1 {
  font-size: 8rem;
  margin: 0;
  color: #ff4d4f;
}

.not-found p {
  font-size: 1.5rem;
  margin: 20px 0;
}

.home-link {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #0056b3;
}
</style>
