class CategoriesController < ApplicationController
  load_resource

  def show
    @posts = @category.all_posts.page(params[:page]).per 5
  end
end
