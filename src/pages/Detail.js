import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* component import */
import Loading from "../components/Loading";
import ProjectDetail from "../components/ProjectDetail";

function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  
  const getProjects = async () => {
    const json = await (
      await fetch(
        `https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/main/api/projects.json`
      )
    ).json();
    setProjects(json);
    setLoading(false);
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <>
          {projects
          .filter((selId) =>selId.id == id)
          .map((project) => (
            <ProjectDetail
              id={project.id}
              category={project.category}
              period={project.period}
              name={project.name}
              description={project.description}
              skill={project.skill}
              demo={project.demo}
              image={project.image}
              theme={project.themeColor}
              subTheme={project.SubthemeColor}
              design={project.design}
              publishing={project.publishing}
              icon={project.icon}
            />
          ))}
        </>
      )}
    </>
  );
}
export default Detail;
