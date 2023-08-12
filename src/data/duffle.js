import classicCanvas1 from'./dufffle/ClassicCanvasDuffleBagBlack.jpg'
import classicCanvas2 from'./dufffle/ClassicCanvasDuffleBagGrey.jpg'
import leatherWeekend1 from './dufffle/LeatherWeekendDuffleBrow.jpg'
import leatherWeekend2 from './dufffle/LeatherWeekendDuffleDarkBrow.jpg'
import sport1 from './dufffle/SportsDuffleBlack.jpg'
import sport2 from './dufffle/SportsDuffleBlue.jpg'
import Denim1 from './dufffle/DenimDuffleBlack.jpg'
import Denim2 from './dufffle/DenimDuffleBlue.jpg'
import Waterproof1 from './dufffle/WaterproofDuffleBlack.jpg'
import Waterproof2 from './dufffle/WaterproofDuffleOrange.jpg'
import hybrid1 from './dufffle/HybridDuffle.jpg'
import hybrid2 from './dufffle/HybridDuffleGreen.jpg'
import foldable1 from './dufffle/FoldableDuffleBlack.jpg'
import foldable2 from './dufffle/FoldableDuffleBluejpg.jpg'



const Duffle = [
  {
    id: 'Duffle1',
    name: "Classic Canvas Duffle Bag",
    image: [
        {
          image: classicCanvas1,
          color: "Black",
        },
        {
          image: {classicCanvas2},
          color: "Grey",
        },
      ],
    price: 6689,
    description: "Classic Canvas Leather Duffel Bag Weekender Overnight Bag Carry on Travel Tote",
    features:[
        "Made of a thick,high quality canvas and comfortable leather woven fabric for tear- and rip-resistant strength, the durable bag offers reliable performance that stands up to everyday wear and tear. It can be carried on the hand or over the shoulder and smoothly opened and closed over and over without damage for its high-quality zippers.",
        "Dimensions: 45cm x 24cm x 34cm; 17.7 x 9.4 x 13.4inch (L x W x H);Weight 1.8 lb﹙0.8kg﹚;Lightweight for carry, adjustable and detachable shoulder strap, reinforced bottom design for set down on the ground.",
        "Pull it out at the airport to avoid excess baggage charges . The travel duffel bag is a must-have for graduation trip ,business trip, vacation, or daily excursion.Graduation trip makes a meaningful gift for your graduate,taking graduation bag",
        "Simple design, retro style, large capacity,for men and women"
    ],
    rating:4
  },
  {
    id: 'Duffle2',
    name: "Leather Weekend Duffle",
    image: [
        {
          image: leatherWeekend1,
          color: "Brown",
        },
        {
          image: leatherWeekend2,
          color: "Dark Brown",
        },
      ],
    price: 2999,
    description: "Vintage Leather Duffel Travel Gym Sports Overnight Weekend Duffle Bags for Men and Women (24 Inch Brown)",
    features: [
        "STORAGE AND USE: Size 24L x 12H x 11Depth in inches, the bag has one main compartment for clothes along with, One Internal Zipper and 2 side zipper pockets for smaller items. This bag can be used as a Gym Bag, Leather Travel Bag, Sports bag, Weekend bag, Cabin, Camping Bag.",
        "CAPACITY: This Duffle bag is light and easy to carry, wear comfortable. This duffel also have enough of size to carry clothing and personal articles for a weekend trip. It comes with a removable and adjustable shoulder strap with padded for comfort.",
        "USES: Can be used as travel bag, gym duffel bag, sports duffel bag, overnight bag, and weekender duffel bag, carry-on luggage for men or women. The classic design is perfect for quick getaways, camping, overnight trips or the gym.",
        "REUSABLE - This bag can be reused for a long time period, as wear and tear won't damage the bag so early.",
        "This Bag has been developed in soft leatherette material with attractive textures which gives it a rich appearance.",
    ],
    rating:3
  },
  {
    id: 'Duffle3',
    name: "Sports Duffle",
    image: [
        {
          image: sport1,
          color: "Brown",
        },
        {
          image: sport2,
          color: "Dark Brown",
        },
      ],
    price: 999,
    description: "ARURA (LABEL) Sports Gym Bag with Wet Pocket & Shoes Compartment, Travel Duffel Bag for Men and Women Lightweight",
    features: [
        "Package Include: 1 x Bag Dimension: 50 x 25 x 28 cm. It could carry 2-3 sets of clothes, essential cosmetics and 1-2 pairs of shoes. Great for use as a dry wet separated sports bag, gym bag, beach bag, swimming bag, weekender bag, overnight bag.",
        "Lightweight Material: This gym duffel bag is made of light and durable Oxford cloth, internal polyester lining with PVC waterproof compartment. Metal accessories and precision wiring are used at the connection to prevent break and tear.",
        "Travel Essential Bag: There is a strap on the back of the duffle bag that can be easily placed on your trolley case. During the journey, it can move firmly on the suitcase without burdening you. It is suitable for carrying clothes that you need when you board the plane.",
        "Wide Application: This bag can hold a lot of things, and everything needed for the gym and short-term travel can be stored in an orderly manner. It is a great bag for workout, travel, sports activity, tennis, basketball, yoga, fishing, hunting, camping, hiking and many outdoor activities.",
    ],
    rating:4
  },
  {
    id: 'Duffle4',
    name: "Vintage Denim Duffle",
    image: [
        {
          image:Denim1,
          color: "Brown",
        },
        {
          image: Denim2,
          color: "Dark Brown",
        },
      ],
    price: 1299,
    description: "Denim Duffel Bag - Travel Duffel Bag",
    features: [
        "Bottle Holder",
        "Detachable shoulder strap",
        "Adjustable shoulder strap",
        "Shoe compartment",
        "Wet resistant compartment",
    ],
    rating: 5
  },
  {
    id: 'Duffle5',
    name: "Waterproof Adventure Duffle",
    image: [
        {
          image: Waterproof1,
          color: "Black",
        },
        {
          image: Waterproof2,
          color: "Orange",
        },
      ],
    price: 14505    ,
    description: "ROCKBROS Waterproof Duffel Bag 60L Motorcycle Travel Dry Duffel Bag for Motorcycling Boating Kayaking Camping Fishing Outdoor Adventure",
    features: [
        "SUPER PERFORMANCE ON WATERPROOF: Duffel Bag is made of military-grade PVC tarp material which is 100% waterproof also the most durable material for motorcycling, travel, kayaking, boating, fishing, etc. Rolling-up design provide a waterproof guarantee, at the same time support quick Open&Close.",
        "LARGE CAPACITY FOR DAILY NEEDED: Waterproof duffel bag is designed for people who love traveling, outdoor adventure and kayaking. Totally 60L super large capacity meets your daily needed. Carrying your little bathroom and staring your amazing travel.",
        "QUICK USE&STORE FOR REUSING: Motorcycle dry duffel bag support quick using and storing. We use the soft and healthy material is mean for more people could reuse their duffel bag. Simply fold the bag down 3-4 times, buckle, and you are ready for adventure! Our boat bag is soft sided and completely collapsible to make storage easy!",
        "3 COMFORTABLE CARRIER WAYS: Kayaking duffel bag waterproof come with a soft and wide shoulder, you could carry the cloth and food easily, also suitable for fishing in the lake. Two scalable straps for fastening the dry duffel bag on the motorcycle, boat and kayak. Two handle straps also could be backpack shoulders.",
    ],
    rating:4

  },
  {
    id: 'Duffle6',
    name: "Hybrid  Duffle Backpack",
    image: [
        {
          image: hybrid1,
          color: "Black",
        },
        {
          image: hybrid2,
          color: "Orange",
        },
      ],    price: 1649,
    description: "Superbak Mega 33 Ltrs Hybrid Duffle Cum Backpack for Gym, Sports, Travel",
    features: [
       "Three-Way Usage : Intuitive Hybrid Solution : Easily concealable detachable shoulder straps : Cushioned Shoulder Pad : Separate Compartment for Shoes / Wet Clothes : Padded Base : Dual Access Main Compartment : Bottle Pocket : Detachable Shoulder Carry",
       "The pursuit of advanced ergonomics and intuitive functionality is at the core of the Superbak Design Culture",
       "Warranty : 18 Months",
       "Item Package Weight: 684.0 grams",
    ],
    rating:4
  },
  {
    id: 'Duffle7',
    name: "Wheel Duffle Bag",
    image: [
        {
          image: hybrid1,
          color: "Black",
        },
        {
          image: hybrid1,
          color: "Orange",
        },
      ],    price: 1049,
    description: "Lavie Sport Lino Large Size 63 cms Wheel Duffle Bag for Travel | Travel Bag with Trolley",
    features: [
       "The Lino wheel Duffle Bag from Lavie Sport is a voluminous yet lightweight travel duffle. Made of high quality and durable materials, it provides the same function as a large-sized suitcase.Perfect travel duffle for weekend getaways.",
       "Built to last: This duffle bag for travel features a combi-lock, shoulder strap, fully lined interior and is built with high-quality polyester fabric for the utmost durability. Made from water repellent & premium zippers, it makes it a super durable and lightweight all-weather travel duffle bag.",
       "External Dimension: Length – 63cm, Width – 30cm, Height – 32cm, Capacity - 60 Litres.",
       "Plenty of Space & Easy to carry: The front side features a zippered pocket that is perfect to store quick access essentials. Lino luggage bags for travel have sturdy heavy-duty treaded rubber wheels in a protective wheel housing and retractable trolley for smooth mobility and maximum durability.",
       " Manufacturer warranty - 2 years",
    ],
    rating:3.9
  },
  {
    id: 'Duffle8',
    name: "Foldable Duffle Bag",
    image: [
        {
          image: foldable1,
          color: "Black",
        },
        {
          image: foldable2,
          color: "Blue",
        },
      ],    price: 999,
    description: "FATMUG Foldable Duffel Luggage Bag for Travel, Packing and Storage",
    features: [
       "DURABLE AND ULTRALIGHT: Made from water repellent and tear resistant fabric yet Weighs only 580 gms",
       "FOLDABLE AND SPACIOUS: Capacity 45L, Unfolded Size: 21x12x9.5 inch, Folded Pouch Size: 9.5x9.5 inch",
       "VERSATILE: Perfect for use as a gym bag, sports bag, storage bag, weekender bag",
       "EVERYTHING ORGANIZED: A shoe compartment and 4 outer zip pockets for easy access to essentials",
    ],
    rating:4.3
  },
];

export default Duffle;
