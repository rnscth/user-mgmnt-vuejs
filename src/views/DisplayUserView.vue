<template>
  <ChangePasswordModal :showModal="showChangePasswordModal" @close="showChangePasswordModal = false" />
  <DeleteUserModal :showModal="showDeleteUserModal" @close="showDeleteUserModal = false" />
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
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2">Save Changes</button>
        <button type="button" @click="showChangePasswordModal = !showChangePasswordModal" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2">Change Password</button>
        <button type="button" @click="showDeleteUserModal = !showDeleteUserModal"class="bg-red-500 hover:bg-red-600 text-white rounded-md mr-4 px-4 py-2">Delete User</button>
      </form>
    </div>
  </div>
</template>


<script>
import ApiService from '@/api/service';

export default {
  data() {
    return {
      userId: null,
      showChangePasswordModal: false,
      showDeleteUserModal: false,
      user: {},
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
      ApiService.getSingleUser(this.userId)
        .then(response => {
          this.user = response.data.data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    saveChanges() {
        ApiService.updateUser(this.userId, this.user)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
          console.error('Error updating user:', error);
        });
    },
    deleteUser(){
      ApiService.deleteUser(this.userId)
        .then(response => {
            console.log(response.data)
        })        
        .catch(error => {
          console.error('Error deleting user:', error);
        });
    },
  }
};
</script>
