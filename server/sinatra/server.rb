require 'sinatra'


post '/api/auth/new' do
  response.headers["Access-Control-Allow-Origin"] = "*"
end

get '/' do
  'public'
end

get '/private' do
  'private'
end
