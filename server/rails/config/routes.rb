Dashboards::Application.routes.draw do
  get '/dashboard' => "users#dashboard"
  resources :projects
end
