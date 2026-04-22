import type { Section } from "../types";

interface Props {
  section: Section;
}

export function SectionView({ section }: Props) {
  switch (section.kind) {
    case "heading":
      return <h3 className="section-heading">{section.text}</h3>;
    case "paragraph":
      return <p className="section-paragraph">{section.text}</p>;
    case "bullets":
      return (
        <ul className="section-list">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "numbered":
      return (
        <ol className="section-list section-list--numbered">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="section-table-wrap">
          <table className="section-table">
            <thead>
              <tr>
                {section.header.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {section.caption ? <div className="section-table-caption">{section.caption}</div> : null}
        </div>
      );
    case "code":
      return (
        <pre className="section-code">
          <code>{section.text}</code>
        </pre>
      );
    case "callout":
      return (
        <div className={`section-callout section-callout--${section.tone}`}>
          {section.title ? <div className="section-callout-title">{section.title}</div> : null}
          <div className="section-callout-text">{section.text}</div>
        </div>
      );
    case "quote":
      return <blockquote className="section-quote">{section.text}</blockquote>;
    default: {
      const _exhaustive: never = section;
      return _exhaustive;
    }
  }
}
