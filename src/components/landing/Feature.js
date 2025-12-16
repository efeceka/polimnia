export default function Feature({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700">
        {icon}
      </div>
      <div className="text-xs font-semibold tracking-[0.22em] uppercase text-zinc-800">
        {title}
      </div>
      <div className="text-xs leading-5 text-zinc-500">{description}</div>
    </div>
  );
}

