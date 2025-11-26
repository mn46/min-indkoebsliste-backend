<template>
  <v-app>
    <v-main class="bg-white d-flex flex-column min-h-screen">
      <header class="bg-red pt-12 pb-16 text-center rounded-b-xl">
        <p class="text-subtitle-1 white--text">Hej</p>
        <h1 class="white--text text-h3 font-weight-bold">{{ user?.userName }}</h1>
      </header>

      <section class="px-4 py-8 flex-grow">
        <h2 class="text-center text-h5 text-grey-darken-1 mb-6">Homepage</h2>

        <v-container class="pa-0" style="max-width: 400px;">
          <v-row dense>
            <v-col cols="6" v-for="item in items" :key="item.label">
              <v-card class="pa-6 d-flex flex-column align-center justify-center" elevation="4">
                <v-icon :icon="item.icon" size="32" color="#096123" />
                <span class="text-body-2 mt-2" style="color: #096123">{{ item.label }}</span>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import { mdiOpenInNew, mdiPencil, mdiPlus, mdiTrashCan } from "@mdi/js";

export default {
  name: "ResponsiveHomepage",
  data() {
    return {
      user: null,
      items: [
        { label: "Se dine produkter", icon: mdiOpenInNew },
        { label: "Kladde", icon: mdiPencil },
        { label: "Tilføj produkt", icon: mdiPlus },
        { label: "Slettet", icon: mdiTrashCan }
      ]
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:8080/api/me", {
        withCredentials: true
      });
      this.user = res.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
};
</script>

<style scoped>
header {
  background: #d32f2f;
}
</style>
