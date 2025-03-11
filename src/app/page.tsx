import jwt from "jsonwebtoken";

export default function Home() {
  // you will need to install via 'npm install jsonwebtoken' or in your package.json

  const METABASE_SITE_URL = "http://localhost:3000";
  const METABASE_SECRET_KEY =
    "6e25e0e6acba73999bcecea2ce8e574634c9c2b74dda6aca6a2f83f7b16992b0";

  const payload = {
    resource: { dashboard: 2 },
    params: {},
    exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
  };
  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  const iframeUrl =
    METABASE_SITE_URL +
    "/embed/dashboard/" +
    token +
    "#theme=night&background=false&bordered=false&titled=false";

  console.log(iframeUrl);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <iframe src={iframeUrl} width="800" height="600"></iframe>
      </main>
    </div>
  );
}
