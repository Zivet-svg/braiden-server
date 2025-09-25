# Discord Webhook Setup for Form Submissions

## How to Set Up Discord Webhooks

### Step 1: Create a Discord Server (if you don't have one)
1. Open Discord and create a new server
2. Name it something like "DurZivetMedia Notifications"

### Step 2: Create a Webhook
1. Go to your Discord server
2. Click on the server name → Server Settings
3. Go to "Integrations" → "Webhooks"
4. Click "Create Webhook"
5. Name it "Form Submissions" or similar
6. Choose a channel (create a #notifications channel if needed)
7. Copy the Webhook URL

### Step 3: Update the Code
1. Open `src/utils/discordWebhook.ts`
2. Replace `YOUR_DISCORD_WEBHOOK_URL_HERE` with your actual webhook URL
3. The forms will now send notifications to your Discord!

## What You'll Receive

### Contact Form Submissions
- Name, email, and message
- Timestamp
- Blue embed color

### Media Apply Submissions
- All application details (name, email, platform, followers, etc.)
- Previous experience and goals
- Timestamp
- Green embed color

## Testing
1. Fill out the contact form on your website
2. Check your Discord channel for the notification
3. Try the media apply form as well

## Security Note
- Never commit your webhook URL to public repositories
- Consider using environment variables for production
- You can regenerate webhook URLs if needed

## Troubleshooting
- Make sure the webhook URL is correct
- Check that the Discord channel exists
- Verify the bot has permission to send messages
- Check browser console for any errors
