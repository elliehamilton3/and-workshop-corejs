/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *   
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 * 
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 * 
 * 
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *  
 *   happy refactory :)
 */

var filterApplicantsByAttributes = (applicants, attributesToFilterBy) => {
  const AVAILABLE_IMMEDIATELY = 'AVAILABLE_IMMEDIATELY';
  const FRESH_GRAD = 'FRESH_GRAD';

  if (!attributesToFilterBy.length) return applicants;

  if (attributesToFilterBy.includes(AVAILABLE_IMMEDIATELY)) {
    return filteredApplicants = applicants.filter((applicant) => {
      return applicant.attributes.includes(AVAILABLE_IMMEDIATELY);
    });
  } 
  else if (attributesToFilterBy.includes(FRESH_GRAD)) {
    return filteredApplicants = applicants.filter((applicant) => {
      return applicant.attributes.includes(FRESH_GRAD);
    });
  }
  else {
    return filteredApplicants = applicants.filter((applicant) => {
      return attributesToFilterBy.every((attribute) => {
        return applicant.attributes.includes(attribute);
      });
    });
  }
}

module.exports = filterApplicantsByAttributes;
