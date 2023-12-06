"use client";

import { SendHorizonal } from "lucide-react";

export function ButtonSendEmail() {
  return (
    <button
      type="submit"
      className="bg-blue-700 flex items-center justify-center self-end  mt-4 px-4 py-2 rounded text-md"
    >
      Enviar
      <SendHorizonal size={14} className="ml-2 mt-1" />
    </button>
  );
}
