export default function ServiceCard({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-primary/10 p-4 rounded-md cursor-pointer hover:-translate-y-2 transition-transform">
      <div className="flex items-center gap-4">
        <div className="bg-primary rounded-md">{icon}</div>
        <h4 className="text-xl">{title}</h4>
      </div>
      <p className="mt-2">{subtitle}</p>
    </div>
  );
}
