import { getTopItemsByValue } from "../utils/utils";

const correctPC = [
    { symbol: "EGFR", id: "ENSG00000146648", name: "epidermal growth factor receptor", overall_association_score: 1 },
    { symbol: "SMAD2", id: "ENSG00000175387", name: "SMAD family member 2", overall_association_score: 0.795385609949128 },
    { symbol: "TGFBR2", id: "ENSG00000163513", name: "transforming growth factor beta receptor 2", overall_association_score: 0.7867312254055623 },
    { symbol: "TNFRSF10C", id: "ENSG00000173535", name: "TNF receptor superfamily member 10c", overall_association_score: 0.6378002776688643 },
    { symbol: "GATAD2B", id: "ENSG00000143614", name: "GATA zinc finger domain containing 2B", overall_association_score: 0.637625 },
]

describe("GetTop5ItemsByValue Utils", () => {
    it("It is correct postcode as input", () => {
        expect(getTopItemsByValue(correctPC, 5).length).toEqual(5);
    });
});
