function inputData(inputtId) {
  const in_val = parseFloat(document.getElementById(inputtId).value);
  document.getElementById(inputtId).value = "";
  return in_val;
}

function inputByTagsData(tagId) {
  const tag_val = parseFloat(document.getElementById(tagId).innerText);
  return tag_val;
}

function adddToFeild(getId, Valueee) {
  document.getElementById(getId).innerText = Valueee;
}
