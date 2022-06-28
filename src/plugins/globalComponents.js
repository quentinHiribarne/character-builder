/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

import { faUserSecret, faCoffee } from "@fortawesome/free-solid-svg-icons";

export default {
    install(app) {
        library.add(faUserSecret, faCoffee);
    },
};
