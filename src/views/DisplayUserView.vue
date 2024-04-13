<template>
  <ChangePasswordModal :showModal="showChangePasswordModal" @close="showChangePasswordModal = false" />
  <div class="bg-gray-800 rounded-lg mt-6 py-8 px-4">
    <div class="max-w-4xl mx-auto grid grid-cols-2 gap-4">
      <form @submit.prevent="saveChanges" class="space-y-4">
        <div>
          <label for="username" class="text-white">Username:</label>
          <input type="text" id="username" v-model="user.username" class="rounded-md px-3 py-2 w-full bg-gray-700 text-white">
        </div>
        <div>
          <label for="email" class="text-white">Email:</label>
          <input type="email" id="email" v-model="user.email" class="rounded-md px-3 py-2 w-full bg-gray-700 text-white">
        </div>
        <div class="flex items-center">
          <label for="enabled" class="text-white">Enabled:</label>
          <input 
            type="checkbox" 
            id="enabled" 
            v-model="user.enabled" 
            class="m-3 rounded-lg p-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </div>
        <div class="flex items-center">
          <label for="isAdmin" class="text-white">Is Admin:</label>
          <input 
            type="checkbox" 
            id="isAdmin" v-model="user.isAdmin" 
            class="m-3 rounded-lg p-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div>
          <label for="createdAt" class="text-white">CreatedAt:</label>
          <input disabled='true'  type="text" id="memberSince" v-model="user.createdAt" class="rounded-md px-3 py-2 w-full bg-gray-700 text-white">
        </div>
        <div>
          <label for="modifiedAt" class="text-white">ModifiedAt:</label>
          <input disabled='true' type="text" id="lastUpdated" v-model="user.modifiedAt" class="rounded-md px-3 py-2 w-full bg-gray-700 text-white">
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2">Save Changes</button>
        <button type="button" @click="showChangePasswordModal = !showChangePasswordModal" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2">Change Password</button>
        <button type="submit" class="bg-red-500 hover:bg-red-600 text-white rounded-md mr-4 px-4 py-2 cursor-not-allowed">Delete User</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showChangePasswordModal: false,
      user: {
        username: 'Aaron Ruelas',
        email: 'rnscth@gmail.com',
        enabled: true,
        isAdmin: false,
        createdAt: '10-02-1992',
        modifiedAt: '02-11-2024'
      }
    };
  },
  methods: {
    saveChanges() {
      // Add logic to save changes
      console.log('Changes saved:', this.user);
    }
  }
};
</script>
