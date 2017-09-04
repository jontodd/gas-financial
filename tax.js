exports.stateIncomeCASingleFile = stateIncomeCASingleFile;
exports.stateIncomeCAJointFile = stateIncomeCAJointFile;
exports.federalCapitalGainsMarriedFilingJointly = federalCapitalGainsMarriedFilingJointly;

function stateIncomeCASingleFile(amount) {
  tax = 0;
  if (amount > 0 && amount <= 7850) {
    tax = amount * 0.01;
  }
  else if(amount > 7850 && amount <= 18610) {
    tax = (amount - 7850) * 0.02 + 78.50;
  }
  else if(amount > 18610 && amount <= 29372) {
    tax = (amount - 18610) * 0.04 + 293.70;
  }
  else if(amount > 29372 && amount <= 40773) {
    tax = (amount - 29372) * 0.06 + 724.18;
  }
  else if(amount > 40773 && amount <= 51530) {
    tax = (amount - 40773) * 0.08 + 1408.24;
  }
  else if(amount > 51530 && amount <= 263222) {
    tax = (amount - 51530) * 0.093 + 2268.80;
  }
  else if(amount > 263222 && amount <= 315866) {
    tax = (amount - 263222) * 0.103 + 21956.16;
  }
  else if(amount > 315866 && amount <= 526443) {
    tax = (amount - 315866) * 0.113 + 27378.49;
  }
  else if(amount > 526443 && amount <= 1000000) {
    tax = (amount - 526443) * 0.123 + 51173.69;
  } else if (amount > 1000000) {
    tax = (amount - 1000000) * 0.133 + 109421.20;
  }

  return tax;
}

function stateIncomeCAJointFile(amount) {
 tax = 0;
 if(amount > 0 && amount <= 15700) {
  tax = amount * 0.01;
 }
  else if(amount > 15700 && amount <= 37220) {
    tax = (amount - 15700) * 0.02 + 157.00;
  }
  else if(amount > 37220 && amount <= 58744) {
    tax = (amount - 37220) * 0.04 + 587.40;
  }
  else if(amount > 58744 && amount <= 81546) {
    tax = (amount - 58744) * 0.06 + 1448.36;
  }
  else if(amount > 81546 && amount <= 103060) {
    tax = (amount - 81546) * 0.08 + 2816.48;
  }
  else if(amount > 103060 && amount <= 526444) {
    tax = (amount - 103060) * 0.093 + 4537.60;
  }
  else if(amount > 526444 && amount <= 631732) {
    tax = (amount - 526444) * 0.103 + 43912.31;
  }
  else if(amount > 631732 && amount <= 1000000) {
    tax = (amount - 631732) * 0.113 + 54756.98;
  }
  else if(amount > 1000000 && amount <= 1052886) {
    tax = (amount - 1000000) * 0.123 + 96371.26;
  } else if (amount > 1052886) {
    tax = (amount - 1052886) * 0.133 + 102876.24;
  }
  return tax;
}

// Net Investment Income Tax NIIT
//
// Effective Jan. 1, 2013, individual taxpayers are liable for a 3.8 percent Net Investment Income Tax on the lesser of their net investment income, or the amount by which their modified adjusted gross income exceeds the statutory threshold amount based on their filing status.
//
// The statutory threshold amounts are:
//
// Married filing jointly — $250,000,
// Married filing separately — $125,000,
// Single or head of household — $200,000, or
// Qualifying widow(er) with a child — $250,000.

function federalNetInvestmentIncomeTaxMarriedFilingJointly(agi, netInvestmentIncome) {
  // Now compute the NIIT
  return Math.min(netInvestmentIncome, agi - 250000);
}

function federalCapitalGainsMarriedFilingJointly(ordinaryIncome, capGains) {

  // Fill up brackets first with ordinary income
  ordinaryIncome0 = Math.min(ordinaryIncome, 75900);
  ordinaryIncome15 = Math.min(ordinaryIncome - ordinaryIncome0, 470700 - 75900);
  ordinaryIncome20 = ordinaryIncome - ordinaryIncome0 - ordinaryIncome15;

  // Now compute remaining amount of each bracket filled by capital gains
  capGains0 = Math.min(capGains,75900-ordinaryIncome0);
  capGains15 = Math.min(capGains - capGains0, 470700 - 75900 - ordinaryIncome15);
  capGains20 = capGains - capGains0 - capGains15;

  return (capGains0 * 0.0) + (capGains15 * 0.15) + (capGains20 * 0.20)
}
