import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Header() {
  return (
    <header className="header">
      <img className="nav-logo" src="src\assets\react-1-logo-png-transparent.png" alt="react-logo"></img>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main className="main-content">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to
          fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer
          if I know React</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer"> "© 2025 Weewoo development. All rights reserved."</footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

root.render(
  <Page />
)
