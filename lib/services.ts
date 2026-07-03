export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  body: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "offer-in-compromise",
    shortTitle: "Offer In Compromise",
    title: "Offer In Compromise in Maryland, DC & Virginia",
    tagline: "Settle your IRS debt for less than you owe",
    description:
      "An Offer in Compromise allows qualifying taxpayers to settle their federal tax debt for less than the full amount owed. Our attorney-CPA evaluates your eligibility and builds the strongest possible case.",
    body: `An Offer in Compromise (OIC) is one of the most powerful tools available to taxpayers who cannot afford to pay their full IRS debt. If approved, you pay a settled amount — often a fraction of what you owe — and the remaining balance is forgiven.

The IRS accepts OICs when there is doubt about collectibility, doubt about liability, or when collecting the full amount would create economic hardship. Qualifying requires careful documentation of your income, expenses, and assets.

**Why representation matters:** The OIC acceptance rate for self-filed applications is significantly lower than for professionally prepared ones. A weak application wastes your time, restarts collection timelines, and signals to the IRS that you don't have professional help. We evaluate your OIC eligibility before filing and only submit when the case is strong.

**How we work with Maryland, DC, and Virginia clients:**

- Maryland Comptroller OIC cases run separately from IRS cases — we handle both simultaneously
- Virginia Department of Taxation has its own OIC program with different qualifying criteria
- DC Office of Tax and Revenue OIC cases follow DC-specific rules we know well

**The process:**

1. Free consultation — we assess your eligibility based on your current financial picture
2. Full financial analysis — we calculate your Reasonable Collection Potential (RCP), the number that determines your offer amount
3. Application preparation — Forms 656 and 433-A/B with complete supporting documentation
4. IRS negotiation — we communicate directly with the IRS on your behalf throughout review
5. Resolution — accepted offer means one payment or short installment, then your tax debt is closed`,
    faqs: [
      {
        q: "Do I qualify for an Offer in Compromise?",
        a: "You may qualify if you cannot pay your full tax liability, or if doing so would create financial hardship. The IRS considers your income, expenses, assets, and equity. We assess this for free during your initial consultation.",
      },
      {
        q: "How much will I settle for?",
        a: "Your offer is based on your Reasonable Collection Potential — essentially what the IRS thinks it could collect from you. This is highly individual. Some clients settle for 10 cents on the dollar; others more. We calculate this precisely before filing.",
      },
      {
        q: "How long does an OIC take?",
        a: "IRS OIC review typically takes 6–12 months. While your offer is pending, collection activity is paused. We keep you updated throughout the process.",
      },
      {
        q: "What happens if the IRS rejects my offer?",
        a: "You have the right to appeal. We handle appeals and, if necessary, explore alternative resolution options like installment agreements or currently not collectible status.",
      },
      {
        q: "Can Maryland or Virginia also forgive state tax debt?",
        a: "Yes. Maryland and Virginia both have their own OIC programs. We handle state and federal OICs together so nothing falls through the cracks.",
      },
    ],
  },
  {
    slug: "back-taxes",
    shortTitle: "Back Taxes Owed",
    title: "Back Taxes Help in Maryland, DC & Virginia",
    tagline: "Stop IRS and state collection. Resolve what you owe.",
    description:
      "Owing back taxes to the IRS, Maryland Comptroller, Virginia Department of Taxation, or DC Office of Tax and Revenue creates serious consequences. We stop collection action and find the best resolution path for your situation.",
    body: `Back taxes accumulate fast. Penalties and interest compound daily, and once the IRS or state tax authority begins collection — levies, liens, garnishments — the pressure becomes financial and psychological.

The earlier you act, the more options you have. If collection has already started, we work to stop it while we negotiate the underlying debt.

**What "back taxes" typically means:**

- Unpaid federal income tax from prior years
- Unpaid Maryland state income tax (collected by the Maryland Comptroller)
- Unpaid Virginia state income tax (Virginia Department of Taxation)
- Unpaid DC income tax (DC Office of Tax and Revenue)
- Business taxes owed, including payroll taxes

**Resolution options we evaluate for you:**

- Offer in Compromise — settle for less than owed
- Installment Agreement — structured payment plan
- Currently Not Collectible status — temporary pause on collection if you can't pay
- Penalty abatement — reduce the penalties added on top of your original debt
- Innocent spouse relief — if your liability stems from a joint return

**The Maryland Comptroller's collection process** moves aggressively. They can intercept state tax refunds, place liens on property, and refer cases to the Central Collection Unit (CCU) — which adds collection fees on top of your balance. We deal with the Comptroller regularly and know how to navigate their resolution programs.

**Virginia Department of Taxation** has a streamlined installment program but also moves quickly on liens and levies. DC OTR operates similarly. All three require separate resolution processes from the IRS — we handle them simultaneously so you're not resolving one while another escalates.`,
    faqs: [
      {
        q: "What happens if I just ignore the notices?",
        a: "Collection escalates. The IRS and state tax authorities will file tax liens, issue levies on bank accounts, and garnish wages without further warning once initial notice requirements are met. Ignoring notices eliminates options and increases costs.",
      },
      {
        q: "Can I negotiate with the IRS myself?",
        a: "You can, but results are typically worse without representation. As an attorney-CPA, we can represent you in Tax Court if it comes to that — enrolled agents and regular CPAs cannot.",
      },
      {
        q: "Will my wages be garnished?",
        a: "If you owe back taxes and haven't responded to IRS notices, wage garnishment is possible. We can often stop a garnishment once we file representation paperwork and open negotiations.",
      },
      {
        q: "How far back does the IRS go?",
        a: "The IRS generally has 10 years from assessment to collect. For unfiled returns, the clock doesn't start until the return is filed or the IRS files a Substitute for Return on your behalf.",
      },
    ],
  },
  {
    slug: "unfiled-tax-returns",
    shortTitle: "Unfiled Tax Returns",
    title: "Unfiled Tax Returns — Maryland, DC & Virginia",
    tagline: "Get into compliance before the IRS acts first",
    description:
      "Failure to file federal or state tax returns is a criminal offense. The longer you wait, the fewer options you have. We help you get into compliance quietly, reduce penalties, and prevent criminal referral.",
    body: `Not filing a tax return is different from not paying taxes — and in many ways more serious. Failure to file is a misdemeanor under federal law. If the IRS believes it was willful, it can become a felony. Most people in this situation didn't intend to commit a crime — they fell behind, got overwhelmed, or didn't know they owed — but the legal exposure is real.

The practical consequences compound the legal ones. The IRS can file a Substitute for Return (SFR) on your behalf — but SFRs disallow every deduction you're entitled to, and the resulting bill is often dramatically higher than if you'd filed yourself. Once an SFR is filed, you still have options, but you've lost your chance to file the most favorable version of your return.

**How we handle unfiled returns:**

1. We determine how many years need to be filed. The IRS typically requires the last 6 years for compliance, but the specific requirement depends on your situation.
2. We gather your income information. In many cases we can reconstruct records using IRS transcripts and third-party documentation.
3. We file the returns in the most favorable way — claiming every deduction and credit you're entitled to.
4. We negotiate the resulting liability as part of the same resolution process, so you're not left with a clean filing and a new enormous bill.

**State considerations:** Maryland, Virginia, and DC all have their own failure-to-file rules and penalties. Resolving federal unfiled returns without addressing state returns leaves you exposed. We handle all jurisdictions.

The best time to address unfiled returns is before the IRS contacts you. We can get you into compliance quietly. Once the IRS has already initiated contact, your options narrow and the process becomes more stressful.`,
    faqs: [
      {
        q: "Will I be prosecuted for not filing?",
        a: "Criminal prosecution for failure to file is relatively rare and typically reserved for cases involving large amounts, willful evasion, or repeated non-compliance. That said, the legal risk is real, and the best way to eliminate it is to file. We handle this process carefully.",
      },
      {
        q: "I don't have my records from those years. Can I still file?",
        a: "Yes. We can request IRS transcripts that show income reported by employers and financial institutions, which lets us reconstruct returns even without your original documents.",
      },
      {
        q: "What if I can't pay what I owe after filing?",
        a: "Filing and paying are separate. We file to eliminate the criminal exposure and stop penalties from compounding, then negotiate the balance through an installment agreement, OIC, or hardship status.",
      },
      {
        q: "How many years do I need to file?",
        a: "The IRS generally requires the last 6 years for compliance. Older years may also need to be addressed depending on your specific situation. We determine this during your consultation.",
      },
    ],
  },
  {
    slug: "installment-agreements",
    shortTitle: "Installment Agreements",
    title: "IRS Installment Agreements — MD, DC & VA",
    tagline: "A structured payment plan that stops collection",
    description:
      "If you can't pay your full tax balance but can make payments over time, an installment agreement stops enforced collection and gives you a clear path forward. We negotiate the terms to fit your budget.",
    body: `An installment agreement is a formal arrangement with the IRS (or state tax authority) to pay your debt over time. Once in place, it halts levies, garnishments, and other enforced collection — as long as you stay current on payments.

Not all installment agreements are the same. The IRS offers several types:

- **Guaranteed Installment Agreement** — available if you owe $10,000 or less and meet specific criteria
- **Streamlined Installment Agreement** — available for balances up to $50,000, requires no financial disclosure
- **Non-Streamlined Agreement** — for larger balances, requires full financial disclosure and negotiation
- **Partial Pay Installment Agreement (PPIA)** — monthly payments lower than required to pay off the full balance; remaining debt may expire at the Collection Statute Expiration Date

For larger balances, the IRS will require you to complete a Collection Information Statement (Form 433-A or 433-B) to justify the payment amount. What you include — and how it's presented — directly affects the payment amount the IRS will accept.

**State installment agreements:** Maryland, Virginia, and DC all have their own installment programs with different rules. Maryland's Comptroller has streamlined options but also moves quickly to the Central Collection Unit for unresolved balances. Virginia and DC have similar programs. We handle state and federal simultaneously.

Penalties and interest continue to accrue on an installment agreement, but the rate slows once you're in compliance. In some cases, penalty abatement can reduce the underlying balance before the payment plan is set.`,
    faqs: [
      {
        q: "Will collection stop once I'm on a payment plan?",
        a: "Yes. Once an installment agreement is approved and you stay current, the IRS suspends levies and garnishments. A federal tax lien may still exist but won't actively be pursued.",
      },
      {
        q: "What if I can't afford the minimum IRS payment?",
        a: "There may be a Partial Pay Installment Agreement available, where payments are set based on what you can actually afford. The remaining balance may expire when the collection statute runs out.",
      },
      {
        q: "Can my monthly payment be reduced?",
        a: "Possibly. The allowable monthly payment is based on IRS national and local expense standards. A properly prepared financial disclosure can result in lower allowable payments than the IRS initially demands.",
      },
      {
        q: "Do I still owe interest on an installment agreement?",
        a: "Yes. Interest continues to accrue until the balance is paid in full. Penalty abatement can reduce the balance you're paying interest on.",
      },
    ],
  },
  {
    slug: "penalty-abatement",
    shortTitle: "Penalty Abatement",
    title: "IRS Penalty Abatement — Maryland, DC & Virginia",
    tagline: "Reduce the penalties piled on top of what you owe",
    description:
      "IRS penalties can add 25–50% or more to your original tax debt. Penalty abatement removes penalties you shouldn't have to pay — and reduces the balance you're negotiating against.",
    body: `When you owe back taxes, the IRS doesn't just collect the original amount — they add failure-to-file penalties, failure-to-pay penalties, and interest. These additions can be enormous. Penalty abatement is the process of requesting that the IRS reduce or remove these penalties.

**First-Time Penalty Abatement (FTA):** If you have a clean compliance history (no penalties in the prior 3 years) and are now in compliance, you may qualify for FTA. This is the most reliable and fastest form of penalty relief. It can be requested by phone or in writing and applies to failure-to-file, failure-to-pay, and failure-to-deposit penalties.

**Reasonable Cause Abatement:** If FTA doesn't apply or doesn't cover everything, you can request abatement based on reasonable cause — circumstances beyond your control that prevented timely filing or payment. Valid reasons include serious illness, natural disasters, death of a family member, or reliance on incorrect professional advice. The documentation and argument matter enormously here.

**Statutory Exceptions:** In some cases, the law itself provides penalty relief, such as during federally declared disasters or for specific types of tax situations.

**State penalty abatement:** Maryland, Virginia, and DC all have their own penalty systems. The Maryland Comptroller, Virginia Department of Taxation, and DC OTR each have abatement procedures. We handle all three.

Penalty abatement should typically be pursued before settling on an installment amount or OIC — a lower underlying balance produces lower payments and better settlement terms.`,
    faqs: [
      {
        q: "How much can penalty abatement save me?",
        a: "It depends on your situation, but failure-to-file penalties alone can reach 25% of unpaid tax. Combined with failure-to-pay penalties and interest, abatement can meaningfully reduce your balance before any other resolution is negotiated.",
      },
      {
        q: "Does the IRS grant abatement automatically?",
        a: "First-Time Penalty Abatement is relatively straightforward if you qualify. Reasonable cause abatement requires a written request with supporting documentation. The IRS denies poorly documented requests.",
      },
      {
        q: "Can I get abatement if I'm on a payment plan?",
        a: "Yes. Penalty abatement can be pursued independently of your payment arrangement and can reduce the total balance you're paying off.",
      },
    ],
  },
  {
    slug: "wage-garnishment",
    shortTitle: "Wage Garnishment Relief",
    title: "IRS Wage Garnishment Relief — MD, DC & VA",
    tagline: "Stop the IRS from taking your paycheck",
    description:
      "IRS wage garnishment — also called a wage levy — can take a significant portion of your paycheck every pay period. We move quickly to get it released and resolve the underlying debt.",
    body: `An IRS wage levy allows the IRS to take a portion of every paycheck before you receive it. Unlike a one-time bank levy, a wage garnishment continues indefinitely until the debt is paid in full or an alternative resolution is in place.

The amount taken can be substantial. The IRS uses a formula based on your filing status and number of dependents — but it doesn't consider your actual living expenses. It's not uncommon for 40–70% of take-home pay to be seized, leaving employees unable to cover rent or basic expenses.

**How we stop wage garnishment:**

1. We file a Power of Attorney (Form 2848) immediately, which puts the IRS in contact with us instead of you
2. We request a Collection Due Process (CDP) hearing or work directly with the IRS to establish an alternative resolution
3. Once we have a resolution in place — installment agreement, OIC, or hardship status — the wage levy is released

Most garnishments can be stopped or significantly reduced within days of us filing representation.

**Maryland, DC, and Virginia wage garnishments:** State wage garnishments operate separately from IRS garnishments. Maryland law limits state garnishments to 25% of disposable income, but combined with an IRS levy, the total seizure can be devastating. We address state and federal garnishments simultaneously.

**Your employer and the garnishment:** Your employer is legally required to comply with an IRS wage levy. They are not your adversary here — they're following the law. We don't involve your employer beyond what's required, and the release goes through your payroll department once the levy is lifted.`,
    faqs: [
      {
        q: "How quickly can a wage garnishment be stopped?",
        a: "In many cases, within days of us filing representation and establishing a resolution with the IRS. We prioritize garnishment releases because of the immediate financial harm they cause.",
      },
      {
        q: "Will my employer know about my tax problem?",
        a: "Your employer already knows — they received the levy notice. We work to get it released as quickly as possible. We don't notify your employer of anything beyond the levy release.",
      },
      {
        q: "Can the garnishment be applied to state tax debt too?",
        a: "Maryland, Virginia, and DC can all garnish wages for state tax debt, separate from any IRS action. We address both simultaneously.",
      },
      {
        q: "What if I just change jobs to escape the levy?",
        a: "The levy follows you. When you start a new job, you're required to inform the IRS, and a new levy can be issued. Changing jobs doesn't eliminate the garnishment — it just restarts it.",
      },
    ],
  },
  {
    slug: "irs-audit-representation",
    shortTitle: "IRS Audit Representation",
    title: "IRS Audit Representation — Maryland, DC & VA",
    tagline: "Don't face an IRS audit alone",
    description:
      "An IRS audit is a formal examination of your tax return. Having an attorney-CPA represent you keeps the process focused, protects your rights, and often produces better outcomes than representing yourself.",
    body: `An IRS audit — whether a correspondence audit, office audit, or field audit — is an official proceeding. What you say and provide during an audit becomes part of the record. Taxpayers who represent themselves often over-share, mischaracterize expenses, or miss opportunities to challenge the IRS's position.

**Types of audits:**

- **Correspondence audit** — the most common type; conducted by mail, usually requesting documentation for specific line items
- **Office audit** — you (or your representative) meet with an IRS examiner at a local IRS office
- **Field audit** — an IRS agent visits your home or business, typically for more complex cases or businesses

**As your representative, we:**

- Review the audit notice and identify exactly what the IRS is examining
- Gather and organize documentation to support your position
- Communicate directly with the IRS — you don't attend unless necessary
- Challenge any proposed adjustments we believe are incorrect
- Negotiate any additional tax owed if adjustments are warranted
- Appeal to the IRS Office of Appeals if we disagree with the examiner's findings

**The attorney advantage:** As an attorney, we can take audit disputes to Tax Court, the US District Court, and the US Court of Federal Claims if necessary. This option is not available when represented by an enrolled agent or non-attorney CPA. Courts know this — and so does the IRS.

**Maryland, Virginia, and DC state audits** follow different procedures from IRS audits. We handle state audit representation alongside any related federal proceedings.`,
    faqs: [
      {
        q: "Do I have to attend the audit in person?",
        a: "In most cases, no. We can represent you without your attendance at correspondence and office audits. For field audits, our presence allows us to manage the scope and flow of the examination.",
      },
      {
        q: "What if I don't have all the documents the IRS is asking for?",
        a: "Missing documents don't automatically mean you lose the audit. We work with what you have, reconstruct what we can, and make the strongest possible case with available evidence.",
      },
      {
        q: "I received an audit notice — what should I do first?",
        a: "Don't respond to the IRS directly yet. Call us first. The response you give to an audit notice sets the tone for the entire examination.",
      },
      {
        q: "How long does an audit take?",
        a: "Correspondence audits often resolve in 2–4 months. Office and field audits can take 6–12 months or more. We keep the process moving and push back on unnecessary delays.",
      },
    ],
  },
  {
    slug: "bank-levy",
    shortTitle: "Bank Levy Release",
    title: "IRS Bank Levy Release — Maryland, DC & VA",
    tagline: "The IRS froze your account. We get it released.",
    description:
      "An IRS bank levy freezes your bank account for 21 days, then seizes the funds. Acting immediately is critical. We move fast to get levies released and establish a resolution that prevents the next one.",
    body: `An IRS bank levy is a one-time seizure of funds in your bank account. When the IRS issues a levy to your bank, the bank freezes the balance up to the amount owed for 21 days. At the end of that window, the funds are sent to the IRS — unless you've obtained a release.

Twenty-one days is a short window. We act immediately.

**How a levy release works:**
The IRS will release a bank levy if you can demonstrate that it creates an economic hardship, or if you establish an alternative resolution — installment agreement, OIC, or currently not collectible status. We file representation immediately, communicate directly with the IRS, and work to get the levy released before the 21-day window closes.

**Preventing future levies:**
A levy release alone doesn't resolve the underlying debt. If the levy is released without a formal agreement in place, the IRS can issue another one. We resolve both simultaneously — release the current levy and establish an arrangement that prevents the next one.

**Business bank levies:** For businesses, a bank levy can be immediately crippling — payroll, vendor payments, and operating expenses all run through the account. We handle business levy releases with urgency.

**State bank levies:** Maryland, Virginia, and DC can all issue bank levies for state tax debt. These are separate from IRS levies and require separate releases. We handle all jurisdictions.`,
    faqs: [
      {
        q: "I woke up and my bank account is frozen. What do I do?",
        a: "Call us immediately. The 21-day window means every day matters. The sooner we file representation, the more time we have to get the levy released before funds are transferred.",
      },
      {
        q: "Can the levy be released if I can't pay the full amount?",
        a: "Yes. A levy can be released for economic hardship even if you can't pay. We document the hardship and establish a workable resolution that stops collection.",
      },
      {
        q: "What if the 21 days have already passed?",
        a: "Once funds are transferred, they generally can't be returned. However, we can still resolve the underlying debt and prevent future levies.",
      },
    ],
  },
  {
    slug: "payroll-tax-relief",
    shortTitle: "Payroll Tax Relief",
    title: "Payroll Tax Relief for Businesses — MD, DC & VA",
    tagline: "Resolve payroll tax debt before it destroys your business",
    description:
      "Unpaid payroll taxes are among the most serious tax problems a business can face. The IRS can hold business owners personally liable through the Trust Fund Recovery Penalty. We stop collection and negotiate relief.",
    body: `Payroll taxes — the employee withholding and employer contributions a business is required to remit to the IRS — are treated differently from other tax debt. When a business fails to remit payroll taxes, the IRS views it as using employee trust fund money to finance the business. The consequences are severe.

**Trust Fund Recovery Penalty (TFRP):** The IRS can assess the Trust Fund Recovery Penalty against any person who was responsible for collecting and paying over payroll taxes and who willfully failed to do so. This means the penalty follows individuals personally — it doesn't disappear if the business closes. As an attorney, we can challenge TFRP assessments and represent you in collection proceedings.

**How serious is payroll tax debt?**

- The IRS prioritizes payroll tax collection over most other enforcement
- Penalties and interest compound quickly on trust fund balances
- Revenue Officers (field agents) are commonly assigned to payroll tax cases
- Business assets and personal assets of responsible individuals are both at risk

**Resolution options for payroll tax:**

- Installment agreements for the business and/or individuals assessed the TFRP
- Offer in Compromise for qualifying businesses
- Penalty abatement for accrued penalties
- Challenge to the TFRP assessment if the responsible person determination is incorrect

**State payroll taxes:** Maryland, Virginia, and DC all have withholding tax requirements. State payroll tax defaults operate separately from federal and carry their own penalties. We handle state and federal payroll tax issues together.`,
    faqs: [
      {
        q: "Can the IRS come after me personally for my business's payroll taxes?",
        a: "Yes. The Trust Fund Recovery Penalty makes responsible individuals personally liable for the employee withholding portion of unpaid payroll taxes — regardless of the business entity type.",
      },
      {
        q: "My business is already closed. Can the IRS still collect?",
        a: "For regular business taxes, business closure limits IRS collection to business assets. But the Trust Fund Recovery Penalty follows responsible individuals personally, regardless of whether the business still exists.",
      },
      {
        q: "What makes someone a 'responsible person' for TFRP purposes?",
        a: "Responsibility is based on authority and duty, not just job title. Officers, directors, shareholders with signing authority, and bookkeepers who control finances can all be assessed. We challenge incorrect TFRP determinations.",
      },
    ],
  },
  {
    slug: "currently-not-collectible",
    shortTitle: "Currently Not Collectible",
    title: "Currently Not Collectible Status — MD, DC & VA",
    tagline: "Temporarily pause IRS collection when you can't pay",
    description:
      "Currently Not Collectible (CNC) status pauses all IRS collection activity when paying would leave you unable to cover basic living expenses. It's a temporary solution that buys time while your financial situation stabilizes.",
    body: `Currently Not Collectible (CNC) — also called hardship status — is a formal IRS status that halts all collection activity. No levies, no garnishments, no seizures. It's available when your income is below your allowable living expenses and you genuinely cannot afford to pay anything toward your tax debt.

CNC status is not a permanent resolution. The IRS reviews hardship cases annually. If your financial situation improves, collection can resume. The debt also continues to accrue interest and some penalties. However, CNC status can be a valuable component of a longer-term strategy — particularly when combined with letting the 10-year Collection Statute Expiration Date (CSED) run out.

**The CSED strategy:** The IRS has 10 years from the date of assessment to collect a tax debt. If you can maintain CNC status (or another non-collecting resolution like an installment agreement) until the statute expires, the remaining balance is extinguished. This isn't a guaranteed outcome — it requires careful management — but it's a legitimate legal strategy that eliminates tax debt without payment.

**How CNC is established:**

- You provide a Collection Information Statement (Form 433-A or 433-F) documenting income, expenses, and assets
- The IRS evaluates whether your income minus IRS allowable expenses leaves any ability to pay
- If nothing is available, CNC status is granted

**State CNC equivalents:** Maryland and Virginia have their own hardship or deferral programs for taxpayers who cannot pay. We address state and federal situations simultaneously.`,
    faqs: [
      {
        q: "How long does CNC status last?",
        a: "It's reviewed annually. If your income increases significantly, the IRS may resume collection. If your situation remains the same or worsens, CNC status is maintained.",
      },
      {
        q: "Does interest keep accruing during CNC?",
        a: "Yes. Interest and some penalties continue to accrue. CNC status stops enforced collection but doesn't freeze the balance. This is factored into the overall strategy.",
      },
      {
        q: "Can I get CNC status if I own a home?",
        a: "Possibly. The IRS considers equity in assets but looks at the full financial picture. Home ownership doesn't automatically disqualify you.",
      },
      {
        q: "What's the difference between CNC and an installment agreement?",
        a: "An installment agreement requires monthly payments. CNC requires no payments at all, but is only available when you truly can't afford any payment. Both halt collection.",
      },
    ],
  },
  {
    slug: "tax-lien-release",
    shortTitle: "Tax Lien Release",
    title: "IRS Tax Lien Release & Withdrawal — Maryland, DC & Virginia",
    tagline: "Get a federal or state tax lien released, withdrawn, or subordinated",
    description:
      "A federal tax lien attaches to everything you own and can block a home sale, refinance, or business loan. We work to get liens released, withdrawn, or subordinated so you can move forward.",
    body: `A Notice of Federal Tax Lien is the IRS's legal claim against your property when you have unpaid tax debt. It's different from a levy — a lien doesn't take property, it secures the government's interest in it. But a filed lien is public record, appears on title searches, and can stop a home sale or refinance in its tracks.

**Lien vs. levy:** A lien is a claim; a levy is a seizure. The IRS typically files a lien before it levies, as a way of securing its position. Resolving the underlying debt is usually what gets a lien released — but there are faster paths in specific situations.

**Ways a lien can be resolved:**

- **Release** — happens automatically once the tax debt is paid in full, or can be requested once a bond or other security is posted
- **Withdrawal** — removes the public notice of the lien entirely, as if it was never filed; available in specific circumstances, including under Fresh Start Program criteria if you're in a Direct Debit Installment Agreement
- **Subordination** — allows another creditor (like a mortgage lender) to move ahead of the IRS's claim, which can make refinancing possible even with the lien still in place
- **Discharge** — removes the lien from a specific piece of property so it can be sold, while the lien remains attached to your other assets

**Why timing matters:** If you're trying to sell or refinance property, the type of relief you need — release, subordination, or discharge — depends on your specific transaction and timeline. We identify the right mechanism early so it doesn't derail a closing.

**State tax liens:** Maryland, Virginia, and DC can each file their own tax liens independent of the IRS. A Maryland Comptroller lien, a Virginia Department of Taxation lien, and a DC OTR lien all follow different release procedures. We handle federal and state liens together so nothing gets missed during a transaction.`,
    faqs: [
      {
        q: "Will a tax lien show up on my credit report?",
        a: "Tax liens were removed from the three major credit bureau reports starting in 2018, so they generally no longer appear on standard credit reports. However, the lien is still public record and will show up in title searches, background checks, and some lender due-diligence processes.",
      },
      {
        q: "Can I sell my house if there's a lien on it?",
        a: "Often yes, through a discharge that removes the lien from that specific property, typically paid out of sale proceeds at closing. We coordinate this with your title company and closing timeline.",
      },
      {
        q: "How is a lien withdrawal different from a release?",
        a: "A release ends the lien going forward but the fact that it existed remains part of the public record. A withdrawal removes the public notice as though it was never filed — a meaningfully stronger outcome, but only available in specific situations.",
      },
      {
        q: "I need to refinance but have a federal tax lien. What are my options?",
        a: "Subordination is usually the tool here — it lets your mortgage lender move ahead of the IRS's claim without removing the lien entirely. Lenders are familiar with this process; we handle the IRS side.",
      },
    ],
  },
  {
    slug: "innocent-spouse-relief",
    shortTitle: "Innocent Spouse Relief",
    title: "Innocent Spouse Relief — Maryland, DC & Virginia",
    tagline: "You shouldn't owe for a tax debt your spouse or ex-spouse created",
    description:
      "When you file a joint return, you're generally on the hook for the whole balance — even if your spouse or ex-spouse is the one who underreported income or claimed improper deductions. Innocent spouse relief can remove that liability.",
    body: `Married couples who file jointly are jointly and severally liable for the resulting tax debt — meaning the IRS can pursue either spouse for the full amount, regardless of who earned the income or made the error. That can mean an enormous, unfair liability for a spouse who had no idea what was happening on the return, or who has since divorced or separated.

**Three types of relief:**

**Innocent Spouse Relief** applies when your spouse (or ex-spouse) understated tax owed due to erroneous items — unreported income or improperly claimed deductions/credits — and you didn't know and had no reason to know about the understatement when you signed the return.

**Separation of Liability Relief** divides the understated tax between you and your spouse or ex-spouse based on what's actually attributable to each of you. This is available if you're divorced, legally separated, widowed, or have lived apart for the 12 months before filing the request.

**Equitable Relief** may apply when you don't qualify for the other two types but it would be unfair to hold you liable — for example, if your spouse paid the tax that was reported as due but didn't actually pay it, or in certain hardship situations.

**How to request relief:** You file Form 8857, Request for Innocent Spouse Relief, along with a detailed explanation of your situation. The IRS is required to notify your current or former spouse and give them a chance to participate in the process, which is often the part people find most stressful about filing.

**Timing:** For innocent spouse and separation of liability relief, you generally need to request within two years of the IRS's first collection action against you. Equitable relief has different timing rules. Filing early protects your options.

**State returns:** Maryland, Virginia, and DC each have their own joint-liability rules for state income tax. Innocent spouse relief on your federal return doesn't automatically extend to state liability — we address both together.`,
    faqs: [
      {
        q: "My ex-spouse hid income from me and I signed a joint return. Am I stuck with the debt?",
        a: "Not necessarily. If you didn't know and had no reason to know about the unreported income, you may qualify for innocent spouse relief on the resulting tax debt.",
      },
      {
        q: "Will my ex-spouse find out I filed for innocent spouse relief?",
        a: "Yes. The IRS is required to notify the other spouse or ex-spouse and give them an opportunity to respond. We prepare you for this and manage communication with the IRS throughout.",
      },
      {
        q: "We're still married. Can I still request innocent spouse relief?",
        a: "Yes, innocent spouse relief doesn't require divorce or separation. Separation of liability relief does have those requirements, but innocent spouse relief and equitable relief do not.",
      },
      {
        q: "How long does the IRS take to decide?",
        a: "It varies significantly based on complexity and current IRS processing times, but these requests often take six months or more. We keep the request moving and respond promptly to any IRS follow-up requests.",
      },
    ],
  },
  {
    slug: "trust-fund-recovery-penalty",
    shortTitle: "Trust Fund Recovery Penalty",
    title: "Trust Fund Recovery Penalty Defense — MD, DC & VA",
    tagline: "Don't let the IRS make you personally liable for your business's payroll tax debt",
    description:
      "The Trust Fund Recovery Penalty lets the IRS collect unpaid payroll taxes directly from individuals it determines were 'responsible' for paying them — personally, regardless of business structure. We challenge incorrect assessments and negotiate resolutions.",
    body: `When a business withholds payroll taxes from employee wages but doesn't remit them to the IRS, the government treats that money as though it were held in trust for the employees — hence "trust fund" taxes. The Trust Fund Recovery Penalty (TFRP) allows the IRS to assess the unpaid trust fund portion directly against individuals personally, separate from any action against the business itself.

**This is what makes TFRP so serious:** Corporate and LLC liability protections don't apply. The penalty follows the responsible individual even if the business closes, files bankruptcy, or the corporate entity has no assets left. It's calculated as 100% of the unpaid trust fund taxes (the employee withholding portion), not the employer's matching share.

**Who counts as a "responsible person"?** The IRS looks at authority and duty, not job title. Someone can be assessed if they had the authority to decide which creditors got paid and either knew payroll taxes weren't being paid or recklessly disregarded a known risk that they weren't. This can include:
- Officers and directors
- Anyone with check-signing authority or control over payroll
- Majority shareholders involved in financial decisions
- In some cases, bookkeepers or controllers with significant financial authority

**The IRS investigation process:** Revenue Officers conduct interviews (Form 4180) with anyone who might be a responsible person, then issue a proposed assessment. You have the right to appeal a proposed TFRP assessment before it becomes final — this is often the best opportunity to challenge an incorrect responsible-person determination.

**Defending against TFRP:**

- Challenging the responsible-person determination itself — many assessments are made against people who didn't actually have the authority the IRS assumes
- Appealing within the administrative process before assessment becomes final
- Negotiating an installment agreement or Offer in Compromise on the assessed penalty once it's final
- In limited cases, challenging in court after paying a divisible portion of the assessment

**Multiple responsible persons:** The IRS can assess TFRP against more than one person for the same unpaid taxes, though it can only collect the total amount once. If you're one of several people the IRS is investigating, how the case is handled affects your individual exposure.`,
    faqs: [
      {
        q: "My business closed. Can the IRS still come after me personally?",
        a: "Yes. Business closure limits IRS collection against the business, but the Trust Fund Recovery Penalty follows responsible individuals personally, regardless of whether the business still exists.",
      },
      {
        q: "I'm just a bookkeeper — can I really be held responsible?",
        a: "Job title alone doesn't determine responsibility. What matters is whether you had authority over financial decisions and knowledge of the unpaid taxes. We evaluate this carefully, since many bookkeepers are incorrectly assessed.",
      },
      {
        q: "The IRS wants to interview me about payroll taxes. Should I go alone?",
        a: "No. The Form 4180 interview is how the IRS builds its responsible-person case. What you say in that interview shapes the assessment. We prepare you or attend on your behalf.",
      },
      {
        q: "Can TFRP be settled through an Offer in Compromise?",
        a: "Yes, once the penalty is assessed, it can potentially be resolved through an OIC or installment agreement like other tax debt, based on your individual financial situation.",
      },
    ],
  },
  {
    slug: "irs-fresh-start-program",
    shortTitle: "IRS Fresh Start Program",
    title: "IRS Fresh Start Program — Maryland, DC & Virginia",
    tagline: "The umbrella of IRS initiatives that make resolving tax debt more accessible",
    description:
      "The IRS Fresh Start initiative expanded eligibility for Offers in Compromise, streamlined installment agreements, and lien relief. We help Maryland, DC, and Virginia taxpayers use it correctly — and cut through the marketing noise around it.",
    body: `"IRS Fresh Start Program" is one of the most searched tax relief terms — and one of the most misunderstood. It isn't a single program you apply for. It's an umbrella term for a set of IRS policy changes, first introduced in 2011 and expanded since, that made several existing resolution options more accessible. Late-night ads often talk about it as though it's a special one-time deal; in reality, it's the current, ongoing framework the IRS uses for several standard programs.

**What Fresh Start actually changed:**

**Expanded Offer in Compromise eligibility.** The formula the IRS uses to calculate your Reasonable Collection Potential — the basis for your settlement amount — was adjusted to look at a shorter period of future income for lump-sum and short-term offers, and revised how home equity and other assets are counted.

**Streamlined Installment Agreements.** Fresh Start raised the balance threshold for a streamlined agreement (no full financial disclosure required) up to $50,000, and extended the maximum repayment term. This lets many more taxpayers set up a payment plan without submitting a full Collection Information Statement.

**Lien withdrawal criteria.** Fresh Start made it easier to get a Notice of Federal Tax Lien withdrawn after the debt is paid, and created a path to request withdrawal after entering a Direct Debit Installment Agreement, under specific conditions — even before the balance is fully paid.

**Why this matters for how we approach your case:** Because Fresh Start isn't a separate application, "qualifying for Fresh Start" really means qualifying for one or more of the underlying programs — OIC, streamlined installment agreements, or lien withdrawal — under their current, expanded criteria. We evaluate your situation against all of them together rather than treating Fresh Start as a single yes/no determination.

**Maryland, DC, and Virginia:** State tax authorities each have their own versions of expanded relief programs, separate from the federal Fresh Start framework. We evaluate federal and state options side by side so you get the full picture, not just the IRS piece.`,
    faqs: [
      {
        q: "Is the IRS Fresh Start Program a real thing, or is it a scam?",
        a: "It's real, but it's not a single program you sign up for — it's the current framework behind several standard IRS resolution options (OIC, streamlined installment agreements, lien withdrawal). Be skeptical of ads that describe it as a special limited-time deal; the underlying rules have been in place and updated periodically since 2011.",
      },
      {
        q: "Do I need to specifically apply for Fresh Start?",
        a: "No. You apply for the underlying resolution — an Offer in Compromise, an installment agreement, or a lien withdrawal request — and Fresh Start's expanded eligibility criteria apply automatically if you qualify.",
      },
      {
        q: "Does Fresh Start reduce the amount of tax I owe?",
        a: "Not by itself. It expands who qualifies for programs like OIC, which can reduce your total balance, but the reduction comes from the underlying program's evaluation of your finances — not from Fresh Start directly.",
      },
      {
        q: "How do I know which Fresh Start option applies to my situation?",
        a: "It depends on your balance, income, assets, and goals. We assess your full financial picture during a free consultation and identify which combination of options — OIC, installment agreement, lien relief — fits your case.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
