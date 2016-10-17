class Advertisment < ApplicationRecord
  validates :description, presence: true
  validates :url, presence: true
  mount_uploader :image, AdvertismentImageUploader
end
