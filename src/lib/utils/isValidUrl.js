export function isValidURL(url) {
  const pattern =
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:[0-9]+)?(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
  return pattern.test(url);
}
