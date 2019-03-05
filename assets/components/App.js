import React from 'react';
import { Helmet } from 'react-helmet';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'ok'
        };
    }

    render() {
        const d = new Date();
        const n = d.getTime();
        const { status } = this.state;
        const icon = `assets/img/${status}`;

        return (
            <>
                <Helmet>
                    <title>{ status }</title>
                    <link rel="icon" sizes='16x16' href={`${icon}.svg?v=${n}`} />
                    <link rel="icon" sizes='16x16' href={`${icon}.png?v=${n}`} />
                </Helmet>

                <label htmlFor="status">Status:</label>
                <select id="status" value={status} onChange={e => {
                    this.setState({
                        status: e.target.value
                    });
                }}>
                    <option value=""></option>
                    <option value="ok">OK</option>
                    <option value="warn">Warning</option>
                    <option value="error">Error</option>
                </select>
            </>
        );
    }
}
