
    import FirstPageRccNotProvided from '../Pages/firstPageRccNotProvided.jsx';
    import FirstPageRccProvided from '../Pages/firstPageRccProvided.jsx';
    import { ChoiceListbox } from "../ListBox.jsx";
    import { Card } from "../Card.jsx"
    import PropTypes from "prop-types";



    const FirstPageSelector = (props) => {
        const {
         initialTypeOfReport, setTypeOfReportHandler,
        } = props;

        const buttonTypeOfReportChoices = ["RCC Not Provided", "RCC Provided"];



        return (

    <div className='flex justify-around '>     
        <div name="firstPage" className="flex border-2 dark:border-gray-900 rounded p-3 bg-gray-100 dark:bg-gray-700 ">
                <div >

                    <div className="">

                        <Card cardTitle={"Type of Report"} status={null}>
                            <div className="flex flex-row justify-between items-center p-2">
                                
                                <ChoiceListbox
                                    value={initialTypeOfReport}
                                    choices={buttonTypeOfReportChoices}
                                    callback={setTypeOfReportHandler}
                                />
                            </div>
                        </Card>

                        <div className="mt-4">
                            {initialTypeOfReport === "RCC Not Provided" && <FirstPageRccNotProvided {...props} />}

                            {initialTypeOfReport === "RCC Provided" && <FirstPageRccProvided {...props} />}
                        </div>
                        
                    </div>
                </div>
            </div>

    </div>

        );

    }


    export default FirstPageSelector;


    FirstPageSelector.propTypes = {
        initialRunwayConditionDescriptionPaved2: PropTypes.array,
        initialContaminationCoverage2: PropTypes.number,
        initialRunwayConditionDescriptionGravel3: PropTypes.array,
        initialRunwayConditionDescriptionPaved4: PropTypes.array,
        initialRunwayConditionDescriptionGravel1: PropTypes.array,
        runwayConditionDescriptionGravel1Handler: PropTypes.array,
        setRunwayConditionDescriptionPaved2Handler: PropTypes.array,
        setRunwayConditionDescriptionGravel3Handler: PropTypes.array,
        setRunwayConditionDescriptionPaved4Handler: PropTypes.array,
        initialAircraftType: PropTypes.string,
        setAircraftTypeHandler: PropTypes.string,
        setContaminationCoverage2Handler: PropTypes.number,
        initialContaminationCoverage3: PropTypes.number,
        setContaminationCoverage3Handler: PropTypes.number,
        initialDropDownPavedOrGravel: PropTypes.string,
        setDropDownPavedOrGravelHandler: PropTypes.string,
        initialTypeOfReport: PropTypes.string,
        setTypeOfReportHandler: PropTypes.string,
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
        initialContaminationCoverage1: PropTypes.number,
        setContaminationCoverage1Handler: PropTypes.array,
        initialContaminationCoverage4: PropTypes.number,
        setContaminationCoverage4Handler: PropTypes.array,


    };