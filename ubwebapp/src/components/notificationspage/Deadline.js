import React from 'react';
import "./notifications-page.css";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Deadlinepage(){

    return(
        <div>
     <div className="deadline-header">
        <header><h1>Deadline</h1></header>
      </div>

      <script>
        document.write(Date());
</script>
        <Link to="notifications"><button className="backhome">
        <FontAwesomeIcon icon = 'arrow-left' size = "4x"/>
    </button></Link>

    <div className="homework">   
          <h1 >Empty</h1>                  
        </div>
     
    </div>
    );
}

export default Deadlinepage;