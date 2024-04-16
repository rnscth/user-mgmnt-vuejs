<template>
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h3 class="font-semibold text-lg leading-6 text-white py-3" id="modal-title">Change User Password</h3>
          <form @submit.prevent="changePassword">
            <div class="mb-4">
              <label for="password" class="block text-sm text-white">Password</label>
              <input required='true' type="password" id="password" v-model="newUserPassword.password" class="text-white  mt-1 p-2 block w-full rounded-md shadow-sm bg-gray-700 border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="newPassword" class="block text-sm text-white">New Password</label>
              <input required='true' type="password" id="newPassword" v-model="newUserPassword.newPassword" class="text-white  mt-1 p-2 block w-full rounded-md shadow-sm bg-gray-700 border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            </div>
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
  export default {
    props: {
      showModal: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        newUserPassword: {
          password: '',
          newPassword: '',
        }
      };
    },
    methods: {
      changePassword() {
        console.log('New Password:', this.newUserPassword);
        this.newUserPassword = {
          password: '',
          newPassword: ''
        };
        this.$emit('close');
      },
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  