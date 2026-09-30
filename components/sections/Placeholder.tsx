export default function Placeholder({ name }: { name: string }) {
  return (
    <div className="grid h-40 place-items-center rounded-2xl border-2 border-dashed border-line bg-white/50">
      <span className="label">Section · {name}</span>
    </div>
  );
}
