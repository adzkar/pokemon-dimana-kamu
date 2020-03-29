export function setCookie(name, value, days = 1000) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

// export function getCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0) === ' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) === 0)
//             return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }

export function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

export function getCookie(c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=');
    if (c_start !== -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(';', c_start);
      if (c_end === -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
}
