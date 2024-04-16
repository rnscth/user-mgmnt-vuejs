<template>
    <div class="bg-gray-800 px-2 sm:px-6 lg:px-8 rounded-lg">
        <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                <div class=" flex sm:ml-6 sm:block">
                  <div class="flex space-x-4">
                      <NavLink to="/users">Users</NavLink>
                      <!-- <NavLink to="/groups">Groups</NavLink> -->
                      <NavLink to="/admin">Administrators</NavLink>
                  </div>
                </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <!-- Profile dropdown -->
                <div class="relative ml-3">
                    <div>
                        <button @click="toggleUserMenu" type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">Open user menu</span>
                        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                        </button>
                    </div>
                    <div 
                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" 
                        :class="{ 'hidden': !displayUserMenu }"
                        role="menu" 
                        aria-orientation="vertical" 
                        aria-labelledby="user-menu-button" 
                        tabindex="-1">
                        <RouterLink to='/displayUser/1'  @click="toggleUserMenu" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</RouterLink>
                        <RouterLink to="/login" @click="toggleUserMenu" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      displayUserMenu: false
    };
  },
  methods: {
    toggleUserMenu() {
      this.displayUserMenu = !this.displayUserMenu;
    }
  }
};
</script>