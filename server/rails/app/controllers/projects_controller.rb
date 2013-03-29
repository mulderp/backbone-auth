class ProjectsController < ApplicationController
  def index
    projects = Project.all
    render :json => projects, :root => false, :each_serializer => ProjectSerializer
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def delete
  end
end
