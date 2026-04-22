import type { Slide } from "../types";
import { SectionView } from "./SectionView";

interface Props {
  slide: Slide;
  index: number;
  total: number;
  presenterMode: boolean;
}

export function SlideView({ slide, index, total, presenterMode }: Props) {
  return (
    <article className="slide">
      <header className="slide-header">
        <div className="slide-number">
          Slide {slide.number} · {index + 1} of {total}
        </div>
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle ? <div className="slide-subtitle">{slide.subtitle}</div> : null}
      </header>

      <section className="slide-body">
        <div className="slide-main">
          {slide.content.map((section, i) => (
            <SectionView key={i} section={section} />
          ))}
        </div>

        <aside className="slide-sidebar">
          <div className="sidebar-block">
            <div className="sidebar-label">Objective</div>
            <div className="sidebar-text">{slide.objective}</div>
          </div>

          <div className="sidebar-block">
            <div className="sidebar-label">Visual</div>
            <div className="sidebar-text">{slide.visual}</div>
          </div>

          {presenterMode && (
            <>
              <div className="sidebar-block">
                <div className="sidebar-label">Speaker notes</div>
                <div className="sidebar-text sidebar-text--notes">{slide.speakerNotes}</div>
              </div>

              <div className="sidebar-block">
                <div className="sidebar-label">Ask the client</div>
                <ol className="sidebar-list">
                  {slide.questions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ol>
              </div>

              <div className="sidebar-block">
                <div className="sidebar-label">Capture</div>
                <ul className="sidebar-list">
                  {slide.capture.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {slide.privateNotes && slide.privateNotes.length > 0 ? (
                <div className="sidebar-block sidebar-block--private">
                  <div className="sidebar-label">Private (not on slide)</div>
                  <ul className="sidebar-list">
                    {slide.privateNotes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </>
          )}
        </aside>
      </section>
    </article>
  );
}
