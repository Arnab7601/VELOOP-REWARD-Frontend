import { useMemo, useState } from "react";
import { ArrowUpRight, Bell, ChevronDown, CircleHelp, Menu, X, Sparkles, ShieldCheck } from "lucide-react";
import { ReferEarnBanner } from "./components/ReferEarnBanner/ReferEarnBanner.jsx";
import { SwapCenterBanner } from "./components/SwapCenterBanner/SwapCenterBanner.jsx";
import { BonusVEsBanner } from "./components/BonusVEsBanner/BonusVEsBanner.jsx";
import { CaptchaTasksBanner } from "./components/CaptchaTasksBanner/CaptchaTasksBanner.jsx";
import { ExchangeCenterBanner } from "./components/ExchangeCenterBanner/ExchangeCenterBanner.jsx";
import styles from "./styles/App.module.css";

const features = [
  { id: "refer", name: "Refer & Earn", tag: "INVITE & EARN", component: ReferEarnBanner },
  { id: "swap", name: "Swap Center", tag: "CONVERT", component: SwapCenterBanner },
  { id: "bonus", name: "Bonus VEs", tag: "EXTRA REWARDS", component: BonusVEsBanner },
  { id: "captcha", name: "Captcha Tasks", tag: "COMPLETE TASKS", component: CaptchaTasksBanner },
  { id: "exchange", name: "Exchange Center", tag: "REDEEM", component: ExchangeCenterBanner },
];

export default function App() {
  const [active, setActive] = useState("refer");
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const selected = useMemo(() => features.find((item) => item.id === active) ?? features[0], [active]);
  const Banner = selected.component;

  const selectFeature = (id) => {
    setActive(id);
    setMenuOpen(false);
    setNotice("");
  };

  return (
    <main className={styles.appShell}>
      <header className={styles.topbar}>
        <a href="#home" className={styles.brand} aria-label="VELOOP Rewards home" onClick={() => selectFeature("refer")}>
          <span className={styles.brandMark}><span /></span>
          <span>VELOOP<span className={styles.brandLight}>REWARDS</span></span>
        </a>
        <nav className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ""}`} aria-label="Main navigation">
          <a href="#features" className={styles.navActive} onClick={() => setMenuOpen(false)}>Rewards</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <div className={styles.headerActions}>
          <button className={styles.iconButton} aria-label="Notifications" onClick={() => setNotice("You’re all caught up in this demo.")}><Bell size={18} /></button>
          <button className={styles.profileButton} onClick={() => setNotice("Profile preview — connect your account in the production app.")} aria-label="Open profile">AM</button>
          <button className={styles.menuButton} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
        </div>
      </header>

      <section className={styles.welcome} id="home">
        <div>
          <div className={styles.eyebrow}><Sparkles size={14} /> YOUR REWARDS, REIMAGINED</div>
          <h1>Make every moment <span>more rewarding.</span></h1>
          <p>Discover new ways to earn, manage and redeem your rewards — all in one place.</p>
        </div>
        <div className={styles.trustPill}><ShieldCheck size={16} /><span>Designed with clarity in mind</span></div>
      </section>

      <section className={styles.featureSection} id="features">
        <div className={styles.sectionHeading}>
          <div><span className={styles.sectionKicker}>EXPLORE FEATURES</span><h2>Choose your next move</h2></div>
          <button className={styles.viewAll} onClick={() => { setActive("refer"); setNotice("Showing all five redesigned feature banners below."); document.getElementById("all-banners")?.scrollIntoView({ behavior: "smooth" }); }}>View all banners <ArrowUpRight size={16}/></button>
        </div>
        <div className={styles.featureTabs} role="tablist" aria-label="Reward features">
          {features.map((feature) => (
            <button key={feature.id} role="tab" aria-selected={active === feature.id} className={`${styles.featureTab} ${active === feature.id ? styles.tabSelected : ""}`} onClick={() => selectFeature(feature.id)}>
              <span>{feature.tag}</span>{feature.name}<ChevronDown size={14}/>
            </button>
          ))}
        </div>
        <div className={styles.activeBanner} key={active}>
          <Banner onAction={(message) => setNotice(message)} />
        </div>
        {notice && <div className={styles.notice} role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss message"><X size={14}/></button></div>}
      </section>

      <section className={styles.benefits} id="how-it-works">
        <div className={styles.benefitIntro}><span className={styles.sectionKicker}>SIMPLE BY DESIGN</span><h2>Rewards should feel effortless.</h2><p>Each feature has a clear purpose, so you can understand your options and choose what works for you.</p></div>
        <div className={styles.benefitCard}><span className={styles.benefitNumber}>01</span><h3>Discover</h3><p>Explore eligible activities and opportunities in one clear place.</p></div>
        <div className={styles.benefitCard}><span className={styles.benefitNumber}>02</span><h3>Manage</h3><p>Understand how supported reward balances and conversions work.</p></div>
        <div className={styles.benefitCard}><span className={styles.benefitNumber}>03</span><h3>Redeem</h3><p>Review available redemption options before you make a choice.</p></div>
      </section>

      <section className={styles.allBanners} id="all-banners">
        <div className={styles.sectionHeading}><div><span className={styles.sectionKicker}>THE COMPLETE SET</span><h2>Five features. One experience.</h2></div><span className={styles.smallNote}>Select any banner to preview it above</span></div>
        <div className={styles.bannerList}>
          {features.map((feature, index) => {
            const ItemBanner = feature.component;
            return <article className={styles.bannerItem} key={feature.id}>
              <div className={styles.bannerItemTop}><span>0{index + 1} / {feature.tag}</span><button onClick={() => { selectFeature(feature.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Preview banner <ArrowUpRight size={15}/></button></div>
              <ItemBanner compact onAction={(message) => setNotice(message)} />
            </article>;
          })}
        </div>
      </section>

      <footer className={styles.footer} id="about">
        <a href="#home" className={styles.brand}><span className={styles.brandMark}><span /></span><span>VELOOP<span className={styles.brandLight}>REWARDS</span></span></a>
        <p>© 2026 VELOOP Rewards</p>
        <a href="#how-it-works" className={styles.helpLink}><CircleHelp size={15}/> How it works</a>
      </footer>
      <div className={styles.disclaimer}>All rights reserved.</div>
    </main>
  );
}
