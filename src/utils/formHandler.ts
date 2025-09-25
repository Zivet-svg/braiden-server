// Simple form handler for Discord webhooks
const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE'; // Replace with your actual webhook URL

export const sendToDiscord = async (data: any, type: 'contact' | 'media-apply') => {
  const isContact = type === 'contact';
  
  const embed = {
    title: isContact ? "📧 New Contact Form Submission" : "🎬 New Media Partner Application",
    color: isContact ? 0x0071e3 : 0x00ff00, // Blue for contact, green for media apply
    fields: Object.entries(data).map(([key, value]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
      value: String(value || 'Not provided'),
      inline: key !== 'message' && key !== 'experience' && key !== 'goals'
    })),
    timestamp: new Date().toISOString(),
    footer: {
      text: `DurZivetMedia ${isContact ? 'Contact' : 'Media Application'} Form`
    }
  };

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed]
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending to Discord:', error);
    return false;
  }
};

// Example usage in your forms:
export const handleContactSubmit = async (formData: any) => {
  const success = await sendToDiscord(formData, 'contact');
  return success;
};

export const handleMediaApplySubmit = async (formData: any) => {
  const success = await sendToDiscord(formData, 'media-apply');
  return success;
};
