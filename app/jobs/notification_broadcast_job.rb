class NotificationBroadcastJob < ApplicationJob
  queue_as :default

  def perform post
    ActionCable.server.broadcast "new_post_channel", post: post
  end
end
