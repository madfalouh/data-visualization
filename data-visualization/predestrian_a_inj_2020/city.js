const dataInjuries = {
                "labels": ["Abbeville", "Aberdeen", "Ackerman", "Alcorn State University", "Amory", "Baldwyn", "Bassfield", "Batesville", "Bay Saint Louis", "Bay Springs", "Beaumont", "Belmont", "Belzoni", "Benton", "Bentonia", "Big Creek", "Biloxi", "Blue Springs", "Bogue Chitto", "Booneville", "Boyle", "Brandon", "Brookhaven", "Brooksville", "Bruce", "Burnsville", "Byhalia", "Byram", "Caledonia", "Calhoun City", "Canton", "Carriere", "Carthage", "Chalybeate", "Charleston", "Clara", "Clarksdale", "Clermont Harbor", "Cleveland", "Clinton", "Coldwater", "Collins", "Columbia", "Columbus", "Como", "Conehatta", "Corinth", "Courtland", "Crystal Springs", "D'Iberville", "Dekalb", "Derma", "Diamondhead", "Durant", "Ecru", "Eden", "Edwards", "Elliott", "Ellisville", "Ethel", "Eucutta", "Eupora", "Falkner", "Fernwood", "Florence", "Flowood", "Forest", "French Camp", "Fulton", "Gautier", "Gloster", "Gore Springs", "Greenville", "Greenwood", "Greenwood Springs", "Grenada", "Gulfport", "Guntown", "Hattiesburg", "Hazlehurst", "Hermanville", "Hernando", "Hickory", "Holcomb", "Holly Bluff", "Holly Springs", "Horn Lake", "Houston", "Indianola", "Isola", "Itta Bena", "Iuka", "Jackson", "Kilmichael", "Kiln", "Kosciusko", "Kossuth", "Lake Cormorant", "Laurel", "Leakesville", "Lexington", "Long Beach", "Lorman", "Louin", "Louisville", "Lucedale", "Lyon", "Macon", "Madison", "Magee", "Magnolia", "Marks", "Mathiston", "McComb", "McHenry", "McLain", "Mendenhall", "Meridian", "Merigold", "Michigan City", "Mississippi State", "Monticello", "Moorhead", "Morgan City", "Morton", "Moss", "Moss Point", "Mound Bayou", "Mount Olive", "Mount Pleasant", "Myrtle", "Natchez", "Nesbit", "Neshoba", "Nettleton", "New Albany", "New Hebron", "Newton", "Oak Vale", "Oakland", "Ocean Springs", "Olive Branch", "Oxford", "Pascagoula", "Pass Christian", "Pattison", "Pearl", "Pearlington", "Pelahatchie", "Perkinston", "Petal", "Philadelphia", "Philipp", "Picayune", "Pittsboro", "Plantersville", "Pleasant Grove", "Polkville", "Pontotoc", "Pope", "Poplarville", "Port Gibson", "Porterville", "Potts Camp", "Preston", "Pulaski", "Purvis", "Quitman", "Raleigh", "Raymond", "Red Banks", "Redwood", "Reform", "Richland", "Ridgeland", "Ripley", "Robinsonville", "Roxie", "Ruleville", "Rural Adams", "Rural Alcorn", "Rural Amite", "Rural Attala", "Rural Benton", "Rural Bolivar", "Rural Calhoun", "Rural Carroll", "Rural Chickasaw", "Rural Choctaw", "Rural Claiborne", "Rural Clarke", "Rural Clay", "Rural Coahoma", "Rural Copiah", "Rural Covington", "Rural DeSoto", "Rural Forrest", "Rural Franklin", "Rural George", "Rural Greene", "Rural Grenada", "Rural Hancock", "Rural Harrison", "Rural Hinds", "Rural Holmes", "Rural Humphreys", "Rural Itawamba", "Rural Jackson", "Rural Jasper", "Rural Jefferson", "Rural Jefferson Davis", "Rural Jones", "Rural Kemper", "Rural Lafayette", "Rural Lamar", "Rural Lauderdale", "Rural Lawrence", "Rural Leake", "Rural Lee", "Rural Leflore", "Rural Lincoln", "Rural Lowndes", "Rural Madison", "Rural Marion", "Rural Marshall", "Rural Monroe", "Rural Montgomery", "Rural Neshoba", "Rural Newton", "Rural Noxubee", "Rural Oktibbeha", "Rural Panola", "Rural Pearl River", "Rural Perry", "Rural Pike", "Rural Pontotoc", "Rural Prentiss", "Rural Quitman", "Rural Rankin", "Rural Scott", "Rural Sharkey", "Rural Simpson", "Rural Smith", "Rural Stone", "Rural Sunflower", "Rural Tallahatchie", "Rural Tate", "Rural Tippah", "Rural Tishomingo", "Rural Tunica", "Rural Union", "Rural Walthall", "Rural Warren", "Rural Washington", "Rural Wayne", "Rural Webster", "Rural Wilkinson", "Rural Winston", "Rural Yalobusha", "Rural Yazoo", "Sallis", "Saltillo", "Sandersville", "Sarah", "Sardis", "Satartia", "Saucier", "Sebastopol", "Senatobia", "Shannon", "Shelby", "Sherman", "Shuqualak", "Sidon", "Silver Creek", "Soso", "Southaven", "Starkville", "Stewart", "Stringer", "Summit", "Sumrall", "Sylvarena", "Tchula", "Terry", "Thompson", "Tishomingo", "Toomsuba", "Town Of Walls", "Tupelo", "Tylertown", "Utica", "Vaiden", "Verona", "Vicksburg", "Walnut", "Water Valley", "Waveland", "Waynesboro", "Wesson", "West", "West Point", "Wiggins", "Winona", "Woodland", "Woodville", "Yazoo City", "Zama"],
                "datasets": [
                    {
                        "label": "Non-Pedestrian/Not Applicable",
                        "data": [3, 8, 1, 1, 10, 7, 3, 32, 12, 2, 2, 3, 1, 1, 1, 1, 22, 1, 3, 8, 1, 21, 22, 4, 2, 1, 4, 10, 4, 2, 14, 6, 13, 3, 2, 1, 14, 1, 13, 19, 5, 14, 2, 27, 6, 4, 21, 2, 5, 5, 4, 4, 1, 1, 6, 1, 4, 5, 6, 1, 2, 1, 1, 3, 5, 16, 10, 1, 1, 15, 2, 1, 23, 11, 1, 27, 76, 1, 50, 9, 1, 7, 1, 6, 3, 8, 9, 3, 2, 1, 2, 18, 206, 3, 6, 11, 1, 1, 29, 2, 7, 15, 2, 1, 7, 4, 1, 27, 5, 20, 10, 1, 3, 21, 1, 1, 6, 30, 1, 1, 2, 4, 1, 2, 5, 1, 11, 2, 5, 2, 1, 19, 3, 1, 4, 10, 1, 2, 1, 4, 21, 53, 22, 12, 6, 1, 36, 2, 9, 3, 17, 14, 1, 21, 4, 1, 1, 1, 13, 3, 8, 6, 1, 1, 1, 1, 1, 2, 2, 6, 2, 1, 1, 6, 12, 8, 10, 1, 10, 10, 24, 13, 3, 16, 23, 4, 10, 13, 11, 15, 9, 7, 10, 12, 8, 49, 15, 8, 42, 6, 24, 21, 25, 19, 11, 7, 22, 79, 18, 14, 5, 26, 9, 14, 25, 31, 5, 10, 49, 6, 14, 34, 39, 20, 29, 29, 4, 26, 23, 10, 19, 17, 25, 11, 21, 22, 12, 2, 32, 19, 5, 21, 6, 6, 21, 10, 20, 15, 14, 15, 26, 6, 24, 13, 3, 9, 3, 5, 1, 13, 2, 6, 1, 1, 12, 1, 9, 1, 16, 5, 1, 1, 9, 1, 1, 2, 36, 22, 2, 2, 5, 5, 1, 1, 6, 1, 1, 1, 1, 56, 1, 2, 4, 6, 11, 2, 5, 4, 12, 7, 3, 12, 10, 2, 1, 3, 20, 1],
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    },
                    {
                        "label": "Data",
                        "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        "borderColor": "rgba(255, 99, 132, 1)",
                        "backgroundColor": "rgba(255, 99, 132, 0.2)"
                    }
                ]
            };
            
            export default dataInjuries;