import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import Section from "./components/Section";
import Story from "./components/Story";
import Creator from "./components/Creator";
import Climb from "./components/Climb";
import Builder from "./components/Builder";
import Insight from "./components/Insight";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Facts />

        <Section id="story" index="01" label="STORY" title="It started in a lobby">
          <Story />
        </Section>

        <Section id="climb" index="02" label="THE CLIMB" title="Silver 1 to Radiant. Twice.">
          <Climb />
        </Section>

        <Section id="creator" index="03" label="CREATOR" title="172.8K followers, zero ads">
          <Creator />
        </Section>

        <Section id="builder" index="04" label="BUILDER" title="From Excel to a real system">
          <Builder />
        </Section>

        <Section id="insight" index="05" label="PLAYER INSIGHT" title="What I'd bring to the team">
          <Insight />
        </Section>

        <Section id="contact" index="06" label="CONTACT" title="GG. Let's talk.">
          <Contact />
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        Built by Samia Nakhoul · Lima, Peru · Original design, not affiliated with Riot Games
      </footer>
    </>
  );
}
