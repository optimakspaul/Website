"use client";

import React from 'react';
import { track } from '@vercel/analytics';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  event: string;
  eventData?: Record<string, string>;
  children: React.ReactNode;
}

/** Anchor that reports a Vercel Analytics event on click. */
export default function TrackedLink({ event, eventData, children, ...anchorProps }: TrackedLinkProps) {
  return (
    <a {...anchorProps} onClick={() => track(event, eventData)}>
      {children}
    </a>
  );
}
