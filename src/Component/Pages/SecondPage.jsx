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
  setWindSpeedHandler,
  initialMagneticVar,
  setMagneticVarHandler,
  initialEastOrWestVar,
  setEastOrWestVarHandler,

}) => {





  return (

    <div className='flex justify-around '>

      <div name="secondpage" className="flex border-2 rounded p-3    bg-gray-100">
        <div>


          {<SecondPageCrosswindCalculator
            initialAircraftType={initialAircraftType} setAircraftTypeHandler={setAircraftTypeHandler}
            initialRunwayHeading={initialRunwayHeading} setRunwayHeadingHandler={setRunwayHeadingHandler}
            initialWindDirection={initialWindDirection} setWindDirectionHandler={setWindDirectionHandler}
            initialWindSpeed={initialWindSpeed} setWindSpeedHandler={setWindSpeedHandler}
            initialMagneticVar={initialMagneticVar} setMagneticVarHandler={setMagneticVarHandler}
            initialEastOrWestVar={initialEastOrWestVar}
            setEastOrWestVarHandler={setEastOrWestVarHandler}
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
  initialMagneticVar: PropTypes.number,
  setMagneticVarHandler: PropTypes.number,
  initialEastOrWestVar: PropTypes.number,
  setEastOrWestVarHandler: PropTypes.number


};