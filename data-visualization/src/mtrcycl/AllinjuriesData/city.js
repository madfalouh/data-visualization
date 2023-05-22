const dataInjuries = {
                "labels": ["Abbeville", "Aberdeen", "Ackerman", "Alcorn State University", "Alligator", "Amory", "Anguilla", "Arkabutla", "Artesia", "Ashland", "Avalon", "Bailey", "Baldwyn", "Bassfield", "Batesville", "Bay Saint Louis", "Bay Springs", "Beaumont", "Beauregard", "Becker", "Belmont", "Belzoni", "Benoit", "Benton", "Bentonia", "Big Creek", "Biloxi", "Blue Mountain", "Blue Springs", "Bogue Chitto", "Bolton", "Bond", "Booneville", "Boyle", "Brandon", "Braxton", "Brookhaven", "Brooklyn", "Brooksville", "Bruce", "Buckatunna", "Bude", "Burnsville", "Byhalia", "Byram", "Caledonia", "Calhoun City", "Canton", "Carriere", "Carrollton", "Carthage", "Cary", "Cascilla", "Cedar Bluff", "Centreville", "Chalybeate", "Charleston", "Chunky", "Clara", "Clarksdale", "Clermont Harbor", "Cleveland", "Clinton", "Coffeeville", "Coldwater", "Collins", "Collinsville", "Columbia", "Columbus", "Como", "Conehatta", "Corinth", "Courtland", "Crawford", "Crenshaw", "Crosby", "Crowder", "Cruger", "Crystal Springs", "D'Iberville", "D'Lo", "Daleville", "De Lisle", "De Soto", "Decatur", "Dekalb", "Dennis", "Derma", "Diamondhead", "Doddsville", "Drew", "Duck Hill", "Dumas", "Duncan", "Dundee", "Durant", "Ecru", "Eden", "Edwards", "Elliott", "Ellisville", "Enterprise", "Ethel", "Etta", "Eucutta", "Eupora", "Falkner", "Fayette", "Fernwood", "Flora", "Florence", "Flowood", "Forest", "Foxworth", "French Camp", "Fulton", "Gallman", "Gattman", "Gautier", "Georgetown", "Glens", "Gloster", "Golden", "Goodman", "Gore Springs", "Greenville", "Greenwood", "Greenwood Springs", "Grenada", "Gulfport", "Guntown", "Hamilton", "Harrisville", "Hatley", "Hattiesburg", "Hazlehurst", "Heidelberg", "Hermanville", "Hernando", "Hickory", "Hickory Flat", "Holcomb", "Hollandale", "Holly Bluff", "Holly Springs", "Horn Lake", "Houston", "Hurley", "Indianola", "Isola", "Itta Bena", "Iuka", "Jackson", "Jayess", "Keesler Air Force Base", "Kilmichael", "Kiln", "Kokomo", "Kosciusko", "Kossuth", "Lafayette Springs", "Lake", "Lake Cormorant", "Lakeshore", "Lauderdale", "Laurel", "Leakesville", "Learned", "Leflore", "Leland", "Lexington", "Liberty", "Long Beach", "Lorman", "Louin", "Louisville", "Lucedale", "Lumberton", "Lyon", "Maben", "Macon", "Madden", "Madison", "Magee", "Magnolia", "Mantachie", "Marion", "Marks", "Mathiston", "McAdams", "McCall Creek", "McCarley", "McComb", "McCool", "McHenry", "McLain", "McLaurin", "McNeill", "Meadville", "Mendenhall", "Meridian", "Merigold", "Michigan City", "Minter City", "Mississippi State", "Mize", "Monticello", "Mooreville", "Moorhead", "Morgan City", "Morton", "Moselle", "Moss", "Moss Point", "Mound Bayou", "Mount Olive", "Mount Pleasant", "Myrtle", NaN, "Natchez", "Neely", "Nesbit", "Neshoba", "Nettleton", "New Albany", "New Augusta", "New Hebron", "Newton", "Nicholson", "North Gulfport", "North Tunica", "Noxapater", "Oak Vale", "Oakland", "Ocean Springs", "Okolona", "Old Houlka", "Olive Branch", "Orange Grove", "Osyka", "Ovett", "Oxford", "Pachuta", "Paden", "Paris", "Pascagoula", "Pass Christian", "Pattison", "Paulding", "Pearl", "Pearlington", "Pelahatchie", "Perkinston", "Petal", "Pheba", "Philadelphia", "Philipp", "Picayune", "Pickens", "Pinola", "Pittsboro", "Plantersville", "Pleasant Grove", "Polkville", "Pontotoc", "Pope", "Poplarville", "Port Gibson", "Porterville", "Potts Camp", "Prairie", "Prairie Point", "Prentiss", "Preston", "Pulaski", "Purvis", "Quitman", "Raleigh", "Randolph", "Raymond", "Red Banks", "Red Lick", "Redwood", "Reform", "Richland", "Richton", "Ridgeland", "Rienzi", "Ripley", "Robinsonville", "Rolling Fork", "Rose Hill", "Rosedale", "Roxie", "Ruleville", "Rural Adams", "Rural Alcorn", "Rural Amite", "Rural Attala", "Rural Benton", "Rural Bolivar", "Rural Calhoun", "Rural Carroll", "Rural Chickasaw", "Rural Choctaw", "Rural Claiborne", "Rural Clarke", "Rural Clay", "Rural Coahoma", "Rural Copiah", "Rural Covington", "Rural DeSoto", "Rural Forrest", "Rural Franklin", "Rural George", "Rural Greene", "Rural Grenada", "Rural Hancock", "Rural Harrison", "Rural Hinds", "Rural Holmes", "Rural Humphreys", "Rural Issaquena", "Rural Itawamba", "Rural Jackson", "Rural Jasper", "Rural Jefferson", "Rural Jefferson Davis", "Rural Jones", "Rural Kemper", "Rural Lafayette", "Rural Lamar", "Rural Lauderdale", "Rural Lawrence", "Rural Leake", "Rural Lee", "Rural Leflore", "Rural Lincoln", "Rural Lowndes", "Rural Madison", "Rural Marion", "Rural Marshall", "Rural Monroe", "Rural Montgomery", "Rural Neshoba", "Rural Newton", "Rural Noxubee", "Rural Oktibbeha", "Rural Panola", "Rural Pearl River", "Rural Perry", "Rural Pike", "Rural Pontotoc", "Rural Prentiss", "Rural Quitman", "Rural Rankin", "Rural Scott", "Rural Sharkey", "Rural Simpson", "Rural Smith", "Rural Stone", "Rural Sunflower", "Rural Tallahatchie", "Rural Tate", "Rural Tippah", "Rural Tishomingo", "Rural Tunica", "Rural Union", "Rural Walthall", "Rural Warren", "Rural Washington", "Rural Wayne", "Rural Webster", "Rural Wilkinson", "Rural Winston", "Rural Yalobusha", "Rural Yazoo", "Ruth", "Sallis", "Saltillo", "Sandersville", "Sandy Hook", "Sarah", "Sardis", "Satartia", "Saucier", "Schlater", "Scooba", "Sebastopol", "Seminary", "Senatobia", "Shannon", "Shaw", "Shelby", "Sherman", "Shivers", "Shubuta", "Shuqualak", "Sibley", "Sidon", "Silver Creek", "Smithville", "Sontag", "Soso", "Southaven", "Star", "Starkville", "Steens", "Stennis Space Center", "Stewart", "Stringer", "Sturgis", "Summit", "Sumrall", "Sylvarena", "Taylor", "Taylorsville", "Tchula", "Terry", "Thompson", "Tillatoba", "Tiplersville", "Tishomingo", "Toccopola", "Toomsuba", "Town Of Walls", "Tunica", "Tupelo", "Tutwiler", "Tylertown", "Union", "Union Church", "University", "Utica", "Vaiden", "Vancleave", "Vardaman", "Vaughan", "Verona", "Vicksburg", "Victoria", "Walnut", "Walnut Grove", "Water Valley", "Waveland", "Waynesboro", "Weir", "Wesson", "West", "West Point", "Wheeler", "Wiggins", "Winona", "Woodland", "Woodville", "Yazoo City", "Zama"],
                "datasets": [
                    {
                        "label": "Motorcycle",
                        "data": [0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 3.0, 6.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 24.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 7.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 3.0, 0.0, 3.0, 2.0, 0.0, 1.0, 2.0, 1.0, 0.0, 9.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 1.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 4.0, 1.0, 0.0, 7.0, 50.0, 2.0, 1.0, 0.0, 0.0, 21.0, 1.0, 0.0, 0.0, 5.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.0, 11.0, 0.0, 0.0, 1.0, 0.0, 0.0, 3.0, 31.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 3.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 7.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 5.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 11.0, 1.0, 0.0, 5.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 8.0, 3.0, 0.0, 0.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 2.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 7.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 3.0, 1.0, 2.0, 1.0, 2.0, 8.0, 3.0, 0.0, 0.0, 0.0, 5.0, 20.0, 0.0, 0.0, 0.0, 5.0, 0.0, 2.0, 8.0, 8.0, 1.0, 1.0, 5.0, 0.0, 1.0, 3.0, 1.0, 1.0, 5.0, 1.0, 0.0, 2.0, 2.0, 0.0, 1.0, 3.0, 2.0, 0.0, 5.0, 1.0, 3.0, 0.0, 11.0, 1.0, 2.0, 4.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 0.0, 3.0, 1.0, 3.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10.0, 0.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 11.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 0.0, 0.0, 0.0, 0.0, 4.0, 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 2.0, 0.0, 0.0, 0.0, 1.0, 0.0],
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    },
                    {
                        "label": "Not Motorcycle/Not Applicable",
                        "data": [10.0, 68.0, 7.0, 4.0, 1.0, 98.0, 1.0, 2.0, 2.0, 5.0, 3.0, 2.0, 57.0, 24.0, 202.0, 91.0, 35.0, 4.0, 1.0, 5.0, 16.0, 1.0, 2.0, 9.0, 19.0, 1.0, 525.0, 8.0, 12.0, 21.0, 7.0, 1.0, 94.0, 6.0, 296.0, 5.0, 163.0, 11.0, 22.0, 11.0, 4.0, 7.0, 11.0, 37.0, 107.0, 10.0, 13.0, 169.0, 36.0, 3.0, 68.0, 4.0, 3.0, 1.0, 18.0, 4.0, 29.0, 2.0, 7.0, 233.0, 4.0, 144.0, 151.0, 8.0, 19.0, 73.0, 0.0, 74.0, 597.0, 23.0, 6.0, 184.0, 18.0, 1.0, 3.0, 1.0, 1.0, 5.0, 57.0, 125.0, 7.0, 1.0, 3.0, 1.0, 12.0, 13.0, 1.0, 16.0, 20.0, 1.0, 2.0, 3.0, 1.0, 1.0, 3.0, 6.0, 23.0, 2.0, 17.0, 12.0, 61.0, 3.0, 5.0, 2.0, 4.0, 14.0, 8.0, 14.0, 4.0, 10.0, 53.0, 263.0, 62.0, 8.0, 1.0, 51.0, 3.0, 1.0, 116.0, 3.0, 5.0, 16.0, 1.0, 2.0, 2.0, 418.0, 171.0, 3.0, 159.0, 1361.0, 4.0, 7.0, 4.0, 6.0, 1008.0, 80.0, 14.0, 7.0, 97.0, 1.0, 3.0, 10.0, 6.0, 3.0, 79.0, 224.0, 21.0, 3.0, 55.0, 1.0, 18.0, 48.0, 2425.0, 2.0, 1.0, 6.0, 36.0, 3.0, 69.0, 6.0, 1.0, 6.0, 15.0, 5.0, 5.0, 424.0, 10.0, 1.0, 1.0, 5.0, 31.0, 5.0, 111.0, 3.0, 3.0, 78.0, 28.0, 14.0, 2.0, 3.0, 106.0, 1.0, 147.0, 109.0, 36.0, 10.0, 8.0, 11.0, 8.0, 8.0, 2.0, 3.0, 184.0, 2.0, 5.0, 3.0, 3.0, 3.0, 2.0, 56.0, 513.0, 4.0, 1.0, 1.0, 13.0, 4.0, 29.0, 5.0, 3.0, 3.0, 37.0, 8.0, 2.0, 191.0, 9.0, 21.0, 15.0, 6.0, 11.0, 223.0, 1.0, 8.0, 3.0, 31.0, 116.0, 10.0, 3.0, 24.0, 3.0, 2.0, 3.0, 8.0, 1.0, 16.0, 216.0, 13.0, 2.0, 437.0, 1.0, 7.0, 3.0, 351.0, 2.0, 1.0, 1.0, 266.0, 87.0, 14.0, 1.0, 244.0, 8.0, 27.0, 16.0, 98.0, 3.0, 100.0, 2.0, 214.0, 5.0, 3.0, 9.0, 4.0, 1.0, 1.0, 108.0, 13.0, 47.0, 88.0, 3.0, 3.0, 7.0, 2.0, 2.0, 2.0, 2.0, 23.0, 26.0, 8.0, 2.0, 34.0, 8.0, 1.0, 1.0, 0.0, 108.0, 2.0, 296.0, 3.0, 64.0, 52.0, 3.0, 1.0, 2.0, 9.0, 20.0, 56.0, 91.0, 46.0, 52.0, 39.0, 69.0, 50.0, 47.0, 61.0, 39.0, 41.0, 77.0, 54.0, 47.0, 88.0, 112.0, 236.0, 94.0, 34.0, 202.0, 33.0, 95.0, 145.0, 231.0, 171.0, 67.0, 30.0, 3.0, 114.0, 468.0, 118.0, 64.0, 37.0, 157.0, 33.0, 78.0, 173.0, 219.0, 34.0, 74.0, 204.0, 37.0, 91.0, 174.0, 186.0, 76.0, 126.0, 119.0, 24.0, 154.0, 83.0, 19.0, 130.0, 124.0, 148.0, 52.0, 147.0, 105.0, 59.0, 15.0, 277.0, 93.0, 9.0, 69.0, 37.0, 57.0, 86.0, 29.0, 79.0, 65.0, 51.0, 66.0, 115.0, 83.0, 111.0, 70.0, 35.0, 22.0, 55.0, 23.0, 24.0, 51.0, 4.0, 10.0, 49.0, 8.0, 1.0, 5.0, 47.0, 4.0, 49.0, 2.0, 7.0, 6.0, 5.0, 104.0, 34.0, 1.0, 4.0, 12.0, 1.0, 3.0, 18.0, 1.0, 3.0, 4.0, 7.0, 1.0, 7.0, 687.0, 2.0, 559.0, 1.0, 2.0, 2.0, 7.0, 1.0, 56.0, 21.0, 2.0, 3.0, 4.0, 1.0, 39.0, 1.0, 6.0, 1.0, 1.0, 1.0, 1.0, 28.0, 44.0, 843.0, 2.0, 30.0, 3.0, 8.0, 3.0, 15.0, 6.0, 2.0, 18.0, 6.0, 59.0, 334.0, 6.0, 19.0, 2.0, 20.0, 97.0, 103.0, 4.0, 20.0, 5.0, 105.0, 1.0, 101.0, 26.0, 3.0, 34.0, 97.0, 2.0],
                        "borderColor": "rgba(255, 99, 132, 1)",
                        "backgroundColor": "rgba(255, 99, 132, 0.2)"
                    }
                ]
            };
            
            export default dataInjuries;