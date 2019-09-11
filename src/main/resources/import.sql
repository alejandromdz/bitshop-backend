
-- the password hash is generated by BCrypt Calculator Generator(https://www.dailycred.com/article/bcrypt-calculator)
INSERT INTO user (id, username, password, firstname, lastname, email,enabled,address,telephone) VALUES (1, 'user', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Alejandro', 'Mendez','alejandromdz@hotmail.com',1,'965 Sedgwick Street, Lynn, Arizona 5201','+1 (826) 575-2032');
INSERT INTO user (id, username, password, firstname, lastname, email,enabled,address,telephone) VALUES (2, 'admin', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jing', 'Xiao','jingxiao@test.com',1,'203 Amherst Street, Bawcomville, Alabama, 6449','+1 (936) 595-3906');

INSERT INTO authority (id, name) VALUES (1, 'ROLE_USER');
INSERT INTO authority (id, name) VALUES (2, 'ROLE_ADMIN');

INSERT INTO user_authority (user_id, authority_id) VALUES (1, 1);
INSERT INTO user_authority (user_id, authority_id) VALUES (2, 1);
INSERT INTO user_authority (user_id, authority_id) VALUES (2, 2);

INSERT INTO product(id, name) VALUES (1,'Fender Stratocaster Guitar');
INSERT INTO product(id, name) VALUES (2,'Nintendo Switch');

INSERT INTO publication(id, product_id,user_id,title,price, description) VALUES (1,1,1,'Fender Stratocaster',1200,'The Fender Stratocaster is a model of electric guitar designed in 1954 by Leo Fender, Bill Carson, George Fullerton, and Freddie Tavares. The Fender Musical Instruments Corporation has continuously manufactured the Stratocaster from 1954 to the present. It is a double-cutaway guitar, with an extended top "horn" shape for balance.');
INSERT INTO publication_photo(id,URL,publication_id) VALUES(default,'http://www.fmicassets.com/Damroot/ZoomJpg/10001/0144602580_gtr_frt_001_rr.jpg',1);
INSERT INTO publication_photo(id,URL,publication_id) VALUES(default,'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0113010776_gtr_hdstckfrt_001_nr.jpg',1);

INSERT INTO publication(id, product_id,user_id,title,price,description) VALUES (2,2,1,'Nintendo Switch',299,'The Nintendo Switch is the seventh major video game console developed by Nintendo. Known in development by its codename NX, it was unveiled in October 2016 and was released worldwide on March 3, 2017. Nintendo considers the Switch a "hybrid" console; it is designed primarily as a home console, with the main unit inserted onto a docking station to connect to a television. ');
INSERT INTO publication_photo(id,URL,publication_id) VALUES(default,'https://images-na.ssl-images-amazon.com/images/I/716HvoS3BtL._SL1500_.jpg',2);
INSERT INTO publication_photo(id,URL,publication_id) VALUES(default,'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0113010776_gtr_hdstckfrt_001_nr.jpg',2);

INSERT INTO purchase(id,publication_id,buyer_id) VALUES (1,1,2);
INSERT INTO purchase(id,publication_id,buyer_id) VALUES (2,2,2);