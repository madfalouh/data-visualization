import pandas as pd
import json
import re

# Put your excel file name here
import pandas as pd
import json
import re

# Put your excel file name here
file_name = 'injuries_ab_inj_2020.xlsx'
sheet_name = 'County'

# Read the Excel file, skip the first row (header=1)
df = pd.read_excel(file_name, sheet_name=sheet_name, header=1)

# Fill NA/NaN values with 0 for numeric columns
for column in df.select_dtypes(include=['number']).columns:
    df[column] = df[column].fillna(0).astype(int)

# Replace spaces in column names with underscores
df.columns = df.columns.str.replace(' ', '_')

# Convert the dataframe to a list of dictionaries and clean 'County' entries
data_inj = df.to_dict('records')
for entry in data_inj:
    if isinstance(entry['County'], str):
        entry['County'] = re.sub(r'\s*\([^)]*\)', '', entry['County'])

# Create the JavaScript string
js_string = "const dataInj = " + json.dumps(data_inj, indent=4) + ";\n\nexport default dataInj;"

# Write the JavaScript string to a .js file
with open('output.js', 'w') as js_file:
    js_file.write(js_string)


# Read the Excel file, skip the first row (header=1)
df = pd.read_excel(file_name, sheet_name=sheet_name, header=1)

# Fill NA/NaN values with 0 for numeric columns
for column in df.select_dtypes(include=['number']).columns:
    df[column] = df[column].fillna(0).astype(int)

# Replace spaces in column names with underscores
df.columns = df.columns.str.replace(' ', '_')

# Convert the dataframe to a list of dictionaries and clean 'County' entries
data_inj = df.to_dict('records')
for entry in data_inj:
    if isinstance(entry['County'], str):
        entry['County'] = re.sub(r'\s*\([^)]*\)', '', entry['County'])

# Create the JavaScript string
js_string = "const dataInj = " + json.dumps(data_inj, indent=4) + ";\n\nexport default dataInj;"

# Write the JavaScript string to a .js file
with open('output.js', 'w') as js_file:
    js_file.write(js_string)
