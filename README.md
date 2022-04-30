**Ambosia**

Ambosia is a website that allows customers to make their own recipes. In addition, customers will be able to try new recipes from our menu. Ambosia assists our clients in eating nutritious foods in order to improve their lifestyles. There are several features on our website that they may use to assist our clients. We'll go through that in more depth later.



----------------



**Representation of our website**

**FRONT-END**

Home Page: Our home page consists of three parts.

**1) Description of our website:** 

This section explains what our website offers to our customers and how it may help them improve their life.


**2) Create Your Own Recipe:**

Once you click on the 'Create Your Own Recipe' button, it will lead you to origination/creation's section. This section goes into further detail about our feature and how it works. In this feature, you may create your own recipe by giving the following information:

A) Title

B) Ingredients

C) Recipe

D) Image (URL)

After you've filled the fields, simply hit the submit button. As a result, you may submit all of the data to our database. When the database gets your information, it checks to see if your recipe has already been submitted before. If it isn't already in the database, it will be added. Also, you can check it in our 'Out-Look' section, it will be represented there.


**3) Out-Look (Menu):**

We assume you have clicked on the 'Menu' button, it will take you to the Out-Look/Menu's section. In this section, we represent all of our recipes. A menu container with two arrow-buttons is available. If you click on one of them, it will lead you to the previous or next page, where you may thoroughly examine our menu. Each recipe also has a check and cross icon. If you click the cross-icon, the recipe will be deleted right away. If you click the check-icon, on the other hand, you'll be sent to a page where you can examine the recipe and get all the information you need.

**4) Recipe - Information:**

In this section, you'll find all the information you'll need to prepare your chosen dish. In addition, if a customer want to delete this recipe, there is a cross-icon by the end of the page where you may do so. On the other side, there is an edit-icon that allows a client to change any information that he deems undesirable.


**How to run the project?**

First off, you need to install the following dependencies:

A) react-icons (v 4.3.1)

B) react-router-dom (v. 6.3.0)

Use 'npm start' to run the react app.

-------------



**BACK-END**

**1) CONFIG:**

There is a "db.js" file in this folder that is used to connect to the newly formed mongoDB database. The underlined yellow text contains the connection message. A dotenv file is used to hold the URI and PORT. Over and above that, if any error occurs it will be called in the terminal.

**2) Modal (SCHEMA):**

The database schema is stored in the'menuModal.js' file in the modal subdirectory. Mongoose is used to connect to the MongoDB database. The schema of our database is divided into four sections.

A) title: A string-typed title, and it's required.

B) ingredient: A string-typed title, and it's required.

C) recipe: A string-typed title, and it's required.

B) img: A string-typed title, and it's required.

Our schema is exported to our controller folder.


**3) Controller:**

In the 'controller.js' file, we represent how our backend functions.

A) setMenu (POST METHOD): In this function, we set/create a 'menu'. In other words, when a client sends a create request, this what occurs in our 'setMenu' function.

1) It checks if all fields is filled. If not, it sends an error-message to our client, asking him to fill all fields.

2) It re-checks if the title has been used before. If yes, it sends an error-message, letting him know that the title has been used before.

3) If all conditions has be fulfilled, it will start create it in the database.

4) If the request has been created, then it will be responding it in JSON.


B) getMenu (GET METHOD): In this function, we represent our created REST API from our clients requests.

C) updateMenu (PUT METHOD): In this function, the requested item that needs to be updated will updated, using their specific '_id'

D) deleteMenu (DELETE METHOD): In this function, it deletes the requested item that needs to be deleted will be deleted, using their specific '_id'.

Note: We export all these functions to the Route.js file.



**4) ROUTER**

We represent the specific route that each CRUD function will follow in this file.

1) We import 'express', so we can use the router function.

2) We use every and each CRUD function in our variable router.

3) We detemine a specific route for each CRUD function.

-Note: We export variable router to our main Server.js file.



**5) SERVER**

1) We import "express" so that we may take use of its features.

2) dotenv is used to hide our URI and PORT.

3) We call the config mongoDB database.

4) The 'USE' feature of express is used to excaute the function once it's needed.

5) We use call CORS function, as it fixes the CORS bug.

6) We include our Route in the app.use(), so it excuates the functions once it's needed.

**How to run the project?**

Dependencies:
A)  colors: "^1.4.0"
B)  cors: "^2.8.5"
C)  dotenv: "^16.0.0"
D)  express: "^4.17.3"
E)  express-async-handler: "^1.2.0"
F)  mongoose: "^6.3.1"
G)  nodemon: "^2.0.15"

Use 'npm run server' to connect to the backend server.
 
