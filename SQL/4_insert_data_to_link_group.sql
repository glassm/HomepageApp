INSERT INTO link_group(title) values ('news');
INSERT INTO link_group(title) values ('angular');
INSERT INTO link_group(title) values ('javascript');
INSERT INTO link_group(title) values ('pharmacy');
INSERT INTO link_group(title) values ('doctors');
INSERT INTO link_group(title) values ('spiritual');

INSERT INTO links(fk_group_nr, title, url) values (1, 'CNN', 'http://cnn.com');
INSERT INTO links(fk_group_nr, title, url) values (1, 'MSNBC', 'http://msnbc.com');
INSERT INTO links(fk_group_nr, title, url) values (2, 'Medium.com', 'http://medium.com');
INSERT INTO links(fk_group_nr, title, url) values (2, 'Angular IO', 'http://angular.io');


