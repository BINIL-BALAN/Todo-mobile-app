import { useState,createContext,useMemo,useEffect } from "react";
import { Dimensions } from "react-native";
export const AllStyles = createContext()
export function StyleContext({children}){
    const [theme,setTheme] = useState("dark")
    const [dimension,setDimention] = useState({
        width:0,
        height:0,
        orientation:"portrait",
        fontScale:1,
        scale:1
    })
    const contextValue = useMemo(() => ({ theme, setTheme, dimension }), [
        theme,
        setTheme,
        dimension,
      ]);
    useEffect(() => {
        const updateOrientation = () => {
          const { width, height,fontScale,scale } = Dimensions.get('window');
          const orientation = width > height ;
          setDimention({width, height,fontScale,scale,orientation})
        };
        updateOrientation();
        Dimensions.addEventListener('change', updateOrientation);
    
        return () => {
          Dimensions.removeEventListener('change', updateOrientation);
        };
      }, []);
     return  <AllStyles.Provider value={contextValue}>
        {children}
     </AllStyles.Provider>
}