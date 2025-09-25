// Discord webhook utility
const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE'; // Replace with your actual webhook URL

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface MediaApplyFormData {
  name: string;
  email: string;
  platform: string;
  followers: string;
  handle: string;
  niche: string;
  experience?: string;
  goals?: string;
}

export const sendContactToDiscord = async (formData: ContactFormData) => {
  const embed = {
    title: "📧 New Contact Form Submission",
    color: 0x0071e3, // Blue color
    fields: [
      {
        name: "Name",
        value: formData.name,
        inline: true
      },
      {
        name: "Email",
        value: formData.email,
        inline: true
      },
      {
        name: "Message",
        value: formData.message,
        inline: false
      }
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: "DurZivetMedia Contact Form"
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

export const sendMediaApplyToDiscord = async (formData: MediaApplyFormData) => {
  const embed = {
    title: "🎬 New Media Partner Application",
    color: 0x00ff00, // Green color
    fields: [
      {
        name: "Name",
        value: formData.name,
        inline: true
      },
      {
        name: "Email",
        value: formData.email,
        inline: true
      },
      {
        name: "Platform",
        value: formData.platform,
        inline: true
      },
      {
        name: "Followers",
        value: formData.followers,
        inline: true
      },
      {
        name: "Handle",
        value: formData.handle,
        inline: true
      },
      {
        name: "Niche",
        value: formData.niche,
        inline: true
      },
      {
        name: "Experience",
        value: formData.experience || "Not provided",
        inline: false
      },
      {
        name: "Goals",
        value: formData.goals || "Not provided",
        inline: false
      }
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: "DurZivetMedia Media Application"
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
