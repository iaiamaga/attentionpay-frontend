interface DividerProps {
  label?: string;
  className?: string;
}

const Divider = ({ label = 'OU CONTINUE COM', className = '' }: DividerProps) => {
  return (
    <div className={`flex items-center gap-4 my-6 ${className}`}>
      <div className="h-[1px] flex-grow bg-white/10" />
      <span className="text-[12px] font-bold tracking-wider text-outline/60 shrink-0">
        {label}
      </span>
      <div className="h-[1px] flex-grow bg-white/10" />
    </div>
  );
};

export default Divider;