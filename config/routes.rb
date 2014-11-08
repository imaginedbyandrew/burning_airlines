Rails.application.routes.draw do
  root :to => 'pages#index'


  resources :seats

  resources :flights

  resources :passengers

  resources :planes

  get '/signup' => 'passengers#new'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
