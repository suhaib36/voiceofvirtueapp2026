export const initialUserProfile = {
  name: "Cheryl Richard",
  initials: "CR",
  title: "Virtue Supporter & Volunteer",
  memberSince: "October 2023",
  pillarLevel: "H.O.P.E. Community Pillar",
  kindnessTier: "Kindness Tier II",
  virtuePoints: 120,
  phone: "(555) 019-2834",
  email: "cheryl.richard@communityhope.org",
  impact: {
    volunteerHours: 18,
    drivesSupported: 3,
    requestsAssisted: 2,
    mealsProvided: 140
  },
  preferences: {
    urgentNeedAlerts: true,
    volunteerReminders: true,
    confidentialityAgreed: true,
    preferredContactMethod: 'phone'
  }
};

export const initialInitiatives = [
  {
    id: "hope-food-drive",
    title: "H.O.P.E. Food Pantry Drive",
    category: "WEEKLY DRIVE",
    schedule: "Sat, 9:00 AM",
    description: "Distributing fresh grocery boxes & nutritional pantry staples to families across Baton Rouge.",
    progressLabel: "Boxes Prepared",
    current: 420,
    total: 500,
    progressColor: "bg-brand-600",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
    location: "Downtown Grace Center, 345 N Boulevard",
    urgentNeeds: ["Canned Tuna & Chicken", "Brown Rice", "Peanut Butter"]
  },
  {
    id: "back-to-school",
    title: "Back-to-School Backpacks",
    category: "YOUTH & EDUCATION",
    schedule: "5 days left",
    description: "Equipping neighborhood youth with essential backpacks, calculators, and stationery sets.",
    progressLabel: "Funded Goal",
    percent: 78,
    progressColor: "bg-hope-gold",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
    location: "Youth Hub • 414 Elm St, Suite 2B",
    urgentNeeds: ["Spiral Notebooks", "Backpacks", "No. 2 Pencils"]
  },
  {
    id: "warmth-dignity",
    title: "Warmth & Dignity Hygiene Kits",
    category: "CARE & COMFORT",
    schedule: "Civic Hall",
    description: "Packaging organic personal care products, hygiene essentials, and clean socks with unconditional love.",
    progressLabel: "Kits Assembled",
    current: 310,
    total: 350,
    progressColor: "bg-brand-600",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    location: "Civic Hall Community Pavilion",
    urgentNeeds: ["Travel Toothpaste", "Gentle Body Soap", "Winter Socks"]
  }
];

export const initialVolunteerRoles = [
  {
    id: "role-food-pantry",
    title: "Weekend Food Pantry Distribution",
    category: "Food Support",
    schedule: "Sat, 9:00 AM - 1:00 PM",
    location: "Central Community Center • East Wing",
    spotsOpen: 6,
    familyFriendly: false,
    remote: false,
    registered: true,
    volunteerInitials: ["SJ", "TW", "AL"],
    additionalVolunteers: 4,
    description: "Sort incoming fresh produce donations, assemble customized grocery boxes, and assist visitors with respectful, warm drive-thru loading."
  },
  {
    id: "role-backpacks",
    title: "School Backpack Assembly",
    category: "Youth & Education",
    schedule: "Wed, 4:30 PM - 7:00 PM",
    location: "Youth Hub • 414 Elm St, Suite 2B",
    spotsOpen: 12,
    familyFriendly: true,
    remote: false,
    registered: false,
    volunteerInitials: ["MB", "DK"],
    additionalVolunteers: 8,
    description: "Fill school packs categorized by grade level (elementary, middle, high school) with notebooks, pens, rulers, and personal uplifting notes."
  },
  {
    id: "role-phone-outreach",
    title: "Community Care Phone Outreach",
    category: "Companionship",
    schedule: "Remote • Flexible hours (1-2 hrs/week)",
    location: "Remote / Work From Home",
    spotsOpen: 25,
    familyFriendly: true,
    remote: true,
    registered: false,
    volunteerInitials: ["RL", "JM"],
    additionalVolunteers: 15,
    description: "Provide friendly check-in phone calls with homebound seniors, isolated neighbors, and single parents to share warm conversation and assess emergency needs."
  }
];

