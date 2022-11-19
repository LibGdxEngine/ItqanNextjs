import classes from './course-content.module.css';

function CourseContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default CourseContent;
