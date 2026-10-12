import { ArrowRight } from "lucide-react";
import styles from "./BannerShell.module.css";

export function BannerShell({ id, eyebrow, title, accent, description, cta, onAction, className = "", children, compact = false, badge }) {
  const handleClick = () => onAction?.(`${title.replace("\n", " ")} selected. This is a frontend demo; connect the approved VELOOP route to enable the real feature.`);
  return (
    <section className={`${styles.banner} ${styles[id]} ${compact ? styles.compact : ""} ${className}`} aria-labelledby={`${id}-title`}>
      <div className={styles.content}>
        <div className={styles.eyebrow}><span className={styles.eyebrowDot}/>{eyebrow}</div>
        <h2 id={`${id}-title`}>{title} <span>{accent}</span></h2>
        <p className={styles.description}>{description}</p>
        {badge && <div className={styles.badge}>{badge}</div>}
        <button className={styles.cta} onClick={handleClick}>{cta}<span className={styles.ctaArrow}><ArrowRight size={16}/></span></button>
        <div className={styles.microcopy}>Explore the possibilities <span>·</span> Demo experience</div>
      </div>
      <div className={styles.visual}>{children}</div>
      <div className={styles.cornerGlow} aria-hidden="true"/>
    </section>
  );
}
