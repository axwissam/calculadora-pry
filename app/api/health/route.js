export async function GET() {
  return Response.json({ ok: true, ts: new Date().toISOString(), version: '1.0.0' })
}
