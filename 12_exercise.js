let filterApplicantsByAttributes = (applicants, attributesToFilterBy) => {
  const AVAILABLE_IMMEDIATELY = 'AVAILABLE_IMMEDIATELY';
  const FRESH_GRAD = 'FRESH_GRAD';

  if (!attributesToFilterBy.length) return applicants;

  return applicants.filter((applicant) => {
    if (attributesToFilterBy.includes(AVAILABLE_IMMEDIATELY)) {
      return applicant.attributes.includes(AVAILABLE_IMMEDIATELY);
    } 
    if (attributesToFilterBy.includes(FRESH_GRAD)) {
      return applicant.attributes.includes(FRESH_GRAD);
    }
    return attributesToFilterBy.every(attribute => {
      return applicant.attributes.includes(attribute);
    });
  });
}

module.exports = filterApplicantsByAttributes;
