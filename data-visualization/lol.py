import json

# File paths
input_file_path = "alcohol_fatal_long_list_city.prn"
output_file_path = "output.json"

# Read the data
data = []
with open(input_file_path, 'r') as file:
    next(file)  # Skip the headers
    for line in file:
        # Split by spaces or tabs
        row = line.split()
        city = row[0]
        alcohol_involved = 0
        not_alcohol_involved = 0

        # Handle different row lengths
        if len(row) == 3:
            if row[1].isdigit():
                alcohol_involved = int(row[1])
            if row[2].isdigit():
                not_alcohol_involved = int(row[2])
        elif len(row) == 2:
            if row[1].isdigit():
                not_alcohol_involved = int(row[1])

        data.append({
            "city": city,
            "alcohol_involved": alcohol_involved,
            "not_alcohol_involved": not_alcohol_involved
        })

# Write the data to a JSON file
with open(output_file_path, 'w') as jsonfile:
    json.dump(data, jsonfile, indent=4)
