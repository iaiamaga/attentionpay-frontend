import { useAuth } from '@/context';
import bannerImage from '@/assets/images/banner.png';

const ProfileHeader = () => {
  const { user } = useAuth();

  return (
    <section className="relative w-full h-48 md:h-64 overflow-hidden pb-28">
      <img 
        alt="Cover Banner" 
        className="w-full h-full object-cover opacity-80" 
        src={bannerImage}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      
      <section className="px-container-margin -mt-20 relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary-container via-secondary-container to-primary shadow-[0_0_30px_rgba(108,92,231,0.4)]">
              <img 
                alt="User Avatar" 
                className="w-full h-full rounded-full object-cover" 
                src={user?.avatar}
              />
            </div>
           </div>
           <div className="mt-4 text-center">
             <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">{user?.name || 'Nome do usuário'}</h2>
           </div>
        </div>
      </section>
    </section>
  );
};

export default ProfileHeader;