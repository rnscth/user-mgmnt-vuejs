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

const app = createApp(App)

app.component('NavBar', NavBar);
app.component('UsersTable', UsersTable);
app.component('NavLink', NavLink);
app.component('CreateUserModal', CreateUserModal);
app.component('ChangePasswordModal', ChangePasswordModal);
app.component('DeleteUserModal', DeleteUserModal);
app.use(router)
app.mount('#app')
