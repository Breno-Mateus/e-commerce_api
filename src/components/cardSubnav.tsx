import Link from "next/link";

interface PropsCardSubnav {
  icon: React.ReactNode;
  category: string;
  href: string;
}

export default function CardSubnav({ icon, category, href} : PropsCardSubnav) {
  return (
    <Link href={href} className="bg-card-subnav w-40 h-32 rounded-md flex flex-col gap-4 items-center justify-center">
      <div className="text-5xl">{icon}</div>
      <p className="text-base font-medium">{category}</p>
    </Link>
  );
}