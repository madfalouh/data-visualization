const dataInjuries = {
                "labels": ["Abbeville", "Aberdeen", "Ackerman", "Alcorn State University", "Alligator", "Amory", "Anguilla", "Arkabutla", "Artesia", "Ashland", "Avalon", "Bailey", "Baldwyn", "Bassfield", "Batesville", "Bay Saint Louis", "Bay Springs", "Beaumont", "Beauregard", "Becker", "Belmont", "Belzoni", "Benoit", "Benton", "Bentonia", "Big Creek", "Biloxi", "Blue Mountain", "Blue Springs", "Bogue Chitto", "Bolton", "Bond", "Booneville", "Boyle", "Brandon", "Braxton", "Brookhaven", "Brooklyn", "Brooksville", "Bruce", "Buckatunna", "Bude", "Burnsville", "Byhalia", "Byram", "Caledonia", "Calhoun City", "Canton", "Carriere", "Carrollton", "Carthage", "Cary", "Cascilla", "Cedar Bluff", "Centreville", "Chalybeate", "Charleston", "Chunky", "Clara", "Clarksdale", "Clermont Harbor", "Cleveland", "Clinton", "Coffeeville", "Coldwater", "Collins", "Collinsville", "Columbia", "Columbus", "Como", "Conehatta", "Corinth", "Courtland", "Crawford", "Crenshaw", "Crosby", "Crowder", "Cruger", "Crystal Springs", "D'Iberville", "D'Lo", "Daleville", "De Lisle", "De Soto", "Decatur", "Dekalb", "Dennis", "Derma", "Diamondhead", "Doddsville", "Drew", "Duck Hill", "Dumas", "Duncan", "Dundee", "Durant", "Ecru", "Eden", "Edwards", "Elliott", "Ellisville", "Enterprise", "Ethel", "Etta", "Eucutta", "Eupora", "Falkner", "Fayette", "Fernwood", "Flora", "Florence", "Flowood", "Forest", "Foxworth", "French Camp", "Fulton", "Gallman", "Gattman", "Gautier", "Georgetown", "Glens", "Gloster", "Golden", "Goodman", "Gore Springs", "Greenville", "Greenwood", "Greenwood Springs", "Grenada", "Gulfport", "Guntown", "Hamilton", "Harrisville", "Hatley", "Hattiesburg", "Hazlehurst", "Heidelberg", "Hermanville", "Hernando", "Hickory", "Hickory Flat", "Holcomb", "Hollandale", "Holly Bluff", "Holly Springs", "Horn Lake", "Houston", "Hurley", "Indianola", "Isola", "Itta Bena", "Iuka", "Jackson", "Jayess", "Keesler Air Force Base", "Kilmichael", "Kiln", "Kokomo", "Kosciusko", "Kossuth", "Lafayette Springs", "Lake", "Lake Cormorant", "Lakeshore", "Lauderdale", "Laurel", "Leakesville", "Learned", "Leflore", "Leland", "Lexington", "Liberty", "Long Beach", "Lorman", "Louin", "Louisville", "Lucedale", "Lumberton", "Lyon", "Maben", "Macon", "Madden", "Madison", "Magee", "Magnolia", "Mantachie", "Marion", "Marks", "Mathiston", "McAdams", "McCall Creek", "McCarley", "McComb", "McCool", "McHenry", "McLain", "McLaurin", "McNeill", "Meadville", "Mendenhall", "Meridian", "Merigold", "Michigan City", "Minter City", "Mississippi State", "Mize", "Monticello", "Mooreville", "Moorhead", "Morgan City", "Morton", "Moselle", "Moss", "Moss Point", "Mound Bayou", "Mount Olive", "Mount Pleasant", "Myrtle", NaN, "Natchez", "Neely", "Nesbit", "Neshoba", "Nettleton", "New Albany", "New Augusta", "New Hebron", "Newton", "Nicholson", "North Gulfport", "North Tunica", "Noxapater", "Oak Vale", "Oakland", "Ocean Springs", "Okolona", "Old Houlka", "Olive Branch", "Orange Grove", "Osyka", "Ovett", "Oxford", "Pachuta", "Paden", "Paris", "Pascagoula", "Pass Christian", "Pattison", "Paulding", "Pearl", "Pearlington", "Pelahatchie", "Perkinston", "Petal", "Pheba", "Philadelphia", "Philipp", "Picayune", "Pickens", "Pinola", "Pittsboro", "Plantersville", "Pleasant Grove", "Polkville", "Pontotoc", "Pope", "Poplarville", "Port Gibson", "Porterville", "Potts Camp", "Prairie", "Prairie Point", "Prentiss", "Preston", "Pulaski", "Purvis", "Quitman", "Raleigh", "Randolph", "Raymond", "Red Banks", "Red Lick", "Redwood", "Reform", "Richland", "Richton", "Ridgeland", "Rienzi", "Ripley", "Robinsonville", "Rolling Fork", "Rose Hill", "Rosedale", "Roxie", "Ruleville", "Rural Adams", "Rural Alcorn", "Rural Amite", "Rural Attala", "Rural Benton", "Rural Bolivar", "Rural Calhoun", "Rural Carroll", "Rural Chickasaw", "Rural Choctaw", "Rural Claiborne", "Rural Clarke", "Rural Clay", "Rural Coahoma", "Rural Copiah", "Rural Covington", "Rural DeSoto", "Rural Forrest", "Rural Franklin", "Rural George", "Rural Greene", "Rural Grenada", "Rural Hancock", "Rural Harrison", "Rural Hinds", "Rural Holmes", "Rural Humphreys", "Rural Issaquena", "Rural Itawamba", "Rural Jackson", "Rural Jasper", "Rural Jefferson", "Rural Jefferson Davis", "Rural Jones", "Rural Kemper", "Rural Lafayette", "Rural Lamar", "Rural Lauderdale", "Rural Lawrence", "Rural Leake", "Rural Lee", "Rural Leflore", "Rural Lincoln", "Rural Lowndes", "Rural Madison", "Rural Marion", "Rural Marshall", "Rural Monroe", "Rural Montgomery", "Rural Neshoba", "Rural Newton", "Rural Noxubee", "Rural Oktibbeha", "Rural Panola", "Rural Pearl River", "Rural Perry", "Rural Pike", "Rural Pontotoc", "Rural Prentiss", "Rural Quitman", "Rural Rankin", "Rural Scott", "Rural Sharkey", "Rural Simpson", "Rural Smith", "Rural Stone", "Rural Sunflower", "Rural Tallahatchie", "Rural Tate", "Rural Tippah", "Rural Tishomingo", "Rural Tunica", "Rural Union", "Rural Walthall", "Rural Warren", "Rural Washington", "Rural Wayne", "Rural Webster", "Rural Wilkinson", "Rural Winston", "Rural Yalobusha", "Rural Yazoo", "Ruth", "Sallis", "Saltillo", "Sandersville", "Sandy Hook", "Sarah", "Sardis", "Satartia", "Saucier", "Schlater", "Scooba", "Sebastopol", "Seminary", "Senatobia", "Shannon", "Shaw", "Shelby", "Sherman", "Shivers", "Shubuta", "Shuqualak", "Sibley", "Sidon", "Silver Creek", "Smithville", "Sontag", "Soso", "Southaven", "Star", "Starkville", "Steens", "Stennis Space Center", "Stewart", "Stringer", "Sturgis", "Summit", "Sumrall", "Sylvarena", "Taylor", "Taylorsville", "Tchula", "Terry", "Thompson", "Tillatoba", "Tiplersville", "Tishomingo", "Toccopola", "Toomsuba", "Town Of Walls", "Tunica", "Tupelo", "Tutwiler", "Tylertown", "Union", "Union Church", "University", "Utica", "Vaiden", "Vancleave", "Vardaman", "Vaughan", "Verona", "Vicksburg", "Victoria", "Walnut", "Walnut Grove", "Water Valley", "Waveland", "Waynesboro", "Weir", "Wesson", "West", "West Point", "Wheeler", "Wiggins", "Winona", "Woodland", "Woodville", "Yazoo City", "Zama"],
                "datasets": [
                    {
                        "label": "Non-Pedestrian/Not Applicable",
                        "data": [10, 68, 7, 4, 1, 104, 1, 2, 2, 5, 3, 2, 58, 24, 205, 97, 36, 4, 1, 5, 16, 1, 2, 9, 19, 1, 549, 8, 13, 22, 7, 1, 95, 6, 303, 5, 164, 11, 22, 12, 4, 7, 11, 37, 109, 10, 14, 169, 36, 3, 68, 4, 3, 1, 18, 4, 29, 2, 8, 236, 4, 147, 153, 8, 20, 75, 1, 74, 606, 23, 6, 189, 18, 1, 3, 1, 1, 5, 58, 128, 7, 1, 3, 1, 12, 15, 1, 16, 20, 1, 2, 3, 1, 1, 3, 6, 25, 2, 17, 12, 62, 3, 5, 2, 4, 15, 8, 14, 4, 10, 55, 264, 64, 8, 1, 51, 3, 1, 122, 3, 5, 16, 1, 2, 3, 422, 172, 3, 166, 1411, 6, 8, 4, 6, 1029, 81, 14, 7, 102, 1, 3, 11, 6, 3, 81, 235, 21, 3, 56, 1, 18, 51, 2456, 2, 1, 6, 37, 3, 69, 6, 1, 6, 15, 5, 5, 430, 10, 1, 1, 5, 31, 5, 115, 3, 3, 80, 28, 14, 2, 3, 106, 1, 151, 112, 38, 10, 8, 11, 8, 8, 2, 3, 187, 2, 5, 3, 3, 3, 2, 58, 520, 4, 1, 1, 13, 4, 29, 5, 3, 3, 38, 8, 2, 192, 9, 21, 15, 7, 11, 228, 1, 9, 4, 31, 117, 11, 3, 25, 3, 2, 3, 9, 1, 16, 227, 14, 2, 442, 1, 7, 3, 354, 2, 1, 1, 274, 90, 14, 1, 246, 8, 27, 19, 102, 3, 102, 2, 219, 5, 3, 9, 4, 1, 2, 109, 13, 48, 88, 3, 4, 7, 2, 2, 2, 2, 24, 27, 8, 2, 36, 8, 1, 1, 1, 110, 2, 303, 3, 64, 52, 3, 1, 2, 9, 20, 56, 95, 46, 52, 39, 69, 50, 47, 61, 39, 42, 77, 54, 47, 88, 112, 236, 98, 37, 203, 35, 96, 147, 239, 174, 67, 30, 3, 119, 488, 118, 64, 37, 162, 33, 80, 181, 227, 35, 75, 209, 37, 92, 177, 187, 77, 131, 120, 24, 156, 85, 19, 131, 127, 150, 52, 152, 106, 62, 15, 288, 94, 11, 73, 37, 57, 86, 30, 80, 67, 53, 66, 118, 84, 114, 71, 35, 22, 55, 23, 24, 51, 4, 10, 50, 8, 1, 5, 49, 4, 51, 2, 7, 6, 5, 104, 35, 1, 4, 12, 1, 3, 18, 1, 3, 4, 7, 1, 7, 697, 2, 563, 1, 2, 2, 7, 1, 56, 21, 2, 3, 4, 1, 40, 1, 6, 1, 1, 1, 1, 28, 44, 854, 2, 30, 3, 8, 3, 15, 6, 2, 18, 6, 59, 338, 6, 19, 2, 20, 101, 104, 4, 20, 5, 107, 1, 103, 26, 3, 34, 98, 2],
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    },
                    {
                        "label": "Data",
                        "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        "borderColor": "rgba(255, 99, 132, 1)",
                        "backgroundColor": "rgba(255, 99, 132, 0.2)"
                    }
                ]
            };
            
            export default dataInjuries;