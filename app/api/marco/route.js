export async function GET() {
  setTimeout(() => console.log("done"), 1000);
  return Response.json({ marco: "polo" });
}
