/* worker schedule test data */
/* id, booked, businessId, custId, endDateTime, startDateTime, workerId */
INSERT INTO Worker_Schedule VALUES (1, false, 1, null, '2020-08-18 10:00:00', '2020-08-18 09:00:00', 1);
INSERT INTO Worker_Schedule VALUES (2, false, 1, null, '2020-08-18 11:00:00', '2020-08-18 10:00:00', 1);
INSERT INTO Worker_Schedule VALUES (3, false, 1, null, '2020-08-18 12:00:00', '2020-08-18 11:00:00', 1);
INSERT INTO Worker_Schedule VALUES (4, false, 1, null, '2020-08-18 13:00:00', '2020-08-18 12:00:00', 1);

INSERT INTO Worker_Schedule VALUES (5, false, 1, null, '2020-08-18 10:00:00', '2020-08-18 09:00:00', 2);
INSERT INTO Worker_Schedule VALUES (6, false, 1, null, '2020-08-18 11:00:00', '2020-08-18 10:00:00', 2);
INSERT INTO Worker_Schedule VALUES (7, false, 1, null, '2020-08-18 12:00:00', '2020-08-18 11:00:00', 2);
INSERT INTO Worker_Schedule VALUES (8, false, 1, null, '2020-08-18 13:00:00', '2020-08-18 12:00:00', 2);
INSERT INTO Worker_Schedule VALUES (9, false, 1, null, '2020-08-18 14:00:00', '2020-08-18 13:00:00', 2);

/* id, address, created_at, desc, end_date, mobile_num, name, password, role, start_date, updated_at, username */
INSERT INTO Person VALUES (1, '449 Punt Road, Cremorne', '2020-01-01 00:00:00', 'admin desc',
 '2021-12-31 00:00:00', '9873727793', 'Bob', '123', 'a', '2020-07-30 00:00:00', null, 'BOB77');
INSERT INTO Person VALUES (2, '124 La Trobe St, Melbourne VIC 3000', '2020-01-01 00:00:00', 'worker desc',
 '2021-12-31 00:00:00', '1112223334', 'James', '123', 'w', '2020-07-30 00:00:00', null, 'JAMES');
INSERT INTO Person VALUES (3, 'address1', '2020-10-11 14:24:14.053', null, null, '5555555555', 'person3', 'v', 'c', null, null, 'PID3');
INSERT INTO Person VALUES (4, 'address1', '2020-10-11 14:24:14.053', null, null, '5555555555', 'person4', 'v', 'c', null, null, 'PID4');


INSERT INTO Worker_Schedule VALUES (13, false, 2, null, '2020-08-19 11:00:00', '2020-08-19 10:00:00', 3);
INSERT INTO Worker_Schedule VALUES (14, false, 2, null, '2020-08-19 12:00:00', '2020-08-19 11:00:00', 3);
INSERT INTO Worker_Schedule VALUES (15, false, 2, null, '2020-08-19 11:00:00', '2020-08-19 10:00:00', 4);
INSERT INTO Worker_Schedule VALUES (16, false, 2, null, '2020-08-18 12:00:00', '2020-08-18 11:00:00', 4);
INSERT INTO Worker_Schedule VALUES (17, false, 2, null, '2020-08-18 13:00:00', '2020-08-18 12:00:00', 4);


