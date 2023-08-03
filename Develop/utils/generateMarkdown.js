// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  
  licenseBadge =`[![License Badge](https://img.shields.io/badge/License-${license}-purple)](${renderLicenseLink(license)})`
  ;
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "GNU-GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0-standalone.html";
      break;
    case "N/A":
      licenseLink = "https://choosealicense.com/";
      break;
    default:
      licenseLink = "";
      break;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license) {
    licenseSection = 
    `For more info about this License go to ${renderLicenseLink(license)}`
  }

  return licenseSection ;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdownSections = ["Description", "Installation", "Usage", "Credits", "License", "Contact"]
  return `# ${data.title}\n 
  ${renderLicenseBadge(data.license)}\n 
  ## ${markdownSections[0]}\n
  ${data.description}\n
  ## ${markdownSections[1]}\n
  ${data.installation}\n
  ## ${markdownSections[2]}\n
  ${data.usage}\n
  ## ${markdownSections[3]}\n
  ${data.credits}\n
  ## ${markdownSections[4]}\n
  ${renderLicenseSection(data.license)}\n
  ## ${markdownSections[5]}\n
  You can contact me through:\n
  Email: [${data.email}](mailto:${data.email})\n
  GitHub: [PROFILE](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
