// US States with image URLs (sample)
const states = [
  { code: "AL", name: "Alabama", img: "https://licenseplates.ai/images/us/alabama.png" },
  { code: "AK", name: "Alaska", img: "https://licenseplates.ai/images/us/alaska.png" },
  { code: "AZ", name: "Arizona", img: "https://licenseplates.ai/images/us/arizona.png" },
  { code: "AR", name: "Arkansas", img: "https://licenseplates.ai/images/us/arkansas.png" },
  { code: "CA", name: "California", img: "https://licenseplates.ai/images/us/california.png" },
  { code: "CO", name: "Colorado", img: "https://licenseplates.ai/images/us/colorado.png" },
  { code: "CT", name: "Connecticut", img: "https://licenseplates.ai/images/us/connecticut.png" },
  { code: "DE", name: "Delaware", img: "https://licenseplates.ai/images/us/delaware.png" },
  { code: "FL", name: "Florida", img: "https://licenseplates.ai/images/us/florida.png" },
  { code: "GA", name: "Georgia", img: "https://licenseplates.ai/images/us/georgia.png" }
  // Extend with all 50 states as needed
];

// Georgia counties (no image links available)
const gaCounties = [
  "Appling", "Atkinson", "Bacon", "Baker", "Baldwin", "Banks", "Barrow", "Bartow", "Ben Hill", "Berrien",
  "Bibb", "Bleckley", "Brantley", "Brooks", "Bryan", "Bulloch", "Burke", "Butts", "Calhoun", "Camden",
  "Candler", "Carroll", "Catoosa", "Charlton", "Chatham", "Chattahoochee", "Chattooga", "Cherokee", "Clarke", "Clay",
  "Clayton", "Clinch", "Cobb", "Coffee", "Colquitt", "Columbia", "Cook", "Coweta", "Crawford", "Crisp",
  "Dade", "Dawson", "Decatur", "DeKalb", "Dodge", "Dooly", "Dougherty", "Douglas", "Early", "Echols",
  "Effingham", "Elbert", "Emanuel", "Evans", "Fannin", "Fayette", "Floyd", "Forsyth", "Franklin", "Fulton",
  "Gilmer", "Glascock", "Glynn", "Gordon", "Grady", "Greene", "Gwinnett", "Habersham", "Hall", "Hancock",
  "Haralson", "Harris", "Hart", "Heard", "Henry", "Houston", "Irwin", "Jackson", "Jasper", "Jeff Davis",
  "Jefferson", "Jenkins", "Johnson", "Jones", "Lamar", "Lanier", "Laurens", "Lee", "Liberty", "Lincoln",
  "Long", "Lowndes", "Lumpkin", "McDuffie", "McIntosh", "Macon", "Madison", "Marion", "Meriwether", "Miller",
  "Mitchell", "Monroe", "Montgomery", "Morgan", "Murray", "Muscogee", "Newton", "Oconee", "Oglethorpe", "Paulding",
  "Peach", "Pickens", "Pierce", "Pike", "Polk", "Pulaski", "Putnam", "Quitman", "Rabun", "Randolph",
  "Richmond", "Rockdale", "Schley", "Screven", "Seminole", "Spalding", "Stephens", "Stewart", "Sumter", "Talbot",
  "Taliaferro", "Tattnall", "Taylor", "Telfair", "Terrell", "Thomas", "Tift", "Toombs", "Towns", "Treutlen",
  "Troup", "Turner", "Twiggs", "Union", "Upson", "Walker", "Walton", "Ware", "Warren", "Washington",
  "Wayne", "Webster", "Wheeler", "White", "Whitfield", "Wilcox", "Wilkes", "Wilkinson", "Worth"
];

// Specialty plates with image links
const specialtyPlates = [
  { name: "Purple Heart", category: "Military", img: "https://licenseplates.ai/images/ga/specialty/purpleheart.png" },
  { name: "Veteran", category: "Military", img: "https://licenseplates.ai/images/ga/specialty/veteran.png" },
  { name: "Firefighter", category: "Service", img: "https://licenseplates.ai/images/ga/specialty/firefighter.png" },
  { name: "Educator", category: "Education", img: "https://licenseplates.ai/images/ga/specialty/educator.png" },
  { name: "Save the Bees", category: "Wildlife", img: "https://licenseplates.ai/images/ga/specialty/bees.png" },
  { name: "Tree Hugger", category: "Wildlife", img: "https://licenseplates.ai/images/ga/specialty/trees.png" },
  { name: "Animal Rescue", category: "Animals", img: "https://licenseplates.ai/images/ga/specialty/rescue.png" },
  { name: "Freemason", category: "Fraternal", img: "https://licenseplates.ai/images/ga/specialty/freemason.png" }
  // Extend as desired
];