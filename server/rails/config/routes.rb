Dashboards::Application.routes.draw do
  get '/dashboard' => "users#dashboard"
  post '/api/auth/new' => "users#new_session"
  resources :projects
end
