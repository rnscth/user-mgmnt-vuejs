<template>
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h3 class="font-semibold text-lg leading-6 text-white py-3" id="modal-title">Delete User</h3>
          <div class="grid">
            <span>Deleting the user will erase all related data, please take it into account before proceeding</span>
            <span class="text-red-500 my-5 font-semibold " v-show="showError" > {{ this.errorMsg }}</span>
          </div>
          
          <form @submit.prevent="deleteUser">
            <div class="flex justify-end">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Delete</button>
              <button @click="closeModal" type="button" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
<script>
import ApiService from '@/api/service';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      router: useRouter(),
      errorMsg: null,
      showError: false,
    };
  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    userId: {
      type: String,
      required: true 
    }
  },
  methods: {
    deleteUser(){
      ApiService.deleteUser(this.userId)
        .then(response => {
          if (response.status === 200){
            this.errorMsg = 'User Deleted Successfully!'
            this.showError = true
            setTimeout(()=>{
              this.router.push('/users')
            }, 700)
          }
        })        
        .catch(error => {
          if(error.response.status === 403){
            console.log(error)
            this.errorMsg = error.response.data.error
            this.showError = true
          } else {
            console.error('Error deleting user:', error);
            this.errorMsg = error.message
            this.showError = true
          }

        });
    },
    closeModal() {
      this.errorMsg = null
      this.showError = false
      this.$emit('close');
    }
  }
};
</script>
  
  