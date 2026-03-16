import './App.css'

const projects = [
  {
    name: 'Portfolio Site',
    description: 'Modern portfolio with project highlights and contact call-to-action.',
    url: '#'
  },
  {
    name: 'Design System',
    description: 'Reusable component library and responsive UI tokens.',
    url: '#'
  },
  {
    name: 'API Dashboard',
    description: 'Realtime analytics dashboard for engineering teams.',
    url: '#'
  }
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Full Stack Developer</p>
        <h1>Hi, I’m Girish. I build elegant web products.</h1>
        <p className="subtext">
          I ship production-ready apps with clean code, accessible UI, and fast performance.
        </p>
      </header>
      <section id="projects" className="section">
        <div className="section-head">
          <p>Real-world projects I built</p>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <article key={project.name} className="card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.url}>View project →</a>
            </article>
          ))}
        </div>
      </section>
      <footer id="contact" className="footer">
        <p>
          Let’s build your next product. <a href="mailto:pgirisha77@gmail.com">pgirisha77@gmail.com</a>
        </p>
      </footer>
    </div>
  )
}

export default App
