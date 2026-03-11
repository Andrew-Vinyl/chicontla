import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const redirectTo = searchParams.get("redirect") ?? "/";

  // Optionally validate a secret here
  // For now, any request enables draft mode (Studio handles auth)
  if (secret) {
    // Could validate against SANITY_API_READ_TOKEN here for extra security
  }

  const draft = await draftMode();
  draft.enable();
  redirect(redirectTo);
}
