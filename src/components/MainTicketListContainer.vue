<template>
  <section class="section">
    <div class="container">
      <ul class="list portfolio-resume">
        <li
          class="portfolio-resume-card"
          v-for="t in filteredList"
          :key="t.firstName"
        >
          <div class="link portfolio-link" href="">
            <div class="portfolio-content-wrapper">
              <h2 class="second-main-portfolio">{{ t.firstName }}</h2>
              <p class="about-projects">{{ t.lastName }}</p>
              <p class="about-projects">{{ t.email }}</p>
              <p class="about-projects">{{ t.phoneNumber }}</p>
              <p class="about-projects">Event</p>
              <button type="button" class="btn-delete" @click="handleDelete(t)">
                delete
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template> 

