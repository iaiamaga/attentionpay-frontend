import { useNavigate } from 'react-router-dom';
import { AvatarEditor } from '@/components/profile';
import { useI18n } from '@/context';
import walletConnectIcon from '@/assets/icons/wallet_connect_transp.png';

const SettingsTab = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <AvatarEditor />

        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">account_circle</span>
            <h3 className="text-[18px] font-semibold leading-6">{t('settings.account')}</h3>
          </div>
          <div className="p-4 space-y-4">
            <button className="w-full flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition-colors group">
              <div className="text-left">
                <p className="text-[16px] leading-6">{t('settings.changeEmail')}</p>
                <p className="text-[14px] leading-5 text-on-surface-variant/60">{t('settings.currentEmail')}</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition-colors group">
              <div className="text-left">
                <p className="text-[16px] leading-6">{t('settings.changePassword')}</p>
                <p className="text-[14px] leading-5 text-on-surface-variant/60">{t('settings.lastPasswordUpdate')}</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">lock</span>
            </button>
          </div>
        </div>

        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container">account_balance_wallet</span>
            <h3 className="text-[18px] font-semibold leading-6">{t('settings.swapWallet')}</h3>
          </div>
          <div className="p-4 space-y-4">
            <button 
              onClick={() => navigate('/connect-wallet')}
              className="w-full flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-white/10 group-hover:border-secondary-container/50 transition-colors overflow-hidden">
                  <img 
                    alt="WalletConnect Icon" 
                    className="w-8 h-8 object-contain" 
                    src={walletConnectIcon}
                  />
                </div>
                <div className="text-left">
                  <p className="text-[16px] leading-6 text-on-surface">WalletConnect</p>
                  <p className="text-[14px] leading-5 text-on-surface-variant/60">{t('settings.scanQRCode')}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">link</span>
            </button>
          </div>
        </div>

        <button className="w-full bg-primary-container text-on-primary-container p-4 rounded-xl font-semibold text-[18px] leading-6 text-center hover:brightness-110 transition-all">
          {t('settings.finish')}
        </button>

        <button className="w-full glass-panel p-4 rounded-xl text-error font-semibold text-[18px] leading-6 text-center border border-error/20 hover:bg-error/5 transition-colors">
          {t('settings.deleteAccount')}
        </button>

        <div className="py-6 text-center">
          <p className="text-[12px] font-bold tracking-widest text-on-surface-variant/30 uppercase">{t('settings.version')}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;