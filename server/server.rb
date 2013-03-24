require 'sinatra'

get '/' do
  'public'
end

get '/private' do
  'private'
end
