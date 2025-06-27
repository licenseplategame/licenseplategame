// Complete structured dataset based on user's uploaded checklists

const data = {
  usStates: [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ],

  georgiaCounties: ["Appling", "Atkinson", "Bacon", "Baker", "Baldwin", "Banks", "Barrow", "Bartow", "Ben Hill", "Berrien", "Bibb", "Bleckley", "Brantley", "Brooks", "Bryan", "Bulloch", "Burke", "Butts", "Calhoun", "Camden", "Candler", "Carroll", "Catoosa", "Charlton", "Chatham", "Chattahoochee", "Chattooga", "Cherokee", "Clarke", "Clay", "Clayton", "Clinch", "Cobb", "Coffee", "Colquitt", "Columbia", "Cook", "Coweta", "Crawford", "Crisp", "Dade", "Dawson", "Decatur", "DeKalb", "Dodge", "Dooly", "Dougherty", "Douglas", "Early", "Echols", "Effingham", "Elbert", "Emanuel", "Evans", "Fannin", "Fayette", "Floyd", "Forsyth", "Franklin", "Fulton", "Gilmer", "Glascock", "Glynn", "Gordon", "Grady", "Greene", "Gwinnett", "Habersham", "Hall", "Hancock", "Haralson", "Harris", "Hart", "Heard", "Henry", "Houston", "Irwin", "Jackson", "Jasper", "Jeff Davis", "Jefferson", "Jenkins", "Johnson", "Jones", "Lamar", "Lanier", "Laurens", "Lee", "Liberty", "Lincoln", "Long", "Lowndes", "Lumpkin", "McDuffie", "McIntosh", "Macon", "Madison", "Marion", "Meriwether", "Miller", "Mitchell", "Monroe", "Montgomery", "Morgan", "Murray", "Muscogee", "Newton", "Oconee", "Oglethorpe", "Paulding", "Peach", "Pickens", "Pierce", "Pike", "Polk", "Pulaski", "Putnam", "Quitman", "Rabun", "Randolph", "Richmond", "Rockdale", "Schley", "Screven", "Seminole", "Spalding", "Stephens", "Stewart", "Sumter", "Talbot", "Taliaferro", "Tattnall", "Taylor", "Telfair", "Terrell", "Thomas", "Tift", "Toombs", "Towns", "Treutlen", "Troup", "Turner", "Twiggs", "Union", "Upson", "Walker", "Walton", "Ware", "Warren", "Washington", "Wayne", "Webster", "Wheeler", "White", "Whitfield", "Wilcox", "Wilkes", "Wilkinson", "Worth"],

  georgiaSpecialtyPlates: ["GA Forestry - Georgia Forestry Foundation", "All Together Stop Cancer", "Alpha Kappa Alpha", "Amateur Radio", "Animal Friend (Cat & Dog)", "Appalachian Trail", "Atlanta Braves", "Atlanta Falcons", "Atlanta Hawks", "Atlanta United FC", "Back the Badge", "Breast Cancer", "Choose Life", "Cure Childhood Cancer", "Drive Safe Georgia", "Educator", "Fight Breast Cancer", "Georgia Aquarium", "Georgia PGA Foundation", "Georgia Sea Turtle Center", "Georgia Soccer", "Georgia Tennis", "Give Wildlife a Chance (Bald Eagle)", "Hearing Impaired", "Hobby Antique Vehicle", "Hummingbird", "In God We Trust", "Low Speed Vehicle", "NASCAR", "Play Golf Georgia", "Protect Wildlife", "Share the Road - Bicycle Safety", "Support Agriculture", "Support Our Troops", "Wildflower"],

  floridaSpecialtyPlates: ["A State of Vision", "Agriculture Education", "Animal Friend - Spay & Neuter", "Aquaculture", "Big Brothers Big Sisters", "Challenger Columbia", "Discover Florida's Oceans", "Endless Summer", "Everglades River of Grass", "Family First", "Fish Florida", "Florida Panthers", "Go Fishing", "Golf Capital of the World", "Helping Sea Turtles Survive", "Horse Country", "Invest in Children", "Keep Kids Drug Free", "Laurens Kids", "Live the Dream", "Miami Dolphins", "Miami Heat", "Orlando Magic", "Play Tennis", "Protect Florida Springs", "Protect Florida Whales", "Protect Our Oceans", "Protect the Panther", "Salutes Firefighters", "Salutes Veterans", "Save Our Seas", "Save the Manatee", "Save Wild Florida", "Share the Road", "Stop Child Abuse", "Support Autism Programs", "Support Education", "Support Law Enforcement", "Support Our Troops", "Trees Are Cool", "United We Stand", "Visit Our Lights"],

  militaryPlates: ["Chief Veteran", "Disabled Veteran Campaign 1950", "Former P.O.W.", "Gold Star Family", "National Guard - Retired", "Pearl Harbor Survivor", "Desert Storm Air Force", "Korean War Air Force", "Vietnam Veteran Air Force", "War in Iraq Air Force", "World War II Air Force", "Army Ranger", "Desert Storm Army", "Vietnam Veteran Army", "War in Afghanistan Army", "World War II Army", "Desert Storm Coast Guard", "Vietnam Veteran Coast Guard", "War in Afghanistan Coast Guard", "Desert Storm Navy", "Vietnam Veteran Navy", "War in Iraq Navy", "World War II Navy", "Desert Storm Marine", "Vietnam Veteran Marine", "War in Afghanistan Marine", "World War II Marine", "Air Force Cross", "Distinguished Flying Cross", "Purple Heart", "Silver Star", "Soldiers Medal", "Legion of Merit"],

  usTerritories: [
    "American Samoa",
    "Guam",
    "Northern Mariana Islands",
    "Puerto Rico",
    "U.S. Virgin Islands"
  ],

  canadianProvinces: [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland & Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon"
  ]
};

// Storage Example: Easy Local Storage Structure
const trips = {
  toTrip: [],
  fromTrip: []
};

// Saving and loading from localStorage
function saveTripData() {
  localStorage.setItem("licensePlateTrips", JSON.stringify(trips));
}

function loadTripData() {
  const storedData = localStorage.getItem("licensePlateTrips");
  if (storedData) {
    Object.assign(trips, JSON.parse(storedData));
  }
}

loadTripData();
