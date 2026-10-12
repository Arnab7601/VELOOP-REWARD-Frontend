import { BannerShell } from "../BannerShell/BannerShell.jsx";
import { FeatureIllustration } from "../FeatureIllustration/FeatureIllustration.jsx";
import styles from "./SwapCenterBanner.module.css";

export function SwapCenterBanner({ onAction, compact = false }) {
  return (
    <BannerShell id="swap" eyebrow="SWAP CENTER" title="Make your rewards" accent="work smarter." description="Explore how supported reward balances can be converted under the applicable platform rules." cta="Open Swap Center →" badge="A conversion utility — not an earning task." onAction={onAction} compact={compact} className={styles.bannerOverride}>
      <FeatureIllustration type="swap" />
    </BannerShell>
  );
}
