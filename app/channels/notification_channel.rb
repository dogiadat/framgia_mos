# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class NotificationChannel < ApplicationCable::Channel
  def subscribed
    stream_from "new_post_channel"
  end

  def unsubscribed
  end
end
