import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 opacity-100 mix-blend-soft-light">
      <Image
        src="/background.jpg"
        alt="Background image of car workshop"
        width={1700}
        height={900}
        className="object-cover"
      />
    </div>
  );
}
