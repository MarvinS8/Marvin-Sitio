import Nav from '@/components/nav'
import Hero from '@/components/sections/hero'
import PlazaSolaz from '@/components/sections/plaza-solaz'
import SmartFit from '@/components/sections/smartfit'
import QAModule from '@/components/sections/qa-module'
import Enterprise from '@/components/sections/enterprise'
import Backend from '@/components/sections/backend'
import Security from '@/components/sections/security'
import Timeline from '@/components/sections/timeline'
import TechStack from '@/components/sections/tech-stack'
import Philosophy from '@/components/sections/philosophy'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PlazaSolaz />
        <SmartFit />
        <QAModule />
        <Enterprise />
        <Backend />
        <Security />
        <Timeline />
        <TechStack />
        <Philosophy />
      </main>
      <Footer />
    </>
  )
}
