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
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
