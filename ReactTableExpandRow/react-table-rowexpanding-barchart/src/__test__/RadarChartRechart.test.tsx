import React from 'react'
import ReactDom from 'react-dom'
import RadarChartRechart from '../graphChart/RadarChartRechart'
import { render, cleanup } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

const graphData = [
  { name: "literature", value: 0.2697429609181807 },
  { name: "rna_expression", value: 0.05516290503852242 },
  { name: "genetic_association", value: 0 },
  { name: "somatic_mutation", value: 0.7313473432632761 },
  { name: "known_drug", value: 0 },
  { name: "animal_model", value: 0 },
  { name: "affected_pathway", value: 0.31888483464454703 },
]
const title = 'Association Score';
function createNodeMock() {
  const doc = document.implementation.createHTMLDocument();
  return { parentElement: doc.body };
}
afterEach(cleanup)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<RadarChartRechart></RadarChartRechart>, div);
})

it('render redar chart correctly', () => {
  const { getByTestId } = render(<RadarChartRechart title={title} />)
  expect(getByTestId('redarChart')).toHaveTextContent('Association Score')
})

it('match snapshot', () => {
  const redarChart = renderer.create(<RadarChartRechart data={graphData} title={title} />, { createNodeMock }).toJSON();
  expect(redarChart).toMatchSnapshot();
})