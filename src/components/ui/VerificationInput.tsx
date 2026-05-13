import { useState, useRef, useEffect, KeyboardEvent, ClipboardEvent } from 'react';

interface VerificationInputProps {
  length?: number;
  onComplete: (code: string) => void;
  className?: string;
}

const VerificationInput = ({ length = 6, onComplete, className = '' }: VerificationInputProps) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      const digits = value.replace(/\D/g, '').slice(0, length).split('');
      const newCode = [...code];
      digits.forEach((digit, i) => {
        if (index + i < length) {
          newCode[index + i] = digit;
        }
      });
      setCode(newCode);
      const nextIndex = Math.min(index + digits.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      const fullCode = newCode.join('');
      if (fullCode.length === length) {
        onComplete(fullCode);
      }
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    const newCode = pastedData.split('').concat(Array(length).fill('')).slice(0, length);
    setCode(newCode);
    
    if (pastedData.length === length) {
      onComplete(pastedData);
    }
    
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={`flex justify-between gap-3 ${className}`}>
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => { inputRefs.current[index] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-14 text-center text-[24px] font-bold rounded-lg bg-surface-container border border-white/10 text-secondary focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all duration-300 shadow-inner placeholder:text-on-surface-variant/30"
          placeholder="0"
        />
      ))}
    </div>
  );
};

export default VerificationInput;