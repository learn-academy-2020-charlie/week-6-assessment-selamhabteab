# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.
# $ rails generate controller BlogPostsController
class BlogPostsController < ApplicationController
  def index
    # 2)The controller method index represents the R in CRUD and is the Rails convention for listing all the items in a particular model, or show all
    @posts = BlogPost.all
  end

  def show
    # 3)The controller method show represents the R in CRUD and is the Rails convention for listing one item in a particular model, or show one. The HTTP verb associated with index is GET. The show route is: get '/resources/:id' => 'resources#show'
    @post = BlogPost.find(params[:id])
  end

  # 4) The controller method new represents a midway point between C and R in CRUD and is the Rails convention for the route that displays a form to the user. The HTTP verb associated with new is GET. The new route is: get '/resources/new' => 'resources#new' 
  #class answer: calling the new page, no action is needed from the database so rails magic will look for a page called new

  def new
  end

  def edit
  end

  def create
    # 5)The controller method create represents the C in CRUD and is the Rails convention for adding information to the database. The HTTP verb associated with create is post. 
    #class answer: create a blog post by getting the infrom from the view and setting...
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) if the system fails to delete blog post, the user is redirected to "blog_post_path" 
      redirect_to blog_post_path(@post)
    end
  end

  # 7)a way for us to manage exactly what goes into creating new object instances, and helps us keep unwanted information -- usually from malicious hackers -- out of the database
  #class answer: a keyword that protects the methods below this line, the methods below can only be called inside of this class
  private
  def blog_post_params
    # 8)allows the following parameters: title, content to be viewed edited and saved by the user.
    params.permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) Updating the class of this model to desribe it's association with another model
#class answer: the blog post model
class BlogPost < ApplicationRecord
  # 10)The blog has many comments and so the class of this model will hold the "has_many" association which is recognized by rails. 
  #class answer: it has an association with comments
  has_many :comments
end
