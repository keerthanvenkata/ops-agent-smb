import { useCallback, useEffect, useState } from "react";
import logo from "./assets/tinkern-logo.jpg";
import { SLIDES } from "./slides";
import { SlideView } from "./components/SlideView";

const BRAND = {
  name: "TinKern Labs",
  owner: "Keerthan Venkata",
  email: "keerthan@tinkernlabs.com",
  phone: "+91 63091 17006",
  location: "Hyderabad",
};

const DOC = {
  title: "WhatsApp Operations Agent \u2014 Client Meeting Deck",
  prepared_for: "Ashish \u2014 Cleaning Services Business, Hyderabad",
  date: "22 April 2026",
  version: "v1.0",
};

export function App() {
  const [index, setIndex] = useState(0);
  const [presenterMode, setPresenterMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const total = SLIDES.length;
  const slide = SLIDES[index]!;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => Math.max(0, Math.min(total - 1, i + delta)));
    },
    [total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).tagName === "INPUT") return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        setIndex(0);
      } else if (e.key === "End") {
        setIndex(total - 1);
      } else if (e.key.toLowerCase() === "p") {
        setPresenterMode((v) => !v);
      } else if (e.key.toLowerCase() === "s") {
        setSidebarOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, total]);

  return (
    <div className={`deck ${presenterMode ? "deck--presenter" : "deck--public"}`}>
      <nav className={`deck-rail ${sidebarOpen ? "deck-rail--open" : ""}`}>
        <div className="rail-brand">
          <img src={logo} alt="TinKern Labs" className="rail-logo" />
          <div className="rail-brand-text">
            <div className="rail-brand-name">{BRAND.name}</div>
            <div className="rail-brand-owner">{BRAND.owner}</div>
          </div>
        </div>
        <div className="rail-meta">
          <div className="rail-meta-label">Prepared for</div>
          <div className="rail-meta-text">{DOC.prepared_for}</div>
        </div>
        <ol className="rail-list">
          {SLIDES.map((s, i) => (
            <li
              key={s.id}
              className={`rail-item ${i === index ? "rail-item--active" : ""}`}
              onClick={() => setIndex(i)}
            >
              <span className="rail-item-num">{s.number}</span>
              <span className="rail-item-title">{s.title}</span>
            </li>
          ))}
        </ol>
        <div className="rail-footer">
          <div>{BRAND.email}</div>
          <div>{BRAND.phone}</div>
        </div>
      </nav>

      <main className="deck-main">
        <div className="deck-toolbar">
          <button
            className="toolbar-btn"
            onClick={() => setSidebarOpen((v) => !v)}
            title="Toggle slide list (S)"
          >
            {sidebarOpen ? "Hide list" : "Slides"}
          </button>
          <button
            className="toolbar-btn"
            onClick={() => setPresenterMode((v) => !v)}
            title="Toggle presenter notes (P)"
          >
            {presenterMode ? "Presenter: on" : "Presenter: off"}
          </button>
          <div className="toolbar-spacer" />
          <button className="toolbar-btn" onClick={() => go(-1)} disabled={index === 0}>
            &larr; Prev
          </button>
          <span className="toolbar-progress">
            {index + 1} / {total}
          </span>
          <button className="toolbar-btn" onClick={() => go(1)} disabled={index === total - 1}>
            Next &rarr;
          </button>
        </div>

        <SlideView slide={slide} index={index} total={total} presenterMode={presenterMode} />

        <footer className="deck-footer">
          <div>
            {DOC.title} &middot; {DOC.version} &middot; {DOC.date}
          </div>
          <div className="deck-footer-hint">
            &larr; &rarr; or Space to navigate &middot; P presenter notes &middot; S slide list
          </div>
        </footer>
      </main>
    </div>
  );
}
