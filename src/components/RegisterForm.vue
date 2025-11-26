<template>
     <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent="register">
      <v-text-field
        v-model="Username"
        :rules="rules"
        label="Username"
      ></v-text-field>
      <v-text-field
        v-model="UserPassword"
        :rules="rules"
        type ="password"
        label="UserPassword"
      ></v-text-field>
       
      <!-- <v-btn class="mt-2"  color="grey" type="submit" :to="{path:'/homepageadmin'}" block>Register</v-btn> -->
            <v-btn class="mt-2"  color="grey" type="submit"   block>Register</v-btn>

  
      <!-- <register-btn></register-btn> -->
    </v-form>
  </v-sheet>
</template>
<script>
import UsersDataService from '../services/UsersDataService';

export default{
    name: 'RegisterForm',
    data(){
      return{
        Username: '',
        UserPassword: '',
        rules:[
          v => !!v || 'Field is required'
        ]
      }
    },
    methods: {
       register(){
      const data = {
        userName: this.Username,
        userPassword: this.UserPassword
      }
    
    UsersDataService.signup(data).then((res) => {
      console.log(res);
          alert(`Bruger ${this.Username} er oprettet, venligst login`);

    })

// this.$router.push(`/homepageadmin/${user.id}`);
// this.$router.push(`/homepageadmin/:id`);
this.$router.push(`/login`)
    }
}
}
</script>
<style scoped>
label{
  font-size: 12px;
  color:gray
}
</style>