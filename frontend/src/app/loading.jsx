import Icons from "@/utils/icons";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Icons.Spin className="animate-spin h-10 w-10 text-black" />
    </div>
  );
}
