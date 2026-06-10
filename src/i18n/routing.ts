import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['zh-TW', 'zh-CN', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'zh-TW',
  
  // Only prefix if it's not the default locale, or you can force it.
  localePrefix: 'always'
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
