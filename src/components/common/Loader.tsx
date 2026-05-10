interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loader = ({ size = 'md' }: LoaderProps) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
  };

  return (
    <div className={`${sizes[size]} border-[rgba(255,255,255,0.1)] border-t-[#6c5ce7] rounded-full animate-spin`} />
  );
};

export default Loader;