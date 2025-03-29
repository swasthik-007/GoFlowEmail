"use client";

import { Button } from "@a/components/ui/button";
import { getAurinkoAuthorizationUrl } from "@a/lib/aurinko";

const LinkAccountButton = () => {
  return (
    <Button
      onClick={async () => {
        const authUrl = await getAurinkoAuthorizationUrl("Google");
        console.log(authUrl);
        window.location.href = authUrl;
      }}
    >
      Link Account
    </Button>
  );
};
export default LinkAccountButton;
