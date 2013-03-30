class UsersController < ApplicationController
  def new_session
    logger.info params.inspect
    if true # matches
      render :json => {:auth => true, :token => OpenSSL::Digest::SHA256.hexdigest(params[:username] + "some_secret_message"), :username => "patrick"}
    else
      render :json => { :auth => false }
    end
  end
end
