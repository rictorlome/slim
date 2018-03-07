Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :channels, only: [:index, :create]
    delete 'channels/:channel_id/participations', to: 'channels#leave_channel'
    post 'channels/:channel_id/participations', to: 'channels#join_channel'
    resource :session, only: [:create, :destroy]
  end
end