export const initialUrgentSupplies = [
  {
    id: "canned-proteins",
    title: "Canned proteins & hearty soups",
    description: "Tuna, chili, lentil stew, chicken",
    priority: "Critical",
    priorityClass: "bg-rose-100 text-rose-700 border-rose-200",
    pledged: false
  },
  {
    id: "winter-coats",
    title: "Children's winter coats & socks",
    description: "Ages 4–14, gently used or new",
    priority: "High",
    priorityClass: "bg-purple-100 text-purple-700 border-purple-200",
    pledged: false
  },
  {
    id: "hygiene-kits",
    title: "Toothpaste & hygiene kits",
    description: "Toothbrushes, soap, deodorant",
    priority: "High",
    priorityClass: "bg-purple-100 text-purple-700 border-purple-200",
    pledged: false
  },
  {
    id: "notebooks",
    title: "Spiral notebooks & backpacks",
    description: "Elementary & middle school supplies",
    priority: "Medium",
    priorityClass: "bg-slate-100 text-slate-700 border-slate-200",
    pledged: false
  }
];

export const initialActiveRequests = [
  {
    id: "HOPE-8924",
    title: "Hygiene & Care Package",
    categories: ["Hygiene & Care", "Essential Warmth"],
    status: "In Prep",
    statusBadge: "bg-purple-100 text-purple-700",
    submittedDate: "Nov 12",
    readyNotice: "READY FOR PICKUP",
    hubName: "West Community Hub",
    hubAddress: "1284 Florida Blvd, Baton Rouge, LA",
    contact: "(555) 019-2834 • SMS Preferred",
    fulfillmentType: "Community Pickup Hub (West Hub)",
    currentStep: 1,
    steps: [
      { step: 1, title: "Review & Preparation", desc: "A dedicated community coordinator is reviewing your needs within 24 hours to organize the package.", status: "current" },
      { step: 2, title: "Confidential Outreach", desc: "You'll receive a friendly confirmation text message outlining pickup times and safe location details.", status: "upcoming" },
      { step: 3, title: "Support Delivery", desc: "Care items provided seamlessly with dignity, warm smiles, and complete personal confidentiality.", status: "upcoming" }
    ]
  }
];

export const initialRegisteredEvents = [
  {
    id: "evt-1",
    dateMonth: "NOV",
    dateDay: "18",
    title: "Weekend Food Pantry Distribution",
    status: "Confirmed",
    schedule: "This Saturday, 9:00 AM – 1:00 PM",
    location: "Central Community Center • East Wing",
    address: "2020 North St, Baton Rouge, LA 70802",
    contactPerson: "Sister Cheryl & Team",
    notes: "Please arrive 15 minutes early for orientation. Wear comfortable closed-toe shoes."
  }
];

export const communitySpotlights = [
  {
    id: "spotlight-1",
    author: "Elena & Maya R.",
    initials: "EM",
    district: "Oakwood District Neighbors",
    tag: "Story of Grace",
    quote: "When unexpected medical bills piled up, Voices of Virtue didn't just deliver groceries—they reminded us that our neighborhood stands together with warmth and respect.",
    initialLikes: 128
  }
];

export const dropoffHubs = [
  {
    id: "hub-1",
    name: "Main Warehouse Donation Dock",
    address: "782 N Acadian Thruway, Baton Rouge, LA 70806",
    hours: "Mon–Sat • 8:00 AM – 5:30 PM",
    phone: "(225) 555-0199",
    accepts: "Non-perishables, gently used clothing, backpacks, toiletries",
    dropoffInstructions: "Ring buzzer at Dock #2. Volunteers will assist with unloading."
  },
  {
    id: "hub-2",
    name: "Downtown Grace Center",
    address: "345 N Boulevard, Baton Rouge, LA 70802",
    hours: "Tue & Thu • 10:00 AM – 4:00 PM | Sat • 9:00 AM – 1:00 PM",
    phone: "(225) 555-0142",
    accepts: "Pantry staples, baby formula, personal hygiene packages",
    dropoffInstructions: "Drop box located beside the front welcome desk."
  },
  {
    id: "hub-3",
    name: "West Community Hub",
    address: "1284 Florida Blvd, Baton Rouge, LA 70802",
    hours: "Mon–Fri • 9:00 AM – 4:00 PM",
    phone: "(225) 555-0178",
    accepts: "Pre-sorted family care items, school kits, blankets",
    dropoffInstructions: "Drive up to the covered community porch."
  }
];

export const initialNotifications = [
  {
    id: "notif-1",
    title: "Shift Reminder: Saturday Pantry Drive",
    body: "Your volunteer shift starts this Saturday at 9:00 AM at Central Community Center.",
    time: "2 hours ago",
    unread: true,
    type: "event"
  },
  {
    id: "notif-2",
    title: "Package Status Updated",
    body: "Hygiene & Care Package #HOPE-8924 is ready for pickup at West Community Hub.",
    time: "Yesterday",
    unread: true,
    type: "request"
  },
  {
    id: "notif-3",
    title: "Virtue Milestone Reached!",
    body: "You've earned 20 Virtue Points for participating in the Thanksgiving prep drive.",
    time: "3 days ago",
    unread: false,
    type: "milestone"
  }
];
