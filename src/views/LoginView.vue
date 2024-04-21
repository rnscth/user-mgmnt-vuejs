<template>
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Login
            </h3>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <form @submit.prevent="login" class="grid" >
              <div>
                <label for="email" class="text-white">Email:</label>
                <input required='true' type="text" id="email" v-model="email" class="rounded-md px-3 py-2 my-2 w-full bg-gray-700 text-white">
              </div>
              <div>
                <label for="password" class="text-white">Password:</label>
                <input required='true' type="password" id="password" v-model="password" class="rounded-md px-3 py-2 my-2 w-full bg-gray-700 text-white">
              </div>
              <span class="text-red-500 mt-5 font-semibold text-sm" v-show="showError" > Error : {{ this.errorMsg }}</span>
              <div class="flex items-center justify-end rounded-b">
                <button class="text-red-500 mt-5 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </template>
  
  <script>
import ApiService from '@/api/service';
import { removeToken, setToken } from '@/router/auth';
import { useRouter } from 'vue-router';

  export default {
    name: "large-modal",
    data() {
      return {
        email : 'bell11@example.com',
        password : 'password',
        showModal: true,
        showError: false,
        errorMsg: null,
        router: useRouter(),
      }
    },
    methods: {
      toggleModal: function(){
        this.showModal = !this.showModal;
      },
      login(){
        let credentials = { email: this.email, password: this.password}
        ApiService.login(credentials)
          .then(response => {
            ApiService.setToken(response.data.token)
            ApiService.setUser(response.data.user)
            this.router.push('/users')
          })
          .catch(error => {
            console.log(error)
            if(error.response.status === 422){
              console.log(422)
              this.errorMsg = error.response.data.message
              this.showError = true
            } else {
              console.error('login error:', error);
              removeToken()
              this.errorMsg = error.message
              this.showError = true
            }

          });
      },
    }
  }
  </script>