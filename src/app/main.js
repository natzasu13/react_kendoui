import React from 'react';
import ReactDOM from 'react-dom';
import kendo from '@progress/kendo-ui';
import { Grid, GridColumn, Column } from '@progress/kendo-grid-react-wrapper';
import { filterBy } from '@progress/kendo-data-query';


class GridContainer extends React.Component {
    
    constructor(props) {
        super(props);

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read:  {
                    url:"https://bmgavzf5zj.execute-api.us-west-2.amazonaws.com/Prod/status",//"https://demos.telerik.com/kendo-ui/service/Products",
                    dataType: "json"
                },
                /*update: {
                    url: "https://demos.telerik.com/kendo-ui/service/Products/Update",
                    dataType: "jsonp"
                },
                destroy: {
                    url: "https://demos.telerik.com/kendo-ui/service/Products/Destroy",
                    dataType: "jsonp"
                },
                create: {
                    url: "https://demos.telerik.com/kendo-ui/service/Products/Create",
                    dataType: "jsonp"
                },*/
                parameterMap: function(options, operation) {
                    if (operation !== "read" && options.models) {
                        return {models: kendo.stringify(options.models)};
                    }
                }
            },
            batch: true,
            pageSize: 20,
            schema: {
                model: {
                    id: "id",
                    fields: {
                        shipping:  {editable: false, type: "text"},
                        starting:  {editable: false, type: "text"},
                        add_product: {editable: false, type: "text"},
                        login: {editable: false, type: "text"},                        
                        current_step: {editable: false, type: "text"},
                        gcs_completed: {editable: false, type: "text"},
                        thanks: {editable: false, type: "text"},
                        waiting: {editable: false, type: "text"},                        
                        ip: {editable: false,  type: "text" },
                        proxy: {editable: false,  type: "text" },
                        billing :  {editable: false,  type: "text" }                                         
                    }
                }
            }
        })       
    }

    state = {
        filter: {
            logic: "and",
            filters: [
                undefined
            ]
        }
    };

    render() {
        return (
            <Grid 
                dataSource={this.dataSource}
                //toolbar={["create"]}
                //editable={"inline"}
                pageable={true}
                height={550}   
                sortable={true}
                scrollable={true}
                //filterable={true}
           
                >

                <GridColumn field="shipping" title="shipping" width="120px" />
                <GridColumn field="starting"   title="starting" width="120px" />
                <GridColumn field="add_product"   title="add_product" width="120px" />
                <GridColumn field="login"  title="login" width="120px" />
                <GridColumn field="current_step"  title="current_step" width="120px" />
                <GridColumn field="gcs_completed"   title="gcs_completed" width="120px" />
                <GridColumn field="thanks"  title="thanks" width="120px" />
                <GridColumn field="waiting"   title="waiting" width="120px" />
                <GridColumn field="ip"   title="ip" width="120px" />
                <GridColumn field="proxy" title="proxy"   width="120px" />
                <GridColumn field="billing" title="billing"   width="120px" />
            </Grid>
        );
    }
}

ReactDOM.render(
    <GridContainer />,
    document.querySelector('react-kendo')
);
