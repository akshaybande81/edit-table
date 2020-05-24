import React, {Component} from "react";
import "antd/dist/antd.css";
import "./index.css";
import {Table} from "antd";
import MyModal from './MyModal';

const columns = [
  {
    title: "apiname",
    dataIndex: "apiname",
    key: "apiname",
    width: "10%"
  },
  {
    title: "status",
    dataIndex: "status",
    key: "status",
    width: "10%"
  },
  {
    title: "method",
    dataIndex: "method",
    key: "method",
    width: "10%"
  },
  {
    title: "object",
    dataIndex: "object",
    key: "object",
    ellipsis: true,
    width: "10%"
  },
  {
    title: "updatedDate",
    dataIndex: "updatedDate",
    key: "updatedDate",
    width: "10%"
  },
  {
    title: "insertedDate",
    dataIndex: "insertedDate",
    key: "insertedDate",
    width: "10%"
  }
];
const data = [
  {
    "apiname": "api Booking Retrieve with lastname",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:30:15.549Z",
    "insertedDate": "2020-05-03T11:30:15.549Z",
    "key": "1",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/Booking/RetrieveAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "611",
      "date": "Sun, 03 May 2020 11:30:15 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "ASP.NET_SessionId=oqlyayl2fmbvsyolsazhh00l; path=/; secure; HttpOnly; SameSite=None",
        "dtCookie=v_4_srv_5_sn_F16DBAC63F615D08E2BB6EB4559D93D4_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=688387338.20480.0000; path=/; Httponly; Secure",
        "bm_sz=9A9EFD56B5EC2741BEE41F4AD9E1CF14~YAAQxl3SFxS7+r9xAQAATQ9N2gcrv35DzupswmjdgOMin5Pvq+/Dr/OnRqZ+1MINlkLnwKfvgk+M/8rvsrZtn3BZtl7BM0yaHmzPoYQ+Q78pU3gel9+LCzTQCEZG8aXtFmdPBlrVo8FKUBpMwtPQIFHMFEiXYQvzz0G51hIfIKosyGdYqOod75BhYyZ04TZ+; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:30:15 GMT; Max-Age=14400; HttpOnly",
        "_abck=E9FAB3B4B9127118F49911D2CABCB9D7~-1~YAAQxl3SFxW7+r9xAQAATQ9N2gPDBGKcLez+WdWH+OLoaJsUHctGU69Y72fdwfoq9DyuU10Kvvc8qdVoDQqFTtyr8YH/IbwVyGyJe2axUwHVrS22NIJa56Gn6Hp7fz/JxE3nAe0viJxWh1cZQudw+fzlbQdD3OBY5NrfhjzyRd3fA0StRsFWr6CyQ8f9JQThbVQNCGh0V1/4mg9Ls0gDUDzBU90R23QPQ4LxuB1dBQNpAsYs8X6OyB3ujXRnAFU+VwOyVa/07Q8VUTnPrhs3KMSRbyYVmi/TWzIyRh4bB0na7XPsMdwJG/FVHQ==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:30:15 GMT; Max-Age=31535000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:49.828Z",
    "insertedDate": "2020-05-03T11:31:49.828Z",
    "key": "2",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "639",
      "date": "Sun, 03 May 2020 11:31:49 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_5_sn_EA8D0CE4058D96318A96D4A1DBED95BC_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=738718986.20480.0000; path=/; Httponly; Secure",
        "bm_sz=321EFC23E835E02D4384425BA6C01D48~YAAQvV3SF0QV1clxAQAAmn9O2gdp1YyD8Y2qBFSE261scM3y5S5/vysL29SvesVmCn+qqFy3VMXyFfXuTIw8cbCgNXhF7DvpJTq1M28erqv0d7b3M/dVLYV6EjX+U9/owTd8QjjLsv0iFo2sg8qeQOaiifiD3XbwJdDWjj32kegZqehIv+Jzq6+VZYF3oZ4Qag==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:49 GMT; Max-Age=14400; HttpOnly",
        "_abck=722CC8444539BD1D48AD70DED1C3A2A7~-1~YAAQvV3SF0UV1clxAQAAmn9O2gMO3cHs9YuNum/Vs+zsrnmomOe7qX+Axk2mnUMIYDUcr4J2/63vKkeqVJ5IiZBbj7ZWCSAzqoEXqPmpdmuX/bXFx3z7j5tU8UdAglT9U6MkAPtQcpnwb6naJUX0qGPSoCQjh/VMTglUIh+mJBOBi6R8idMCMqKNiPRggdQvMKSR4B/kdiC+zeLdvV4q1aBgcWPy2xGx6v8oZ8C9AnJy4oaRI9wy6gsBQtzV0pYMAgsrXoW2bpNclK2W3U+1AoBfte7yj+DRkY1Fy4VODcQ1gZ6ob6+Sgn/ZGA==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:49 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:50.734Z",
    "insertedDate": "2020-05-03T11:31:50.734Z",
    "key": "3",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:50 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_3_sn_395D744BE4D18DBCDA082BDBC699E66D_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=520615178.20480.0000; path=/; Httponly; Secure",
        "bm_sz=538F20E03D076BB5C68A308C0F66F39B~YAAQxl3SFx67+r9xAQAAIoNO2gcTwUsAPjV4i20XrpPxFZBa5LiGqqXzH+Okg2IHki6Hr8Dw3rgKNXdGaKBKDq9hIU784nEKkhBunA3ooW1sDhwA0JOpc0Y1x8X8Nz/gxQLMaYSGPdo9VCO1o3BqC2Z7MHZyNxUH+2sqM9Zs8fC6kFg535QtMT7xsF1aswcqYA==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:50 GMT; Max-Age=14400; HttpOnly",
        "_abck=7C8EC1AB1ED4573B19B162087F163123~-1~YAAQxl3SFx+7+r9xAQAAIoNO2gN4zBqyx9Dl//5G9EUfHL837PiXgAYIH2A3hBm34YfftMGcrA0M9cfe0NQ1q5BKdIcVWTCukCztI3A63cCGqDSq542qTpEAc4Q89PR9WhkCMbWGGEZYW3NbSW1uKvkoioIV0tbMQpY4CMHSEph+Md7OhX5Zg3sq3nWP0ymVFE+M8svcCkHw8PQ3I0EJxZil4vs7+iBVwxSkZCPWulRvy0rZMuB14A8CK/bdrJ8YEZZ/8PvbOfz+UJBTxYN7L/IYcz0ZQEJBypEvnuJ0uEMnLRVbSWdyUKPkbg==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:50 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:50.543Z",
    "insertedDate": "2020-05-03T11:31:50.543Z",
    "key": "4",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:50 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_5_sn_60F1F57D90D0A1C84BCF1CE6B882AAA7_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=738718986.20480.0000; path=/; Httponly; Secure",
        "bm_sz=90B1BDB35C26EEAF3A870EA904D04272~YAAQvV3SF0YV1clxAQAAZoJO2gcb13EI99MpFtH2gVNS1ggEFj/EccwsJpTueVRo3gl5DAQ5a4Q98ng0bdPz/ws7QuyJJcjGqGsGcNRSStoSzFDCCKTzBz+XxAn71Vj9LkZhqQd566Rb/lUh6ktIjB6AKTwCZ7bC+f/c4Ypem3imqgqC2prIlHN2ZjZX9+6b; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:50 GMT; Max-Age=14400; HttpOnly",
        "_abck=B24E343ABDB6CE1155ADA3C4BDBEAB71~-1~YAAQvV3SF0cV1clxAQAAZoJO2gNjx9Ak0wB1BPRlM5tFjNB3BSgKvOeEs21fzCXwe+wH4NJHayeVO58lBQQvMrultGwGV8F0X8y3cVQldxu38fnDDHXNCcwHen8dqHkXGuK9u8djGY2L97lkk6ZNn9i3Br+KAwWGLO09YSyXYEmqAXuHos/V1Fr80FHymo2AA0PN9zVe/kkJYEjpTjlSbo30aGtLDrtzXSoPeYeqnaJFPUSWNMfHd1UbBFME+UYVgUtXjMTWni/z5U+7douX7dtVmg5zFaVRUEiOOlMtq8S2Gw16T3omZHfFZw==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:50 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:50.195Z",
    "insertedDate": "2020-05-03T11:31:50.195Z",
    "key": "5",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "642",
      "date": "Sun, 03 May 2020 11:31:50 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_5_sn_FACEACD05731A4D1096E67485DE6D337_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=453506314.20480.0000; path=/; Httponly; Secure",
        "bm_sz=801E810EDD3ED14770278F65BC359DEF~YAAQxl3SFxq7+r9xAQAACIFO2gepx8PTwTWeRdQRQKAJ2YZRzp7m9jFzQCyKgPjkSsw0zm6ySma75WkP30XYuK8qnYJ3XSkxsQA4Jb2xk0A2beBo8QisfvHed043cyrWastUEM11A5jLdPp+MLqZ6AOASYMhtjJihpGjDJUI02VJrxLLTDMmph45/ziUTw5BLw==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:49 GMT; Max-Age=14399; HttpOnly",
        "_abck=02D91053C8F4BD3434EDC6CD67DE2CF8~-1~YAAQxl3SFxu7+r9xAQAACIFO2gNau57cwjc+FA9rOGNdf2H2ty2JIAbAWb7YKUTJ2OzsxPSUd6MdVThQGK4quZSoDGQ11PNFQaWm6dLxu50Xz9NCoQ7+Syk09uuygPqX2NlRHtt3LjKuuBIZBw5dF8kgiE6DeY44FkF3uGmT78+eSz2gKq0XiJyLc2KdoYfFc+32KrbYd/FeTGaRToWtzJPSXfZnaHaYyP4/JRlILg89xTyoPbdAqV+4qsJhYcp/osjqA26IPXpHdfDtbXKMegp4W7ID9w4/2gXDiMSOGHyZK7ObYwLy6YMUng==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:50 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:50.359Z",
    "insertedDate": "2020-05-03T11:31:50.359Z",
    "key": "6",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "642",
      "date": "Sun, 03 May 2020 11:31:50 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_5_sn_1A8F92801DD6A92D5DFEF2DDDE253773_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=487060746.20480.0000; path=/; Httponly; Secure",
        "bm_sz=DEE8F38CAC56E40031774C6C8701FB73~YAAQxl3SFxy7+r9xAQAArYFO2gc3rQHvXUjT1S3j+HNstUNqcgV/ZogvqsBQaGF4BceI31jsaM/A2wl+dYcR/H6DW8XrMh5BDNp/Ozi+tCsTf4kqAK+3O4MAYk+QPECHuu4nq4RLbgFjEybnjZzRBGa+58dSiOMt35w7BEfTGc3BlVJ9gF6lMcu6I2VDkMcs8A==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:50 GMT; Max-Age=14400; HttpOnly",
        "_abck=DC68C5003F3910EC017472EE0AD9E277~-1~YAAQxl3SFx27+r9xAQAArYFO2gND/COhXGdYlQ+WvYvnJ/UnmSpOW3SSV2UDb+f4J9J/ZNpTDsH53cryy0eceq8gpdK921sSj6wGwyjxXuxJe6Gy6MipI+9en0s/sx4ho+gqoMIrrMFpNev/Fpx88scZVUBfjNuzFB7cS+39Tx74G3vdVt9bly4Z4TWNyQs/LGU0hmnFiKuhPRhdjkL3KS8cuHsC2NY0bnlkFm1boAFHZdbaSkdRVgnsj2YtLPpLy4A0sqoPYiF3Ocer2f5ir+6yZeaHJXQ86C4zZdpCaljDZiV5fMDgGuYHwA==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:50 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:50.008Z",
    "insertedDate": "2020-05-03T11:31:50.008Z",
    "key": "7",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:49 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_6E3F7CCDBE10BB23CC400453590C0376_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=554169610.20480.0000; path=/; Httponly; Secure",
        "bm_sz=977C8AB294983FD3D6A251C8E4264C41~YAAQxl3SFxi7+r9xAQAATYBO2gfaAj74hnKxVcvxAcYtFcmW6dkgrKsHk3lAhLWp22mai8Pm+j4f0C56sp15yapvxSZP1QjPxiLaYZ++zagM2gezF9rHwDeEjm0+ojvpn/8z24qL0rjs249J/yJvZdy22PwrH5eQQUH6RMWWSUuk9+kRnNSXAClz4z0u1YIkRA==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:49 GMT; Max-Age=14400; HttpOnly",
        "_abck=B7F23E10A91EE54C83390BB65B1DC0DD~-1~YAAQxl3SFxm7+r9xAQAATYBO2gMWi1rlsflsOrKS+F9m5zyvK3FyEHkg+2XqY5OYwTNVLx/WUOCSOYUPoOD6nP62liDbCYtEUAqo1McDLB8Dta6rt+U5EWAkh4VNOWBLVN6rUVp4Gg9munkNZno7GdfpROEBx+7kEwhZyOpuDv9sXswv7yPk/pi+5BMSkk1+6D2Lm/jj7fPKoRxVheSAXxBvYcqBekm0Qu21uW0uXoLwHa1FnAesUO4SCqnT7ypFFd54d8ccscQXPAhHOqMV8TpbHei7oH5k/n1EnP2xBtJZmvHJY05lQrmx+w==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:49 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:50.911Z",
    "insertedDate": "2020-05-03T11:31:50.911Z",
    "key": "8",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:50 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_94DE149F5621005F022CAB17C855ECC2_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=503837962.20480.0000; path=/; Httponly; Secure",
        "bm_sz=7B632B119CD6B4ED7530D33D0B8385E3~YAAQxl3SFyC7+r9xAQAA1YNO2geCtMNi9RV49GwRCOSulhi9Ofbr6qEoyc4/TgyBpez46fRYRnGxMHaHTJKguJ3TqkmjA2xs6pC0SVEMqkdB7YkryIP3w+hLV5GaR42Ghf+2y+oM3eiC1MielNkRqh6za2v8HA5v/z5+PvcZR81FwnL43H8upCkri0nnXIvvGg==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:50 GMT; Max-Age=14400; HttpOnly",
        "_abck=D05C09F9841211F438C2F43DF55E3E0D~-1~YAAQxl3SFyG7+r9xAQAA1YNO2gPnDLQb8Ps+9mzOgRAVr4T/j8fAg4yG2kSqnrq9j0m1lKYF16nCyD3rb2daEN/gcUgBvk+OzgwFzzEA0jXRCmtG4Igmga9uvjAFCYkfuJCfToRE0nBHrHJLlySsKW6m0+SJrcmNXfWdEpppjDvw14v5Tvd3SF+53VlqtfWQGFHOLwFO4Yr8vWGSvxuDrjpFakE9VpxaGFmVVAuDz2xOAYhDskO6XpcvhZL0+hlHMOjR7i0yzbKqtkR4tfxtlqzm2dH8eegg3tOkRhmoyidPuYcO9xClC/tT3g==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:50 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:51.094Z",
    "insertedDate": "2020-05-03T11:31:51.094Z",
    "key": "9",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:51 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_6F6AB02EC0C25FE03B791E84ED39695F_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=503837962.20480.0000; path=/; Httponly; Secure",
        "bm_sz=A2E702F7D7BF3AC13F801B813BF78D00~YAAQxl3SFyK7+r9xAQAAi4RO2gcU2KbxDlgnYiIKshmHTlqgxpcqKJAGDy6tQ84QUmBwqr13axPkb+jMUErW1gC6Tl2yY4vzjABVUZIAlyEwq7wxjqaI66/vx7NnVrCr4/DThlxNDsYAtZE2WhUjPPUxR7SaOhmme0HqlyYJWB0mELI3YOhULdDEDrPS+BEfJw==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:50 GMT; Max-Age=14399; HttpOnly",
        "_abck=72DBCB1DEC723AB816FF0BF5A7394390~-1~YAAQxl3SFyO7+r9xAQAAi4RO2gPYoUC98unfeicJSFa9MS8vKNWVRa7G5X2lRAxx6dFs4zdS10/4k9ttYm6AcCpwqI6vDkW9Dy8ILp6yga+xR/uywxk1T7cJ80yqAgj5Zf55seg1dpKfOAK8SwZMEva0NgDehhuDzSHUV1B/YBHhXn8mAWzbIvzKlxCjxRWnQvCGO38GmZgbl/QVZDFUSO2aQHGNCtkMdo+kVkt0g0oA80VKeIKlbreSd3Js/UksS0IFATQUdeTG4Jp2PchiFw3nXA2rMltQu1oMLfWiGI/ZLax4jVhr5XJCfA==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:51 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:51.776Z",
    "insertedDate": "2020-05-03T11:31:51.776Z",
    "key": "10",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "642",
      "date": "Sun, 03 May 2020 11:31:51 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_18AE46AEAF01B6CC8190F386C66E76F9_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=520615178.20480.0000; path=/; Httponly; Secure",
        "bm_sz=484375E5B2B3D64250CBB11BC8682E40~YAAQvV3SF0wV1clxAQAAOIdO2gfBix7NRfssxj2IFek1aHEd9UMk9qi9kPZhZjFdoEIhnFR+Pop4auhignNTeNVRjCn1/IV57IZZ+/gV7hfn12ykJFs27c2yxISu7LkAuXo3NRNe4GjuhbHZZYh3yASXzigXAfBna6TsBJ9MA7Kd1324O3GDx4P56tZYqZuURA==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:51 GMT; Max-Age=14400; HttpOnly",
        "_abck=352E05ECD4DD5CDB0AF01CB69164A085~-1~YAAQvV3SF00V1clxAQAAOIdO2gNt4BznG34Zn5Yqh9Iq4t3ZG+v6BWu7ooM7oMdDnmDnA37JOmkXlH+e0mpJR6vkYju5BMdhMUzVq1CewVzjWapJihR0UNSJpiT1nzfght8Qyl4R98RbnuqhgEcI3JOI9vqACaXKG6gia8r0ZQxJFpNeYQn1FZEYw2vSNJL+lYgl0+F7bgbaFMO6yD8WkIx1qQIc+l4iXesIILdzKK58KAC9n5lGa1yQH2Wm0ry9RWrwmHcXouGvmWrgf3g5n09HJ1Ls/VCo9PXxhKgx1HUkZvr5nIWdA/BCNQ==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:51 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:51.948Z",
    "insertedDate": "2020-05-03T11:31:51.948Z",
    "key": "11",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:51 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_5_sn_8903E01C15971C8B88F5021FFE138084_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=503837962.20480.0000; path=/; Httponly; Secure",
        "bm_sz=CDB0C0201171087EBA2706750A43FADC~YAAQvV3SF04V1clxAQAA5IdO2gfE9X7/SKLdlwdhKLWfiGShDw03v9syYUc6wFcoJNPvuNNflmH9RXcNvmEo5XRtuE6RH1dzsSNX8LWpH+vxuuHeXoA/MPJ4f93JHSnLSdOPrQp0niZtpWwWcaA5llyrKJRE8kojjHeDP+vNjRUq+SXBvsidy13kyXAqBKJIYQ==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:51 GMT; Max-Age=14400; HttpOnly",
        "_abck=B786CF07EE89F062F1455D11C095CD48~-1~YAAQvV3SF08V1clxAQAA5IdO2gNU6E6cyboI1QezVjY0bdzqiTPvG2wdPOm4Mp41ol2+5bzsWcdWBxx0Kt/r1lnGWLCyROmye15PN6lbn5FWOAA3A/PlB3L2UetozsDvQoNkk0qSybxA7rSL2coBmPqNSPGOCLSFIOgrC+Ho5NI6XOVK+mtkKeG+511GqFccNYO57EcymaN3yGtS0GbMH7E7YwZNOKGXNmzIPB/RnW3RJiwIlKXLXEReUhIVU/uj1BXj4/+FUNW0OCZIWtZr45CbTVtIshELt/xGI2K+M+XtXgtiPfVQdXUnqw==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:51 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:51.439Z",
    "insertedDate": "2020-05-03T11:31:51.439Z",
    "key": "12",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "640",
      "date": "Sun, 03 May 2020 11:31:51 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_3_sn_86472FB04E35D3B90510A05B346E80B5_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=688387338.20480.0000; path=/; Httponly; Secure",
        "bm_sz=95F8223953BB444E99341427122A9093~YAAQxl3SFyS7+r9xAQAA5YVO2gcQUfZ5MXPUafWDI4z+OkXRtczXNHFw0iUmXQw2c+d6RM3BjZMFGx2j/ibnthkbpfVcekzKOhj00Gymm9cnfRAsAWCCSiD1/KHGGG0wFqknyzCkLa+RsSuD00Eh4LSCyoXMZPdDRvvKJrV/KY58muBDWR7X7PYbLr3V8YS57g==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:51 GMT; Max-Age=14400; HttpOnly",
        "_abck=A36EB30E1A64C3C23716B549FF164D1A~-1~YAAQxl3SFyW7+r9xAQAA5YVO2gMGOrDa8nBeuCMLxQb726SkvlKjQTSg3goa5HpWANH0n+r+gFrnfOZmNMLDq7v6V7YW46fbw3+7JTTu9IkVS1cxCCGffPkJl+adrdUh+Cnw5zgf1sUXBY3X98i9s9dhn87D/IvacOKcJctv0037UVhuZfhs2nz9gHUR+LcvED/bijxNHCseISt3PYxbllMJdDXT8yoyG3rhP1sgz2XqY6Ua7+eiNABSx9R8KwG5wvTO0Zm8Abrs6nszZMOKlfQdbhSB4fw5HhwQcLAUCuNCM1LTNZJy33BXig==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:51 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:51.258Z",
    "insertedDate": "2020-05-03T11:31:51.258Z",
    "key": "13",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:51 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_57E4D2E0F44EFA48F7A26D62DF8C7A8C_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=470283530.20480.0000; path=/; Httponly; Secure",
        "bm_sz=3C1B1282D6444A54447C3EC6A96D45AE~YAAQvV3SF0gV1clxAQAANIVO2gfL4kdN+qhIK2wxJAY8tdqjyuF3yEnOVDvggTk2OTVxdIa6S/dadjKJSc5E38Vrv7C83zmpHnx+tMCsPo+6ntDmXZCQr+nR5D9a0vy6OHmcuN7o9Mok8rny15ng+aVCocOMUX3BjtSkUuYDhdIkqelWvrdmthKhwd9OjxA89A==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:51 GMT; Max-Age=14400; HttpOnly",
        "_abck=5524D33BDA9B93BE7C21AAFA97FC3C01~-1~YAAQvV3SF0kV1clxAQAANIVO2gOwRTvUlhw7TEKPuEhQpe9vxwlNN4FFzQ0FltdcFpJADagKbOnM2hQSxYzzVM2JSKPQI/NroBfbzsx0ebZqt8XxO7Zr0a2Drf0f/FNBtCEmyhvrXFNUaPLMXP0WIN2lxeGEc098nhGYHD+QA01/nAQ6CbFfMrBqHVOpjUBpzM2vT/It2hqB3tsj/KIRjp2w0JBp7vr+cZ962LG5x8AGoqRPVfrvf+s1620oGD95CVWMvBpz/YhW/JV5RP7iuZ+9jyxjt0KACE2jxVh9at7QcwqboyQa4jDExw==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:51 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:51.617Z",
    "insertedDate": "2020-05-03T11:31:51.617Z",
    "key": "14",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "640",
      "date": "Sun, 03 May 2020 11:31:51 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_3_sn_7667714E74AFA456AAA87DD15061C0C7_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=487060746.20480.0000; path=/; Httponly; Secure",
        "bm_sz=09835D8CB83637DFF13AC73CE24E847B~YAAQvV3SF0oV1clxAQAAkYZO2gf9LHxPrw3/4MVLniOwDwZ0dbr1BTfrh8t44HTvfB2ChaYApExzK1jxk+ByxqiSe+wdITRGnKxlsqxa/Mg05gH+ZWsBPeGAUuA3oUtUMoDKqRTNUMYnPQRYotHbMh9yPRAGuAmo4NpGjw4VbVMQYRbkD2a/dKOw4I3HzGNy+Q==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:51 GMT; Max-Age=14400; HttpOnly",
        "_abck=55E65758EBBF54ECBA73149ED9273E33~-1~YAAQvV3SF0sV1clxAQAAkYZO2gP9dg6yAabMKaeufIaFpOe4nEwzr8JGn2lj4hvCWDVnY11pgh/UuKmJrmk9yDE+SqwgyLQDm2ZuLvE6VjF0/r8eHMwPqvsP6DVUh0jPlIlVFXF8GJO1XK+DcbezdqX+GlmBDWgyhAgnKLOSgrdrxDwk4eHUmWHjYZPYpVTHtb20pCOvIO2wRKTlPa4CIqfOTSCiNrb3XVQakOQG9Agi8HH59qbCzPmU+lzh6RYkO7bATanfQSoztvU1+o0FyrJOxANp7wI4BABZa5hlXyH7wKGIHa0bfBYmqw==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:51 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:52.122Z",
    "insertedDate": "2020-05-03T11:31:52.122Z",
    "key": "15",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "642",
      "date": "Sun, 03 May 2020 11:31:52 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_3_sn_A70C108327D6F03AA999FD14A1758985_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=470283530.20480.0000; path=/; Httponly; Secure",
        "bm_sz=CF565BDBC205675F14EBC8E5C3CE64D3~YAAQvV3SF1AV1clxAQAAkohO2gcTWvbXT2yYc5EwEnTJ/b8bdQDFmPAseaa/FXZkG8woxKf87vd6JaHXd32i8uLKWA6ahhn2hU7EUgMN42nj+h8zSnfrc1k14qa2SQ0UEjY02eNrC5hccF7K8e86sF2iA00mnUEyt5bfBmVMPMe8x/PkqHQGbzqaoPGxM33ikQ==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:51 GMT; Max-Age=14399; HttpOnly",
        "_abck=39A8466E6F41378716B82C1362E6455A~-1~YAAQvV3SF1EV1clxAQAAkohO2gMItsNte4HjG7UFj93r54bqArvJ4LuQ4O6+8mM9c9YqT0QovCAsqFnjDsB4GXHHpsvZZt9odnMHCsYHYlnQSQfKD3kCm5ABMsUBdtMFISbiduIklFc6M0HHk7BVJmShFnKHnSjk7+1po22fjVqO8eUk0MHdpsj32DCBpA3GD0ElQWiyKy+1Y8ejRpvevChCOhS4edlbKwyxhTmDPNXu6p3eOgiqnbotlogU1GOcR2KRXww+Vti7g+4BVV7RaWTkFZWY5dQ5Dvw3JJg90MUXMMUinK1etuWwgw==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:52 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:52.796Z",
    "insertedDate": "2020-05-03T11:31:52.796Z",
    "key": "16",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "642",
      "date": "Sun, 03 May 2020 11:31:52 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_34889CD4B3D3E711583FB51BA515DE1A_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=503837962.20480.0000; path=/; Httponly; Secure",
        "bm_sz=4CB088C1243EFDBC5A3B3FDEBA21A33B~YAAQxl3SFyy7+r9xAQAAM4tO2ge4GZuKtpYPQ0TyRKU9GdiCPwKXP2BvOIEkX6DGJaHyj4cJ8Td6dhqrBB0UU+cb2mZcIpLfvhT/jybLtCrOMg1B/mFZblzVy5qNuQIceo5kibBDZljhmTByVjKIEBxa2V0rWMAASIln1QVwGFpZrMWBwdbo2GenG1DYDD/nyg==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:52 GMT; Max-Age=14400; HttpOnly",
        "_abck=1B4B6214C5F78A7F1B6CC7F80EFD1CDD~-1~YAAQxl3SFy27+r9xAQAAM4tO2gMgGY5ROzcaXiFHyPLF9wvlIt1a9kXD5P5aAkJ+q68LaifUNsWml+UleuZEjznRdIBMTo/A899aY+TQmzkZ0liR5pyCxusCqr32xEj8aW5l+6YesTUjq4xl1P9F+EOSPJkIjPdlXPa+gljHSmuabcjFVnwUoRwtocwSwPJrdCTzm8lQjQwb3HxkkSs8VB02aJvncj0l3K7ng0/VuC2Uz687AD+gcRvGxWhFR51w+AZJIXvpUJGlVwIn5Nd7ya27KBKwjeNh7XVQY5/iyj59b1t1w/WR3C7mrQ==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:52 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:52.961Z",
    "insertedDate": "2020-05-03T11:31:52.961Z",
    "key": "17",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "642",
      "date": "Sun, 03 May 2020 11:31:52 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_5_sn_6D61ACC8E25281AB62CDAF4B6311DCFE_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=520615178.20480.0000; path=/; Httponly; Secure",
        "bm_sz=A0A85164C815C469A0E10778F406E9A8~YAAQvV3SF1IV1clxAQAA2otO2gcyrjCyr98aLjFFTJf6BcbSB5h+HGS4XWOKjsZBw/ZO3FtUCsFSIKHFOicN9bvhLHLpIIQ/CAJFtAOY44kHmWMWgOF9TvEmDELFPpcdR6fcXQ2WHpLX4Pk6Z1W/mrbFrcnMLN24UIlaITeEVAKPN0iTLS29tS4DcE+y/TweQg==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:52 GMT; Max-Age=14400; HttpOnly",
        "_abck=28BC03952688C2E0C390D9F7BA7D1391~-1~YAAQvV3SF1MV1clxAQAA2otO2gPZucU9XfNXmCzOqCDHK7A2/vd6S0qaKtnIIIz0ZgF9GYrwW7jjL5T5Pxqy/Uow1mqjbdVfzcrBxnbJzVVmDULYbuItnaQFIWr7W2SnMRNjpsPY+Ps+t0x2Ln/Ob7K3I246YWJIm/M0Zl/IKx9/nm8xFh/HYspFVdBNOQ/aDuy0/bZqw7lJmYu47RVAh00KpTahn3ngpNLWMXXHO9zbeX1FhYg+gyjgppCIniwo4l/hf+/rPtysVuH8ZoGJkiw/ZGYbPI5FlhlKnUmAYORaAIclkIUfQu2aGQ==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:52 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:52.629Z",
    "insertedDate": "2020-05-03T11:31:52.629Z",
    "key": "18",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:52 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_5_sn_66462E1ED11178FAA6CA5A79C4BC70DE_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=554169610.20480.0000; path=/; Httponly; Secure",
        "bm_sz=25BC92BC6DA615EFD5AEF683021AB96D~YAAQxl3SFyq7+r9xAQAAi4pO2gfe03B/HRBgDeLyHnWM0T/nJj2bB1dAdT8j385uRFtVFNcvBp9fBbNMaZJsL8JSeS0FGZBMLtfdFrgswmuoHOEoad/TIvDxgKFYAf5m7kL/pWYvtylXaWWkqccA1w8kkwH4/1rxAiAJN1kzK3qP1XWOXEzPornuavY7yttbWg==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:52 GMT; Max-Age=14400; HttpOnly",
        "_abck=CEF9448B820854E5919518B708322881~-1~YAAQxl3SFyu7+r9xAQAAi4pO2gMpbtsuZf+4pMS++H4BZGyo/C/iHcEFhYA682ODbMNc4jaCZARnCSv2Wpc3JTGPXBOxIX3G3CrimmBilzxZtI5bat3PMXk9m3tEwR1Qe5d+qVS2RRbh9s3jn1QWw+swCZgHyGyts5hp420YaokiXzrpSnSSXhbd+bMqkc4gYXDLajSKJHB2CDMgSy3qgEciWzjjuRZJs/vk9ulzK51PRRny4J934OGu+1KtcFZ1sDbsAiU7o4bjnbOnnOo+qBMvHcRB0Gu1UFLMqxPziTto+c78mYz1PHGJ2w==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:52 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:52.287Z",
    "insertedDate": "2020-05-03T11:31:52.287Z",
    "key": "19",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "640",
      "date": "Sun, 03 May 2020 11:31:52 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_5_sn_A2B7247170C5D0886F85F766EA42E5A2_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=570946826.20480.0000; path=/; Httponly; Secure",
        "bm_sz=13F3385BBBCE9B7C5CF0FACBD5CE2F5B~YAAQxl3SFya7+r9xAQAANolO2gcVOcA5r8YsDce7qXxGc4dqFqBhHC//s93FUedEcjxnt8ZjNdxGUPLsisXqcm0+FONh9rBg2kVM8iGYf1O+RJSQiFjGwKqBaqKV5n9Y9y3CidMORcnIK8MjmHYrk+rxB7n1fxqS5o05U+NPE+28IhiLPdmXodwprC2KQxSUtg==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:52 GMT; Max-Age=14400; HttpOnly",
        "_abck=3004B13B2506F16925DD65B5F7C36C2A~-1~YAAQxl3SFye7+r9xAQAANolO2gP6HOmFCJX+LnegGBg51sEnUcjZcCCbDWvSHu3GmWVcaOYd0aX11j3M6fuaen+UGNFi9TFLDBXG/Sfd+EUy0gu2BJP+yrRqFByJRbcsnEa2WaKUAZufCAvan79A9mHlszbvQskhXCcsK3Gk/IKjLYOquqxnesjQfq5993qZglehG2li0uu5yi5XaaoR4uM0TzqUToJbvXnVcsiG21kWTUs1QotA/bLG2NBsZbE/N9szyMZT1liUiTCtnZAOrYxFEnkkIo5QAuUL2drYAWyxFfUdZwntbZVsUw==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:52 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:52.463Z",
    "insertedDate": "2020-05-03T11:31:52.463Z",
    "key": "20",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:52 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_5_sn_9FAE7E3F1B23426E668A6B6D842DC625_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=453506314.20480.0000; path=/; Httponly; Secure",
        "bm_sz=2E2FFED8417825BB265C15F1D501F763~YAAQxl3SFyi7+r9xAQAA5YlO2gfxOPPraMSETl4SIABFJXvy0ZF6h8KzRh1LWYAWQwHcZE8FFtiFHdm7VHNT1R7dpSESS6U3vOl+OQxccHwaLSkqb9Fvjuxo0y61FIG8tQTU/BNIHbombXyKvFKQxzuVgK7rPLgSQdpTtCJFwxADfFhQT0XGOOA+niQtbRukZQ==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:52 GMT; Max-Age=14400; HttpOnly",
        "_abck=54F38DA0E002579A8803C786DD2CCBF6~-1~YAAQxl3SFym7+r9xAQAA5YlO2gM2w/pwBJpQ8qMfY/hmanmOW+TAUazX6zhw5rc2ldjxTmdWUQEGcLCiRM+7cJetapC5K9Gw1SgVngLDxCts/b6ZpaSvxMNffMp7KXhKoOuwDq8CxY4dSCvOHckyTE+GxCj0oJ4O0opNzM5RRW+d2GQXOIHwodRJRd5OwX51w7JQbOrud/UhhrVT7eEVmVVOsoMY02q0MgeEjAE1LE+OV2JQLJpcIE7mPu2fLNEOYSBmMzEIR8JO5Foa9Exs8tB0HpvOcLA6X+QH4uejcXhSYZ3xNS/NyycgsQ==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:52 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:53.857Z",
    "insertedDate": "2020-05-03T11:31:53.857Z",
    "key": "21",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:53 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_3_sn_61A6D8CA28C55C3C32BAB927C611B400_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=453506314.20480.0000; path=/; Httponly; Secure",
        "bm_sz=ECE5FA38EF7261D9BF46AC1AB044A855~YAAQvV3SF1oV1clxAQAAWY9O2gdgqacinUdKeXigL3GvOMKyAnivQffpg7x3s5GKSweSS3lGeqYurtK9GxtbmVRudeGq6m9wOVkbe9e5zHKYYzLh4F7ZjxeatY8kv0A4fGo77S0XNd0fQYrt7Sq4Lm8sMTHnyB/DWNLkTJxDg9Kwbrj9GxGzQee+XOFCQXEoaA==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:53 GMT; Max-Age=14400; HttpOnly",
        "_abck=C37C0A52B2525FB2665DA3DB058666D2~-1~YAAQvV3SF1sV1clxAQAAWY9O2gOD+Cyf9F6W8jG/Qaeub3zIdDOuiO/pqOYcJwgseXMIWHSK3C3g9eKBX/600cZSlAphpQhsyTOQ+VP+j1H0O4ifL+VLZ+T+Xxb8RPTeVc5ZgC5+0cjFnNsw0vBjOB7MoC2PdeF8B3OxAbxQ0F6vRWfgncncpfx8iTA5CF2SBI9XhsNYc9p2fT4DAAqzcjxXvQ6f4cFE+nq+y/+OEdoSiBj9HzB05VqvOd/vsKilsBh6OmpOwGwd47agF8IdWygxwYS7DTz2A6A/LUlGHk7V4Dc3y0JTvR7xsg==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:53 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:53.126Z",
    "insertedDate": "2020-05-03T11:31:53.126Z",
    "key": "22",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:53 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_3_sn_E7C29B3D784B94BB089B16D23AB7EDE0_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=738718986.20480.0000; path=/; Httponly; Secure",
        "bm_sz=FF8C3FF56D852A534DBCF4BA55420488~YAAQxl3SFy67+r9xAQAAfYxO2geGpAKzd3gXA6PAUj7rXMS9Be+00hFELgC01bR7uNXD1pyIUBkCBC+LBNthxkX9iHyS96uuUowA2r8FXuLJ/AxOePRV18khR15ldUlJa7/3rw4mzJwVhRQrDQ/DTcyjaoXtjeKelhggBdV2pbA5wqcKoGpYLADrbGa3o6H4tg==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:52 GMT; Max-Age=14399; HttpOnly",
        "_abck=6463AB77475A1331D2DDD2B9B171FB16~-1~YAAQxl3SFy+7+r9xAQAAfYxO2gNW498uR5Eo8nGJpC3zJ+VW7ier988MDZGI6TJWtl1t5gLRcXIv1eJhczUQifr8Op0ONom0BorHRynpt70GHqvxHATv9iPbZ/XqlwZN5+hWBSD22Il7jEsLoYWfoGBIw5YJuHognfNJASQIxnY/fdGrW4ash4twahWsno6MsuDCOMpQ+vA1xKd+m7On2OjZfg3+2UoJ/sdq4nzw22KjOZg3L2cZbW3cMeRVv6ZGdUNrZwiG4hZ6d/CNm4ecoF2slG57KlW62uM0+PPSRGtLLBvp8JHxHNocWA==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:53 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:53.492Z",
    "insertedDate": "2020-05-03T11:31:53.492Z",
    "key": "23",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:53 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_0272A776BB3DC2B7C08BFEF0F43C7A00_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=554169610.20480.0000; path=/; Httponly; Secure",
        "bm_sz=DF51569CF1FD536E2CD84647C4A13B96~YAAQvV3SF1YV1clxAQAA7Y1O2ge6YbeTN2LJEIM28+vVp7q4ylF8qlzf2lu8zURTiAzCzX8J5zkD5n4usnUeO6gy6TbIM+/QhkCoZ6BMusj6UajQ0rqMfb8svZidlHT2bg+qBTD7UFhNSf2iWjb73hodW/aVt2OkrK2t1r/BqACJBq4I8AGL6QK684bbnvN6mw==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:53 GMT; Max-Age=14400; HttpOnly",
        "_abck=912FCD8A62B66F766B628A6266426A38~-1~YAAQvV3SF1cV1clxAQAA7Y1O2gNzJPwhaHnEhFxjfTmp7TdLYOtwj0uVtqJnschusnS2RLemPKuY3DD3zhxkDXQlNTIBvSJ0ws5eMXGjXdor5fMTES0NRl4dvSwYNh+Hsqcsg9QwZF853ggp1Z/9Tm5+4OnsIjRTVClNFJr68LVg5iCIQHUMQOzp7uOBCTaNf92VwkdG/q1qyXtvlJItIwVXA4Y1OzAdgqotqNci6J0G31J/lQOvlWhl4S+wbGkW+8VRfRuHOVZrkRHBbbMT0iHYQGTREofbvqlWL4EdSD0ioobE/Hn2rLKkMQ==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:53 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:53.318Z",
    "insertedDate": "2020-05-03T11:31:53.318Z",
    "key": "24",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:53 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_3_sn_06502DD04AB27A1D1A09E6B218255931_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=688387338.20480.0000; path=/; Httponly; Secure",
        "bm_sz=FE31FB03B02C6651FD5CC4F71B5CE66C~YAAQvV3SF1QV1clxAQAAPo1O2ge9WGFxhCeqgO29lmRx7xLmedM+D1cw/CkVTjiFRVeVgEI7lgOjYsTjnCqX9muQXfqs+MaryDZEAjBrUH+nIiDz7SO3XNRT62zHtBCWPzWWcvNfmOG/wzLNupZmw1BOZSEvleAYY/GclUOOAQPfFo3wweWyXIzW4cW5+163UQ==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:53 GMT; Max-Age=14400; HttpOnly",
        "_abck=1505EB861D69EF49C9819D782EF5D21A~-1~YAAQvV3SF1UV1clxAQAAPo1O2gPQkn6Ka3qHK6xtZwEOohGHm89zQS+A4JUyIgOD+ionnvTwxeiTiHkRVTNRsOsxHkEv8ubTwSGQHtrwVjqM8h80yBAxypzcWURuE3fBlVnV04/mX2JSvK7+AHp57fOnwkURaKpPhhY8oDIQYgRc1Kd4ITlUYip48MEN4M5m/TJUaXVRvLMvN9SzpZ3D7q92951ECC3ykBix1uv9sXpgbWu3gYfkpc95PdgHhVmW4W3R1/rWtWEhCiGliQHfJ6+wGrkUMkAnpo//KGPKLhHVSfH6AXLo8rY1ig==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:53 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:53.672Z",
    "insertedDate": "2020-05-03T11:31:53.672Z",
    "key": "25",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "640",
      "date": "Sun, 03 May 2020 11:31:53 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_895ABD5C66CC4657BDDCFB0E33E16CFE_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=688387338.20480.0000; path=/; Httponly; Secure",
        "bm_sz=563DC08EE4C6500C733220D06E005B22~YAAQvV3SF1gV1clxAQAAoI5O2gewJAzXpScrgYUovrv1vQyFl2tnne/fqpS+57NzOIphreCjLs9c7waoGVnas3hNIigaMmB97ML2kFH3IilcQ8UmfFoYxcP2wdf4FBVOdTm43sWBwujzUuiQpxIlHJ4z9bbY/GJARImtnjgTKTEWyPSK/LUw3PyhMavzMjXT7A==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:53 GMT; Max-Age=14400; HttpOnly",
        "_abck=73D6FF9A61CB76B7D5A3ABDF35494DCA~-1~YAAQvV3SF1kV1clxAQAAoI5O2gNJid5UshY5wTKK5/m08JkxLIuXX5aLkJeZ53HYsd0X0wKrZTKQMoQ2n6cTMNyOJX0r8G8abHjV7fSETVdWdYfjCEVc+Vso9sYKIrFx8TSrDaa96AHRw0AIZfk3yywyP/dgJ3qE/KDWu6/VuAJX/tRPKlSyfzA3zV8vc0ipsjVwURAiyAy1u7195soDTQXEH7sPJp5DccrgmGeDRt1yOtHnRoZ3TPfVz3D6+oWRIxFHiPysWNLvwOfeKV7SdWM7U0qiuRhYsSKq3t+9TjQln0MPDfCyFfqutA==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:53 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:54.437Z",
    "insertedDate": "2020-05-03T11:31:54.437Z",
    "key": "26",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "642",
      "date": "Sun, 03 May 2020 11:31:54 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_21B3A1039B3215B3A363AEE9D6C2A909_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=503837962.20480.0000; path=/; Httponly; Secure",
        "bm_sz=31438F4EFA28F9D8664A0BC57E94E5C1~YAAQvV3SF14V1clxAQAAnpFO2gfbEtcKhfX22t85I4Y2eZKL7WntiqqOMfRcTB41s6bgzHGIv4CBKQ6HBB7HX3n8x221ihQmNBxbP5Bljkg2XLDrPnz3kRsa4FSYpg6lhiE7ObM+DlQDndsQX+UklK/2JO9o++xiK1KRthQ0xkLeROm6FRHbh9AERToZYP8AFw==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:54 GMT; Max-Age=14400; HttpOnly",
        "_abck=E54FDE6CA247CC6022C1AFF1A17A96C8~-1~YAAQvV3SF18V1clxAQAAnpFO2gMP8UOgXNodymXCsNMOz7WfT0P+XaO1NpoTdqrsPXsqFD/RX8oujnIQ1zzbu85QFNUUYikWsAj8kPMKZWB29N1GiAcLc+CoOeth1z5qFSdeeVBmdhszUihcEWpPpwsTInERTGQhGTQKFLoDpyGZX0WJrdIvbdbkD2ss5rkeX2AYK573dfw7cyrGiORd+PKdpY0qaHTk2EPVPq4rcPwQ0PzeZ2H9FVkALTsVSWZHF0xdQ3a5SKnZ7RFurMdZVLW6GaVz8we7l7lusnGIh+FYTYTiV1FVZ0VaoQ==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:54 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:54.830Z",
    "insertedDate": "2020-05-03T11:31:54.830Z",
    "key": "27",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "642",
      "date": "Sun, 03 May 2020 11:31:54 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_1_sn_A29F698BBD65AFCBE8A4ADCA711491F2_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=738718986.20480.0000; path=/; Httponly; Secure",
        "bm_sz=30D751E51B529EE51529866FF3D654D4~YAAQvV3SF2IV1clxAQAAJJNO2geDuQiMA79mlUjmydP1yQ0XwOSSjeemlnb22e2NplrHPrVcyrlKER5GajVScHADc9ZcURC4sfA3rjcrsFJ8ci6uUJiaxUUA7cCkSdgoxLzOw6+OzKuB5duYxEc2LoNA0U4qsB/mnGX+/KU9VCjcP9KBNAxRsfKEI4FPe/LdVA==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:54 GMT; Max-Age=14400; HttpOnly",
        "_abck=95B053597BE181744C8329F82A38B888~-1~YAAQvV3SF2MV1clxAQAAJJNO2gMzrVLJIBHmUN/nIQNTyhj7K/OITBpJJhGqnLdSzx2/6tJZa+tu6RTx1KskP+dSahkRAVi5i7StU8HyW/aHj+Be8nGkRG1m+iUz3p+XGD1YvPFc/px8o29qJRaUZQnpM6KDIiC8d/HnCkmSB7aXi49sq/K5uvmwPX2nwZEnptw0x7PmGwlVqX4hqZaMg0Y+UEBditLx8yqJfXOKF8coJyXGz6CPqx6NogS0zBfWGlW7wPFrStD0ONTfGbN0p5/Y/TU3NuVTImK1LfhVR7PT1JRVKPOB1+lm4Q==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:54 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:54.205Z",
    "insertedDate": "2020-05-03T11:31:54.205Z",
    "key": "28",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "641",
      "date": "Sun, 03 May 2020 11:31:54 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_3_sn_7C07A039554090539E5A9ABF0B97E40D_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=487060746.20480.0000; path=/; Httponly; Secure",
        "bm_sz=0536EC0691792AC07B276E6E3295D8F3~YAAQxl3SFzC7+r9xAQAAtJBO2gei5zlKHQYM/lfKcLxE4qmqOKh3kJBUvVRHvxSDn0Aoij5j1HUkTORNz7D4Mq516ng+BKj4K7jIGrz6y4rQ+tMAXDMMAXVJ+13BP9fr4JLI8ZwpNK9LMnLC2ElSUMTYa8myY6hIJZI0oBM6W5SnkK6e1WFI3h9OB80/yd2PMg==; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:54 GMT; Max-Age=14400; HttpOnly",
        "_abck=C442F6C12CA5DEFF9C5BE98CFA067325~-1~YAAQxl3SFzG7+r9xAQAAtJBO2gObV4xv+4rHqr8RxL+Sg7dHih0WSxFjNVMoBIrIZ1+WKVYPzlBAIr1DysErSe66q7mLFQkUuEhlckSFRJEnwY6+/YC7us1e2E0rIkYTYLirQ2e08BqrJ0ejRmLWaEeUA4nvG7yjGXYxoJ/yHnaFATfZ610UzazaOZEYE7cOHRkljpKekzz4vKzUTXWjd4rN3IW+4PEIRNZHn3+Ln38re7VDX3VKTveWVmYZz0sOcKL9CFbpqMgwT4bWC0J2v9vEm1e6LArYIqHXl4JzvdcYJfyrwHm+m65aqw==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:54 GMT; Max-Age=31536000; Secure"
      ]
    }
  },
  {
    "apiname": "api flight status with sector details",
    "status": 302,
    "method": "GET",
    "updatedDate": "2020-05-03T11:31:54.989Z",
    "insertedDate": "2020-05-03T11:31:54.989Z",
    "key": "29",
    "object": {
      "cache-control": "no-cache, no-store, must-revalidate",
      "pragma": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "expires": "-1",
      "location": "/application/error?aspxerrorpath=/Flight/InfoAEM",
      "x-aspnetmvc-version": "4.0",
      "x-aspnet-version": "4.0.30319",
      "x-powered-by": "ASP.NET",
      "x-ua-compatible": "IE=Edge,chrome=1",
      "x-frame-options": "SAMEORIGIN",
      "access-control-allow-headers": "Content-Type, Content-Range, Content-Disposition, Content-Description, Location, Origin, Accept-Encoding, dnt, DNT",
      "access-control-allow-methods": "GET, PUT, POST, DELETE, OPTIONS",
      "access-control-allow-credentials": "true",
      "p3p": "CP=\"CAO PSA OUR\"",
      "x-oneagent-js-injection": "true",
      "x-ruxit-js-agent": "true",
      "content-length": "639",
      "date": "Sun, 03 May 2020 11:31:54 GMT",
      "connection": "keep-alive",
      "set-cookie": [
        "dtCookie=v_4_srv_3_sn_4F3A6FA43AE58036238E87AAE53BA27B_perc_100000_ol_0_mul_1; Path=/; Domain=.goindigo.in",
        "skysales=570946826.20480.0000; path=/; Httponly; Secure",
        "bm_sz=1DC3107A5CAEDD54C98812B683E16FDB~YAAQvV3SF2QV1clxAQAAxpNO2gdyOyGjL+oraEVZgZXQfkD7KMNrkIUCrG5jE/DE2O4VUQkA6hxmb4pzjGV8ItpZS1MyiGBmYkd/SPNg/NnpDcwSRtZm1uqh1cM+tndP/7mYGjd5dlGK28WoXoOyJVBcqjUCL/beLBzWj2CJvtW65TxIyeKyjYXkqcm0ffVL; Domain=.goindigo.in; Path=/; Expires=Sun, 03 May 2020 15:31:54 GMT; Max-Age=14400; HttpOnly",
        "_abck=F9E8E42B38BC2F8CCD069A831A1BA5A8~-1~YAAQvV3SF2UV1clxAQAAxpNO2gOaAbkcUPPhkefhjjigZvC7cB13jdb6y2zLGklhMyvSa691DIG5SCHXhZXoI86sdNHrytyt3K8YfeoYN2qUB+hk0Y+PVE4L0F+wU1W342eRpg/wN5QwNZxrYVRvH/BStYnJR+tUQyepXiCyGbIo1JHS/BFbM4nvMHgtUAkw8dhom4EA4kBfi/Q5zQsfJkknV9Ad3ISGhug/yeC2Zxw8iagk1ieqlj1Jq1yc8RL6448VTl2W7vgYuoIV7xAYO/PWTvCQx/0pxtdiudKF2kbGpCf1feF9G2uW5A==~-1~-1~-1; Domain=.goindigo.in; Path=/; Expires=Mon, 03 May 2021 11:31:54 GMT; Max-Age=31536000; Secure"
      ]
    }
  }
]
class MyTable extends Component {

