import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import TradeStats from "@/components/TradeStats";
import WhyUs from "@/components/WhyUs";

export default function Page() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <TradeStats />
      <WhyUs />
      <ContactForm />
    </>
  );
}
