import { ArrowDown, ArrowUpRight, Mail, Moon, Sun } from 'lucide-react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function GithubMark({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.2.8-.6v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.4-5.6-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16.9 4.7 18 5 18 5c.6 1.5.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.9 5.4-5.6 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinMark({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.4 7.4H1.7V22h3.7V7.4ZM3.6 2A2.2 2.2 0 1 0 3.6 6.4 2.2 2.2 0 0 0 3.6 2ZM22.3 13.6c0-4.4-2.3-6.5-5.4-6.5a4.7 4.7 0 0 0-4.2 2.3v-2h-3.6V22h3.7v-7.2c0-1.9.4-3.8 2.8-3.8 2.3 0 2.4 2.2 2.4 3.9V22h3.7l.6-8.4Z" />
    </svg>
  );
}

const projects = [
  {
    name: 'ASK DATABASE',
    description: 'Context retrieval, SQL generation and validation for local databases.',
    details: 'Schema, query and correction memory give each request useful context before SQL is returned.',
    stack: 'Fastify, TypeScript, PostgreSQL, React',
    href: 'https://github.com/milekv/ask-database',
    image: '/images/ask-database.png',
    imageAlt: 'ASK DATABASE showing a Polish question and the SQL generated from it',
    imageClass: 'project-media--ask',
  },
  {
    name: 'SQL Atlas',
    description: 'Local SQL analysis, PostgreSQL EXPLAIN plans and deterministic optimization rules.',
    details: 'Queries stay in the browser. The toolkit finds anti-patterns, proposes indexes and explains execution plans.',
    stack: 'TypeScript, React, PostgreSQL',
    href: 'https://github.com/milekv/sql-atlas',
    image: '/images/sql-atlas.png',
    imageAlt: 'SQL Atlas showing deterministic PostgreSQL index suggestions',
    imageClass: 'project-media--atlas',
  },
  {
    name: 'VisualDB Studio',
    description: 'Visual schema design, relationship editing, PostgreSQL generation and schema checks.',
    details: 'The canvas turns tables and relations into executable SQL, with validation before export.',
    stack: 'React, TypeScript, PostgreSQL',
    href: 'https://github.com/milekv/visualdb-studio',
    image: '/images/visualdb-studio.png',
    imageAlt: 'VisualDB Studio canvas with five related PostgreSQL tables',
    imageClass: 'project-media--visualdb',
  },
];

const sqlSnippet = `SAVEPOINT BEFORE_TRANSFER;

IF p_from_account_id < p_to_account_id THEN
  SELECT BALANCE INTO v_from_balance
    FROM ACCOUNT
   WHERE ACCOUNT_ID = p_from_account_id
     AND STATUS = 'AKTYWNY'
     FOR UPDATE;

  SELECT BALANCE INTO v_to_balance
    FROM ACCOUNT
   WHERE ACCOUNT_ID = p_to_account_id
     AND STATUS = 'AKTYWNY'
     FOR UPDATE;
END IF;

IF v_from_balance < p_amount THEN
  RAISE_APPLICATION_ERROR(
    -20001,
    'Brak wystarczających środków'
  );
END IF;

UPDATE_BALANCE(p_from_account_id, -p_amount);
UPDATE_BALANCE(p_to_account_id, p_amount);
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK TO BEFORE_TRANSFER;
    RAISE;
END MAKE_TRANSFER;`;

function Portfolio() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to the top">Miłosz Kordziński</a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="header-github" href="https://github.com/milekv" target="_blank" rel="noreferrer">
            <GithubMark /><span>GitHub</span><ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">I build data products, backend systems and developer tools.</h1>
            <p>TypeScript, React, Node.js, PostgreSQL and Oracle. Recent work includes local SQL analysis, visual schema design and context-aware database querying.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View selected work<ArrowDown size={17} /></a>
              <a className="button button-secondary" href="https://github.com/milekv" target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-media" aria-label="Screens from selected projects">
            <figure className="hero-shot hero-shot-atlas"><img src="/images/sql-atlas.png" alt="SQL Atlas index advisor" /></figure>
            <figure className="hero-shot hero-shot-ask"><img src="/images/ask-database.png" alt="ASK DATABASE query result" /></figure>
            <figure className="hero-shot hero-shot-visualdb"><img src="/images/visualdb-studio.png" alt="VisualDB Studio schema canvas" /></figure>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
            <p>Tools and systems that are ready to inspect in detail.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-row ${index % 2 === 1 ? 'project-row--reverse' : ''}`} key={project.name}>
                <a className={`project-media ${project.imageClass}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </a>
                <div className="project-copy">
                  <p className="project-index">0{index + 1}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-details">{project.details}</p>
                  <p className="project-stack">{project.stack}</p>
                  <a className="text-link" href={project.href} target="_blank" rel="noreferrer">Source on GitHub<ArrowUpRight size={17} /></a>
                </div>
              </article>
            ))}
            <article className="project-row project-row--reverse">
              <div className="code-frame" aria-label="OraBank PL/SQL transfer procedure excerpt">
                <div className="code-frame-header"><span>orabank_account_pkg.sql</span><span>PL/SQL</span></div>
                <pre><code>{sqlSnippet}</code></pre>
              </div>
              <div className="project-copy">
                <p className="project-index">04</p>
                <h3>OraBank</h3>
                <p className="project-description">Oracle schema, PL/SQL transaction handling, auditing, scheduling and recovery runbooks.</p>
                <p className="project-details">The transfer package uses deterministic row locks, savepoints and paired transaction records without hiding commits from callers.</p>
                <p className="project-stack">Oracle Database, SQL, PL/SQL</p>
                <a className="text-link" href="https://github.com/milekv/oracle-bank-system" target="_blank" rel="noreferrer">Source on GitHub<ArrowUpRight size={17} /></a>
              </div>
            </article>
          </div>
        </section>

        <section className="capabilities" id="about" aria-labelledby="about-title">
          <div className="capability-heading">
            <h2>What I work with</h2>
            <p>A small set of tools I use across application and data work.</p>
          </div>
          <dl className="capability-list">
            <div><dt>Application</dt><dd>TypeScript, React, Node.js, Fastify</dd></div>
            <div><dt>Data</dt><dd>PostgreSQL, Oracle, Supabase</dd></div>
            <div><dt>Delivery</dt><dd>GitHub Actions, Docker, Vercel</dd></div>
          </dl>
        </section>

        <section className="closing-section">
          <div className="about-copy">
            <h2 id="about-title">About</h2>
            <p>I work across application code and data systems. I care about making technical tools understandable, testable and straightforward to run.</p>
            <p>I am also building RehabOS, a larger system for physiotherapy practices. It is still in development, so I am not presenting it as a finished public product yet.</p>
          </div>
          <div className="contact-links" id="contact">
            <h2>Get in touch</h2>
            <a href="mailto:miloszk.kontakt@gmail.com"><Mail size={19} /><span>Email</span><ArrowUpRight size={18} /></a>
            <a href="https://github.com/milekv" target="_blank" rel="noreferrer"><GithubMark size={19} /><span>GitHub</span><ArrowUpRight size={18} /></a>
            <a href="https://www.linkedin.com/in/miłosz-kordziński-a85947254" target="_blank" rel="noreferrer"><LinkedinMark size={19} /><span>LinkedIn</span><ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>
      <footer><span>Miłosz Kordziński</span><span>Wrocław, Poland</span></footer>
    </div>
  );
}

function App() {
  return <ThemeProvider><Portfolio /></ThemeProvider>;
}

export default App;
