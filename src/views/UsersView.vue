<template>
  <main class="mt-5 bg-gray-800 rounded-lg">
    <IsLoadingModal :showModal="isLoading"/>
    <CreateUserModal :showModal="showCreateUserModal" @close="showCreateUserModal = false" @success="success"/>
    <div class="flex justify-between" >
        <form>
            <div class="items-center  p-3 flex ">
                <input type="text" id="search" placeholder="Search..." v-model="search" class="rounded-md px-3 py-2 w-32 bg-gray-700 text-white">
            </div>
        </form>
        <button @click="showCreateUserModal = !showCreateUserModal" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2 m-4" :disabled="!user.isAdmin" :class="{'cursor-not-allowed' : !user.isAdmin}">Create User</button>
    </div>
    <UsersTable :users="users"/>
    <div class="flex items-center"> 
      <button @click="prevPage"
        :disabled="isLoading" 
        :class="{
          'bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2 m-4': true,
          'opacity-50 cursor-not-allowed': this.page === 1
        }"> < </button>
      <div class="flex items-center ">
        <span v-if="this.page">{{ this.page }}</span>
        <span v-else>1</span>
        <span v-if="this.meta.last_page != null" class="ml-2"> of {{ this.meta.last_page }}</span>
      </div>
      <button @click="nextPage" 
        :disabled="isLoading"
        :class="{
        'bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2 m-4': true,
        'opacity-50 cursor-not-allowed': this.page >= this.meta.last_page
      }"> > </button>
      <transition name="fade">
        <div v-if="showSuccess" class="fixed inset-0 overflow-y-auto flex justify-center items-start" >
          <span  class="bg-blue-500 border border-blue-800 mx-auto text-white  rounded-lg p-2 transition-all mt-16" >User Created!</span>
        </div>
      </transition>
      <span class="ml-auto mr-5" >Users from {{ this.meta.from }} to {{ this.meta.to }} of {{ this.meta.total }}</span>
    </div>
  </main>
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
      user: ApiService.getLocalUser(),
      showSuccess: false,
      isLoading: true,
      search: null,
      showCreateUserModal: false,
      users: null,
      meta: {
        last_page : 0,
        from : 0,
        to : 0,
        total : 0,
      },
    };
  },
    created() {
    this.page = this.$route.query.page;
    this.fetchUsers();
  },
  methods : {
    fetchUsers() {
      this.isLoading = true
      ApiService.getUsers(this.page)
        .then(response => {
          this.users = response.data.data;
          this.meta = response.data.meta;
          if (!this.page){
            this.page = 1
          }
          this.isLoading = false
        })
        .catch(error => {
          console.error('Error fetching users:', error);
          this.isLoading = false
        });
    },
    nextPage(){
      if (this.page < this.meta.last_page){
        this.page ++
        this.$router.push({ query: { page: this.page } });
        this.fetchUsers(this.page)
      }

    },
    prevPage(){
      if (this.page > 1) {
        this.page--;
        this.$router.push({ query: { page: this.page } });
        this.fetchUsers(this.page)
      }
    },
    success(){
      this.fetchUsers()
      this.showSuccess = true
      setTimeout(() => {
        this.showSuccess = false
      }, 700 )
    }
  }
};
</script>