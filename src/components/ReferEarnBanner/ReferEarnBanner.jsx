import { BannerShell } from "../BannerShell/BannerShell.jsx";
import { FeatureIllustration } from "../FeatureIllustration/FeatureIllustration.jsx";
import styles from "./ReferEarnBanner.module.css";

export function ReferEarnBanner({ onAction, compact = false }) {
  return (
    <BannerShell id="refer" eyebrow="REFER & EARN" title="Invite friends." accent="Earn rewards." description="Bring your people to VELOOP Rewards and discover eligible referral rewards when milestones are completed." cta="Invite Friends →" badge="Referral rewards depend on eligible activities." onAction={onAction} compact={compact} className={styles.bannerOverride}>
      <FeatureIllustration type="refer" />
    </BannerShell>
  );
}
