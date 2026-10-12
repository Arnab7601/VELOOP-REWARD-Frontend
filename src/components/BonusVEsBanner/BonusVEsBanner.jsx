import { BannerShell } from "../BannerShell/BannerShell.jsx";
import { FeatureIllustration } from "../FeatureIllustration/FeatureIllustration.jsx";
import styles from "./BonusVEsBanner.module.css";

export function BonusVEsBanner({ onAction, compact = false }) {
  return (
    <BannerShell id="bonus" eyebrow="BONUS OPPORTUNITIES" title="A little extra." accent="Goes a long way." description="Discover eligible campaigns and activities that may offer additional VEs. No fixed reward amount is promised." cta="Explore Bonus →" badge="Availability and eligibility may vary." onAction={onAction} compact={compact} className={styles.bannerOverride}>
      <FeatureIllustration type="bonus" />
    </BannerShell>
  );
}
