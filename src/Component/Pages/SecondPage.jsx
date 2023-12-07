// SecondPage.jsx

import SecondPageCrosswindCalculator from '../Pages/SecondPageCrosswindCalculator.jsx';
import PropTypes from 'prop-types';

const SecondPage = (props) => {
  return (
    <div className='flex justify-around '>
      <div name="secondpage" className="flex border-2 rounded p-3 bg-gray-100">
        <div>
          {/* Use the spread operator to pass all props to SecondPageCrosswindCalculator */}
          <SecondPageCrosswindCalculator {...props} />
        </div>
      </div>
    </div>
  );
};

SecondPage.propTypes = {
  setAircraftTypeHandler: PropTypes.func,
  initialAircraftType: PropTypes.string,
  setRunwayHeadingHandler: PropTypes.func,
  initialRunwayHeading: PropTypes.number,
  setWindDirectionHandler: PropTypes.func,
  initialWindDirection: PropTypes.number,
  setWindSpeedHandler: PropTypes.func,
  initialWindSpeed: PropTypes.number,
  setMagneticVarHandler: PropTypes.func,
  initialMagneticVar: PropTypes.number,
  setEastOrWestVarHandler: PropTypes.func,
  initialEastOrWestVar: PropTypes.number,
  // ... other prop types
};

export default SecondPage;
