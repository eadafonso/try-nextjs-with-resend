import { Mail, X } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <Mail size={18} className="text-zinc-300" />
        <h1 className="ml-1 text-zinc-300 font-bold">New Eamil</h1>
      </div>

      <button>
        <X size={18} className="text-zinc-400" />
      </button>
    </header>
  );
}
