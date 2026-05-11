

export default function IdiomButtom() {
  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-high/50 border border-white/5 hover:bg-white/10 transition-colors text-[12px] font-bold tracking-wider">
        <button className="text-[12px] font-bold tracking-wider text-secondary-fixed-dim">PT-BR</button>
            <span className="w-[1px] h-3 bg-white/10" />
        <button className="text-[12px] font-bold tracking-wider text-on-surface-variant/50 hover:text-on-surface transition-colors">EN</button>
  </div>
  
  );
}