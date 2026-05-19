"use client";

/*
 * TAWK.TO DASHBOARD CONFIGURATION CHECKLIST
 * (Settings → Chat Widget, and Settings → Pre-Chat Form)
 *
 * VISUAL:
 * - Widget color: match site accent (flush pink #ff1f8f)
 * - Position: bottom-right
 * - Widget shape: rounded
 * - Bubble greeting: "Hey! Quick question?" (short, casual)
 *
 * ONLINE STATUS COPY:
 * - Online greeting: "Hey 👋 I'm around. What can I help with?"
 * - Online subtitle: "Typically replies within a few hours."
 *
 * OFFLINE STATUS COPY:
 * - Offline greeting: "I'm currently offline."
 * - Offline subtitle: "Leave your email and message — I'll reply by next morning (IST)."
 *
 * PRE-CHAT FORM (REQUIRED when offline):
 * - Enable "Require email when offline" — YES
 * - Fields: Name (required), Email (required), Message (required)
 * - This is critical: without email capture, offline messages disappear
 *
 * AWAY MESSAGE (when online but slow to reply):
 * - Trigger: visitor types but no agent reply in 60 seconds
 * - Message: "Thanks for the message — I'm in deep work right now but I'll get back
 *   to you in a few hours. If it's urgent, the contact form on /contact reaches my
 *   email directly."
 *
 * OPERATING HOURS:
 * - Set to Mon–Sat, 10am–7pm IST
 * - Outside these hours, widget shows offline status automatically
 *
 * NOTIFICATIONS:
 * - Install Tawk.to mobile app (iOS / Android)
 * - Enable push notifications for new conversations
 * - Critical: without the mobile app, the widget is decoration
 *
 * BRANDING:
 * - "Powered by Tawk.to" remains visible (free tier requirement) — acceptable
 *
 * INTEGRATIONS:
 * - No email forwarding setup needed initially — the dashboard + mobile app cover it
 * - Can add Slack/email forwarding later if conversations multiply
 */

import Script from "next/script";
import { usePathname } from "next/navigation";

const HIDDEN_ON = ["/studio"];

export function TawkChat() {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;
  const pathname = usePathname();

  if (!propertyId || !widgetId) return null;
  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;

  return (
    <Script
      id="tawk-to-widget"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function(){
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/${propertyId}/${widgetId}";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
          })();
        `,
      }}
    />
  );
}
