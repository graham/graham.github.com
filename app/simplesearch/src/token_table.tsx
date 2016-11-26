import * as React from "react";
import { build_fn, string_to_search_tokens } from "./text_to_filter_fun";
import { global_dispatcher, debounce, mapMerge } from "myproj-lib";

class TableState {
    query_value: string;
    items: Array<any>;
}

class TableProps {
    initDocs: Array<any>
}

class TokenDataTable extends React.Component<TableProps, TableState> {
    constructor(props) {
        super(props);
        this.state = {
            query_value: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange = debounce(this.handleChange, 100);
        this.setSearch("name:graham +id:&,'123',`13'=:123 =123 21` filename:'!asd,fd)sa,  a,df' asdf,fdsa 123-321 -id:&,>32,<34");
    }

    setSearch(s) {
        let next_state = {
            query_value: s,
            items: string_to_search_tokens(s)
        };
        this.setState(mapMerge(this.state, next_state));
    }

    handleChange(event) {
        let next_state = {
            query_value: event.target.value,
            items: string_to_search_tokens(event.target.value)
        };
        this.setState(mapMerge(this.state, next_state));
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    renderRow(item) {
        return <tr><td>{JSON.stringify(item)}</td ></tr >;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search</label>
                    <input type="text" value={this.state.query_value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <table>
                    {this.state.items.map(this.renderRow)}
                </table>
            </div>
        );
    }
}

export {
    TokenDataTable
}
