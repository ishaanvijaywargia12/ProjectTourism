const translations = {
    en: {
        bannerHeading: "Find your Next tour!",
        localGuides: "8000+ Our Local Guides",
        trustedAgency: "100% Trusted Tour Agency",
        travelExperience: "28+ Years of Travel Experience",
        happyTravelers: "98% Our Travelers are Happy",
        featuredDestinations: "FEATURED ADVENTURE DESTINATIONS",
        exploreWonders: "Explore Nature's Wonders",
        palmBeach: "Palm Beach Paradise",
        mountainTrek: "Mountain Trekking Expedition",
        coastalAdventure: "Coastal Adventure Retreat",
        aboutCompany: "We are Go Trip Travels Support Company",
        offers: "Offers & Discounts",
        coupon: "Get Coupon",
        contact: "Contact Us",
        footerAbout: "About",
        adventureTours: "Adventure Tours",
        beachEssentials: "Beach Essentials",
        travelGear: "Travel Gear",
        localExperiences: "Local Experiences",
        faq: "Frequently Asked Questions",
        reportIssue: "Report a Payment Issue",
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",        
        desertSafari: "Desert Safari Expedition",
        jungleAdventure: "Jungle Adventure Expedition",
        arcticWilderness: "Arctic Wilderness Expedition",
        cost: "₹",
        days: "Days",
        quickLinks: "Quick Links"
    },
    te: {
        bannerHeading: "మీ తదుపరి టూర్‌ను కనుగొనండి!",
        localGuides: "8000+ మా లోకల్ గైడ్స్",
        trustedAgency: "100% నమ్మకం పోలిక యాత్రా యజమాని",
        travelExperience: "28+ సంవత్సరాల ప్రయాణ అనుభవం",
        happyTravelers: "98% మా ప్రయాణికులు సంతోషంగా ఉన్నారు",
        featuredDestinations: "ఫీచర్డ్ అడ్వెంచర్ గోలుకలు",
        exploreWonders: "ప్రకృతిని ఆహ్లాదకరమైనంగా అన్వేషించండి",
        palmBeach: "పామ్ బీచ్ పారాడైస్",
        mountainTrek: "మౌంటెన్ ట్రెక్కింగ్ ఎక్స్‌పెడిషన్",
        coastalAdventure: "కోస్టల్ అడ్వెంచర్ రిట్రీట్",
        aboutCompany: "మేము గో ట్రిప్ ట్రావెల్స్ సపోర్ట్ కంపెనీ",
        offers: "ఆఫర్లు & డిస్కౌంట్లు",
        coupon: "కూపన్ పొందండి",
        contact: "మాకు సంప్రదించండి",
        footerAbout: "గురించి",
        adventureTours: "అడ్వెంచర్ టూర్లు",
        beachEssentials: "బీచ్ ఎసెన్షియల్స్",
        travelGear: "ప్రయాణ గియర్",
        localExperiences: "స్థానిక అనుభవాలు",
        faq: "అక్కడ అడిగే ప్రశ్నలు",
        reportIssue: "ఒక చెల్లింపు సమస్య నివేదించండి",
        terms: "షరతులు & ప్రమాణాలు",
        privacy: "గౌప్యతా నీతి",
        desertSafari: "డెసర్ట్ సఫారీ ఎక్స్‌పెడిషన్",
        jungleAdventure: "జంగల్ అడ్వెంచర్ ఎక్స్‌పెడిషన్",
        arcticWilderness: "ఆర్క్టిక్ వైల్డర్నెస్ ఎక్స్‌పెడిషన్",
        cost: "₹",
        days: "రోజులు",
        quickLinks: "త్వరలో లింక్స్"
    },
    hi: {
        bannerHeading: "अपने अगले टूर को खोजें!",
        localGuides: "8000+ हमारे स्थानीय मार्गदर्शक",
        trustedAgency: "100% विश्वसनीय टूर एजेंसी",
        travelExperience: "28+ साल का यात्रा अनुभव",
        happyTravelers: "98% हमारे यात्री खुश हैं",
        featuredDestinations: "विशेष एडवेंचर गंतव्य",
        exploreWonders: "प्रकृति के चमत्कारों का अन्वेषण करें",
        palmBeach: "पाम बीच पैराडाइस",
        mountainTrek: "माउंटेन ट्रेकिंग एक्सपेडीशन",
        coastalAdventure: "कोस्टल एडवेंचर रिट्रीट",
        aboutCompany: "हम गो ट्रिप ट्रैवल्स सपोर्ट कंपनी हैं",
        offers: "ऑफ़र और डिस्काउंट",
        coupon: "कूपन प्राप्त करें",
        contact: "हमसे संपर्क करें",
        footerAbout: "के बारे में",
        adventureTours: "एडवेंचर टूर्स",
        beachEssentials: "बीच की आवश्यकताएं",
        travelGear: "यात्रा सामग्री",
        localExperiences: "स्थानीय अनुभव",
        faq: "सामान्य प्रश्न",
        reportIssue: "एक भुगतान समस्या की सूचना दें",
        terms: "नियम और शर्तें",
        privacy: "गोपनीयता नीति",
        desertSafari: "डेज़र्ट सफारी एक्सपेडीशन",
        jungleAdventure: "जंगल एडवेंचर एक्सपेडिशन",
        arcticWilderness: "आर्क्टिक वाइल्डर्नेस एक्सपेडिशन",
        cost: "₹",
        days: "दिन",
        location: "✈"
    }
};

// Function to change language based on dropdown selection
function changeLanguage() {
    const selectedLanguage = document.getElementById("languageDropdown").value;

    // Update text content for each element
    for (const key in translations.en) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[selectedLanguage][key];
        }
    }
}

// Add event listener to language dropdown
document.getElementById("languageDropdown").addEventListener("change", changeLanguage);

// Initialize language on page load (default to English)
changeLanguage();