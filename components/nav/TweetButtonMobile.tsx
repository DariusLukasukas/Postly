import TweetButton from "../sidebar/TweetButton";

export default function TweetButtonMobile() {
  return (
    <div className="fixed bottom-14 right-0 m-4 rounded-full border-[1px] border-black bg-white p-3 md:hidden">
      <TweetButton />
    </div>
  );
}
