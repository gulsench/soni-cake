// Central place for all of Soni Cake's real contact details + nav config.
// Edit these once and they update everywhere on the page.

export const WHATSAPP_NUMBER = "919612540303";
export const PHONE_DISPLAY = "+91 96125 40303";

// Pre-filled WhatsApp message so the owner receives a tidy enquiry.
export const WHATSAPP_MESSAGE =
  "Hi Soni Cake! I'd like to place an order. ";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTAGRAM_HANDLE = "@sonicake__";
export const INSTAGRAM_URL = "https://www.instagram.com/sonicake__/";

export const ADDRESS = "Haradhan Sangha Rd, Indranagar, Agartala, Tripura 799001";
export const ADDRESS_SHORT = "Indranagar, Agartala";
export const HOURS = "9:00 am to 8:30 pm";

// Payment — UPI / PhonePe deposit details (from the shop's PhonePe QR).
export const UPI_ID = "Q391644403@ybl";
export const PAYMENT_QR = "/images/payment-qr.png";

// What customers should include in their WhatsApp order message.
export const ORDER_CHECKLIST = [
  "Date of event",
  "Cake size / number of servings",
  "Cake flavour & filling",
  "Cake theme / decoration (please share 1-2 inspo pics)",
  "Add-ons: glitter, edible image, bows, fondant, chocolate, fruit, mini bottles, etc. (additional cost)",
] as const;

export const DEPOSIT_NOTE =
  "A 50% non-refundable deposit is required to confirm your order. No deposit, no order. Final price is shared once all the above details are provided.";

// Google Maps embed query for the shop address.
export const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Soni Cake, Haradhan Sangha Rd, Indranagar, Agartala, Tripura 799001") +
  "&output=embed";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Our Cakes", href: "#cakes" },
  { label: "Gallery", href: "#gallery" },
  { label: "How to Order", href: "#order" },
  { label: "Cake Care", href: "#care" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#visit" },
] as const;
