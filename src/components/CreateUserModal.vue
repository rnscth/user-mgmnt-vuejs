<template>
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center ">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h3 class="font-semibold text-lg leading-6 text-white py-3" id="modal-title">Create User</h3>
          <form @submit.prevent="createUser">
            <div class="mb-4">
              <label for="name" class="block text-sm text-white">Name</label>
              <input autocomplete="false" required='true' type="text" id="name" v-model="newUser.name" class="text-white mt-1 p-2 block w-full rounded-md shadow-sm bg-gray-700 border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm text-white">Password</label>
              <input required='true' type="password" id="password" v-model="newUser.password" class="text-white  mt-1 p-2 block w-full rounded-md shadow-sm bg-gray-700 border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm text-white">Email</label>
              <input autocomplete="false" required='true' type="email" id="email" v-model="newUser.email" class="text-white  mt-1 p-2 block w-full rounded-md shadow-sm bg-gray-700 border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4 flex items-center">
              <label for="isAdmin" class="block text-sm text-white">Is Admin: </label>
              <input :checked="newUser.isAdmin === true" @change="toggleIsAdmin" type="checkbox" id="isAdmin" class="p-2 w-10 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <span class="text-red-500 my-5 font-semibold " v-show="this.showError" > Error : {{ this.errorMsg }}</span>
            <div class="flex justify-end">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</button>
              <button @click="closeModal" type="button" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
<script>
import ApiService from '@/api/service';

export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      newUser: {
        name: 'Joaquin Garcia',
        email: 'user@example.org',
        isAdmin: true,
        enabled: true,
        password: 'password'
      },
      showError: false,
      errorMsg: null,
    };
  },
  methods: {
    createUser() {
      ApiService.newUser(this.newUser)
        .then(response => {
            console.log(response.data)
            this.errorMsg = null
            this.showError = false
            this.newUser.name = null
            this.newUser.email = null
            this.newUser.password = null
            this.newUser.isAdmin = false
            this.$emit('success');
            this.$emit('close');
        })        
        .catch(error => {
          console.error('Error creating new user:', error);
          this.errorMsg = error.message
          this.showError = true
        });
    },
    closeModal() {
    this.errorMsg = null
    this.showError = false
    this.$emit('close');
    },
    toggleIsAdmin() {
      this.newUser.isAdmin = !this.newUser.isAdmin
    },
  }
};
</script>
  
  