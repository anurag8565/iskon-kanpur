// ============================================================
  // BILINGUAL SUPPORT (English / Hindi)
  // ------------------------------------------------------------
  // TRANSLATIONS holds every UI string in both languages, keyed by
  // the same data-i18n value used in the HTML. To add more languages
  // later, add another top-level key (e.g. "bn") with the same set
  // of keys, and a matching button in the .lang-toggle group.
  // ============================================================
  const TRANSLATIONS = {
  "en": {
    "nav_seva": "Seva & Donation",
    "nav_general": "General Donation",
    "nav_timings": "Timings",
    "nav_visit": "Visit",
    "nav_contact": "Contact",
    "donate_now_btn": "Donate Now",
    "brand_sub": "Founder Acharya:- A.C. Bhaktivedanta Swami Srila Prabhupada",
    "hero_eyebrow": "Offer Seva · Receive Blessings",
    "hero_title": "Serve the Lord,<br><em>Share the Mercy</em>",
    "hero_lede": "Every offering at ISKCON Kanpur — from a single Tulsi leaf to a full Kalash Abhishek — is performed on your behalf, in your name, before Sri Sri Radha Madhava ji.",
    "btn_view_sevas": "View Seva Schemes",
    "plan_your_visit": "Plan Your Visit",
    "countdown_label": "Counting down to Sri Krishna Janmashtami · 04-09-2026",
    "cd_days": "Days",
    "cd_hours": "Hours",
    "cd_mins": "Minutes",
    "cd_secs": "Seconds",
    "sevas_eyebrow": "Seva Schemes",
    "sevas_h2": "Choose Your Offering",
    "sevas_intro": "Each seva is performed by our priests with your name and gotra, as an offering on your behalf to Sri Sri Radha Madhava ji.",
    "tag_flagship": "Flagship",
    "seva1_title": "Silver Kalash Abhishek",
    "seva1_desc": "A grand ceremonial bathing of the Deities poured from a silver kalash, with Vedic mantras chanted in your name.",
    "seva2_title": "Bronze Kalash Abhishek",
    "seva2_desc": "The sacred abhishek ritual performed with a traditional bronze kalash, invoking blessings through holy water.",
    "seva3_title": "Divya Snan",
    "seva3_desc": "A divine ceremonial bath offered to the Lord with milk, curd, honey, ghee and holy water — the Panchamrita.",
    "seva4_title": "Tulsi Arpan",
    "seva4_desc": "Offer sacred Tulsi leaves at the lotus feet of the Lord — one of the most cherished daily acts of devotion.",
    "seva5_title": "Folk Arti",
    "seva5_desc": "A flower-offered aarti performed with fragrant blooms for Sri Sri Radha Madhava ji, part of the daily devotional cycle.",
    "seva6_title": "Sankha Abhishek",
    "seva6_desc": "Sacred conch abhishek of Lordships — holy water poured from the sankha over the Deities as part of the abhishek ceremony.",
    "seva_amount_label": "Seva Amount",
    "general_tile_title": "General Donations",
    "general_tile_desc": "Donate whatever you feel like.",
    "general_tile_amount_label": "Custom Amount",
    "general_eyebrow": "No Fixed Scheme",
    "general_h2": "Make a General Donation",
    "general_intro_p": "Prefer to give without choosing a specific seva? Your general donation goes toward daily temple worship, prasadam distribution, and the upkeep of the Deities — directed wherever the need is greatest.",
    "general_li1": "Supports daily aarti, deity care and temple maintenance",
    "general_li2": "One-time or in memory of a loved one",
    "impact_item1": "Daily Deity Seva",
    "impact_item2": "Prasadam Distribution",
    "impact_item3": "Temple Maintenance",
    "impact_item4": "Festivals & Utsavs",
    "impact_note": "Every offering, big or small, becomes part of the temple's daily service to Sri Sri Radha Madhava ji.",
    "banner_donating_for": "🙏 Donating for: ",
    "banner_switch": "Switch to general donation",
    "choose_amount_label": "Choose an amount",
    "custom_amount_label": "Or enter a custom amount",
    "label_fullname": "Full name",
    "placeholder_name": "Your name",
    "label_phone": "Phone number",
    "label_email": "Email address",
    "label_pan": "PAN",
    "opt_optional": "(optional)",
    "label_dedication": "Dedicate this donation",
    "placeholder_dedication": "In memory of / on behalf of...",
    "form_note_text": "You'll be taken straight to a secure Razorpay payment screen (UPI QR / card) to complete your donation.",
    "donate_word": "Donate",
    "payment_creating_order": "Creating Razorpay order...",
    "payment_opening_checkout": "Opening secure checkout...",
    "payment_verifying": "Payment received. Verifying with the temple system...",
    "payment_verified": "Payment verified successfully. Thank you for your seva.",
    "payment_cancelled": "Checkout closed before payment was completed.",
    "payment_failed": "We couldn't complete the payment. Please try again.",
    "payment_pending": "Payment is being confirmed. Please check back shortly.",
    "payment_order_failed": "We couldn't create a payment order right now. Please try again.",
    "payment_checkout_failed": "Checkout could not be opened. Please try again.",
    "payment_amount_invalid": "Please choose a valid amount before continuing.",
    "payment_verify_pending": "Payment has been submitted, but backend confirmation is still pending.",
    "payment_verify_failed": "Payment could not be confirmed yet. Please try again later.",
    "payment_verification_error": "We couldn't verify the payment right now.",
    "payment_seva_amount_mismatch": "Please use the listed amount for this seva scheme.",
    "timings_eyebrow": "Darshan Timings",
    "timings_intro_p": "Join us for daily aarti and darshan at Sri Sri Radha Madhava Mandir.",
    "timings_note": "All are welcome — no prior booking is needed for daily darshan. Come as you are, any day of the week.",
    "aarti_mangala": "Mangala Aarti",
    "aarti_shringar": "Shringar Aarti",
    "aarti_rajbhog": "Rajbhog Aarti",
    "aarti_sandhya": "Sandhya Aarti",
    "aarti_shayan": "Shayan (Temple Closes)",
    "address_eyebrow": "Address",
    "address_name": "Sri Sri Radha Madhava Mandir",
    "address_line": "Mainavati Marg, Bithoor Rd, Kanpur, Uttar Pradesh 208017",
    "address_note": "Open daily for darshan — see timings alongside for the full aarti schedule.",
    "btn_get_directions": "Get Directions",
    "contact_eyebrow": "Contact",
    "contact_h2": "Get in Touch",
    "label_phone_short": "Phone",
    "label_email_short": "Email",
    "contact_note": "Reach out for seva bookings, festival participation or general enquiries — we're happy to help.",
    "btn_call_now": "Call Now",
    "btn_email_us": "Email Us",
    "social_eyebrow": "Social Updates",
    "social_h2": "From Our YouTube Channel",
    "social_p": "Catch up on satsangs, festival celebrations and darshan moments from ISKCON Kanpur.",
    "btn_subscribe": "Subscribe on YouTube",
    "darshan_eyebrow": "Daily Darshan",
    "darshan_h2": "Witness the Lord's Presence",
    "darshan_intro": "A live devotional moment from the temple, shared here when available.",
    "darshan_modal_eyebrow": "Daily Darshan",
    "darshan_watch": "Watch Darshan",
    "darshan_open_fullscreen": "Open fullscreen player",
    "darshan_active_label": "Active darshan video",
    "darshan_empty_title": "No Darshan Video Yet",
    "darshan_empty_desc": "When the temple uploads an active daily darshan video, it will appear here automatically.",
    "darshan_empty_cta": "Check back soon",
    "darshan_close": "Close darshan player",
    "festivals_eyebrow": "Upcoming Festivals",
    "festivals_h2": "Celebrate With the Temple",
    "festivals_intro": "Four upcoming festival cards are shown here in order of priority and date.",
    "festival_placeholder_title": "Festival details coming soon",
    "festival_placeholder_desc": "This slot will automatically fill from the public content API once the temple team publishes an upcoming festival.",
    "festival_placeholder_cta": "Awaiting update",
    "festival_placeholder_date": "Awaiting update",
    "festival_read_more": "Read more",
    "youtube_placeholder_title": "Recent videos coming soon",
    "youtube_placeholder_desc": "Recent videos will appear here once the backend endpoint returns them.",
    "footer_seva": "Seva",
    "footer_timings": "Timings",
    "footer_contact": "Contact",
    "footer_blurb": "A place of daily worship, seva and community devoted to Sri Sri Radha Madhava ji in the heart of Kanpur.",
    "footer_quicklinks": "Quick Links",
    "footer_copyright": "© {{year}} ISKCON Kanpur. All offerings performed with devotion.",
    "whatsapp_aria": "Chat with us on WhatsApp",
    "alert_name_required": "Please enter your name before proceeding to payment.",
    "alert_phone_required": "Please enter your phone number before proceeding to payment.",
    "alert_email_required": "Please enter your email address before proceeding to payment.",
    "alert_email_invalid": "Please enter a valid email address before proceeding to payment."
  },
  "hi": {
    "nav_seva": "सेवा एवं दान",
    "nav_general": "सामान्य दान",
    "nav_timings": "आरती समय",
    "nav_visit": "मंदिर आगमन",
    "nav_contact": "संपर्क करें",
    "donate_now_btn": "अभी दान करें",
    "brand_sub": "संस्थापक आचार्य:- ए.सी. भक्तिवेदांत स्वामी श्रील प्रभुपाद",
    "hero_eyebrow": "सेवा अर्पित करें · आशीर्वाद प्राप्त करें",
    "hero_title": "प्रभु की सेवा करें,<br><em>कृपा को बाँटें</em>",
    "hero_lede": "इस्कॉन कानपुर में प्रत्येक अर्पण — एक तुलसी दल से लेकर पूर्ण कलश अभिषेक तक — आपकी ओर से, आपके नाम पर, श्री श्री राधा माधव जी के समक्ष संपन्न किया जाता है।",
    "btn_view_sevas": "सेवा योजनाएँ देखें",
    "plan_your_visit": "मंदिर आगमन की योजना बनाएं",
    "countdown_label": "श्री कृष्ण जन्माष्टमी की उलटी गिनती · 04-09-2026",
    "cd_days": "दिन",
    "cd_hours": "घंटे",
    "cd_mins": "मिनट",
    "cd_secs": "सेकंड",
    "sevas_eyebrow": "सेवा योजनाएँ",
    "sevas_h2": "अपना अर्पण चुनें",
    "sevas_intro": "प्रत्येक सेवा हमारे पुजारियों द्वारा आपके नाम और गोत्र के साथ, आपकी ओर से श्री श्री राधा माधव जी को अर्पण के रूप में संपन्न की जाती है।",
    "tag_flagship": "प्रमुख सेवा",
    "seva1_title": "सिल्वर कलश अभिषेक",
    "seva1_desc": "चांदी के कलश से विग्रहों का भव्य अभिषेक, आपके नाम से वैदिक मंत्रोच्चार के साथ संपन्न किया जाता है।",
    "seva2_title": "ब्रॉन्ज़ कलश अभिषेक",
    "seva2_desc": "पारंपरिक कांस्य कलश से पवित्र जल द्वारा किया जाने वाला पवित्र अभिषेक अनुष्ठान, आशीर्वाद हेतु।",
    "seva3_title": "दिव्य स्नान",
    "seva3_desc": "दूध, दही, शहद, घी और पवित्र जल — पंचामृत — से भगवान को अर्पित दिव्य स्नान।",
    "seva4_title": "तुलसी अर्पण",
    "seva4_desc": "भगवान के चरण कमलों में पवित्र तुलसी दल अर्पित करें — भक्ति का एक अत्यंत प्रिय नित्य कर्म।",
    "seva5_title": "फूल आरती",
    "seva5_desc": "श्री श्री राधा माधव जी के लिए सुगंधित पुष्पों से की जाने वाली आरती, नित्य भक्ति क्रम का एक भाग।",
    "seva6_title": "शंख अभिषेक",
    "seva6_desc": "ठाकुरजी का पवित्र शंख अभिषेक — अभिषेक अनुष्ठान के भाग रूप में शंख से विग्रहों पर पवित्र जल अर्पित किया जाता है।",
    "seva_amount_label": "सेवा राशि",
    "general_tile_title": "सामान्य दान",
    "general_tile_desc": "जितना चाहें उतना दान करें।",
    "general_tile_amount_label": "अपनी राशि चुनें",
    "general_eyebrow": "कोई निश्चित योजना नहीं",
    "general_h2": "सामान्य दान करें",
    "general_intro_p": "किसी विशेष सेवा के बिना दान देना चाहते हैं? आपका सामान्य दान नित्य मंदिर पूजा, प्रसादम वितरण और विग्रहों की देखभाल में लगाया जाता है — जहाँ सबसे अधिक आवश्यकता हो वहाँ निर्देशित किया जाता है।",
    "general_li1": "नित्य आरती, विग्रह सेवा और मंदिर रखरखाव में सहायक",
    "general_li2": "एकबारगी या किसी प्रियजन की स्मृति में",
    "impact_item1": "नित्य विग्रह सेवा",
    "impact_item2": "प्रसादम वितरण",
    "impact_item3": "मंदिर रखरखाव",
    "impact_item4": "उत्सव एवं पर्व",
    "impact_note": "आपका हर अर्पण, चाहे छोटा हो या बड़ा, श्री श्री राधा माधव जी की नित्य सेवा का हिस्सा बनता है।",
    "banner_donating_for": "🙏 दान की जा रही सेवा: ",
    "banner_switch": "सामान्य दान पर जाएँ",
    "choose_amount_label": "राशि चुनें",
    "custom_amount_label": "या अपनी इच्छानुसार राशि दर्ज करें",
    "label_fullname": "पूरा नाम",
    "placeholder_name": "आपका नाम",
    "label_phone": "फोन नंबर",
    "label_email": "ईमेल पता",
    "label_pan": "पैन",
    "opt_optional": "(वैकल्पिक)",
    "label_dedication": "यह दान किसे समर्पित करें",
    "placeholder_dedication": "किसी की स्मृति में / किसी की ओर से...",
    "form_note_text": "आपको सीधे एक सुरक्षित रेज़रपे भुगतान स्क्रीन (UPI QR / कार्ड) पर ले जाया जाएगा, जहाँ से आप अपना दान पूर्ण कर सकते हैं।",
    "donate_word": "दान करें",
    "payment_creating_order": "रेज़रपे ऑर्डर बनाया जा रहा है...",
    "payment_opening_checkout": "सुरक्षित चेकआउट खोला जा रहा है...",
    "payment_verifying": "भुगतान प्राप्त हुआ। मंदिर प्रणाली से सत्यापित किया जा रहा है...",
    "payment_verified": "भुगतान सफलतापूर्वक सत्यापित हुआ। आपकी सेवा के लिए धन्यवाद।",
    "payment_cancelled": "भुगतान पूरा होने से पहले चेकआउट बंद कर दिया गया।",
    "payment_failed": "भुगतान पूरा नहीं हो सका। कृपया पुनः प्रयास करें।",
    "payment_pending": "भुगतान की पुष्टि की जा रही है। कृपया थोड़ी देर बाद देखें।",
    "payment_order_failed": "अभी भुगतान ऑर्डर नहीं बन सका। कृपया पुनः प्रयास करें।",
    "payment_checkout_failed": "चेकआउट खोला नहीं जा सका। कृपया पुनः प्रयास करें।",
    "payment_amount_invalid": "कृपया आगे बढ़ने से पहले वैध राशि चुनें।",
    "payment_verify_pending": "भुगतान भेज दिया गया है, लेकिन बैकएंड पुष्टि अभी लंबित है।",
    "payment_verify_failed": "भुगतान की अभी पुष्टि नहीं हो सकी। कृपया बाद में पुनः प्रयास करें।",
    "payment_verification_error": "अभी भुगतान सत्यापित नहीं किया जा सका।",
    "payment_seva_amount_mismatch": "कृपया इस सेवा योजना के लिए सूचीबद्ध राशि का ही उपयोग करें।",
    "timings_eyebrow": "दर्शन समय",
    "timings_intro_p": "श्री श्री राधा माधव मंदिर में नित्य आरती एवं दर्शन में सम्मिलित हों।",
    "timings_note": "सभी का स्वागत है — नित्य दर्शन हेतु पूर्व बुकिंग आवश्यक नहीं है। सप्ताह के किसी भी दिन पधारें।",
    "aarti_mangala": "मंगला आरती",
    "aarti_shringar": "श्रृंगार आरती",
    "aarti_rajbhog": "राजभोग आरती",
    "aarti_sandhya": "संध्या आरती",
    "aarti_shayan": "शयन आरती (मंदिर बंद)",
    "address_eyebrow": "पता",
    "address_name": "श्री श्री राधा माधव मंदिर",
    "address_line": "मैनावती मार्ग, बिठूर रोड, कानपुर, उत्तर प्रदेश 208017",
    "address_note": "प्रतिदिन दर्शन हेतु खुला है — पूर्ण आरती समय-सारणी के लिए साथ में देखें।",
    "btn_get_directions": "दिशा-निर्देश प्राप्त करें",
    "contact_eyebrow": "संपर्क",
    "contact_h2": "संपर्क करें",
    "label_phone_short": "फोन",
    "label_email_short": "ईमेल",
    "contact_note": "सेवा बुकिंग, उत्सव सहभागिता या सामान्य पूछताछ के लिए संपर्क करें — हमें सहायता करने में खुशी होगी।",
    "btn_call_now": "अभी कॉल करें",
    "btn_email_us": "ईमेल करें",
    "social_eyebrow": "सोशल अपडेट",
    "social_h2": "हमारे यूट्यूब चैनल से",
    "social_p": "इस्कॉन कानपुर के सत्संग, उत्सव समारोह और दर्शन के पलों को देखें।",
    "btn_subscribe": "यूट्यूब पर सब्सक्राइब करें",
    "darshan_eyebrow": "नित्य दर्शन",
    "darshan_h2": "भगवान के साक्षात दर्शन करें",
    "darshan_intro": "मंदिर का एक जीवंत भक्ति-क्षण, उपलब्ध होने पर यहाँ साझा किया जाएगा।",
    "darshan_modal_eyebrow": "नित्य दर्शन",
    "darshan_watch": "दर्शन देखें",
    "darshan_open_fullscreen": "फुलस्क्रीन प्लेयर खोलें",
    "darshan_active_label": "सक्रिय दर्शन वीडियो",
    "darshan_empty_title": "अभी दर्शन वीडियो उपलब्ध नहीं है",
    "darshan_empty_desc": "जब मंदिर का सक्रिय नित्य दर्शन वीडियो प्रकाशित होगा, वह यहाँ स्वतः दिखेगा।",
    "darshan_empty_cta": "शीघ्र लौटें",
    "darshan_close": "दर्शन प्लेयर बंद करें",
    "festivals_eyebrow": "आगामी उत्सव",
    "festivals_h2": "मंदिर के साथ उत्सव मनाइए",
    "festivals_intro": "यहाँ प्राथमिकता और तिथि के क्रम में चार आगामी उत्सव कार्ड दिखाए गए हैं।",
    "festival_placeholder_title": "उत्सव विवरण शीघ्र आएंगे",
    "festival_placeholder_desc": "यह स्थान सार्वजनिक कंटेंट API से स्वतः भर जाएगा, जैसे ही मंदिर टीम आगामी उत्सव प्रकाशित करेगी।",
    "festival_placeholder_cta": "अद्यतन प्रतीक्षित",
    "festival_placeholder_date": "अद्यतन प्रतीक्षित",
    "festival_read_more": "और पढ़ें",
    "youtube_placeholder_title": "हाल के वीडियो शीघ्र आएंगे",
    "youtube_placeholder_desc": "जैसे ही बैकएंड endpoint उन्हें लौटाएगा, हाल के वीडियो यहाँ दिखेंगे।",
    "footer_seva": "सेवा",
    "footer_timings": "आरती समय",
    "footer_contact": "संपर्क",
    "footer_blurb": "कानपुर के हृदय में श्री श्री राधा माधव जी को समर्पित नित्य पूजा, सेवा एवं समुदाय का स्थान।",
    "footer_quicklinks": "त्वरित लिंक",
    "footer_copyright": "© {{year}} इस्कॉन कानपुर. सभी अर्पण भक्तिपूर्वक संपन्न किए जाते हैं।",
    "whatsapp_aria": "व्हाट्सएप पर हमसे जुड़ें",
    "alert_name_required": "भुगतान से पहले कृपया अपना नाम दर्ज करें।",
    "alert_phone_required": "भुगतान से पहले कृपया अपना फोन नंबर दर्ज करें।",
    "alert_email_required": "भुगतान से पहले कृपया अपना ईमेल पता दर्ज करें।",
    "alert_email_invalid": "भुगतान से पहले कृपया एक मान्य ईमेल पता दर्ज करें।"
  }
  };

  let currentLang = localStorage.getItem('iskconLang') || 'en';
  function getConfiguredApiBase(){
    const metaBase = document.querySelector('meta[name="iskcon-api-base"]')?.content?.trim();
    if (metaBase) return metaBase.replace(/\/+$/g, '');

    if (typeof window.ISKCON_API_BASE === 'string' && window.ISKCON_API_BASE.trim()) {
      return window.ISKCON_API_BASE.trim().replace(/\/+$/g, '');
    }

    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:3000/api';
    }

    return '/api';
  }

  const API_BASE = getConfiguredApiBase();
  const CONTENT_API_URL = '/public/content';
  const YOUTUBE_RECENT_API_URL = '/youtube/recent';
  const PAYMENT_CREATE_ORDER_URL = '/payments/create-order';
  const PAYMENT_STATUS_URL = '/payments/status';
  const PAYMENT_VERIFY_URLS = ['/payments/verify', '/payments/verify-order'];
  const STATIC_ASSET_VERSION = '20260818';
  const JSON_CACHE_PREFIX = 'iskcon-kanpur:json:';
  const JSON_CACHE_TTLS = {
    publicContent: 5 * 60 * 1000,
    youtubeRecent: 10 * 60 * 1000
  };
  const HERO_SLIDE_INTERVAL = 3000;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const YOUTUBE_FALLBACK_CHANNEL_URL = 'https://www.youtube.com/@iskconkanpur';
  const RAZORPAY_CHECKOUT_URL = 'https://checkout.razorpay.com/v1/checkout.js';
  const TRANSPARENT_PIXEL_DATA_URI = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';

  const FALLBACK_HERO_SLIDES = [
    {
      id: 'fallback-hero-1',
      position: 1,
      imageUrl: 'assets/hero.jpeg',
      eyebrow: 'Offer Seva · Receive Blessings',
      title: 'Serve the Lord, Share the Mercy',
      subtitle: 'Every offering at ISKCON Kanpur is performed on your behalf, in your name, before Sri Sri Radha Madhava ji.',
      ctaText: 'View Seva Schemes',
      ctaUrl: '#sevas'
    },
    {
      id: 'fallback-hero-2',
      position: 2,
      imageUrl: 'assets/image-03.jpeg',
      eyebrow: 'Sacred Darshan',
      title: 'Daily Worship, Offered with Devotion',
      subtitle: 'A temple atmosphere that carries the warmth of daily seva, aarti and sacred ritual.',
      ctaText: 'Plan Your Visit',
      ctaUrl: '#visit'
    },
    {
      id: 'fallback-hero-3',
      position: 3,
      imageUrl: 'assets/image-05.jpeg',
      eyebrow: 'Temple Service',
      title: 'Every Seva Becomes an Offering',
      subtitle: 'From the smallest act of devotion to a grand ceremony, each gift supports the temple mission.',
      ctaText: 'Donate Now',
      ctaUrl: '#general-donation'
    },
    {
      id: 'fallback-hero-4',
      position: 4,
      imageUrl: 'assets/image-06.jpeg',
      eyebrow: 'Festivals & Utsavs',
      title: 'Celebrations in the Spirit of Bhakti',
      subtitle: 'A living devotional home where the Lord is honored through prayer, music and sacred celebration.',
      ctaText: 'See Festivals',
      ctaUrl: '#festivals'
    }
  ];

  const FALLBACK_FESTIVALS = [
    {
      id: 'festival-placeholder-1',
      position: 1,
      title: 'Festival details coming soon',
      date: 'Awaiting update',
      description: 'This slot will automatically fill from the public content API once the temple team publishes an upcoming festival.',
      imageUrl: 'assets/hero.jpeg',
      linkUrl: '#contact',
      placeholder: true
    },
    {
      id: 'festival-placeholder-2',
      position: 2,
      title: 'Program schedule pending',
      date: 'Awaiting update',
      description: 'A second festival card reserved for the next temple celebration or utsav announcement.',
      imageUrl: 'assets/image-03.jpeg',
      linkUrl: '#contact',
      placeholder: true
    },
    {
      id: 'festival-placeholder-3',
      position: 3,
      title: 'Temple calendar slot',
      date: 'Awaiting update',
      description: 'Use this slot for a date-specific public festival entry when the content API is connected.',
      imageUrl: 'assets/image-05.jpeg',
      linkUrl: '#contact',
      placeholder: true
    },
    {
      id: 'festival-placeholder-4',
      position: 4,
      title: 'Upcoming celebration',
      date: 'Awaiting update',
      description: 'The fourth card stays visible so the homepage always shows a four-card festival grid.',
      imageUrl: 'assets/image-06.jpeg',
      linkUrl: '#contact',
      placeholder: true
    }
  ];

  const FALLBACK_DARSHAN = {
    active: false,
    title: ''
  };

  const FALLBACK_YOUTUBE_VIDEOS = [
    {
      videoId: '',
      title: 'Recent videos coming soon',
      thumbnailUrl: '',
      publishedAt: '',
      placeholder: true
    },
    {
      videoId: '',
      title: 'Temple satsang highlights',
      thumbnailUrl: '',
      publishedAt: '',
      placeholder: true
    },
    {
      videoId: '',
      title: 'Festival and darshan moments',
      thumbnailUrl: '',
      publishedAt: '',
      placeholder: true
    }
  ];

  const contentState = {
    heroSlides: [...FALLBACK_HERO_SLIDES],
    darshanVideo: FALLBACK_DARSHAN,
    festivals: [...FALLBACK_FESTIVALS],
    youtube: {
      channelId: '',
      channelUrl: YOUTUBE_FALLBACK_CHANNEL_URL,
      featuredVideos: [],
      videos: [...FALLBACK_YOUTUBE_VIDEOS],
      loading: true,
      errorMessage: ''
    }
  };

  const heroSlidesMount = document.getElementById('heroSlides');
  const darshanMount = document.getElementById('darshanMount');
  const festivalGridMount = document.getElementById('festivalGrid');
  const youtubeGridMount = document.getElementById('youtubeGrid');
  const youtubeSubscribeBtn = document.getElementById('youtubeSubscribeBtn');
  const darshanModal = document.getElementById('darshanModal');
  const darshanModalVideo = document.getElementById('darshanModalVideo');
  const darshanModalTitle = document.getElementById('darshanModalTitle');
  const modalCloseTargets = darshanModal ? darshanModal.querySelectorAll('[data-darshan-close]') : [];
  const youtubeModal = document.getElementById('youtubeModal');
  const youtubeModalFrame = document.getElementById('youtubeModalFrame');
  const youtubeModalTitle = document.getElementById('youtubeModalTitle');
  const youtubeModalCloseTargets = youtubeModal ? youtubeModal.querySelectorAll('[data-youtube-close]') : [];
  let heroRotationTimer = null;
  let heroCurrentIndex = 0;
  let darshanTriggerFocus = null;
  let heroInteractionWired = false;
  let youtubeTriggerFocus = null;

  function applyLanguage(lang){
    if (!TRANSLATIONS[lang]) lang = 'en';
    currentLang = lang;
    const dict = TRANSLATIONS[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('iskconLang', lang);

    if (typeof refreshDynamicText === 'function') refreshDynamicText();
  }

  function t(key){
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
      || (TRANSLATIONS.en && TRANSLATIONS.en[key])
      || '';
  }

  function renderFooterCopyright(){
    const footerCopyright = document.getElementById('footerCopyright');
    if (!footerCopyright) return;
    const year = new Date().getFullYear();
    footerCopyright.innerHTML = t('footer_copyright').replace('{{year}}', String(year));
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  function resolveAssetUrl(url){
    if (!url) return '';
    try{
      const resolved = new URL(url, document.baseURI);
      if (/^(assets|css|js)\//.test(url) || /\/assets\//.test(url)){
        resolved.searchParams.set('v', STATIC_ASSET_VERSION);
      }
      return resolved.href;
    }catch(_err){
      return url;
    }
  }

  function buildApiUrl(path){
    const input = String(path || '').trim();
    if (!input) return API_BASE;
    if (/^https?:\/\//i.test(input)) return input;

    const cleanPath = input.replace(/^\/+/, '');
    const relativePath = cleanPath.startsWith('api/') ? cleanPath.slice(4) : cleanPath;
    if (API_BASE === '/api') {
      return relativePath ? `/api/${relativePath}` : '/api';
    }
    return relativePath ? `${API_BASE}/${relativePath}` : API_BASE;
  }

  function readCachedJson(cacheKey){
    try{
      const raw = sessionStorage.getItem(JSON_CACHE_PREFIX + cacheKey);
      return raw ? JSON.parse(raw) : null;
    }catch(_err){
      return null;
    }
  }

  function writeCachedJson(cacheKey, data){
    try{
      sessionStorage.setItem(JSON_CACHE_PREFIX + cacheKey, JSON.stringify(data));
    }catch(_err){
      // Ignore storage quota or privacy-mode failures.
    }
  }

  async function fetchJsonCached(url, cacheKey, ttlMs){
    const now = Date.now();
    const cached = readCachedJson(cacheKey);
    if (cached && cached.timestamp && (now - cached.timestamp) < ttlMs){
      return cached.data;
    }

    const apiUrl = buildApiUrl(url);
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      headers: { Accept: 'application/json' }
    });
    if (!response.ok) {
      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        throw new Error('Unexpected non-JSON response from the API.');
      }
      throw new Error(`Request failed for ${apiUrl}`);
    }

    const data = await response.json();
    writeCachedJson(cacheKey, {
      timestamp: now,
      data
    });
    return data;
  }

  async function fetchJson(url){
    const apiUrl = buildApiUrl(url);
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      headers: { Accept: 'application/json' }
    });
    const contentType = response.headers.get('content-type') || '';
    const data = contentType.includes('application/json') ? await response.json().catch(() => ({})) : null;
    if (!response.ok) {
      const error = new Error(
        (data && data.error && data.error.message)
        || (data && data.message)
        || `Request failed for ${apiUrl}`
      );
      error.status = response.status;
      error.code = data && data.error && data.error.code ? data.error.code : (data && data.code) || '';
      error.data = data;
      throw error;
    }
    return data;
  }

  async function fetchJsonWithTimeout(url, timeoutMs = 12000){
    const apiUrl = buildApiUrl(url);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

    try{
      const response = await fetch(apiUrl, {
        cache: 'no-store',
        signal: controller.signal,
        headers: { Accept: 'application/json' }
      });
      const contentType = response.headers.get('content-type') || '';
      const data = contentType.includes('application/json') ? await response.json().catch(() => ({})) : null;
      if (!response.ok) {
        const error = new Error(
          (data && data.error && data.error.message)
          || (data && data.message)
          || `Request failed for ${apiUrl}`
        );
        error.status = response.status;
        error.code = data && data.error && data.error.code ? data.error.code : (data && data.code) || '';
        error.data = data;
        error.endpoint = apiUrl;
        throw error;
      }
      return data;
    }catch(error){
      if (error && error.name === 'AbortError'){
        const timeoutError = new Error(`Request timed out for ${apiUrl}`);
        timeoutError.status = 408;
        timeoutError.code = 'REQUEST_TIMEOUT';
        timeoutError.endpoint = apiUrl;
        throw timeoutError;
      }
      if (error && typeof error === 'object' && !error.endpoint){
        error.endpoint = apiUrl;
      }
      throw error;
    }finally{
      window.clearTimeout(timeoutId);
    }
  }

  function createYouTubePlaceholderThumbnail(title, index){
    const safeTitle = escapeXml(title || `Video ${index + 1}`);
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6B1029"/>
            <stop offset="45%" stop-color="#0F4C4A"/>
            <stop offset="100%" stop-color="#C9932E"/>
          </linearGradient>
        </defs>
        <rect width="1280" height="720" fill="url(#g)"/>
        <circle cx="1040" cy="140" r="110" fill="rgba(255,255,255,0.12)"/>
        <circle cx="220" cy="560" r="150" fill="rgba(255,255,255,0.08)"/>
        <rect x="90" y="90" width="1100" height="540" rx="42" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
        <polygon points="560,250 560,470 760,360" fill="rgba(255,255,255,0.92)"/>
        <text x="90" y="650" fill="#FBF3E4" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700">${safeTitle}</text>
        <text x="90" y="602" fill="#E8C877" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="600">ISKCON Kanpur YouTube</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function escapeXml(value){
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  function escapeHtml(value){
    return escapeXml(value);
  }

  function formatDisplayDate(value){
    if (value === null || value === undefined) return '';
    const text = String(value).trim();
    if (!text) return '';

    const isoDateMatch = text.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s].*)?$/);
    if (isoDateMatch){
      return `${isoDateMatch[3]}-${isoDateMatch[2]}-${isoDateMatch[1]}`;
    }

    const date = new Date(text);
    if (Number.isNaN(date.getTime())) return text;

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}-${month}-${year}`;
  }

  function getYouTubeEmbedUrl(videoId, autoplay){
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      playsinline: '1'
    });
    if (autoplay) params.set('autoplay', '1');
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?${params.toString()}`;
  }

  function getYouTubeThumbnailUrl(videoId){
    const cleaned = String(videoId || '').trim();
    return cleaned ? `https://i.ytimg.com/vi/${encodeURIComponent(cleaned)}/hqdefault.jpg` : '';
  }

  function toSortablePosition(value, fallbackIndex){
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallbackIndex + 1;
  }

  function normalizeHeroSlide(slide, fallbackIndex){
    const fallback = FALLBACK_HERO_SLIDES[fallbackIndex] || FALLBACK_HERO_SLIDES[0];
    const source = slide || fallback;
    return {
      id: source.id || fallback.id || `hero-slide-${fallbackIndex + 1}`,
      position: toSortablePosition(source.position, fallbackIndex),
      imageUrl: resolveAssetUrl(source.imageUrl || fallback.imageUrl),
      fallbackImageUrl: resolveAssetUrl(fallback.imageUrl),
      eyebrow: source.eyebrow || fallback.eyebrow,
      title: source.title || fallback.title,
      subtitle: source.subtitle || fallback.subtitle,
      ctaText: source.ctaText || fallback.ctaText,
      ctaUrl: source.ctaUrl || source.linkUrl || fallback.ctaUrl
    };
  }

  function normalizeFestival(festival, fallbackIndex){
    const fallback = FALLBACK_FESTIVALS[fallbackIndex] || FALLBACK_FESTIVALS[0];
    const source = festival || fallback;
    const isPlaceholder = typeof source.placeholder === 'boolean' ? source.placeholder : !festival;
    const rawDate = source.date || source.startsOn || (isPlaceholder ? t('festival_placeholder_date') : fallback.date);
    return {
      id: source.id || fallback.id || `festival-${fallbackIndex + 1}`,
      position: toSortablePosition(source.position, fallbackIndex),
      title: source.title || (isPlaceholder ? t('festival_placeholder_title') : fallback.title),
      date: rawDate,
      displayDate: isPlaceholder ? rawDate : formatDisplayDate(rawDate),
      description: source.description || (isPlaceholder ? t('festival_placeholder_desc') : fallback.description),
      imageUrl: resolveAssetUrl(source.imageUrl || fallback.imageUrl),
      linkUrl: source.linkUrl || source.ctaUrl || fallback.linkUrl,
      placeholder: isPlaceholder
    };
  }

  function normalizeDarshanVideo(video){
    if (!video || !video.active || !video.videoUrl) return null;
    const thumbnailUrl = resolveAssetUrl(video.thumbnailUrl || video.posterUrl || video.poster || '');
    return {
      active: true,
      id: video.id || 'darshan-video',
      title: video.title || TRANSLATIONS[currentLang].darshan_h2,
      videoUrl: resolveAssetUrl(video.videoUrl),
      posterUrl: thumbnailUrl,
      thumbnailUrl,
      description: video.description || ''
    };
  }

  function sortByPosition(a, b){
    return (a.position || 9999) - (b.position || 9999);
  }

  function preloadImage(url){
    if (!url) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
  }

  function stopHeroRotation(){
    if (heroRotationTimer){
      window.clearInterval(heroRotationTimer);
      heroRotationTimer = null;
    }
  }

  function setActiveHeroSlide(index){
    if (!heroSlidesMount) return;
    const slides = heroSlidesMount.querySelectorAll('.hero-slide');
    if (!slides.length) return;
    heroCurrentIndex = index % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === heroCurrentIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
    const nextSlide = contentState.heroSlides[(heroCurrentIndex + 1) % contentState.heroSlides.length];
    preloadImage(nextSlide && nextSlide.imageUrl);
  }

  function startHeroRotation(){
    stopHeroRotation();
    if (prefersReducedMotion.matches || contentState.heroSlides.length < 2) return;
    heroRotationTimer = window.setInterval(() => {
      heroCurrentIndex = (heroCurrentIndex + 1) % contentState.heroSlides.length;
      setActiveHeroSlide(heroCurrentIndex);
    }, HERO_SLIDE_INTERVAL);
  }

  function setupHeroInteractionPause(){
    const heroSection = document.querySelector('.hero');
    if (!heroSection || heroInteractionWired) return;
    heroInteractionWired = true;

    const pause = () => stopHeroRotation();
    const resume = () => startHeroRotation();

    heroSection.addEventListener('mouseenter', pause);
    heroSection.addEventListener('mouseleave', resume);
    heroSection.addEventListener('focusin', pause);
    heroSection.addEventListener('focusout', event => {
      window.setTimeout(() => {
        if (!heroSection.contains(document.activeElement)) resume();
      }, 0);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        pause();
      } else {
        resume();
      }
    });

    if (typeof prefersReducedMotion.addEventListener === 'function'){
      prefersReducedMotion.addEventListener('change', () => {
        if (prefersReducedMotion.matches) {
          stopHeroRotation();
        } else {
          startHeroRotation();
        }
      });
    }
  }

  function renderHeroSlides(rawSlides){
    if (!heroSlidesMount) return;
    const heroSlides = (Array.isArray(rawSlides) ? rawSlides : [])
      .filter(Boolean)
      .sort(sortByPosition)
      .slice(0, 4)
      .map((slide, index) => normalizeHeroSlide(slide, index));

    while (heroSlides.length < 4){
      heroSlides.push(normalizeHeroSlide(FALLBACK_HERO_SLIDES[heroSlides.length], heroSlides.length));
    }

    contentState.heroSlides = heroSlides;
    heroCurrentIndex = 0;
    heroSlidesMount.innerHTML = '';

    heroSlides.forEach((slide, index) => {
      const item = document.createElement('div');
      item.className = 'hero-slide' + (index === 0 ? ' is-active' : '');
      item.setAttribute('aria-hidden', String(index !== 0));

      const img = document.createElement('img');
      img.src = slide.imageUrl;
      img.alt = slide.title || slide.eyebrow || 'ISKCON Kanpur';
      img.loading = index === 0 ? 'eager' : 'lazy';
      if (index === 0) img.fetchPriority = 'high';
      img.addEventListener('error', () => {
        if (img.dataset.fallbackApplied === '1'){
          img.src = TRANSPARENT_PIXEL_DATA_URI;
          return;
        }
        img.dataset.fallbackApplied = '1';
        img.src = slide.fallbackImageUrl || resolveAssetUrl(FALLBACK_HERO_SLIDES[index] && FALLBACK_HERO_SLIDES[index].imageUrl ? FALLBACK_HERO_SLIDES[index].imageUrl : FALLBACK_HERO_SLIDES[0].imageUrl);
      });
      item.appendChild(img);
      heroSlidesMount.appendChild(item);

      preloadImage(slide.imageUrl);
      preloadImage(slide.fallbackImageUrl);
    });

    preloadImage(heroSlides[1] && heroSlides[1].imageUrl);
    startHeroRotation();
    setupHeroInteractionPause();
  }

  function createDarshanEmptyState(){
    const empty = document.createElement('div');
    empty.className = 'darshan-empty';
    empty.innerHTML = `
      <div class="darshan-empty-inner">
        <div class="darshan-empty-icon">ॐ</div>
        <div class="eyebrow">${TRANSLATIONS[currentLang].darshan_eyebrow}</div>
        <h3>${TRANSLATIONS[currentLang].darshan_empty_title}</h3>
        <p>${TRANSLATIONS[currentLang].darshan_empty_desc}</p>
      </div>
    `;
    return empty;
  }

  function openDarshanModal(video){
    if (!darshanModal || !darshanModalVideo || !video) return;
    darshanTriggerFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    darshanModal.hidden = false;
    darshanModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    while (darshanModalVideo.firstChild) darshanModalVideo.removeChild(darshanModalVideo.firstChild);
    const source = document.createElement('source');
    source.src = video.videoUrl;
    darshanModalVideo.poster = video.posterUrl || '';
    darshanModalVideo.preload = 'metadata';
    darshanModalVideo.appendChild(source);
    darshanModalVideo.load();
    if (darshanModalTitle) darshanModalTitle.textContent = video.title || TRANSLATIONS[currentLang].darshan_h2;

    const closeButton = darshanModal.querySelector('.darshan-modal-close');
    if (closeButton) closeButton.focus();
  }

  function closeDarshanModal(){
    if (!darshanModal || !darshanModalVideo) return;
    darshanModalVideo.pause();
    darshanModalVideo.removeAttribute('src');
    while (darshanModalVideo.firstChild) darshanModalVideo.removeChild(darshanModalVideo.firstChild);
    darshanModal.hidden = true;
    darshanModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (darshanTriggerFocus && typeof darshanTriggerFocus.focus === 'function'){
      darshanTriggerFocus.focus();
    }
    darshanTriggerFocus = null;
  }

  function renderDarshanSection(rawVideo){
    if (!darshanMount) return;
    darshanMount.innerHTML = '';
    const video = normalizeDarshanVideo(rawVideo);
    contentState.darshanVideo = video || FALLBACK_DARSHAN;

    if (!video){
      darshanMount.appendChild(createDarshanEmptyState());
      return;
    }

    const card = document.createElement('div');
    card.className = 'darshan-card';
    card.innerHTML = `
      <div class="darshan-media">
        ${video.thumbnailUrl
          ? `<img class="darshan-preview-image" src="${escapeHtml(video.thumbnailUrl)}" alt="${escapeHtml(video.title)}">`
          : `<video
            class="darshan-preview-video"
            muted
            playsinline
            preload="metadata"
            src="${escapeHtml(video.videoUrl)}"
            aria-hidden="true"></video>`}
          <div class="darshan-play-overlay">
            <button type="button" class="darshan-play-button" data-darshan-open>${t('darshan_watch')}</button>
          </div>
        </div>
      <div class="darshan-copy">
        <div class="eyebrow">${t('darshan_eyebrow')}</div>
        <h3>${video.title}</h3>
        <p>${video.description || t('darshan_intro')}</p>
        <div class="darshan-actions">
          <span class="darshan-chip">${t('darshan_active_label')}</span>
          <span class="darshan-chip">${t('darshan_open_fullscreen')}</span>
        </div>
      </div>
    `;

      const previewVideo = card.querySelector('.darshan-preview-video');
      if (previewVideo){
        previewVideo.src = video.videoUrl;
        previewVideo.poster = video.posterUrl || '';
      }
      const previewImage = card.querySelector('.darshan-preview-image');
      if (previewImage){
        previewImage.loading = 'eager';
        previewImage.decoding = 'async';
      }

    const openButton = card.querySelector('[data-darshan-open]');
    if (openButton){
      openButton.addEventListener('click', () => openDarshanModal(video));
    }

    const media = card.querySelector('.darshan-media');
    if (media){
      media.addEventListener('click', event => {
        if (event.target.closest('[data-darshan-open]')) return;
        openDarshanModal(video);
      });
    }

    darshanMount.appendChild(card);
  }

  function renderFestivalSection(rawFestivals){
    if (!festivalGridMount) return;
    festivalGridMount.innerHTML = '';
    const festivals = (Array.isArray(rawFestivals) ? rawFestivals : [])
      .filter(Boolean)
      .sort(sortByPosition)
      .slice(0, 4)
      .map((festival, index) => normalizeFestival(festival, index));

    while (festivals.length < 4){
      festivals.push(normalizeFestival(FALLBACK_FESTIVALS[festivals.length], festivals.length));
    }

    contentState.festivals = festivals;

    festivals.forEach(festival => {
      const card = document.createElement('article');
      card.className = 'festival-card' + (festival.placeholder ? ' festival-placeholder' : '');
      const linkIsExternal = /^https?:\/\//i.test(festival.linkUrl || '');
      const actionLabel = festival.placeholder ? TRANSLATIONS[currentLang].festival_placeholder_cta : TRANSLATIONS[currentLang].festival_read_more;
      const displayDate = festival.displayDate || festival.date || '';

      card.innerHTML = `
        <div class="festival-media">
          <img src="${festival.imageUrl}" alt="${festival.title}">
          <span class="festival-date">${displayDate}</span>
        </div>
        <div class="festival-body">
          <h3>${festival.title}</h3>
          <p>${festival.description}</p>
          <a class="festival-link" href="${festival.linkUrl || '#contact'}"${linkIsExternal ? ' target="_blank" rel="noopener"' : ''}>${actionLabel}</a>
        </div>
      `;
      festivalGridMount.appendChild(card);
    });
  }

  function normalizeYouTubeVideo(video, index){
    const fallbackTitle = FALLBACK_YOUTUBE_VIDEOS[index] ? FALLBACK_YOUTUBE_VIDEOS[index].title : `Video ${index + 1}`;
    const source = video || {};
    const videoId = typeof source.videoId === 'string' ? source.videoId.trim() : '';
    const placeholder = !videoId;
    const title = source.title || (placeholder ? t('youtube_placeholder_title') : fallbackTitle);
    const publishedAt = source.publishedAt || '';
    return {
      videoId,
      title,
      thumbnailUrl: source.thumbnailUrl || createYouTubePlaceholderThumbnail(title, index),
      publishedAt,
      displayPublishedAt: publishedAt ? formatDisplayDate(publishedAt) : '',
      description: source.description || (placeholder ? t('youtube_placeholder_desc') : ''),
      placeholder,
      shareUrl: videoId ? getYouTubeEmbedUrl(videoId, false) : YOUTUBE_FALLBACK_CHANNEL_URL
    };
  }

  function normalizeFeaturedYouTubeVideo(video, index){
    const source = video || {};
    const videoId = typeof source.videoId === 'string' ? source.videoId.trim() : '';
    if (!videoId) return null;
    return normalizeYouTubeVideo({
      videoId,
      title: source.title || 'Featured Video',
      thumbnailUrl: getYouTubeThumbnailUrl(videoId),
      publishedAt: ''
    }, index);
  }

  function createYouTubeCard(video, index){
    const card = document.createElement('article');
    card.className = 'youtube-card' + (video.placeholder ? ' youtube-card-placeholder' : '');
    const thumbnail = video.thumbnailUrl || createYouTubePlaceholderThumbnail(video.title, index);
    const publishedAt = video.displayPublishedAt || formatDisplayDate(video.publishedAt);
    const openLabel = video.placeholder ? t('btn_subscribe') : 'Play video';
    const description = video.placeholder
      ? video.description || t('youtube_placeholder_desc')
      : 'Click to open the full YouTube player.';

    card.innerHTML = `
      <div class="youtube-card-media">
        <img src="${escapeXml(thumbnail)}" alt="${escapeXml(video.title)}" loading="lazy" decoding="async">
        <button type="button" class="youtube-card-play" ${video.placeholder ? 'disabled' : ''} aria-label="${escapeXml(openLabel)}">
          <span>▶</span>
        </button>
      </div>
      <div class="youtube-card-body">
        <div class="youtube-card-meta">${escapeXml(publishedAt || 'YouTube')}</div>
        <h3>${escapeXml(video.title)}</h3>
        <p>${description}</p>
      </div>
    `;

    const button = card.querySelector('.youtube-card-play');
    const media = card.querySelector('.youtube-card-media');
    if (button && !video.placeholder){
      button.addEventListener('click', () => openYouTubeModal(video));
    }
    if (media && !video.placeholder){
      media.addEventListener('click', event => {
        if (event.target.closest('button')) return;
        openYouTubeModal(video);
      });
    }

    return card;
  }

  function closeYouTubeModal(){
    if (!youtubeModal || !youtubeModalFrame) return;
    youtubeModalFrame.src = 'about:blank';
    youtubeModal.hidden = true;
    youtubeModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (youtubeTriggerFocus && typeof youtubeTriggerFocus.focus === 'function'){
      youtubeTriggerFocus.focus();
    }
    youtubeTriggerFocus = null;
  }

  function openYouTubeModal(video){
    if (!youtubeModal || !youtubeModalFrame || !video || !video.videoId) return;
    youtubeTriggerFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    youtubeModal.hidden = false;
    youtubeModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    youtubeModalFrame.title = video.title ? `${video.title} - YouTube video player` : 'YouTube video player';
    youtubeModalFrame.src = getYouTubeEmbedUrl(video.videoId, true);

    const closeButton = youtubeModal.querySelector('.youtube-modal-close');
    if (closeButton) closeButton.focus();
  }

  function renderYouTubeSection(rawYouTube){
    if (!youtubeGridMount) return;
    youtubeGridMount.innerHTML = '';

    const channelUrl = rawYouTube && rawYouTube.channelUrl ? rawYouTube.channelUrl : YOUTUBE_FALLBACK_CHANNEL_URL;
    const featuredVideos = Array.isArray(rawYouTube && rawYouTube.featuredVideos)
      ? rawYouTube.featuredVideos.filter(Boolean).slice(0, 2).map((video, index) => normalizeFeaturedYouTubeVideo(video, index)).filter(Boolean)
      : [];
    const recentVideos = rawYouTube && rawYouTube.loading
      ? []
      : Array.isArray(rawYouTube && rawYouTube.videos)
      ? rawYouTube.videos.filter(Boolean).slice(0, 3).map((video, index) => normalizeYouTubeVideo(video, index))
      : [];
    const renderedRecentVideos = recentVideos.length
      ? [...recentVideos]
      : [...FALLBACK_YOUTUBE_VIDEOS].map((video, index) => normalizeYouTubeVideo(video, index));
    const hasRenderableVideos = featuredVideos.length > 0 || renderedRecentVideos.length > 0;

    if (rawYouTube && rawYouTube.loading && !hasRenderableVideos) {
      youtubeGridMount.innerHTML = `
        <div class="youtube-empty" style="grid-column:1/-1;">
          <strong>Loading recent videos...</strong>
          <div>The latest YouTube videos will appear here shortly.</div>
        </div>
      `;
      return;
    }

    if (rawYouTube && rawYouTube.errorMessage && !hasRenderableVideos) {
      youtubeGridMount.innerHTML = `
        <div class="youtube-empty" style="grid-column:1/-1;">
          <strong>Unable to load recent videos</strong>
          <div>${escapeXml(rawYouTube.errorMessage)}</div>
        </div>
      `;
      return;
    }

    const featuredCards = featuredVideos.length ? document.createElement('div') : null;
    const recentCards = document.createElement('div');

    if (featuredCards) {
      featuredCards.className = 'featured-youtube-grid';
      featuredVideos.forEach((video, index) => {
        featuredCards.appendChild(createYouTubeCard(video, index));
      });
    }

    while (renderedRecentVideos.length < 3){
      const nextIndex = renderedRecentVideos.length;
      renderedRecentVideos.push(normalizeYouTubeVideo(FALLBACK_YOUTUBE_VIDEOS[nextIndex], nextIndex));
    }

    recentCards.className = 'youtube-grid youtube-recent-grid';
    renderedRecentVideos.slice(0, 3).forEach((video, index) => {
      recentCards.appendChild(createYouTubeCard(video, index));
    });

    contentState.youtube = {
      channelId: rawYouTube && rawYouTube.channelId ? rawYouTube.channelId : '',
      channelTitle: rawYouTube && rawYouTube.channelTitle ? rawYouTube.channelTitle : '',
      channelUrl,
      featuredVideos,
      videos: recentVideos,
      loading: false,
      errorMessage: ''
    };

    if (youtubeSubscribeBtn){
      youtubeSubscribeBtn.href = channelUrl || YOUTUBE_FALLBACK_CHANNEL_URL;
      youtubeSubscribeBtn.rel = 'noopener noreferrer';
      youtubeSubscribeBtn.title = rawYouTube && rawYouTube.channelTitle
        ? `Subscribe to ${rawYouTube.channelTitle}`
        : 'Subscribe on YouTube';
    }

    if (featuredCards) {
      youtubeGridMount.appendChild(featuredCards);
    }
    youtubeGridMount.appendChild(recentCards);

  }

  function renderDynamicContent(){
    try {
      renderDarshanSection(contentState.darshanVideo);
    } catch (error) {
      console.error('Unable to render darshan section:', {
        error
      });
    }

    try {
      renderFestivalSection(contentState.festivals);
    } catch (error) {
      console.error('Unable to render festival section:', {
        error
      });
    }

    try {
      renderYouTubeSection(contentState.youtube);
    } catch (error) {
      console.error('Unable to render YouTube section:', {
        error
      });
    }
  }

  async function loadPublicContent(){
    renderHeroSlides(contentState.heroSlides);
    renderDynamicContent();

    const publicContentPromise = fetchJsonWithTimeout(CONTENT_API_URL)
      .then((data) => {
        const heroSlides = Array.isArray(data.heroSlides) && data.heroSlides.length
          ? data.heroSlides
              .filter(Boolean)
              .sort(sortByPosition)
              .slice(0, 4)
              .map((slide, index) => normalizeHeroSlide(slide, index))
          : [...FALLBACK_HERO_SLIDES];
        const festivals = Array.isArray(data.festivals) && data.festivals.length
          ? data.festivals
              .filter(Boolean)
              .sort(sortByPosition)
              .slice(0, 4)
              .map((festival, index) => normalizeFestival(festival, index))
          : [...FALLBACK_FESTIVALS];
        const featuredYoutubeVideos = Array.isArray(data.featuredYoutubeVideos)
          ? data.featuredYoutubeVideos
              .filter(Boolean)
              .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
              .slice(0, 2)
              .map((video, index) => normalizeFeaturedYouTubeVideo(video, index))
              .filter(Boolean)
          : [];
        const darshanVideo = normalizeDarshanVideo(data.darshanVideo);

        contentState.heroSlides = heroSlides.slice(0, 4);
        while (contentState.heroSlides.length < 4){
          contentState.heroSlides.push(normalizeHeroSlide(FALLBACK_HERO_SLIDES[contentState.heroSlides.length], contentState.heroSlides.length));
        }
        contentState.festivals = festivals.slice(0, 4);
        while (contentState.festivals.length < 4){
          contentState.festivals.push(normalizeFestival(FALLBACK_FESTIVALS[contentState.festivals.length], contentState.festivals.length));
        }
        contentState.darshanVideo = darshanVideo || FALLBACK_DARSHAN;
        contentState.youtube = {
          ...contentState.youtube,
          featuredVideos: featuredYoutubeVideos
        };
        renderHeroSlides(contentState.heroSlides);
        renderDynamicContent();
      })
      .catch((error) => {
        console.error('Unable to load public content:', {
          endpoint: error && error.endpoint ? error.endpoint : buildApiUrl(CONTENT_API_URL),
          status: error && typeof error.status === 'number' ? error.status : 0,
          responseBody: error && Object.prototype.hasOwnProperty.call(error, 'data') ? error.data : null,
          error
        });
      });

    const youtubePromise = fetchJsonWithTimeout(YOUTUBE_RECENT_API_URL)
      .then((data) => {
        const responseData = data || {};
        const videos = Array.isArray(responseData.videos)
          ? responseData.videos.filter(Boolean).slice(0, 3)
          : [];
        const normalizedVideos = videos.map((video, index) => normalizeYouTubeVideo(video, index));
        const hasChannel = Boolean(responseData.channelId);

        if (!hasChannel) {
          contentState.youtube = {
            ...contentState.youtube,
            channelId: '',
            channelTitle: '',
            channelUrl: YOUTUBE_FALLBACK_CHANNEL_URL,
            videos: [...FALLBACK_YOUTUBE_VIDEOS].map((video, index) => normalizeYouTubeVideo(video, index)),
            loading: false,
            errorMessage: ''
          };
        } else if (!normalizedVideos.length) {
          console.error('YouTube endpoint returned a channel but no videos:', {
            endpoint: buildApiUrl(YOUTUBE_RECENT_API_URL),
            status: 200,
            responseBody: responseData
          });
          contentState.youtube = {
            ...contentState.youtube,
            channelId: responseData.channelId || '',
            channelTitle: responseData.channelTitle || '',
            channelUrl: responseData.channelUrl || YOUTUBE_FALLBACK_CHANNEL_URL,
            videos: [],
            loading: false,
            errorMessage: 'Unable to load recent videos.'
          };
        } else {
          contentState.youtube = {
            ...contentState.youtube,
            channelId: responseData.channelId || '',
            channelTitle: responseData.channelTitle || '',
            channelUrl: responseData.channelUrl || YOUTUBE_FALLBACK_CHANNEL_URL,
            videos: normalizedVideos,
            loading: false,
            errorMessage: ''
          };
        }

        renderDynamicContent();
      })
      .catch((error) => {
        const errorCode = String(error && error.code || '').trim();
        const errorStatus = Number(error && error.status || 0);
        if (errorCode === 'YOUTUBE_CHANNEL_NOT_CONFIGURED' || errorStatus === 404) {
          contentState.youtube = {
            ...contentState.youtube,
            channelId: '',
            channelTitle: '',
            channelUrl: YOUTUBE_FALLBACK_CHANNEL_URL,
            videos: [...FALLBACK_YOUTUBE_VIDEOS].map((video, index) => normalizeYouTubeVideo(video, index)),
            loading: false,
            errorMessage: ''
          };
        } else {
          console.error('Unable to load recent YouTube videos:', {
            endpoint: error && error.endpoint ? error.endpoint : buildApiUrl(YOUTUBE_RECENT_API_URL),
            status: errorStatus,
            responseBody: error && Object.prototype.hasOwnProperty.call(error, 'data') ? error.data : null,
            error
          });
          contentState.youtube = {
            ...contentState.youtube,
            channelId: '',
            channelTitle: '',
            channelUrl: YOUTUBE_FALLBACK_CHANNEL_URL,
            videos: [],
            loading: false,
            errorMessage: 'Unable to load recent videos.'
          };
        }

        renderDynamicContent();
      });

    await Promise.allSettled([publicContentPromise, youtubePromise]);
    }

  if (darshanModal){
    modalCloseTargets.forEach(target => target.addEventListener('click', closeDarshanModal));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !darshanModal.hidden) closeDarshanModal();
    });
  }

  if (youtubeModal){
    youtubeModalCloseTargets.forEach(target => target.addEventListener('click', closeYouTubeModal));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !youtubeModal.hidden) closeYouTubeModal();
    });
  }

  // ============================================================
  // GOOGLE FORM — captures donor details (Razorpay only gets the payment)
  // ------------------------------------------------------------
  // How to set this up (~5 minutes, free, no coding):
  //   1. Go to forms.google.com and create a new form titled e.g.
  //      "ISKCON Kanpur — Donation Details". Add these questions,
  //      in any order, all as "Short answer" type:
  //        Name, Phone, Email, PAN, Dedication / Note, Amount, Seva
  //   2. Click the 3-dot menu (top right) > "Get pre-filled link".
  //   3. Fill each field with a dummy value (e.g. type "TEST" in each)
  //      and click "Get link" at the bottom.
  //   4. Copy that pre-filled link somewhere, then open it — it looks like:
  //        https://docs.google.com/forms/d/e/XXXXXXX/viewform?
  //          usp=pp_url&entry.111111=TEST&entry.222222=TEST&...
  //   5. From that link, copy:
  //        - The base part before "/viewform" → that's your FORM_ID
  //        - Each "entry.NNNNNN=" number → match it to the right field below
  //   6. Paste the FORM_ID and each entry.NNNNNN below. Leave "entry."
  //      as the prefix (already typed in for you).
  //   7. In your Google Form's Responses tab, click the green Sheets
  //      icon to auto-collect every submission into a spreadsheet.
  // ============================================================
  const GOOGLE_FORM = {
    actionUrl: 'https://docs.google.com/forms/d/e/PASTE_YOUR_FORM_ID/formResponse',
    entries: {
      name:        'entry.PASTE_NAME_ENTRY_ID',
      phone:       'entry.PASTE_PHONE_ENTRY_ID',
      email:       'entry.PASTE_EMAIL_ENTRY_ID',
      pan:         'entry.PASTE_PAN_ENTRY_ID',
      dedication:  'entry.PASTE_DEDICATION_ENTRY_ID',
      amount:      'entry.PASTE_AMOUNT_ENTRY_ID',
      seva:        'entry.PASTE_SEVA_ENTRY_ID'
    }
  };

  function submitDonorDetailsToGoogleForm(details){
    // Skip quietly if the site owner hasn't configured this yet —
    // never let a missing Google Form block someone from donating.
    if (GOOGLE_FORM.actionUrl.includes('PASTE_YOUR_FORM_ID')) {
      console.warn('Google Form not configured yet — skipping donor-detail capture. See GOOGLE_FORM config at top of script.');
      return;
    }
    const fd = new FormData();
    if (GOOGLE_FORM.entries.name)       fd.append(GOOGLE_FORM.entries.name, details.name || '');
    if (GOOGLE_FORM.entries.phone)      fd.append(GOOGLE_FORM.entries.phone, details.phone || '');
    if (GOOGLE_FORM.entries.email)      fd.append(GOOGLE_FORM.entries.email, details.email || '');
    if (GOOGLE_FORM.entries.pan)        fd.append(GOOGLE_FORM.entries.pan, details.pan || '');
    if (GOOGLE_FORM.entries.dedication) fd.append(GOOGLE_FORM.entries.dedication, details.dedication || '');
    if (GOOGLE_FORM.entries.amount)     fd.append(GOOGLE_FORM.entries.amount, details.amount || '');
    if (GOOGLE_FORM.entries.seva)       fd.append(GOOGLE_FORM.entries.seva, details.seva || 'General Donations');

    // no-cors + keepalive: fire-and-forget so it survives the page
    // navigating away to Razorpay right after this call.
    fetch(GOOGLE_FORM.actionUrl, { method: 'POST', mode: 'no-cors', keepalive: true, body: fd })
      .catch(() => { /* opaque response expected under no-cors; errors here are non-fatal */ });
  }

  renderFooterCopyright();

  // Countdown to Sri Krishna Janmashtami (ISKCON observance date) — [EDIT] target date if needed
  (function(){
    var target = new Date('2026-09-04T00:00:00+05:30').getTime();
    var daysEl = document.getElementById('cd-days');
    var hoursEl = document.getElementById('cd-hours');
    var minsEl = document.getElementById('cd-mins');
    var secsEl = document.getElementById('cd-secs');

    function pad(n){ return String(n).padStart(2, '0'); }

    function tick(){
      var now = new Date().getTime();
      var diff = target - now;
      if (diff <= 0){
        daysEl.textContent = hoursEl.textContent = minsEl.textContent = secsEl.textContent = '00';
        return;
      }
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var secs = Math.floor((diff % (1000 * 60)) / 1000);
      daysEl.textContent = pad(days);
      hoursEl.textContent = pad(hours);
      minsEl.textContent = pad(mins);
      secsEl.textContent = pad(secs);
    }
    tick();
    setInterval(tick, 1000);
  })();

  // General donation form: amount chip selection + custom amount sync
  const chips = document.querySelectorAll('.amount-chip');
  const customAmount = document.getElementById('customAmount');
  const generalBtn = document.getElementById('generalDonateBtn');
  const sevaBanner = document.getElementById('sevaBanner');
  const sevaBannerName = document.getElementById('sevaBannerName');
  const clearSevaBtn = document.getElementById('clearSevaBtn');
  const paymentStatusEl = document.getElementById('paymentStatus');
  let selectedSeva = null;
  let lastAmount = 1101;
  let paymentCheckoutScriptPromise = null;
  let paymentFlowState = 'idle';
  let paymentStatusPollToken = 0;

  // Maps the canonical English seva name (used as the donor-details key)
  // to its data-i18n title key, so the banner can show the seva name in
  // whichever language is active.
  const SEVA_TITLE_KEY = {
    'Silver Kalash Abhishek': 'seva1_title',
    'Bronze Kalash Abhishek': 'seva2_title',
    'Divya Snan': 'seva3_title',
    'Tulsi Arpan': 'seva4_title',
    'Folk Arti': 'seva5_title',
    'Sankha Abhishek': 'seva6_title'
  };
  const SEVA_AMOUNT_MAP = {
    'Silver Kalash Abhishek': 51000,
    'Bronze Kalash Abhishek': 21001,
    'Divya Snan': 3501,
    'Tulsi Arpan': 1501,
    'Folk Arti': 2501,
    'Sankha Abhishek': 11001
  };

  function fmt(n){ return Number(n).toLocaleString('en-IN'); }

  function getPaymentLabelKey(){
    switch (paymentFlowState){
      case 'creating':
        return 'payment_creating_order';
      case 'opening':
        return 'payment_opening_checkout';
      case 'verifying':
        return 'payment_verifying';
      case 'pending':
        return 'payment_pending';
      default:
        return '';
    }
  }

  function setPaymentStatus(messageKey, tone){
    if (!paymentStatusEl) return;
    paymentStatusEl.dataset.messageKey = messageKey || '';
    paymentStatusEl.dataset.tone = tone || '';
    paymentStatusEl.className = 'payment-status' + (tone ? ` is-${tone}` : '');
    paymentStatusEl.textContent = messageKey ? (TRANSLATIONS[currentLang][messageKey] || messageKey) : '';
  }

  function clearPaymentStatus(){
    setPaymentStatus('', '');
  }

  function setDonateButtonBusy(isBusy){
    generalBtn.disabled = isBusy;
    if (isBusy){
      generalBtn.textContent = TRANSLATIONS[currentLang][getPaymentLabelKey()] || generalBtn.textContent;
      return;
    }
    setActiveAmount(lastAmount, false);
  }

  function setPaymentFlowState(state, messageKey, tone){
    paymentFlowState = state;
    setPaymentStatus(messageKey, tone);
    setDonateButtonBusy(state !== 'idle');
  }

  function cancelPaymentStatusPolling(){
    paymentStatusPollToken += 1;
  }

  function readDonationAmount(){
    const customValue = Number(customAmount.value);
    if (Number.isFinite(customValue) && customValue > 0) return Math.floor(customValue);
    if (selectedSeva === 'General Donations') return 0;
    const activeChip = document.querySelector('.amount-chip.active');
    const chipValue = Number(activeChip && activeChip.dataset.amount);
    if (Number.isFinite(chipValue) && chipValue > 0) return Math.floor(chipValue);
    return 0;
  }

  function getSelectedSevaValue(){
    return selectedSeva || 'General Donations';
  }

  function validateDonationForm(){
    const donorName = document.getElementById('donorName');
    const donorPhone = document.getElementById('donorPhone');
    const donorEmail = document.getElementById('donorEmail');
    const nameValue = donorName.value.trim();
    const phoneValue = donorPhone.value.replace(/\s+/g, '');
    const emailValue = donorEmail.value.trim();
    const amountValue = readDonationAmount();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    if (!nameValue){
      donorName.focus();
      throw new Error(TRANSLATIONS[currentLang].alert_name_required);
    }
    if (!phoneValue){
      donorPhone.focus();
      throw new Error(TRANSLATIONS[currentLang].alert_phone_required);
    }
    if (!emailValue){
      donorEmail.focus();
      throw new Error(TRANSLATIONS[currentLang].alert_email_required);
    }
    if (!emailPattern.test(emailValue)){
      donorEmail.focus();
      throw new Error(TRANSLATIONS[currentLang].alert_email_invalid);
    }
    if (!phonePattern.test(phoneValue)){
      donorPhone.focus();
      throw new Error('Please enter a valid 10-digit Indian phone number.');
    }
    if (!Number.isFinite(amountValue) || amountValue <= 0){
      throw new Error(TRANSLATIONS[currentLang].payment_amount_invalid);
    }
    const fixedAmount = SEVA_AMOUNT_MAP[getSelectedSevaValue()];
    if (fixedAmount && amountValue !== fixedAmount){
      throw new Error(TRANSLATIONS[currentLang].payment_seva_amount_mismatch);
    }

    return {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      pan: document.getElementById('donorPan').value.trim(),
      dedication: document.getElementById('donorNote').value.trim(),
      amount: amountValue,
      seva: getSelectedSevaValue()
    };
  }

  function normalizeRazorpayContact(phone){
    const digitsOnly = String(phone || '').replace(/\s+/g, '');
    if (/^[6-9]\d{9}$/.test(digitsOnly)) return digitsOnly;
    return digitsOnly;
  }

  async function readErrorMessage(response, fallbackMessage){
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')){
      const data = await response.json().catch(() => null);
      if (data && typeof data === 'object'){
        if (data.error && typeof data.error === 'object' && typeof data.error.message === 'string' && data.error.message.trim()){
          return data.error.message.trim();
        }
        if (typeof data.message === 'string' && data.message.trim()){
          return data.message.trim();
        }
        if (typeof data.error === 'string' && data.error.trim()){
          return data.error.trim();
        }
      }
    } else {
      const text = await response.text().catch(() => '');
      if (text && text.trim()){
        return text.trim();
      }
    }
    return fallbackMessage;
  }

  function loadRazorpayCheckoutScript(){
    if (window.Razorpay) return Promise.resolve();
    if (paymentCheckoutScriptPromise) return paymentCheckoutScriptPromise;

    paymentCheckoutScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = RAZORPAY_CHECKOUT_URL;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(TRANSLATIONS[currentLang].payment_checkout_failed));
      document.head.appendChild(script);
    });

    return paymentCheckoutScriptPromise;
  }

  async function createPaymentOrder(details){
    const response = await fetch(buildApiUrl(PAYMENT_CREATE_ORDER_URL), {
      method: 'POST',
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    });

    if (!response.ok){
      throw new Error(await readErrorMessage(response, TRANSLATIONS[currentLang].payment_order_failed));
    }

    return response.json();
  }

  function getDonationPaymentStatus(status){
    const normalized = String(status || '').toLowerCase();
    if (['created', 'pending', 'authorized', 'captured', 'failed', 'refunded'].includes(normalized)) return normalized;
    return '';
  }

  function isVerifiedPaymentResponse(data){
    if (!data || typeof data !== 'object') return false;
    const statusValue = String(data.status || data.paymentStatus || data.orderStatus || '').toLowerCase();
    return data.verified === true || data.success === true || ['verified', 'success', 'captured', 'paid'].includes(statusValue);
  }

  async function verifyPaymentWithBackend(orderContext, razorpayResponse){
    const payload = {
      amount: orderContext.amount,
      currency: orderContext.currency,
      seva: orderContext.seva,
      name: orderContext.name,
      phone: orderContext.phone,
      email: orderContext.email,
      pan: orderContext.pan,
      dedication: orderContext.dedication,
      razorpay_order_id: razorpayResponse.razorpay_order_id,
      razorpay_payment_id: razorpayResponse.razorpay_payment_id,
      razorpay_signature: razorpayResponse.razorpay_signature
    };

    for (const url of PAYMENT_VERIFY_URLS){
      try{
        const response = await fetch(buildApiUrl(url), {
          method: 'POST',
          cache: 'no-store',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (!response.ok){
          const message = await readErrorMessage(response, TRANSLATIONS[currentLang].payment_verification_error);
          if (response.status >= 400 && response.status < 500){
            return { verified: false, pending: false, error: true, message, endpoint: url };
          }
          continue;
        }
        const data = await response.json();
        if (isVerifiedPaymentResponse(data)){
          return { verified: true, data, endpoint: url };
        }
        const statusValue = getDonationPaymentStatus(data.status || data.paymentStatus || data.orderStatus);
        if (['created', 'pending', 'authorized'].includes(statusValue)){
          return { verified: false, pending: true, data, endpoint: url, status: statusValue };
        }
        if (['failed', 'refunded'].includes(statusValue)){
          return { verified: false, pending: false, error: true, data, endpoint: url, message: TRANSLATIONS[currentLang].payment_verify_failed };
        }
      }catch(_err){
        // Try the next configured endpoint.
      }
    }

    return { verified: false, pending: true };
  }

  async function fetchDonationPaymentStatus(orderId){
    const response = await fetch(buildApiUrl(PAYMENT_STATUS_URL) + `?razorpay_order_id=${encodeURIComponent(orderId)}`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok){
      throw new Error(await readErrorMessage(response, TRANSLATIONS[currentLang].payment_verify_failed));
    }

    return response.json();
  }

  function sleep(ms){
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  async function waitForPaymentConfirmation(orderId, pollToken){
    const maxAttempts = 12;
    const intervalMs = 2500;

    for (let attempt = 0; attempt < maxAttempts; attempt += 1){
      if (pollToken !== paymentStatusPollToken) return { cancelled: true };

      try{
        const data = await fetchDonationPaymentStatus(orderId);
        const statusValue = getDonationPaymentStatus(data.status || data.paymentStatus || data.orderStatus);
        if (data.verified === true || ['captured', 'paid'].includes(String(statusValue).toLowerCase())){
          return { verified: true, data };
        }
        if (['failed', 'refunded'].includes(statusValue)){
          return { verified: false, failed: true, data };
        }
      }catch(_err){
        // Keep polling while the backend/webhook catches up.
      }

      await sleep(intervalMs);
    }

    return { verified: false, pending: true };
  }

  async function launchRazorpayCheckout(orderData, donationDetails){
    await loadRazorpayCheckoutScript();

    if (typeof window.Razorpay !== 'function'){
      throw new Error(TRANSLATIONS[currentLang].payment_checkout_failed);
    }

    const checkout = new window.Razorpay({
      key: orderData.keyId,
      amount: orderData.amount,
      currency: orderData.currency || 'INR',
      order_id: orderData.orderId,
      name: 'ISKCON Kanpur',
      description: donationDetails.seva === 'General Donations' ? 'General Donations' : donationDetails.seva,
      prefill: {
        name: donationDetails.name,
        email: donationDetails.email,
        contact: normalizeRazorpayContact(donationDetails.phone)
      },
      theme: {
        color: '#6B1029'
      },
      modal: {
        confirm_close: true,
        escape: true,
        backdropclose: false,
        animation: true,
        ondismiss: () => {
          cancelPaymentStatusPolling();
          if (paymentFlowState !== 'verifying'){
            setPaymentFlowState('idle', 'payment_cancelled', 'error');
          }
        }
      },
      retry: {
        enabled: true,
        max_count: 4
      },
      notes: {
        seva: donationDetails.seva,
        dedication: donationDetails.dedication || '',
        pan: donationDetails.pan || ''
      },
      handler: async function(response){
        setPaymentFlowState('verifying', 'payment_verifying', 'pending');
        try{
          const verification = await verifyPaymentWithBackend(orderData, response);
          if (verification.verified){
            setPaymentFlowState('idle', 'payment_verified', 'success');
            return;
          }
          if (verification.error){
            setPaymentFlowState('idle', verification.message || 'payment_verify_failed', 'error');
            return;
          }
          if (verification.pending){
            setPaymentFlowState('pending', 'payment_pending', 'pending');
            const pollToken = ++paymentStatusPollToken;
            const confirmation = await waitForPaymentConfirmation(orderData.orderId, pollToken);
            if (pollToken !== paymentStatusPollToken) return;
            if (confirmation.verified){
              setPaymentFlowState('idle', 'payment_verified', 'success');
              return;
            }
            if (confirmation.failed){
              setPaymentFlowState('idle', 'payment_verify_failed', 'error');
              return;
            }
            setPaymentFlowState('idle', 'payment_verify_failed', 'error');
            return;
          }
          setPaymentFlowState('idle', 'payment_verify_failed', 'error');
        }catch(_err){
          setPaymentFlowState('idle', 'payment_verification_error', 'error');
        }
      }
    });

    checkout.on('payment.failed', () => {
      setPaymentFlowState('idle', 'payment_failed', 'error');
    });

    checkout.open();
  }

  async function startPaymentFlow(){
    cancelPaymentStatusPolling();
    let donationDetails;
    try{
      donationDetails = validateDonationForm();
    }catch(error){
      setPaymentFlowState('idle', '', '');
      setPaymentStatus(error.message, 'error');
      return;
    }

    try{
      setPaymentFlowState('creating', 'payment_creating_order', 'pending');
      const orderData = await createPaymentOrder(donationDetails);
      if (!orderData || !orderData.orderId || !orderData.keyId){
        throw new Error(TRANSLATIONS[currentLang].payment_order_failed);
      }

      submitDonorDetailsToGoogleForm(donationDetails);
      setPaymentFlowState('opening', 'payment_opening_checkout', 'pending');
      await launchRazorpayCheckout(orderData, donationDetails);
    }catch(error){
      setPaymentFlowState('idle', '', '');
      setPaymentStatus(error && error.message ? error.message : TRANSLATIONS[currentLang].payment_order_failed, 'error');
    }
  }

  function setActiveAmount(amount, clearCustomIfChip){
    lastAmount = amount;
    const donateWord = TRANSLATIONS[currentLang].donate_word;
    generalBtn.textContent = donateWord + ' ₹' + fmt(amount);
    if (clearCustomIfChip) customAmount.value = '';
  }

  function showSevaBanner(sevaName){
    selectedSeva = sevaName;
    const titleKey = SEVA_TITLE_KEY[sevaName];
    sevaBannerName.textContent = titleKey ? TRANSLATIONS[currentLang][titleKey] : sevaName;
    sevaBanner.style.display = 'flex';
  }

  function clearSevaBanner(){
    selectedSeva = null;
    sevaBanner.style.display = 'none';
  }

  // Called by applyLanguage() after switching language, so anything JS
  // already generated as plain text (donate button, seva banner name)
  // updates too, not just the static data-i18n elements.
  function refreshDynamicText(){
    setActiveAmount(lastAmount, false);
    if (selectedSeva) showSevaBanner(selectedSeva);
    if (paymentFlowState !== 'idle'){
      setDonateButtonBusy(true);
    }
    if (paymentStatusEl && paymentStatusEl.dataset.messageKey){
      setPaymentStatus(paymentStatusEl.dataset.messageKey, paymentStatusEl.dataset.tone);
    }
    renderDynamicContent();
    renderFooterCopyright();
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      setActiveAmount(chip.dataset.amount, true);
    });
  });

  customAmount.addEventListener('input', () => {
    if (customAmount.value){
      chips.forEach(c => c.classList.remove('active'));
      setActiveAmount(customAmount.value || 0, false);
    } else {
      chips[1].classList.add('active'); // fall back to default ₹1,101
      setActiveAmount(1101, false);
    }
  });

  generalBtn.addEventListener('click', () => {
    if (paymentFlowState !== 'idle') return;
    startPaymentFlow();
  });

  // Seva card donate buttons: jump to the donation form with amount + seva pre-filled
  document.querySelectorAll('#sevas .donate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const amount = btn.dataset.amount;
      const seva = btn.dataset.seva;
      const isGeneralDonationTile = btn.dataset.generalDonation === 'true' || seva === 'General Donations';

      if (isGeneralDonationTile){
        clearSevaBanner();
        chips.forEach(c => c.classList.remove('active'));
        customAmount.value = '';
      } else if (amount && seva){
        // Try to match a preset chip first, otherwise use the custom field
        let matched = false;
        chips.forEach(c => {
          if (c.dataset.amount === amount){
            c.classList.add('active');
            matched = true;
          } else {
            c.classList.remove('active');
          }
        });
        if (matched){
          customAmount.value = '';
        } else {
          customAmount.value = amount;
        }
        setActiveAmount(amount, false);
        showSevaBanner(seva);
      }

      document.getElementById('general-donation').scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (isGeneralDonationTile && customAmount) {
        window.setTimeout(() => {
          try {
            customAmount.focus({ preventScroll: true });
          } catch (_error) {
            customAmount.focus();
          }
        }, 350);
      }
    });
  });

  clearSevaBtn.addEventListener('click', () => {
    clearSevaBanner();
    chips.forEach(c => c.classList.remove('active'));
    chips[1].classList.add('active');
    customAmount.value = '';
    setActiveAmount(1101, false);
  });

  // Apply the saved (or default) language now that every element and
  // function referenced above has been created.
  applyLanguage(currentLang);
  loadPublicContent();
