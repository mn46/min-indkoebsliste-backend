<template>
     <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent>
      <v-text-field
        v-model="Username"
        :rules="rules"
        label="Username"
      ></v-text-field>
      <v-text-field
        v-model="UserPassword"
        :rules="rules"
        label="UserPassword"
      ></v-text-field>
      <label for="userPassword">Repeat password:</label>
         <v-text-field
        v-model="UserPassword"
        :rules="rules"
        label="UserPassword"
      ></v-text-field>
      <v-btn class="mt-2"  color="grey" type="submit" :to="{path:'/homepageadmin'}" block>Register</v-btn>
  
      <!-- <register-btn></register-btn> -->
    </v-form>
  </v-sheet>
</template>
<script>

export default{
    name: 'RegisterForm',
    data(){
      
    }
}

</script>
<style scoped>
label{
  font-size: 12px;
  color:gray
}
</style>