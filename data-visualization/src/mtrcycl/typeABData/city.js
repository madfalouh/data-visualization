const dataInjuries = {
                "labels": ["Abbeville", "Aberdeen", "Ackerman", "Alcorn State University", "Amory", "Anguilla", "Arkabutla", "Artesia", "Ashland", "Bailey", "Baldwyn", "Bassfield", "Batesville", "Bay Saint Louis", "Bay Springs", "Beaumont", "Becker", "Belmont", "Belzoni", "Benoit", "Benton", "Bentonia", "Big Creek", "Biloxi", "Blue Mountain", "Blue Springs", "Bogue Chitto", "Bolton", "Bond", "Booneville", "Boyle", "Brandon", "Braxton", "Brookhaven", "Brooklyn", "Brooksville", "Bruce", "Buckatunna", "Bude", "Burnsville", "Byhalia", "Byram", "Caledonia", "Calhoun City", "Canton", "Carriere", "Carthage", "Cary", "Cascilla", "Chalybeate", "Charleston", "Chunky", "Clara", "Clarksdale", "Clermont Harbor", "Cleveland", "Clinton", "Coffeeville", "Coldwater", "Collins", "Collinsville", "Columbia", "Columbus", "Como", "Conehatta", "Corinth", "Courtland", "Crowder", "Cruger", "Crystal Springs", "D'Iberville", "D'Lo", "Daleville", "De Lisle", "Decatur", "Dekalb", "Dennis", "Derma", "Diamondhead", "Duck Hill", "Dumas", "Duncan", "Dundee", "Durant", "Ecru", "Eden", "Edwards", "Elliott", "Ellisville", "Enterprise", "Ethel", "Etta", "Eucutta", "Eupora", "Falkner", "Fayette", "Fernwood", "Flora", "Florence", "Flowood", "Forest", "Foxworth", "French Camp", "Fulton", "Gallman", "Gattman", "Gautier", "Georgetown", "Glens", "Gloster", "Goodman", "Gore Springs", "Greenville", "Greenwood", "Greenwood Springs", "Grenada", "Gulfport", "Guntown", "Hamilton", "Harrisville", "Hatley", "Hattiesburg", "Hazlehurst", "Heidelberg", "Hermanville", "Hernando", "Hickory", "Hickory Flat", "Holcomb", "Hollandale", "Holly Bluff", "Holly Springs", "Horn Lake", "Houston", "Indianola", "Isola", "Itta Bena", "Iuka", "Jackson", "Jayess", "Kilmichael", "Kiln", "Kokomo", "Kosciusko", "Kossuth", "Lafayette Springs", "Lake", "Lake Cormorant", "Lakeshore", "Lauderdale", "Laurel", "Leakesville", "Lexington", "Liberty", "Long Beach", "Lorman", "Louin", "Louisville", "Lucedale", "Lumberton", "Lyon", "Maben", "Macon", "Madison", "Magee", "Magnolia", "Mantachie", "Marion", "Marks", "Mathiston", "McAdams", "McCarley", "McComb", "McCool", "McHenry", "McLain", "McLaurin", "McNeill", "Mendenhall", "Meridian", "Merigold", "Michigan City", "Mississippi State", "Mize", "Monticello", "Mooreville", "Moorhead", "Morgan City", "Morton", "Moselle", "Moss", "Moss Point", "Mound Bayou", "Mount Olive", "Mount Pleasant", "Myrtle", NaN, "Natchez", "Neely", "Nesbit", "Neshoba", "Nettleton", "New Albany", "New Augusta", "New Hebron", "Newton", "Nicholson", "North Tunica", "Oak Vale", "Oakland", "Ocean Springs", "Okolona", "Old Houlka", "Olive Branch", "Osyka", "Ovett", "Oxford", "Pachuta", "Pascagoula", "Pass Christian", "Pattison", "Paulding", "Pearl", "Pearlington", "Pelahatchie", "Perkinston", "Petal", "Pheba", "Philadelphia", "Philipp", "Picayune", "Pickens", "Pittsboro", "Plantersville", "Pleasant Grove", "Polkville", "Pontotoc", "Pope", "Poplarville", "Port Gibson", "Porterville", "Potts Camp", "Prairie", "Prentiss", "Preston", "Pulaski", "Purvis", "Quitman", "Raleigh", "Raymond", "Red Banks", "Red Lick", "Redwood", "Reform", "Richland", "Ridgeland", "Rienzi", "Ripley", "Robinsonville", "Rosedale", "Roxie", "Ruleville", "Rural Adams", "Rural Alcorn", "Rural Amite", "Rural Attala", "Rural Benton", "Rural Bolivar", "Rural Calhoun", "Rural Carroll", "Rural Chickasaw", "Rural Choctaw", "Rural Claiborne", "Rural Clarke", "Rural Clay", "Rural Coahoma", "Rural Copiah", "Rural Covington", "Rural DeSoto", "Rural Forrest", "Rural Franklin", "Rural George", "Rural Greene", "Rural Grenada", "Rural Hancock", "Rural Harrison", "Rural Hinds", "Rural Holmes", "Rural Humphreys", "Rural Issaquena", "Rural Itawamba", "Rural Jackson", "Rural Jasper", "Rural Jefferson", "Rural Jefferson Davis", "Rural Jones", "Rural Kemper", "Rural Lafayette", "Rural Lamar", "Rural Lauderdale", "Rural Lawrence", "Rural Leake", "Rural Lee", "Rural Leflore", "Rural Lincoln", "Rural Lowndes", "Rural Madison", "Rural Marion", "Rural Marshall", "Rural Monroe", "Rural Montgomery", "Rural Neshoba", "Rural Newton", "Rural Noxubee", "Rural Oktibbeha", "Rural Panola", "Rural Pearl River", "Rural Perry", "Rural Pike", "Rural Pontotoc", "Rural Prentiss", "Rural Quitman", "Rural Rankin", "Rural Scott", "Rural Sharkey", "Rural Simpson", "Rural Smith", "Rural Stone", "Rural Sunflower", "Rural Tallahatchie", "Rural Tate", "Rural Tippah", "Rural Tishomingo", "Rural Tunica", "Rural Union", "Rural Walthall", "Rural Warren", "Rural Washington", "Rural Wayne", "Rural Webster", "Rural Wilkinson", "Rural Winston", "Rural Yalobusha", "Rural Yazoo", "Ruth", "Sallis", "Saltillo", "Sandersville", "Sandy Hook", "Sarah", "Sardis", "Satartia", "Saucier", "Scooba", "Sebastopol", "Seminary", "Senatobia", "Shannon", "Shelby", "Sherman", "Shubuta", "Shuqualak", "Sidon", "Silver Creek", "Smithville", "Sontag", "Soso", "Southaven", "Starkville", "Steens", "Stennis Space Center", "Stewart", "Stringer", "Sturgis", "Summit", "Sumrall", "Sylvarena", "Taylor", "Taylorsville", "Tchula", "Terry", "Thompson", "Tillatoba", "Tishomingo", "Toomsuba", "Town Of Walls", "Tunica", "Tupelo", "Tutwiler", "Tylertown", "Union", "Union Church", "University", "Utica", "Vaiden", "Vancleave", "Vardaman", "Vaughan", "Verona", "Vicksburg", "Walnut", "Water Valley", "Waveland", "Waynesboro", "Weir", "Wesson", "West", "West Point", "Wiggins", "Winona", "Woodland", "Woodville", "Yazoo City", "Zama"],
                "datasets": [
                    {
                        "label": "Motorcycle",
                        "data": [0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 3.0, 2.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 22.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 6.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 3.0, 2.0, 0.0, 0.0, 2.0, 1.0, 0.0, 7.0, 0.0, 0.0, 4.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 1.0, 4.0, 1.0, 0.0, 6.0, 38.0, 0.0, 1.0, 0.0, 0.0, 17.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 7.0, 0.0, 0.0, 0.0, 0.0, 2.0, 22.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 7.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 5.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 8.0, 1.0, 0.0, 4.0, 0.0, 0.0, 2.0, 0.0, 6.0, 3.0, 0.0, 0.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 1.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 1.0, 2.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 2.0, 0.0, 2.0, 1.0, 1.0, 7.0, 1.0, 0.0, 0.0, 0.0, 4.0, 17.0, 0.0, 0.0, 0.0, 5.0, 0.0, 2.0, 7.0, 8.0, 0.0, 1.0, 3.0, 0.0, 1.0, 3.0, 1.0, 1.0, 5.0, 1.0, 0.0, 0.0, 2.0, 0.0, 1.0, 2.0, 2.0, 0.0, 4.0, 1.0, 3.0, 0.0, 8.0, 1.0, 2.0, 4.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 0.0, 2.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 9.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 9.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 3.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 1.0, 0.0],
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    },
                    {
                        "label": "Not Motorcycle/Not Applicable",
                        "data": [4.0, 35.0, 3.0, 3.0, 46.0, 1.0, 2.0, 1.0, 5.0, 2.0, 30.0, 11.0, 133.0, 54.0, 8.0, 2.0, 3.0, 10.0, 1.0, 2.0, 3.0, 4.0, 1.0, 227.0, 4.0, 7.0, 13.0, 3.0, 1.0, 38.0, 1.0, 103.0, 1.0, 62.0, 10.0, 4.0, 5.0, 3.0, 7.0, 7.0, 11.0, 59.0, 6.0, 6.0, 72.0, 27.0, 31.0, 3.0, 3.0, 3.0, 7.0, 1.0, 5.0, 107.0, 2.0, 64.0, 78.0, 2.0, 13.0, 57.0, 0.0, 34.0, 137.0, 13.0, 4.0, 94.0, 16.0, 1.0, 2.0, 14.0, 58.0, 3.0, 1.0, 3.0, 6.0, 6.0, 1.0, 10.0, 9.0, 1.0, 1.0, 1.0, 1.0, 1.0, 16.0, 1.0, 13.0, 10.0, 27.0, 2.0, 3.0, 1.0, 3.0, 6.0, 2.0, 6.0, 3.0, 1.0, 33.0, 91.0, 34.0, 1.0, 1.0, 18.0, 1.0, 1.0, 58.0, 2.0, 5.0, 8.0, 1.0, 1.0, 185.0, 91.0, 1.0, 79.0, 626.0, 1.0, 4.0, 2.0, 6.0, 468.0, 20.0, 7.0, 1.0, 57.0, 1.0, 2.0, 7.0, 5.0, 3.0, 37.0, 114.0, 14.0, 15.0, 1.0, 3.0, 32.0, 838.0, 1.0, 4.0, 25.0, 2.0, 52.0, 3.0, 1.0, 3.0, 9.0, 5.0, 1.0, 139.0, 9.0, 17.0, 2.0, 59.0, 2.0, 2.0, 29.0, 14.0, 9.0, 1.0, 3.0, 44.0, 55.0, 49.0, 22.0, 3.0, 2.0, 11.0, 4.0, 3.0, 3.0, 97.0, 1.0, 3.0, 3.0, 3.0, 2.0, 26.0, 169.0, 4.0, 1.0, 4.0, 2.0, 7.0, 2.0, 1.0, 2.0, 24.0, 4.0, 2.0, 121.0, 6.0, 10.0, 6.0, 2.0, 5.0, 78.0, 1.0, 7.0, 1.0, 16.0, 55.0, 5.0, 2.0, 7.0, 1.0, 2.0, 1.0, 12.0, 86.0, 7.0, 1.0, 207.0, 3.0, 2.0, 122.0, 1.0, 103.0, 62.0, 5.0, 1.0, 97.0, 3.0, 25.0, 6.0, 51.0, 2.0, 48.0, 2.0, 105.0, 2.0, 8.0, 2.0, 1.0, 1.0, 50.0, 9.0, 31.0, 17.0, 1.0, 2.0, 4.0, 1.0, 2.0, 2.0, 12.0, 11.0, 5.0, 22.0, 3.0, 1.0, 1.0, 0.0, 39.0, 60.0, 1.0, 45.0, 21.0, 2.0, 2.0, 14.0, 35.0, 40.0, 35.0, 33.0, 27.0, 39.0, 24.0, 28.0, 49.0, 27.0, 27.0, 44.0, 41.0, 28.0, 48.0, 61.0, 159.0, 60.0, 19.0, 140.0, 30.0, 72.0, 64.0, 125.0, 102.0, 51.0, 22.0, 2.0, 68.0, 263.0, 69.0, 44.0, 22.0, 113.0, 19.0, 35.0, 107.0, 124.0, 23.0, 41.0, 146.0, 11.0, 63.0, 120.0, 100.0, 50.0, 70.0, 85.0, 19.0, 97.0, 49.0, 16.0, 85.0, 57.0, 99.0, 39.0, 99.0, 52.0, 31.0, 8.0, 147.0, 46.0, 7.0, 47.0, 17.0, 23.0, 58.0, 17.0, 47.0, 49.0, 33.0, 38.0, 74.0, 43.0, 59.0, 45.0, 22.0, 18.0, 32.0, 16.0, 8.0, 32.0, 4.0, 10.0, 30.0, 4.0, 1.0, 3.0, 28.0, 3.0, 28.0, 4.0, 3.0, 2.0, 50.0, 26.0, 3.0, 6.0, 2.0, 11.0, 1.0, 2.0, 1.0, 1.0, 5.0, 229.0, 114.0, 1.0, 1.0, 2.0, 4.0, 1.0, 22.0, 15.0, 1.0, 2.0, 3.0, 1.0, 18.0, 1.0, 2.0, 1.0, 1.0, 4.0, 18.0, 384.0, 1.0, 14.0, 2.0, 4.0, 1.0, 10.0, 5.0, 1.0, 6.0, 1.0, 38.0, 158.0, 13.0, 13.0, 50.0, 65.0, 2.0, 16.0, 5.0, 63.0, 56.0, 12.0, 3.0, 7.0, 61.0, 1.0],
                        "borderColor": "rgba(255, 99, 132, 1)",
                        "backgroundColor": "rgba(255, 99, 132, 0.2)"
                    }
                ]
            };
            
            export default dataInjuries;