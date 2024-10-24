import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Callback: React.FC = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { code, state } = router.query;

  useEffect(() => {
    const exchangeCodeForToken = async () => {
      if (code) {
        try {
          const response = await axios.get("/oauth/exchange", {
            params: { code },
          });
          localStorage.setItem("access_token", response.data.access_token);
          router.push("/onboarding");
        } catch (error) {
          console.error("Error exchanging code for token", error);
        }
      }
    };
    exchangeCodeForToken();
  }, [code, router]);
  return <div>Redirecting . . .</div>;
};

export default Callback;
