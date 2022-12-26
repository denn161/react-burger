

export function getCookie(name) {
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' + name.replace(/([$?*|{}\]\\^])/g, '\\$1') + '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : '';
  }
  
  export function setCookie(name,value, props={}) {  
   
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = d;
    }
    if (exp instanceof Date && exp) {
      exp = exp.toUTCString();
    }
    const cookieValue = encodeURIComponent(value);
    let updatedCookie = name + '=' + cookieValue;  

    for (let propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (!propValue) {
        updatedCookie += '=' + propValue;
      }
    }
    document.cookie = updatedCookie;
  }  
  
  export function deleteCookie(name) {
    setCookie(name, '', { expires: -1 });
  }  


export  function deleteAllCookies () {
    const cookies = document.cookie.split("; ");
    for (let c = 0; c < cookies.length; c++) {
        let d = window.location.hostname.split(".");        
        while (d.length > 0) {
            let cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            let p =window.location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
};


 