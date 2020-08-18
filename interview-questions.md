# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The name of the foreign key is animal_id and it would be a part of the sightings model.

  Researched answer: Part one of my answer holds correct due to the naming convention of foreign keys. Foreign keys are named after the modelname with the has_many association (modelname_id). Foreign keys also reside in the model with the belongs_to association. 


2. Which routes must always be passed params and why?

  Your answer: create, update, delete methods must pass params

  Researched answer: According to the lesson plan on rails forms, the purpose of creating forms is to permit users to "add, update, and delete information" without having to use the terminal. In order to accomplish this, we need to add a route that will show our user a page where they can enter information in a form and a route that will post the information to the database. This is done by passing params via the get/post methods. 

  Class Answer: show, update, destroy methods in controller



3. Based on your knowledge of Rails conventions, write a route for a webpage called "game" that takes in a parameter called "guess" with a controller called "main".

Notes: "A routes.rb file in the config folder is created when you run rails new. This file is intended to house all valid urls in your application"
Rails naming convention includes all of the following:

a.  http verb we are sending to the server via the url (get, post, put, patch, delete)
b.  '/url'
      =>
c   'name of controller#'
d.  '#name of method found in controller' 
  Your answer: 
  get '/game/:guess' => 'main#game'
  
  Class Answer: get 'main/game/:guess' => 'main#game'



4. Name three rails generator commands. What is created by each?

  Your answer: I can recall two commands (1&4) but will need to research my notes to provide a third command:
  1. $ rails generate model ModelName
  2. $ rails generate migration ModificationOnModel
  3. $ rails generate controller main
  4. $ rails generate resource
  Class Answer: 
  1. rails generate migration 
    - migration file, with unique timestamp
  2. rails generate model ModelName attribute:datatype 
    - table in database, model class, schema, migration
  3. rails generate controller, view folder
  4. rails generate resource 
    - routes, model, contorller, view folder

  Researched answer: My answer required research
  1. $ rails generate model ModelName
  2. $ rails generate migration ModificationOnModel
  3. $ rails generate controller main
  4. $ rails generate resource


5. Consider the Rails routes below. Describe the responsibility of each route.

method="GET"    /users           
Your answer: get '/users' => 'users#index'
This route will display an index of all users
Class answer: index - all the users     

method="GET"    /users/1         
Your answer: get '/users/1' => 'users#show'
This route will show the user with id:1 
Class answer: show - one user

method="GET"    /users/new       
Your answer: get '/users/new' => 'users#new'
This route will return an HTML form for creating a new user
Class answer: html page for new entry/form, inputs

method="GET"    /users/edit/1    
Your answer: get '/users/edit/1' => 'users#edit'
This route will return an HTML form for editing a a specific user (user with id: 1)
Class answer: html page to edit data of id 1

method="POST"   /users        
Your answer: get '/users' => 'users#create'
This route will create a new user
Class answer: creating a new user

method="PUT"    /users/1          
Your answer: get '/users/1' => 'users#update'
This route will update the user with id: 1
Class answer: editing user of id 1

method="DELETE" /users/1      
Your answer: get '/users/1' => 'users#destroy'
This route will delete the user with id: 1
Class answer: delete the user id of 1