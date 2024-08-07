import { Link } from "react-router-dom";

/* icon import */
import { ArrowUpRight } from "react-bootstrap-icons";

function ProjectDetail({
  period,
  name,
  nameAbbr,
  imageCount,
  descriptions,
  keyword,
  demo,
}) {
  const images = Array.from(
    { length: imageCount },
    (_, index) => `img_${nameAbbr}_${index + 1}.png`
  );

  return (
    <>
      <div className="info">
        <div>
          <h3>{name}</h3>
          {demo && (
            <Link to={demo} target="_blank" className="btn_site">
              <ArrowUpRight className="icon" />
            </Link>
          )}
        </div>
        <ul>
          <li>{period}</li>
          {keyword && (
            <li>
              <ul className="list_wrap">
                {keyword.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>
        <div className="list_wrap">
          {descriptions.map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      </div>
      <ul className="grid">
        {images.map((j) => (
          <li key={j}>
            <img
              src={`https://limyoursun.github.io/sunrtfolio/detail/${j}`}
              alt={`${name} 상세 이미지`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProjectDetail;
