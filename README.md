# User Management Frontend

This is a simple and fast user management frontend built with Vue.js. It's designed to be easily configurable with the endpoint of any REST API compatible with REST methods.

## Features

- View a list of users
- Create new users
- Edit existing users
- Delete users
- Toggle user status (enabled/disabled)
- Assign admin privileges to users

## Configuration

To configure the endpoint of your API, you need to modify the API base URL in the Vue.js project.

1. Open the `src/api/config.js` file.
2. Update the `BASE_URL` constant with the base URL of your API.

## Deployment

Follow these steps to deploy the User Management Frontend:

1. Clone the repository:

```bash
git clone https://github.com/rnscth/user-mgmnt-vuejs
```

2. Install dependencies:

```bash
npm install
```
3. Configure the API endpoint as described in the Configuration section.

4. Build the project for production:

```bash
npm run build
```

5. Deploy the built files to your hosting provider of choice. For example, you can use Netlify, Vercel, GitHub Pages, or any other hosting service that supports static site hosting.

6. Access your deployed application through the provided URL.

## Additional Notes

- You can find a ready to pair Laravel API on my repositories as usr-mngmt-laravel.
- You can find a ready to pair NestJS API on my repositories as usr-mngmt-nestjs.
- Feel free to customize and extend this frontend as needed for your projects/practices.


