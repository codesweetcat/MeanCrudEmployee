export const getTopItemsByValue = (transformedGenes: any[], numOfTop: number) => {
    if (!transformedGenes) return;
    transformedGenes.sort((a, b) => b['overall_association_score'] - a['overall_association_score'])
    return transformedGenes.slice(0, numOfTop)

}