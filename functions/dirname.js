exports.default = (folder) => {
  let f = folder.split('/');
  let index = f.length - 1;
  return f[index];    
}