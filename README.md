Chefs/Foodie Blog. A home where Foodie/Chef users can upload images of their favorite recipes while having the customization of editing and posting them down to the ingredients in said recipes.

As a user you can add/update/edit/delete recipes
Users can also login/sign-up"register"/update and delete their accounts.

'https://chefs-view.herokuapp.com/' = homepage endpoint welcome message
'https://chefs-view.herokuapp.com/auth/register' = url register new user POST
{
"firstName":"Tom"
"lastName":"Brady"
"email":"email.com",
"password":"testpassword"
}
'https://chefs-view.herokuapp.com//auth/login' = user login authentication POST
{
"email":"email.com",
"password":"testpassword"
}
'https://chefs-view.herokuapp.com/recipes' = recipes endpoint
