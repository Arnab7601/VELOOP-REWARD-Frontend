import { ArrowDownUp, ArrowLeftRight, BadgeCheck, Check, CheckCircle2, CircleDollarSign, Coins, Gift, Gem, HandCoins, LockKeyhole, PartyPopper, ShieldCheck, Sparkles, Ticket, Users, Wallet, Zap } from "lucide-react";
import { FaGift } from "react-icons/fa";
import styles from "./FeatureIllustration.module.css";

function Coin({ label = "VE", className = "" }) {
  return <div className={`${styles.coin} ${className}`}><span>{label}</span></div>;
}

export function FeatureIllustration({ type }) {
  if (type === "refer") return <div className={`${styles.scene} ${styles.referScene}`} role="img" aria-label="Illustration of friends sharing a reward gift and coins">
    <div className={`${styles.orbit} ${styles.orbitOne}`}/><div className={`${styles.orbit} ${styles.orbitTwo}`}/>
    <div className={styles.userBubble}><Users size={31}/></div>
    <div className={styles.giftBox}><div className={styles.giftLid}/><div className={styles.giftRibbon}/><FaGift size={57}/></div>
    <div className={styles.rewardTag}><Sparkles size={13}/> FRIEND BONUS</div>
    <Coin className={styles.coinA}/><Coin label="+" className={styles.coinB}/><Coin label="VE" className={styles.coinC}/>
    <div className={styles.miniUser}><Users size={18}/></div>
    <div className={styles.sceneCaption}><span className={styles.captionIcon}><Users size={15}/></span><span><b>Better together</b><small>Share the good stuff</small></span><ArrowLeftRight size={17}/></div>
  </div>;

  if (type === "swap") return <div className={`${styles.scene} ${styles.swapScene}`} role="img" aria-label="Two reward balance cards connected by swap arrows">
    <div className={`${styles.swapOrbit} ${styles.swapOrbitOne}`}/><div className={`${styles.swapOrbit} ${styles.swapOrbitTwo}`}/>
    <div className={`${styles.balanceCard} ${styles.balanceLeft}`}><span className={styles.balanceLabel}><span className={styles.smallCoin}>VE</span> VE BALANCE</span><strong>1,250</strong><small>Available balance</small><div className={styles.cardLine}/></div>
    <div className={`${styles.balanceCard} ${styles.balanceRight}`}><span className={styles.balanceLabel}><span className={styles.silverCoin}>S</span> SVE BALANCE</span><strong>840</strong><small>Supported balance</small><div className={styles.cardLine}/></div>
    <div className={styles.swapButton}><ArrowDownUp size={23}/></div>
    <div className={styles.swapStatus}><span/><span/> READY TO SWAP <Check size={12}/></div>
    <Coin label="↔" className={styles.swapCoin}/>
  </div>;

  if (type === "bonus") return <div className={`${styles.scene} ${styles.bonusScene}`} role="img" aria-label="Bonus reward box surrounded by gold coins and sparkles">
    <div className={styles.bonusHalo}/><div className={styles.bonusBurst}><Sparkles size={20}/></div>
    <div className={styles.bonusBox}><div className={styles.bonusLid}/><div className={styles.bonusBand}/><Gift size={67}/></div>
    <div className={styles.bonusBadge}><Zap size={15} fill="currentColor"/> BONUS</div>
    <Coin className={styles.bonusCoinA}/><Coin className={styles.bonusCoinB} label="+"/><Coin className={styles.bonusCoinC}/>
    <div className={styles.bonusMultiplier}><span>EXTRA</span><b>+ VE</b><small>Eligible rewards</small></div>
    <Sparkles className={styles.sparkleA} size={19}/><Sparkles className={styles.sparkleB} size={13}/>
  </div>;

  if (type === "captcha") return <div className={`${styles.scene} ${styles.captchaScene}`} role="img" aria-label="Verification task card with secure checkmark">
    <div className={styles.taskCard}><div className={styles.taskHeader}><span className={styles.taskLogo}><ShieldCheck size={17}/></span><span><b>Task verification</b><small>Secure completion flow</small></span><span className={styles.liveDot}/></div>
      <div className={styles.captchaBox}><span className={styles.captchaLabel}>VERIFY YOU'RE HUMAN</span><div className={styles.captchaLetters}>A 7 K 2 P</div><div className={styles.captchaNoise}/><span className={styles.captchaRefresh}>↻</span></div>
      <div className={styles.taskProgress}><span>Task progress</span><b>Complete</b></div><div className={styles.progressTrack}><span/></div>
      <div className={styles.taskVerified}><CheckCircle2 size={16}/> Submission verified <span>+ reward eligible</span></div>
    </div>
    <div className={styles.shieldFloat}><ShieldCheck size={31}/></div><Coin className={styles.taskCoin}/><div className={styles.taskSpark}><Sparkles size={18}/></div>
  </div>;

  return <div className={`${styles.scene} ${styles.exchangeScene}`} role="img" aria-label="Wallet and reward card illustration showing redemption options">
    <div className={styles.exchangeHalo}/>
    <div className={styles.rewardCardBack}><span>REWARD CARD</span><div/><small>•••• 2048</small></div>
    <div className={styles.wallet}><div className={styles.walletFlap}/><div className={styles.walletMark}><Wallet size={26}/></div><div className={styles.walletChip}/><span>VELOOP WALLET</span><b>REWARDS</b></div>
    <div className={styles.exchangeArrow}><ArrowLeftRight size={21}/></div>
    <div className={styles.payoutPill}><HandCoins size={16}/><span><b>Redeem</b><small>Supported options</small></span></div>
    <div className={styles.giftMini}><Gift size={20}/></div><Coin className={styles.exchangeCoin}/><div className={styles.exchangeCheck}><Check size={16}/></div>
  </div>;
}
