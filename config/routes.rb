Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resources :channels, only: [:index, :create] do
      resources :messages, only: [:index, :create]
    end
    delete 'channels/:channel_id/participations', to: 'channels#leave_channel'
    post 'channels/:channel_id/participations', to: 'channels#join_channel'
    resource :session, only: [:create, :destroy]
  end

  mount ActionCable.server => '/cable'
end
