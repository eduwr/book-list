import React from "react";
import Theme from "styles/theme";

interface Props {
  size?: number;
}

// Icons were created as React Components, this is not the best approach for a big projects, but in this case it was fine.

export const MenuIcon = ({ size }: Props): JSX.Element => {
  const theme = Theme.getInstance().getTheme("yellow");

  const s = size || 24;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={s}
      viewBox="0 0 24 24"
      width={s}
      fill={theme.textColor}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

export const SearchIcon = ({ size }: Props): JSX.Element => {
  const s = size || 24;
  const theme = Theme.getInstance().getTheme("yellow");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={s}
      viewBox="0 0 24 24"
      width={s}
      fill={theme.textColor}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
};

interface ConditionalIconProps extends Props {
  outlined?: boolean;
}

export const Star = ({ size, outlined }: ConditionalIconProps): JSX.Element => {
  const s = size || 24;
  const theme = Theme.getInstance().getTheme("yellow");

  if (outlined) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={s}
        viewBox="0 0 24 24"
        width={s}
      >
        <path
          fill={theme.textColor}
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={s}
      viewBox="0 0 24 24"
      width={s}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={theme.textColor}
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
};

export const Fav = ({ size, outlined }: ConditionalIconProps): JSX.Element => {
  const s = size || 24;
  const theme = Theme.getInstance().getTheme("yellow");

  if (outlined) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={s}
        viewBox="0 0 24 24"
        width={s}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="white"
          d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={s}
      viewBox="0 0 24 24"
      width={s}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="white"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
};

export const ArrowBack = ({ size }: Props): JSX.Element => {
  const s = size || 24;
  const theme = Theme.getInstance().getTheme("yellow");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={s}
      viewBox="0 0 24 24"
      width={s}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={theme.textColor}
        d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
      />
    </svg>
  );
};
