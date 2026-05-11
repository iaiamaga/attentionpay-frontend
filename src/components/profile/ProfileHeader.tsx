const ProfileHeader = () => {
  return (
    <section className="relative w-full h-48 md:h-64 overflow-hidden pb-28  ">
      <img 
        alt="Cover Banner" 
        className="w-full h-full object-cover opacity-80" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuByAKZu44IwwcaVS1-YIaaN2opmVOx49jBMm0ydMhaub-8z8mR2vGJj1jMC9BJUJAwOgcnXIyLtZem2b15L6Z5KFe5IX6r7UgxHnuCBriBmz12ZNhtFqKRVQFK10uXltKGjrIIPNZjifutl3PJxrPsKFBW-kR5A3Z1_JCynZgkjvna9a9PtlYuXM1gifqa7jXp43t33GaqcAPzoIXJkFHsBKQwXZesIMQcgRon9FfQ4yuemeHv5vxyWAn6KmeK4vNspj61vGJhUJcL9"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      
      <section className="px-container-margin -mt-20 relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary-container via-secondary-container to-primary shadow-[0_0_30px_rgba(108,92,231,0.4)]">
              <img 
                alt="User Avatar" 
                className="w-full h-full rounded-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9GRT06Ud0V7zkpLqZ9wI6yIG-yoakJSuaj4DFHDQ2ZnhvLRa5OR3sdIw2H2Lv0GPTA5O7Ixx6XDCskz9bwjnSJoiSpJweBx8RT98ycCdMdW46vInyJULEqImPMRCPSamWYz64uteMtYgygv43Md7tdVDBAnTIie0RC-LrHqVxtW7I-4NcLUNpKWbzxTLECERBwgPG6S1Guz5KecFSdFGjeo379htEhSX4o4dQyIl-fC2liGmbw1Fy2vrYGOtnhyN1-fASdr5zPQl"
              />
            </div>
           </div>
          <div className="mt-4 text-center">
            <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Alex Nova</h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProfileHeader;