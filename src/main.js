import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import NavBar from './components/NavBar.vue'
import UsersTable from './components/UsersTable.vue'
import NavLink from './components/NavLink.vue'
import CreateUserModal from './components/CreateUserModal.vue'
import ChangePasswordModal from './components/ChangePasswordModal.vue'
import DeleteUserModal from './components/DeleteUserModal.vue'
import IsLoadingModal from './components/IsLoadingModal.vue'


const app = createApp(App)

// Vue.prototype.$user = {
//     isAdmin: 'isAdmin',-
//     id: 'id'
//     // Define other roles and permissions as needed
// };

app.component('NavBar', NavBar);
app.component('UsersTable', UsersTable);
app.component('NavLink', NavLink);
app.component('CreateUserModal', CreateUserModal);
app.component('ChangePasswordModal', ChangePasswordModal);
app.component('DeleteUserModal', DeleteUserModal);
app.component('IsLoadingModal', IsLoadingModal);
app.use(router)
app.mount('#app')
