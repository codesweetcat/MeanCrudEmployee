import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

// import BarChartForGeneData from "./BarChartForGeneData"
import BarChartByRechart from "./graphChart/BarChartByRechart"
import RadarChartRechart from "./graphChart/RadarChartRechart"

import { getTopItemsByValue } from './utils/utils'


const fetchUsersWithAxios = async () => {
  const apiUrl = 'https://demo6922545.mockable.io/';
  let transformedGenes = []
  return axios
    .get(apiUrl)
    .then(({ data }) => {
      data['data'].map((item) => {
        const container = {}; //extract relative elements to form a new object
        container['symbol'] = item['target']['gene_info']['symbol']
        container['id'] = item['target']['id']
        container['name'] = item['target']['gene_info']['name']
        container['overall_association_score'] = item['association_score']['overall']
        const graphDataObj = item['association_score']['datatypes']
        container['graphData'] = Object.keys(graphDataObj).map(k => {
          let itemObj = {};
          itemObj['name'] = k
          itemObj['value'] = graphDataObj[k]
          return itemObj
        })
        return transformedGenes.push(container)//append into a array as output
      })
      return (getTopItemsByValue(transformedGenes, 5))//sort out and collect top 5
    })
    .catch(e => {
      console.log(e);
    });
};

function App() {
  const [geneData, setGeneData] = useState([]);
  useEffect(() => {
    fetchUsersWithAxios().then(data => {
      setGeneData(data)
    })
  }, []);

  return (

    <div className="App">
      <ReactTable
        data={geneData}
        columns=
        {[
          {
            expander: true,
            width: 65,
            Expander: ({ isExpanded, ...rest }) => (
              <div>
                {isExpanded ? (
                  <span>&#8722;</span>
                ) : (
                    <span>&#43;</span>
                  )}
              </div>
            ),
            style: {
              cursor: "pointer",
              fontSize: 25,
              color: "#8884d8",
              padding: "0",
              textAlign: "center",
              userSelect: "none"
            },
          },
          {
            Header: "Symbol",
            accessor: "symbol",
          },
          {
            Header: "Gene ID",
            accessor: "id",
          },
          {
            Header: "Gene Name",
            accessor: "name",
          },
          //Overall Association Score
          {
            Header: "Overall Association Score",
            accessor: "overall_association_score",
          },
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
        SubComponent={(row) => {
          const graphData = row['original']['graphData']
          return (
            <div className={'rowGraph'}>
              <div className={'half'}>
                <BarChartByRechart data={graphData} />
              </div>
              <div className={'half'}>
                <RadarChartRechart data={graphData} title={'Association Score vs Data type'} />
              </div>
            </div>
          )
        }
        }
      />
    </div>
  );
}

export default App;
