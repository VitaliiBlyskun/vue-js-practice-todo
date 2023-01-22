<template>
  <header class="header">
    <div class="header-container">
      <form class="form-space">
        <label for="ticket" class="form-space label-text">name:</label>
        <input
          v-model="ticketCreate"
          v-on:keydown.enter="add"
          type="text"
          name="ticket"
          id="ticket"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          class="input-between-label label-text"
          required
        />

        <Label for="phone" class="form-space label-text">
          number:
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            class="input-between-label label-text"
            required
          />
        </Label>

        <Label for="phone" class="form-space label-text">
          email:
          <input
            type="email"
            name="phone"
            class="input-between-label label-text"
            required
          />
        </Label>
      </form>
      <AddUserButton @click="add" />
    </div>
    <div class="container header-container">
      <label class="label-filter label-text">filter:</label>
      <input class="input-between-label" v-model="filter" />
    </div>
  </header>
  <main>
    <section class="section">
      <div class="container">
        <ul class="list portfolio-resume">
          <li
            class="portfolio-resume-card"
            v-for="t in filteredTickets"
            :key="t.name"
          >
            <div class="link portfolio-link" href="">
              <div class="ticket-content-wrapper">
                <div class="inside-ticket-content-wrapper">
                  <h2 class="second-main-ticket">{{ t.name }}</h2>
                  <p class="about-contact">{{ t.email }}</p>
                  <p class="about-contact">{{ t.phoneNumber }}</p>
                  <div class="delete-button-container">
                    <DeleteUserButton @click="handleDelete(t)" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <footer v-if="tickets.length > 0" class="footer-color"></footer>
</template>

<script>
import AddUserButton from "./components/AddUserButton.vue";
import DeleteUserButton from "./components/DeleteUserButton";

export default {
  name: "App",

  components: {
    AddUserButton,
    DeleteUserButton,
  },

  data() {
    return {
      ticketCreate: null,
      filter: "",
      tickets: [
        // {name: 'Vitali Blyskun', email: 'vito@gmail.com', phoneNumber: '+12345'},
        // {name: 'Vito Blyskun', email: 'vito@gmail.com', phoneNumber: '+12345'},
        // {name: 'Vitalik Blyskun', email: 'vito@gmail.com', phoneNumber: '+12345'},
        // {name: 'Vitaliy Blyskun', email: 'vito@gmail.com', phoneNumber: '+12345'},
        // {name: 'Vetal Blyskun', email: 'vito@gmail.com', phoneNumber: '+12345'},
        // {name: 'Vitalinho Blyskun', email: 'vito@gmail.com', phoneNumber: '+12345'},
      ],
    };
  },

  created() {
    const ticketsData = localStorage.getItem("tickets-list");

    if (ticketsData) {
      this.tickets = JSON.parse(ticketsData);
    }
  },

  computed: {
    filteredTickets() {
      const lowerFilter = this.filter.toLowerCase();

      return this.tickets.filter((ticket) =>
        ticket.name.toLowerCase().includes(lowerFilter)
      );
    },
  },

  methods: {
    add() {
      const newTicket = {
        name: this.ticketCreate,
        email: "_",
        phoneNumber: "_",
      };

      if (this.tickets.find((name) => name.name === newTicket.name)) {
        return alert(`${newTicket.name} is already in tickets.`);
      }

      this.tickets = [...this.tickets, newTicket];
      this.ticketCreate = "";
    },

    handleDelete(ticketToRemove) {
      this.tickets = this.tickets.filter((t) => t !== ticketToRemove);
    },
  },

  watch: {
    tickets() {
      localStorage.setItem("tickets-list", JSON.stringify(this.tickets));
    },
  },
};
</script>

<style src="./app.css"></style>





<!-- 
Займатися пробувати це поєднати з написаним вище кодом
https://www.youtube.com/watch?v=7LatlRYQ92o&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=28&ab_channel=JavaScript.Ninja
https://codesandbox.io/s/slots-demo-forked-i7ey7u?file=/package.json
https://www.youtube.com/playlist?list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw
-->

<!-- 
<template>
<List :items="contacts" :fields="['name', 'email', 'phone']">
    <template #item="{ item: contact }">
      {{ contact.name }}, {{ contact.phone }}, {{ contact.email }}
    </template>
  </List> 
</template>

<script>
import List from "./components/List-Contacts-Names.vue";

import { loadContacts } from "./api.js";
export default {
  name: "App",
  components: {
    List,
  },
  data() {
    return { contacts: [] };
  },

  mounted() {
    loadContacts().then((contacts) => {
      this.contacts = contacts;
    });
  },
};
</script>
-->
