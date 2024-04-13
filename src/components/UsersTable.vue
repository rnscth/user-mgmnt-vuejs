<template>

<CreateUserModal :showModal="showCreateUserModal" @close="showCreateUserModal = false" />
<div class="relative  bg-gray-800 overflow-x-auto rounded-lg">
    <div class="flex justify-between">
        <form>
            <div class="items-center  p-3 flex ">
                <input type="text" id="search" placeholder="Search..." v-model="search" class="rounded-md px-3 py-2 w-32 bg-gray-700 text-white">
            </div>
        </form>
        <button @click="showCreateUserModal = !showCreateUserModal" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4 px-4 py-2 m-4">Create User</button>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Enabled
                </th>
                <th scope="col" class="px-6 py-3">
                    ModifiedAt
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <NavLink to="displayUser">{{user.username}}</NavLink> 
                </th>
                <td class="px-6 py-4">
                    {{user.email}}
                </td>
                <td class="px-6 py-4">
                    {{user.enabled}}
                </td>
                <td class="px-6 py-4">
                    {{user.modifiedAt}}
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>
export default {
  data() {
    return {
      search: '',
      showCreateUserModal: false,
      users: [
      {
        id: 1,
        username: 'John Doe',
        email: 'john@example.com',
        enabled: true,
        isAdmin: false,
        createdAt: '2023-01-15',
        modifiedAt: '2024-03-20'
      },
      {
        id: 2,
        username: 'Alice Smith',
        email: 'alice@example.com',
        enabled: false,
        isAdmin: true,
        createdAt: '2023-02-20',
        modifiedAt: '2024-04-02'
      },
      {
        id: 3,
        username: 'Bob Johnson',
        email: 'bob@example.com',
        enabled: true,
        isAdmin: false,
        createdAt: '2023-03-10',
        modifiedAt: '2024-03-25'
      },
      {
        id: 4,
        username: 'Emily Davis',
        email: 'emily@example.com',
        enabled: true,
        isAdmin: true,
        createdAt: '2023-04-05',
        modifiedAt: '2024-04-10'
      },
      {
        id: 5,
        username: 'Michael Brown',
        email: 'michael@example.com',
        enabled: false,
        isAdmin: false,
        createdAt: '2023-05-08',
        modifiedAt: '2024-03-15'
      },
      {
        id: 6,
        username: 'Emma Wilson',
        email: 'emma@example.com',
        enabled: true,
        isAdmin: true,
        createdAt: '2023-06-12',
        modifiedAt: '2024-04-20'
      },
      {
        id: 7,
        username: 'David Taylor',
        email: 'david@example.com',
        enabled: false,
        isAdmin: false,
        createdAt: '2023-07-18',
        modifiedAt: '2024-03-22'
      },
      {
        id: 8,
        username: 'Olivia Martinez',
        email: 'olivia@example.com',
        enabled: true,
        isAdmin: true,
        createdAt: '2023-08-24',
        modifiedAt: '2024-04-30'
      },
      {
        id: 9,
        username: 'William Anderson',
        email: 'william@example.com',
        enabled: false,
        isAdmin: false,
        createdAt: '2023-09-30',
        modifiedAt: '2024-03-05'
      },
      {
        id: 10,
        username: 'Sophia Hernandez',
        email: 'sophia@example.com',
        enabled: true,
        isAdmin: true,
        createdAt: '2023-10-10',
        modifiedAt: '2024-04-15'
      },
      {
        id: 11,
        username: 'James Lee',
        email: 'james@example.com',
        enabled: false,
        isAdmin: false,
        createdAt: '2023-11-22',
        modifiedAt: '2024-03-10'
      },
      {
        id: 12,
        username: 'Isabella Gonzalez',
        email: 'isabella@example.com',
        enabled: true,
        isAdmin: true,
        createdAt: '2023-12-05',
        modifiedAt: '2024-04-22'
      },
      {
        id: 13,
        username: 'Alexander Rodriguez',
        email: 'alexander@example.com',
        enabled: false,
        isAdmin: false,
        createdAt: '2024-01-08',
        modifiedAt: '2024-03-20'
      },
      {
        id: 14,
        username: 'Charlotte Smith',
        email: 'charlotte@example.com',
        enabled: true,
        isAdmin: true,
        createdAt: '2024-02-12',
        modifiedAt: '2024-04-28'
      },
      {
        id: 15,
        username: 'Daniel Kim',
        email: 'daniel@example.com',
        enabled: false,
        isAdmin: false,
        createdAt: '2024-03-18',
        modifiedAt: '2024-03-25'
      }
      ]
    };
  },
  method(){
    generateRandomUsers();{
        console.log('method');
    }
  }
};
</script>