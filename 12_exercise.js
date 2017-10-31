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

function isInList(list, item) {
  return list.indexOf(item) !== -1
}

function 

function filterApplicantsByAttributes(applicants, attributesToFilterBy) {
  let filteredApplicants = [];
  const AVAILABLE_IMMEDIATELY = 'AVAILABLE_IMMEDIATELY';
  const FRESH_GRAD = 'FRESH_GRAD';

  if (!attributesToFilterBy.length) return applicants;

  if (isInList(attributesToFilterBy, AVAILABLE_IMMEDIATELY)) {
    filteredApplicants = applicants.filter(function(applicant) {
      return isInList(applicant.attributes, AVAILABLE_IMMEDIATELY);
    });
  } 
  else if (isInList(attributesToFilterBy, FRESH_GRAD)) {
    filteredApplicants = applicants.filter(function(applicant) {
      return isInList(applicant.attributes, FRESH_GRAD);
    });
  }
  else {
    filteredApplicants = applicants.filter(function(applicant){
      return attributesToFilterBy.every(function(attribute){
        return isInList(applicant.attributes, attribute);
      });
    });
  }
  return filteredApplicants;
}

module.exports = filterApplicantsByAttributes;
