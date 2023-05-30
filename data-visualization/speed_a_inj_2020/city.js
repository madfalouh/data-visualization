const dataInjuries = {
                "labels": ["Abbeville", "Aberdeen", "Ackerman", "Alcorn State University", "Amory", "Baldwyn", "Bassfield", "Batesville", "Bay Saint Louis", "Bay Springs", "Beaumont", "Belmont", "Belzoni", "Benton", "Bentonia", "Big Creek", "Biloxi", "Blue Springs", "Bogue Chitto", "Booneville", "Boyle", "Brandon", "Brookhaven", "Brooksville", "Bruce", "Burnsville", "Byhalia", "Byram", "Caledonia", "Calhoun City", "Canton", "Carriere", "Carthage", "Chalybeate", "Charleston", "Clara", "Clarksdale", "Clermont Harbor", "Cleveland", "Clinton", "Coldwater", "Collins", "Columbia", "Columbus", "Como", "Conehatta", "Corinth", "Courtland", "Crystal Springs", "D'Iberville", "Dekalb", "Derma", "Diamondhead", "Durant", "Ecru", "Eden", "Edwards", "Elliott", "Ellisville", "Ethel", "Eucutta", "Eupora", "Falkner", "Fernwood", "Florence", "Flowood", "Forest", "French Camp", "Fulton", "Gautier", "Gloster", "Gore Springs", "Greenville", "Greenwood", "Greenwood Springs", "Grenada", "Gulfport", "Guntown", "Hattiesburg", "Hazlehurst", "Hermanville", "Hernando", "Hickory", "Holcomb", "Holly Bluff", "Holly Springs", "Horn Lake", "Houston", "Indianola", "Isola", "Itta Bena", "Iuka", "Jackson", "Kilmichael", "Kiln", "Kosciusko", "Kossuth", "Lake Cormorant", "Laurel", "Leakesville", "Lexington", "Long Beach", "Lorman", "Louin", "Louisville", "Lucedale", "Lyon", "Macon", "Madison", "Magee", "Magnolia", "Marks", "Mathiston", "McComb", "McHenry", "McLain", "Mendenhall", "Meridian", "Merigold", "Michigan City", "Mississippi State", "Monticello", "Moorhead", "Morgan City", "Morton", "Moss", "Moss Point", "Mound Bayou", "Mount Olive", "Mount Pleasant", "Myrtle", "Natchez", "Nesbit", "Neshoba", "Nettleton", "New Albany", "New Hebron", "Newton", "Oak Vale", "Oakland", "Ocean Springs", "Olive Branch", "Oxford", "Pascagoula", "Pass Christian", "Pattison", "Pearl", "Pearlington", "Pelahatchie", "Perkinston", "Petal", "Philadelphia", "Philipp", "Picayune", "Pittsboro", "Plantersville", "Pleasant Grove", "Polkville", "Pontotoc", "Pope", "Poplarville", "Port Gibson", "Porterville", "Potts Camp", "Preston", "Pulaski", "Purvis", "Quitman", "Raleigh", "Raymond", "Red Banks", "Redwood", "Reform", "Richland", "Ridgeland", "Ripley", "Robinsonville", "Roxie", "Ruleville", "Rural Adams", "Rural Alcorn", "Rural Amite", "Rural Attala", "Rural Benton", "Rural Bolivar", "Rural Calhoun", "Rural Carroll", "Rural Chickasaw", "Rural Choctaw", "Rural Claiborne", "Rural Clarke", "Rural Clay", "Rural Coahoma", "Rural Copiah", "Rural Covington", "Rural DeSoto", "Rural Forrest", "Rural Franklin", "Rural George", "Rural Greene", "Rural Grenada", "Rural Hancock", "Rural Harrison", "Rural Hinds", "Rural Holmes", "Rural Humphreys", "Rural Itawamba", "Rural Jackson", "Rural Jasper", "Rural Jefferson", "Rural Jefferson Davis", "Rural Jones", "Rural Kemper", "Rural Lafayette", "Rural Lamar", "Rural Lauderdale", "Rural Lawrence", "Rural Leake", "Rural Lee", "Rural Leflore", "Rural Lincoln", "Rural Lowndes", "Rural Madison", "Rural Marion", "Rural Marshall", "Rural Monroe", "Rural Montgomery", "Rural Neshoba", "Rural Newton", "Rural Noxubee", "Rural Oktibbeha", "Rural Panola", "Rural Pearl River", "Rural Perry", "Rural Pike", "Rural Pontotoc", "Rural Prentiss", "Rural Quitman", "Rural Rankin", "Rural Scott", "Rural Sharkey", "Rural Simpson", "Rural Smith", "Rural Stone", "Rural Sunflower", "Rural Tallahatchie", "Rural Tate", "Rural Tippah", "Rural Tishomingo", "Rural Tunica", "Rural Union", "Rural Walthall", "Rural Warren", "Rural Washington", "Rural Wayne", "Rural Webster", "Rural Wilkinson", "Rural Winston", "Rural Yalobusha", "Rural Yazoo", "Sallis", "Saltillo", "Sandersville", "Sarah", "Sardis", "Satartia", "Saucier", "Sebastopol", "Senatobia", "Shannon", "Shelby", "Sherman", "Shuqualak", "Sidon", "Silver Creek", "Soso", "Southaven", "Starkville", "Stewart", "Stringer", "Summit", "Sumrall", "Sylvarena", "Tchula", "Terry", "Thompson", "Tishomingo", "Toomsuba", "Town Of Walls", "Tupelo", "Tylertown", "Utica", "Vaiden", "Verona", "Vicksburg", "Walnut", "Water Valley", "Waveland", "Waynesboro", "Wesson", "West", "West Point", "Wiggins", "Winona", "Woodland", "Woodville", "Yazoo City", "Zama"],
                "datasets": [
                    {
                        "label": "Not Speeding Involved",
                        "data": [1.0, 8.0, 1.0, 1.0, 5.0, 6.0, 2.0, 26.0, 10.0, 2.0, 2.0, 3.0, 1.0, 1.0, 1.0, 1.0, 17.0, 1.0, 3.0, 5.0, 1.0, 21.0, 19.0, 4.0, 2.0, 1.0, 2.0, 5.0, 4.0, 2.0, 12.0, 6.0, 12.0, 3.0, 0.0, 1.0, 14.0, 1.0, 9.0, 15.0, 5.0, 13.0, 1.0, 26.0, 3.0, 3.0, 16.0, 2.0, 5.0, 5.0, 4.0, 4.0, 1.0, 1.0, 6.0, 1.0, 4.0, 3.0, 4.0, 1.0, 2.0, 1.0, 1.0, 3.0, 4.0, 15.0, 8.0, 1.0, 1.0, 14.0, 2.0, 1.0, 22.0, 10.0, 1.0, 20.0, 57.0, 1.0, 42.0, 8.0, 1.0, 5.0, 0.0, 4.0, 0.0, 8.0, 9.0, 1.0, 2.0, 1.0, 0.0, 17.0, 167.0, 3.0, 2.0, 9.0, 0.0, 0.0, 25.0, 1.0, 7.0, 14.0, 2.0, 1.0, 5.0, 2.0, 1.0, 27.0, 3.0, 18.0, 7.0, 1.0, 1.0, 11.0, 1.0, 1.0, 6.0, 23.0, 1.0, 1.0, 0.0, 4.0, 1.0, 2.0, 4.0, 0.0, 8.0, 2.0, 5.0, 2.0, 1.0, 17.0, 1.0, 1.0, 2.0, 7.0, 1.0, 2.0, 1.0, 4.0, 18.0, 49.0, 20.0, 11.0, 5.0, 1.0, 35.0, 1.0, 8.0, 2.0, 14.0, 12.0, 1.0, 17.0, 0.0, 1.0, 1.0, 1.0, 13.0, 2.0, 3.0, 6.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 5.0, 2.0, 0.0, 1.0, 2.0, 9.0, 8.0, 9.0, 1.0, 8.0, 9.0, 21.0, 13.0, 3.0, 14.0, 19.0, 4.0, 10.0, 13.0, 11.0, 14.0, 7.0, 5.0, 10.0, 12.0, 7.0, 37.0, 13.0, 5.0, 38.0, 5.0, 22.0, 20.0, 17.0, 19.0, 10.0, 6.0, 21.0, 74.0, 16.0, 13.0, 3.0, 18.0, 9.0, 9.0, 25.0, 25.0, 5.0, 9.0, 44.0, 6.0, 10.0, 27.0, 23.0, 17.0, 28.0, 24.0, 4.0, 24.0, 23.0, 10.0, 15.0, 14.0, 20.0, 11.0, 17.0, 20.0, 10.0, 2.0, 22.0, 16.0, 5.0, 15.0, 6.0, 5.0, 19.0, 8.0, 15.0, 14.0, 13.0, 9.0, 25.0, 6.0, 20.0, 13.0, 1.0, 4.0, 2.0, 5.0, 1.0, 10.0, 2.0, 3.0, 1.0, 1.0, 9.0, 1.0, 5.0, 0.0, 16.0, 4.0, 1.0, 1.0, 9.0, 1.0, 1.0, 1.0, 19.0, 16.0, 0.0, 1.0, 4.0, 5.0, 1.0, 0.0, 4.0, 0.0, 1.0, 1.0, 1.0, 48.0, 1.0, 2.0, 4.0, 4.0, 11.0, 2.0, 4.0, 2.0, 9.0, 6.0, 3.0, 9.0, 9.0, 2.0, 1.0, 2.0, 19.0, 1.0],
                        "borderColor": "rgba(75, 192, 192, 1)",
                        "backgroundColor": "rgba(75, 192, 192, 0.2)"
                    },
                    {
                        "label": "Speeding Involved",
                        "data": [2.0, 0.0, 0.0, 0.0, 5.0, 1.0, 1.0, 6.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 3.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 2.0, 5.0, 0.0, 0.0, 2.0, 0.0, 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 4.0, 4.0, 0.0, 1.0, 1.0, 1.0, 3.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 7.0, 19.0, 0.0, 8.0, 1.0, 0.0, 2.0, 1.0, 2.0, 3.0, 0.0, 0.0, 2.0, 0.0, 0.0, 2.0, 1.0, 39.0, 0.0, 4.0, 2.0, 1.0, 1.0, 4.0, 1.0, 0.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 2.0, 2.0, 3.0, 0.0, 2.0, 10.0, 0.0, 0.0, 0.0, 7.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 1.0, 1.0, 3.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 2.0, 3.0, 0.0, 0.0, 0.0, 0.0, 3.0, 4.0, 2.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 3.0, 2.0, 0.0, 4.0, 4.0, 0.0, 0.0, 0.0, 0.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 4.0, 3.0, 0.0, 1.0, 0.0, 2.0, 1.0, 3.0, 0.0, 0.0, 2.0, 4.0, 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 2.0, 0.0, 0.0, 1.0, 12.0, 2.0, 3.0, 4.0, 1.0, 2.0, 1.0, 8.0, 0.0, 1.0, 1.0, 1.0, 5.0, 2.0, 1.0, 2.0, 8.0, 0.0, 5.0, 0.0, 6.0, 0.0, 1.0, 5.0, 0.0, 4.0, 7.0, 16.0, 3.0, 1.0, 5.0, 0.0, 2.0, 0.0, 0.0, 4.0, 3.0, 5.0, 0.0, 4.0, 2.0, 2.0, 0.0, 10.0, 3.0, 0.0, 6.0, 0.0, 1.0, 2.0, 2.0, 5.0, 1.0, 1.0, 6.0, 1.0, 0.0, 4.0, 0.0, 2.0, 5.0, 1.0, 0.0, 0.0, 3.0, 0.0, 3.0, 0.0, 0.0, 3.0, 0.0, 4.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 17.0, 6.0, 2.0, 1.0, 1.0, 0.0, 0.0, 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, 8.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 1.0, 2.0, 3.0, 1.0, 0.0, 3.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0],
                        "borderColor": "rgba(255, 99, 132, 1)",
                        "backgroundColor": "rgba(255, 99, 132, 0.2)"
                    }
                ]
            };
            
            export default dataInjuries;