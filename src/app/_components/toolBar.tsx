export default function ToolBar() {
  const data = [
    {
      title: "From:",
      avatar_letter: "R",
      name: "Resend",
      email: "  onboarding@resend.dev",
    },

    {
      title: "To:",
      avatar_letter: "E",
      name: "Edvaldo Afonso",
      email: "  eadafonso@gmail.com",
    },
  ];
  return (
    <div className=" flex flex-col gap-4">
      {data.map((_, index: number) => (
        <div className="flex flex-row items-center" key={index}>
          <span className="mr-2 text-sm text-zinc-400 w-12">{_.title}</span>

          <div className="flex flex-row items-center">
            <div
              className={`h-4 w-4 rounded-full flex justify-center items-center mr-1 ${
                _.title === "From:" ? "bg-blue-500" : "bg-red-500"
              }`}
            >
              <span className="text-[8px]">{_.avatar_letter}</span>
            </div>

            <span className="text-sm font-bold">{_.name}</span>
            <span className="text-xs ml-1 underline text-zinc-400">
              {_.email}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
