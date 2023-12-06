"use client";

import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../actions";

export default function SendEmail() {
  const [sms, setSms] = useState<string>("");
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);
    sendEmail(sms)
      .then((result) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error", err);
      });
  }

  return (
    <>
      <h2 className="font-bold">Assunto: Next Js + Resend</h2>

      <textarea
        name="sms"
        value={sms}
        onChange={(e) => setSms(e.target.value)}
        placeholder="Escreve o teu email"
        className="h-[250px] mt-4 resize-none bg-transparent outline-none placeholder: text-xs text-zinc-400"
      />

      <button
        type="button"
        className="bg-blue-700 flex items-center justify-center self-end  mt-4 px-4 py-2 rounded text-md"
        onClick={handleSubmit}
      >
        {loading === true ? "Enviar..." : "Enviar"}

        <SendHorizonal size={14} className="ml-2 mt-1" />
      </button>
    </>
  );
}
