let parsedTL = 0;
if (taxInVar < 0) {
  setTaxableIncome(0);
} else if (taxInVar < 9701) {
  setTaxableIncome(taxInVar);
  parsedTL = taxInVar * 0.1;
} else if (taxInVar < 39476) {
  setTaxableIncome(taxInVar);
  let temp = taxInVar - 9701;
  parsedTL = 970 + temp * 0.12;
} else if (taxInVar < 84201) {
  setTaxableIncome(taxInVar);
  let temp = taxInVar - 39476;
  parsedTL = 4543 + temp * 0.22;
} else if (taxInVar < 100001) {
  setTaxableIncome(taxInVar);
  let temp = taxInVar - 84201;
  parsedTL = 14383 + temp * 0.24;
} else if (taxInVar < 160725) {
  setTaxableIncome(taxInVar);
  parsedTL = taxInVar * 0.24 - 5826;
} else if (taxInVar < 204100) {
  setTaxableIncome(taxInVar);
  parsedTL = taxInVar * 0.32 - 18684;
} else if (taxInVar < 510300) {
  setTaxableIncome(taxInVar);
  parsedTL = taxInVar * 0.35 - 24807;
} else {
  setTaxableIncome(taxInVar);
  parsedTL = taxInVar * 0.37 - 35013;
}
