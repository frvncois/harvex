<template>
  <form class="setting is-content">
    <div class="input is-group">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Your email" required />
    </div>
    <div class="input is-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Your password" required />
    </div>
    <div class="input is-group">
      <label for="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" placeholder="Confirm your password" required />
    </div>
    <button type="submit" class="button is-dark">Update</button>
  </form>

  <form class="setting is-content">
    <div class="input is-group">
      <label for="name">Your Name</label>
      <input type="text" id="name" placeholder="Your name" required />
    </div>
    <div class="input is-group">
      <label for="company">Company</label>
      <input type="text" id="company" placeholder="Your company" required />
    </div>
    <div class="input is-group">
      <label for="title">Title</label>
      <input type="text" id="title" placeholder="Your title" required />
    </div>
    <div class="input is-group">
      <label for="phone">Phone</label>
      <input type="tel" id="phone" placeholder="Your phone number" required />
    </div>
    <button type="submit" class="button is-dark">Update</button>
  </form>

  <form class="setting is-content">
    <div class="input is-group">
      <label for="address">Address</label>
      <input type="text" id="address" placeholder="Your address" required />
    </div>
    <div class="input is-group">
      <label for="city">City</label>
      <input type="text" id="city" placeholder="Your city" required />
    </div>
    <div class="input is-group">
      <label for="postal-code">Postal Code</label>
      <input type="text" id="postal-code" placeholder="Your postal code" required />
    </div>
    <button type="submit" class="button is-dark">Update</button>
  </form>
</template>
