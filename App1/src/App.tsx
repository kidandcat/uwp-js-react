import * as React from "react"
import Button from "react-uwp/Button";
import NavigationView from "react-uwp/NavigationView";
import SplitViewCommand from "react-uwp/SplitViewCommand";

const navigationTopNodes = [
    <SplitViewCommand icon={"\uE716"} />,
    <SplitViewCommand label="Print" icon="PrintLegacy" />
];

const navigationBottomNode = [
    <SplitViewCommand label="Settings" icon={"\uE713"} />,
    <SplitViewCommand label="CalendarDay" icon={"\uE161"} />
];

export class App extends React.Component {
    render() {
        return <NavigationView
            displayMode="overlay"
            autoResize={false}
            initWidth={48}
            navigationTopNodes={navigationTopNodes}
            navigationBottomNodes={navigationBottomNode}
            focusNavigationNodeIndex={0}
        >
            <div style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Button tooltip="Mini Tooltip" onClick={() => {
                    const msgD = new Windows.UI.Popups.MessageDialog("Welcome to UWP", "Welcome")
                    msgD.showAsync()
                }}>Hello</Button>
            </div>
        </NavigationView>
    }
}

