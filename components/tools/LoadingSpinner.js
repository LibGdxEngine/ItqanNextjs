import classes from './LoadingSpinner.module.css';

const LoadingSpinner = (props) => {
    return <div className={classes.spinnerBox}>
        <div className={classes.circleBorder}>
            <div className={classes.circleCore}></div>
        </div>
    </div>
};

export default LoadingSpinner;