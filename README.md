> Travel Trucks app - Camper Rental Web Application
> Project Goal:
> Create the frontend part of a web application for the company "TravelTrucks", which specializes in camper rentals. The web application should include several pages:

Homepage with a banner and a call-to-action.
Catalog page displaying all available campers with filters (location, vehicle type, air conditioning, kitchen, etc.).
Individual camper page with detailed descriptions, photo galleries, reviews, and a booking form.
The Backend API for managing camper listings is available at: Mock API.

Main API Endpoints:
GET /campers — Retrieve all campers (filtering should be done on the backend).
GET /campers/:id — Retrieve camper details by its ID.
Project Requirements

1. Frameworks and Libraries:
   React with Vite for bundling.
   Redux for state management.
   React Router for routing.
   Axios for API requests.
   CSS
2. Pages:
   Homepage: Banner with the main call-to-action.
   Catalog: A page displaying all available campers, with filtering options (location, body type, air conditioning, kitchen, etc.).
   Individual Camper Page: A detailed page with camper descriptions, photo galleries, reviews, and a booking form.
3. Routes:
   / — Homepage.
   /catalog — Catalog page.
   /catalog/:id — Individual camper page.
4. Functional Requirements:
   Camper filtering on the backend by location, body type, presence of air conditioning, kitchen, etc.
   Ability to add campers to a wishlist, with persistence across page reloads.
   Rental price should be displayed with two decimal points (e.g., 8000.00).
   Navigation to the individual camper page from the catalog by clicking "Show more."
   "Load More" button to load additional camper cards based on applied filters.
   Display reviews on the individual camper page with a star rating system.
   Booking form on the camper page, with a successful submission notification.
5. Design:
   Adherence to the provided design mockups for the desktop version.
6. Development:
   Use of component-based architecture and adherence to the DRY (Don't Repeat Yourself) principle.
   Clean, readable code with comments where necessary.
   Deployment
   The project is deployed on Vercel.

Author:
Yuliia Harashchenko
