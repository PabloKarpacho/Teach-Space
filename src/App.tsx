import "./styles.css";

import { DeviceType } from "./components/enums";
//REDUX
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//selectors

//actions
import { setDevice } from "./store/features/device";

//react hooks
import { useEffect } from "react";

//custom hooks
import useIsBreakpoint from "./hooks/useIsBreakpoint";

//components
import Schedule from "./components/Schedule/Schedule";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";

const componentConfig = {
  mobile: {
    breakpoint: 768,
  },
  tablet: {
    breakpoint: 1024,
  },
};

function App() {
  const dispatch = useDispatch();

  //device distinction
  const { mobile, tablet } = componentConfig;
  const isMobile = useIsBreakpoint(mobile.breakpoint);
  const isTablet = useIsBreakpoint(tablet.breakpoint);

  const identyfyDevice = () => {
    if (isMobile) {
      return DeviceType.mobile;
    }
    if (isTablet) {
      return DeviceType.tablet;
    }
    return DeviceType.desktop;
  };

  useEffect(() => {
    dispatch(setDevice(identyfyDevice()));
  }, [isMobile, isTablet]);

  return (
    <>
      <header className="app-header">
        <div className="app-header__content">
          <div className="brand">
            <span className="logo-wrapper">
              <img className="logo" src="logo.png" alt="logo" />
            </span>
            <span className="brand-name">
              Teach <span className="colored">Space</span>
            </span>
          </div>
          <ThemeChanger></ThemeChanger>
        </div>
      </header>
      <Schedule />
    </>
  );
}
export default App;
