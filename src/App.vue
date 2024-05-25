<script setup>
import { onMounted, ref } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import axios from 'axios';
import Offcanvas from './components/Offcanvas.vue'
import ContactModal from './components/ContactModal.vue'
import TermsModal from './components/TermsModal.vue'
import PrivacyModal from './components/PrivacyModal.vue'
import AboutModal from './components/AboutModal.vue'
import { Modal } from 'bootstrap'

let map = ref(null)
let newMarker = ref(null)
let newMarkerData = ref({
  title: '',
  price: '',
  description: '',
  image: '',
  color: ''
})

function adjustMapHeight() {
  let screenHeight = document.documentElement.clientHeight;
  document.getElementById('map').style.height = `${screenHeight}px`;
}

function initiateMap(markers) {
  map.value = L.map('map').setView([36.8, 10], 10)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map.value)

  let markerLayer = L.geoJSON(markers, {
    pointToLayer: (feature, latlng) => {
      const customIcon = L.icon({
        iconUrl: 'https://img.icons8.com/dusk/64/order-delivered.png', // URL of the image
        iconSize: [32, 32], // Smaller size of the icon
        iconAnchor: [16, 32], // Anchor point of the icon
      });
      return L.marker(latlng, { icon: customIcon });
    },
    onEachFeature: (feature, layer) => {
      layer.on('click', () => {
        const { title, price, description, image } = feature.properties
        L.popup()
            .setLatLng(layer.getLatLng())
            .setContent(`
            <div class="card text-bg-secondary text-center">
              <div class="card-body">
                <h6 class="card-subtitle mb-2">${title}</h6>
                <img src="images/${image}" class="img-fluid pb-2" style="width: 200px">
                <h5 class="card-title">${price}</h5>
                <p>${description}</p>
              </div>
            </div>
          `)
            .openOn(map.value)
      })
    }
  }).addTo(map.value)

  // Event listener for adding a new marker
  if (map.value) {
    map.value.on('click', (e) => {
      const { lat, lng } = e.latlng
      addNewMarker(lat, lng)
    })
  } else {
    console.error('Map is not initialized')
  }
}

function addNewMarker(lat, lng) {
  if (newMarker.value) {
    newMarker.value.remove();
  }

  const customIcon = L.icon({
    iconUrl: 'https://img.icons8.com/dusk/64/order-delivered.png', // URL of the image
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
  });

  newMarker.value = L.marker([lat, lng], { icon: customIcon }).addTo(map.value);

  // Open the marker form modal
  const modal = new Modal(document.getElementById('markerFormModal'));
  modal.show();
}

function openMarkerForm() {
  console.log('Opening marker form modal...')
  const modal = new Modal(document.getElementById('markerFormModal'));
  modal.show();
}

async function saveNewMarker() {
  if (!newMarker.value) {
    console.error('New marker not set');
    return;
  }

  const { title, price, description, image, color } = newMarkerData.value;

  const newMarkerObject = {
    type: "Feature",
    properties: {
      title: title,
      price: price,
      description: description,
      image: image,
      color: color
    },
    geometry: {
      type: 'Point',
      coordinates: [newMarker.value.getLatLng().lng, newMarker.value.getLatLng().lat]
    }
  };

  try {
    const response = await fetch('http://localhost:3000/save-marker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMarkerObject)
    });

    if (!response.ok) {
      throw new Error('Failed to save marker data');
    }
    console.log('Marker saved successfully');
    const markerFormModal = new Modal(document.getElementById('markerFormModal'));
    markerFormModal.hide();
  } catch (error) {
    console.error('Error saving marker data:', error);
  }
}







onMounted(async () => {
  adjustMapHeight();
  try {
    // Fetch marker data dynamically based on the environment
    const apiUrl = process.env.NODE_ENV === 'production' ? '/data' : 'http://localhost:3000/data';
    const response = await axios.get(apiUrl);
    
    // Handle the response data
    console.log(response.data);
    markersArray.value = response.data; // Assuming response.data is the marker data
    initiateMap(markersArray.value);
  } catch (error) {
    console.error('Error fetching marker data:', error);
  }
});



</script>

<template>
  <div class="position-relative" id="map-section">
    <div id="map"></div>
    <div class="position-absolute start-50 top-0 mt-2 ms-2" style="z-index: 1000;">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Menu
      </button>
      <button class="btn btn-success" @click="openMarkerForm">Add Custom Marker</button>
    </div>
    <div class="position-absolute end-0 top-0 mt-2 me-2" style="z-index: 1000;">
      <img src="../logo.png" alt="Your Brand Name" style="width: 80px; height: auto;">
    </div>

    <div class="position-absolute end-0 bottom-0 mb-4 me-2" style="z-index: 1000;">
      <a type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src="/images/customer-service.png" class="rounded-2 border border-3 border-green" alt="no image" id="banner-image">
      </a>
    </div>

    <!-- Marker Form Modal -->
    <div class="modal fade" id="markerFormModal" tabindex="-1" aria-labelledby="markerFormModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="markerFormModalLabel">Add Custom Marker</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveNewMarker">
              <div class="mb-3">
                <label for="markerTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="markerTitle" v-model="newMarkerData.title">
              </div>
              <div class="mb-3">
                <label for="markerPrice" class="form-label">Price</label>
                <input type="text" class="form-control" id="markerPrice" v-model="newMarkerData.price">
              </div>
              <div class="mb-3">
                <label for="markerDescription" class="form-label">Description</label>
                <textarea class="form-control" id="markerDescription" rows="3" v-model="newMarkerData.description"></textarea>
              </div>
              <div class="mb-3">
                <label for="markerImage" class="form-label">Image URL</label>
                <input type="text" class="form-control" id="markerImage" v-model="newMarkerData.image">
              </div>
              <button type="submit" class="btn btn-primary">Save Marker</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Offcanvas id="offcanvasExample"/>
    <ContactModal />
    <PrivacyModal />
    <TermsModal />
    <AboutModal />
  </div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100vh; /* Ensure the map takes full viewport height */
}

@media (max-width: 720px) {
  #banner-image {
    height: 90px;
  }

}

@media (min-width: 721px) {
  #banner-image {
    height: 140px;
  }

}
</style>
