import { useState, useEffect } from "react";
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import { CustomButton } from "../Button.jsx";
import { CrosswindComponent } from '../functions/crosswindComponent.js';
import { HeadwindTailwindComponent } from '../functions/headwindTailwindComponent.js';
import PropTypes from "prop-types";



const SecondPageCrosswindCalculator = ({ initialAircraftType, setAircraftTypeHandler,
    initialRunwayHeading, setRunwayHeadingHandler, initialWindDirection, setWindDirectionHandler,
    initialWindSpeed, setWindSpeedHandler, initialMagneticVar, setMagneticVarHandler, initialEastOrWestVar, setEastOrWestVarHandler
}) => {

    const buttonAircraftType = ["DHC-8", "HS-748"];
    const buttonEastOrWest = ["West", "East"];
    const [callDxp] = useState(null);
    const integerWindDirection = parseInt(initialWindDirection, 10);
    const integerWindSpeed = parseInt(initialWindSpeed, 10);
    const integerRunwayHeading = parseInt(initialRunwayHeading, 10);
    const integerInitialMagneticVar = parseInt(initialMagneticVar, 10);

    console.log("initialMagneticVar:", typeof (integerInitialMagneticVar))



    const [resetListBox, setResetListBox] = useState(false);

    const CrosswindComp = CrosswindComponent(
        integerWindDirection,
        integerRunwayHeading,
        integerWindSpeed,
        initialEastOrWestVar,
        integerInitialMagneticVar
    )

    const CrosswindComponentNoNegOneDigit = parseFloat(Math.abs(CrosswindComp,
    ).toFixed(1));



    const HeadwindTailwindComp = HeadwindTailwindComponent(
        integerWindDirection,
        integerRunwayHeading,
        integerWindSpeed,
        initialEastOrWestVar,
        integerInitialMagneticVar
    )

    const HeadwindTailwindComponentNoNegOneDigit = parseFloat(Math.abs(HeadwindTailwindComp,).toFixed(1));



    const resetButtonHandler = () => {
        setResetListBox(true);
        setWindDirectionHandler(0);
        setRunwayHeadingHandler(0);
        setWindSpeedHandler(0);
        setAircraftTypeHandler("DHC-8");
        setMagneticVarHandler(0);
    };


    const resetListbox1Handler = () => {
        setResetListBox(false);
    };

    useEffect(() => {
        console.log('SecondPageCrosswindCalculator is re-rendering');
    }, []); // assuming aircraftType is the state you are updating


    console.log("CrosswindComponent:", CrosswindComp)

    return (

        <div>


            <Card cardTitle={"Crosswind Calculator"} status={null}>
                <div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Aircraft type: </div>
                        <ChoiceListbox
                            value={initialAircraftType}
                            choices={buttonAircraftType}
                            callback={setAircraftTypeHandler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler}

                        />
                    </div>



                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Runway Heading:</div>
                        <input
                            className="flex dark:bg-black"
                            type="number"
                            max={360}
                            min={0}
                            value={initialRunwayHeading} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // You can add validation here to ensure the number is not longer than 5 digits
                                if (!isNaN(v) && v >= 0 && v <= 360) {
                                    setRunwayHeadingHandler(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>

                    {/**new section for magnetic variation below */}

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Magnetic Variation:</div>

                        <div className="flex ">



                            <div className="flex justify-end w-20 pr-10  ">

                                <ChoiceListbox
                                    value={initialEastOrWestVar}
                                    choices={buttonEastOrWest}
                                    callback={setEastOrWestVarHandler}
                                    reset={resetListBox}
                                    resetCallback={resetListbox1Handler}

                                />
                            </div>


                            <div className="p-2">
                                <input
                                    className="flex dark:bg-black"
                                    type="number"
                                    max={20}
                                    min={0}
                                    value={integerInitialMagneticVar} // Replace 'yourValueState' with the state you want to manage the input's value
                                    onChange={(e) => {
                                        // Handle input value changes here
                                        const v = e.target.value;
                                        // Ensure the input value is a non-negative number
                                        if (!isNaN(v) && v >= 0 && v <= 20) {
                                            setMagneticVarHandler(v); // Update the state with the new value
                                        }
                                    }}
                                />
                            </div>



                        </div>

                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Wind Direction:</div>
                        <input
                            className="flex dark:bg-black"
                            type="number"
                            max={360}
                            min={0}
                            value={integerWindDirection} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // Ensure the input value is a non-negative number
                                if (!isNaN(v) && v >= 0 && v <= 360) {
                                    setWindDirectionHandler(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Wind Speed:</div>
                        <input
                            className="flex dark:bg-black"
                            type="number"
                            max={200}
                            min={0}
                            value={integerWindSpeed} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // Ensure the input value is a non-negative number
                                if (!isNaN(v) && v >= 0) {
                                    setWindSpeedHandler(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>


                    <div className="p-2">
                        <CustomButton
                            title={"Reset"} onClickCallback={resetButtonHandler} />
                    </div>
                </div>

            </Card>

            <div >

                <div>
                    <Card cardTitle={"Results Crosswind"} status={callDxp}>
                        <div>
                            <div className="flex flex-row justify-between p-2">
                                {HeadwindTailwindComp < 0 && (
                                    <div>Tailwind:</div>
                                )}

                                {HeadwindTailwindComp >= 0 && (
                                    <div>Headwind:</div>
                                )}

                                <div >
                                    {HeadwindTailwindComponentNoNegOneDigit} kts
                                </div>
                            </div>

                            <div className="flex flex-row justify-between p-2">

                                {CrosswindComp == 0 && (
                                    <div>No Crosswind:</div>)}

                                {CrosswindComp < 0 && (
                                    <div>Left Crosswind:</div>)}

                                {CrosswindComp > 0 && (
                                    <div>Right Crosswind:</div>)}

                                <div >
                                    {CrosswindComponentNoNegOneDigit} kts
                                </div>
                            </div>

                        </div>


                    </Card>


                </div>


            </div>

            {/**All alerts below */}


            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "DHC-8" && CrosswindComponentNoNegOneDigit > 36 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Crosswind
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "DHC-8" && HeadwindTailwindComp < -10 && HeadwindTailwindComp > -21 &&
                    (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                        Over Max Tailwind for the DHC-8 106 and DHC-8 300
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "DHC-8" && HeadwindTailwindComp < -20 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Tailwind
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "HS-748" && CrosswindComponentNoNegOneDigit > 30 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Crosswind
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "HS-748" && HeadwindTailwindComp < -10 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Tailwind
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {integerWindSpeed > 50 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Speed on the Ground
                    </div>)}
            </div>


        </div>

    );

}

export default SecondPageCrosswindCalculator;


SecondPageCrosswindCalculator.propTypes = {
    initialAircraftType: PropTypes.string,
    setAircraftTypeHandler: PropTypes.func, // Change to func instead of string
    initialRunwayHeading: PropTypes.string,
    setRunwayHeadingHandler: PropTypes.func, // Change to func
    initialWindDirection: PropTypes.string,
    setWindDirectionHandler: PropTypes.func, // Change to func
    initialWindSpeed: PropTypes.number,
    setWindSpeedHandler: PropTypes.func, // Change to func
    initialEastOrWestVar: PropTypes.string,
    setEastOrWestVarHandler: PropTypes.func,
    initialMagneticVar: PropTypes.number,
    setMagneticVarHandler: PropTypes.func,
};

