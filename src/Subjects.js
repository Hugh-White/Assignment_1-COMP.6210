import Data from './Data.json';

const subjects = Data.map(
    (Data) =>
    {
        return(
            <div key={Data.item} className='mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.8)'}} >
                <div className="d-flex flex-column align-items-center">
                <h1>{Data.item}</h1>
                <p><img src={Data.image} alt={Data.item} className="rounded shadow" style={{"maxWidth" : "350px", "height" : "auto" }}></img></p>
                <h2>Oject Class: {Data.objectClass}</h2>
                <p><h3>Special Containment Procedures: </h3><font size="4">{Data.countainment}</font></p>
                <p><h3>Description: </h3><font size="4">{Data.description}</font></p>
                </div>

            </div>
        );
    }
);

function Subjects()
{
    return (
      

        <div>
        
        {subjects}

        </div>

    );
}

export default Subjects;