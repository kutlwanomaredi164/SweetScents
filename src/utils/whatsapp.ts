export const SWEET_SCENTS_WHATSAPP_NUMBER = '27683543182';
export const SWEET_SCENTS_PHONE_DISPLAY = '068 354 3182';
export const SWEET_SCENTS_EMAIL = 'sweetscents21@icloud.com';
export const SWEET_SCENTS_INSTAGRAM = '@sweetscents.ss';

export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${SWEET_SCENTS_WHATSAPP_NUMBER}?text=${encoded}`;
}

export interface OrderItemPayload {
  productName: string;
  tierLabel: string;
  tierPrice: number;
  quantity: number;
  addOns?: Array<{ name: string; detail?: string; price: number }>;
  cardMessage?: string;
  deliveryDate?: string;
}

export function generateProductOrderWhatsAppMessage(item: OrderItemPayload): string {
  const addOnsTotal = item.addOns?.reduce((acc, a) => acc + a.price, 0) || 0;
  const singleItemTotal = item.tierPrice + addOnsTotal;
  const grandTotal = singleItemTotal * item.quantity;

  let msg = `🌸 *SWEET SCENTS ORDER INQUIRY*\n`;
  msg += `Hello Sweet Scents, I would like to place an order:\n\n`;
  msg += `• *Bouquet:* ${item.productName}\n`;
  msg += `• *Size / Tier:* ${item.tierLabel} (R${item.tierPrice})\n`;
  msg += `• *Quantity:* ${item.quantity}\n`;

  if (item.addOns && item.addOns.length > 0) {
    msg += `• *Add-Ons Selected:*\n`;
    item.addOns.forEach((ao) => {
      msg += `   - ${ao.name} (+R${ao.price})${ao.detail ? ` [${ao.detail}]` : ''}\n`;
    });
  }

  if (item.cardMessage && item.cardMessage.trim()) {
    msg += `• *Card Message:* "${item.cardMessage.trim()}"\n`;
  }

  if (item.deliveryDate) {
    msg += `• *Requested Delivery Date:* ${item.deliveryDate}\n`;
  }

  msg += `\n*Estimated Total:* R${grandTotal.toLocaleString()}\n`;
  msg += `*(Note: 50% non-refundable deposit required, 4 days advance booking)*\n\n`;
  msg += `Could you please confirm availability for my date? Thank you! 💕`;

  return msg;
}

export interface CustomBouquetPayload {
  flowerType: string;
  colourPalette: string;
  style: string;
  budget: number;
  recipientNote?: string;
  specialRequests?: string;
  deliveryDate?: string;
  location?: string;
}

export function generateCustomBouquetWhatsAppMessage(custom: CustomBouquetPayload): string {
  let msg = `✨ *BESPOKE CUSTOM BOUQUET REQUEST — SWEET SCENTS*\n`;
  msg += `Hi Sweet Scents, I would love to request a custom floral arrangement:\n\n`;
  msg += `• *Flower Choice:* ${custom.flowerType}\n`;
  msg += `• *Colour Scheme:* ${custom.colourPalette}\n`;
  msg += `• *Style / Special Format:* ${custom.style}\n`;
  msg += `• *Budget:* Approx. R${custom.budget.toLocaleString()}\n`;

  if (custom.deliveryDate) {
    msg += `• *Occasion / Needed Date:* ${custom.deliveryDate}\n`;
  }
  if (custom.location) {
    msg += `• *Delivery Suburb (JHB/PTA):* ${custom.location}\n`;
  }
  if (custom.recipientNote) {
    msg += `• *Card Note:* "${custom.recipientNote}"\n`;
  }
  if (custom.specialRequests) {
    msg += `• *Special Details:* ${custom.specialRequests}\n`;
  }

  msg += `\nI understand that orders require 4 days advance notice and a 50% deposit. Looking forward to your response! 🌸`;
  return msg;
}

export function generateCartWhatsAppMessage(
  items: OrderItemPayload[],
  customerInfo?: { name?: string; location?: string; date?: string; note?: string }
): string {
  let subtotal = 0;
  let msg = `🛍️ *SWEET SCENTS — BAG CHECKOUT*\n`;
  msg += `Hi Sweet Scents! I have finalized my selection on your website:\n\n`;

  items.forEach((item, index) => {
    const addOnsTotal = item.addOns?.reduce((acc, a) => acc + a.price, 0) || 0;
    const itemTotal = (item.tierPrice + addOnsTotal) * item.quantity;
    subtotal += itemTotal;

    msg += `*${index + 1}. ${item.productName} (${item.quantity}x)*\n`;
    msg += `   - Option: ${item.tierLabel} (R${item.tierPrice})\n`;
    if (item.addOns && item.addOns.length > 0) {
      item.addOns.forEach((ao) => {
        msg += `   - Add-on: ${ao.name} (+R${ao.price})${ao.detail ? ` [${ao.detail}]` : ''}\n`;
      });
    }
    if (item.cardMessage) {
      msg += `   - Note: "${item.cardMessage}"\n`;
    }
    msg += `   - Subtotal: R${itemTotal.toLocaleString()}\n\n`;
  });

  msg += `*TOTAL ESTIMATE:* R${subtotal.toLocaleString()}\n`;
  if (customerInfo?.location) {
    msg += `*Delivery Suburb:* ${customerInfo.location}\n`;
  }
  if (customerInfo?.date) {
    msg += `*Requested Date:* ${customerInfo.date}\n`;
  }
  if (customerInfo?.name) {
    msg += `*Customer Name:* ${customerInfo.name}\n`;
  }
  if (customerInfo?.note) {
    msg += `*Additional Notes:* ${customerInfo.note}\n`;
  }

  msg += `\nPlease let me know banking details for the 50% deposit and delivery confirmation. Thank you!`;
  return msg;
}
