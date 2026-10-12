import { BannerShell } from "../BannerShell/BannerShell.jsx";
import { FeatureIllustration } from "../FeatureIllustration/FeatureIllustration.jsx";
import styles from "./ExchangeCenterBanner.module.css";

export function ExchangeCenterBanner({ onAction, compact = false }) {
  return (
    <BannerShell id="exchange" eyebrow="EXCHANGE CENTER" title="Your rewards," accent="your next move." description="Explore supported redemption options and review the requirements before exchanging eligible VEs." cta="Explore Rewards →" badge="Redemption options depend on platform availability." onAction={onAction} compact={compact} className={styles.bannerOverride}>
      <FeatureIllustration type="exchange" />
    </BannerShell>
  );
}
