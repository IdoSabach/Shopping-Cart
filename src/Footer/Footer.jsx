export default function Footer(){
  return(
    <div className="main flex flex-col items-center gap-4">
      <section className="sectionLeft flex gap-6">
        <nav className="flex gap-1 items-center"><img src="/images/c.png" alt="c" className="w-4 h-4"/>2024 IdoSabach</nav>
        <nav>Terms</nav>
        <nav>Privacy</nav>
        <nav>Cookies</nav>
      </section>
      <section className="sectionLeft flex flex-row gap-4">
        <a href="https://www.facebook.com/"><img src="/images/facebook.png" alt="facebook" className="w-10 h-10"/></a>
        <a href="https://www.instagram.com/"><img src="/images/instagram.png" alt="instagram" className="w-10 h-10"/></a>
        <a href="https://twitter.com/"><img src="/images/twitter.png" alt="Twitter" className="w-10 h-10"/></a>
      </section>
    </div>
  )
}