import pandas as pd
import json

# Read the Excel file
file_path = 'unbelt_fatal_long_list.xlsx'
excel_data = pd.read_excel(file_path, sheet_name=None)

# Iterate over each sheet
for sheet_name, sheet_data in excel_data.items():
    # Extract the labels and data
    labels = sheet_data.iloc[1:, 0].tolist()
    data = sheet_data.iloc[1:, 1].tolist()

    # Create the JavaScript code
    js_code = f'''const dataFatalities = {{
  "labels": {json.dumps(labels)},
  "datasets": [
    {{
      "label": "Fatalities",
      "data": {json.dumps(data)},
      "borderColor": "rgba(75, 192, 192, 1)",
      "backgroundColor": "rgba(75, 192, 192, 0.2)"
    }}
  ]
}};

export default dataFatalities;'''

    # Save the JavaScript code to a file
    output_file = f'{sheet_name.lower()}.js'
    with open(output_file, 'w') as file:
        file.write(js_code)
