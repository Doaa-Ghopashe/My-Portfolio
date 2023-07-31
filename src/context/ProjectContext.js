
import { useState, createContext, useEffect } from 'react';

export const ProjectsContext = createContext();
export const ProfileContext = createContext();
export default function ProjectProvider(props) {
    const [projectdata,setProjectData] = useState([]);
    useEffect(()=>{
      fetch("https://64c2ef36eb7fd5d6ebd070e0.mockapi.io/Portfolio/Projects")
      .then((response)=> response.json())
      .then((result)=>setProjectData(result));
    },[])

  return (
    <ProjectsContext.Provider value={projectdata}>
      {props.children}
    </ProjectsContext.Provider>
  )
}
/* */
export function ProfileProvider(props) {
  const [mydata , setMyData] = useState([]);
  useEffect(()=>{
    fetch("https://64c2ef36eb7fd5d6ebd070e0.mockapi.io/Portfolio/Porfolio")
    .then((response)=> response.json())
    .then((result)=>setMyData(result[0]));
  },[])

return (
  <ProfileContext.Provider value={mydata}>
    {props.children}
  </ProfileContext.Provider>
)
}

