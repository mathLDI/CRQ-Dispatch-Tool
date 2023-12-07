import { useState } from "react";
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import { CustomButton } from "../Button.jsx";
import PropTypes from "prop-types";
import { contaminent } from "../functions/runwayType.js";

const FirstPageRccProvided = (props) => {


    const {
        initialAircraftType, setAircraftTypeHandler,
        initialRwycc1, setRwycc1Handler, initialRwycc2, setRwycc2Handler, initialRwycc3, setRwycc3Handler,
        initialCorrectedLandingDistance, setCorrectedLandingDistanceHandler, initialRunwayLength, setRunwayLengthHandler,
      } = props;


    const rwyccChoices = [6, 5, 4, 3, 2, 1, 0];
    const buttonAircraftType = ["DHC-8", "HS-748"];
    const [callDxp] = useState(null);
    const [resetListBox, setResetListBox] = useState(false);
    const integerRunwayLength = parseInt(initialRunwayLength, 10);
    const integerCorrectedLandingDistance = parseInt(initialCorrectedLandingDistance, 10);

    const resetButtonHandler = () => {
        setResetListBox(true);
        setRwycc1Handler(6);
        setRwycc2Handler(6);
        setRwycc3Handler(6);
        setRunwayLengthHandler(0);
        setCorrectedLandingDistanceHandler(0)
        setAircraftTypeHandler("DHC-8");
    };

    const resetListbox1Handler = () => {
        setResetListBox(false);
    };

    const ldgDistLongerRwyLgth = integerCorrectedLandingDistance > integerRunwayLength ? true : false;

    const enterDistances =
        integerCorrectedLandingDistance === 0 ||
            integerRunwayLength === 0 ||
            isNaN(integerCorrectedLandingDistance) ||
            isNaN(integerRunwayLength)
            ? true
            : false;

    const CorrectedLandingRwyccToUse =
        integerCorrectedLandingDistance === 0 || integerRunwayLength === 0 ||
            isNaN(integerCorrectedLandingDistance) || isNaN(integerRunwayLength)
            ? undefined
            : integerCorrectedLandingDistance <= integerRunwayLength * 0.3333
                ? initialRwycc1
                : integerCorrectedLandingDistance > integerRunwayLength * 0.3333 && integerCorrectedLandingDistance < integerRunwayLength * 0.6666
                    ? Math.min(initialRwycc1, initialRwycc2)
                    : integerCorrectedLandingDistance >= integerRunwayLength * 0.6666
                        ? Math.min(initialRwycc1, initialRwycc2, initialRwycc3)
                        : undefined;

    const lowestRcc = Math.min(initialRwycc1, initialRwycc2, initialRwycc3);

    const contam = contaminent;

    const selectedRccToMaxXwindLandingTakeoff = initialAircraftType === "HS-748" && lowestRcc === 6 ? 30 : contam.find(item => item.code === lowestRcc)?.maxCrosswind;

    const selectedRccToMaxXwindLanding = initialAircraftType === "HS-748" && CorrectedLandingRwyccToUse === 6 ? 30 : contam.find(item => item.code === CorrectedLandingRwyccToUse)?.maxCrosswind;

    return (

        <div>


            <Card cardTitle={"RWYCC Provided"} status={null}>
                <div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Aircraft type:</div>
                        <ChoiceListbox
                            value={initialAircraftType}
                            choices={buttonAircraftType}
                            callback={setAircraftTypeHandler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>RWYCC: </div>
                        <ChoiceListbox
                            value={initialRwycc1}
                            choices={rwyccChoices}
                            callback={setRwycc1Handler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                        <ChoiceListbox
                            value={initialRwycc2}
                            choices={rwyccChoices}
                            callback={setRwycc2Handler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                        <ChoiceListbox
                            value={initialRwycc3}
                            choices={rwyccChoices}
                            callback={setRwycc3Handler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Corrected TLR Landing Distance:</div>
                        <input
                            type="number"
                            max={99999}
                            min={1000}
                            value={integerCorrectedLandingDistance} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // You can add validation here to ensure the number is not longer than 5 digits
                                if (!isNaN(v) && v >= 0) {
                                    setCorrectedLandingDistanceHandler(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Landing Runway Length:</div>
                        <input
                            type="number"
                            max={99999}
                            min={1000}
                            value={integerRunwayLength} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // Ensure the input value is a non-negative number
                                if (!isNaN(v) && v >= 0) {
                                    setRunwayLengthHandler(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>

                    <div className="p-2">
                        <CustomButton
                            title={"Reset RCC and Distances"} onClickCallback={resetButtonHandler} />
                    </div>
                </div>

            </Card>

            <div >
                <div >
                    <Card cardTitle={"Results Takeoff"} status={callDxp}>
                        <div>
                            <div className="flex flex-row justify-between p-2">
                                <div>RCC code:</div>
                                {CorrectedLandingRwyccToUse === "Corrected distance is longer than runway length!" || CorrectedLandingRwyccToUse === "Enter Distances" ? "" :

                                    <div className={`flex ${lowestRcc === 0 ? 'text-red-500' : ''}`}>
                                        {lowestRcc}
                                    </div>
                                }

                            </div>

                            <div className="flex flex-row justify-between p-2">
                                <div>Max crosswind:</div>
                                <div className={`flex ${lowestRcc === 0 ? 'text-red-500' : ''}`}>
                                    {selectedRccToMaxXwindLandingTakeoff }
                                </div>
                            </div>

                        </div>

                    </Card>

                </div>

                <div>
                    <Card cardTitle={"Results Landing"} status={callDxp}>
                        <div>
                            <div className="flex flex-row justify-between p-2">
                                <div>RCC code:</div>
                                <div className={`flex ${CorrectedLandingRwyccToUse === 0 ? 'text-red-500' : ''}`}>
                                    {CorrectedLandingRwyccToUse}
                                </div>
                            </div>

                            <div className="flex flex-row justify-between p-2">
                                <div>Max crosswind:</div>
                                <div className={`flex ${CorrectedLandingRwyccToUse === 0 ? 'text-red-500' : ''}`}>
                                  {selectedRccToMaxXwindLanding}

                                </div>
                            </div>

                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            {ldgDistLongerRwyLgth === true &&
                                (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                    Corrected distance is longer than runway length!
                                </div>)}
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            {enterDistances === true &&
                                (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                    Enter Distances
                                </div>)}
                        </div>

                    </Card>

                </div>
            </div>

            <div className="text-center"> 1/8&quot; / 0.13in / 3mm</div>
            <div className="text-center">COMPACTED SNOW ON A GRAVEL RWY = COMPACTED SNOW/GRAVEL MIX = NOT A CONTAMINANT</div>

        </div>

    );

}

export default FirstPageRccProvided;

FirstPageRccProvided.propTypes = {
    initialAircraftType: PropTypes.string,
    setAircraftTypeHandler: PropTypes.string,
    initialRwycc1: PropTypes.number,
    setRwycc1Handler: PropTypes.number,
    initialRwycc2: PropTypes.number,
    setRwycc2Handler: PropTypes.number,
    initialRwycc3: PropTypes.number,
    setRwycc3Handler: PropTypes.number,
    initialCorrectedLandingDistance: PropTypes.number,
    setCorrectedLandingDistanceHandler: PropTypes.number,
    initialRunwayLength: PropTypes.number,
    setRunwayLengthHandler: PropTypes.number,
};
