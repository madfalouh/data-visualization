import pandas as pd
import json

# Read the Excel file
file_path = 'unbelt_a_inj_2020.xlsx'
excel_data = pd.read_excel(file_path, sheet_name=None)

# Iterate over each sheet
for sheet_name, sheet_data in excel_data.items():
    # Extract the labels and data
    labels = sheet_data.iloc[1:, 0].tolist()
    data_1 = sheet_data.iloc[1:, 1].tolist()
    data_2 = sheet_data.iloc[1:, 2].tolist()

    # Create the JavaScript code
    js_code = f'''const dataInjuries = {{
  "labels": {json.dumps(labels)},
  "datasets": [
    {{
      "label": "Alcohol Involved",
      "data": {json.dumps(data_1)},
      "borderColor": "rgba(75, 192, 192, 1)",
      "backgroundColor": "rgba(75, 192, 192, 0.2)"
    }},
    {{
      "label": "Not Alcohol Involved",
      "data": {json.dumps(data_2)},
      "borderColor": "rgba(255, 99, 132, 1)",
      "backgroundColor": "rgba(255, 99, 132, 0.2)"
    }}
  ]
}};

export default dataInjuries;'''

    # Save the JavaScript code to a file
    output_file = f'{sheet_name.lower()}.js'
    with open(output_file, 'w') as file:
        file.write(js_code)
