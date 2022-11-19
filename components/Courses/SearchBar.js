import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  return <div >
      <div className={classes.wrap}>
          <form action="" autoComplete="on">
              <input style={{textAlign:"center"}} className={classes.search} name="search" type="text" placeholder="ما الذي تريد إتقانه؟"/>
              <input className={classes.search_submit} value="Rechercher" type="submit"/>
          </form>
      </div>
  </div>
};

export default SearchBar;