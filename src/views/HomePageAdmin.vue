<template>
  <v-app>
    <TheHeaderAdmin/>
    
  
<TheFooter/>    
  </v-app>
</template>
<script>
import ShoppingList from "../views/ShoppingList.vue";
import PlusButton from "../components/PlusButton.vue";
import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
import AddNewList from "../views/AddNewList.vue";
import  TheHeaderAdmin from '../components/layout/TheHeaderAdmin.vue';
 "../views/layout/TheHeaderAdmin.vue";

export default {
  components: {
    ShoppingList,
    PlusButton,
    TheHeader,
    TheFooter,
    AddNewList,
    TheHeaderAdmin,
  },
};
</script>
