// Importing needed webhooks.
import {useEffect, useState} from 'react';
import { useHref } from 'react-router-dom';


function Subjects()
{
    //Create current state and set or update state variables.
    //Using empty array as we want to display ALL records in database collection.
    //This is automatically stored into this empty array.
    const [state, setState] = useState([]);

    //Function to connect to RestDB database, grab data & update our setState variable.
    function getData()
    {
        //code from restDB to connect to our api
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            //console.log(this.responseText);

            //Save data into a variable
            const subjectData = JSON.parse(this.responseText);

            //Updating our component state, our variable setState
            setState(subjectData);
          }
        });
        
        xhr.open("GET", "https://scpsubjects-23df.restdb.io/rest/scp-subjects");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", "63298edbbf647d0a5c1985a8");
        xhr.setRequestHeader("cache-control", "no-cache");
        
        xhr.send(data);

    }

    //Using the useEffect webhook we can now tell the DOM to display the data
    //First parameter is a function to grab data, second is to update state variable with data.
    useEffect(
                ()=>{
                    getData();
                }, [state]
            );

    return(

            <div>
                {
                    state && state.map(
                        subjects =>
                        <div className="row mb-5" key = "{subjects.SCP_ID}" >
                            <div className="col-6" ></div>
                            
                                <div className="card-body mt-3 p-3 rounded border shadow text-white" style={{backgroundColor: "rgba(0,0,0,0.92)"}}  >

                                <h1 id={subjects.Item}>{subjects.Item}</h1>

                                <p><img src={subjects.Images} alt= {subjects.Item} className="rounded shadow" style={{"maxWidth" : "350px", "maxHeight" : "450px" }}></img></p>
                                <h2>Oject Class: {subjects.Class}</h2>
                                <p><h3>Special Containment Procedures: </h3><font size="4">{subjects.Containment}</font></p>
                                <p><h3>Description: </h3><font size="4">{subjects.Description}</font></p>

                               <a href="#SCP-066">Back To Top</a>
                                

                            </div>

                        </div>
                    )
                }
            </div>

          );
}

export default Subjects;