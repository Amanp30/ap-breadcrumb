function removeFileExtension(segment) {
  return segment.replace(/\.[a-zA-Z0-9]+$/, ''); // Remove file extension from the segment
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function formatSegment(segment) {
  const formattedSegment = segment.replace(/[-_]/g, ' '); // Replace dashes and underscores with spaces
  return capitalizeEachWord(formattedSegment);
}

function capitalizeEachWord(string) {
  return string
    .split(' ')
    .map((word) => {
      const lowerCaseWord = word.toLowerCase();
      return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
    })
    .join(' ');
}

function removeTrailingSlash(url) {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}


module.exports = {removeFileExtension, isValidUrl, removeTrailingSlash, formatSegment}
