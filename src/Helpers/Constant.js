export const shimmer_display_count=8;
export const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";
export const WOYM_CARD_IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
export const RES_CARD_IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const RES_CARD_IMG_CDN_URL_GREY = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/";
export const REST_API_MENU_URL = (lat, lng) => {return `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=`};
export const CAROUSEL_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";
export const GET_LOCATION_API_URL = "https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/";
export const apiKey = "876ebf4062msh06fec5348f0c73dp1a5b35jsn1ed31a9d244b";
export const ICON_CDN_URL_18 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/";
export const ICON_CDN_URL_28 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";
export const MENU_ITEM_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
export const LICENSE_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/";
export const swiggyAPI = (lat, lng) => { return `https://foodfire.onrender.com/api/restaurants?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`};
export const swiggySearchAPI = (lat, lng) => { return `https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${lat}&lng=${lng}`};
export const support_data = [
  {
    "type": "general",
    "title": "General issues",
    "description": "This issue deals with General Issues that the different stake holders in the eco-system faces.",
    "data": [
      {
        "id": 11500,
        "title": "What is SnehFood Customer Care Number?",
        "description": "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 206,
        "title": "I have a query related to placing an order",
        "description": null,
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": false,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          {
            "type": "chat",
            "phoneNumber": null,
            "provider": "chatengine",
            "waitTime": "Wait time under 2 min(s)",
            "emailId": null
          }
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 212,
        "title": "I am unable to log in on SnehFood",
        "description": null,
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": false,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          {
            "type": "chat",
            "phoneNumber": null,
            "provider": "chatengine",
            "waitTime": "Wait time under 2 min(s)",
            "emailId": null
          }
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 215,
        "title": "I have a payment or refund related query",
        "description": null,
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": false,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          {
            "type": "chat",
            "phoneNumber": null,
            "provider": "chatengine",
            "waitTime": "Wait time under 2 min(s)",
            "emailId": null
          }
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 223,
        "title": "I have a coupon related query",
        "description": null,
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": false,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          {
            "type": "chat",
            "phoneNumber": null,
            "provider": "chatengine",
            "waitTime": "Wait time under 2 min(s)",
            "emailId": null
          }
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 1050,
        "title": "I am unable to place a cash on delivery order",
        "description": "tel:8103403731",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          {
            "type": "call",
            "phoneNumber": "08067466730",
            "provider": "",
            "waitTime": "Wait time under 2 min(s)",
            "emailId": null
          },
          {
            "type": "chat",
            "phoneNumber": null,
            "provider": "chatengine",
            "waitTime": "Wait time under 2 min(s)",
            "emailId": null
          }
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 228,
        "title": "I want to unsubscribe from SnehFood communications",
        "description": "Please drop us an email mentioning the channels you would like to be unsubscribed from. We will take an action and confirm within 24-48 hours",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          {
            "type": "email",
            "phoneNumber": null,
            "provider": null,
            "waitTime": "We will revert within 24-48 hrs",
            "emailId": "support@SnehFood.in"
          }
        ],
        "hyperLinkText": null,
        "hyperLink": null
      }
    ]
  },
  {
    "type": "partner-onboarding",
    "title": "Partner Onboarding",
    "description": "This issue type deals with anything specific to partner onboarding related to all the stake holders in the eco-system. It includes all types of partner onboarding related issues",
    "data": [
      {
        "id": 492,
        "title": "I want to partner my restaurant with SnehFood",
        "description": null,
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": false,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          {
            "type": "email",
            "phoneNumber": null,
            "provider": null,
            "waitTime": "We will revert within 24-48 hrs",
            "emailId": "partnersupport@SnehFood.in"
          }
        ],
        "hyperLinkText": "Partner with us",
        "hyperLink": "https://www.SnehFood.com/partner-with-us"
      },
      {
        "id": 100175,
        "title": "What are the mandatory documents needed to list my restaurant on SnehFood?",
        "description": "- Copies of the below documents are mandatory\n- FSSAI Licence OR FSSAI Acknowledgement\n- Pan Card\n- GSTIN Certificate\n- Cancelled Cheque OR bank Passbook\n- Menu",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100176,
        "title": "After I submit all documents, how long will it take for my restaurant to go live on SnehFood?",
        "description": "After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100177,
        "title": "What is this one time Onboarding fees? Do I have to pay for it while registering?",
        "description": "This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from SnehFood.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100178,
        "title": "Who should I contact if I need help & support in getting onboarded?",
        "description": "You can connect with Partner Support on 8103403731 or write to onboarding@SnehFood.in",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100179,
        "title": "How much commission will I be charged by SnehFood?",
        "description": "The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100180,
        "title": "I don't have an FSSAI licence for my restaurant. Can it still be onboarded?",
        "description": "FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      }
    ]
  },
  {
    "type": "legal",
    "title": "Legal, Terms & Conditions",
    "description": "This issue type deals with Legal, Terms & Conditions and policy related issues for all the stakeholders in the eco-system.",
    "data": [
      {
        "id": 100043,
        "title": "Terms of Use",
        "description": "These terms of use (the \"Terms of Use\") govern your use of our website www.SnehFood.in (the \"Website\") and our \"SnehFood\" application for mobile and handheld devices (the \"App\"). The Website and the App are jointly referred to as the \"Services\"). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": "Read More",
        "hyperLink": "https://www.SnehFood.com/terms-and-conditions"
      },
      {
        "id": 100044,
        "title": "Privacy Policy",
        "description": "We ( SnehFood ) are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of www.SnehFood.com (\"Website\") including the type of information is collected, how the information is collected, how the information is used and with whom it is shared. Reference to \"you\" in this Privacy Policy refers to the users of this Website whether or not you access the services available on the Website or consummate a transaction on the Website. By using or accessing this Website, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further or use or access this Website. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": "Read More",
        "hyperLink": "https://www.SnehFood.com/privacy-policy"
      },
      {
        "id": 100045,
        "title": "Cancellations and Refunds",
        "description": "a)As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order only within one-minute of the order being placed by you. However, subject to your previous cancellation history, SnehFood reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute. b)If you cancel your order after one minute of placing it, SnehFood shall have a right to charge you 100% of the order amount as the cancellation fee , with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners. c)SnehFood reserves the right to charge you cancellation fee for the orders constrained to be cancelled by SnehFood for reasons not attributable to SnehFood, including but not limited to: i)in the event if the address provided by you is either wrong or falls outside the delivery zone; ii) failure to contact you by phone or email at the time of delivering the order booking; iii) failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or iv) unavailability of all the items ordered by you at the time of booking the order. However, in the unlikely event of an item on your order being unavailable, SnehFood will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund to an amount upto 100% of the order value. d)In case of cancellations for the reasons attributable to SnehFood or the restaurant partner or delivery partners, SnehFood shall not charge you any cancellation fee.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": "Read More",
        "hyperLink": "https://www.SnehFood.com/refund-policy"
      },
      {
        "id": 100046,
        "title": "Terms of Use for SnehFood ON-TIME / Assured",
        "description": "These terms of use (the \"Terms of Use\") that govern your use of our service SnehFood ON-TIME / Assured  (\"ON-TIME\" / \"Assured\") on our website www.SnehFood.in (the \"Website\") and our SnehFood application for mobile and handheld devices (the \"App\"). The services on ON-TIME / Assured  available on our Website and the App are jointly referred to as the \"On-Time Delivery\". Please read these Terms of Use carefully before you use the Services. If you do not agree to these Terms of Use, you may not use the Services. By using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (incorporated by reference herein) and creates a legally binding arrangement to abide by the same. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": "Read More",
        "hyperLink": "https://www.SnehFood.com/terms-and-conditions"
      },
      {
        "id": 100323,
        "title": "T&C for TBC Matchday offer",
        "description": "By participating to avail this offer, all participant User(s)(defined below) agree to be bound by these terms and conditions (“T&Cs”), the Terms of Use, Privacy Policy and other relevant SnehFood policies and documentations that are available on www.SnehFood.com and on its mobile application (“Platform”) including any modifications, alterations or updates that We make (collectively referred to as “SnehFood T&C’s”).",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": "Read More",
        "hyperLink": "https://promos.SnehFood.com/tnc-tbc-matchday/v3/index.html"
      },
      {
        "id": 100344,
        "title": "Terms and Conditions for Gourmet Mother's Day Campaign",
        "description": "By participating to avail this Offer, all User(s) agree to be bound by the Terms of Use (https://www.SnehFood.com/terms-and-conditions), Privacy Policy (https://www.SnehFood.com/privacy-policy) and other relevant SnehFood policies and documentations that are available on the Platform  including any modifications, alterations or updates that SnehFood (hereinafter referred to as “We” “Us”, or “SnehFood”)  make (collectively referred to as \"SnehFood T&Cs\")",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": "READ MORE",
        "hyperLink": "https://webviews.SnehFood.com/portal-static-page/gourmet_mothers_day_campaign/"
      },
      {
        "id": 100489,
        "title": "Terms and Conditions for Guiltfree Monday",
        "description": "By participating to avail this Offer, all User(s) agree to be bound by the Terms of Use (https://www.SnehFood.com/terms-and-conditions), Privacy Policy (https://www.SnehFood.com/privacy-policy) and other relevant SnehFood policies and documentations that are available on the Platform including any modifications, alterations or updates that SnehFood (hereinafter referred to as “We” “Us”, or “SnehFood”) make (collectively referred to as \"SnehFood T&Cs\")",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": "READ MORE",
        "hyperLink": "https://webviews.SnehFood.com/portal-static-page/guiltfree_monday_campaign/"
      },
      {
        "id": 100394,
        "title": "T&C for Mega Savings Festival Order & Win Daily",
        "description": " By participating in this activity, all participant User(s)(defined below) agree to be bound by these terms and conditions (“T&Cs”), the Terms of Use, Privacy Policy and other relevant SnehFood policies and documentations that are available on www.SnehFood.com and on its mobile application (“Platform”) including any modifications, alterations or updates that We make (together “SnehFood T&C’s”).",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": "READ MORE",
        "hyperLink": "https://promos.SnehFood.com/tnc-raffle/v1/index.html"
      },
      {
        "id": 100485,
        "title": "T&C for Instamart Weekend Supermarket Dineout Vouchers",
        "description": "Details of the Offer:  \n\nThis offer (“Offer”) commences at 12:01 A.M on 15th of April 2023 and will remain live until 11:59 PM on 16th of April, 2023 (“Offer Period”) on the Platform . Eligibility of this Offer is only of Instamart users (hereinafter referred to as “You”, “Your” or “User”) subject to and in accordance with the T&Cs mentioned below -\n\nEligibility criteria:\n\nThe minimum order value (of one order) on Instamart shall be of INR 599/- (Rupees Five Hundred and Ninety Nine only) and the order must be successfully delivered (“Order”).\n\nEvery three hundredth User (300th, 600th, 900th……75000th) upto 250 such Users each day i.e. on 15th and 16th April, 2023, who successfully places the Order during the Offer Period, will be eligible to get a Dineout discount voucher* (of 20% upto INR 400 off) (“Voucher”) which they can avail exclusively on the restaurants listed on the Dineout application subject to the terms and conditions of the said Voucher (each a \"Voucher Recipient”) . \nWe reserve the right to suspend the Offer for/on a particular day during the Offer Period, or if and when the Voucher Recipients for the day have been selected basis the terms herein.     \n\nRelevant terms and conditions:\n\nThe minimum order value of the Order shall be INR 599/- (Rupees Five Hundred and Ninety Nineonly) which shall be a sum of on the selling price of the products offered on Instamart without discounts, handling fee, delivery fee, any coupon application etc.\nThis Offer is valid in the following cities only: Ahmedabad, Bangalore, Goa, Chandigarh, Dehradun, Delhi, Hyderabad, Indore, Jaipur, Kochi, Kolkata, Lucknow, Ludhiana, Mumbai, Pune, Surat, Vadodara, Gurgaon and Noida.\n\nThe Voucher Recipients will be contacted via Our customer care team on their registered mobile numbers on Whatsapp or on their registered email id’s.  Notwithstanding anything contained herein, it shall be the sole responsibility of the Voucher Recipients to check their messages (including spam). \nNo responsibility is accepted for entries that are late, lost, misdirected or not received by Us during the Offer Period. Any operating or ancillary costs, if any, associated with the Vouchers is the sole responsibility of the Voucher Recipients.\n\nThe Users understand that We do not make any assurances as to the probability of winning in this Offer. \n\nThe User understands and agrees that a User can be a Voucher Recipient only once during this Offer.\nWe do not collect any participation fees for the Offer. \nParticipation in the Offer is entirely voluntary and participation will be construed as an acceptance of the SnehFood T&C’s.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      }
  ]
  },
  {
    "type": "faq",
    "title": "FAQs",
    "description": "This issue type deals with all the FAQs related to very stakeholder in the eco-system.",
    "data": [
      {
        "id": 11501,
        "title": "What is SnehFood Customer Care Number?",
        "description": "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100074,
        "title": "I entered the wrong CVV, why did my transaction still go through?",
        "description": "The logic of validations of CVV resides with either payment gateways or banks. It is absolutely the choice of banks to have CVV as a mandatory input field or not. As per RBI guidelines, 2-Factor-Authentication is not mandatory for less than Rs 2000 rupees transaction. It is not in control of SnehFood. As an organization, we don't store any card information.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 494,
        "title": "I want to explore career opportunities with SnehFood",
        "description": null,
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": false,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          {
            "type": "email",
            "phoneNumber": null,
            "provider": null,
            "waitTime": "We will revert within 24 hrs",
            "emailId": "email-support@SnehFood.in"
          }
        ],
        "hyperLinkText": "Join our team",
        "hyperLink": "https://www.SnehFood.com/careers?hide_header=ios_android"
      },
      {
        "id": 495,
        "title": "I want to provide feedback",
        "description": null,
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          {
            "type": "email",
            "phoneNumber": null,
            "provider": null,
            "waitTime": "We will revert within 24 hrs",
            "emailId": "support@SnehFood.in"
          }
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100047,
        "title": "Can I edit my order?",
        "description": "In order to edit your order, please click on \"Help\" and then \"I wantto modify items in my order\". We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100048,
        "title": "I want to cancel my order",
        "description": "In order to cancel your order, please click on \"Help\" and then \"I want to cancel my order\". Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 491,
        "title": "I want an invoice for my order",
        "description": null,
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          {
            "type": "email",
            "phoneNumber": null,
            "provider": null,
            "waitTime": "We will revert within 24 hrs",
            "emailId": "support@SnehFood.in"
          }
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100049,
        "title": "Will SnehFood be accountable for quality/quantity? ",
        "description": "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100050,
        "title": "Is there a minimum order value?",
        "description": "We have no minimum order value and you can order for any amount. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100051,
        "title": "Do you charge for delivery?",
        "description": "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100052,
        "title": "How long do you take to deliver?",
        "description": "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100053,
        "title": "What are your delivery hours?",
        "description": "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100054,
        "title": "Can I order from any location?",
        "description": "We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100055,
        "title": "Is single order from many restaurants possible?",
        "description": "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100056,
        "title": "Do you support bulk orders?",
        "description": "In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100057,
        "title": "Can I order in advance?",
        "description": "Yes, you can order up to 2 days in advance on our platform. Click onthe \"NOW\" button on the top left corner of the app to select your desired delivery time slot and place an order. This feature is currently available only on Android phones and in select cities.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100058,
        "title": "Can I change the address / number?",
        "description": "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100059,
        "title": "Unable to view the details in my profile",
        "description": "Please check if your app is due for an update. If not, please share the details via support@SnehFood.in",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100060,
        "title": "Did not receive referral coupon?",
        "description": "Referral coupon is given upon the first successful transaction of the referred person. If you still have not received it, kindly send us your details at support@SnehFood.in. We will contact you within 48 hours.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100061,
        "title": "Deactivate my account",
        "description": "Please write to us at support@SnehFood.in in the event that you want to deactivate your account.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100062,
        "title": "Unable to view the details in my profile",
        "description": "Please check if your app is due for an update. If not, please share the details via support@SnehFood.in",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100063,
        "title": "Do you accept Sodexo, Ticket Restaurant etc.?",
        "description": "We do not accept Sodexo vouchers but we do accept Sodexo card. You can select the Sodexo card option while selecting payment options at the time of order",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100263,
        "title": "Unable to make payment using Sodexo card on Instamart?",
        "description": "Sodexo card can be used to pay for purchase of food and non-alcoholic beverages (for example, fruits, vegetables, biscuits, milk and other grocery items). Sodexo card cannot be used to buy non-food items (for example Stationary items, shampoo, batteries etc)",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100095,
        "title": "My SnehFood Money wallet has been mis-used by someone else",
        "description": "Please block your wallet by reaching out to our customer care executives. We will work with ICICI to address your issue, if any.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      }
    ]
  },
  {
    "type": "SnehFood-one-faq",
    "title": "SnehFood One FAQs",
    "description": "This issue type deals with SnehFood SUPER related issues or queries for the stake holders in the eco-system.",
    "data": [
      {
        "id": 100333,
        "title": "Is there a limit on the number of devices I can use SnehFood One on?",
        "description": "Yes. SnehFood One membership can be used only on 2 devices at a time from 8th Feb onwards.\n\nSnehFood One memberships are priced for individual and personal usage. Having a 2 device limit helps us curb disproportionate usage of benefits and ensures the sustainability of the pricing we offer to all our consumers.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100229,
        "title": "Are SnehFood One benefits available at all restaurants?",
        "description": "SnehFood One Free delivery is applicable on ALL food delivery restaurants within 10 kms from your location except Dominos. \nYou are also eligible for member-only extra discounts of up to 30% on select food delivery restaurants. Please note you get this discount over and above the regular offers that you can avail on SnehFood.  ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100480,
        "title": "Is there a minimum order value to avail SnehFood One Flat ₹150 Off coupons on Dineout?",
        "description": "Yes, you can use code \"ONE150\" on your Dineout bills above Rs 1500 on all Dineout partner restaurants.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100228,
        "title": "Is there a limit on free deliveries or extra discounts?",
        "description": "For our 3-month and 12-month duration plans, you can enjoy free delivery on ALL restaurants upto 10 km and free delivery on all Instamart orders above the minimum order value. You can also avail extra Discounts with SnehFood One on select delivery & Dineout restaurants, Instamart, and Genie.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100226,
        "title": "Is extra discount applicable on item total?",
        "description": "Extra discount is applicable on effective item total, which is item total after the coupon discount has been applied",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100230,
        "title": "What all charges will be covered under free delivery ?",
        "description": "Free delivery covers all delivery charges such as delivery fee, late night surcharge & surge fee, which may apply when there's high demand, bad weather, or on special occasions. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100223,
        "title": "Can I club SnehFood One extra discount with other offers? Is there an upper limit?",
        "description": "As a SnehFood One member, you have exclusive access to member only extra discouts of up to 30% on select food delivery restaurants. \nYou also get 2 coupons worth Rs 150 each on Dineout bills, every month of your membership. This is over and above up to 40% flat off at 18,000+ Dineout restuarants.  \nYou also get exclusive item discounts on select Instamart items. Please note you get these discount over and above the regular offers that you can avail on SnehFood & there is no upper limit to this offer.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100227,
        "title": "How can I renew my membership?",
        "description": "You can re-purchase the membership after your current plan expires. You cannot renew before plan expires",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100224,
        "title": "Are SnehFood One benefits applicable on far away restaurants?",
        "description": "SnehFood One Free delivery is applicable on ALL food delivery restaurants up to 10 kms. Any restaurants beyond 10 km will not be eligible for the free delivery benefit. When you order from a new location, you will enjoy benefits on many more restaurants within 10 km from your new location.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100265,
        "title": "Is SnehFood One available in all cities ?",
        "description": "Currently SnehFood One is available in select cities only.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100231,
        "title": "Is there a minimum order value to avail free delivery?",
        "description": "SnehFood One members in all active cities will get free delivery from all restaurants within 10 km on all orders of value more than INR 149.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100232,
        "title": "Is there a minimum order value to avail extra discount?",
        "description": "Extra discounts with SnehFood One are auto-applied when you meet the minimum order value criteria of the restaurant. The minimum order value of each restaurant may vary from one restaurant to another. Please note that extra discounts are flat discounts with no upper limit which are exclusively available only for One members.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100225,
        "title": "Can I cancel, pause or transfer my membership?",
        "description": "Currently, there are no means of cancelling/pausing/transferring your SnehFood One membership. We are working on this and will ensure we are able to serve you better in the near future.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100233,
        "title": "On which platforms can I use my SnehFood One benefits?",
        "description": "SnehFood One benefits can be availed when ordering through Android, iOS and mobile web but not on desktop.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100266,
        "title": "Is there a minimum order value to avail free delivery on restaurants?",
        "description": "SnehFood One members in all active cities can avail free delivery on all restaurants within 8 km. This benefit is applicable on all food orders above INR 149.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100267,
        "title": "Is Instamart available in all locations ?",
        "description": "Instamart is available in select locations, we are rolling it out to more locations soon. You enjoy Unlimited free delivery above INR 199 and Extra discounts on select items in all active Instamart locations.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100268,
        "title": "Is there a limit on free deliveries for Instamart?",
        "description": "No, you can enjoy unlimited free deliveries on all order values above INR 199.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100397,
        "title": "Is there a limit on the number of SnehFood One extra discounts I can get on Genie?",
        "description": "No, you can enjoy Unlimited Extra Discounts with SnehFood One on Genie. Flat 10% off on delivery fee is auto-applied on all Genie deliveries within your membership tenure/period.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100269,
        "title": "Is there a limit on the number of SnehFood One extra discounts I can get on Instamart?",
        "description": "No, you can enjoy Unlimited Extra Discounts on select Instamart Items. Extra discounts are auto applied on the eligible Instamart items, this discounts are over and above your regular offers.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100313,
        "title": "What is SnehFood Dineout ?",
        "description": "SnehFood Dineout offers exciting offers to customers which can be availed while dining out across restaurants in 34 cities. SnehFood members get 2 coupons worth Rs 150 each, every month of their membership. This is over and above up to 40% flat off at 18,000+ restuarants. These coupons are applicable on all orders above Rs 1500. \nUse code \"ONE150\" to avail flat Rs 150 off on your Dineout bills.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100481,
        "title": "What is the SnehFood One Flat ₹150 Off coupon benefit on Dineout?",
        "description": "SnehFood One members get 2 coupons worth flat Rs 150 off, per month of their SnehFood One membership. This is a recurring monthly benefit and is available over and above regular discounts of upto 40% off. \nMembers can avail this discount on all Dineout partner restaurants on dining out bills above Rs 1500.  \n\nUse code \"ONE150\" to avail the coupon.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100398,
        "title": "Is there a minimum order value to avail the SnehFood One extra discount on Genie?",
        "description": "No there is no minimum order value to avail Dineout extra discounts.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100482,
        "title": "How can I avail the SnehFood One Flat ₹150 Off coupon benefit on Dineout?",
        "description": "While making a payment at a Dineout partner restaurant, use code \"ONE150\" at the time of checkout to avail coupon benefit. \nThis is applicable on all transactions above Rs 1500.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100399,
        "title": "Are the SnehFood One extra discounts applicable on all Genie deliveries?",
        "description": "Yes, the extra discount of Flat 10% off is applicable on all types of Genie deliveries (including 'Pick up & drop' and 'Order anything from store')",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100315,
        "title": "Have you increased the price of SnehFood One membership ?",
        "description": "Yes. We have increased the price of SnehFood One membership. Recently, SnehFood upgraded the One program by introducing 3 big changes in the membership offering, which include “Unlimited free delivery on ALL restaurants up to 10 km, on orders above Rs 149” and “Extra discounts on 1000+ popular items” on Instamart + Existing benefits. We will continue to invest in making SnehFood One more valuable for our members, through our upcoming offering in the dining out/in- restaurant space.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100483,
        "title": "Until when are my \"ONE150 coupons\" on Dineout valid?",
        "description": "The ONE150 coupons are an exclusive monthly benefit, given to all SnehFood members with an Active SnehFood One membership. \nFor every active month of the membership, users are provided two \"ONE150 coupons\" which they can redeem anytime in a span of 30 days. Once exhausted, the coupon benefit will be available the following month. This benefit cannot be carried forward.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100400,
        "title": "Are SnehFood One extra discounts on Genie applicable on the store bill?",
        "description": "No, the extra discount of flat 10% off is applicable only on the delivery fee, not on the bill value of items purchased. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100317,
        "title": "I am a SnehFood One member. Do I need to pay extra now that prices have increased ?",
        "description": "Existing One members can continue to enjoy their existing and new benefits for the duration of their current SnehFood One membership. There is no extra fees which need to be paid.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100330,
        "title": "Has the minimum order value to avail free delivery on Instamart changed?",
        "description": "Yes, the minimum order value has changed to Rs. 199 as of Nov 22, 2022. Any user who buys or renews membership post this date will be able to avail free delivery above Rs. 199.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100401,
        "title": "What are the benefits of SnehFood One membership?",
        "description": "SnehFood One membership offers benefits on Food, Instamart, Genie and Dineout categories on SnehFood. Please refer to the benefits listed on the SnehFood One page for complete details.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100402,
        "title": "I am an existing member on SnehFood One, will I be able to redeem a coupon?",
        "description": "As an existing SnehFood One member, you would be allowed to extend the membership on coupon application, at the partner’s discretion. This means, based on the partnership terms, you could get a coupon that allows for extension on top of your active SnehFood One membership. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100403,
        "title": "Will I be able to renew my expired plan through a SnehFood One coupon?",
        "description": "Yes, if you are an expired customer, you can use the coupon received to renew onto a SnehFood One membership.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100404,
        "title": "What will be the validity of a SnehFood One coupon?",
        "description": "Every coupon will have an expiry based on the agreement with the partner. If you apply an expired coupon, you will get an error message stating that your coupon is ineligible when you apply the coupon. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100406,
        "title": "What will be the validity of the SnehFood One benefits?",
        "description": "Please check with the terms of the coupon from the partner from whom you received this coupon.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100407,
        "title": "After applying the coupon, I get a SnehFood One plan price same as the plan price visible to me on the SnehFood app?",
        "description": "You may see the same or even lower membership price only when we occasionally offer promotional discounts to select customers based on their usage patterns on the SnehFood app. Note that these promotional discounts are ephemeral in nature. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100408,
        "title": "I see only certain SnehFood One benefits are available in my city?",
        "description": "Each SnehFood One benefit has a city dependency. For example, Dining out benefits as on 1 January, 2023 are only available in 24 cities in India. You may or may not get a SnehFood One benefit based on the location you are in when you place an order. Similarly, Instamart and Food category benefits are available in select cities. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100409,
        "title": "I am unable to avail this coupon. What should I do?",
        "description": "Please check the terms and conditions on the partner’s website to check if you are eligible to avail the offer. Please email us at (support@SnehFood.in) - This is the email ID which we use for Customer support.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": true,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100498,
        "title": "Am I eligible for money-back guarantee?",
        "description": "If you are eligible for money-back guarantee, you would get a communication on the SnehFood One page with the money-back guarantee offering. If you do not get the money-back guarantee communication on your SnehFood One page, you are not eligible for it. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100499,
        "title": "What does a money-back guarantee on SnehFood One mean?",
        "description": "A money-back guarantee is a no-loss proposition for you, wherein SnehFood will cover you in case you are not able to break even on your SnehFood One investment (subscription). After purchasing SnehFood One if a scenario occurs that you save less than the subscription price paid, after the membership expiry, SnehFood will credit back the difference amount back to the user. Credit amount = (Subscription price - Savings during membership period).",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100500,
        "title": "How do I know the savings breakup and how much I have saved during the membership period?",
        "description": "SnehFood One membership page (active page) will help you with the live & updated details of the total savings during the membership period to date.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100501,
        "title": "How do I know if my money-back guarantee is activated post-purchase?",
        "description": "The money-back guarantee gets activated immediately after a user purchases it. For a cohort of users that moneyback is offered - SnehFood will inform the users about the money-back activation through an email post a SnehFood One purchase.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100502,
        "title": "Will Dineout, Instamart & Genie savings also be included while calculating the total savings?",
        "description": "Yes. The savings cover the monetary discounts or offers through all SnehFood One enlisted benefits that the user signed up for while they were purchasing the membership.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100503,
        "title": "Does moneyback also provide a credit if I am unhappy with the ordering experience? Will I get my subscription amount credited back? Or will I get my order amount credited back?",
        "description": "No. The moneyback will be calculated only based on the total cumulative savings achieved during the membership tenure.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100504,
        "title": "If my savings are lesser than the subscription price paid, how & when will I be able to avail my money back?",
        "description": "We will credit back the money directly via SnehFood Money within 7 business days after membership expiry.  ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      }
    ]
  },
  {
    "type": "SnehFood_money_faq",
    "title": "SnehFood Money FAQs",
    "description": "FAQs regarding SnehFood money",
    "data": [
      {
        "id": 100505,
        "title": "How do I add SnehFood Money balance in my account?",
        "description": "You can claim the SnehFood Money vouchers purchased from 3rd party apps or received from your friends, employers etc. on SnehFood app (SnehFood -> Accounts -> SnehFood Money). You can also opt in for refunds in SnehFood Money",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100506,
        "title": "How do I add SnehFood Gift Card balance to my account?",
        "description": "You can enter the 16-digit code and 4 digit PIN received in email or SMS on SnehFood Money page after logging in to the SnehFood app.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100507,
        "title": "Where can I use SnehFood Money balance?",
        "description": "SnehFood Money can be used to pay for the orders across different categories on SnehFood (Food, Instamart, DineOut, Genie etc.). Choose the SnehFood Money option on SnehFood payments page to use the balance.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100509,
        "title": "Is my money safe with SnehFood Money?",
        "description": "Yes, SnehFood Money is powered by Razorpay and us a fully RBI compliant Semi-closed Prepaid Payment Instrument (PPI).",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100510,
        "title": "Do I need to upload any documents in order to use SnehFood Money?",
        "description": "No. You can start using SnehFood Money just by logging in to SnehFood and claiming your SnehFood Money vouchers.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100511,
        "title": "Are there any transaction limits in SnehFood Money?",
        "description": "Starting July’23, there won’t be any limit on each transaction amount. Till the month of Jun’23, you might see a restriction using of INR 10,000 per month (SnehFood is gradually moving users to the new experience - see latest updates on SnehFood Money page)",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100512,
        "title": "Can I transfer my SnehFood Money balance to my bank account?",
        "description": "No, you cannot transfer your SnehFood Money balance to your bank account.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100513,
        "title": "Where can I view my SnehFood Money transactions?",
        "description": "You can access SnehFood Money from the ‘My Account’ screen. You can view your transaction history details by clicking on the ‘SnehFood Money’ section.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100514,
        "title": "Does SnehFood Money expire?",
        "description": "Starting July’23, all SnehFood Money credits will carry a validity of 365 days from the day you add balance on the SnehFood app. However, you can request for extension of the expiry from the app. For credits older than July’23, some might not have any validity. You can check the validity against each transaction on SnehFood Money page.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100515,
        "title": "Can I close my SnehFood Money account?",
        "description": "No. But as per RBI regulations, you can disable or block your account from further use. Please get in touch with our Customer Care team in case you wish to do so.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100516,
        "title": "Someone misused my SnehFood Money balance. How do I report it?",
        "description": "Please get in touch with our Customer Care team who will record your complaint and block your account. We will then follow the RBI mandated redressal mechanism to resolve your queries.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100517,
        "title": "I changed my mind, I don’t want my refund to go to my SnehFood Money.",
        "description": "Sorry, once your refund has gone to your SnehFood Money, it cannot be undone. However, you can use the amount in the wallet for your next order on SnehFood.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100518,
        "title": "Can I transfer my SnehFood Money balance to another SnehFood Money?",
        "description": "As of now we do not support this functionality.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100519,
        "title": "I opted for a refund to my SnehFood Money account, but it is not credited.",
        "description": "We are extremely sorry for the inconvenience. Please reach out to our Customer Care team for a swift resolution.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100520,
        "title": "I am not able to pay using SnehFood Money even after claiming the voucher.",
        "description": "Please reach out to our Customer Care team for a swift resolution.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100521,
        "title": "Can I pay for an order using SnehFood Money and other payment methods?",
        "description": "Yes. You can use SnehFood Money along with another payment instrument to pay for an order,  provided the amount available in SnehFood Money is lower than the order value.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100522,
        "title": "My order transaction failed but money was deducted from my SnehFood Money",
        "description": "We are sorry if you faced this issue. Please get in touch with our Customer Care team for a swift resolution.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      }
    ]
  },
  {
    "type": "dineout",
    "title": "SnehFood Dineout FAQs",
    "description": "This issue type deals with FAQ related to dineout",
    "data": [
      {
        "id": 100242,
        "title": "What is SnehFood Dineout?",
        "description": "SnehFood Dineout helps its users discover the best restaurants with exclusive offers near them. All users can avail special restaurant discounts of up to 40% and additional card benefits when paying their restaurant bills via SnehFood Dineout.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100246,
        "title": "How do I claim a offer?",
        "description": "To avail a SnehFood Dineout offer, you would need to pay your dining bill at the restaurant using the SnehFood app. This can be done by searching for that restaurant on the app and tapping the \"PAY BILL TO GET OFFER\" button. Please note that the relevant offer, depending on the day and time of your visit, will be auto-applied at the time of checkout.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100417,
        "title": "What is the maximum bill amount that I can pay via SnehFood Dineout at a restaurant in a single transaction?",
        "description": "You can pay up to Rs. 50,000 per transaction via SnehFood Dineout at a restaurant. ",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100441,
        "title": "What is GIRF?",
        "description": "Great Indian Restaurant Festival (GIRF) is India's largest dining out festival and SnehFood Dineout is back with its 7th edition from 12th April 2023. Buy any of the limited GIRF Deals on the SnehFood app to unlock the most exclusive offers on your favourite restaurants. Make sure to show the deal confirmation SMS at the restaurant before you order. Pay using SnehFood Dineout and save on your bill like never before!",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100442,
        "title": "How can I purchase GIRF Deal?",
        "description": "You can purchase a GIRF deal on SnehFood Dineout by following the below steps: \n1. Open SnehFood Dineout and choose your favourite restaurant.\n2. Pick your preferred GIRF deal available on the restaurant page.\n3. Enter the number of guests, date, and time of your visit as per your preferences.\n4. Select a payment method to complete the payment.\nVoila! You should get a deal confirmation on the app as well as on your register phone number and email.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100443,
        "title": "What are the T&Cs for using the GIRF deal?",
        "description": "Once you select your preferred deal at your favourite restaurant, you can review all GIRF related T&C before making the payment. If you have already purchased a GIRF deal, you can view the T&Cs by going to the Dineout page on the SnehFood app. Tap on \"View details\" under the \"My bookings\" section.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100444,
        "title": "Where can I check the deal status?",
        "description": "You will receive a deal confirmation on the SnehFood App and on your registered contact details through an SMS/email after successful purchasing your GIRF deal. The deal status and details will also be available to you on the Dineout page on the SnehFood app.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100446,
        "title": "Until when will my reservation be held?",
        "description": "As a hospitality gesture, the restaurant will hold your reservation for 15 minutes from your deal timings, however, this is subject to availability at the restaurant premises. We urge you to arrive on time at your restaurant to avail your offer.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100447,
        "title": "I want to modify/cancel/transfer the deal",
        "description": "GIRF deals once purchased cannot be canceled, modified, refunded, or transferred, even if the deal was not redeemed.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100448,
        "title": "Can bank & wallet offers be clubbed with GIRF Deals?",
        "description": "Yes. Bank offers can be used along with the GIRF deal discounts. Simply enter the bill amount on the restaurant's payments page on the SnehFood app, and ensure you're selecting your preferred bank offer in the additional offers section before you make the payment. \nHDFC discount is subject to offer T&Cs.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100449,
        "title": "Can regular discounts or offers on Dineout be clubbed with GIRF Deals?",
        "description": "You can use your SnehFood Money wallet to get restaurant specific discounts on the app. However, you cannot club any GIRF Deals/coupons with any other existing offers on SnehFood or at the restaurant or with any other non-partner third party offers.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100450,
        "title": "How do I redeem/avail the deal that I have purchased?",
        "description": "You can redeem a GIRF deal by following the below steps: \n1. Ensure to arrive at the restaurant within your booked time slot.\n2. Show your GIRF deal details to the restaurant before you order.\n3. Enjoy your delicious meal.\n4. Pay the bill within 2 hours of your booked slot using SnehFood Dineout. Your deal will get auto-applied and you're done!",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100451,
        "title": "What are the exclusions in the GIRF deal?",
        "description": "Kindly check all offer details along with T&C on the deal page before buying. Note that the offer may not be applicable on certain menu items as per the restaurant’s policy. Also, mention your GIRF deal and show the confirmation SMS to the Manager/Waiter at the restaurant, before placing your order. Service charges may be applicable at the discretion of the restaurant.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100452,
        "title": "What do I do if the restaurant refuses to accept/honor my GIRF Deal?",
        "description": "We assure you that this will not happen. In case a restaurant does refuse to acknowledge your GIRF Deal, please reach out to us on the SnehFood Dineout helpcenter and we will resolve this for you.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      },
      {
        "id": 100453,
        "title": "Is there any kids or stag policy for GIRF?",
        "description": "Terms and Conditions for kids/stags policy may vary from restaurant to restaurant. Please make sure you check the restaurant detail page for specific terms and conditions before buying your deal. In case of specific questions, feel free to call the restaurant and clarify the terms. The restaurant can be contacted via the phone number on the restaurant detail page on the SnehFood App.",
        "conversationId": null,
        "layerConversationId": null,
        "ackText": null,
        "isLeaf": true,
        "isBackupNode": false,
        "isResolutionNode": false,
        "options": [
          
        ],
        "hyperLinkText": null,
        "hyperLink": null
      }
    ]
  }
];
export const footer_data = [{
  id: "100",
  title: "Company",
  data: ['About', 'Careers', 'Team', 'SnehFood One', 'SnehFood Instamart', 'SnehFood Genie']
},
{
  id: "101",
  title: "Contact",
  data: ['Help & Support', 'Partner with Us', 'Ride with Us']
},
{
  id: "102",
  title: "Legal",
  data: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy']
}];