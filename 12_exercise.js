let filterApplicantsByAttributes = (applicants, attributesToFilterBy) => {
  const AVAILABLE_IMMEDIATELY = 'AVAILABLE_IMMEDIATELY';
  const FRESH_GRAD = 'FRESH_GRAD';
  const hasAvailableImmediatelyFilter = attributesToFilterBy.includes(AVAILABLE_IMMEDIATELY);
  const hasFreshGradFilter = attributesToFilterBy.includes(FRESH_GRAD);
  

  if (!attributesToFilterBy.length) return applicants;

  return applicants.filter((applicant) => {
    if (hasAvailableImmediatelyFilter) {
      return applicant.attributes.includes(AVAILABLE_IMMEDIATELY);
    } 
    if (hasFreshGradFilter) {
      return applicant.attributes.includes(FRESH_GRAD);
    }
    return attributesToFilterBy.every(attribute => {
      return applicant.attributes.includes(attribute);
    });
  });
}

module.exports = filterApplicantsByAttributes;
