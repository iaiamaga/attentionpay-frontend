import { useState } from 'react';
import { useAuth } from '@/context';
import blueAvatar from '@/assets/images/blue-avatar.png';
import greenAvatar from '@/assets/images/green-avatar.png';
import purpleAvatar from '@/assets/images/purple-avatar.png';
import yellowAvatar from '@/assets/images/yellow-avatar.png';

const AVATAR_OPTIONS = [
  blueAvatar,
  greenAvatar,
  purpleAvatar,
  yellowAvatar,
];

interface AvatarEditorProps {
  onAvatarChange?: (avatarUrl: string) => void;
}

const AvatarEditor = ({ onAvatarChange }: AvatarEditorProps) => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(user?.avatar || AVATAR_OPTIONS[0]);

  const handleAvatarClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSelectAvatar = (avatarUrl: string) => {
    setSelectedAvatar(avatarUrl);
    updateUser({ avatar: avatarUrl });
    onAvatarChange?.(avatarUrl);
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      <div className="glass-panel rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-secondary-container">face</span>
          <h3 className="text-[18px] font-semibold leading-6">Editar Avatar</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <button
              onClick={handleAvatarClick}
              className="relative group"
            >
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-primary-container via-secondary-container to-primary shadow-[0_0_20px_rgba(108,92,231,0.3)] hover:shadow-[0_0_30px_rgba(108,92,231,0.5)] transition-all">
                <img
                  alt="Avatar Atual"
                  className="w-full h-full rounded-full object-cover"
                  src={selectedAvatar}
                />
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-sm">edit</span>
              </div>
            </button>
          </div>

          <p className="text-[14px] text-on-surface-variant/60">
            Clique na foto para alterar
          </p>
        </div>

        {isEditing && (
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-[12px] font-bold tracking-wider text-on-surface-variant/50 uppercase mb-3">
              Selecione um avatar
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {AVATAR_OPTIONS.map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAvatar(avatar)}
                  className={`w-12 h-12 rounded-full p-0.5 transition-all hover:scale-110 ${
                    selectedAvatar === avatar
                      ? 'bg-gradient-to-tr from-primary-container to-secondary-container ring-2 ring-secondary-container'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <img
                    alt={`Avatar ${index + 1}`}
                    className="w-full h-full rounded-full object-cover"
                    src={avatar}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarEditor;