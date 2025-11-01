import type { NextConfig } from 'next';

const basePath = '/webflow-cloud-demo';

const nextConfig: NextConfig = {
  basePath,
  publicRuntimeConfig: {
    basePath,
  },
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
