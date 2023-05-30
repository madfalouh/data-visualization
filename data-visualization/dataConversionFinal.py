import pandas as pd
import json
import os

# List of Excel files
files = [
    'speed_a_inj_2020.xlsx', 
    'speed_ab_inj_2020.xlsx',
    'speed_all_inj_2020.xlsx',
     'speed_fatal_long_list.xlsx',
]

# Iterate over each Excel file
for file_name in files:
    # Read the Excel file
    excel_data = pd.read_excel(file_name, sheet_name=None, skiprows=1)  # skip the first row (titles)

    # Prepare output directory for the JS files
    dir_name = file_name.replace(".xlsx", "")
    os.makedirs(dir_name, exist_ok=True)

    # Iterate over each sheet
    for sheet_name, sheet_data in excel_data.items():
        # Extract the labels and data
        labels = sheet_data.iloc[:, 0].tolist()  # labels are in the first column starting from the second row

        if 'fatal' in file_name:
            if sheet_data.shape[1] > 1:
                data = sheet_data.iloc[:, 1].fillna(0).tolist()
                label = sheet_data.columns[1]
            else:
                data = [0] * len(labels)
                label = "Data"
            js_code = f'''const dataFatalities = {{
                "labels": {json.dumps(labels)},
                "datasets": [
                    {{
                        "label": "{label}",
                        "data": {json.dumps(data)},
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    }}
                ]
            }};
            
            export default dataFatalities;'''
        else:
            if sheet_data.shape[1] > 1:
                data_1 = sheet_data.iloc[:, 1].fillna(0).tolist()
                label_1 = sheet_data.columns[1]
            else:
                data_1 = [0] * len(labels)
                label_1 = "Data"

            if sheet_data.shape[1] > 2:
                data_2 = sheet_data.iloc[:, 2].fillna(0).tolist()
                label_2 = sheet_data.columns[2]
            else:
                data_2 = [0] * len(labels)
                label_2 = "Data"
            js_code = f'''const dataInjuries = {{
                "labels": {json.dumps(labels)},
                "datasets": [
                    {{
                        "label": "{label_1}",
                        "data": {json.dumps(data_1)},
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    }},
                    {{
                        "label": "{label_2}",
                        "data": {json.dumps(data_2)},
                        "borderColor": "rgba(255, 99, 132, 1)",
                        "backgroundColor": "rgba(255, 99, 132, 0.2)"
                    }}
                ]
            }};
            
            export default dataInjuries;'''

        # Save the JavaScript code to a file
        output_file = f'{dir_name}/{sheet_name.lower()}.js'
        with open(output_file, 'w') as output_file_obj:
            output_file_obj.write(js_code)
