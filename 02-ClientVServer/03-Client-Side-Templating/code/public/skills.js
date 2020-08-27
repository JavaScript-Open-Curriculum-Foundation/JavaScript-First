/**
* Skills
*/
const _skillsSelector = document.querySelector(".sidebar");


const _skillMap = skills.map(skills => `
  <p class="w3-wide">${skills.name}</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:${skills.level}%">${skills.level}%</div>
  </div>
`).join('');

const skillsMarkup= `<div class="">
  <h2>Skills</h2>
  <ul class="">
    ${_skillMap}
  </ul>
</div>`;


/**
 *
 *
 * @param {*} selector
 * @param {array of objects} skills
 */
const skills = (selector, skills) => {
  const _skillsSelector = document.querySelector(`${selector}`);

  const _skillMap = skills.map(skills => `
  <p class="w3-wide">${skills.name}</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:${skills.level}%">${skills.level}%</div>
  </div>`)
  .join('');

  const skillsMarkup= `
  <div class="">
      <h2>Skills</h2>
      <ul class="">${_skillMap}</ul>
  </div>`;

  return skillsMarkup;
}