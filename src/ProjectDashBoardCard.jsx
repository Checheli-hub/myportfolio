import React from "react";

function ProjectDashBoardCard({
  title,
  tags,
  image,
  description,
  link,
  action,
}) {
  return (
    <article className="h-100">
      <div
        className="h-100 d-flex flex-column justify-content-between"
        style={{
          border: "2px solid rgba(34,197,94,0.15)",
          backgroundColor: "#0d1b2a",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div className="mb-4">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "0 auto",
              borderRadius: "20px",
            }}
          >
            <img
              src={image}
              alt={`${title} project preview`}
              style={{
                width: "100%",
                marginBottom: "15px",
                padding: "20px",
                borderRadius: "12px",
              }}
              loading="lazy"
            />
          </div>
          <div
            style={{
              padding: "15px",
            }}
          >
            <h3 className="text-white text-start fs-2 fw-bold mb-4">{title}</h3>
            <p
              className="mb-4 text-start px-0"
              style={{
                lineHeight: "1.9",
                maxWidth: "400px",
                fontSize: "1.2rem",
                color: "#9CA3AF",
                fontWeight: "normal",
              }}
            >
              {description}
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-4">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                margin: "15px 20px",
              }}
            >
              {tags &&
                tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "#00ff88",
                      color: "#0d1b2a",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      display: "inline-block",
                    }}
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div
          className="text-start"
          style={{
            margin: "20px 10px",
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-view-prototype"
            aria-label={`${action === "demo" ? "View live demo of " : "View source code for "} ${title}`}
          >
            {action === "demo" ? "View Demo" : "View Code"}
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectDashBoardCard;
