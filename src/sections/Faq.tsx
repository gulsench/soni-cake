import Reveal from "../components/Reveal";
import CurvedLoop from "../components/CurvedLoop";
import FAQAccordion, { type FaqItem } from "../vendor/FaqAccordion";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do you make eggless cakes?",
    answer:
      "Yes, most of our cakes can be made eggless on request. Just mention it when you place your order and we'll sort out the details.",
  },
  {
    question: "How far in advance should I order?",
    answer:
      "We recommend at least 3 days' notice. Custom, themed and tiered cakes need a little more lead time, especially on weekends and around festivals.",
  },
  {
    question: "Do you deliver, or is it pickup only?",
    answer:
      "You can collect your cake fresh from our kitchen in Indranagar, Agartala. We can also arrange delivery for an additional charge. Just ask on WhatsApp.",
  },
  {
    question: "Can you recreate a cake I saw online?",
    answer:
      "We love a reference! Photos are used as inspiration, and since every cake is handmade, the final design is our own take, as close to your vision as we can get. The more details you share, the better.",
  },
  {
    question: "What flavours do you offer?",
    answer:
      "Classics like chocolate, vanilla and red velvet, plus our signatures: tres leches, mango, biscoff and baked cheesecakes. Tell us what you're craving and we'll guide you.",
  },
  {
    question: "What sizes are available?",
    answer:
      "Everything from mini bento cakes for two to tall celebration and tiered cakes for big gatherings. Share your guest count and we'll suggest the right size.",
  },
  {
    question: "How do I confirm my order?",
    answer:
      "Message us your details on WhatsApp. Once we confirm the design and final price, a 50% non-refundable deposit secures your date.",
  },
  {
    question: "Do you cater to allergies?",
    answer:
      "Please let us know about any allergies before ordering. Our kitchen handles nuts, dairy, gluten and eggs, so we can't guarantee a fully allergen-free environment, but we'll always do our best to accommodate you.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-cream">
      <div aria-hidden="true" className="overflow-hidden py-2 sm:py-3 max-lg:landscape:py-1">
        <CurvedLoop
          marqueeText="SONI CAKE"
          icon="emoji"
          emoji="🍰"
          repeatGap={0.35}
          speed={1.5}
          curveAmount={48}
          direction="left"
          interactive
          className="soni-cake-curved-text"
        />
      </div>

      <div className="section-pad !pt-0 container-content">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-rose-deep/50" />
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Questions, sweetly answered
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion
              faqItems={FAQ_ITEMS}
              itemGap={14}
              defaultOpenFirst
              questionFont={{
                fontFamily: "Satoshi, system-ui, sans-serif",
                fontSize: 17,
                lineHeight: "1.5em",
              }}
              questionStyle={{ textColor: "#4A3528", weight: 600 }}
              answerFont={{
                fontFamily: "Satoshi, system-ui, sans-serif",
                fontSize: 15,
                lineHeight: "1.65em",
              }}
              answerStyle={{ textColor: "#8A7565", weight: 400 }}
              icon={{ type: "plus", size: 22, color: "#DE7E92", stroke: 2 }}
              container={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "22px",
                boxShadow: "0 12px 40px -12px rgba(74, 53, 40, 0.10)",
                border: { borderWidth: 1, borderStyle: "solid", borderColor: "#F3E9DF" },
              }}
              section={{ backgroundColor: "transparent", borderRadius: "0px", padding: "0px" }}
              transition={{ type: "spring", stiffness: 300, damping: 34, mass: 1 }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
