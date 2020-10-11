/* worker schedule test data */
/* id, businessId, endDateTime, startDateTime, workerId */
INSERT INTO Worker_Schedule VALUES (1, 1, '2020-08-18 11:00:00', '2020-08-18 09:00:00', 1);
INSERT INTO Worker_Schedule VALUES (13, 1, '2020-08-18 11:00:00', '2020-08-18 09:00:00', 3);
INSERT INTO Worker_Schedule VALUES (2, 1, '2020-08-19 11:00:00', '2020-08-19 09:00:00', 1);
INSERT INTO Worker_Schedule VALUES (3, 1, '2020-08-20 10:30:00', '2020-08-20 09:00:00', 1);
INSERT INTO Worker_Schedule VALUES (4, 1, '2020-08-18 17:00:00', '2020-08-18 13:00:00', 2);
INSERT INTO Worker_Schedule VALUES (9, 1, '2020-08-21 17:00:00', '2020-08-21 16:00:00', 6);
INSERT INTO Worker_Schedule VALUES (10, 1, '2020-08-22 17:00:00', '2020-08-22 16:00:00', 6);
INSERT INTO Worker_Schedule VALUES (11, 1, '2020-08-19 15:00:00', '2020-08-19 12:00:00', 7);
INSERT INTO Worker_Schedule VALUES (12, 1, '2020-08-19 20:00:00', '2020-08-19 17:00:00', 8);

INSERT INTO Worker_Schedule VALUES (5, 2, '2020-08-18 12:00:00', '2020-08-18 10:00:00', 3);
INSERT INTO Worker_Schedule VALUES (6, 2, '2020-08-18 12:00:00', '2020-08-19 10:00:00', 3);
INSERT INTO Worker_Schedule VALUES (7, 2, '2020-08-18 15:00:00', '2020-08-18 12:00:00', 4);
INSERT INTO Worker_Schedule VALUES (8, 2, '2020-08-18 17:00:00', '2020-08-18 09:00:00', 5);

/* id, address, created_at, desc, end_date, mobile_num, name, password, role, start_date, updated_at, username */
INSERT INTO Person VALUES (1, '449 Punt Road, Cremorne', '2020-01-01 00:00:00', 'admin desc',
 '2021-12-31 00:00:00', '9873727793', 'Bob', '123', 'a', '2020-07-30 00:00:00', null, 'BOB77');
INSERT INTO Person VALUES (2, '124 La Trobe St, Melbourne VIC 3000', '2020-01-01 00:00:00', 'worker desc',
 '2021-12-31 00:00:00', '1112223334', 'James', '123', 'w', '2020-07-30 00:00:00', null, 'JAMES');




