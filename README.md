# LifeMate

LifeMate a web based matrimony platform where anyone can search for his/her desired life partner. A user can publish his/her biodata here so that other can search for it as well. Besides it provides managable dashboard for a user where user can manage own activities on this platform.

## Technologies:
- JavaScript
- NodeJS
- NPM
- React
- Stripe
- TanStack Query
- Firebase
- Express
- MongoDB
- JWT

## Key Features
- Biodatas can be filtered by minimum and maximum age, gender (type) and division.
- Authenticated user can keep biodata in his/her favourite biodata list.
- Authenticated user (general) can access contact info of a biodata by paying $5.
- User can create/update his/her biodata from dashboard.
- User can request to become premium member.
- Premium member can access contact info of biodatas without paying $5.
- Users can view their contact requests and favourite contacts from dashboard.
- Users can share their success stories once they find their desired partner.
- Admin can approve the requests of users to become premium member.
- Admin has the power to make another admin.

## Dependencies:
- @stripe/react-stripe-js: ^3.1.1
- @stripe/stripe-js: ^5.5.0
- @tanstack/react-query: ^5.64.1
- axios: ^1.7.9
- firebase: ^11.1.0
- flowbite-react: ^0.10.2
- localforage: ^1.10.0
- match-sorter: ^8.0.0
- moment: ^2.30.1
- react: ^18.3.1
- react-awesome-reveal: ^4.3.1
- react-countup: ^6.5.3
- react-dom: ^18.3.1
- react-helmet-async: ^2.0.5
- react-icons: ^5.4.0
- react-star-ratings: ^2.3.0
- recharts: ^2.15.0
- sort-by: ^1.2.0
- sweetalert: ^2.1.2
- swiper: ^11.2.1

## devDependencies
- @eslint/js: ^9.17.0
- @types/react: ^18.3.18
- @types/react-dom: ^18.3.5
- @vitejs/plugin-react: ^4.3.4
- autoprefixer: ^10.4.20
- eslint: ^9.17.0
- eslint-plugin-react: ^7.37.2
- eslint-plugin-react-hooks: ^5.0.0
- eslint-plugin-react-refresh: ^0.4.16
- globals: ^15.14.0
- postcss: ^8.4.49
- react-router-dom: ^7.1.1
- tailwindcss: ^3.4.17
- vite: ^6.0.5

## Run On Local Machine
- Run `git clone https://github.com/srshubho26/life-mate-client.git` on your local machine
- After cloning run `cd life-mate-client`
- Then run `npm install`
- Create a `.env.local` file on the root of the project and paste the following code
- `VITE_API_KEY=`
- `VITE_AUTH_DOMAIN=`
- `VITE_PROJECT_ID=`
- `VITE_STORAGE_BUCKET=`
- `VITE_MESSAGING_SENDER_ID=`
- `VITE_APP_ID=`
- `VITE_IMAGE_UPLOAD_API=`
- `VITE_PAYMENT_PK=`
- Create a firebase project and initiate a web app, email+password and google authentication inside the firebase project
- Get the project credentials in the firebase app and provide in keys of env file
- Read the documentation of imageBB and Stripe to get VITE_IMAGE_UPLOAD_API and VITE_PAYMENT_PK
- Finally run `npm run dev`

## Admin Credentials
- Email: admin@gmail.com
- Password: Admin123456

## Live Link
- https://life-mate-53498.web.app

## Backend Repository:
https://github.com/srshubho26/life-mate-server