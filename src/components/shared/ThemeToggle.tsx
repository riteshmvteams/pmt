"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        className="radio-active mb-3 inline-flex rounded-lg ring-2 ring-offset-4 dark:ring-0 ring-ring"
        onClick={() => setTheme("light")}
      >
        <LightMode />
      </button>
      <button
        className="radio-active mb-3 inline-flex rounded-lg ring-offset-4 dark:ring-2 ring-0 ring-offset-background ring-ring"
        onClick={() => setTheme("dark")}
      >
        <DarkMode />
      </button>
    </div>
  );
}

export function LightMode() {
  return (
    <svg viewBox="0 0 172 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="171" height="101" rx="7.5" fill="#FAFAFA" />
      <rect
        x="0.5"
        y="0.5"
        width="171"
        height="101"
        rx="7.5"
        stroke="#E3E3E3"
      />
      <mask id="path-2-inside-1_10109_4647" fill="white">
        <path d="M17 27C17 21.4772 21.4772 17 27 17H171V91C171 96.5228 166.523 101 161 101H17V27Z" />
      </mask>
      <path
        d="M17 27C17 21.4772 21.4772 17 27 17H171V91C171 96.5228 166.523 101 161 101H17V27Z"
        fill="white"
      />
      <path
        d="M16 27C16 20.9249 20.9249 16 27 16H171V18H27C22.0294 18 18 22.0294 18 27H16ZM171 101H17H171ZM16 101V27C16 20.9249 20.9249 16 27 16V18C22.0294 18 18 22.0294 18 27V101H16ZM171 17V101V17Z"
        fill="#F1F1F1"
        mask="url(#path-2-inside-1_10109_4647)"
      />
      <circle cx="37.5" cy="35.5" r="4.5" fill="#FD5350" />
      <circle cx="52.5" cy="35.5" r="4.5" fill="#FDB23A" />
      <circle cx="67.5" cy="35.5" r="4.5" fill="#2CBF44" />
      <rect x="33" y="50" width="138" height="1" fill="#E3E3E3" />
      <path
        d="M33.384 82L39.936 65.2H42.864L49.368 82H46.128L42.528 72.448C42.448 72.256 42.336 71.952 42.192 71.536C42.064 71.12 41.92 70.672 41.76 70.192C41.6 69.696 41.456 69.24 41.328 68.824C41.2 68.392 41.104 68.08 41.04 67.888L41.64 67.864C41.544 68.184 41.432 68.544 41.304 68.944C41.176 69.344 41.04 69.76 40.896 70.192C40.752 70.624 40.608 71.04 40.464 71.44C40.336 71.84 40.216 72.2 40.104 72.52L36.504 82H33.384ZM36.36 78.16L37.44 75.448H45.096L46.248 78.16H36.36ZM55.7931 82.24C54.7531 82.24 53.8091 81.952 52.9611 81.376C52.1131 80.8 51.4331 80.016 50.9211 79.024C50.4091 78.032 50.1531 76.904 50.1531 75.64C50.1531 74.376 50.4091 73.248 50.9211 72.256C51.4331 71.264 52.1291 70.488 53.0091 69.928C53.8891 69.368 54.8811 69.088 55.9851 69.088C56.6251 69.088 57.2091 69.184 57.7371 69.376C58.2651 69.552 58.7291 69.808 59.1291 70.144C59.5291 70.48 59.8571 70.864 60.1131 71.296C60.3851 71.728 60.5691 72.192 60.6651 72.688L60.0171 72.52V69.352H62.9931V82H59.9931V78.976L60.6891 78.856C60.5771 79.288 60.3691 79.712 60.0651 80.128C59.7771 80.528 59.4091 80.888 58.9611 81.208C58.5291 81.512 58.0411 81.76 57.4971 81.952C56.9691 82.144 56.4011 82.24 55.7931 82.24ZM56.6091 79.624C57.2971 79.624 57.9051 79.456 58.4331 79.12C58.9611 78.784 59.3691 78.32 59.6571 77.728C59.9611 77.12 60.1131 76.424 60.1131 75.64C60.1131 74.872 59.9611 74.192 59.6571 73.6C59.3691 73.008 58.9611 72.544 58.4331 72.208C57.9051 71.872 57.2971 71.704 56.6091 71.704C55.9211 71.704 55.3131 71.872 54.7851 72.208C54.2731 72.544 53.8731 73.008 53.5851 73.6C53.2971 74.192 53.1531 74.872 53.1531 75.64C53.1531 76.424 53.2971 77.12 53.5851 77.728C53.8731 78.32 54.2731 78.784 54.7851 79.12C55.3131 79.456 55.9211 79.624 56.6091 79.624Z"
        fill="black"
      />
    </svg>
  );
}

