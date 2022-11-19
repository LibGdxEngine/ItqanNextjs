import classes from './logistics-item.module.css';

function LogisticsItem(props) {
  const { icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        {icon}
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
