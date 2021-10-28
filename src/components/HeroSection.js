import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Color'

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext)
  return (
    <div
     style={{ 
       padding: "1rem",
       backgroundColor: `${currentTheme.backgroundColor}`,
       color: `${currentTheme.textColor}`,
       textAlign: "center",
       height: "90vh",
       }}>
       <img style={{
         width: "170px",
         marginTop: "30px"
       }} src="./images/gelvix.png" alt="user"/>  
       <h1>Context API theme toggler</h1>
       <p style={{
           marginTop: "20px"}}
           >I have made this project using  <code> React Context API </code>, for just clearing the concept of <code>createContext, Provider and Consumer</code>.</p>
       <button
         onClick={ () => {
          setThemeMode(themeMode === "light" ? "dark" : "light")
         }}
         style={{
           backgroundColor: "#664E88",
           padding: "10px 100px",
           fontSize: "18px",
           color: "#ffffff",
           cursor: "pointer",
           border: `${currentTheme.border}`,
           marginTop: "30px" ,
           letterSpacing: "1px",
         }}>
          <code>Click Me</code>
       </button>
    </div>
  )
}

export default HeroSection
