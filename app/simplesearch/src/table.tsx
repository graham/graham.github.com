import * as React from "react";
import * as debounce from "debounce";
import { build_fn } from "./text_to_filter_fun";
import { global_dispatcher } from "myproj-lib";

console.log(debounce);

class TableState {
    query_value: string;
    filterFn: (a: any, b: number, c: any[]) => boolean;
    items: Array<any>;
}

class TableProps {
    initDocs: Array<any>
}

class SearchableDataTable extends React.Component<TableProps, TableState> {
    constructor(props) {
        super(props);
        this.state = {
            query_value: '',
            items: this.props.initDocs,
            filterFn: () => true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //        this.handleChange = debounce(this.handleChange, 100);
    }

    handleChange(event) {
        let next_state = {
            query_value: event.target.value,
            items: this.state.items,
            filterFn: build_fn(event.target.value)
        };
        this.setState(next_state);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    getVisibleItems(): Array<any> {
        return this.state.items.filter(this.state.filterFn).slice(0, 100);
    }

    renderRow(item) {
        return <tr><td>Hello {item.num}</td></tr>;
    }

    render() {
        let visibleItems = this.getVisibleItems().map(this.renderRow);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search</label>
                    <input type="text" value={this.state.query_value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                    <div>{visibleItems.length} of {this.state.items.length} items.</div>
                </form>
                <table>
                    {visibleItems}
                </table>
            </div>
        );
    }
}

export {
    SearchableDataTable
}
