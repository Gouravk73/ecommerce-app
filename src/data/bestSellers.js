import safari from './backpacks/safari.jpg'
import gear from './backpacks/gear.jpg'
import mokobara from './Cabinbag/MOKOBARA.jpg'
import wildcraft from './laptop/Wildcraft.jpg'


const BestSellersList=[
    {
        id: 'bestsellers1',
        name: "Safari  BACKPACK",
        image: [
            {
              image: safari,
              color: "Black",
            },
          ],
        price: 629,
        description: "safari Work Packs'18 21 Ltrs Black Laptop Backpack (Streak Plus)",
        features: [
            "Care Instructions: Hand Wash Only",
            "Combination of functional & safety features in stylish design, Soft mesh back with 8 mm foam padded 2 Main Compartment, 1 Slip In Pocket inside the bag, Printed Design, Mesh bottle holder on the side,",
            "Size: 35 x 13 x 46 cms",
            "Number of compartments: 1; Warranty type: Manufacturer; 18 months",
            "Water Resistance Level: Not Water Resistant",
        ],
        rating:3
      },


      {
        id: 'bestsellers2',
        name: "Gear BACKPACK",
        image: [
            {
              image: gear,
              color: "Navy Blue",
            }, 
          ],
        price: 979,
        description: "Gear Cello Classic Anti Theft Faux Leather 20 Ltrs Navy Laptop Backpack",
        features: [
            "Care Instructions: Hand Wash Only",
            "Outer material: synthetic, color: navy. USB and headphone cable slot. With Rain Cover : No",
            "Waterproof. Size:18 inch; Capacity: 20 liters; Weight: 560 grams; Dimensions: 48 cms x 32 cms x 14 cms (LxWxH)",
            "Number of compartments: 2. External bottle pocket",
            "Special Features: Back Padding; Closure Type: Zipper; Pocket Description: Utility Pocket; Age Range Description: Adult",
            "Special Features: Back Padding; Closure Type: Zipper; Pocket Description: Utility Pocket; Age Range Description: Adult",
        ],
        rating: 5
      },
      {
        id: 'bestsellers3',
        name: "Wildcraft  LAPTOP BACKPACK",
        image: [
            {
              image: wildcraft,
              color: "Black",
            }, 
          ],
        price: 999,
        description: "Wildcraft Work Packs'18 21 Ltrs Black Laptop Backpack (Streak Plus)",
        features: [
            "Outer Material: Fabric, Color: Black; Water resistant",
            "Capacity: 21 liters; Weight: 480 grams; Dimensions: 18 inches x 13 inches x 5 inches (LxWxH)",
            "Number of compartments: 2",
            "Laptop Compatibility: Yes, Laptop Size: 15 inches",
            "Pocket Description: Utility Pocket; Closure Type: Zipper; Age Range Description: Adult; Style Name: Traditional Backpacks; Special Features: Laptop Compartment; Lining Description: Nylon",
        ],
        rating:4
      },
]
export default BestSellersList;
