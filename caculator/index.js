(function() {
  var extraPerTerm = 1000;
  var rate = 0.0406;
  var years = 1;
  
  function caculateSaving(year, extraPerTerm, rate) {
    var totalSaving = 0;
    for (var i = 1, totalTerms = years*26; i <= totalTerms; i++) {
      totalSaving += extraPerTerm * rate * ((totalTerms - i) / totalTerms);
    }
    return totalSaving;
  }
  
  function regularInterest(loan, repayment, rate, year) {
    var totalInterst = 0;
    var principlePaid = 0;
    rate = rate < 1 ? rate : rate / 100;
    
    for (var i = 1, totalTerms = year*26; i <= totalTerms; i++) {
      var thisTermInterest = (Math.pow(1 + rate / 365, 14) - 1)* (loan - principlePaid) ;
      var paidOffAt;
      totalInterst += thisTermInterest;
      principlePaid += repayment - thisTermInterest;
      if(loan - principlePaid <= repayment) {
        paidOffAt = (i + 1) / 26;
        totalInterst += (loan - principlePaid) * rate / 26 - (principlePaid - loan);
        return {totalInterst, principlePaid, paidOffAt};
      }
    }
    console.log({totalInterst, principlePaid, paidOffAt});
    return {totalInterst, principlePaid, paidOffAt};
  }
  
  function getPeriodInterestByday(loan, rate, repayment, period) {
    var firstPart = Math.pow(1 + rate / 365, period) * loan;
    return firstPart - loan;
  }
  
  function getTerms(annualTerm, compoundingPeriodsPerYear, compoundingFrequency){
      
      compoundingPeriodsPerYear = typeof compoundingPeriodsPerYear == "number" ? compoundingPeriodsPerYear : 12;
      compoundingFrequency = typeof compoundingFrequency == "number" ? compoundingFrequency : 1;
  
      // Calculate the inverse of the multiplier.
      var val = annualTerm * (compoundingPeriodsPerYear / compoundingFrequency);
  
      return val;
  
  };
  
  function getRepayment(loan, rate, term, times) {
  
      //p = i*A / 1-(1 + i)^-N
  
      var i = rate / 100 / times;
  
      var part1 = i * loan;
      var part2 = 1 - Math.pow((1 + i), -1 * term * times);
      var payment = part1 / part2;
  
      return payment;
  }
  
  $('#addLoanBtn').on('click', function() {
    const availables = $('.hidden-rown.d-none');
  
    $(availables[0]).removeClass('d-none');
    if(availables.length <= 1) {
      $(this).attr("disabled", true);
    };
  });
  
  const rows = $('tr').not(':first');
  
  for (let i = 0; i <= rows.length; i++) {
    let repayment = 0,
        term = 0;
  
    $(rows[i]).find('.rate, .loan, .term').change(() => {
      const rate = $(rows[i]).find('.rate').val(),
            loan = $(rows[i]).find('.loan').val()
      
      term = $(rows[i]).find('.term').val();
  
      if(rate && loan && term) {
        repayment = Math.round(getRepayment(loan, rate, term, 26));
  
        $(rows[i]).find('.regularPayment').text(repayment);
        $(rows[i]).find('.totalAllInterest').text(Math.round(regularInterest(loan, repayment, rate, term).totalInterst));
      }
    });
  
    $(rows[i]).find('.customPayment, .customeTerm').change(() => {
      const rate = $(rows[i]).find('.rate').val(),
            loan = $(rows[i]).find('.loan').val(),
            myterm = $(rows[i]).find('.customeTerm').val(),
            myPayment = $(rows[i]).find('.customPayment').val();
            interestSaved = 0;
  
      if(rate && loan && myterm && myPayment) {
        const myInterest = regularInterest(loan, myPayment, rate, myterm);
        const regularPayInterest = regularInterest(loan, repayment, rate, myterm);
        const newPayoffInterest = regularInterest(loan, myPayment, rate, term);
  
        $(rows[i]).find('.totalFixedInterest').text(Math.round(myInterest.totalInterst));
        $(rows[i]).find('.totalPrinciplePaid').text(Math.round(myInterest.principlePaid - regularPayInterest.principlePaid));
        $(rows[i]).find('.totalInterestSaved').text(Math.round(regularPayInterest.totalInterst - myInterest.totalInterst));
        $(rows[i]).find('.paidOff').text((newPayoffInterest.paidOffAt).toFixed(1));
        $(rows[i]).find('.list-group').removeClass('d-none');
      }
    });
  }
})();