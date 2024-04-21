<template>
  <ChangePasswordModal :showModal="showChangePasswordModal" :userId="userId" @close="showChangePasswordModal = false" @success="passwordChanged"/>
  <DeleteUserModal :showModal="showDeleteUserModal" :userId="userId" @close="showDeleteUserModal = false" />
  <IsLoadingModal :showModal="isLoading"/>
  <div class="bg-gray-800 rounded-lg mt-6 py-8 px-4">
    <div class="max-w-4xl mx-auto grid grid-cols-2 gap-4">
      <form @submit.prevent="saveChanges" class="space-y-4">
        <div>
          <label for="name" class="text-white">Name:</label>
          <input autocomplete="false" type="text" id="name" v-model="user.name" class="mt-4 rounded-md px-3 py-2 w-full bg-gray-700 text-white">
        </div>
        <div>
          <label for="email" class="text-white">Email:</label>
          <input autocomplete="false" type="email" id="email" v-model="user.email" class="mt-4 rounded-md px-3 py-2 w-full bg-gray-700 text-white">
        </div>
        <div class="flex items-center">
          <label for="enabled" class="text-white">Enabled:</label>
          <input 
            type="checkbox" 
            id="enabled" 
            :checked="user.enabled === 1" 
            @change="toggleEnabled" 
            class="m-3 rounded-lg p-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </div>
        <div class="flex items-center">
          <label for="isAdmin" class="text-white">Is Admin:</label>
          <input 
            type="checkbox"
            id="isAdmin"
            :checked="user.isAdmin === 1" 
            @change="toggleIsAdmin" 
            class="m-3 rounded-lg p-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div>
          <label for="createdAt" class="text-white">Created At:</label>
          <input disabled='true'  type="text" id="createdAt" v-model="user.createdAt" class="mt-4 rounded-md px-3 py-2 w-full bg-gray-700 text-white">
        </div>
        <div>
          <label for="updatedAt" class="text-white">Updated At:</label>
          <input disabled='true' type="text" id="updatedAt" v-model="user.updatedAt" class="mt-4 rounded-md px-3 py-2 w-full bg-gray-700 text-white">
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2" :disabled="!session.isAdmin" :class="{'cursor-not-allowed' : !session.isAdmin}">Save Changes</button>
        <button type="button" @click="showChangePasswordModal = !showChangePasswordModal" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2" :disabled="!session.isAdmin && session.id != user.id" :class="{'cursor-not-allowed' : !session.isAdmin && session.id != user.id}">Change Password</button>
        <button type="button" @click="showDeleteUserModal = !showDeleteUserModal"class="bg-red-500 hover:bg-red-600 text-white rounded-md mr-4 px-4 py-2" :disabled="!session.isAdmin" :class="{'cursor-not-allowed' : !session.isAdmin}">Delete User</button>
      </form>
      <transition name="fade">
        <div v-if="showSuccess" class="fixed inset-0 overflow-y-auto flex justify-center items-start" >
          <span v-if="warn" class="bg-yellow-500 border border-yellow-800 mx-auto text-white  rounded-lg p-2 transition-all mt-16" >{{  alertMessage }}</span>
          <span  v-if="!warn" class="bg-blue-500 border border-blue-800 mx-auto text-white  rounded-lg p-2 transition-all mt-16" >{{  alertMessage }}</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


<script>
import ApiService from '@/api/service';

export default {
  data() {
    return {
      session: ApiService.getLocalUser(),
      warn: false,
      alertMessage: '',
      showSuccess: false,
      isLoading: true,
      userId: null,
      showChangePasswordModal: false,
      showDeleteUserModal: false,
      user: {},
      updatedUser: {},
    };
  },
  created() {
    this.userId = this.$route.params.userId;
    this.fetchSingleUser();
  },
  methods : {
    toggleEnabled() {
      this.user.enabled = !this.user.enabled
    },
    toggleIsAdmin() {
      this.user.isAdmin = !this.user.isAdmin
    },
    fetchSingleUser() {
      this.isLoading = true
      ApiService.getUser(this.userId)
        .then(response => {
          this.user = response.data.data;
          this.isLoading = false
        })
        .catch(error => {
          console.error('Error fetching users:', error);
          this.isLoading = false
        });
    },
    alert(msg){
      this.alertMessage = msg
      this.showSuccess = true
      this.isLoading = false
      setTimeout(()=> {
        this.showSuccess = false
      }, 750)
    },
    passwordChanged(){
      this.warn = false
      this.alert('Password Changed!')
    },
    saveChanges() {
      this.isLoading = true
      this.updatedUser = {
        name : this.user.name,
        email : this.user.email,
        enabled : this.user.enabled,
        isAdmin : this.user.isAdmin,
      }
      ApiService.updateUser(this.userId, this.updatedUser)
        .then(response => {
          this.fetchSingleUser()
          this.warn = false
          this.alert('Changes Saved!')
        })
        .catch(error => {
          if(error.response.status === 403){
            console.log(error)
            this.warn = true
            this.alert(error.response.data.error)
            this.errorMsg = error.response.data.error
            this.showError = true
          } else {
            this.warn = true
            console.error('Error deleting user:', error);
            this.errorMsg = error.message
            this.showError = true
          }
        // console.error('Error updating user:', error);
        this.isLoading = false
      });
    },
  }
};
</script>
