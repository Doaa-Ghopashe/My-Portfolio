import React, { useContext } from 'react'
import styles from "../componentsstyle/categories.module.css";
import $ from "jquery";
import { ProjectsContext } from './../context/ProjectContext';
export default function Categories() {
  const data = useContext(ProjectsContext);

  const setCategory = (e) => {
    $(`.${styles.category}`).removeClass("active-link");
    e.target.classList.add("active-link");

    $(".cardcol").removeClass("hide")
    if (e.target.textContent === "All") {
      data.map(
        item => !item.removeClass("hide")
      )
    }
    data.map(
      item => !item.category.includes(e.target.innerHTML.toLowerCase()) && $(`.card${item.id}`).addClass("hide")
    )
  }
  return (
    <div className={`${styles.Categories}`}>
      <ul>
        <li className={`active-link ${styles.category} `} onClick={setCategory}>All</li>
        <li className={`${styles.category}`} onClick={setCategory}>Angular</li>
        <li className={`${styles.category}`} onClick={setCategory}>React</li>
        <li className={`${styles.category}`} onClick={setCategory}>JavaScript</li>
        <li className={`${styles.category}`} onClick={setCategory}>PHP</li>
        <li className={`${styles.category}`} onClick={setCategory}>Laravel</li>
        <li className={`${styles.category}`} onClick={setCategory}>Node JS</li>
        <li className={`${styles.category}`} onClick={setCategory}>Figma</li>

        <li className={`${styles.category}`} onClick={setCategory}>WordPress</li>


      </ul>
    </div>
  )
}
