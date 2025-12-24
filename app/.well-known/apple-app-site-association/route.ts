import { NextResponse } from 'next/server'

/**
 * Apple App Site Association file for Universal Links
 *
 * This allows iOS to open specific URLs directly in the ContextWell app
 * instead of Safari when the app is installed.
 *
 * To enable:
 * 1. Deploy this to contextwell.app
 * 2. Update app.json with: "associatedDomains": ["applinks:contextwell.app"]
 * 3. Rebuild the iOS app
 */
export async function GET() {
  const appSiteAssociation = {
    applinks: {
      apps: [],
      details: [
        {
          // Format: TEAM_ID.BUNDLE_ID
          // TODO: Replace with your actual Apple Team ID
          appID: 'XXXXXXXXXX.com.contextwell.app',
          paths: [
            '/add-friend/*',
            '/add-friend',
            '/friends',
            '/invite/*',
          ],
        },
      ],
    },
    // Optional: webcredentials for password autofill
    webcredentials: {
      apps: ['XXXXXXXXXX.com.contextwell.app'],
    },
  }

  return NextResponse.json(appSiteAssociation, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
