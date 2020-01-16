import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getProjects } from "./../../actions/projectActions";
import { ProjectCard } from "./ProjectCard";

const ProjectsComp = ({ project }) => {
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);
  console.log(project.projects);

  const ProjectWrapper = styled.div`
    width: 80%;
    margin: 10vh auto;
    color: #fff;

    h3 {
      font-family: "Raleway", sans-serif;
      font-size: 2em;
      position: relative;
      padding-bottom: 0.3em;
    }
    h3:after {
      position: absolute;
      width: 22vw;
      display: block;
      bottom: 0;
      left: 30vw;
      height: 2px;
      border-bottom: solid 3px #ff03ff;
      content: "";
    }
  `;
  return (
    <ProjectWrapper>
      <h3>Projects</h3>
      <div>
        {project.projects.map(p => (
          <ProjectCard key={p.id} proj={p}></ProjectCard>
        ))}
      </div>
    </ProjectWrapper>
  );
};

const mapStatetoProps = state => ({
  project: state.project
});

export default connect(mapStatetoProps, { getProjects })(ProjectsComp);
