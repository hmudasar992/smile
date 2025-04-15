// app/api/health/route.ts
export async function GET() {
    return Response.json({ 
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version
    });
  }