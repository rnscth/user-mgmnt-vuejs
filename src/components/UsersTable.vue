<template>

<div class="relative  bg-gray-800 overflow-x-auto">

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
                    Updated At
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <NavLink :to="'/displayUser/' + user.id">{{ user.name }}</NavLink>
                </th>
                <td class="px-6 py-4">
                    {{user.email}}
                </td>
                <td class="px-6 py-4 uppercase">
                  <span v-if="user.enabled">true</span>
                  <span v-else>false</span>
                </td>
                <td class="px-6 py-4">
                    {{user.updatedAt}}
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>

export default {
  props: {
    users: {
      type: Array,
    }
  }
}
</script>