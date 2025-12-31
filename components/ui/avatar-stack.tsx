'use client';

import React from 'react';
import Image from 'next/image';

interface AvatarStackProps {
  integrations: string[];
  maxDisplay?: number;
}

// Integration logo mapping with Simple Icons CDN (prod-safe, stable)
const integrationLogos: Record<string, { logo: string; color: string }> = {
  // CRM & Sales
  'HubSpot': { logo: 'https://cdn.simpleicons.org/hubspot/FF7A59', color: '#FF7A59' },
  'Salesforce': { logo: 'https://cdn.simpleicons.org/salesforce/00A1E0', color: '#00A1E0' },
  'Pipedrive': { logo: 'https://cdn.simpleicons.org/pipedrive/white', color: '#FFFFFF' },
  
  // Email & Communication
  'Gmail': { logo: 'https://cdn.simpleicons.org/gmail/EA4335', color: '#EA4335' },
  'Outlook': { logo: 'https://cdn.simpleicons.org/microsoftoutlook/0078D4', color: '#0078D4' },
  'Mailchimp': { logo: 'https://cdn.simpleicons.org/mailchimp/FFE01B', color: '#FFE01B' },
  'SendGrid': { logo: 'https://cdn.simpleicons.org/twilio/1A82E2', color: '#1A82E2' },
  
  // Messaging & Chat
  'Slack': { logo: 'https://cdn.simpleicons.org/slack/4A154B', color: '#4A154B' },
  'Discord': { logo: 'https://cdn.simpleicons.org/discord/5865F2', color: '#5865F2' },
  'Telegram': { logo: 'https://cdn.simpleicons.org/telegram/26A5E4', color: '#26A5E4' },
  'WhatsApp': { logo: 'https://cdn.simpleicons.org/whatsapp/25D366', color: '#25D366' },
  'Microsoft Teams': { logo: 'https://cdn.simpleicons.org/microsoftteams/6264A7', color: '#6264A7' },
  
  // Social Media
  'Twitter': { logo: 'https://cdn.simpleicons.org/x/white', color: '#1DA1F2' },
  'X': { logo: 'https://cdn.simpleicons.org/x/white', color: '#000000' },
  'LinkedIn': { logo: 'https://cdn.simpleicons.org/linkedin/0A66C2', color: '#0A66C2' },
  'Instagram': { logo: 'https://cdn.simpleicons.org/instagram/E4405F', color: '#E4405F' },
  'Facebook': { logo: 'https://cdn.simpleicons.org/facebook/1877F2', color: '#1877F2' },
  'YouTube': { logo: 'https://cdn.simpleicons.org/youtube/FF0000', color: '#FF0000' },
  'TikTok': { logo: 'https://cdn.simpleicons.org/tiktok/white', color: '#000000' },
  
  // Payment & Finance
  'Stripe': { logo: 'https://cdn.simpleicons.org/stripe/008CDD', color: '#008CDD' },
  'PayPal': { logo: 'https://cdn.simpleicons.org/paypal/00457C', color: '#00457C' },
  'Square': { logo: 'https://cdn.simpleicons.org/square/white', color: '#000000' },
  
  // Accounting
  'QuickBooks': { logo: 'https://cdn.simpleicons.org/quickbooks/2CA01C', color: '#2CA01C' },
  'Xero': { logo: 'https://cdn.simpleicons.org/xero/13B5EA', color: '#13B5EA' },
  'FreshBooks': { logo: 'https://cdn.simpleicons.org/freshbooks/0075DD', color: '#0075DD' },
  
  // E-commerce
  'Shopify': { logo: 'https://cdn.simpleicons.org/shopify/96BF48', color: '#96BF48' },
  'WooCommerce': { logo: 'https://cdn.simpleicons.org/woocommerce/96588A', color: '#96588A' },
  'BigCommerce': { logo: 'https://cdn.simpleicons.org/bigcommerce/white', color: '#121118' },
  'Magento': { logo: 'https://cdn.simpleicons.org/magento/EE672F', color: '#EE672F' },
  
  // Productivity & Collaboration
  'Notion': { logo: 'https://cdn.simpleicons.org/notion/white', color: '#000000' },
  'Airtable': { logo: 'https://cdn.simpleicons.org/airtable/18BFFF', color: '#18BFFF' },
  'Google Sheets': { logo: 'https://cdn.simpleicons.org/googlesheets/34A853', color: '#34A853' },
  'Google Drive': { logo: 'https://cdn.simpleicons.org/googledrive/4285F4', color: '#4285F4' },
  'Dropbox': { logo: 'https://cdn.simpleicons.org/dropbox/0061FF', color: '#0061FF' },
  'OneDrive': { logo: 'https://cdn.simpleicons.org/microsoftonedrive/0078D4', color: '#0078D4' },
  
  // Project Management
  'Asana': { logo: 'https://cdn.simpleicons.org/asana/F06A6A', color: '#F06A6A' },
  'Trello': { logo: 'https://cdn.simpleicons.org/trello/0052CC', color: '#0052CC' },
  'Monday': { logo: 'https://cdn.simpleicons.org/monday/FF3D57', color: '#FF3D57' },
  'Jira': { logo: 'https://cdn.simpleicons.org/jira/0052CC', color: '#0052CC' },
  'ClickUp': { logo: 'https://cdn.simpleicons.org/clickup/7B68EE', color: '#7B68EE' },
  
  // Automation & Integration
  'Zapier': { logo: 'https://cdn.simpleicons.org/zapier/FF4A00', color: '#FF4A00' },
  'Make': { logo: 'https://cdn.simpleicons.org/make/6D00CC', color: '#6D00CC' },
  'n8n': { logo: 'https://cdn.simpleicons.org/n8n/EA4B71', color: '#EA4B71' },
  'IFTTT': { logo: 'https://cdn.simpleicons.org/ifttt/white', color: '#000000' },
  
  // Customer Support
  'Zendesk': { logo: 'https://cdn.simpleicons.org/zendesk/03363D', color: '#03363D' },
  'Intercom': { logo: 'https://cdn.simpleicons.org/intercom/1F8DED', color: '#1F8DED' },
  'Freshdesk': { logo: 'https://cdn.simpleicons.org/freshdesk/00C9A1', color: '#00C9A1' },
  'Help Scout': { logo: 'https://cdn.simpleicons.org/helpscout/1292EE', color: '#1292EE' },
  
  // CMS & Website
  'WordPress': { logo: 'https://cdn.simpleicons.org/wordpress/21759B', color: '#21759B' },
  'Webflow': { logo: 'https://cdn.simpleicons.org/webflow/4353FF', color: '#4353FF' },
  'Squarespace': { logo: 'https://cdn.simpleicons.org/squarespace/white', color: '#000000' },
  
  // Developer Tools
  'GitHub': { logo: 'https://cdn.simpleicons.org/github/white', color: '#181717' },
  'GitLab': { logo: 'https://cdn.simpleicons.org/gitlab/FC6D26', color: '#FC6D26' },
  'Bitbucket': { logo: 'https://cdn.simpleicons.org/bitbucket/0052CC', color: '#0052CC' },
  
  // Communication
  'Twilio': { logo: 'https://cdn.simpleicons.org/twilio/F22F46', color: '#F22F46' },
  'Zoom': { logo: 'https://cdn.simpleicons.org/zoom/2D8CFF', color: '#2D8CFF' },
  'Calendly': { logo: 'https://cdn.simpleicons.org/calendly/006BFF', color: '#006BFF' },
  
  // Analytics
  'Google Analytics': { logo: 'https://cdn.simpleicons.org/googleanalytics/E37400', color: '#E37400' },
  'Mixpanel': { logo: 'https://cdn.simpleicons.org/mixpanel/7856FF', color: '#7856FF' },
  'Amplitude': { logo: 'https://cdn.simpleicons.org/amplitude/0077FF', color: '#0077FF' },
  'Tableau': { logo: 'https://cdn.simpleicons.org/tableau/E97627', color: '#E97627' },
  
  // Lead Generation & Prospecting
  'Apollo': { logo: 'https://cdn.simpleicons.org/apollographql/311C87', color: '#311C87' },
  'Hunter': { logo: 'https://cdn.simpleicons.org/hunter/FF6B00', color: '#FF6B00' },
  
  // Social Media Management
  'Buffer': { logo: 'https://cdn.simpleicons.org/buffer/168EEA', color: '#168EEA' },
  'Hootsuite': { logo: 'https://cdn.simpleicons.org/hootsuite/white', color: '#000000' },
  
  // AI & Development
  'OpenAI': { logo: 'https://cdn.simpleicons.org/openai/412991', color: '#412991' },
  'PostgreSQL': { logo: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '#4169E1' },
};

export function AvatarStack({ integrations, maxDisplay = 4 }: AvatarStackProps) {
  const displayIntegrations = integrations.slice(0, maxDisplay);
  const remainingCount = integrations.length - maxDisplay;

  return (
    <div className="flex items-center -space-x-2">
      {displayIntegrations.map((integration, index) => {
        const integrationData = integrationLogos[integration];
        
        if (!integrationData) return null;

        return (
          <div
            key={integration}
            className="relative w-12 h-12 rounded-full border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center overflow-hidden transition-transform hover:scale-110 hover:z-10"
            style={{ 
              zIndex: displayIntegrations.length - index
            }}
            title={integration}
          >
            <Image
              src={integrationData.logo}
              alt={integration}
              width={28}
              height={28}
              unoptimized
              className="object-contain p-1.5"
            />
          </div>
        );
      })}
      
      {remainingCount > 0 && (
        <div
          className="relative w-12 h-12 rounded-full border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center"
          style={{ zIndex: 0 }}
        >
          <span className="text-sm font-semibold text-white">+{remainingCount}</span>
        </div>
      )}
    </div>
  );
}
