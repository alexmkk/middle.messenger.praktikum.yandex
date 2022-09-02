import {HomePage} from "./pages/Home/Home";
import {Button} from "./src/components/Button/Button";
import {registerComponent} from "./src/utils/RegisterComponent";

registerComponent("Button", Button as any);

window.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("#app")!;

    const homePage = new HomePage({title: "Главная"});

    root.append(homePage.getContent()!);
});