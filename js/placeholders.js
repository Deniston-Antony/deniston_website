function makePlaceholderSvg(name, width, height, hint) {
  const safeName = String(name).replace(/[<>&"]/g, "");
  const safeHint = String(hint || "Replace this file with your image").replace(/[<>&"]/g, "");
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="' +
    width +
    '" height="' +
    height +
    '" viewBox="0 0 ' +
    width +
    " " +
    height +
    '">' +
    '<rect width="100%" height="100%" fill="#ebe0c8"/>' +
    '<rect x="18" y="18" width="' +
    (width - 36) +
    '" height="' +
    (height - 36) +
    '" fill="none" stroke="#234536" stroke-width="2" stroke-dasharray="9 7"/>' +
    '<circle cx="' +
    width / 2 +
    '" cy="' +
    (height / 2 - 28) +
    '" r="26" fill="none" stroke="#b65a32" stroke-width="2"/>' +
    '<text x="50%" y="' +
    (height / 2 + 18) +
    '" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#163028">' +
    safeName +
    "</text>" +
    '<text x="50%" y="' +
    (height / 2 + 46) +
    '" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-size="14" fill="#3d3429">' +
    safeHint +
    "</text>" +
    '<text x="50%" y="' +
    (height / 2 + 70) +
    '" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-size="13" fill="#6b5e4f">' +
    width +
    " x " +
    height +
    " px</text>" +
    "</svg>"
  );
}

window.DENISTON_PLACEHOLDERS = {
  makePlaceholderSvg: makePlaceholderSvg
};
