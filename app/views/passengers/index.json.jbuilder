json.array!(@passengers) do |passenger|
  json.extract! passenger, :id, :name, :password_digest
  json.url passenger_url(passenger, format: :json)
end
