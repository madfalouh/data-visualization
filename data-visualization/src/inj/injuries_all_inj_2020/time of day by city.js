const dataInjuries = {
                "labels": ["Abbeville", "Aberdeen", "Ackerman", "Alcorn State University", "Alligator", "Amory", "Anguilla", "Arkabutla", "Artesia", "Ashland", "Avalon", "Bailey", "Baldwyn", "Bassfield", "Batesville", "Bay Saint Louis", "Bay Springs", "Beaumont", "Beauregard", "Becker", "Belmont", "Belzoni", "Benoit", "Benton", "Bentonia", "Big Creek", "Biloxi", "Blue Mountain", "Blue Springs", "Bogue Chitto", "Bolton", "Bond", "Booneville", "Boyle", "Brandon", "Braxton", "Brookhaven", "Brooklyn", "Brooksville", "Bruce", "Buckatunna", "Bude", "Burnsville", "Byhalia", "Byram", "Caledonia", "Calhoun City", "Canton", "Carriere", "Carrollton", "Carthage", "Cary", "Cascilla", "Cedar Bluff", "Centreville", "Chalybeate", "Charleston", "Chunky", "Clara", "Clarksdale", "Clermont Harbor", "Cleveland", "Clinton", "Coffeeville", "Coldwater", "Collins", "Collinsville", "Columbia", "Columbus", "Como", "Conehatta", "Corinth", "Courtland", "Crawford", "Crenshaw", "Crosby", "Crowder", "Cruger", "Crystal Springs", "D'Iberville", "D'Lo", "Daleville", "De Lisle", "De Soto", "Decatur", "Dekalb", "Dennis", "Derma", "Diamondhead", "Doddsville", "Drew", "Duck Hill", "Dumas", "Duncan", "Dundee", "Durant", "Ecru", "Eden", "Edwards", "Elliott", "Ellisville", "Enterprise", "Ethel", "Etta", "Eucutta", "Eupora", "Falkner", "Fayette", "Fernwood", "Flora", "Florence", "Flowood", "Forest", "Foxworth", "French Camp", "Fulton", "Gallman", "Gattman", "Gautier", "Georgetown", "Glens", "Gloster", "Golden", "Goodman", "Gore Springs", "Greenville", "Greenwood", "Greenwood Springs", "Grenada", "Gulfport", "Guntown", "Hamilton", "Harrisville", "Hatley", "Hattiesburg", "Hazlehurst", "Heidelberg", "Hermanville", "Hernando", "Hickory", "Hickory Flat", "Holcomb", "Hollandale", "Holly Bluff", "Holly Springs", "Horn Lake", "Houston", "Hurley", "Indianola", "Isola", "Itta Bena", "Iuka", "Jackson", "Jayess", "Keesler Air Force Base", "Kilmichael", "Kiln", "Kokomo", "Kosciusko", "Kossuth", "Lafayette Springs", "Lake", "Lake Cormorant", "Lakeshore", "Lauderdale", "Laurel", "Leakesville", "Learned", "Leflore", "Leland", "Lexington", "Liberty", "Long Beach", "Lorman", "Louin", "Louisville", "Lucedale", "Lumberton", "Lyon", "Maben", "Macon", "Madden", "Madison", "Magee", "Magnolia", "Mantachie", "Marion", "Marks", "Mathiston", "McAdams", "McCall Creek", "McCarley", "McComb", "McCool", "McHenry", "McLain", "McLaurin", "McNeill", "Meadville", "Mendenhall", "Meridian", "Merigold", "Michigan City", "Minter City", "Mississippi State", "Mize", "Monticello", "Mooreville", "Moorhead", "Morgan City", "Morton", "Moselle", "Moss", "Moss Point", "Mound Bayou", "Mount Olive", "Mount Pleasant", "Myrtle", "Natchez", "Neely", "Nesbit", "Neshoba", "Nettleton", "New Albany", "New Augusta", "New Hebron", "Newton", "Nicholson", "North Gulfport", "North Tunica", "Noxapater", "Oak Vale", "Oakland", "Ocean Springs", "Okolona", "Old Houlka", "Olive Branch", "Orange Grove", "Osyka", "Ovett", "Oxford", "Pachuta", "Paden", "Paris", "Pascagoula", "Pass Christian", "Pattison", "Paulding", "Pearl", "Pearlington", "Pelahatchie", "Perkinston", "Petal", "Pheba", "Philadelphia", "Philipp", "Picayune", "Pickens", "Pinola", "Pittsboro", "Plantersville", "Pleasant Grove", "Polkville", "Pontotoc", "Pope", "Poplarville", "Port Gibson", "Porterville", "Potts Camp", "Prairie", "Prairie Point", "Prentiss", "Preston", "Pulaski", "Purvis", "Quitman", "Raleigh", "Randolph", "Raymond", "Red Banks", "Red Lick", "Redwood", "Reform", "Richland", "Richton", "Ridgeland", "Rienzi", "Ripley", "Robinsonville", "Rolling Fork", "Rose Hill", "Rosedale", "Roxie", "Ruleville", "Rural Adams", "Rural Alcorn", "Rural Amite", "Rural Attala", "Rural Benton", "Rural Bolivar", "Rural Calhoun", "Rural Carroll", "Rural Chickasaw", "Rural Choctaw", "Rural Claiborne", "Rural Clarke", "Rural Clay", "Rural Coahoma", "Rural Copiah", "Rural Covington", "Rural DeSoto", "Rural Forrest", "Rural Franklin", "Rural George", "Rural Greene", "Rural Grenada", "Rural Hancock", "Rural Harrison", "Rural Hinds", "Rural Holmes", "Rural Humphreys", "Rural Issaquena", "Rural Itawamba", "Rural Jackson", "Rural Jasper", "Rural Jefferson", "Rural Jefferson Davis", "Rural Jones", "Rural Kemper", "Rural Lafayette", "Rural Lamar", "Rural Lauderdale", "Rural Lawrence", "Rural Leake", "Rural Lee", "Rural Leflore", "Rural Lincoln", "Rural Lowndes", "Rural Madison", "Rural Marion", "Rural Marshall", "Rural Monroe", "Rural Montgomery", "Rural Neshoba", "Rural Newton", "Rural Noxubee", "Rural Oktibbeha", "Rural Panola", "Rural Pearl River", "Rural Perry", "Rural Pike", "Rural Pontotoc", "Rural Prentiss", "Rural Quitman", "Rural Rankin", "Rural Scott", "Rural Sharkey", "Rural Simpson", "Rural Smith", "Rural Stone", "Rural Sunflower", "Rural Tallahatchie", "Rural Tate", "Rural Tippah", "Rural Tishomingo", "Rural Tunica", "Rural Union", "Rural Walthall", "Rural Warren", "Rural Washington", "Rural Wayne", "Rural Webster", "Rural Wilkinson", "Rural Winston", "Rural Yalobusha", "Rural Yazoo", "Ruth", "Sallis", "Saltillo", "Sandersville", "Sandy Hook", "Sarah", "Sardis", "Satartia", "Saucier", "Schlater", "Scooba", "Sebastopol", "Seminary", "Senatobia", "Shannon", "Shaw", "Shelby", "Sherman", "Shivers", "Shubuta", "Shuqualak", "Sibley", "Sidon", "Silver Creek", "Smithville", "Sontag", "Soso", "Southaven", "Star", "Starkville", "Steens", "Stennis Space Center", "Stewart", "Stringer", "Sturgis", "Summit", "Sumrall", "Sylvarena", "Taylor", "Taylorsville", "Tchula", "Terry", "Thompson", "Tillatoba", "Tiplersville", "Tishomingo", "Toccopola", "Toomsuba", "Town Of Walls", "Tunica", "Tupelo", "Tutwiler", "Tylertown", "Union", "Union Church", "University", "Utica", "Vaiden", "Vancleave", "Vardaman", "Vaughan", "Verona", "Vicksburg", "Victoria", "Walnut", "Walnut Grove", "Water Valley", "Waveland", "Waynesboro", "Weir", "Wesson", "West", "West Point", "Wheeler", "Wiggins", "Winona", "Woodland", "Woodville", "Yazoo City", "Zama", NaN],
                "datasets": [
                    {
                        "label": "12:00 PM to 12:59 PM",
                        "data": [4.0, 7.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 4.0, 0.0, 16.0, 5.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 33.0, 0.0, 2.0, 2.0, 0.0, 1.0, 10.0, 0.0, 26.0, 0.0, 18.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 17.0, 0.0, 3.0, 10.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 1.0, 0.0, 5.0, 0.0, 0.0, 13.0, 0.0, 7.0, 8.0, 0.0, 0.0, 1.0, 0.0, 3.0, 43.0, 0.0, 0.0, 13.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 15.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 2.0, 7.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 4.0, 0.0, 0.0, 0.0, 3.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 3.0, 12.0, 13.0, 0.0, 0.0, 2.0, 0.0, 0.0, 6.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 38.0, 12.0, 0.0, 18.0, 136.0, 0.0, 0.0, 1.0, 0.0, 103.0, 1.0, 1.0, 0.0, 9.0, 0.0, 0.0, 1.0, 0.0, 0.0, 3.0, 21.0, 0.0, 0.0, 7.0, 0.0, 0.0, 4.0, 114.0, 0.0, 0.0, 3.0, 4.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 52.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 11.0, 0.0, 1.0, 3.0, 2.0, 1.0, 0.0, 0.0, 0.0, 0.0, 12.0, 8.0, 5.0, 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 8.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 35.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 17.0, 1.0, 4.0, 0.0, 0.0, 24.0, 0.0, 0.0, 1.0, 1.0, 7.0, 1.0, 0.0, 3.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 15.0, 0.0, 0.0, 34.0, 0.0, 0.0, 1.0, 32.0, 0.0, 0.0, 0.0, 17.0, 3.0, 0.0, 0.0, 16.0, 0.0, 2.0, 2.0, 16.0, 0.0, 16.0, 0.0, 13.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0, 3.0, 13.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 4.0, 4.0, 0.0, 0.0, 5.0, 1.0, 0.0, 0.0, 1.0, 8.0, 0.0, 17.0, 0.0, 5.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 2.0, 2.0, 0.0, 2.0, 2.0, 4.0, 5.0, 3.0, 7.0, 4.0, 0.0, 3.0, 0.0, 3.0, 1.0, 4.0, 14.0, 6.0, 1.0, 7.0, 4.0, 2.0, 4.0, 12.0, 14.0, 1.0, 1.0, 1.0, 8.0, 40.0, 4.0, 4.0, 1.0, 12.0, 2.0, 6.0, 6.0, 14.0, 0.0, 0.0, 8.0, 3.0, 2.0, 10.0, 4.0, 5.0, 6.0, 8.0, 0.0, 13.0, 3.0, 1.0, 2.0, 5.0, 8.0, 4.0, 5.0, 2.0, 7.0, 0.0, 11.0, 6.0, 0.0, 3.0, 5.0, 5.0, 1.0, 6.0, 2.0, 6.0, 5.0, 2.0, 9.0, 7.0, 6.0, 3.0, 0.0, 1.0, 0.0, 1.0, 3.0, 2.0, 0.0, 0.0, 8.0, 3.0, 0.0, 0.0, 2.0, 1.0, 3.0, 0.0, 0.0, 2.0, 1.0, 5.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 59.0, 0.0, 66.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1.0, 72.0, 0.0, 3.0, 1.0, 0.0, 2.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 19.0, 0.0, 0.0, 0.0, 1.0, 7.0, 4.0, 0.0, 1.0, 2.0, 7.0, 0.0, 9.0, 0.0, 0.0, 2.0, 7.0, 0.0, 0.0],
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    },
                    {
                        "label": "3:00 PM to 3:59 PM",
                        "data": [2.0, 2.0, 0.0, 2.0, 0.0, 11.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 2.0, 7.0, 17.0, 6.0, 3.0, 2.0, 0.0, 0.0, 2.0, 0.0, 0.0, 1.0, 1.0, 0.0, 31.0, 0.0, 0.0, 0.0, 2.0, 0.0, 6.0, 0.0, 25.0, 0.0, 18.0, 2.0, 1.0, 1.0, 0.0, 0.0, 0.0, 8.0, 2.0, 1.0, 0.0, 10.0, 2.0, 0.0, 13.0, 0.0, 0.0, 0.0, 2.0, 0.0, 4.0, 0.0, 0.0, 14.0, 0.0, 3.0, 8.0, 0.0, 0.0, 11.0, 0.0, 0.0, 60.0, 0.0, 0.0, 18.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 3.0, 10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 1.0, 3.0, 27.0, 5.0, 1.0, 0.0, 12.0, 0.0, 0.0, 20.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 35.0, 18.0, 0.0, 14.0, 159.0, 2.0, 1.0, 0.0, 0.0, 88.0, 6.0, 1.0, 0.0, 9.0, 0.0, 1.0, 0.0, 3.0, 0.0, 5.0, 26.0, 2.0, 0.0, 4.0, 0.0, 0.0, 2.0, 218.0, 0.0, 0.0, 0.0, 5.0, 2.0, 4.0, 0.0, 0.0, 1.0, 1.0, 3.0, 1.0, 55.0, 0.0, 0.0, 0.0, 4.0, 1.0, 0.0, 8.0, 0.0, 0.0, 6.0, 6.0, 0.0, 0.0, 0.0, 8.0, 0.0, 16.0, 9.0, 1.0, 3.0, 0.0, 0.0, 2.0, 1.0, 0.0, 0.0, 21.0, 0.0, 2.0, 0.0, 0.0, 0.0, 1.0, 2.0, 31.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 10.0, 0.0, 0.0, 0.0, 1.0, 14.0, 0.0, 0.0, 0.0, 0.0, 18.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 23.0, 1.0, 0.0, 53.0, 1.0, 0.0, 0.0, 25.0, 0.0, 0.0, 0.0, 23.0, 14.0, 0.0, 0.0, 25.0, 0.0, 2.0, 1.0, 19.0, 1.0, 10.0, 0.0, 21.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 12.0, 0.0, 5.0, 4.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 9.0, 1.0, 28.0, 1.0, 6.0, 3.0, 3.0, 0.0, 0.0, 1.0, 2.0, 4.0, 9.0, 4.0, 4.0, 1.0, 3.0, 1.0, 3.0, 1.0, 3.0, 5.0, 8.0, 2.0, 3.0, 3.0, 11.0, 20.0, 2.0, 4.0, 27.0, 3.0, 8.0, 7.0, 14.0, 13.0, 5.0, 3.0, 0.0, 1.0, 29.0, 6.0, 9.0, 2.0, 20.0, 1.0, 7.0, 17.0, 22.0, 4.0, 9.0, 15.0, 3.0, 6.0, 8.0, 19.0, 2.0, 2.0, 3.0, 1.0, 8.0, 4.0, 2.0, 16.0, 13.0, 12.0, 7.0, 12.0, 6.0, 3.0, 4.0, 23.0, 6.0, 2.0, 1.0, 0.0, 2.0, 5.0, 0.0, 8.0, 5.0, 6.0, 3.0, 11.0, 3.0, 3.0, 4.0, 1.0, 2.0, 4.0, 1.0, 1.0, 6.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 5.0, 0.0, 8.0, 0.0, 0.0, 0.0, 0.0, 10.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 63.0, 0.0, 52.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5.0, 1.0, 71.0, 0.0, 2.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 32.0, 0.0, 0.0, 0.0, 1.0, 12.0, 6.0, 0.0, 1.0, 0.0, 3.0, 0.0, 9.0, 1.0, 1.0, 1.0, 6.0, 0.0, 0.0],
                        "borderColor": "rgba(255, 99, 132, 1)",
                        "backgroundColor": "rgba(255, 99, 132, 0.2)"
                    }
                ]
            };
            
            export default dataInjuries;