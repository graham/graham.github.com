import * as React from "react";

import { build_fn } from "./text_to_filter_fun";
import { global_dispatcher } from "myproj-lib";

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
    }

    handleChange(event) {
        this.setState({
            query_value: event.target.value,
            items: this.state.items,
            filterFn: build_fn(event.target.value)
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    getVisibleItems(): Array<any> {
        return this.state.items.filter(this.state.filterFn);
    }

    renderRow(item) {
        return <tr><td>Hello {item.num}</td></tr>;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search
                <input type="text" value={this.state.query_value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <table>
                    {this.getVisibleItems().map(this.renderRow)}
                </table>
            </div>
        );
    }
}

export {
    SearchableDataTable
}
