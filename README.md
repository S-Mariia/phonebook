# Your phonebook application

## Briefly about the application

The application is designed to provide users with the ability to add, delete,
filter, and save their own contacts after authorization. Its main purpose is to
facilitate the management of contact lists while ensuring the security and
privacy of the stored information.

### Functionality

1. Authorization: The application requires users to log in or register before
   accessing their contact list. Also there is a feature that ensures a seamless
   user experience even after page refresh. If the user has previously logged in
   and has not explicitly logged out, their data and session information will be
   preserved, eliminating the need to log in again.

2. Adding Contacts: Users can enter information about a new contact, such as
   name and phone number, and add it to their contact list. This allows for
   convenient storage and categorization of important contacts.

3. Deleting Contacts: Users can easily remove contacts from their list,
   providing them with control over their contact management.

4. Filtering Contacts: The application allows users to filter their contacts
   based on contact name. This feature simplifies the process of finding
   specific contacts within a large list.

5. Saving Contacts: The application ensures that all added contacts are
   automatically saved and securely stored. This eliminates the risk of losing
   important contact information and allows users to access their contacts from
   any authorized device.

### Technologies

- React
- React Router DOM
- Redux Toolkit
- Styled Components

## Instructions to run the project

1. Install dependencies using `npm install`.
2. Run the project `npm start`.
