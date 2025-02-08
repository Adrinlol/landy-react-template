export const GTM_ID = process.env.REACT_APP_GTM_ID || '';

interface WindowWithDataLayer extends Window {
  dataLayer: any[];
}

declare const window: WindowWithDataLayer;

export const pageView = (url: string) => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.dataLayer.push({
    event: 'customEvent',
    eventAction: action,
    eventCategory: category,
    eventLabel: label,
    eventValue: value,
  });
};
