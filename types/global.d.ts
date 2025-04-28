export {}; // make this a module

declare global {
  interface Window {
    // an array of gtag‐style calls (each call is an array of unknowns)
    dataLayer: unknown[][];
    gtag?: (...args: any[]) => void;
  }
}
