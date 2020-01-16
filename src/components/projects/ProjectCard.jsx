import React from "react";
import styled from "styled-components";

export const ProjectCard = proj => {
  const ProjCardWrapper = styled.div`
    height: 60vh;
    width: 50vw;
    width: 100%;
    margin: 0;
    border-radius: 10px;
    background-color: black;
  `;

  console.log(proj);

  return (
    <ProjCardWrapper>
      <h1>{proj.proj.project_name}</h1>
    </ProjCardWrapper>
  );
};
