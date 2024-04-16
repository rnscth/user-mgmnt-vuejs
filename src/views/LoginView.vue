<template>
    <div>
      <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
          <!--content-->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
            <!--header-->
            <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 class="text-3xl font-semibold">
                Login
              </h3>
              <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">

              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto">
              <form>
                <div>
                  <div>
                    <label for="email" class="text-white">Email:</label>
                    <input type="text" id="email" v-model="email" class="rounded-md px-3 py-2 my-2 w-full bg-gray-700 text-white">
                  </div>
                  <div>
                    <label for="password" class="text-white">Password:</label>
                    <input type="password" id="password" v-model="password" class="rounded-md px-3 py-2 my-2 w-full bg-gray-700 text-white">
                  </div>
                </div>
              </form>
            </div>
            <!--footer-->
            <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                Login
              </button>

            </div>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  </template>
  
  <script>
import ApiService from '@/api/service';

  export default {
    name: "large-modal",
    data() {
      return {
        email : null,
        password : null,
        showModal: true
      }
    },
    methods: {
      toggleModal: function(){
        this.showModal = !this.showModal;
      },
      login(){
        ApiService.login({ email: this.email, password: this.password})
          .then(response => {
            // handle login
            console.log('login success:', response)
          })
          .catch(error => {
            console.error('login error:', error);
          });
      },
    }
  }
  </script>