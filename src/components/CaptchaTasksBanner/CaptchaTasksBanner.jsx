import { BannerShell } from "../BannerShell/BannerShell.jsx";
import { FeatureIllustration } from "../FeatureIllustration/FeatureIllustration.jsx";
import styles from "./CaptchaTasksBanner.module.css";

export function CaptchaTasksBanner({ onAction, compact = false }) {
  return (
    <BannerShell id="captcha" eyebrow="TASK-BASED REWARDS" title="Complete tasks." accent="Earn with care." description="Complete available captcha tasks accurately and follow the platform rules for eligible submissions." cta="Start Tasks →" badge="Task-based earning · Separate from ad offers." onAction={onAction} compact={compact} className={styles.bannerOverride}>
      <FeatureIllustration type="captcha" />
    </BannerShell>
  );
}
