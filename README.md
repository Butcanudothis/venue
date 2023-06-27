# Venue - Event Venue Reservation Application


[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/react-17.0.2-blue.svg)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/next.js-13.0.0-blue.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-2.2.19-blue.svg)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/prisma-3.4.1-blue.svg)](https://www.prisma.io/)
[![MongoDB](https://img.shields.io/badge/mongodb-4.4.6-blue.svg)](https://www.mongodb.com/)
[![NextAuth](https://img.shields.io/badge/nextauth-5.1.0-blue.svg)](https://next-auth.js.org/)
[![Cloudinary](https://img.shields.io/badge/cloudinary-1.26.1-blue.svg)](https://cloudinary.com/)
[![react-hook-form](https://img.shields.io/badge/react--hook--form-7.14.0-blue.svg)](https://react-hook-form.com/)
[![react-date-range](https://img.shields.io/badge/react--date--range-1.2.3-blue.svg)](https://www.npmjs.com/package/react-date-range)


[![wakatime](https://wakatime.com/badge/user/f6d32364-9816-461c-bc94-5ee9c9d8fa75/project/f79d3864-6e6b-4942-833b-daad4f19139a.svg)](https://wakatime.com/badge/user/f6d32364-9816-461c-bc94-5ee9c9d8fa75/project/f79d3864-6e6b-4942-833b-daad4f19139a)

Venue is a web application designed to facilitate the reservation of various venues, such as halls, theatres, gymnasiums, libraries, and more. It is specifically tailored for schools and organizations to list their available spaces as venues for private events. With Venue, users can easily discover and reserve venues for their events, ensuring a seamless and convenient booking experience.

## Venue Demo
![](https://github.com/Butcanudothis/venue/blob/main/youtube-video-gif.gif)

Live at [venue.av10.tech](https://venue.av10.tech)

## Features

- **Tailwind Design**: Venue is built with a stunning and modern user interface using Tailwind CSS, providing an aesthetically pleasing and intuitive design.
- **Tailwind Animations and Effects**: The application incorporates various animations and effects from Tailwind CSS, enhancing the user experience with smooth transitions and engaging visuals.
- **Full Responsiveness**: Venue is fully responsive and optimized for different screen sizes and devices, allowing users to access and interact with the application seamlessly from desktop or mobile.
- **Credential Authentication**: Users can create an account and authenticate themselves using their credentials, ensuring secure access to the application's features and personalization.
- **Google Authentication**: Venue also offers the convenience of logging in with Google accounts, providing a quick and hassle-free login option for users.
- **GitHub Authentication**: Additionally, GitHub authentication is supported, allowing users to authenticate using their GitHub credentials for a streamlined login experience.
- **Image Upload using Cloudinary CDN**: The application leverages Cloudinary CDN to enable users to upload images of venues, ensuring high-quality visuals and efficient image storage.
- **Client Form Validation and Handling using React Hook Form**: Venue implements robust form validation and handling using React Hook Form, ensuring accurate and error-free data submission from users.
- **Server Error Handling using React Toast**: Error handling is implemented with React Toast, providing informative and user-friendly error messages for a smooth user experience.
- **Calendars with React Date Range**: Venue integrates React Date Range to facilitate date selection and availability checking, enabling users to easily find venues for their desired time frame.
- **Page Loading State**: Loading states are displayed during data retrieval, ensuring users are aware of ongoing processes and reducing confusion or frustration.
- **Page Empty State**: In case of empty search results or data lists, Venue gracefully handles empty states, providing appropriate feedback to users and guiding them towards relevant actions.
- **Booking / Reservation System**: Users can make bookings and reservations for venues directly through the application, ensuring a seamless and efficient reservation process.
- **Guest Reservation Cancellation**: Guests have the ability to cancel their reservations, offering flexibility and convenience in managing their event plans.
- **Owner Reservation Cancellation**: Venue owners or administrators can also cancel reservations as needed, providing control and adaptability for venue management.
- **Creation and Deletion of Properties**: Venue owners can easily create and manage their property listings, including the ability to delete properties when necessary.
- **Pricing Calculation**: The application calculates pricing for venue reservations based on various factors, providing accurate and transparent cost information to users.
- **Advanced Search Algorithm**: Venue incorporates an advanced search algorithm that allows users to filter properties based on categories, date ranges, map locations, guest capacity, additional rooms and bathrooms,

 and more. For example, properties with existing reservations in the desired travel date range can be filtered out.
- **Favorites System**: Users can mark properties as favorites, enabling quick access and convenient tracking of preferred venues for future reference.
- **Shareable URL Filters**: By selecting categories, locations, and date ranges, users can generate shareable URLs. These URLs can be shared with others, including logged-out users, to provide a consistent view of search results.
- **How to Write POST and DELETE Routes in Route Handlers (app/api)**: Venue includes a detailed guide on writing POST and DELETE routes in route handlers to enable efficient data manipulation and management.
- **How to Fetch Data in Server React Components by Directly Accessing Database**: Venue provides instructions on fetching data in server-side React components by directly accessing the database, allowing for optimized performance and streamlined data retrieval.
- **How to Handle Files**: The tutorial covers handling files such as error.tsx and loading.tsx, which are new Next.js 13 templating files designed to unify loading and error handling.
- **How to Handle Relations between Server and Child Components**: Venue demonstrates best practices for managing relations between server and child components, ensuring smooth communication and data flow throughout the application.

## Demo

Check out the live demo of Venue on [venue.av10.tech](https://venue.av10.tech).

## Technologies Used

Venue leverages the following technologies:

- React
- Next.js
- Tailwind CSS
- Prisma
- MongoDB
- NextAuth

## Getting Started

To run Venue locally and explore its features, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/Butcanudothis/venue.git
   ```

2. Install the dependencies:

   ```shell
   cd venue
   npm install
   ```

3. Configure the environment variables by creating a `.env.local` file. Refer to `.env.example` for the required variables.

4. Set up the database and perform migrations:

   ```shell
   npx prisma migrate dev --name init
   ```

5. Start the development server:

   ```shell
   npm run dev
   ```

6. Visit `http://localhost:3000` in your browser to access Venue locally.

## Contributing

Contributions to Venue are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

Please make sure your code adheres to the existing code style and conventions.

## Credits

This project is inspired by the tutorial: [Build an Airbnb Clone with Next.js 13 App Router](https://www.youtube.com/watch?v=c_-b_isI4vg) by [YouTube User](https://www.youtube.com/user/username).

## License

The project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

Feel free to explore Venue, and let us know if you have any feedback or questions. Connect with us on GitHub at [Butcanudothis](https://github.com/Butcanudothis).
