<template>
    <form class="setting is-content">
      <!-- Product name -->
      <div class="input is-group">
        <label for="product-name">Product Name</label>
        <input type="text" id="product-name" placeholder="Enter product name" required />
      </div>
  
      <!-- Product cover (image upload) -->
      <div class="input is-group">
        <label for="product-cover">Product Cover</label>
        <input type="file" id="product-cover" accept="image/*" required />
      </div>
  
      <!-- Product images (multi image upload) -->
      <div class="input is-group">
        <label for="product-images">Product Images</label>
        <input type="file" id="product-images" accept="image/*" multiple required />
      </div>
  
      <!-- CoAs (upload document) -->
      <div class="input is-group">
        <label for="product-coas">CoAs (Upload Document)</label>
        <input type="file" id="product-coas" accept=".pdf,.doc,.docx" required />
      </div>
  
      <!-- Description (Long text) -->
      <div class="input is-group">
        <label for="product-description">Description</label>
        <textarea id="product-description" placeholder="Enter a detailed product description" required></textarea>
      </div>
  
      <!-- Product category (dropdown) -->
      <div class="input is-group">
        <label for="product-category">Product Category</label>
        <select id="product-category" required>
          <option value="" disabled selected>Select a category</option>
          <option value="Flower - Dry">Flower - Dry</option>
          <option value="Trim - Dry">Trim - Dry</option>
          <option value="Flowers - Fresh Frozen">Flowers - Fresh Frozen</option>
          <option value="Live resin and diamonds">Live resin and diamonds</option>
          <option value="Bubble hash">Bubble hash</option>
          <option value="Kief">Kief</option>
          <option value="Live rosin">Live rosin</option>
          <option value="Edibles - sweet">Edibles - sweet</option>
          <option value="Edibles - savory">Edibles - savory</option>
          <option value="Isolates">Isolates</option>
          <option value="Distillates">Distillates</option>
        </select>
      </div>
  
      <!-- Type (Dropdown) -->
      <div class="input is-group">
        <label for="product-type">Type</label>
        <select id="product-type" required>
          <option value="" disabled selected>Select a type</option>
          <option value="Sativa">Sativa</option>
          <option value="Indica">Indica</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>
  
      <!-- Aromas (text) -->
      <div class="input is-group">
        <label for="product-aromas">Aromas</label>
        <input type="text" id="product-aromas" placeholder="Enter aromas" required />
      </div>
  
      <!-- Manufacturer (Dropdown) -->
      <div class="input is-group">
        <label for="product-manufacturer">Manufacturer</label>
        <select id="product-manufacturer" required>
          <option value="" disabled selected>Select a manufacturer</option>
          <option value="AltvetPet Inc">AltvetPet Inc</option>
          <option value="LexPon Inc">LexPon Inc</option>
          <option value="MetBeat Corp">MetBeat Corp</option>
        </select>
      </div>
  
      <!-- Harvest Date (Date select) -->
      <div class="input is-group">
        <label for="harvest-date">Harvest Date</label>
        <input type="date" id="harvest-date" required />
      </div>
  
      <!-- Lineage (Text) -->
      <div class="input is-group">
        <label for="product-lineage">Lineage</label>
        <input type="text" id="product-lineage" placeholder="Enter lineage" required />
      </div>
  
      <!-- THC (as is) -->
      <div class="input is-group">
        <label for="thc">THC (%)</label>
        <input type="number" id="thc" placeholder="Enter THC percentage" required />
      </div>
  
      <!-- CBD (as is) -->
      <div class="input is-group">
        <label for="cbd">CBD (%)</label>
        <input type="number" id="cbd" placeholder="Enter CBD percentage" required />
      </div>
  
      <!-- Terpenes (Text) -->
      <div class="input is-group">
        <label for="terpenes">Terpenes</label>
        <input type="text" id="terpenes" placeholder="Enter terpenes" required />
      </div>
  
      <!-- Highest Terpenes (Text) -->
      <div class="input is-group">
        <label for="highest-terpenes">Highest Terpenes</label>
        <input type="text" id="highest-terpenes" placeholder="Enter highest terpenes" required />
      </div>
  
      <!-- Certification (Text) -->
      <div class="input is-group">
        <label for="certification">Certification</label>
        <input type="text" id="certification" placeholder="Enter certification" required />
      </div>
  
      <!-- Min $ Request /G (number + add 5% markup) -->
      <div class="input is-group">
        <label for="min-request">Min $ Request /G</label>
        <input type="number" id="min-request" placeholder="Enter minimum $ request per gram" required />
      </div>
  
      <!-- Grams available -->
      <div class="input is-group">
        <label for="grams-available">Grams Available</label>
        <input type="number" id="grams-available" placeholder="Enter grams available" required />
      </div>
  
      <!-- Upcoming quantity (next 3 months) -->
      <div class="input is-group">
        <label for="upcoming-quantity">Upcoming Quantity (Next 3 Months)</label>
        <input type="number" id="upcoming-quantity" placeholder="Enter upcoming quantity for the next 3 months" required />
      </div>
  
      <button type="submit" class="button is-dark">Submit</button>
    </form>
  </template>
  