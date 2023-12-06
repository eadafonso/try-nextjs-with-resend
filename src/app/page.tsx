import Header from "./_components/header";
import ToolBar from "./_components/toolBar";
import SendEmail from "./_components/sendEmail";

export default function Home() {
  return (
    <form className="h-full flex items-center justify-center flex-col">
      <div className="bg-[#232529] flex flex-col min-w-[28%] rounded-md p-5">
        <Header />

        <div className="my-5 flex flex-col ">
          <ToolBar />

          <div className="flex flex-col mt-10 px-5">
            <SendEmail />
          </div>
        </div>
      </div>
    </form>
  );
}
