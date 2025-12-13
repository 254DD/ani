/**
 * Analytics Hook - Ready for session recording integration
 * 
 * To add session recording in the future:
 * 1. Install your preferred tool (e.g., npm install @microsoft/clarity)
 * 2. Add your project ID to environment variables
 * 3. Initialize the tool in this hook
 * 
 * Supported tools:
 * - Microsoft Clarity (free): https://clarity.microsoft.com
 * - Hotjar: https://hotjar.com
 * - PostHog: https://posthog.com
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Configuration - Add your tracking IDs here when ready
const ANALYTICS_CONFIG = {
  // Microsoft Clarity
  clarityProjectId: "", // e.g., "abc123xyz"
  
  // Hotjar
  hotjarSiteId: "", // e.g., "1234567"
  
  // Google Analytics
  googleAnalyticsId: "", // e.g., "G-XXXXXXXXXX"
  
  // Enable/disable tracking
  enabled: false,
};

/**
 * Initialize analytics tools
 * Uncomment and configure when ready to use
 */
const initializeAnalytics = () => {
  // Microsoft Clarity
  // if (ANALYTICS_CONFIG.clarityProjectId) {
  //   (function(c,l,a,r,i,t,y){
  //     c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  //     t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  //     y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  //   })(window, document, "clarity", "script", ANALYTICS_CONFIG.clarityProjectId);
  // }

  // Hotjar
  // if (ANALYTICS_CONFIG.hotjarSiteId) {
  //   (function(h,o,t,j,a,r){
  //     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //     h._hjSettings={hjid:ANALYTICS_CONFIG.hotjarSiteId,hjsv:6};
  //     a=o.getElementsByTagName('head')[0];
  //     r=o.createElement('script');r.async=1;
  //     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //     a.appendChild(r);
  //   })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  // }
};

/**
 * Track page views
 */
const trackPageView = (pathname: string) => {
  if (!ANALYTICS_CONFIG.enabled) return;
  
  // Google Analytics
  // if (window.gtag) {
  //   window.gtag('config', ANALYTICS_CONFIG.googleAnalyticsId, {
  //     page_path: pathname,
  //   });
  // }
  
  // Console log for development
  if (import.meta.env.DEV) {
    console.log("[Analytics] Page view:", pathname);
  }
};

/**
 * Track custom events
 */
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (!ANALYTICS_CONFIG.enabled) return;
  
  // Google Analytics
  // if (window.gtag) {
  //   window.gtag('event', eventName, properties);
  // }
  
  // Console log for development
  if (import.meta.env.DEV) {
    console.log("[Analytics] Event:", eventName, properties);
  }
};

/**
 * Main analytics hook
 * Add this to your App.tsx to enable analytics
 */
export const useAnalytics = () => {
  const location = useLocation();

  // Initialize analytics on mount
  useEffect(() => {
    if (ANALYTICS_CONFIG.enabled) {
      initializeAnalytics();
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);
};

export default useAnalytics;
