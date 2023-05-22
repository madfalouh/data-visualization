const dataInjuries = {
                "labels": ["Abbeville", "Aberdeen", "Ackerman", "Alcorn State University", "Amory", "Baldwyn", "Bassfield", "Batesville", "Bay Saint Louis", "Bay Springs", "Beaumont", "Belmont", "Belzoni", "Benton", "Bentonia", "Big Creek", "Biloxi", "Blue Springs", "Bogue Chitto", "Booneville", "Boyle", "Brandon", "Brookhaven", "Brooksville", "Bruce", "Burnsville", "Byhalia", "Byram", "Caledonia", "Calhoun City", "Canton", "Carriere", "Carthage", "Chalybeate", "Charleston", "Clara", "Clarksdale", "Clermont Harbor", "Cleveland", "Clinton", "Coldwater", "Collins", "Columbia", "Columbus", "Como", "Conehatta", "Corinth", "Courtland", "Crystal Springs", "D'Iberville", "Dekalb", "Derma", "Diamondhead", "Durant", "Ecru", "Eden", "Edwards", "Elliott", "Ellisville", "Ethel", "Eucutta", "Eupora", "Falkner", "Fernwood", "Florence", "Flowood", "Forest", "French Camp", "Fulton", "Gautier", "Gloster", "Gore Springs", "Greenville", "Greenwood", "Greenwood Springs", "Grenada", "Gulfport", "Guntown", "Hattiesburg", "Hazlehurst", "Hermanville", "Hernando", "Hickory", "Holcomb", "Holly Bluff", "Holly Springs", "Horn Lake", "Houston", "Indianola", "Isola", "Itta Bena", "Iuka", "Jackson", "Kilmichael", "Kiln", "Kosciusko", "Kossuth", "Lake Cormorant", "Laurel", "Leakesville", "Lexington", "Long Beach", "Lorman", "Louin", "Louisville", "Lucedale", "Lyon", "Macon", "Madison", "Magee", "Magnolia", "Marks", "Mathiston", "McComb", "McHenry", "McLain", "Mendenhall", "Meridian", "Merigold", "Michigan City", "Mississippi State", "Monticello", "Moorhead", "Morgan City", "Morton", "Moss", "Moss Point", "Mound Bayou", "Mount Olive", "Mount Pleasant", "Myrtle", "Natchez", "Nesbit", "Neshoba", "Nettleton", "New Albany", "New Hebron", "Newton", "Oak Vale", "Oakland", "Ocean Springs", "Olive Branch", "Oxford", "Pascagoula", "Pass Christian", "Pattison", "Pearl", "Pearlington", "Pelahatchie", "Perkinston", "Petal", "Philadelphia", "Philipp", "Picayune", "Pittsboro", "Plantersville", "Pleasant Grove", "Polkville", "Pontotoc", "Pope", "Poplarville", "Port Gibson", "Porterville", "Potts Camp", "Preston", "Pulaski", "Purvis", "Quitman", "Raleigh", "Raymond", "Red Banks", "Redwood", "Reform", "Richland", "Ridgeland", "Ripley", "Robinsonville", "Roxie", "Ruleville", "Rural Adams", "Rural Alcorn", "Rural Amite", "Rural Attala", "Rural Benton", "Rural Bolivar", "Rural Calhoun", "Rural Carroll", "Rural Chickasaw", "Rural Choctaw", "Rural Claiborne", "Rural Clarke", "Rural Clay", "Rural Coahoma", "Rural Copiah", "Rural Covington", "Rural DeSoto", "Rural Forrest", "Rural Franklin", "Rural George", "Rural Greene", "Rural Grenada", "Rural Hancock", "Rural Harrison", "Rural Hinds", "Rural Holmes", "Rural Humphreys", "Rural Itawamba", "Rural Jackson", "Rural Jasper", "Rural Jefferson", "Rural Jefferson Davis", "Rural Jones", "Rural Kemper", "Rural Lafayette", "Rural Lamar", "Rural Lauderdale", "Rural Lawrence", "Rural Leake", "Rural Lee", "Rural Leflore", "Rural Lincoln", "Rural Lowndes", "Rural Madison", "Rural Marion", "Rural Marshall", "Rural Monroe", "Rural Montgomery", "Rural Neshoba", "Rural Newton", "Rural Noxubee", "Rural Oktibbeha", "Rural Panola", "Rural Pearl River", "Rural Perry", "Rural Pike", "Rural Pontotoc", "Rural Prentiss", "Rural Quitman", "Rural Rankin", "Rural Scott", "Rural Sharkey", "Rural Simpson", "Rural Smith", "Rural Stone", "Rural Sunflower", "Rural Tallahatchie", "Rural Tate", "Rural Tippah", "Rural Tishomingo", "Rural Tunica", "Rural Union", "Rural Walthall", "Rural Warren", "Rural Washington", "Rural Wayne", "Rural Webster", "Rural Wilkinson", "Rural Winston", "Rural Yalobusha", "Rural Yazoo", "Sallis", "Saltillo", "Sandersville", "Sarah", "Sardis", "Satartia", "Saucier", "Sebastopol", "Senatobia", "Shannon", "Shelby", "Sherman", "Shuqualak", "Sidon", "Silver Creek", "Soso", "Southaven", "Starkville", "Stewart", "Stringer", "Summit", "Sumrall", "Sylvarena", "Tchula", "Terry", "Thompson", "Tishomingo", "Toomsuba", "Town Of Walls", "Tupelo", "Tylertown", "Utica", "Vaiden", "Verona", "Vicksburg", "Walnut", "Water Valley", "Waveland", "Waynesboro", "Wesson", "West", "West Point", "Wiggins", "Winona", "Woodland", "Woodville", "Yazoo City", "Zama"],
                "datasets": [
                    {
                        "label": "16-20",
                        "data": [1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 3.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 3.0, 1.0, 2.0, 1.0, 1.0, 1.0, 6.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 3.0, 1.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 4.0, 1.0, 5.0, 0.0, 2.0, 1.0, 0.0, 2.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 2.0, 4.0, 2.0, 1.0, 0.0, 1.0, 0.0, 0.0, 3.0, 1.0, 0.0, 5.0, 10.0, 0.0, 7.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 2.0, 4.0, 26.0, 0.0, 2.0, 0.0, 0.0, 0.0, 5.0, 0.0, 1.0, 0.0, 0.0, 0.0, 2.0, 1.0, 0.0, 3.0, 0.0, 4.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 4.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 13.0, 7.0, 2.0, 2.0, 0.0, 7.0, 0.0, 2.0, 0.0, 5.0, 6.0, 0.0, 4.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 3.0, 0.0, 3.0, 0.0, 0.0, 5.0, 6.0, 3.0, 4.0, 0.0, 5.0, 1.0, 0.0, 2.0, 2.0, 0.0, 5.0, 0.0, 0.0, 1.0, 3.0, 3.0, 11.0, 4.0, 0.0, 8.0, 0.0, 7.0, 0.0, 4.0, 8.0, 2.0, 1.0, 2.0, 14.0, 3.0, 0.0, 0.0, 3.0, 3.0, 2.0, 3.0, 5.0, 0.0, 2.0, 11.0, 1.0, 2.0, 3.0, 12.0, 3.0, 3.0, 4.0, 3.0, 5.0, 1.0, 2.0, 0.0, 0.0, 2.0, 1.0, 4.0, 4.0, 3.0, 0.0, 4.0, 3.0, 0.0, 4.0, 0.0, 2.0, 4.0, 1.0, 4.0, 2.0, 1.0, 3.0, 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 2.0, 1.0, 1.0, 0.0, 1.0, 2.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 5.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 4.0, 0.0, 1.0, 0.0, 1.0, 2.0, 1.0, 1.0, 0.0, 2.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0, 2.0, 0.0],
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    },
                    {
                        "label": "21-24",
                        "data": [1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 2.0, 3.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 0.0, 2.0, 0.0, 1.0, 1.0, 5.0, 3.0, 0.0, 2.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 2.0, 2.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 3.0, 1.0, 0.0, 2.0, 6.0, 0.0, 4.0, 1.0, 0.0, 2.0, 0.0, 1.0, 0.0, 2.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 27.0, 1.0, 0.0, 3.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 2.0, 1.0, 1.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 4.0, 9.0, 2.0, 3.0, 1.0, 1.0, 3.0, 0.0, 0.0, 2.0, 3.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 4.0, 2.0, 1.0, 0.0, 1.0, 2.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 3.0, 2.0, 2.0, 7.0, 0.0, 3.0, 2.0, 2.0, 2.0, 0.0, 0.0, 4.0, 3.0, 3.0, 3.0, 0.0, 6.0, 0.0, 2.0, 4.0, 3.0, 1.0, 1.0, 5.0, 1.0, 2.0, 5.0, 8.0, 2.0, 6.0, 2.0, 0.0, 1.0, 2.0, 1.0, 4.0, 2.0, 3.0, 3.0, 3.0, 3.0, 1.0, 0.0, 3.0, 1.0, 0.0, 1.0, 0.0, 1.0, 2.0, 1.0, 3.0, 1.0, 1.0, 0.0, 3.0, 0.0, 2.0, 2.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 4.0, 0.0, 2.0, 0.0, 3.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 1.0, 6.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 2.0, 0.0, 1.0, 0.0, 0.0, 2.0, 0.0],
                        "borderColor": "rgba(255, 99, 132, 1)",
                        "backgroundColor": "rgba(255, 99, 132, 0.2)"
                    }
                ]
            };
            
            export default dataInjuries;