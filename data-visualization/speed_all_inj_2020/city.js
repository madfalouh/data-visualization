const dataInjuries = {
                "labels": ["Abbeville", "Aberdeen", "Ackerman", "Alcorn State University", "Alligator", "Amory", "Anguilla", "Arkabutla", "Artesia", "Ashland", "Avalon", "Bailey", "Baldwyn", "Bassfield", "Batesville", "Bay Saint Louis", "Bay Springs", "Beaumont", "Beauregard", "Becker", "Belmont", "Belzoni", "Benoit", "Benton", "Bentonia", "Big Creek", "Biloxi", "Blue Mountain", "Blue Springs", "Bogue Chitto", "Bolton", "Bond", "Booneville", "Boyle", "Brandon", "Braxton", "Brookhaven", "Brooklyn", "Brooksville", "Bruce", "Buckatunna", "Bude", "Burnsville", "Byhalia", "Byram", "Caledonia", "Calhoun City", "Canton", "Carriere", "Carrollton", "Carthage", "Cary", "Cascilla", "Cedar Bluff", "Centreville", "Chalybeate", "Charleston", "Chunky", "Clara", "Clarksdale", "Clermont Harbor", "Cleveland", "Clinton", "Coffeeville", "Coldwater", "Collins", "Collinsville", "Columbia", "Columbus", "Como", "Conehatta", "Corinth", "Courtland", "Crawford", "Crenshaw", "Crosby", "Crowder", "Cruger", "Crystal Springs", "D'Iberville", "D'Lo", "Daleville", "De Lisle", "De Soto", "Decatur", "Dekalb", "Dennis", "Derma", "Diamondhead", "Doddsville", "Drew", "Duck Hill", "Dumas", "Duncan", "Dundee", "Durant", "Ecru", "Eden", "Edwards", "Elliott", "Ellisville", "Enterprise", "Ethel", "Etta", "Eucutta", "Eupora", "Falkner", "Fayette", "Fernwood", "Flora", "Florence", "Flowood", "Forest", "Foxworth", "French Camp", "Fulton", "Gallman", "Gattman", "Gautier", "Georgetown", "Glens", "Gloster", "Golden", "Goodman", "Gore Springs", "Greenville", "Greenwood", "Greenwood Springs", "Grenada", "Gulfport", "Guntown", "Hamilton", "Harrisville", "Hatley", "Hattiesburg", "Hazlehurst", "Heidelberg", "Hermanville", "Hernando", "Hickory", "Hickory Flat", "Holcomb", "Hollandale", "Holly Bluff", "Holly Springs", "Horn Lake", "Houston", "Hurley", "Indianola", "Isola", "Itta Bena", "Iuka", "Jackson", "Jayess", "Keesler Air Force Base", "Kilmichael", "Kiln", "Kokomo", "Kosciusko", "Kossuth", "Lafayette Springs", "Lake", "Lake Cormorant", "Lakeshore", "Lauderdale", "Laurel", "Leakesville", "Learned", "Leflore", "Leland", "Lexington", "Liberty", "Long Beach", "Lorman", "Louin", "Louisville", "Lucedale", "Lumberton", "Lyon", "Maben", "Macon", "Madden", "Madison", "Magee", "Magnolia", "Mantachie", "Marion", "Marks", "Mathiston", "McAdams", "McCall Creek", "McCarley", "McComb", "McCool", "McHenry", "McLain", "McLaurin", "McNeill", "Meadville", "Mendenhall", "Meridian", "Merigold", "Michigan City", "Minter City", "Mississippi State", "Mize", "Monticello", "Mooreville", "Moorhead", "Morgan City", "Morton", "Moselle", "Moss", "Moss Point", "Mound Bayou", "Mount Olive", "Mount Pleasant", "Myrtle", NaN, "Natchez", "Neely", "Nesbit", "Neshoba", "Nettleton", "New Albany", "New Augusta", "New Hebron", "Newton", "Nicholson", "North Gulfport", "North Tunica", "Noxapater", "Oak Vale", "Oakland", "Ocean Springs", "Okolona", "Old Houlka", "Olive Branch", "Orange Grove", "Osyka", "Ovett", "Oxford", "Pachuta", "Paden", "Paris", "Pascagoula", "Pass Christian", "Pattison", "Paulding", "Pearl", "Pearlington", "Pelahatchie", "Perkinston", "Petal", "Pheba", "Philadelphia", "Philipp", "Picayune", "Pickens", "Pinola", "Pittsboro", "Plantersville", "Pleasant Grove", "Polkville", "Pontotoc", "Pope", "Poplarville", "Port Gibson", "Porterville", "Potts Camp", "Prairie", "Prairie Point", "Prentiss", "Preston", "Pulaski", "Purvis", "Quitman", "Raleigh", "Randolph", "Raymond", "Red Banks", "Red Lick", "Redwood", "Reform", "Richland", "Richton", "Ridgeland", "Rienzi", "Ripley", "Robinsonville", "Rolling Fork", "Rose Hill", "Rosedale", "Roxie", "Ruleville", "Rural Adams", "Rural Alcorn", "Rural Amite", "Rural Attala", "Rural Benton", "Rural Bolivar", "Rural Calhoun", "Rural Carroll", "Rural Chickasaw", "Rural Choctaw", "Rural Claiborne", "Rural Clarke", "Rural Clay", "Rural Coahoma", "Rural Copiah", "Rural Covington", "Rural DeSoto", "Rural Forrest", "Rural Franklin", "Rural George", "Rural Greene", "Rural Grenada", "Rural Hancock", "Rural Harrison", "Rural Hinds", "Rural Holmes", "Rural Humphreys", "Rural Issaquena", "Rural Itawamba", "Rural Jackson", "Rural Jasper", "Rural Jefferson", "Rural Jefferson Davis", "Rural Jones", "Rural Kemper", "Rural Lafayette", "Rural Lamar", "Rural Lauderdale", "Rural Lawrence", "Rural Leake", "Rural Lee", "Rural Leflore", "Rural Lincoln", "Rural Lowndes", "Rural Madison", "Rural Marion", "Rural Marshall", "Rural Monroe", "Rural Montgomery", "Rural Neshoba", "Rural Newton", "Rural Noxubee", "Rural Oktibbeha", "Rural Panola", "Rural Pearl River", "Rural Perry", "Rural Pike", "Rural Pontotoc", "Rural Prentiss", "Rural Quitman", "Rural Rankin", "Rural Scott", "Rural Sharkey", "Rural Simpson", "Rural Smith", "Rural Stone", "Rural Sunflower", "Rural Tallahatchie", "Rural Tate", "Rural Tippah", "Rural Tishomingo", "Rural Tunica", "Rural Union", "Rural Walthall", "Rural Warren", "Rural Washington", "Rural Wayne", "Rural Webster", "Rural Wilkinson", "Rural Winston", "Rural Yalobusha", "Rural Yazoo", "Ruth", "Sallis", "Saltillo", "Sandersville", "Sandy Hook", "Sarah", "Sardis", "Satartia", "Saucier", "Schlater", "Scooba", "Sebastopol", "Seminary", "Senatobia", "Shannon", "Shaw", "Shelby", "Sherman", "Shivers", "Shubuta", "Shuqualak", "Sibley", "Sidon", "Silver Creek", "Smithville", "Sontag", "Soso", "Southaven", "Star", "Starkville", "Steens", "Stennis Space Center", "Stewart", "Stringer", "Sturgis", "Summit", "Sumrall", "Sylvarena", "Taylor", "Taylorsville", "Tchula", "Terry", "Thompson", "Tillatoba", "Tiplersville", "Tishomingo", "Toccopola", "Toomsuba", "Town Of Walls", "Tunica", "Tupelo", "Tutwiler", "Tylertown", "Union", "Union Church", "University", "Utica", "Vaiden", "Vancleave", "Vardaman", "Vaughan", "Verona", "Vicksburg", "Victoria", "Walnut", "Walnut Grove", "Water Valley", "Waveland", "Waynesboro", "Weir", "Wesson", "West", "West Point", "Wheeler", "Wiggins", "Winona", "Woodland", "Woodville", "Yazoo City", "Zama"],
                "datasets": [
                    {
                        "label": "Not Speeding Involved",
                        "data": [8.0, 61.0, 7.0, 4.0, 1.0, 89.0, 1.0, 1.0, 2.0, 5.0, 3.0, 0.0, 48.0, 14.0, 183.0, 84.0, 35.0, 3.0, 0.0, 5.0, 15.0, 1.0, 2.0, 9.0, 19.0, 1.0, 468.0, 8.0, 13.0, 19.0, 5.0, 1.0, 87.0, 6.0, 285.0, 3.0, 145.0, 9.0, 22.0, 12.0, 4.0, 7.0, 11.0, 29.0, 103.0, 10.0, 12.0, 163.0, 28.0, 3.0, 65.0, 3.0, 3.0, 0.0, 18.0, 4.0, 22.0, 1.0, 8.0, 227.0, 3.0, 130.0, 138.0, 2.0, 18.0, 70.0, 1.0, 72.0, 568.0, 19.0, 5.0, 164.0, 18.0, 1.0, 3.0, 1.0, 1.0, 5.0, 58.0, 121.0, 4.0, 1.0, 3.0, 0.0, 12.0, 14.0, 1.0, 15.0, 19.0, 0.0, 2.0, 3.0, 1.0, 1.0, 3.0, 6.0, 22.0, 2.0, 17.0, 8.0, 56.0, 3.0, 5.0, 2.0, 4.0, 15.0, 7.0, 7.0, 4.0, 8.0, 52.0, 251.0, 58.0, 7.0, 1.0, 49.0, 3.0, 1.0, 110.0, 3.0, 3.0, 14.0, 1.0, 1.0, 3.0, 396.0, 162.0, 3.0, 147.0, 1293.0, 6.0, 1.0, 4.0, 6.0, 982.0, 75.0, 13.0, 7.0, 92.0, 0.0, 2.0, 9.0, 6.0, 0.0, 78.0, 224.0, 13.0, 3.0, 53.0, 1.0, 16.0, 45.0, 2280.0, 1.0, 1.0, 5.0, 30.0, 3.0, 67.0, 4.0, 1.0, 4.0, 10.0, 5.0, 5.0, 408.0, 9.0, 1.0, 1.0, 5.0, 30.0, 5.0, 104.0, 3.0, 3.0, 74.0, 25.0, 12.0, 2.0, 3.0, 104.0, 1.0, 146.0, 106.0, 32.0, 9.0, 7.0, 11.0, 6.0, 8.0, 1.0, 3.0, 154.0, 2.0, 5.0, 2.0, 3.0, 1.0, 2.0, 55.0, 458.0, 4.0, 1.0, 1.0, 9.0, 4.0, 29.0, 4.0, 3.0, 3.0, 33.0, 7.0, 1.0, 175.0, 3.0, 21.0, 15.0, 5.0, 11.0, 212.0, 1.0, 6.0, 4.0, 26.0, 110.0, 9.0, 3.0, 24.0, 2.0, 2.0, 3.0, 9.0, 1.0, 16.0, 206.0, 13.0, 2.0, 402.0, 1.0, 7.0, 3.0, 327.0, 2.0, 0.0, 1.0, 263.0, 75.0, 14.0, 1.0, 236.0, 7.0, 25.0, 15.0, 98.0, 3.0, 94.0, 2.0, 199.0, 5.0, 2.0, 4.0, 4.0, 1.0, 2.0, 108.0, 12.0, 30.0, 86.0, 3.0, 2.0, 7.0, 2.0, 2.0, 2.0, 1.0, 19.0, 27.0, 8.0, 2.0, 31.0, 8.0, 1.0, 0.0, 1.0, 92.0, 2.0, 273.0, 2.0, 62.0, 44.0, 3.0, 1.0, 2.0, 9.0, 18.0, 52.0, 82.0, 46.0, 48.0, 35.0, 64.0, 47.0, 45.0, 58.0, 36.0, 39.0, 71.0, 48.0, 47.0, 81.0, 103.0, 185.0, 90.0, 33.0, 180.0, 23.0, 91.0, 139.0, 199.0, 166.0, 62.0, 27.0, 3.0, 112.0, 388.0, 104.0, 55.0, 33.0, 132.0, 31.0, 68.0, 171.0, 189.0, 35.0, 72.0, 189.0, 37.0, 81.0, 161.0, 154.0, 72.0, 113.0, 103.0, 20.0, 144.0, 79.0, 19.0, 113.0, 109.0, 129.0, 52.0, 133.0, 100.0, 55.0, 10.0, 244.0, 80.0, 11.0, 56.0, 32.0, 47.0, 73.0, 28.0, 69.0, 63.0, 52.0, 52.0, 114.0, 77.0, 101.0, 69.0, 28.0, 16.0, 51.0, 23.0, 22.0, 47.0, 3.0, 9.0, 40.0, 8.0, 1.0, 5.0, 42.0, 4.0, 40.0, 2.0, 7.0, 4.0, 5.0, 101.0, 29.0, 1.0, 4.0, 12.0, 1.0, 3.0, 17.0, 1.0, 3.0, 4.0, 7.0, 1.0, 5.0, 630.0, 2.0, 533.0, 1.0, 2.0, 0.0, 6.0, 1.0, 51.0, 20.0, 2.0, 2.0, 4.0, 0.0, 35.0, 0.0, 6.0, 1.0, 1.0, 1.0, 1.0, 26.0, 40.0, 812.0, 2.0, 29.0, 3.0, 8.0, 2.0, 15.0, 6.0, 2.0, 15.0, 6.0, 56.0, 290.0, 4.0, 17.0, 2.0, 19.0, 93.0, 93.0, 4.0, 14.0, 5.0, 100.0, 1.0, 92.0, 25.0, 3.0, 32.0, 91.0, 2.0],
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    },
                    {
                        "label": "Speeding Involved",
                        "data": [2.0, 7.0, 0.0, 0.0, 0.0, 15.0, 0.0, 1.0, 0.0, 0.0, 0.0, 2.0, 10.0, 10.0, 22.0, 13.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 81.0, 0.0, 0.0, 3.0, 2.0, 0.0, 8.0, 0.0, 18.0, 2.0, 19.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 6.0, 0.0, 2.0, 6.0, 8.0, 0.0, 3.0, 1.0, 0.0, 1.0, 0.0, 0.0, 7.0, 1.0, 0.0, 9.0, 1.0, 17.0, 15.0, 6.0, 2.0, 5.0, 0.0, 2.0, 38.0, 4.0, 1.0, 25.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.0, 3.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 4.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 7.0, 0.0, 2.0, 3.0, 13.0, 6.0, 1.0, 0.0, 2.0, 0.0, 0.0, 12.0, 0.0, 2.0, 2.0, 0.0, 1.0, 0.0, 26.0, 10.0, 0.0, 19.0, 118.0, 0.0, 7.0, 0.0, 0.0, 47.0, 6.0, 1.0, 0.0, 10.0, 1.0, 1.0, 2.0, 0.0, 3.0, 3.0, 11.0, 8.0, 0.0, 3.0, 0.0, 2.0, 6.0, 176.0, 1.0, 0.0, 1.0, 7.0, 0.0, 2.0, 2.0, 0.0, 2.0, 5.0, 0.0, 0.0, 22.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 11.0, 0.0, 0.0, 6.0, 3.0, 2.0, 0.0, 0.0, 2.0, 0.0, 5.0, 6.0, 6.0, 1.0, 1.0, 0.0, 2.0, 0.0, 1.0, 0.0, 33.0, 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 62.0, 0.0, 0.0, 0.0, 4.0, 0.0, 0.0, 1.0, 0.0, 0.0, 5.0, 1.0, 1.0, 17.0, 6.0, 0.0, 0.0, 2.0, 0.0, 16.0, 0.0, 3.0, 0.0, 5.0, 7.0, 2.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 21.0, 1.0, 0.0, 40.0, 0.0, 0.0, 0.0, 27.0, 0.0, 1.0, 0.0, 11.0, 15.0, 0.0, 0.0, 10.0, 1.0, 2.0, 4.0, 4.0, 0.0, 8.0, 0.0, 20.0, 0.0, 1.0, 5.0, 0.0, 0.0, 0.0, 1.0, 1.0, 18.0, 2.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 1.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 1.0, 0.0, 18.0, 0.0, 30.0, 1.0, 2.0, 8.0, 0.0, 0.0, 0.0, 0.0, 2.0, 4.0, 13.0, 0.0, 4.0, 4.0, 5.0, 3.0, 2.0, 3.0, 3.0, 3.0, 6.0, 6.0, 0.0, 7.0, 9.0, 51.0, 8.0, 4.0, 23.0, 12.0, 5.0, 8.0, 40.0, 8.0, 5.0, 3.0, 0.0, 7.0, 100.0, 14.0, 9.0, 4.0, 30.0, 2.0, 12.0, 10.0, 38.0, 0.0, 3.0, 20.0, 0.0, 11.0, 16.0, 33.0, 5.0, 18.0, 17.0, 4.0, 12.0, 6.0, 0.0, 18.0, 18.0, 21.0, 0.0, 19.0, 6.0, 7.0, 5.0, 44.0, 14.0, 0.0, 17.0, 5.0, 10.0, 13.0, 2.0, 11.0, 4.0, 1.0, 14.0, 4.0, 7.0, 13.0, 2.0, 7.0, 6.0, 4.0, 0.0, 2.0, 4.0, 1.0, 1.0, 10.0, 0.0, 0.0, 0.0, 7.0, 0.0, 11.0, 0.0, 0.0, 2.0, 0.0, 3.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 67.0, 0.0, 30.0, 0.0, 0.0, 2.0, 1.0, 0.0, 5.0, 1.0, 0.0, 1.0, 0.0, 1.0, 5.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 4.0, 42.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 3.0, 0.0, 3.0, 48.0, 2.0, 2.0, 0.0, 1.0, 8.0, 11.0, 0.0, 6.0, 0.0, 7.0, 0.0, 11.0, 1.0, 0.0, 2.0, 7.0, 0.0],
                        "borderColor": "rgba(255, 99, 132, 1)",
                        "backgroundColor": "rgba(255, 99, 132, 0.2)"
                    }
                ]
            };
            
            export default dataInjuries;