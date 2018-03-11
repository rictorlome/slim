class User < ApplicationRecord
  validates :username, uniqueness: true
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
  after_create :join_general

  attr_reader :password

  has_many :created_channels,
    class_name: 'Channel',
    foreign_key: :creator_id

  has_many :channel_participations,
    class_name: 'Participation',
    foreign_key: :member_id

  has_many :joined_channels,
    through: :channel_participations,
    source: :channel

  has_many :messages,
    foreign_key: :author_id

  def self.find_by_credentials(username, pw)
    user = User.includes(joined_channels: :members).find_by(username: username)
    user && user.is_password?(pw) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def ensure_session_token
    self.session_token  ||= User.generate_session_token
  end

  def join_general
    #Make sure general is in the SEED file.#
    general = Channel.find_by(title: 'general')
    Participation.create(member_id: self.id, channel_id: general.id) if general
  end

end
