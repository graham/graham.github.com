import * as React from "react";
import * as ReactDOM from "react-dom";
import { test_lib_working } from "myproj-lib";

import { SearchableDataTable } from "./table";
import { TokenDataTable } from "./token_table";

class HWState {
}

class HelloWorld extends React.Component<{}, HWState> {
    constructor(props) {
        super(props);
    }

    render() {
        let docs = [];
        for (let i = 0; i < 20; i++) { docs.push({ 'fuzzy': 'hello ' + i, num: i, 'test': function () { return true; } }); }
        return <SearchableDataTable initDocs={docs} />
    }
}

ReactDOM.render(<HelloWorld />,
    document.getElementById('content'));

test_lib_working();
