Rails.application.routes.draw do
  resources :enderecos
  resources :cidades
  resources :estados
  resources :empresas
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
