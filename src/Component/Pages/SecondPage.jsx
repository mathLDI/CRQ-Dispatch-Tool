// SecondPage.jsx
import SecondPageCrosswindCalculator from '../Pages/SecondPageCrosswindCalculator.jsx'
import PropTypes from 'prop-types'; 


const SecondPage = ({
  setAircraftTypeHandler,
  initialAircraftType,
  initialRunwayHeading,
  setRunwayHeadingHandler,
  initialWindDirection,
  setWindDirectionHandler,
  initialWindSpeed,
  setWindSpeedHandler

}) => {
  console.log("setAircraftTypeHandler typeoff:", typeof (setAircraftTypeHandler));
  console.log("initialAircraftType typeoff:", typeof (initialAircraftType));

  console.log("initialRunwayHeading typeoff:", typeof (initialRunwayHeading));

  console.log("setRunwayHeadingHandler typeoff:", typeof (setRunwayHeadingHandler));

  console.log("initialWindDirection typeoff:", typeof (initialWindDirection));

  console.log("setWindDirectionHandler typeoff:", typeof (setWindDirectionHandler));

  console.log("initialWindSpeed typeoff:", typeof (initialWindSpeed));

  console.log("setWindSpeedHandler typeoff:", typeof (setWindSpeedHandler));



  return (

    <div className='flex justify-around '>

      <div name="secondpage" className="flex border-2 rounded p-3    bg-gray-100">
        <div>


          {<SecondPageCrosswindCalculator
            initialAircraftType={initialAircraftType} setAircraftTypeHandler={setAircraftTypeHandler}
            initialRunwayHeading={initialRunwayHeading} setRunwayHeadingHandler={setRunwayHeadingHandler}
            initialWindDirection={initialWindDirection} setWindDirectionHandler={setWindDirectionHandler}
            initialWindSpeed={initialWindSpeed} setWindSpeedHandler={setWindSpeedHandler}
          />}

        </div>
      </div>

    </div>


  );
}

export default SecondPage;


SecondPage.propTypes = {
  initialAircraftType: PropTypes.string,
  setAircraftTypeHandler: PropTypes.func,
  initialRunwayHeading: PropTypes.string,
  setRunwayHeadingHandler: PropTypes.number,
  initialWindDirection: PropTypes.string,
  setWindDirectionHandler: PropTypes.number,
  initialWindSpeed: PropTypes.number,
  setWindSpeedHandler: PropTypes.number,


};