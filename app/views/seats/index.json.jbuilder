json.array!(@seats) do |seat|
  json.extract! seat, :id, :flight_id, :passenger_id, :name
  json.url seat_url(seat, format: :json)
end
