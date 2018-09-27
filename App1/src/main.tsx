import * as React from "react"
import * as ReactDOM from "react-dom"
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme"
import { App } from "./App"

class Index extends React.Component {
    render() {
        return <UWPThemeProvider
            style={{
                background: "rgba(0,0,0,0.4)"
            }}
            theme={getTheme({
                useFluentDesign: true,
                desktopBackgroundImage: "../images/back.png"
            })}
        >
            <App />
        </UWPThemeProvider>
    }
}

ReactDOM.render(<Index />, document.querySelector("#app"))
