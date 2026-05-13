import { useMemo } from 'react';

interface PasswordStrengthResult {
  score: number;
  level: 'empty' | 'weak' | 'fair' | 'good' | 'strong';
  label: string;
  color: string;
  requirements: PasswordRequirement[];
}

interface PasswordRequirement {
  label: string;
  met: boolean;
}

export function usePasswordStrength(password: string): PasswordStrengthResult {
  const requirements = useMemo((): PasswordRequirement[] => [
    { label: 'Mínimo 8 caracteres', met: password.length >= 8 },
    { label: 'Letra maiúscula', met: /[A-Z]/.test(password) },
    { label: 'Número', met: /[0-9]/.test(password) },
    { label: 'Caractere especial', met: /[^A-Za-z0-9]/.test(password) },
  ], [password]);

  const score = useMemo(() => {
    if (!password) return 0;
    return requirements.filter(r => r.met).length;
  }, [password, requirements]);

  const level = useMemo((): PasswordStrengthResult['level'] => {
    if (!password) return 'empty';
    if (score <= 1) return 'weak';
    if (score === 2) return 'fair';
    if (score === 3) return 'good';
    return 'strong';
  }, [password, score]);

  const label = useMemo(() => {
    switch (level) {
      case 'empty': return '';
      case 'weak': return 'Fraca';
      case 'fair': return 'Média';
      case 'good': return 'Boa';
      case 'strong': return 'Forte';
    }
  }, [level]);

  const color = useMemo(() => {
    switch (level) {
      case 'empty': return 'bg-white/10';
      case 'weak': return 'bg-error';
      case 'fair': return 'bg-warning';
      case 'good': return 'bg-primary';
      case 'strong': return 'bg-secondary-container';
    }
  }, [level]);

  return {
    score,
    level,
    label,
    color,
    requirements,
  };
}

export default usePasswordStrength;