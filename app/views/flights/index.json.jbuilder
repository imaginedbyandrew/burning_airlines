json.array!(@flights) do |flight|
  json.extract! flight, :id, :callsign, :origin, :destination, :plane_id
  json.url flight_url(flight, format: :json)
end
