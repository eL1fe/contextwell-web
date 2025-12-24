import { NextResponse } from 'next/server'

/**
 * Android App Links (Digital Asset Links)
 *
 * This allows Android to verify that the website and app are owned
 * by the same entity, enabling App Links (deep links that open directly
 * in the app without a disambiguation dialog).
 *
 * To enable:
 * 1. Get your app's SHA-256 signing certificate fingerprint:
 *    - For debug: keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey
 *    - For release: Get from Google Play Console → Release → App signing
 * 2. Replace the placeholder fingerprint below
 * 3. Deploy to contextwell.app
 * 4. Update app.json with intentFilters for autoVerify
 * 5. Rebuild the Android app
 */
export async function GET() {
  const assetLinks = [
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: 'com.contextwell.app',
        sha256_cert_fingerprints: [
          // TODO: Replace with your actual SHA-256 certificate fingerprint
          // Format: XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX
          'FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C',
        ],
      },
    },
  ]

  return NextResponse.json(assetLinks, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