  state = {
    visibleModal: false,
    selectedRecord: null,
    errors: {}
  }

  showModal = (record) => {
    this.setState({...this.state, visibleModal: true, selectedRecord: record});
  }

  handleCancel = e => {
    this.setState({
      ...this.state,
      visibleModal: false,
    });
  };

  handleObjectChange = (record) => {

    this.setState({...this.state, selectedRecord: record})
  }

  handleSubmit = (e) => {
    let form = this.formRef;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    this.setState({
      ...this.state,
      visibleModal: false
    })
  }

  handleFormChange = (changedFields) => {
    let selectedRecord = this.state.selectedRecord;
    let errors = {};
    Object.keys(changedFields).forEach((val) => {
      selectedRecord[val] = changedFields[val].value;
      if (changedFields[val].errors) {
        errors[changedFields[val].value] = changedFields[val].errors;
      }
    })
    this.setState({...this.state, selectedRecord, errors})

  }

  transformData = (data) => {
    data.forEach((record) => {
      Object.keys(record).forEach((val) => {
        switch (typeof (record[val])) {
          case "object":
            record[val] = JSON.stringify(record[val]);
            break;
          default:
        }
      });
    })
    return data;
  }

  render() {
    return (
      <div style={{"width": "95%", 'margin': '2em'}}>
        <h2 style={{'textAlign':'center'}}>Indigo Table (Edit table prototype)</h2>
        <Table
          columns={columns}
          bordered
          size="medium"
          dataSource={this.transformData(data)}
          onRow={(record, rowIndex) => ({
            onClick: () => {this.showModal(record)}, // click row          
          })}
        />
        {this.state.visibleModal && (
          <div>
            <MyModal
              title="Edit Record"
              visibleModal={this.state.visibleModal}
              handleCancel={this.handleCancel}
              handleOk={this.handleSubmit}
              handleObjectChange={this.handleObjectChange}
              selectedRecord={this.state.selectedRecord}
              formRef={(form) => (this.formRef = form)}
              handleFormChange={this.handleFormChange}
              errors={this.state.errors}
            />
          </div>
        )}

      </div>
    )
  }
}

export default MyTable;

// onRow={(record, rowIndex) => ({
//   onClick: (event) => { console.log(event, record, rowIndex, "click")}, // click row
//   onDoubleClick: (event) => { console.log(event, record, rowIndex, "double")}, // double click row
//   onContextMenu: (event) => { console.log(event, record, rowIndex, "onContext")}, // right button click row
//   onMouseEnter: (event) => { console.log(event, record, rowIndex, "onMouseEnter")}, // mouse enter row
//   onMouseLeave: (event) => { console.log(event, record, rowIndex, "onMouseLeave")}, // mouse leave row
// })}

