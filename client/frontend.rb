require 'rubygems'
require 'sinatra'
require 'faraday'
require 'faraday_middleware'
require 'json'

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/api/auth/new' do
  puts params.inspect
  conn = Faraday::Connection.new('http://0.0.0.0:3000') do |builder|
    builder.response :logger
    builder.request :json
    #builder.response :json, :content_type => "application/json"
    builder.adapter Faraday.default_adapter
  end
  response = conn.post('/api/auth/new', {:username => params[:email], :password => params[:password]})
  # token
  puts response.inspect
  response.body
end