export function DarkMode() {
  return (
    <svg viewBox="0 0 172 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="171" height="101" rx="7.5" fill="#484848" />
      <rect
        x="0.5"
        y="0.5"
        width="171"
        height="101"
        rx="7.5"
        stroke="#E3E3E3"
      />
      <path
        d="M17 27C17 21.4772 21.4772 17 27 17H171V91C171 96.5228 166.523 101 161 101H17V27Z"
        fill="black"
      />
      <circle cx="37.5" cy="35.5" r="4.5" fill="#FD5350" />
      <circle cx="52.5" cy="35.5" r="4.5" fill="#FDB23A" />
      <circle cx="67.5" cy="35.5" r="4.5" fill="#2CBF44" />
      <rect x="33" y="50" width="138" height="1" fill="#484848" />
      <path
        d="M33.384 82L39.936 65.2H42.864L49.368 82H46.128L42.528 72.448C42.448 72.256 42.336 71.952 42.192 71.536C42.064 71.12 41.92 70.672 41.76 70.192C41.6 69.696 41.456 69.24 41.328 68.824C41.2 68.392 41.104 68.08 41.04 67.888L41.64 67.864C41.544 68.184 41.432 68.544 41.304 68.944C41.176 69.344 41.04 69.76 40.896 70.192C40.752 70.624 40.608 71.04 40.464 71.44C40.336 71.84 40.216 72.2 40.104 72.52L36.504 82H33.384ZM36.36 78.16L37.44 75.448H45.096L46.248 78.16H36.36ZM55.7931 82.24C54.7531 82.24 53.8091 81.952 52.9611 81.376C52.1131 80.8 51.4331 80.016 50.9211 79.024C50.4091 78.032 50.1531 76.904 50.1531 75.64C50.1531 74.376 50.4091 73.248 50.9211 72.256C51.4331 71.264 52.1291 70.488 53.0091 69.928C53.8891 69.368 54.8811 69.088 55.9851 69.088C56.6251 69.088 57.2091 69.184 57.7371 69.376C58.2651 69.552 58.7291 69.808 59.1291 70.144C59.5291 70.48 59.8571 70.864 60.1131 71.296C60.3851 71.728 60.5691 72.192 60.6651 72.688L60.0171 72.52V69.352H62.9931V82H59.9931V78.976L60.6891 78.856C60.5771 79.288 60.3691 79.712 60.0651 80.128C59.7771 80.528 59.4091 80.888 58.9611 81.208C58.5291 81.512 58.0411 81.76 57.4971 81.952C56.9691 82.144 56.4011 82.24 55.7931 82.24ZM56.6091 79.624C57.2971 79.624 57.9051 79.456 58.4331 79.12C58.9611 78.784 59.3691 78.32 59.6571 77.728C59.9611 77.12 60.1131 76.424 60.1131 75.64C60.1131 74.872 59.9611 74.192 59.6571 73.6C59.3691 73.008 58.9611 72.544 58.4331 72.208C57.9051 71.872 57.2971 71.704 56.6091 71.704C55.9211 71.704 55.3131 71.872 54.7851 72.208C54.2731 72.544 53.8731 73.008 53.5851 73.6C53.2971 74.192 53.1531 74.872 53.1531 75.64C53.1531 76.424 53.2971 77.12 53.5851 77.728C53.8731 78.32 54.2731 78.784 54.7851 79.12C55.3131 79.456 55.9211 79.624 56.6091 79.624Z"
        fill="#929292"
      />
    </svg>
  );
}
