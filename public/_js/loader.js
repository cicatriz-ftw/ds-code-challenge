export function ajax(src, method = 'GET'){
  return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            let status = xhr.status;
            if(status === 200 || status === 304)
              resolve(JSON.parse(xhr.responseText));
            else
              reject('load_error');
        }, false);
        xhr.open(method, src, true);
        xhr.send();
    });
}
