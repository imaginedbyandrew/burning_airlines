json.array!(@planes) do |plane|
  json.extract! plane, :id, :name, :rows, :column
  json.url plane_url(plane, format: :json)
end
