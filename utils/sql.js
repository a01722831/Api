//import fs from "fs";
import pg from 'pg';

const config = {
    user: "avnadmin",
    password: "AVNS_ysnEfkWOt9b-CW3fNhJ",
    host: "pg-9679bc2-eotm.d.aivencloud.com",
    port: 21567,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIETTCCArWgAwIBAgIUcIIRnkT1gWWrUhqpzLqkmSmv/cwwDQYJKoZIhvcNAQEM
BQAwQDE+MDwGA1UEAww1NzdhMzhhN2ItNGRhMS00MzlmLTk5ZGEtMTQ3NTM5YTMw
MDhmIEdFTiAxIFByb2plY3QgQ0EwHhcNMjUwMjI4MjMzMDU1WhcNMzUwMjI2MjMz
MDU1WjBAMT4wPAYDVQQDDDU3N2EzOGE3Yi00ZGExLTQzOWYtOTlkYS0xNDc1Mzlh
MzAwOGYgR0VOIDEgUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCC
AYoCggGBAJaIChu750tqIo2PnuDeJJ2MtS3pmsMgzE4lqMI46KiXk56SbRiRunqB
aI+d7BsSic5oSJUqdCg5NMu5qlRHqJ8TKYy5O0XVGoP2yfRm/yt7xqh/LPNhrC2S
H9x6EFedaBZAvqiA2FHIW6ab4A0oSZu8CN75j4mhWZYEPxdeAEJkvh7AleGuzjZ9
3yXI3hXIV5EQ8ZHhjcBY/hO2cM4ZKQkoDGs5GP/TkmEvcDPn5x2Z6Y80Fz3Q+duL
J0tvEe0uaLbpqCYTsYzaR6i2J41PIrF5Qz0yv4DLJqfMVKqTiTieiCZpwwpygr7a
PdTv7qiq3jqEF6W/BSbwFG8JC6fAEuDGT0vlNR3yjJnFkYaDHs6atNI7EEYG6xnD
j7wvUjznUpOido3fYirYGZU/vtQIBn9D8WpqAuB4OO1QiEDefBtnKuoQ7tLx/Pnt
jtnB6UEuYtCbBu/5R0Vu/yYazffbIAXitr/OUgj3EzVLx+9LbZ3G2J3syCcsL0vM
gXLIWy5tiwIDAQABoz8wPTAdBgNVHQ4EFgQUOO+inpeV9YV018qixSQJPCeVMCsw
DwYDVR0TBAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGB
AGLo0IK/t1oZZfvTueFVEzGCme0XrJ8Qo1D4dsbZJO5zl9amMwd8RR4QGGyroAWc
hzmQM0QXXv7EnXEb+pRqy60rSlMKSzWkj060tw1A8UHrRQvHKcA9nbitaFa0gttE
0JQit2LcWSjZ33g6x0LvsEVe72CIi5M62Ew0zImtJMRY+gPXe5q9I9iG1SwcoWkD
fNZgr6lN8Wma5DbTshCvC6Ic66krb4QqJMz1B40m14oDLCwMEDQ1iJHgpKldndTe
7hOTZgehfz7R5LwnJuVfcK1f+urEaDxL8mpxEcrudvs++ji7dODs4jQN0Sp5GuKM
WVci9/MHaHLNf6CEEW8goNL58phDzvBTKMMfQGHXXMH0MhwztYMtQ5h7dfyMaloh
iFSk17RzO2TMbzzUNTeznxONPtByjdSJkKXhWo64NIzjJSpze7nH2B4uGlHe0/cL
JXmPeYTd03zlsRp/3RPDp3zyqVsOt6RqKD7meJk52EK6QZbU2FKt4srlpe6o4k/l
Kw==
-----END CERTIFICATE-----`,
    },
};


export const connectDB=()=> {
    const client = new pg.Client(config);
    client.connect();
    return client;
}


