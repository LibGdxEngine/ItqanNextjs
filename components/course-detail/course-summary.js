import classes from './course-summary.module.css';

function CourseSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default CourseSummary;