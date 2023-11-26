import { useState, useEffect } from "react";
import Navbar from './Component/NavBar.jsx';
import SecondPage from './Component/Pages/SecondPage.jsx';
import FirstPageSelector from './Component/Pages/firstPage.jsx';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the Firebase Auth SDK
import SignIn from './Component/Pages/signIn.jsx';
import { onAuthStateChanged } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyAteWHWFvl2Zog0d0cLMprqwrqyrMxf92s",
  authDomain: "rcc-calculator-official.firebaseapp.com",
  projectId: "rcc-calculator-official",
  storageBucket: "rcc-calculator-official.appspot.com",
  messagingSenderId: "1000710686788",
  appId: "1:1000710686788:web:0b5b6f28c0827e315a5411",
  measurementId: "G-N41TJLG7TM"
};





function App() {
  const [selectedNavItem, setSelectedNavItem] = useState([]);
  const [aircraftType, setAircraftType] = useState("DHC-8")
  const [runwayConditionDescriptionGravel1, setRunwayConditionDescriptionGravel1] = useState("SELECT GRAVEL CONTAMINANT");
  const [runwayConditionDescriptionGravel3, setRunwayConditionDescriptionGravel3] = useState("SELECT GRAVEL CONTAMINANT");
  const [runwayConditionDescriptionPaved2, setRunwayConditionDescriptionPaved2] = useState("SELECT PAVED CONTAMINANT");
  const [runwayConditionDescriptionPaved4, setRunwayConditionDescriptionPaved4] = useState("SELECT PAVED CONTAMINANT");
  const [dropDownPavedOrGravel, setDropDownPavedOrGravel] = useState("GRAVEL");
  const [typeOfReport, setTypeOfReport] = useState('RCC Not Provided');
  const [contaminationCoverage2, setContaminationCoverage2] = useState(0);
  const [contaminationCoverage3, setContaminationCoverage3] = useState(0);
  const [contaminationCoverage1, setContaminationCoverage1] = useState(0);
  const [contaminationCoverage4, setContaminationCoverage4] = useState(0);
  const [rwycc1, setRwycc1] = useState(6);
  const [rwycc2, setRwycc2] = useState(6);
  const [rwycc3, setRwycc3] = useState(6);
  const [correctedLandingDistance, setCorrectedLandingDistance] = useState(0);
  const [runwayLength, setRunwayLength] = useState(0);
  const [runwayHeading, setRunwayHeading] = useState(0);
  const [windDirection, setWindDirection] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [magneticVar, setMagneticVar] = useState(0);
  const [eastOrWestVar, setEastOrWestVar] = useState("West")


  const [user, setUser] = useState(null);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {


    // Create an observer to check the user's sign-in status
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update the user state variable
    });

    return () => {
      // Unsubscribe the observer to prevent memory leaks
      unsubscribe();
    };
  }, []);


  useEffect(() => {
    // Check if contaminationCoverage2 is equal to 100
    if (contaminationCoverage2 === 100 || contaminationCoverage2 === 0) {
      // Reset the state of runwayConditionDescriptionPaved4 to its initial state
      setRunwayConditionDescriptionPaved4("SELECT PAVED CONTAMINANT");
      setContaminationCoverage4(0);
    }
  
    // Check if contaminationCoverage1 is equal to 100
    if (contaminationCoverage1 === 100 || contaminationCoverage1 === 0) {
      // Reset the state of initialRunwayConditionDescriptionGravel3 to its initial state
      setRunwayConditionDescriptionGravel3("SELECT GRAVEL CONTAMINANT");
      setContaminationCoverage3(0);
    }

  }, [contaminationCoverage1, contaminationCoverage2]); // This useEffect will run whenever contaminationCoverage1 or contaminationCoverage2 changes
  


  const handleNavItemClick = (v) => {
    if (selectedNavItem.includes(v)) {
      setSelectedNavItem((prev) => prev.filter((item) => item !== v));
    } else {
      setSelectedNavItem((prev) => [...prev, v]);
    }
  };

  const NAVBAR_HEIGHT = 64;


  return (
    <div className="h-screen">
      {user !== null && <Navbar selectedNavItem={selectedNavItem} onNavItemClick={handleNavItemClick} />}
      <div name="red container" className="flex items-center justify-center" style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}>
        {user === null ? ( // Check if the user is not signed in
          <SignIn auth={auth} />
        ) : (
          /* Display something else when the user is signed in */
          <div className="flex flex-wrap items-center justify-evenly">
            {selectedNavItem.length === 0 ? (
              <p className="text-xl">Please select an item in the menu bar</p>
            ) : (
              <>

                <div className="flex flex-wrap justify-center">
                  <div className="flex-1/2 p-2">
                    {selectedNavItem.includes("RCC Calculator") && (
                      <div>
                        <FirstPageSelector
                          initialRunwayConditionDescriptionGravel1={runwayConditionDescriptionGravel1}
                          runwayConditionDescriptionGravel1Handler={setRunwayConditionDescriptionGravel1}
                          initialRunwayConditionDescriptionGravel3={runwayConditionDescriptionGravel3}
                          setRunwayConditionDescriptionGravel3Handler={setRunwayConditionDescriptionGravel3}
                          initialRunwayConditionDescriptionPaved2={runwayConditionDescriptionPaved2}
                          setRunwayConditionDescriptionPaved2Handler={setRunwayConditionDescriptionPaved2}
                          initialRunwayConditionDescriptionPaved4={runwayConditionDescriptionPaved4}
                          setRunwayConditionDescriptionPaved4Handler={setRunwayConditionDescriptionPaved4}
                          initialAircraftType={aircraftType}
                          setAircraftTypeHandler={setAircraftType}
                          initialTypeOfReport={typeOfReport}
                          setTypeOfReportHandler={setTypeOfReport}
                          initialDropDownPavedOrGravel={dropDownPavedOrGravel}
                          setDropDownPavedOrGravelHandler={setDropDownPavedOrGravel}
                          initialContaminationCoverage2={contaminationCoverage2}
                          setContaminationCoverage2Handler={setContaminationCoverage2}
                          initialContaminationCoverage3={contaminationCoverage3}
                          setContaminationCoverage3Handler={setContaminationCoverage3}
                          initialContaminationCoverage1={contaminationCoverage1}
                          setContaminationCoverage1Handler={setContaminationCoverage1}
                          initialContaminationCoverage4={contaminationCoverage4}
                          setContaminationCoverage4Handler={setContaminationCoverage4}
                          initialRwycc1={rwycc1}
                          setRwycc1Handler={setRwycc1}
                          initialRwycc2={rwycc2}
                          setRwycc2Handler={setRwycc2}
                          initialRwycc3={rwycc3}
                          setRwycc3Handler={setRwycc3}
                          initialCorrectedLandingDistance={correctedLandingDistance}
                          setCorrectedLandingDistanceHandler={setCorrectedLandingDistance}
                          initialRunwayLength={runwayLength}
                          setRunwayLengthHandler={setRunwayLength}
                          initialSelectedNavItem={selectedNavItem}
                        />
                      </div>
                    )}
                  </div>


                  <div className="flex-1/2 p-2">
                    {selectedNavItem.includes('X-Wind') && (
                      <div className="mt-4">
                        <SecondPage
                          initialAircraftType={aircraftType}
                          setAircraftTypeHandler={setAircraftType}
                          initialRunwayHeading={runwayHeading}
                          setRunwayHeadingHandler={setRunwayHeading}
                          initialWindDirection={windDirection}
                          setWindDirectionHandler={setWindDirection}
                          initialWindSpeed={windSpeed}
                          setWindSpeedHandler={setWindSpeed}
                          initialMagneticVar={magneticVar}
                          setMagneticVarHandler={setMagneticVar}
                          initialEastOrWestVar={eastOrWestVar}
                          setEastOrWestVarHandler={setEastOrWestVar}

                        />
                      </div>
                    )}
                  </div>






                  <div className="flex-1/2">
                    {selectedNavItem.includes('RCAM PDF') && (
                      <div className="mt-4 ">
                        {/** Add the PDF here using an iframe */}
                        <iframe
                          title="PDF Viewer"
                          src="./RCAMv3.3.pdf"
                          style={{
                            width: 'calc(100vh - 100px)',
                            height: 'calc(100vh - 100px)', // Adjust the height as needed
                            border: 'none',
                          }}
                        >
                          This browser does not support PDFs. Please <a href="./RCAMv3.3.pdf">download the PDF</a>.
                        </iframe>
                      </div>
                    )}
                  </div>

                </div>



              </>
            )}
          </div>
        )}
      </div>
    </div>
  );

}


export default App;
