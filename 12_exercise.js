let filterApplicantsByPriorityAttribute = (applicants, attribute) => {
  return applicants.filter((applicant) => {
    return applicant.attributes.includes(attribute);
  });
}

let filterApplicantsByAllAttributes = (applicants, attributes) => {
  return applicants.filter((applicant) => {
    return attributes.every((attribute) => {
      return applicant.attributes.includes(attribute);
    });
  });
}

let filterApplicantsByAttributes = (applicants, attributesToFilterBy) => {
  const AVAILABLE_IMMEDIATELY = 'AVAILABLE_IMMEDIATELY';
  const FRESH_GRAD = 'FRESH_GRAD';

  if (!attributesToFilterBy.length) return applicants;

  if (attributesToFilterBy.includes(AVAILABLE_IMMEDIATELY)) {
    return filterApplicantsByPriorityAttribute(applicants, AVAILABLE_IMMEDIATELY);
  } 
  else if (attributesToFilterBy.includes(FRESH_GRAD)) {
    return filterApplicantsByPriorityAttribute(applicants, FRESH_GRAD);
  }
  else {
    return filterApplicantsByAllAttributes(applicants, attributesToFilterBy);
  }
}

module.exports = filterApplicantsByAttributes;
